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
  background: any;
  backgroundMovil: any;
  backgroundDesktop: any;
  width: any;
  constructor(
    private lowFooter: NavbarService, private https: CustomCardService
  ) {
    this.width = window.innerWidth;
  }

  ngOnInit() {
    this.getInfoLowFooter();
    this.getImgFooter();
  }

  getInfoLowFooter() {
    this.lowFooter.getLowFooterInfo('sub-footer---pagina-bits').subscribe(items => {
      this.items = items;
    });
  }

  getImgFooter() {
    this.https.getCustomCardInformation('footerblock').subscribe(items => {
      if (items.body[0].data.back_movil !== undefined) {
        this.backgroundDesktop = items.body[0].data.back_movil[0].url;
      }
      if (items.body[0].data.back_desktop !== undefined) {
        this.backgroundMovil = items.body[0].data.back_desktop[0].url;
      }
      this.onResize();
    });
  }

  onResize() {
    this.width = window.innerWidth;
    if (this.width <= 550) {
      this.background = this.backgroundMovil;
    } else {
      this.background = this.backgroundDesktop;
    }
  }
}
