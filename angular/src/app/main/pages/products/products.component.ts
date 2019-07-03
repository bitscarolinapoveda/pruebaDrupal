import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Productos';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
  }
}
