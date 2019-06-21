import { Component, Input, OnInit } from '@angular/core';
import { NewsLetter } from './newsletterModel';
import { CustomCardService } from './../../../../services/cards/v1-card.services';
import { HttpService } from "../../../../services/http/http.service";
import { DataMessage } from "../../../../message/components/message/message.component";
import { NotificationService } from "../../../../services/shared/notification.service";

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
  message_success: string;
  message_error: string;
  private _token: string;
  visible: boolean = false;

  constructor(
    private _cardService: CustomCardService,
    private newsletter: CustomCardService,
    private _http: HttpService,
    protected _notificationService: NotificationService
  ) {
    this.footerData = {
      title: '',
      subtitle: '',
      button: '',
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
      if(items.header.length>0){
          let title, subtitle, button, message_error, message_success;
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
          this.visible = true;
      }
    });
  }
  getModalCard() {
    this._cardService.getCustomCardInformation('newslettermodalcard').subscribe(items => {
     if (items.header && items.header[0] && items.header[0].data && items.header[0].data.title && items.header[0].data.title != '') {
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
          else if (obj['message_success']) {
            this.message_success = obj.message_success;
          }
          else if (obj['message_error']) {
            this.message_error = obj.message_error;
          }
        }
        this.visible = true;
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
      'name': this.name_value,
      'last_name': this.last_name_value,
      'email': this.email_value,
    };
    this._http.post('v1/newsletterentity/export?_format=json', data, {
      'Content-Type': 'application/json',
      'X-CSRF-Token': this._token
    })
      .subscribe(datos => {
        if (datos.error) {
          for (let key in datos.error) {
            let message = {
              visible: true,
              status: 'error',
              message: this.message_error
            };
            this.dataMessage.push(
              message
            );
          }

        } else if (datos.id) {
          let message = {
            visible: true,
            status: 'success',
            message: this.message_success,
          };
          this._notificationService.success(message.message);
          $('#newsletterModal').modal('hide');
          $('#footernewsletter-form')[0].reset();
        }
      });
  }

}
