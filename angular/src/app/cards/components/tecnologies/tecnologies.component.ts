import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { NgxCarousel } from 'ngx-carousel';
import { DataMenu } from '../menu-template/menu-template.component';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss'],
  animations: [
    trigger('fade', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(100%)'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class TecnologiesComponent implements OnInit {
  arrayLogos: any = [];
  arrayLogosCustom: any[][];
  title: string;
  background: string;
  public carocarouselTile: NgxCarousel;
  state = 'hide';
  @Output() propagar = new EventEmitter<DataMenu>();

  datosMenu: DataMenu;

  constructor(
    private _tecnologies: CustomCardService,
    public el: ElementRef
  ) {
    this.arrayLogosCustom = [];
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    var componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      this.state = 'hide';
    } else {
      this.state = 'show';
    }
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'TECNOLOGÍAS',
      id: 'a5',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);

    this.getItemsTecnologies();
    this.arrayLogos = [0, 1, 2, 3, 4, 5,];
    this.carocarouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true,
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
      load: 1,
      touch: true,
      easing: 'ease',
      loop: true,
    };
  }

  customArrayImages(arrayLogosOriginal: any[]) {
    for (let i: number = 0; i <= arrayLogosOriginal.length; i++) {
      this.arrayLogosCustom[i] = [];
      let j2: number = 0;
      for (let j: number = 0; j < 4; j++) {
        if (arrayLogosOriginal.length > 0) {
          this.arrayLogosCustom[i][j] = arrayLogosOriginal[0];
          arrayLogosOriginal.shift();
        } else {
          this.arrayLogosCustom[i][j] = this.arrayLogosCustom[i - 1][j2];
          j2++;
        }
      }
    }
  }

  getItemsTecnologies() {
    return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
      this.title = items.header[0].data.title;
      this.background = items.body[0].data.back_movil[0].url;
      this.arrayLogos = items.data;
      this.customArrayImages(this.arrayLogos);
      /*this.createSlick();*/
    });
  }

}
