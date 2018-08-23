import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneratorOfLinksService } from '../../../services/cards/generatoroflinks.service';
import { isArray } from 'util';

@Component({
  selector: 'app-generator-link',
  templateUrl: './generator-of-links.component.html',
  styleUrls: ['./generator-of-links.component.scss']
})
export class GeneratorOfLinksComponent implements OnInit {
  title: string;
  url: string;


  constructor(private router: ActivatedRoute,
  private generatoroflinks: GeneratorOfLinksService) {
    this.title = '';
    this.url = '';
  }
  ngOnInit() {
    this.getGeneratorOfLinks();
  }

  getGeneratorOfLinks() {
    this.generatoroflinks.getGeneratorOfLinks().subscribe((items: {header, body} ) => {
      console.log('general', items);
      this.title = items.body[0].data.label;
      this.url = items.body[0].data.link;
    });
  }

}
