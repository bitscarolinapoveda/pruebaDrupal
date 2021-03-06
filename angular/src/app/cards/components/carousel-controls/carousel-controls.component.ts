import { ContentType } from '../../../services/cards/content-type.services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

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
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  visible: boolean;
  @Input() type: string;
  show: boolean;
  titleInternalMenu: string;

  constructor(
    private AchievementCarouselItems: ContentType,
    private _cardService: CustomCardService
  ) {
    this.CarouselControlArray = [];
    this.visible = false;
    this.show = false;
  }

  ngOnInit() {
    this.getAchievementsCarouselItems();
    this.CarouselControlArray = [0, 1, 2, 3];
    this.carocarouselTile = {
      grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false,
      },
      load: 4,
      touch: true,
      easing: 'ease',
      loop: false,
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

  getAchievementsCarouselItems() {
    return this._cardService.getCustomCardInformation('achievementscard').subscribe(items => {
      if (items.header && items.header[0] && items.header[0].data && items.header[0].data.title && items.header[0].data.title != '') {
        items.data = this._cardService.addImageField(items.data, ['field_image']);
        this.CarouselControlArray = items.data;
        this.titleInternalMenu = items.header[1].data.internal_menu_title;
        if (items.header[0] !== undefined) {
          this.caroseltitle = items.header[0].data.title;
        }
        this.CarouselControlArray = Object.keys(items.data).map(function (key) { return items.data[key]; });
        if (this.caroseltitle !== '' && this.CarouselControlArray.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: this.titleInternalMenu,
            id: 'a3',
            url: ''
          };
          this.propagar.emit(this.datosMenu);
        }
      }
    });
  }

  showImage() {
    $('.images .container-img').css('transform', 'translate(0,0)');
    $('.images .container-img').css('opacity', '1');
  }
}
