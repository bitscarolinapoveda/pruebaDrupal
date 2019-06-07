import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, HostListener, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

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
  background: any;
  state = 'hide';
  datosMenu: DataMenu;
  principalTecnologies: General;
  subtitle: string;
  visible: boolean;
  flagUbication: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  @Input() type: string;

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
    //this.propagar.emit(this.datosMenu);
    this.getItemsTecnologies();
  }

  getItemsTecnologies() {
    if (this.type === 'home') {
      this.flagUbication = 'home';
      return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
        if (items.header[0] !== undefined) {
          this.title = items.header[0].data.title;
        }
        if (items.body[0] !== undefined) {
          this.background = items.body[0].data.back_movil[0];
        }
        items.data = this._tecnologies.addImageField(items.data, ['field_tech_image']);
        this.arrayLogos = items.data;
        this.arrayLogosCustom = this._tecnologies.organizeInfoForCarousel(this.arrayLogos);
        this.visible = true;
      });
    } else {
      this._tecnologies.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
        this.principalTecnologies = this._tecnologies.getFilterPrincipalType(items, 'field_technologies', this.type);

        this._tecnologies.getCustomCardInformation('expertsinimedicalcard').subscribe(itemsw => {
          itemsw = this._tecnologies.getFilterLists(this.principalTecnologies, itemsw);
          this.title = itemsw.header[0].data.title;
          this.subtitle = itemsw.header[1].data.sub_title;
          itemsw.data = this._tecnologies.addImageField(itemsw.data, ['field_tech_color_image']);
          this.arrayLogosCustom = this._tecnologies.organizeInfoForCarousel(itemsw.data);

          if (this.title !== '' && this.arrayLogosCustom.length !== 0) {
            this.visible = true;
            this.datosMenu = {
              label: 'TECNOLOGIA',
              id: 'a11',
              url: '/imedical'
            };
            this.propagar.emit(this.datosMenu);
          }
        });
      });
    }
  }
}
