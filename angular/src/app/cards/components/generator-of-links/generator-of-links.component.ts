import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';

@Component({
  selector: 'app-generator-link',
  templateUrl: './generator-of-links.component.html',
  styleUrls: ['./generator-of-links.component.scss']
})
export class GeneratorOfLinksComponent implements OnInit {
  title: string;
  url: string;


  constructor(
    private router: ActivatedRoute,
    private generatoroflinks: CustomCardService
    ) {
    this.title = '';
    this.url = '';
  }
  ngOnInit() {
    this.getGeneratorOfLinks();
  }

  getGeneratorOfLinks() {
    this.generatoroflinks.getCustomCardInformation('generatoroflinks').subscribe((items: {header, body} ) => {
      this.title = items.body[0].data.label;
      this.url = items.body[0].data.link;
    });
  }

}
