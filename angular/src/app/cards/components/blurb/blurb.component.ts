import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Blurb, CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

@Component({
    selector: 'app-blurb',
    templateUrl: './blurb.component.html',
    styleUrls: ['./blurb.component.scss']
})
export class BlurbComponent implements OnInit {

    @Input() blurb: Blurb;

    @Input() type: string;

    @Output() propagar = new EventEmitter<DataMenu>();

    datosMenu: DataMenu;
    titlesmenu: string;

    constructor(
        private _http: CustomCardService
    ) {
      this.titlesmenu = '';
    }

    ngOnInit() {
      this.getModuleService();
    }

    getModuleService() {
      this._http.getCustomCardInformation('moduleinformation').subscribe(params => {
        this.titlesmenu = params.header[2].data.internal_menu_title;
        if (params.data[0]) {
        this.datosMenu = {
          label: this.titlesmenu,
          id: 'a1',
          url: '/products'
        };
        this.propagar.emit(this.datosMenu);
      }
    });
    }
}

export interface General {
    body: any;
    data: any;
    files: any;
    header: any;
    others: any;
}
