import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMessage } from '../../../message/components/message/message.component';
import { HttpService } from '../../../services/http/http.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-float-social',
  templateUrl: './float-social.component.html',
  styleUrls: ['./float-social.component.scss']
})
export class FloatSocialComponent implements OnInit {

  contactLabel: string;
  contactMailLabel: string;
  contactMailLink: string;
  socialmedia: any[];
  hide = true;
  title_form: string;
  descrip_form: string;
  footer_text: string;
  footer_contact: string;
  positionSidebar: string;
  dataMessage: DataMessage[];
  private _token: string;
  languagueBrowser: any;
  ruta: any;

  constructor(
    private router: ActivatedRoute,
    private service: CustomCardService, private _http: HttpService
  ) {
    this.socialmedia = [];
    this.dataMessage = [];
  }

  clickOnSubmit(formulario) {

    this.dataMessage = [];
    formulario['webform_id'] = 'how_can_we_help_you';

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

          $('#modal-form')[0].reset();

          this.dataMessage.push(
            {
              visible: true,
              status: 'success',
              message: 'Respuesta satisfactoria'
            }
          );
        }
      });
  }

  ubicar() {
    const x = document.querySelector('.modal-header');
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
    }
  }

  ngOnInit() {

    this.languagueBrowser = this.service.getLanguageBrowser();

    if (this.languagueBrowser !== 'es') {
      this.ruta = '/' + this.languagueBrowser + '/contact-us';
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/contactenos';
    }

    this.getFloatSocialItems();

    this.getModalData();

    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    $(function () {
      $('#openModal').click(function (e) {
        $('a[href$="#contactusModal"]').on('click', function () {
          $('#contactusModal').modal('show');
        });
        e.preventDefault();
      });
    });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    var windowHeight = $(window).height() + $(document).scrollTop();

    var contenido2 = $('#footer-block').offset();
    contenido2 = contenido2.top;

    if (windowHeight >= contenido2) {
      $('#float-social-block').css('transition', 'all 300ms ease');
      $('#float-social-block').css('opacity', '0');
      //this.hide = false;
    } else {
      //this.hide = true;
      $('#float-social-block').css('transition', 'all 300ms ease');
      $('#float-social-block').css('opacity', '1');
    }

    /* if ($(window).height() + $(document).scrollTop() === $(document).height()) {
      this.hide = false;
    } else {
      this.hide = true;
    } */
  }
  getFloatSocialItems() {
    this.service.getCustomCardInformation('contactcard').subscribe((items: { header, others }) => {
      this.socialmedia = items.others;
      if (items.header) {
        this.positionSidebar = items.header[2].data.position;
      }
    });
  }
  getModalData() {
    this.service.getCustomForm('how_can_we_help_you').subscribe(params => {
      this.title_form = params.title['#markup'];
      this.descrip_form = params.subtitle['#markup'];
      this.footer_text = params.top_mensaje_footer['#markup'];
      this.footer_contact = params.botton_footer_message['#markup'];
    });
  }


}
