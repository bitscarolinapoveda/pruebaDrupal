import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-carousel-controls',
  templateUrl: './carousel-controls.component.html',
  styleUrls: ['./carousel-controls.component.scss']
})

export class CarouselControlsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private AchievementCarouselItems: ContentType
    ) { }

  CarouselControlArray: any = [];
  caroseltitle: any = [];
    ngOnInit() {
        this.getAchievementsCarouselItems();
    }
    getAchievementsCarouselItems() {
    return this.AchievementCarouselItems.getContentTypeItems('achievements').subscribe(items => {
      this.CarouselControlArray = items.datos;
      this.caroseltitle = items;
      this.CarouselControlArray = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
    });
  }
}



