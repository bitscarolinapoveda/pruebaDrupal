import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http: HttpService) {
    console.log('NavBar Listo');
  }

  getMenuItems() {
    return this.http.get('adf_mendu/main?_format=json');
  }
}