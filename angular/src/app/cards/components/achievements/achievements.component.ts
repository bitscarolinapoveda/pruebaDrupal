import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';
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

  constructor(private _service: CustomCardService) {
    this.list = [];
    this.visible = false;
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
        if (this.title !== '' && this.list.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: 'LOGROS',
            id: 'a10',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

}
