import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http: HttpClient) {
    console.log('NavBar Listo');
  }

  getQuery( query: string ) {

    const url = `http://bits-redesign-stg.dev01.bitsamericas.net/drupal/adf_menu/main?_format=json${query}`;

    return this.http.get(url);

  }


  getMenuItems() {

    return this.getQuery('')
              .pipe();

  }
}