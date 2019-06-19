import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SelectComponent } from 'ng2-select';
import { DataMessage } from '../../../message/components/message/message.component';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.scss']
})
export class PqrsComponent implements OnInit {
  @ViewChild('paisPQ') public ngSelectPQ: SelectComponent;
  @ViewChild('departPQ') public ngSelectDE: SelectComponent;
  private _token: string;
  datos: string[];
  dataMessage: DataMessage[];
  titulo: string;
  list: any[];
  tituloQuestion: string;
  listQuestion: any[];
  bandTipo: Array<string>;
  listTipo: Array<string>;
  bandPais: Array<string>;
  listPais: Array<string>;
  pais: any;
  tipo: any;
  descrip_form: string;
  checked: boolean;
  nombre: string;
  hover_buttom: string;
  value: any = {};
  _disabledV: string;
  disabled: boolean;
  captcha_form: any;
  valido: boolean;
  elementoForm: any;
  type: any;
  file: any = {};
  hojaWU: any;
  form: FormGroup;
  ruta: any;
  languagueBrowser: any;
  titlePrincipal: any;
  descripPrincipal: any;
  complement: any;

  constructor(private _http: HttpService, private _service: CustomCardService, private http_pais: HttpClient, config: NgbPopoverConfig, private fb: FormBuilder,
    private rutaActiva: ActivatedRoute) {
    this.dataMessage = [];
    this.list = [];
    this.listQuestion = [];
    this.bandTipo = [];
    this.listTipo = [];
    this.bandPais = [];
    this.listPais = [];
    this._disabledV = '0';
    this.disabled = false;
    this.pais = '';
    this.tipo = '';
    this.checked = false;
    this.valido = false;
    this.hover_buttom = 'Faltan datos por llenar';
    this.file = '';
    this.hojaWU = '';
    this.hojaWU = 'Subir Fichero';
    this.form = this.fb.group({
      hojav: null
    });
    this.ruta = '';
    this.languagueBrowser = '';
    this.titlePrincipal = '';
    this.descripPrincipal = '';
    this.file = {
      name: '',
      mime: '',
      blob: '',
      };
    this.complement = [];
  }

  mostrarDatos(id) {
    $('#' + id.target.id).addClass('ocultar-placeholder');
  }

  ocultarDatos(id) {
    $('#' + id.target.id).removeClass('ocultar-placeholder');
  }

  onSubmit(formulario) {
    if (this.captcha_form === 'null' || this.captcha_form === undefined) {
      this.valido = false;
      this.hover_buttom = 'Faltan datos por llenar';
    }

    if (this.valido === true) {
      formulario['adjunto'] = this.file;
      console.log(this.file);
      this.dataMessage = [];
      formulario['webform_id'] = 'pqrsf';
      formulario['captcha'] = this.captcha_form;
      console.log(formulario);

      this._http.post('webform_rest/submit?_format=json', formulario, { // Hace el submit del formulario a Drupal
        'Content-Type': 'application/json',
        'X-CSRF-Token': this._token
      })
        .subscribe(datos => {
          this.ubicar();
          if (datos.error) {
            for (var key in datos.error) {
              this.dataMessage.push(
                {
                  visible: true,
                  status: 'error',
                  message: datos.error[key]
                }
              );
            }

          } else if (datos.sid) {

            $('#formulario_contacto')[0].reset();

            this.ngSelectPQ.active = [];
            this.ngSelectDE.active = [];

            this.pais = '';
            this.tipo = '';
            this.hojaWU = 'Subir Fichero';

            this.dataMessage.push(
              {
                visible: true,
                status: 'success',
                message: 'Formulario de contacto enviado exitosamente. Nos podremos en contacto con usted!'
              }
            );
          }
        });
    } else {
      this.dataMessage = [];
    }

  }

  ngOnInit() {

    this.type = this.rutaActiva.snapshot.params.type;

    this.languagueBrowser = this._service.getLanguageBrowser();

    if (this.languagueBrowser !== 'es') {
      this.ruta = '/' + this.languagueBrowser + '/politics';
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/politicas';
    }


    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    this.getPopoverService();

    this.getPopoverQuestionService();

    this.getForm();

    this.getPaises();

    this.getDataTitle();

    $('#float-social-block').removeClass('ocultar-phone');

    this.getComplementForm();
  }

  resolved(captchaResponse: string) {
    this.captcha_form = `${captchaResponse}`;
    this.valido = true;
    this.hover_buttom = 'Enviar datos';
  }

  getPopoverService() {
    this._service.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(params => {
      this.titulo = params.title;
      this.list = params.body;
    });
  }

  getPopoverQuestionService() {
    this._service.getCustomContentBasicPage('dc60d310-0a96-41a3-9522-951af2b9f340').subscribe(params => {
      this.tituloQuestion = params.title;
      this.listQuestion = params.body;
    });
  }

  getDataTitle() {
    this._service.getCustomCardInformation('pqrsbitsamericas').subscribe(params => {
      this.titlePrincipal = params.header[0].data.title;
      this.descripPrincipal = params.header[1].data.sub_title;
    });
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  ubicar() {
    const x = document.querySelector('app-banner');
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
    }
  }

  getForm() {
    this._service.getCustomForm('pqrsf').subscribe(params => {
      let elementLayout = '';
      let listLayout = [];
      // Se obtienen de la respuesta del servicio los layout y elementos del formulario, se almacan en un array.
      for (var index in params) {
        elementLayout = index;
        if (elementLayout === 'adjunto') {
          listLayout.push(params[index]);
        } else if (elementLayout.indexOf('#') == -1) {
          listLayout.push(params[index]);
        }
      }
      // Se insertan en el array listLayout los campos del formulario que pertenecen a cada layout y los que no pertenecen
      for (var index in listLayout) {
        let campoForm = [];
        let cont = 0;
        if (listLayout[index]) {
          if (listLayout[index]['#type'] !== 'managed_file') {
            for (var indexj in listLayout[index]) {
              if (indexj.indexOf('#') == -1) {
                cont++;
                campoForm.push(listLayout[index][indexj]);
                if (listLayout[index][indexj]['#webform_id'] == "pqrsf--tipo_solicitante") {
                  this.listTipo = listLayout[index][indexj]['#autocomplete_items'];
                }
              }
            }
            if (cont != 0) {
              listLayout[index] = [];
              for (var indexz in campoForm) {
                listLayout[index].push(campoForm[indexz]);
              }
            }
          }
        }
        // Array de campos que conforman el formulario
        this.elementoForm = listLayout;
      }
    }
    );
  }

  getComplementForm() {
    this._service.getCustomCardInformation('complementsformbitsamericas').subscribe(params => {
      this.complement = params.header;
    });
  }

  onFileChange(event) {
    console.log(event.target.files[0]);
    
    this.file['name'] = event.target.files[0].name;
    this.file['mime'] = event.target.files[0].type;
    this.file['blob'] = '';

    if (event.target.files.length > 0) {
      this.hojaWU = event.target.files[0].name;

      var reader = new FileReader();
      var ourThis = this;
      reader.onloadend = e => {
        this.file['blob'] = ourThis._service.base64ArrayBuffer(e.target['result']);
      };
      reader.onerror = e => {
        console.log(e.target['error']);
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  }

  getPaises() {
    this.http_pais.get<any[]>('https://restcountries.eu/rest/v2/all').subscribe(params => {
      for (let index = 0; index < params.length; index++) {
        this.bandPais.push(params[index].name);
      }
      this.listPais = this.bandPais;
    });
  }

  // Metodos del select
  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selectedPais(value: any): void {
    this.pais = value.text;
  }

  public removedPais(value: any): void {
    this.pais = '';
  }

  public typedPais(value: any): void {
  }

  public refreshValuePais(value: any): void {
    this.pais = value.text;
  }

  public selectedTipo(value: any): void {
    this.tipo = value.text;
  }

  public removedTipo(value: any): void {
    this.tipo = '';
  }

  public typedTipo(value: any): void {
  }

  public refreshValueTipo(value: any): void {
    this.tipo = value.text;
  }

}
