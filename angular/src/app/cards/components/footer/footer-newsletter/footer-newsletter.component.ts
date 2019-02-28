import { Component, OnInit } from '@angular/core';
import {CustomCardService} from "../../../../services/cards/v1-card.services";
import {NewsLetter} from "./newsletterModel";

@Component({
  selector: 'app-footer-newsletter',
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss']
})

export class FooterNewsletterComponent implements OnInit {
    footerData: NewsLetter;
    constructor(private _cardService: CustomCardService) {
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

}
