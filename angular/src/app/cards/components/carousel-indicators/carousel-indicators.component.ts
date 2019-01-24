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

  height: any;
  carousel: {};

  constructor(
    private indicatorsSliderCarouselItems: ContentType
  ) {
    this.height = (window.innerHeight) + 'px';
  }

  ngOnInit() {
    this.getIndicatorsSliderItems();
  }
  getIndicatorsSliderItems()  {
    return this.indicatorsSliderCarouselItems.getContentTypeItems('articles').subscribe(items => {
      this.carousel = items;
    });
  }
  onResize() {
    this.height = (window.innerHeight) + 'px';
  }
  slideDown() {
    const navBarHeight = document.querySelector('.navbar-expand-lg').clientHeight;
    window.scrollBy({
      top: window.innerHeight - navBarHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
