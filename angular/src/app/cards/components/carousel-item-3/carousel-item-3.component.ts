import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { Observable } from 'rxjs/Observable';
import { General } from '../blurb/blurb.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-carousel-item-3',
  templateUrl: './carousel-item-3.component.html',
  styleUrls: ['./carousel-item-3.component.scss']
})
export class CarouselItem3Component implements OnInit {

  public carocarouselTile: NgxCarousel;
  clients: Array<any>;
  clientsDesktop: Array<any>;
  arrayBox = [];
  titleClients: string;
  datosMenu: DataMenu;
  principalClient: any;
  casClient: any = 0;
  visible: boolean;
  flagUbication: string;
  show: boolean;
  showPhone: boolean;
  titleInternalMenu: string;

  oneItems: boolean;
  twoItems: boolean;
  threeItems: boolean;

  @Output() propagar = new EventEmitter<DataMenu>();
  @Input() type: string;

  constructor(private _cardService: CustomCardService) {
    this.clients = [];
    this.visible = false;
    this.show = false;
    this.showPhone = false;
    this.titleInternalMenu = '';
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'CAROUSEL',
      id: 'a6',
      url: '/imedical'
    };

    //this.propagar.emit(this.datosMenu);

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

  getOurClientsItems() {
    this._cardService.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principalClient = this._cardService.clone(items);
      this.principalClient = this._cardService.getFilterPrincipalType(this.principalClient, 'field_client_simple', this.type);
      this._cardService.getCustomCardInformation('clientsimplecard').subscribe(itemsw => {
        itemsw = this._cardService.getFilterLists(this.principalClient, itemsw);
        this.titleClients = itemsw.header[0].data.title;
        itemsw.data = this._cardService.addImageField(itemsw.data, ['field_image']);
        const list_items = this._cardService.clone(itemsw.data);
        this.clients = list_items;
        this.clientsDesktop = list_items;
        this.clients = this._cardService.clone(this.clients);
        this.casClient = this.casClient + 1;
        this.titleInternalMenu = itemsw.header[2].data.internal_menu_title;
        switch (this.clients.length) {
          case 1:
            this.oneItems = true;
            break;
          case 2:
            this.twoItems = true;
            break;
          case 3:
            this.threeItems = true;
            break;
        }
        this.arrayBox = this._cardService.organizeInfoForCarousel(this.clients);

        if (this.clients.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: this.titleInternalMenu,
            id: 'a6',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

}
