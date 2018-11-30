import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from "../../../../services/http/http.service";

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.html',
  styleUrls: ['./footer-block.scss']
})
export class FooterBlock implements OnInit {
  @Input() idBlock: string;
  /*subtitle: string;
  body: string;*/

  public dataUbicaciones: any;

  constructor (
    private router: ActivatedRoute,
    private _http: HttpService
  ) {

    this.dataUbicaciones = [];
  }

  ngOnInit (): void {
    this.getFooterBlockItems();
  }

  getFooterBlockItems (): void {
    this._http.get('/location-resources?_format=json', {'limit': 2}).subscribe((items) => {
      this.dataUbicaciones = items;
    });
    /*this.footerBlockService.getCustomCardInformation('footerblock').subscribe((items) => {
      this.dataUbicaciones = items.data;
      /*console.log(items);
      this.subtitle = items.header[0].data;
      this.body = items.body[0].data;-/
    });*/
  }

  cargarMapaUbicaciones () {
    let x = document.querySelector("#title-description");
    if (x) {
      x.scrollIntoView();
    }
  }
}
