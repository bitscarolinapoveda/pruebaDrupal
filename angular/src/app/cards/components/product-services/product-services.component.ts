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


  constructor(private router: ActivatedRoute,
    private ProductServices: ProductServices) {

    this.servicesProduct = [];

  }

  ngOnInit() {
    this.getProductoServiceItems();

  }

  getProductoServiceItems() {
    this.ProductServices.getProductoServiceItems().subscribe(items => {
      this.servicesProduct = Object.keys(items).map(function (key) {
        return items[key];
      });
      console.log(this.servicesProduct);
    });
  }

}
