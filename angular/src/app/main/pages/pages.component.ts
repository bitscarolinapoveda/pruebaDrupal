import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  loading: boolean;

  constructor() {
    this.loading = true;
   }

  ngOnInit() {
    this.loading = false;
  }


}
