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
<<<<<<< HEAD
            // console.log(items);
=======
>>>>>>> a177ecaf883e8f089ea5e59c274a5da5dc404c4b
            this.CarouselControlArray = items;
          });
        }
}



