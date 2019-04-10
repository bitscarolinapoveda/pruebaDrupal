import { Component, OnInit, DoCheck, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { Observable } from 'rxjs/Observable';
import { General } from '../blurb/blurb.component';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-client-proserv',
  templateUrl: './client-proserv.component.html',
  styleUrls: ['./client-proserv.component.scss']
})

export class ClientProServComponent implements OnInit, DoCheck, OnDestroy {
  public carouselOne: NgxCarousel;
  clients: Array<any> = [];
  lastclients: Array<any> = [];
  titleClients: string;
  public carocarouselTile: NgxCarousel;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  principalClient: General;
  principalClient$: Observable<General>;
  casClient: any = 0;
  visible: boolean;

  constructor(private _cardService: CustomCardService) {
    this.visible = false;
  }

  ngOnInit() {

    // this.getOurClientsItems();

    this.carocarouselTile = {
      grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false,
        pointStyles: `
            .ngxcarouselPoint {
              list-style-type: none;
              text-align: center;
              padding: 12px;
              margin: 0;
              white-space: nowrap;
              overflow: auto;
              box-sizing: border-box;
            .ngxcarouselPoint li {
            }
              display: inline-block;
              border-radius: 50%;
              border: 2px solid rgba(0, 0, 0, 0.55);
              padding: 4px;
              margin: 0 3px;
              transition-timing-function: cubic-bezier(.17, .67, .83, .67);
              transition: .4s;
            }
            .ngxcarouselPoint li.active {
                background: #6b6b6b;
                transform: scale(1.2);
            }
          `
      },
      load: 4,
      touch: true,
      easing: 'ease',
      loop: true,
    };

    this.datos();
  }

  ngDoCheck() {
    if (this.lastclients !== this.clients) {
      this.lastclients = this.clients;
    }
  }

  ngOnDestroy() {
  }

  datos() {
    this.principalClient$ = this._cardService.getCustomInfoIM('allproductsandservicescard_2');
    this.principalClient$.subscribe(items => {
      this.principalClient = this._cardService.clone(items);
      this.principalClient = this._cardService.getFilterPrincipalType(this.principalClient, 'field_imedical_clients', this.type);

      /* let value = 0;
      let datos = [];
      for (let index = 0; index < this.principalClient.data.length; index++) {
        if (this.principalClient.data[index].url.indexOf(this.type) > -1) {
          value++;
          datos = this.principalClient.data[index].field_clients;
        }
      }
      if (value === 0) {
        this.principalClient.data = [];
      } else {
        this.principalClient.data = datos;
      } */

      this._cardService.getCustomInfoIM('imedicalclients').subscribe(itemsw => {
        itemsw = this._cardService.getFilterLists(this.principalClient, itemsw);
        this.titleClients = itemsw.header[0].data.title;
        itemsw.data = this._cardService.addImageField(itemsw.data, ['field_image']);

        const list_items = this._cardService.clone(itemsw.data);

        this.clients = list_items;

        /* if (this.principalClient.data !== undefined) {
          for (let index = 0; index < list_items.length; index++) {
            for (let j = 0; j < this.principalClient.data.length; j++) {
              if (list_items[index].nid === this.principalClient.data[j].id) {
                this.clients.push(list_items[index]);
              }
            }
          }
        } */

        this.clients = this._cardService.clone(this.clients);
        this.casClient = this.casClient + 1;

        if (this.clients.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: 'CAROUSEL',
            id: 'a6',
            url: '/imedical'
          };

          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

  public carouselTileLoad(evt: any) {
    /* const len = this.clients.length;
    if (len <= 4) {
      for (let i = len; i < len + 10; i++) { this.clients.push(i); }
    } */
  }

  getOurClientsItems() {
    /* this._cardService.getCustomCardInformationType('clientscard', this.type).subscribe(items => {
      this.clients = items.data;
      this.titleClients = items.header[0].data.title;
      this.clients = Object.keys(items.data).map(function (key) { return items.data[key]; });
    }); */
  }
}
