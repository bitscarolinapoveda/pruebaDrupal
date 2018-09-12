import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { copyStyles } from '@angular/animations/browser/src/util';


@Injectable({
  providedIn: 'root'
})

export class FooterService {

  constructor(private http: HttpService) {
  }

  getFooterBlockItems(idblock) {
    let url = `v1/card/config/${idblock}/export?_format=json`;
    return this.http.get(url);
  }
}
