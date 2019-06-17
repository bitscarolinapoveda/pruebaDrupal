import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomCardService } from './../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { NgxCarousel } from 'ngx-carousel';
import { General } from '../blurb/blurb.component';

declare var $: any;

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {
  public screenshotsTitle;
  public screenshotsSubTitle;
  public screenshotsData;
  visible: boolean;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  principalScreenshots: General;
  CarouselControlArray: any = [];
  public carouselOne: NgxCarousel;
  show: boolean;
  titleInternalMenu: string;

  constructor(private screenshots: CustomCardService) {
    this.show = false;
    this.titleInternalMenu = '';
   }

  ngOnInit() {
    this.getScreenshotsInfo();
    this.carouselOne = {
      grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 4,
      touch: true,
      easing: 'ease',
      loop: true,
    };
  }

  getScreenshotsInfo() {
    this.screenshots.getCustomCardInformation('allproductsandservicescard_2').subscribe(params => {
      this.principalScreenshots = this.screenshots.getFilterPrincipalType(params, 'field_screenshots', this.type);

      this.screenshots.getCustomCardInformation('screenshotscard').subscribe(items => {
        items = this.screenshots.getFilterLists(this.principalScreenshots, items);
        var list = [];
        this.titleInternalMenu = items.header[2].data.internal_menu_title;
        this.screenshotsTitle = items.header[0].data.title;
        this.screenshotsSubTitle = items.header[1].data.sub_title;
        this.CarouselControlArray = items.data;
        for (let index = 0; index < items.data.length; index++) {
          for (let j = 0; j < items.data[index].field_image.length; j++) {
            list.push(items.data[index].field_image[j]);
          }
        }
        this.CarouselControlArray = list;
        if (this.screenshotsTitle !== '' && this.CarouselControlArray.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: this.titleInternalMenu,
            id: 'a18',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

  public carouselTileLoad(evt: any) {
    const len = this.CarouselControlArray.length;
    if (len <= 4) {
      for (let i = len; i < len + 10; i++) { this.CarouselControlArray.push(i); }
    }
  }

  showImage() {
    $('.imagesScreen').css('transform', 'translate(0,0)');
    $('.imagesScreen').css('opacity', '1');
  }

}
