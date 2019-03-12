import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { NotificationService } from '../shared/notification.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs';
import { catchError, map, share } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends BaseService {

  public header: HttpHeaders;

  private _in: number; // acumula la cantidad de peticiones solicitadas....
  private _out: number; // acumula la cantidad de peticiones terminadas (done, error)....

  public targetPorcentaje: number; // El valor del porcentaje en el cual debe asumir se "terminó" la carga, default:100
  public allLoaded: boolean; // Indica si ya se llegó al "targetPorcentaje"
  public subscriber: Subject<any>; // Helper para notificar del cumplimiento de "targetPorcentaje"

  constructor(
    protected _http: HttpClient,
    protected _notificationService: NotificationService
  ) {
    super();

    this._in = 0;
    this._out = 0;
    this.allLoaded = false;
    this.targetPorcentaje = 100;
    this.subscriber = new Subject<any>();

    this.header = new HttpHeaders({
      /*'Access-Control-Allow-Origin': '*', //Esto va del lado del servidor...
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'*/
    });
  }

  /***
   * @param url
   * @param header
   * @param options
   */
  public get(url: string, header?: any, options?: any) {
    let objH = {};
    for (let key in header) {
      objH[key] = header[key].toString();
    }
    let headers = new HttpHeaders(objH);
    let _options = {
      headers: headers
    };
    for (let key in options) {
      _options[key] = options[key].toString();
    }
    let _get = this._http.get(this.baseUrl + url, _options)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          return this.errorHandler(err);
        }),
        share()
      );

    this.addIn(_get);

    return _get;
  }

  public post(url: string, body: any, headers?: any) {
    let objH = {};
    for (let key in headers) {
      objH[key] = headers[key].toString();
    }
    let _headers = new HttpHeaders(objH);
    let _post = this._http.post(this.baseUrl + url, body, { headers: _headers })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          return this.errorHandler(err);
        }),
        share()
      );

    return _post;
  }

  // Para el manejo de errores se debe manejar la estructura {code,message}
  public errorHandler(err: any) {
    const error = JSON.parse(JSON.stringify(err));
    const errorParam = {
      code: error.status,
      message: error.message
    };
    this._notificationService.error(errorParam);
    return throwError(err);
  }

  /***
   * Restablece los valores para iniciar una nueva carga
   */
  public resetLoader() {
    this._in = 0;
    this._out = 0;
    this.allLoaded = false;
  }

  /***
   * Genera una "suscripción" para llamar al método de acumulación de "out's"
   * @param get
   */
  private addIn(get) {
    get.subscribe((event) => {
      this.addOut()
    }, (error) => {
      this.addOut()
    });
    this._in++; // Sumar una petición
  }

  /***
   * Agrega un "out" y llama al método checkLoad()
   */
  private addOut() {
    this._out++;// Sumar una petición completada
    this.checkLoad();// Verificar avance
  }

  /***
   * Verifica (comparando los "in's" y "out's") si ya se cumplió el "targetPorcentaje"
   */
  private checkLoad() {
    if (!this.allLoaded) { // Sí ya cargó no es necesario re-evaluar, ver resetLoader()
      if (this._in === 0) // Valida /0
        return;
      let porc = (this._out * 100) / this._in;
      console.log(parseInt(porc.toString()) + '% loaded : get requests');
      if (porc >= this.targetPorcentaje) { // Se cumple el objetivo (targetPorcentaje)
        this.allLoaded = true;
        this.subscriber.next(); // Notifica a los "suscriptores"
      }
    }
  }
}
