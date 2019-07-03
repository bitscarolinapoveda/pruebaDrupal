import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

declare var $: any;

@Component({
  selector: 'app-knowus',
  templateUrl: './knowus.component.html',
  styleUrls: ['./knowus.component.scss']
})
export class KnowusComponent implements OnInit {
  title: string;
  subtitle: string;
  list: any[];
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  visible: boolean;
  show: boolean;
  titleInternalMenu: string;

  constructor(private _service: CustomCardService) {
    this.list = [];
    this.visible = false;
    this.show = false;
  }

  ngOnInit() {
    this.getKnowusData();
  }

  getKnowusData() {
    this._service.getCustomCardInformation('knowusbitsamericas').subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      this.titleInternalMenu = items.header[2].data.internal_menu_title;
      items.data = this._service.addImageField(items.data, ['field_imagen']);
      this.list = items.data;
      if (this.title !== '' && this.list.length !== 0) {
        this.visible = true;
        this.datosMenu = {
          label: this.titleInternalMenu,
          id: 'a5',
          url: ''
        };
        this.propagar.emit(this.datosMenu);
      }
    });
  }

  showImage() {
    $('.images img').css('transform', 'translate(0,0)');
    $('.images img').css('opacity', '1');
  }

}
