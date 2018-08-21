import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class PorqueBitsService {

  constructor(private http: HttpService) {
    console.log('porque bits Listo');
  }

  getMoralValuesItems() {

    return this.http.get('block-resources/1?_format=json');

    return this.http.get('block/1?_format=json');

  }
}
