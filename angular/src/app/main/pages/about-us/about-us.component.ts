import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DataMenu } from '../../../cards/components/menu-template/menu-template.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  listMenu: DataMenu[];
  type: string;

  constructor(private meta: Meta) {
    this.listMenu = [];
    this.type = 'about';
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-about-us' });
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
