import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { NavbarService } from 'src/app/services/layout/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  items: any;
  constructor(
    private lowFooter: NavbarService
  ) { }
  ngOnInit() {
    this.getInfoLowFooter ();
  }
  getInfoLowFooter () {
    this.lowFooter.getLowFooterInfo('sub-footer---pagina-bits').subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }
}
