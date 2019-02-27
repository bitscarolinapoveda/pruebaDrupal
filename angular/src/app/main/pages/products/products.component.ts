import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public title: string;

  constructor() {
    this.title = 'Productos';
  }
}
