import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from './../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

declare var $: any;

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
  titleInternalMenu: string;

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
      this.titleInternalMenu = items.header[2].data.internal_menu_title;
      for (let i = 0; i < this.whyData.length; i++) {
        this.whyData[i].show = false;
      }
      if (this.whyTitle !== '' && this.whyData.length !== 0) {
        this.visible = true;
        this.datosMenu = {
          label: this.titleInternalMenu,
          id: 'a1',
          url: ''
        };
        this.propagar.emit(this.datosMenu);
      }
    });
  }

  showImage() {
    $('.why-img img').css('transform', 'translate(0,0)');
    $('.why-img img').css('opacity', '1');
  }
}
