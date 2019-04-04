import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { NgxCarousel } from 'ngx-carousel';
import { DataMenu } from '../menu-template/menu-template.component';

declare var $: any;
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss'],
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

  ngOnInit() {
    this.datosMenu = {
      label: 'TECNOLOGÍAS',
      id: 'a5',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.carocarouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 600,
      interval: 3000,
      point: {
        visible: false,
      },
      load: 2,
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy',
    };
    this.getItemsTecnologies();
  }

  getItemsTecnologies() {
    return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
      this.title = items.header[0].data.title;
      this.background = items.body[0].data.back_movil[0];
      items.data = this._tecnologies.addImageField(items.data, ['field_tech_image']);
      this.arrayLogos = items.data;
      this.arrayLogosCustom = this._tecnologies.organizeInfoForCarousel(this.arrayLogos);
    });
  }
}
