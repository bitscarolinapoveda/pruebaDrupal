import { ContentType } from './../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  carouselsArray: any = [];
     medius = '550px';
  constructor(
    private sliderCarouselItems: ContentType,
    ) { }

  ngOnInit() {
    this.getCarouselsItems();
  }

  getCarouselsItems() {
    return this.sliderCarouselItems.getContentTypeItems('articles').subscribe(items => {
      this.carouselsArray = Object.keys(items).map(function (key) {
        return items[key];
      });

    });
  }

}
