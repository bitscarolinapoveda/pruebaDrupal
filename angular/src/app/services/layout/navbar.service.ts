import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { CustomCardService } from '../cards/v1-card.services';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http: HttpService, private card: CustomCardService) {
   // console.log('NavBar Listo');
  }
  private langcode = '';
  refreshLangcode(){
    if (this.card.getLanguageBrowser() != 'es') {
      this.langcode = this.card.getLanguageBrowser() + '/';
    }
  }
  getMenuItems() {
    console.log('carga menu...');
    this.refreshLangcode();
    return this.http.get(this.langcode + 'adf_menu/menu?_format=json');
  }
  getLowFooterInfo (key) {
    this.refreshLangcode();
    const info = this.langcode + `adf_menu/${key}?_format=json`;
    return this.http.get(info);
  }
}
