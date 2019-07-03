import { Component, OnInit } from '@angular/core';
import { DataMenu } from '../../../cards/components/menu-template/menu-template.component';

declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  listMenu: DataMenu[];
  type: string;

  constructor() {
    this.listMenu = [];
    this.type = 'about';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
  }

  onMenu(listMenu) {
    let cont = 0;
    for (let index = 0; index < this.listMenu.length; index++) {
      if (listMenu.id === this.listMenu[index].id) {
        cont++;
      }
    }
    if (cont === 0) {
      this.listMenu.push(listMenu);
    }
  }

}
