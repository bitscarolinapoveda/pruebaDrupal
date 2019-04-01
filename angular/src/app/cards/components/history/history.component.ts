import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

declare var TL: any;
declare var window: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: [
    './history.component.scss',
    '../../../../assets/timeline/css/timeline.css',
    '../../../../assets/timeline/css/fonts/font.default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {
  public obj;
  public title;
  public sub_title;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  visible: boolean;

  constructor(private _http: CustomCardService) {
    this.visible = false;
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'HISTORIA',
      id: 'a2',
      url: ''
    };
    this.propagar.emit(this.datosMenu);
    this.getHistoryService();
  }

  getHistoryService() {
    this._http.getCustomCardInformation('historycard').subscribe(params => {
      this.title = params.header[0].data.title;
      this.sub_title = params.header[1].data.sub_title;
      const dataObject = {
        'events': [
        ]
      };
      params.data = this._http.addImageField(params.data, ['field_media_url']);
      const datos = params.data;
      for (let index = 0; index < datos.length; index++) {
        const fecha_start = new Date(datos[index].field_start_date);
        const fecha_end = new Date(datos[index].field_end_date);

        const element = {
          'media': {
            'url': datos[index].field_media_url.url,
            'caption': datos[index].field_media_caption,
            'credit': datos[index].field_media_credit,
            'alt': datos[index].field_media_url.alt
          },
          'start_date': {
            'month': fecha_start.getMonth(),
            'day': fecha_start.getDate(),
            'year': fecha_start.getFullYear(),
            'hour': fecha_start.getHours(),
            'minute': fecha_start.getMinutes(),
            'second': fecha_start.getSeconds()
          },
          'end_date': {
            'month': fecha_end.getMonth(),
            'day': fecha_end.getDate(),
            'year': fecha_end.getFullYear(),
            'hour': fecha_end.getHours(),
            'minute': fecha_end.getMinutes(),
            'second': fecha_end.getSeconds()
          },
          'text': {
            'headline': datos[index].title,
            'text': datos[index].field_text
          }
        };
        dataObject.events.push(element);
      }

      const additionalOptions = {
        start_at_end: false,
        timenav_height: 250
      };

      if (this.title !== '' && params.data.length !== 0) {
        this.visible = true;
      }

      window.timeline = new TL.Timeline('timeline', dataObject, additionalOptions);
    });
  }

}
