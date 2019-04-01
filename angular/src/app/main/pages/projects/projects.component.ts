import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public title: string;

  constructor(private meta: Meta) {
    this.title = 'Proyectos';
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-projects' });
  }
}
