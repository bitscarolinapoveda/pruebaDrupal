import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import {CustomCardService} from "../../../services/cards/v1-card.services";

@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {

  medius = '550px';
  public carousel: any[];

  height: any;

  constructor(private _cardService: CustomCardService) {
    this.carousel = [];
    this.height = (window.innerHeight) + 'px';
  }

  ngOnInit() {
    this.getIndicatorsSliderItems();
  }
  getIndicatorsSliderItems()  {
    this._cardService.getCustomCardInformation('slidercard').subscribe(items => {
      items.data = this._cardService.addImageField(items.data, ['field_image']);
      this.carousel = items.data;
    });
  }

  onResize() {
    this.height = (window.innerHeight) + 'px';
  }
  slideDown() {
    const navBarHeight = document.querySelector('.navbar-expand-lg').clientHeight;
    $('html, body').animate({
      scrollTop: window.innerHeight - navBarHeight
    }, 2000);
    return false;
  }
}
