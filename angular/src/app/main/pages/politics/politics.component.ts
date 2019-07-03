import { OnInit, Component } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

declare var $: any;

@Component({
    selector: 'app-politics-page',
    templateUrl: './politics.component.html',
    styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {

    visable: boolean;
    uuid: string;
    status: any;

    constructor(private _http: CustomCardService) {
      this.visable = false;
      this.uuid = 'c00ea48d-1ce3-4bba-b65e-d57daf71cf4a';
    }

    ngOnInit() {
        $('#float-social-block').removeClass('ocultar-phone');
        this.getPoliticService();
    }

    getPoliticService() {
        this._http.getCustomContentBasicPage(this.uuid).subscribe(params => {
          this.status = params.status;
          if (this.status === '0') {
            this.visable = true;
          } else if (this.uuid !== 'b63181f1-38dd-40c9-a993-c4b8d7faf305') {
            this.uuid = 'b63181f1-38dd-40c9-a993-c4b8d7faf305';
            this._http.getCustomContentBasicPage(this.uuid).subscribe(items => {
              this.status = items.status;
              if (this.status === '0') {
                this.visable = true;
              }
            });
          }
        });
    }
}
