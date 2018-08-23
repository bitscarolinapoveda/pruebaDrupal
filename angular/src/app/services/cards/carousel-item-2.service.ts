import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})

export class CarouselItem2 {

  constructor(private http: HttpService) {
    console.log('');
  }

  getOurClients() {
    return this.http.get('v1/content-types/clients?_format=json');
  }
}
