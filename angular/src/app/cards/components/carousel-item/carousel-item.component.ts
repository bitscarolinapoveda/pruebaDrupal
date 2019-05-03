import { Component, OnInit } from '@angular/core';
import {CustomCardService} from "../../../services/cards/v1-card.services";

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  carouselArray: any[];
  medius = '550px';

  constructor(private _cardService: CustomCardService) {
    this.carouselArray = [];
  }

  ngOnInit() {
    this.getCarouselsItems();
  }

  getCarouselsItems() {
    return this._cardService.getCustomCardInformation('slidercard').subscribe(items => {
      this.carouselArray = items.data;
    });
  }
}
