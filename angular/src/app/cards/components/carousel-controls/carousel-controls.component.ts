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
      $('.carousel-run .carousel-item').each(function () {
            // tslint:disable-next-line:no-var-keyword
            var next = $(this).next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          // tslint:disable-next-line:no-var-keyword
          for (var i = 0; i < 2; i++) {
              next = next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
              }
              next.children(':first-child').clone().appendTo($(this));
            }
        });
        this.getCarouselControlItem();
    }
         getCarouselControlItem() {
          return this.CarouselControl.getCarouselControlItems().subscribe(items => {
            console.log(items);
            this.CarouselControlArray = items;
            console.log(this.CarouselControlArray);
          });
        }
}



