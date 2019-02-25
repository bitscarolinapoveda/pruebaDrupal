import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../services/http/http.service';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.html',
  styleUrls: ['./footer-block.scss']
})
export class FooterBlockComponent implements OnInit {
  @Input() idBlock: string;
  /*subtitle: string;
  body: string;*/

  public title: string;
  public dataUbicaciones: any;

  constructor(
    private router: ActivatedRoute,
    private _http: HttpService,
    private service: CustomCardService
  ) {

    this.dataUbicaciones = [];
  }

  ngOnInit(): void {
    this.getFooterBlockItems();
  }

  getFooterBlockItems(): void {
    this.service.getCustomCardInformation('locationcard').subscribe(params => {
      this.title = params.header[0].data.title;
      this.dataUbicaciones = params.data;
    });
  }

  cargarMapaUbicaciones() {
    const x = document.querySelector('#title-description');
    if (x) {
      x.scrollIntoView();
    }
  }
}
