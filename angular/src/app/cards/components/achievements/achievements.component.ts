import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

declare var $: any;
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  title: string;
  subtitle: string;
  list: any[];
  visible: boolean;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  principalAchievements: General;
  show: boolean;
  titleInternalMenu: string;

  constructor(private _service: CustomCardService) {
    this.list = [];
    this.visible = false;
    this.show = false;
    this.titleInternalMenu = '';
  }

  ngOnInit() {
    this.getAchievementData();
  }

  getAchievementData() {
    this._service.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principalAchievements = this._service.getFilterPrincipalType(items, 'field_achievements', this.type);

      this._service.getCustomCardInformation('achievementsbitsamericas').subscribe(params => {
        params = this._service.getFilterLists(this.principalAchievements, params);
        this.title = params.header[0].data.title;
        this.subtitle = params.header[1].data.sub_title;
        params.data = this._service.addImageField(params.data, ['field_imagen']);
        this.list = params.data;
        this.titleInternalMenu = params.header[2].data.internal_menu_title;
        if (this.title !== '' && this.list.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: this.titleInternalMenu,
            id: 'a10',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

  showImage() {
    $('.images img').css('transform', 'translate(0,0)');
    $('.images img').css('opacity', '1');
  }

}
