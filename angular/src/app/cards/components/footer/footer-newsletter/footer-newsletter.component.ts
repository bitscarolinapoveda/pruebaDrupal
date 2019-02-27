import { Component, OnInit } from '@angular/core';
import { CustomCardService } from './../../../../services/cards/v1-card.services';

declare var $: any;

@Component({
  selector: 'app-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss']
})
export class FooterNewsletterComponent implements OnInit {
  public titleNewsletter;
  public descriptionNewsletter ;
  public nameInput;
  public nameInputPlaceholder;
  public lastNameInput;
  public lastNameInputPlaceholder;
  public emailInput;
  public emailInputPlaceholder;
  public linkTerms;
  public labelTerms;
  public buttonSendNewsletter;
  public titleTermsTooltip;
  public bodyTermsTooltip;
  public showTooltip;

  constructor(
    private newsletter: CustomCardService,
  ) { }

  ngOnInit() {

    this.getNewsLetterInfo ();
    this.getNewsLetterTooltip ();
  }

  getNewsLetterInfo () {
    return this.newsletter.getCustomCardInformation('newslettermodalcard').subscribe(items => {
      this.titleNewsletter = items.header[0].data.title;
      this.descriptionNewsletter = items.header[1].data.subtitle;

      this.nameInput = items.body[0].data.name;
      this.nameInputPlaceholder = items.body[1].data.name_description;
      this.lastNameInput = items.body[2].data.last_name;
      this.lastNameInputPlaceholder = items.body[3].data.last_name_description;
      this.emailInput = items.body[4].data.email;
      this.emailInputPlaceholder = items.body[5].data.email_description;

      this.linkTerms = items.body[6].data.link;
      this.labelTerms = items.body[6].data.label;
      this.buttonSendNewsletter = items.body[7].data.button;
    });
  }
  getNewsLetterTooltip () {
    return this.newsletter.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(items => { 
      console.log(items);
      this.titleTermsTooltip = items.title;
      this.bodyTermsTooltip = items.body;
    });
  }
  showModalOnHover () {
    this.showTooltip = true;
  }
  hideModalWithoutHover () {
    this.showTooltip = false;
  }
}
