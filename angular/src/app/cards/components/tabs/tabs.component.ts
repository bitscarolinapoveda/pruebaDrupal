import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ContactUsComponent } from 'src/app/main/pages/contact-us/contact-us.component';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { DataMessage } from '../message/message.component';
import { pureObjectDef } from '@angular/core/src/view';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
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
  bandProduct: Array<string>;
  listProduct: Array<string>;
  bandService: Array<string>;
  listService: Array<string>;
  bandPais: Array<string>;
  listPais: Array<string>;
  pais: any;

  private value: any = {};
  private _disabledV: string;
  private disabled: boolean;

  constructor(private _http: HttpService, private _service: CustomCardService, private http_pais: HttpClient) {
    this.dataMessage = [];
    this.list = [];
    this.bandProduct = [];
    this.listProduct = [];
    this.bandService = [];
    this.listService = [];
    this.bandPais = [];
    this.listPais = [];
    this._disabledV = '0';
    this.disabled = false;
  }

  toogleHidden() {
    this.dataMessage = [];
    this.hidden = !this.hidden;
  }

  onSubmit(formulario) {
    this.dataMessage = [];
    console.log(formulario);
    formulario['webform_id'] = 'contact_us';
    $('#formulario_contacto')[0].reset();


    /* $('#msj-modal').show();
    $('.close').click(function () {
      $('#msj-modal').hide();
    }); */

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
          this.dataMessage.push(
            {
              visible: true,
              status: 'success',
              message: 'Respuesta satisfactoria'
            }
          );
        }
        // formulario.form.reset();
      });
  }

  ngOnInit() {

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

    this.getPopoverService();

    this.getDatosForm();

    this.getPaises();

    $(function () {
      $('[data-toggle="popover"]').popover(
        {
          html: true,
          title: function () {
            return $('#popover-title').html();
          },
          content: function () {
            return document.getElementById('popover-content').innerHTML;
          }
        }
      ).click(function (e) {
        e.preventDefault();
      });
    });
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
    console.log(x);
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
    }
  }

  getDatosForm() {
    this._service.getCustomCardInformation('allproductsandservicescard').subscribe(params => {
      for (let index = 0; index < params.data.length; index++) {
        if (params.data[index].type === 'product') {

          this.bandProduct.push(params.data[index].label);
        } else if (params.data[index].type === 'service') {
          this.bandService.push(params.data[index].label);
        }
      }
      this.listProduct = this.bandProduct;
      this.listService = this.bandService;

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

  public selected(value: any): void {
    this.pais = value;
    console.log('Selected value is: ', value);
    this.removed(this.pais);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

}

//     arrayTabs:Tab[] = [];
//     ids:number = 0;
//     size:number;

//     constructor(
//         private https: CustomCardService,
//     ) {}

//     ngOnInit() {

//     }

//     mostrar(link:number){
//         this.ids = link;
//         console.log(this.ids);
//     }
// }

// export interface Tab{
//     titulo:string;
//     icontab:string;
//     urlicon:string;
//     alticon:string;
//     contenido:string;
// }
