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
  languagueBrowser: any;
  ruta: any;
  mayor: boolean;

  constructor(
    private router: ActivatedRoute,
    private _http: HttpService,
    private service: CustomCardService
  ) {

    this.dataUbicaciones = [];
    this.languagueBrowser = '';
    this.ruta = '';
    this.mayor = false;
  }

  ngOnInit(): void {
    this.getFooterBlockItems();
    this.languagueBrowser = this.service.getLanguageBrowser();

    if (this.languagueBrowser !== 'es') {
      this.ruta = '/' + this.languagueBrowser + '/contact-us';
    } else if (this.languagueBrowser === 'es') {
      this.ruta = '/contactenos';
    }
  }

  getFooterBlockItems(): void {
    this.service.getCustomCardInformation('locationcard').subscribe(params => {
      this.title = params.header[0].data.title;
      this.dataUbicaciones = params.data;
      console.log(params);
      if(params.data[1]){
        this.mayor = true;
        console.log(this.mayor);
      }else{
        console.log("NO ES MAYOR", params.data.lenght);
      }
    });
  }

  cargarMapaUbicaciones() {
    const x = document.querySelector('#title-description');
    if (x) {
      x.scrollIntoView();
    }
  }
}
