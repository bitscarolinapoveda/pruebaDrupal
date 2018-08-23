import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardCarouselControls } from '../../../services/cards/card-carousel-controls.service';

declare var $: any;

@Component({
  selector: 'app-card-carousel-controls',
  templateUrl: './card-carousel-controls.component.html',
  styleUrls: ['./card-carousel-controls.component.scss']
})
export class CardCarouselControlsComponent implements OnInit {

  clients: any[];

  constructor(private router: ActivatedRoute,
        private cardcarouselcontrols: CardCarouselControls) {
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
            console.log('adasdasdasda');
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
