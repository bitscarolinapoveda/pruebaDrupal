import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { NotificationService } from '../shared/notification.service';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class HttpService extends BaseService {

  constructor( protected _http: HttpClient, protected _notificationService: NotificationService) {
    super();
  }

   public get(url: string) {
     return this._http.get(this.baseUrl + url).map((resp: any) => {
      return resp;
    }).catch(err => {
      return this.errorHandler(err);
    });
   }

   // Para el manejo de errores se debe manejar la estructura {code,message}
   public errorHandler (err: any) {
    const error = JSON.parse(JSON.stringify(err));
    const errorParam = {
      code: error.status,
      mesagge: error.message
    };
    this._notificationService.error( errorParam );
    return Observable.throw( err );
   }
}
