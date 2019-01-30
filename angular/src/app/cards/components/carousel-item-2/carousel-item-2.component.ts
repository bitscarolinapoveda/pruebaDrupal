import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-carousel-item-2',
  templateUrl: './carousel-item-2.component.html',
  styleUrls: ['./carousel-item-2.component.scss']
})
export class CarouselItem2Component implements OnInit {

  clients: any[];
  titleClients ;

  constructor(
    private router: ActivatedRoute,
    private ourClientCarouselItems: ContentType,
    ) {
            this.clients = [];
            this.titleClients = [];
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

        this.getOurClientsItems();
    }
    getOurClientsItems() {
        this.ourClientCarouselItems.getContentTypeItems('clients').subscribe( items => {
        this.clients = items.datos;
        this.titleClients = items;
            this.clients = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
        });
    }
}
