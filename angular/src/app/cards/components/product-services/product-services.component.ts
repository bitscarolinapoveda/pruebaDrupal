import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../../services/cards/product.service';
import { isArray } from 'util';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.scss']
})
export class ProductServicesComponent implements OnInit {

  servicesProduct: any[];
  titleProducts ;

  constructor(private router: ActivatedRoute,
    private ProductServices: ProductServices) {
    this.titleProducts = [];
    this.servicesProduct = [];

  }

  ngOnInit() {
    this.getProductoServiceItems();

  }

  getProductoServiceItems() {
    this.ProductServices.getProductoServiceItems().subscribe(items => {
      this.servicesProduct = items.datos;
      this.titleProducts = items;
      this.servicesProduct = Object.keys(items.datos).map(function(key) {
        return items.datos[key];
      });
    });
  }

}
