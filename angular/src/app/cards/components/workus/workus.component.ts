import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { HttpClient } from '@angular/common/http';
import { SelectComponent } from 'ng2-select';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataMessage } from '../../../message/components/message/message.component';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-workus',
  templateUrl: './workus.component.html',
  styleUrls: ['./workus.component.scss'],
  providers: [NgbPopoverConfig]
})
export class WorkusComponent implements OnInit {
  @ViewChild('paisWU') public ngSelectW: SelectComponent;
  @ViewChild('fileInput') hojavWS: ElementRef;

  hidden = false;
  private _token: string;
  usuario: any = {
    nombre: null,
    email: null
  };
  dataMessage: DataMessage[];
  titulo: string;
  list: any[];
  bandPais: Array<string>;
  listPais: Array<string>;
  pais: any;
  hojaWU: any;
  value: any = {};
  _disabledV: string;
  disabled: boolean;
  checked: boolean;
  form: FormGroup;
  file: any = {};
  captcha_form: any;
  valido: boolean;
  tituloQuestion: string;
  listQuestion: any[];
  hover_buttom: string;
  elementoForm: any;
  languagueBrowser: any;
  ruta: any;

  onSubmit(formulario) {

    if (this.captcha_form === 'null' || this.captcha_form === undefined) {
      this.valido = false;
      this.hover_buttom = 'Faltan datos por llenar';
    }

    if (this.valido === true) {
      formulario['fileupload'] = this.file;

      this.dataMessage = [];
      formulario['webform_id'] = 'work_with_us';
      formulario['captcha'] = this.captcha_form;

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

            jQuery('#formulario_contactoWS')[0].reset();

            this.ngSelectW.active = [];
            this.pais = '';
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
  constructor(private _http: HttpService, private _service: CustomCardService,
    private http_pais: HttpClient, private fb: FormBuilder, config: NgbPopoverConfig) {
    this.dataMessage = [];
    this.list = [];
    this.bandPais = [];
    this.listPais = [];
    this._disabledV = '0';
    this.disabled = false;
    this.pais = '';
    this.checked = false;
    this.form = this.fb.group({
      hojav: null
    });
    this.file = {
      name: '',
      mime: '',
      blob: '',
    };
    this.hojaWU = '';
    this.valido = false;
    this.hover_buttom = 'Faltan datos por llenar';
    this.hojaWU = 'Subir Fichero';
    this.languagueBrowser = '';
    this.ruta = '';
  }

  mostrarDatosWS(id) {
    $('#' + id.target.id).addClass('ocultar-placeholder');
  }

  ocultarDatosWS(id) {
    $('#' + id.target.id).removeClass('ocultar-placeholder');
  }

  ngOnInit() {

    this.languagueBrowser = this._service.getLanguageBrowser();

    if (this.languagueBrowser !== 'es') {
      this.ruta = '/' + this.languagueBrowser + '/contact-us';
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/contactenos';
    }

    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    this.getPopoverService();
    this.getPopoverQuestionService();

    this.getPaises();

    this.getForm();

  }

  getForm() {

    this._service.getCustomForm('work_with_us').subscribe(params => {
      let elementLayout = '';
      let listLayout = [];
      // Se obtienen de la respuesta del servicio los layout y elementos del formulario, se almacan en un array.
      for (var index in params) {
        elementLayout = index;
        if (elementLayout === 'fileupload') {
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

  resolved(captchaResponse: string) {
    this.captcha_form = `${captchaResponse}`;
    this.valido = true;
    this.hover_buttom = 'Enviar datos';
  }

  onFileChange(event) {
    this.file['name'] = event.target.files[0].name;
    this.file['mime'] = event.target.files[0].type;
    this.file['blob'] = '';

    if (event.target.files.length > 0) {
      //this.file = event.target.files[0];
      //this.form.get('hojav').setValue(this.file);
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

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
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

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  ubicar() {
    const x = document.querySelector('.tab');
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
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

}
