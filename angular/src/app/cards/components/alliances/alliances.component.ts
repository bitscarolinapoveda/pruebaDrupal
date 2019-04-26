import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { NgxCarousel } from 'ngx-carousel';
import { DataMenu } from '../menu-template/menu-template.component';

declare var $: any;

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss'],
})
export class AlliancesComponent implements OnInit {
  allianceArrayLogos: any = [];
  arrayLogosCustom: any[][];
  allianceTitle: string = '';
  allianceBackground: string = '';
  public carocarouselTile: NgxCarousel;
  state = 'hide';
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  visible: boolean;

  constructor(
    private alliance: CustomCardService,
    public el: ElementRef
  ) {
    this.arrayLogosCustom = [];
    this.visible = false;
  }

  ngOnInit() {
    this.getAlliance();
  }

  getAlliance() {
    return this.alliance.getCustomCardInformation('ouralliance').subscribe(items => {
      this.allianceTitle = items.header[0].data.title;
      this.allianceBackground = items.body[0].data.back_movil[0].url;
      items.data = this.alliance.addImageField(items.data, ['field_alliance_image']);
      this.allianceArrayLogos = items.data;
      this.arrayLogosCustom = this.alliance.organizeInfoForCarousel(this.allianceArrayLogos);
      if (this.allianceTitle !== '' && this.allianceArrayLogos.length !== 0) {
        this.visible = true;
        this.datosMenu = {
          label: 'ALIADOS',
          id: 'a4',
          url: ''
        };
        this.propagar.emit(this.datosMenu);
      }
    });
  }
}
