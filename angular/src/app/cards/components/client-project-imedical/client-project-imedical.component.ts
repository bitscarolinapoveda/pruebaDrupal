import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

declare var $: any;
@Component({
  selector: 'app-client-project-imedical',
  templateUrl: './client-project-imedical.component.html',
  styleUrls: ['./client-project-imedical.component.scss']
})
export class ClientProjectImedicalComponent implements OnInit {
  titleCard: string;
  imgSrcClient: string;
  nameClient: string;
  titleSection: string;
  titleProject: string;
  summaryProject: string;
  tags: any[];
  linkProjectUrl: string;
  linkProjectTitle: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  principal: General;
  @Input() type: string;
  visible: boolean;
  linkExternal: boolean;
  show: boolean;

  constructor(private _http: CustomCardService) {
    this.titleCard = '';
    this.imgSrcClient = '';
    this.nameClient = '';
    this.titleSection = '';
    this.titleProject = '';
    this.summaryProject = '';
    this.tags = [];
    this.linkProjectUrl = '';
    this.linkProjectTitle = '';
    this.visible = false;
    this.show = false;
  }

  ngOnInit() {
    this.getClientProjectImedicalService();
  }

  getClientProjectImedicalService() {
    this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principal = this._http.getFilterPrincipalType(items, 'field_top_client', this.type);

      this._http.getCustomCardInformation('imedicalclients_2').subscribe(params => {
        params = this._http.getFilterLists(this.principal, params);
        params.data = this._http.addImageField(params.data, ['field_image']);
        if (params.data.length > 0) {
          this.titleCard = 'El Cliente';
          this.imgSrcClient = params.data[0].field_image.url;
          this.nameClient = params.data[0].field_image.alt;
          this.titleSection = 'El Proyecto';
          this.titleProject = params.data[0].field_title_description;
          this.summaryProject = params.data[0].field_description;
          this.tags = ['salud', 'cloud', 'angularjs', 'mobile', 'tag'];
          this.linkProjectUrl = params.data[0].field_url_client[0].uri;
          this.linkProjectTitle = params.data[0].field_url_client[0].title;
          this.linkExternal = params.data[0].field_url_client[0].external;
          if (params.data[0]) {
            this.visible = true;
            this.datosMenu = {
              label: 'CLIENTS',
              id: 'a8',
              url: '/imedical'
            };
            this.propagar.emit(this.datosMenu);
          }
        }
      });
    });

  }

  showImage() {
    $('#logo-cliente').css('transform', 'translate(0,0)');
    $('#logo-cliente').css('opacity', '1');
  }

}
