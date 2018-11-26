import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

import {HttpService} from "../../services/http/http.service";


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent {
  public loading: boolean;

  constructor (
    private _http: HttpService,
    private _router: Router,
  ) {
  }

  ngOnInit () {
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

  iniciarCarga () {
    this.loading = true;
    this._http.resetLoader();
  }

  endLoad () {
    this.loading = false;
  }
}