import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
  }

  ngOnInit() {
    this.meta.updateTag({ name: 'component', content: 'app-home' });
    this.meta.addTag({ name: 'general', content: 'Angular 7' });
  }

}
