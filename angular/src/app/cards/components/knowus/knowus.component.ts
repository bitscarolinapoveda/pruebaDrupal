import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
  selector: 'app-knowus',
  templateUrl: './knowus.component.html',
  styleUrls: ['./knowus.component.scss']
})
export class KnowusComponent implements OnInit {
  title: string;
  subtitle: string;
  list: any[];

  constructor(private _service: CustomCardService) {
    this.list = [];
  }

  ngOnInit() {
    this.getKnowusData();
  }

  getKnowusData() {
    this._service.getCustomCardInformation('knowusbitsamericas').subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      items.data = this._service.addImageField(items.data, ['field_imagen']);
      this.list = items.data;
    });
  }

}
