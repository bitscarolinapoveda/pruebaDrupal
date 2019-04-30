import {CustomCardService} from './../../../services/cards/v1-card.services';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-porque-bits',
  templateUrl: './porque-bits.component.html',
  styleUrls: ['./porque-bits.component.scss']
})
export class PorqueBitsComponent implements OnInit {

  moralValues: any[];
  mainTitleLink;
  mainUrlLink;

  constructor (private router: RouterModule,
               private porquebits: CustomCardService) {
    this.moralValues = [];
  }

  ngOnInit () {
    this.getMoralValuesItems();
  }
  getMoralValuesItems () {
    this.porquebits.getCustomCardInformation('whybits').subscribe(items => {
      items.data = this.porquebits.addImageField(items.data, ['field_imagen']);
      this.moralValues = items.data;
      for (let i = 0; i < this.moralValues.length; i++) {
        this.moralValues[i].show = false;
      }
      this.mainTitleLink = items.header[0].data;
      this.mainUrlLink = items.header[1].data;
    });
  }
  showImage() {
    $('.images img').css('transform', 'translate(0,0)');
    $('.images img').css('opacity', '1');
  }
}
