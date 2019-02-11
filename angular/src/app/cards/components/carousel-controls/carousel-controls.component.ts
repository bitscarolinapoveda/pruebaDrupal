import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';

declare var jQuery: any;  
declare var $: any;

@Component({
  selector: 'app-carousel-controls',
  templateUrl: './carousel-controls.component.html',
  styleUrls: ['./carousel-controls.component.scss']
})

export class CarouselControlsComponent implements OnInit {
  public carouselOne: NgxCarousel;

  CarouselControlArray: any = [];
  caroseltitle: any = [];
  public carocarouselTile: NgxCarousel;

  constructor(
    private router: ActivatedRoute,
    private AchievementCarouselItems: ContentType,
    ) {
            this.CarouselControlArray = [];
  }

    ngOnInit() {

      this.getAchievementsCarouselItems();    
      
      this.CarouselControlArray = [0, 1, 2, 3];
 
    this.carocarouselTile = {
      grid: {xs: 1, sm: 2, md: 4, lg: 4, all: 0},
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 4,
      touch: true,
      easing: 'ease',
      loop: true,
    }
        
    }
    
    public carouselTileLoad(evt: any) {
 
      const len = this.CarouselControlArray.length
      if (len <= 4) {
        for (let i = len; i < len + 0; i++) {
          this.CarouselControlArray.push(i);
        }
      }}
    
    getAchievementsCarouselItems() {
    return this.AchievementCarouselItems.getContentTypeItems('achievements').subscribe(items => {
      this.CarouselControlArray = items.datos;
      this.caroseltitle = items.titulo;
      this.CarouselControlArray = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
    });
  }
}

