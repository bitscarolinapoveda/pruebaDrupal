import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.scss']
})
export class ProductServicesComponent implements OnInit {

  servicesProduct: any[];
  titleProducts ;

  constructor(
    private router: ActivatedRoute,
    private contentTypeService: ContentType) {
    this.titleProducts = [];
    this.servicesProduct = [];


  }

  ngOnInit() {
    this.getProductsAndServicesItems();

  }

  getProductsAndServicesItems() {
    this.contentTypeService.getContentTypeItems('products').subscribe(items => {
      this.servicesProduct = items.datos;
      this.titleProducts = items;
      this.servicesProduct = Object.keys(items.datos).map(function(key) {
        return items.datos[key];
      });
    });
  }
}
