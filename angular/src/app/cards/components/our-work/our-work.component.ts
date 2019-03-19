import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { iif } from 'rxjs';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  title: string;
  subtitle: string;
  list: any[];
  visible: boolean;

  @Input() type: string;

  @Output() propagar = new EventEmitter<DataMenu>();

  datosMenu: DataMenu;

  constructor(private _http: CustomCardService) {
    this.list = [];
    this.visible = false;
  }

  ngOnInit() {
    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'NUESTRO TRABAJO',
      id: 'a14',
      url: '/products'
    };

    this.propagar.emit(this.datosMenu);
    this.getOurWorkData();
  }

  getOurWorkData() {
    this._http.getCustomCardInformationType('ourworkbitsamericas', this.type).subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      this.list = items.data;
      if (this.title !== '' && this.list.length !== 0) {
        this.visible = true;
      }
    });
  }

}
