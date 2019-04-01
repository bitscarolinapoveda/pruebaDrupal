import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {

  constructor(private meta: Meta) {
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-no-page-found' });
  }

}
