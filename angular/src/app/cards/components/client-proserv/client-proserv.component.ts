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

  principal: General;
  principal$: Observable<General>;
  cas: any = 0;

  visible: boolean;

  constructor(private _cardService: CustomCardService) {
    this.visible = false;
  }

  ngOnInit() {
    console.log('ngOnInit');

    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'CAROUSEL',
      id: 'a6',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);

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
            }
            .ngxcarouselPoint li {
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
    if (this.lastclients != this.clients) {
      console.log('ngDoCheck', 'lista clients', this.clients);
      this.lastclients = this.clients
    }
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  /* Ejemplo para la directiva
  directiveOut(dato) {
    console.log('dato de la lista directiva', dato);
    this.clients = dato;
  } */

  datos() {

    this.principal$ = this._cardService.getCustomInfoIM('productsandservicescard_2');
    this.principal$.subscribe(items => {
      console.log('this.principal$.subscribe', items);
      this.principal = this._cardService.clone(items);

      let value = 0;
      let datos = [];
      for (let index = 0; index < this.principal.data.length; index++) {
        if (this.principal.data[index].nid === this.type) {
          value++;
          datos = this.principal.data[index].clients;
        }
      }
      if (value === 0) {
        this.principal.data = [];
      } else {
        this.principal.data = datos;
      }

      console.log('lista principal', this.principal);

      this._cardService.getCustomInfoIM('clientscard').subscribe(itemsw => {
        console.log('this._cardService.subscribe', itemsw);
        this.titleClients = itemsw.header[0].data.title;

        const list_items = this._cardService.clone(itemsw.data);

        let lista: any[] = [];
        this.clients = [];

        for (let index = 0; index < list_items.length; index++) {
          for (let j = 0; j < this.principal.data.length; j++) {
            if (list_items[index].nid === this.principal.data[j].id) {
              this.clients.push(list_items[index]);
            }
          }
        }

        this.clients = this._cardService.clone(this.clients);
        this.cas = this.cas + 1;
        console.log('lista clients_', this.clients);

        if (this.clients.length !== 0) {
          this.visible = true;
        }

        console.log('lista clients', this.clients);

        
        /* if (this.clients !== undefined) {
          this.clients = Object.keys(this.clients).map(function (key) { return this.clients[key]; });
        } */

        // this.clients = Object.keys(items.data).map(function (key) { return itemsw.data[key]; });

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
