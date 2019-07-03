import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-porque-bits',
  templateUrl: './porque-bits.component.html',
  styleUrls: ['./porque-bits.component.scss']
})
export class PorqueBitsComponent implements OnInit {
  rend_event : Renderer;
  element_refer: ElementRef;
  moralValues: any[];
  mainTitleLink;
  mainUrlLink;
  bandera = false;
  constructor(private router: RouterModule,
    private porquebits: CustomCardService) {
    this.moralValues = [];
  }

  ngOnInit() {
    this.getMoralValuesItems();
  }
  getMoralValuesItems () {
    this.porquebits.getCustomCardInformation('whybits').subscribe(items => {
      items.data = this.porquebits.addImageField(items.data, ['field_imagen']);
      this.moralValues = items.data;
      for (let i = 0; i < this.moralValues.length; i++) {
        this.moralValues[i].show = false;
      }
      if (items.header[0] !== undefined) {
        this.mainTitleLink = items.header[0].data;
      }
      if (items.header[1] !== undefined) {
        this.mainUrlLink = items.header[1].data;
      }
    });
  }
  showImage() {
    this.bandera = true;
  }

}
