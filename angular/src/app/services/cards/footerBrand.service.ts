import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class FooterBrandService {

  constructor(private http: HttpService) {
  }

  getFooterBrandItems() {
    return this.http.get('v1/card/config/brandcard/export?_format=json');
  }
}