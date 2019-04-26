import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from './../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

@Component({
  selector: 'app-whybitsamericas',
  templateUrl: './whybitsamericas.component.html',
  styleUrls: ['./whybitsamericas.component.scss']
})
export class WhybitsamericasComponent implements OnInit {
  public whyTitle;
  public whySubTitle;
  public whyData;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  visible: boolean;

  constructor(
    private whyBits: CustomCardService,
  ) {
    this.visible = false;
  }

  ngOnInit() {
    this.getWhybitsInfo();
  }

  getWhybitsInfo() {
    return this.whyBits.getCustomCardInformation('whybitsamericas').subscribe(items => {
      this.whyTitle = items.header[0].data.title;
      this.whySubTitle = items.header[1].data.sub_title;
      items.data = this.whyBits.addImageField(items.data, ['field_imagen']);
      this.whyData = items.data;
      if (this.whyTitle !== '' && this.whyData.length !== 0) {
        this.visible = true;
        this.datosMenu = {
          label: 'POR QUE BITS AMERICAS',
          id: 'a1',
          url: ''
        };
        this.propagar.emit(this.datosMenu);
      }
    });
  }
}
