import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Servicios';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
  }
}
