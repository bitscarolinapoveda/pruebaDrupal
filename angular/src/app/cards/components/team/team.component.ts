import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public carouselOne: NgxCarousel;
  visible: boolean;

  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  title: string;
  subtitle: string;
  CarouselControlArray: any = [];
  caroseltitle: any = [];
  public carocarouselTile: NgxCarousel;

  constructor(private https: CustomCardService) {
    this.CarouselControlArray = [];
    this.visible = false;
  }

  ngOnInit() {
    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'TEAMS',
      id: 'a9',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.getTeamInformationService();
    this.CarouselControlArray = [0, 1, 2, 3];
    this.carocarouselTile = {
      grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
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
    };
  }

  public carouselTileLoad(evt: any) {
    const len = this.CarouselControlArray.length;
    if (len <= 4) {
      for (let i = len; i < len + 0; i++) {
        this.CarouselControlArray.push(i);
      }
    }
  }

  getTeamInformationService() {
    this.https.getCustomCardInformationType('teambitsamericas', this.type).subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      this.CarouselControlArray = items.data;
      this.CarouselControlArray = Object.keys(items.data).map(function (key) { return items.data[key]; });
      if (this.title !== '' && this.CarouselControlArray.length !== 0) {
        this.visible = true;
      }
    });

  }

}
