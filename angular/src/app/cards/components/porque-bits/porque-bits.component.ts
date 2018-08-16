import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PorqueBitsService } from '../../../services/layout/porquebits.service';

declare var $: any;

@Component({
  selector: 'app-porque-bits',
  templateUrl: './porque-bits.component.html',
  styleUrls: ['./porque-bits.component.scss']
})
export class PorqueBitsComponent implements OnInit {
  constructor(private router: ActivatedRoute,
      private porquebits: PorqueBitsService) {
      }

  moralvaluesArray: any;

  ngOnInit() {
    console.log('porquebits component');
    this.getMoralValuesItems();

    // var obj = {1: 11, 2: 22};
    // var arr = Object.keys(obj).map(function (key) { return obj[key]; });
    // console.log(arr);
  }

  getMoralValuesItems() {
    this.porquebits.getMoralValuesItems().subscribe( items => {
      this.moralvaluesArray = Object.keys(items).map(function (key) { return items[key]; });
      console.log(items);
    });

  }

}
