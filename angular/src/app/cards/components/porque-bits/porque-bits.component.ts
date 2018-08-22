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

  constructor(private router: ActivatedRoute,
      private porquebits: PorqueBitsService) {
        this.moralValues = [];
      }

  ngOnInit() {
    console.log('porquebits component');
    this.getMoralValuesItems();
  }

  getMoralValuesItems() {
    this.porquebits.getMoralValuesItems().subscribe( items => {
      this.moralValues = Object.keys(items.data).map(function (key) {
          return items.data[key];
      });
      console.log(this.moralValues);
    });

  }

}
