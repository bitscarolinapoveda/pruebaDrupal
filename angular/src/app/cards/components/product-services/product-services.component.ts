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
  servicesProductTitle: string;


  constructor(private router: ActivatedRoute,
    private _productServices: ProductServices) {

    this.servicesProduct = [];
    this.servicesProductTitle = '';


  }

  ngOnInit() {
    this.getProductoServiceItems();

  }

  getProductoServiceItems() {
    this._productServices.getProductoServiceItems().subscribe(items => {
      this.servicesProduct = Object.keys(items).map(function (key) {
        //console.log(items[key]);
        return items[key];
      });
      this.servicesProductTitle = this.servicesProduct[0];
      this.servicesProduct = this.servicesProduct[1];
      //console.log(this.servicesProduct);
    });
  }

}
