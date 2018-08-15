import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PorqueBitsService } from '../../../services/layout/porquebits.service';


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
  }

  getMoralValuesItems() {
    this.porquebits.getMoralValuesItems().subscribe( items => {
      this.moralvaluesArray = items;
      console.log(items);
    });

  }

}
