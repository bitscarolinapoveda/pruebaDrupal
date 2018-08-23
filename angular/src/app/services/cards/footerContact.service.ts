import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class FooterContactService {

  constructor(private http: HttpService) {
  }

  getFooterContactItems() {
    return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
  }
}