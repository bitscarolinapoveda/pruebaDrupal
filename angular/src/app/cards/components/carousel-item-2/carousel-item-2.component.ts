import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-carousel-item-2',
  templateUrl: './carousel-item-2.component.html',
  styleUrls: ['./carousel-item-2.component.scss']
})
export class CarouselItem2Component implements OnInit {

  public carouselOne: NgxCarousel;

  clients: Array<any>;
  clientsDesktop: Array<any>;
  arrayBox = [];
  titleClients: string;
  public carocarouselTile: NgxCarousel;

  @Output() propagar = new EventEmitter<DataMenu>();

  datosMenu: DataMenu;

  constructor(private _cardService: CustomCardService) {
    this.clients = [];
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'CAROUSEL',
      id: 'a6',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);

    this.getOurClientsItems();
    this.clients = [0, 1, 2, 3, 4, 5];

    this.carocarouselTile = {
      grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false,
      },
      load: 4,
      touch: true,
      easing: 'ease',
      loop: false,
    };

  }

  public carouselTileLoad(evt: any) {
    const len = this.clients.length;
    if (len <= 4) {
      for (let i = len; i < len + 10; i++) { this.clients.push(i); }
    }
  }

  getOurClientsItems() {
    this._cardService.getCustomCardInformation('clientscard').subscribe(items => {
      items.data = this._cardService.addImageField(items.data, ['field_image']);
      this.clients = items.data;
      this.titleClients = items.header[0].data.title;
      this.clients = Object.keys(items.data).map(function (key) { return items.data[key]; });
      this.clientsDesktop = Object.keys(items.data).map(function (key) { return items.data[key]; });
      this.arrayBox = this._cardService.organizeInfoForCarousel(this.clients);
    });
  }
}
