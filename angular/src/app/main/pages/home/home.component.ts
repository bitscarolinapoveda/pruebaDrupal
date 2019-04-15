import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  type: string;

  constructor(private meta: Meta) {
    this.type = 'home';
  }

  ngOnInit() {
    this.meta.updateTag({ name: 'component', content: 'app-home' });
    this.meta.addTag({ name: 'general', content: 'Angular 7' });
  }

}
