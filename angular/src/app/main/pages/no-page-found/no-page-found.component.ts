import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

declare var $: any;

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {
  uuid: string;

  constructor(private http: CustomCardService) {
    this.uuid = '62fcf55e-7a6a-46ad-8852-fcc1292843b9';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
    this.getNoFoundService();
  }

  getNoFoundService() {
    this.http.getMetaService(this.uuid);
  }

}
