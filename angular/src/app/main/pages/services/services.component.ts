import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public title: string;

  constructor(private meta: Meta) {
    this.title = 'Servicios';
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-services' });
  }
}
