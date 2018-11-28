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

  // getMoralValuesItems() {
  //   this.porquebits.getMoralValuesItems().subscribe( items => {
  //     this.moralValues = Object.keys(items.data).map(function (key) {
  //         return items.data[key];
  //     });
  //     this.mainTitleLink = items.data;
  //   });
  // }
  getMoralValuesItems () {
    this.porquebits.getCustomCardInformation('whybits').subscribe(items => {
      console.log('DATAAAA:', items);
      this.moralValues = items.data;
      this.mainTitleLink = items.header[0].data;
      this.mainUrlLink = items.header[1].data;
    });
  }
}
