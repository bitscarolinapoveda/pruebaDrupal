import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit, Inject } from '@angular/core';
import {CustomCardService} from "../../../services/cards/v1-card.services";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';


@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {

  medius = '550px';
  transition: number;
  public carousel: any[];
  height: any;

  constructor(
    private _cardService: CustomCardService,
    private config: NgbCarouselConfig,
    ) {
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
      this.transition = parseInt(items.header[2].data.transition, 10);
      this.config.interval = this.transition;
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
