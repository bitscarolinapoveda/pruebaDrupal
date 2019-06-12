import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  type: string;
  uuid: string;

  constructor(private home: CustomCardService) {
    this.type = 'home';
    this.uuid = 'be6c9489-edec-441e-a542-5927cdfe6e89';
  }

  ngOnInit() {
    $(window).scrollTop(0);
    $('#float-social-block').removeClass('ocultar-phone');
    this.getHomeService();
  }

  getHomeService() {
    this.home.getMetaService(this.uuid);
  }

}
