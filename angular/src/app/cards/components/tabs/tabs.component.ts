import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ContactUsComponent } from 'src/app/main/pages/contact-us/contact-us.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { pureObjectDef } from '@angular/core/src/view';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SelectComponent } from 'ng2-select';
import { DataMessage } from '../../../message/components/message/message.component';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { resolve } from 'url';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [NgbPopoverConfig]
})

export class TabsComponent implements OnInit {
  @ViewChild('paisTB') public ngSelectP: SelectComponent;
  @ViewChild('serviceTB') public ngSelectS: SelectComponent;
  @ViewChild('productTB') public ngSelectPR: SelectComponent;
  hidden = false;
  private _token: string;
  usuario: any = {
    nombre: null,
    email: null
  };
  datos: string[];
  dataMessage: DataMessage[];
  title_a: string;
  title_b: string;
  titulo: string;
  list: any[];
  tituloQuestion: string;
  listQuestion: any[];
  bandProduct: Array<string>;
  listProduct: Array<string>;
  bandService: Array<string>;
  listService: Array<string>;
  bandPais: Array<string>;
  listPais: Array<string>;
  pais: any;
  product: any;
  service: any;
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
  languagueBrowser: any;
  ruta: any;
  complement: any;
  pais_required: boolean;
  service_required: boolean;
  product_required: boolean;


  constructor(private _http: HttpService, private _service: CustomCardService, private http_pais: HttpClient, config: NgbPopoverConfig,
    private rutaActiva: ActivatedRoute) {
    this.dataMessage = [];
    this.list = [];
    this.listQuestion = [];
    this.bandProduct = [];
    this.listProduct = [];
    this.bandService = [];
    this.listService = [];
    this.bandPais = [];
    this.listPais = [];
    this._disabledV = '0';
    this.disabled = false;
    this.pais = '';
    this.product = '';
    this.service = '';
    this.checked = false;
    this.valido = false;
    this.hover_buttom = '';
    this.languagueBrowser = '';
    this.ruta = '';
    this.complement = [];
    this.pais_required = false;
    this.service_required = false;
    this.product_required = false;
  }

  mostrarDatos(id) {
    $('#' + id.target.id).addClass('ocultar-placeholder');
  }

  ocultarDatos(id) {
    $('#' + id.target.id).removeClass('ocultar-placeholder');
  }

  toogleHidden() {
    this.dataMessage = [];
    this.hidden = !this.hidden;
  }

  onSubmit(formulario) {

    if (this.captcha_form === 'null' || this.captcha_form === undefined) {
      this.valido = false;
      this.hover_buttom = this.complement[6].data['button_hover_empty'];
    }

    if (this.valido === true) {
      this.dataMessage = [];
      formulario['webform_id'] = 'contact_us';
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

            $('#formulario_contacto')[0].reset();

            this.ngSelectP.active = [];
            this.ngSelectS.active = [];
            this.ngSelectPR.active = [];

            this.pais = '';
            this.product = '';
            this.service = '';

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

  ngOnInit() {

    this.type = this.rutaActiva.snapshot.params.type;

    if (this.type !== undefined) {
      $('.trabaje button').toggleClass('active');
      $('.contactenos button').toggleClass('active');
    }

    this.languagueBrowser = this._service.getLanguageBrowser();

    if (this.languagueBrowser !== 'es') {
      this.ruta = '/' + this.languagueBrowser + '/politics';
      this.getChangeLanguage(this.languagueBrowser);
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/politicas';
      this.getChangeLanguage(this.languagueBrowser);
    }


    this.getTabsData();

    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    $('.trabaje').on('click', function () {
      $('.trabaje button').toggleClass('active');
      $('.contactenos button').toggleClass('active');
    });
    $('.contactenos').on('click', function () {
      $('.trabaje button').toggleClass('active');
      $('.contactenos button').toggleClass('active');
    });
    // HACK SAFARI
    $(".terminos_grupo [type='checkbox']+label a ").click(function () {
      $(this).css("color", "blue");
    });

    this.getPopoverService();
    this.getPopoverQuestionService();

    this.getForm();

    this.getDatosForm();

    this.getPaises();

    this.getComplementForm();

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

  getTabsData() {
    this._service.getCustomCardInformation('howcanwehelpyoucard').subscribe(items => {
      this.title_a = items.body[0].data.text_form_left;
      this.title_b = items.body[2].data.text_form_right;
    });
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
    const x = document.querySelector('.tab');
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
    }
  }

  getForm() {
    this._service.getCustomForm('work_with_us').subscribe(params => {
      this.descrip_form = params.markup['#markup'];
    });

    this._service.getCustomForm('contact_us').subscribe(params => {
      let elementLayout = '';
      let listLayout = [];
      // Se obtienen de la respuesta del servicio los layout y elementos del formulario, se almacan en un array.
      for (var index in params) {
        elementLayout = index;
        if (elementLayout.indexOf('#') == -1) {
          listLayout.push(params[index]);
        }
      }
      // Se insertan en el array listLayout los campos del formulario que pertenecen a cada layout y los que no pertenecen
      for (var index in listLayout) {
        let campoForm = [];
        let cont = 0;
        if (listLayout[index])
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
        // Array de campos que conforman el formulario
        this.elementoForm = listLayout;
      }
    }
    );
  }

  getDatosForm() {
    this._service.getCustomCardInformation('allproductsandservicescard_2').subscribe(params => {
      for (let index = 0; index < params.data.length; index++) {
        // Cuando es un producto
        if (params.data[index].field_type[0].uuid === '7105bc2b-1dde-4877-9e67-2aa8e3c9c999') {
          this.bandProduct.push(params.data[index].title);
          // Cuando es un servicio
        } else if (params.data[index].field_type[0].uuid === '0494c41b-7483-4df0-8ff8-af4744ce623c') {
          this.bandService.push(params.data[index].title);
        }
      }
      this.listProduct = this.bandProduct;
      this.listService = this.bandService;

    });
  }

  getComplementForm() {
    this._service.getCustomCardInformation('complementsformbitsamericas').subscribe(params => {
      this.complement = params.header;
      this.hover_buttom = this.complement[6].data['button_hover_empty'];
    });
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
      $('#contact_us__pais .ui-select-container').removeClass('ng-pristine ng-invalid ng-touched');
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
      $('#contact_us__pais .ui-select-container').addClass('ng-pristine ng-invalid ng-touched');
      this.pais_required = true;
    }
  }

  public selectedProduct(value: any): void {
    this.product = value.text;
    if (this.product !== '') {
      $('#contact_us__product .ui-select-container').removeClass('ng-pristine ng-invalid ng-touched');
      this.product_required = false;
    }
  }

  public removedProduct(value: any): void {
    this.product = '';
  }

  public typedProduct(value: any): void {
  }

  public refreshValueProduct(value: any): void {
    this.product = value.text;
    if (this.product === undefined) {
      $('#contact_us__product .ui-select-container').addClass('ng-pristine ng-invalid ng-touched');
      this.product_required = true;
    }
  }

  public selectedService(value: any): void {
    this.service = value.text;
    if (this.service !== '') {
      $('#contact_us__service .ui-select-container').removeClass('ng-pristine ng-invalid ng-touched');
      this.service_required = false;
    }
  }

  public removedService(value: any): void {
    this.service = '';
  }

  public typedService(value: any): void {
  }

  public refreshValueService(value: any): void {
    this.service = value.text;
    if (this.service === undefined) {
      $('#contact_us__service .ui-select-container').addClass('ng-pristine ng-invalid ng-touched');
      this.service_required = true;
    }
  }

}
