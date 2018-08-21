import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../../services/cards/carousel.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  carouselsArray: any = [];
  constructor(private _carousels: CarouselService ) { }

  ngOnInit() {
    this.getCarouselsItems();
  }

  getCarouselsItems() {
    return this._carousels.getsliderItems().subscribe(items => {
      this.carouselsArray = Object.keys(items).map(function (key) {
        return items[key];
      });
      console.log(this.carouselsArray);
    });
  }

}
