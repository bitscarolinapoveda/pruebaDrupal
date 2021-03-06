import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { Observable } from 'rxjs/Observable';
import { General } from '../blurb/blurb.component';
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
  public btnPrincipal: string;
  principal: General;
  principal$: Observable<General>;

  constructor(
    private _cardService: CustomCardService) {
    this.servicesProduct = [];
    this.buttonL = {
      link: 'string',
      label: '',
      external: false,
    };
    this.buttonR = {
      link: '',
      label: '',
      external: false,
    };
  }

  ngOnInit() {
    this.getProductsAndServicesItems();
  }

  getProductsAndServicesItems() {
    this.principal$ = this._cardService.getCustomInfoIM('productsandservicescard');
    this.principal$.subscribe(items => {
      this.principal = this._cardService.clone(items);
      this.principal.data = this._cardService.addImageField(this.principal.data, ['field_short_image']);
      this.principal.data = this._cardService.addImageField(this.principal.data, ['field_large_image']);
      this.servicesProduct = this.principal.data;
      if (this.servicesProduct.length > 3 && this.servicesProduct.length < 6) {
        this.servicesProduct.splice(3);
      } else if (this.servicesProduct.length >= 6) {
        this.servicesProduct.splice(6);
      }
      this.title = this.principal.header[0].data.title;
      this.btnPrincipal = this.principal.header[1].data.button_see_more;
      this.buttonL = this.principal.body[0].data;
      this.buttonR = this.principal.body[1].data;
    });
  }
}
export interface Buttons {
  link: string;
  label: string;
  external: boolean;
}
