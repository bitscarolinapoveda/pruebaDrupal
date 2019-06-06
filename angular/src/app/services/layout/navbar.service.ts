import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http: HttpService) {
   // console.log('NavBar Listo');
  }
  const langcode = '';
  getLangcode(){
    if (window.sessionStorage.getItem('language') != 'es') {
      this.langcode = window.sessionStorage.getItem('language') + '/';
    }
    return this.langcode;
  }
  getMenuItems() {
    return this.http.get(this.getLangcode() + 'adf_menu/menu?_format=json');
  }
  getLowFooterInfo (key) {
    const info = this.getLangcode() + `adf_menu/${key}?_format=json`;
    return this.http.get(info);
  }
}
