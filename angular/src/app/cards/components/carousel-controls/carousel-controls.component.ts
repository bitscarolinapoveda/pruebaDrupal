import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselControlService } from '../../../services/cards/cardscontrols.service';

declare var $: any;

@Component({
  selector: 'app-carousel-controls',
  templateUrl: './carousel-controls.component.html',
  styleUrls: ['./carousel-controls.component.scss']
})

export class CarouselControlsComponent implements OnInit {
  constructor(private router: ActivatedRoute, private CarouselControl: CarouselControlService) { }

  CarouselControlArray: any = [];
  caroseltitle: any = [];
    ngOnInit() {
        this.getCarouselControlItem();
    }
    getCarouselControlItem() {
    return this.CarouselControl.getCarouselControlItems().subscribe(items => {
      this.CarouselControlArray = items.datos;
      this.caroseltitle = items;
      this.CarouselControlArray = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
    });
  }
}



