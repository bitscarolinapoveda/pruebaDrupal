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
  public buttonL: Buttons;
  public buttonR: Buttons;
  public title: string;

  constructor(
    private _cardService: CustomCardService) {
    this.servicesProduct = [];
    this.buttonL = {
      link: 'string',
      label: ''
    };
    this.buttonR = {
      link: '',
      label: ''
    };
  }

  ngOnInit() {
    this.getProductsAndServicesItems();
  }

  getProductsAndServicesItems() {
    this._cardService.getCustomCardInformation('productsandservicescard_2').subscribe(items => {
      this.servicesProduct = items.data;
      this.title = items.header[0].data.title;
      for (let index = 0; index < this.servicesProduct.length; index++) {
        this.servicesProduct[index].type = '/' + this.servicesProduct[index].type;
        while (this.servicesProduct[index].nid.indexOf('_') > -1) {
          this.servicesProduct[index].nid = this.servicesProduct[index].nid.replace('_', '-');
        }
      }
      this.buttonL = items.body[0].data;
      this.buttonR = items.body[1].data;
    });
  }
}
export interface Buttons {
  link: string;
  label: string;
}
