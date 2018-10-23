import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PorqueBitsService } from '../../../services/cards/porquebits.service';

declare var $: any;

@Component({
  selector: 'app-porque-bits',
  templateUrl: './porque-bits.component.html',
  styleUrls: ['./porque-bits.component.scss']
})
export class PorqueBitsComponent implements OnInit {

  moralValues: any[];
  mainTitleLink;

  constructor(private router: ActivatedRoute,
      private porquebits: CustomCardService) {
        this.moralValues = [];
      }

  ngOnInit() {
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
  getMoralValuesItems() {
    this.porquebits.getCustomCardInformation('whybits').subscribe( items => {
      console.log(items);
      this.moralValues = items.archivos[0].data;
      this.mainTitleLink = items.data;
    });
  }
}
