import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public title: string;

  constructor() {
    this.title = 'Proyectos';
  }
}
