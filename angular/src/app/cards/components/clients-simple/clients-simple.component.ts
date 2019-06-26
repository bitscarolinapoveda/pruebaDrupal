import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, HostListener, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

declare var $: any;
@Component({
  selector: 'app-clients-simple',
  templateUrl: './clients-simple.component.html',
  styleUrls: ['./clients-simple.component.scss'],
})
export class ClientsSimpleComponent implements OnInit {
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
  titleInternalMenu: string;
  edge: boolean;

  @Output() propagar = new EventEmitter<DataMenu>();

  @Input() type: string;

  constructor(
    private _tecnologies: CustomCardService,
    public el: ElementRef
  ) {
    this.arrayLogosCustom = [];
    this.titleInternalMenu = '';
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'TECNOLOGÍAS',
      id: 'a5',
      url: '/imedical'
    };
    //this.propagar.emit(this.datosMenu);
    this.getItemsTecnologies();

    if (/Edge\/\d./i.test(navigator.userAgent)){
      if(window.screen.width>1100){
      this.edge = true;
      }
    }
  }

  getItemsTecnologies() {
    if (this.type === 'home') {
      this.flagUbication = 'home';
      return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
        if (items.header.length > 0 && items.data.length > 0) {
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
        }
      });
    } else {
      this._tecnologies.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
        this.principalTecnologies = this._tecnologies.getFilterPrincipalType(items, 'field_client_simple', this.type);

        this._tecnologies.getCustomCardInformation('clientsimplecard').subscribe(itemsw => {
          itemsw = this._tecnologies.getFilterLists(this.principalTecnologies, itemsw);
          this.title = itemsw.header[0].data.title;
          this.subtitle = itemsw.header[1].data.sub_title;
          itemsw.data = this._tecnologies.addImageField(itemsw.data, ['field_imagen_a_color']);
          this.arrayLogosCustom = this._tecnologies.organizeInfoForCarousel(itemsw.data);
          this.titleInternalMenu = itemsw.header[2].data.internal_menu_title;

          if (this.title !== '' && this.arrayLogosCustom.length !== 0) {
            this.visible = true;
            this.datosMenu = {
              label: this.titleInternalMenu,
              id: 'a16',
              url: '/imedical'
            };
            this.propagar.emit(this.datosMenu);
          }
        });
      });
    }
  }

}
