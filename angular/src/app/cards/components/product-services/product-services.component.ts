import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.scss']
})
export class ProductServicesComponent implements OnInit {

  public servicesProduct: any[];
  public title: string;

  constructor(
    private _cardService: CustomCardService) {
    this.servicesProduct = [];
  }

  ngOnInit() {
    this.getProductsAndServicesItems();
  }

  getProductsAndServicesItems() {
    this._cardService.getCustomCardInformation('productsandservicescard').subscribe(items => {
      this.servicesProduct = items.data;
      this.title = items.header[0].data.title;
    });
  }
}
