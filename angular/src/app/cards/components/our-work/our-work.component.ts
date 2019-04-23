import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { iif } from 'rxjs';
import { General } from '../blurb/blurb.component';
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
  principalOurWork: General;

  constructor(private _http: CustomCardService) {
    this.list = [];
    this.visible = false;
  }

  ngOnInit() {
    this.getOurWorkData();
  }

  getOurWorkData() {
    this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(params => {
      this.principalOurWork = this._http.getFilterPrincipalType(params, 'field_our_work', this.type);

      this._http.getCustomCardInformationType('ourworkbitsamericas', this.type).subscribe(items => {
        items = this._http.getFilterLists(this.principalOurWork, items);
        this.title = items.header[0].data.title;
        this.subtitle = items.header[1].data.sub_title;
        this.list = this._http.addImageField(items.data, ['field_background_image']);
        if (this.title !== '' && this.list.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: 'NUESTRO TRABAJO',
            id: 'a14',
            url: '/products'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }

}
