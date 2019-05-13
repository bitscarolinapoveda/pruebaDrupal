import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";

import { HttpService } from "../../services/http/http.service";

declare var $: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  public loading: boolean;
  public heightDarkLayout;

  constructor(
    private _http: HttpService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    $('.loading').css('display', 'none');
    this.iniciarCarga();

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.iniciarCarga();
      }
    });

    this._http.subscriber.subscribe((resp: any) => {
      this.endLoad();
    });
  }

  iniciarCarga() {
    this.loading = true;
    this._http.resetLoader();
    document.body.style.overflow = 'hidden';
  }

  endLoad() {
    this.loading = false;
    document.body.style.overflow = 'auto';
  }
}
