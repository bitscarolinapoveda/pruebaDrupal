import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Proyectos';
  }

  ngOnInit() {
    $('#float-social-block').removeClass('ocultar-phone');
  }
}
