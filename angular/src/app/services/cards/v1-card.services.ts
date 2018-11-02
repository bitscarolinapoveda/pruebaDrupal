import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { copyStyles } from '@angular/animations/browser/src/util';


@Injectable({
  providedIn: 'root'
})

export class CustomCardService {

  constructor(
    private http: HttpService
    ) {}

  getCustomCardInformation(idblock) {
    const url = `v1/card/config/${idblock}/export?_format=json`;
    return this.http.get(url);
  }

  getFooterContactItems() {
    return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
  }
}

