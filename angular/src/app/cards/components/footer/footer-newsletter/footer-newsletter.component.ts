import {Component, Input, OnInit} from '@angular/core';
import { NewsLetter } from './newsletterModel';
import { CustomCardService } from './../../../../services/cards/v1-card.services';
import {HttpService} from "../../../../services/http/http.service";
import {DataMessage} from "../../message/message.component";

declare var $: any;

@Component({
  selector: 'app-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss']
})

export class FooterNewsletterComponent implements OnInit {
    dataMessage: DataMessage[];
    footerData: NewsLetter;
  public titleTermsTooltip;
  public bodyTermsTooltip;
  public showTooltip;
  titleNewsletter: string;
  descriptionNewsletter: string;
  nameInput: string;
  nameInputPlaceholder: string;
  lastNameInput: string;
  lastNameInputPlaceholder: string;
  emailInput: string;
  emailInputPlaceholder: string;
  linkTerms: string;
  labelTerms: string;
  buttonSendNewsletter: string;
  name_value: string;
  last_name_value: string;
  email_value: string;
  private _token: string;

  constructor(
    private _cardService: CustomCardService,
    private newsletter: CustomCardService,
    private _http: HttpService,
  ) {
    this.footerData = {
      title: '',
      subtitle: '',
      button: ''
    };
  }

  ngOnInit() {
      this.dataMessage = [];
      this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
          this._token = response;
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
    this.getIndicatorsSliderItems();
    this.getModalCard();
  }
  getIndicatorsSliderItems() {
    this._cardService.getCustomCardInformation('newslettercard_2').subscribe(items => {
      let title, subtitle, button;
      for (let attr of items.header) {
        let obj = attr.data;
        if (obj['title']) {
          title = obj.title;
        } else if (obj['subtitle'])
          subtitle = obj.subtitle;
      }
      for (let attr of items.body) {
        let obj = attr.data;
        if (obj['button']) {
          button = obj.button;
        }
      }
      this.footerData = {
        title: title,
        subtitle: subtitle,
        button: button,
      };
    });
  }
  getModalCard() {
    this._cardService.getCustomCardInformation('newslettermodalcard').subscribe(items => {
      this.titleNewsletter = items.header[0].data.title;
      this.descriptionNewsletter = items.header[1].data.subtitle;
      for (let attr of items.body) {
        let obj = attr.data;
        if (obj['name']) {
          this.nameInput = obj.name;
        } else if (obj['name_description']) {
          this.nameInputPlaceholder = obj.name_description;
        } else if (obj['last_name']) {
          this.lastNameInput = obj.last_name;
        } else if (obj['last_name_description']) {
          this.lastNameInputPlaceholder = obj.last_name_description;
        } else if (obj['email']) {
          this.emailInput = obj.email;
        } else if (obj['email_description']) {
          this.emailInputPlaceholder = obj.email_description;
        } else if (obj['link']) {
          this.linkTerms = obj.link;
        } else if (obj['label']) {
          this.labelTerms = obj.label;
        } else if (obj['button']) {
          this.buttonSendNewsletter = obj.button;
        }
      }

    });
  }

  getPopoverService() {
    this.newsletter.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(params => {
      this.titleTermsTooltip = params.title;
      this.bodyTermsTooltip = params.body;
    });
  }
  clickOnSubmit() {
      let data = {
        'name' : this.name_value,
        'last_name': this.last_name_value,
        'email': this.email_value,
      };
      debugger;
      this._http.post('v1/newsletterentity/export?_format=json', data, {
          'Content-Type': 'application/json',
          'X-CSRF-Token': this._token
      })
          .subscribe(datos => {
              if (datos.error) {
                  for (let key in datos.error) {
                      this.dataMessage.push(
                          {
                              visible: true,
                              status: 'error',
                              message: datos.error[key]
                          }
                      );
                  }

              } else if (datos.id) {
                  debugger;
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

}
