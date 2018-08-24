import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})

export class CarouselControlService {

  constructor(private http: HttpService) {
 }

  getCarouselControlItems() {
    return this.http.get('v1/content-types/achievements?_format=json');
  }
}