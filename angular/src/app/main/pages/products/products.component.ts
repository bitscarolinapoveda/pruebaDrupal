import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public title: string;

  constructor(private meta: Meta) {
    this.title = 'Productos';
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-products' });
  }
}
