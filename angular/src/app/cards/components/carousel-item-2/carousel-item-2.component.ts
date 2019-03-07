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

  }

  public carouselTileLoad(evt: any) {
    const len = this.clients.length;
    if (len <= 4) {
      for (let i = len; i < len + 10; i++) { this.clients.push(i); }
    }
  }
  organizeInfoForCarousel (clientsInfo) {
    var number = clientsInfo.length/4;
    if (clientsInfo.length % 4 === 0) {
      var numberOfBoxes = parseInt(number.toString(), 10);
    } else {
      var numberOfBoxes = 1 + parseInt(number.toString(), 10);
    }  
    for (let i = 0; i < numberOfBoxes; i++) {
      this.arrayBox[i] = [];
    }
    for (let i = 0; i < this.arrayBox.length; i++) {
      for (let j = 0; j < 4; j++) {
        this.arrayBox[i].push(clientsInfo[0]);
        clientsInfo.shift();
      }
    }
  }

  getOurClientsItems() {
    this._cardService.getCustomCardInformation('clientscard').subscribe(items => {
      this.clients = items.data;
      this.titleClients = items.header[0].data.title;
      this.clients = Object.keys(items.data).map(function (key) { return items.data[key]; });
      this.clientsDesktop = Object.keys(items.data).map(function (key) { return items.data[key]; });
      this.organizeInfoForCarousel(this.clients);
    });
  }
}
