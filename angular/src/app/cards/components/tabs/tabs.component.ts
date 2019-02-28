import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ContactUsComponent } from 'src/app/main/pages/contact-us/contact-us.component';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { DataMessage } from '../message/message.component';

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
  list: [];

  constructor(private _http: HttpService, private _service: CustomCardService) {
    this.dataMessage = [];
    this.list = [];
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
