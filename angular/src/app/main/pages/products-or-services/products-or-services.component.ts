import { Component, OnInit } from '@angular/core';
import { CustomCardService, Blurb } from '../../../services/cards/v1-card.services';
import { ActivatedRoute, Params } from '@angular/router';
import { DataMenu } from '../../../cards/components/menu-template/menu-template.component';
import { HttpService } from '../../../services/http/http.service';
import { getRelatedFormControls } from '@ng-dynamic-forms/core';
import { General } from '../../../cards/components/blurb/blurb.component';
import { Observable } from 'rxjs/Observable';

declare var $: any;
@Component({
  selector: 'app-products-or-services',
  templateUrl: './products-or-services.component.html',
  styleUrls: ['./products-or-services.component.scss']
})
export class ProductsOrServicesComponent implements OnInit {
  blurbArray: Blurb[];
  tituloModulos: string;
  descripcionModulos: string;
  public type: string;
  public nid: string;
  listMenu: DataMenu[];
  public imagen: string;
  public value: any;
  visible: boolean;
  principal: General;

  constructor(private _http: CustomCardService, private rutaActiva: ActivatedRoute, private service: HttpService) {
    this.blurbArray = [];
    this.listMenu = [];
    this.visible = false;
  }

  ngOnInit() {
    
    this.type = this.rutaActiva.snapshot.params.type;

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.type = params.type;
      }
    );

    this.getModulesService();

    $('#float-social-block').removeClass('ocultar-phone');

  }

  getModulesService() {
    this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principal = this._http.getFilterPrincipalType(items, 'field_modules', this.type);

      this._http.getCustomCardInformation('moduleinformation').subscribe(params => {
        params = this._http.getFilterLists(this.principal, params);
        this.tituloModulos = params.header[0].data.title;
        this.descripcionModulos = params.header[1].data.description;
        params.data = this._http.addImageField(params.data, ['field_image']);
        for (let blurbItem of params.data) {
          let blurbObject: Blurb = {
            imageSrc: '',
            title: '',
            description: ''
          };
          blurbObject.imageSrc = blurbItem.field_image.url;
          blurbObject.title = blurbItem.title;
          blurbObject.description = blurbItem.body;
          this.blurbArray.push(blurbObject);
        }
        if (this.tituloModulos !== '' && this.blurbArray.length !== 0) {
          this.visible = true;
        }

      });
    });
  }

  onMenu(listMenu) {
    let cont = 0;
    for (let index = 0; index < this.listMenu.length; index++) {
      if (listMenu.id === this.listMenu[index].id) {
        cont++;
      }
    }
    if (cont === 0) {
      this.listMenu.push(listMenu);
    }
  }

}
