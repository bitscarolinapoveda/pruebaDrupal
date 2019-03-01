import { Component, OnInit } from '@angular/core';
import {NewsLetter} from "./newsletterModel";

import { CustomCardService } from './../../../../services/cards/v1-card.services';

declare var $: any;

@Component({
  selector: 'app-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss']
})

export class FooterNewsletterComponent implements OnInit {
  footerData: NewsLetter;
  public titleTermsTooltip;
  public bodyTermsTooltip;
  public showTooltip;
  
  constructor(
    private _cardService: CustomCardService,
    private newsletter: CustomCardService
    ) {
  }

  ngOnInit() {
      this.getIndicatorsSliderItems();
  }
  getIndicatorsSliderItems()  {
      this._cardService.getCustomCardInformation('newslettercard').subscribe(items => {
        let title, subtitle, button;
        for(let attr of items.header) {
          let obj = attr.data;
          if(obj.hasOwnProperty('title')){
            title = obj.title;
          }
          else if(obj.hasOwnProperty('subtitle'))
            subtitle = obj.subtitle;
        }
        for(let attr of items.body) {
          let obj = attr.data;
          if(obj.hasOwnProperty('button')){
              button = obj.button;
          }
        }
        this.footerData = {
          title : title,
          subtitle : subtitle,
          button : button,
        }
      });
  }

  getNewsLetterTooltip () {
    return this.newsletter.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(items => {
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
