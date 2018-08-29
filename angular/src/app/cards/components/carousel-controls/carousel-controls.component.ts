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
    ngOnInit() {
        // this.getCarouselControlItem();
        this.getCarouselControlItem();
    }
         getCarouselControlItem() {
          return this.CarouselControl.getCarouselControlItems().subscribe(items => {
            // console.log(items);
            this.CarouselControlArray = items;
          });
        }
}



