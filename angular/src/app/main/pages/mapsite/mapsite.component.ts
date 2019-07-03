import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/layout/navbar.service';

declare var $: any;

@Component({
  selector: 'app-mapsite',
  templateUrl: './mapsite.component.html',
  styleUrls: ['./mapsite.component.scss']
})
export class MapsiteComponent implements OnInit {
  public Info;

  constructor(private http: NavbarService) {
    this.Info = [];
  }

  ngOnInit() {
    this.getItems();
    $('#float-social-block').removeClass('ocultar-phone');
  }

  getItems() {
    return this.http.getLowFooterInfo('mapa-del-sitio---pagina-bit').subscribe(items => {
      this.Info = items;
    });
  }

}
