import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class ProductServices {
  constructor(private http: HttpService) {
  }

  getProductoServiceItems() {
    return this.http.get('v1/content-types/products');
  }
}