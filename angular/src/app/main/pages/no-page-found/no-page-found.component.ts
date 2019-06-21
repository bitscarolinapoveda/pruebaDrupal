import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ActivatedRoute, Router, NavigationExtras, NavigationStart } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {
  uuid: string;
  ruta: any;

  constructor(private http: CustomCardService, private router: Router) {
    this.uuid = '62fcf55e-7a6a-46ad-8852-fcc1292843b9';
    this.ruta = '';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
    this.router.events.subscribe((url: any) => url);
    this.ruta = this.router.url;
    if (this.ruta !== '/error') {
      this.getRedirect();
    }
    this.getNoFoundService();
  }

  getNoFoundService() {
    this.http.getMetaService(this.uuid);
  }

  getRedirect() {
    /* let navigationExtras: NavigationExtras = {
      queryParams: {
        "state": 301
      }
    }; */
    this.http.getRedirect().subscribe(params => {
      for (let i = 0; i < params.length; i++) {
        if (params[i].origin === this.ruta) {
          if (params[i].internal === true) {
            //this.router.navigate([params[i].to], navigationExtras);
            this.router.navigate([params[i].to]);
          } else {
            window.location.href = params[i].to;
          }
        }
      }
    });
  }

}
