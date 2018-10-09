import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';

declare  var $: any;
@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {
  medius = '550px';
  carouselArray: any = [] ;
  constructor(  private indicatorsSliderCarouselItems: ContentType ) {

  }
  ngOnInit() {
    this.getIndicatorsSliderItems();
  }
  getIndicatorsSliderItems()  {
    return this.indicatorsSliderCarouselItems.getContentTypeItems('articles').subscribe(items => {
      this.carouselArray = Object.keys(items).map(function (key) {
          return items[key];
        });
    });
  }

  down() {
    let x = document.querySelector('.anchor');
    if (x) {
       //  x.scrollIntoView({ behavior: 'smooth'});
      x.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
