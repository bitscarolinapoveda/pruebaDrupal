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
  complement: any;
  val_HojaVW: any;
  pais_required: boolean;
  hojav_required: boolean;
  blob: boolean;

  onSubmit(formulario) {

    if (this.captcha_form === 'null' || this.captcha_form === undefined) {
      this.valido = false;
      this.hover_buttom = this.complement[6].data['button_hover_empty'];
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

            this.dataMessage = [];

            jQuery('#formulario_contactoWS')[0].reset();

            this.ngSelectW.active = [];
            this.pais = '';
            this.hojaWU = this.val_HojaVW;

            this.dataMessage.push(
              {
                visible: true,
                status: 'success',
                message: this.complement[5].data['message_success']
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
    this.hover_buttom = '';
    this.hojaWU = '';
    this.languagueBrowser = '';
    this.ruta = '';
    this.complement = [];
    this.val_HojaVW = '';
    this.pais_required = false;
    this.hojav_required = false;
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
      this.ruta = '/' + this.languagueBrowser + '/politics';
      this.getChangeLanguage(this.languagueBrowser);
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/politicas';
      this.getChangeLanguage(this.languagueBrowser);
    }

    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    this.getPopoverService();
    this.getPopoverQuestionService();

    this.getPaises();

    this.getForm();

    this.getComplementForm();

  }

  validFile() {
    if (this.file.blob === '' && this.hojav_required === true) {
      this.blob = false;
      $('label.hoja-v').addClass('ng-pristine ng-invalid ng-touched');
    }

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
                if (campoForm[indexz]['#type'] === 'managed_file') {
                  this.val_HojaVW = campoForm[indexz]['#placeholder'];
                  this.hojaWU = this.val_HojaVW;
                  this.hojav_required = campoForm[indexz]['#required'];
                }
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
      this.hover_buttom = this.complement[6].data['button_hover_empty'];
    });
  }

  getChangeLanguage(lang) {
    setTimeout(function () {
      const language = lang;
      const captchaElm = $(document).find('.captcha').find('iframe');
      if (captchaElm.length) {
        let src = captchaElm.attr('src');
        src = src.replace(/(hl=)[^\&]+/, `$1${language}`);
        captchaElm.attr('src', src);
      }
    }, 2000);
  }

  resolved(captchaResponse: string) {
    this.captcha_form = `${captchaResponse}`;
    this.valido = true;
    this.hover_buttom = this.complement[7].data['button_hover_success'];
  }

  onFileChange(event) {
    if (event.target.files[0] !== undefined) {
      this.file['name'] = event.target.files[0].name;
      this.file['mime'] = event.target.files[0].type;
      this.file['blob'] = '';

      if (event.target.files.length > 0) {
        this.hojaWU = event.target.files[0].name;

        var reader = new FileReader();
        var ourThis = this;
        reader.onloadend = e => {
          $('label.hoja-v').removeClass('ng-pristine ng-invalid ng-touched');
          this.blob = true;
          this.file['blob'] = ourThis._service.base64ArrayBuffer(e.target['result']);
        };
        reader.onerror = e => {
          console.log(e.target['error']);
        };
        reader.readAsArrayBuffer(event.target.files[0]);
      }
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
    if (this.pais !== '') {
      $('#work_with_us__pais .ui-select-container').removeClass('ng-pristine ng-invalid ng-touched');
      this.pais_required = false;
    }
  }

  public removedPais(value: any): void {
    this.pais = '';
  }

  public typedPais(value: any): void {
  }

  public refreshValuePais(value: any): void {
    this.pais = value.text;
    if (this.pais === undefined) {
      $('#work_with_us__pais .ui-select-container').addClass('ng-pristine ng-invalid ng-touched');
      this.pais_required = true;
    }
  }
}
