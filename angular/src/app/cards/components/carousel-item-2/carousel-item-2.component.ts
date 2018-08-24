import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselItem2 } from '../../../services/cards/carousel-item-2.service';

declare var $: any;

@Component({
  selector: 'app-carousel-item-2',
  templateUrl: './carousel-item-2.component.html',
  styleUrls: ['./carousel-item-2.component.scss']
})
export class CarouselItem2Component implements OnInit {

  clients: any[];

  constructor(private router: ActivatedRoute,
        private cardcarouselcontrols: CarouselItem2) {
  }

    ngOnInit() {
        $(document).ready(function () {
          setTimeout(function() {
            $('#recipeCarousel').carousel({
                interval: 4000
            });
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
          },  3000);
        });

        console.log('nuestros clientes');
        this.getOurClients();
    }
    getOurClients() {
        this.cardcarouselcontrols.getOurClients().subscribe( items => {
        //   this.clients = Object.keys(items.data).map(function (key) {
        //       return items.data[key];
        //   });
        this.clients = items;
        console.log(this.clients);
        });
    }
}
