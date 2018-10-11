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
    setTimeout(() => {
        this.loading = false;
    }, 3000);
  }


}
