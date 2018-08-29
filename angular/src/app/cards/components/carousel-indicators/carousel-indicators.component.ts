import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../../services/cards/carousel.service';
declare  var $: any;
@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {

  carouselArray: any = [] ;
  constructor(  private _carousel: CarouselService ) {

  }
  ngOnInit() {
    this.getCarouselItems();
  }
  getCarouselItems()  {
    return this._carousel.getsliderItems().subscribe(items => {
      this.carouselArray = Object.keys(items).map(function (key) {
          return items[key];
        });
    });
  }

  down() {
    let x = document.querySelector('.anchor');
    if (x) {
        x.scrollIntoView({behavior: 'smooth'});
    }
  }
}
