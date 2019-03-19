import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

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

  constructor(private _service: CustomCardService) {
    this.list = [];
    this.visible = false;
  }

  ngOnInit() {
    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'LOGROS',
      id: 'a10',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.getAchievementData();
  }

  getAchievementData() {
    this._service.getCustomCardInformationType('achievementsbitsamericas', this.type).subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      this.list = items.data;
      if (this.title !== '' && this.list.length !== 0) {
        this.visible = true;
      }
    });
  }

}
