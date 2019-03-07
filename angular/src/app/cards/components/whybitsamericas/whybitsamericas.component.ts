import { Component, OnInit } from '@angular/core';
import {CustomCardService} from './../../../services/cards/v1-card.services';

@Component({
  selector: 'app-whybitsamericas',
  templateUrl: './whybitsamericas.component.html',
  styleUrls: ['./whybitsamericas.component.scss']
})
export class WhybitsamericasComponent implements OnInit {
  public whyTitle;
  public whySubTitle;
  public whyData;

  constructor(
    private whyBits: CustomCardService,
  ) { }

  ngOnInit() {
    this.getWhybitsInfo();
  }
  getWhybitsInfo () {
    return this.whyBits.getCustomCardInformation('whybitsamericas').subscribe(items => {
      this.whyTitle = items.header[0].data.title;
      this.whySubTitle = items.header[1].data.sub_title;
      this.whyData = items.data;
    });
  }
}
