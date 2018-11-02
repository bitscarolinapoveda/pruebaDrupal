import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  loading: boolean;
  constructor() {
    this.loading = false;
   }

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  }


}
