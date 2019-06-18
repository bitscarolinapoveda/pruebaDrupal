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
  titleLeft: string;
  titleCard: string;
  titleSection: string;
  imgSrcClient: string;
  nameClient: string;
  titleRight: string;
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
  titleInternalMenu: string;

  constructor(private _http: CustomCardService) {
    this.titleLeft = '';
    this.titleCard = '';
    this.titleSection = '';
    this.imgSrcClient = '';
    this.nameClient = '';
    this.titleRight = '';
    this.titleProject = '';
    this.summaryProject = '';
    this.tags = [];
    this.linkProjectUrl = '';
    this.linkProjectTitle = '';
    this.visible = false;
    this.show = false;
    this.titleInternalMenu = '';
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

          this.titleLeft = params.header[1].data.title_left;
          this.imgSrcClient = params.data[0].field_image.url;
          this.nameClient = params.data[0].field_image.alt;
          this.titleRight = params.header[2].data.title_right;

          this.titleProject = params.data[0].field_title_description;
          this.summaryProject = params.data[0].field_description;
          this.tags = params.data[0].field_tags;
          this.linkProjectUrl = params.data[0].field_url_client[0].uri;
          this.linkProjectTitle = params.data[0].field_url_client[0].title;
          this.linkExternal = params.data[0].field_url_client[0].external;
          this.titleInternalMenu = params.header[3].data.internal_menu_title;
          if (params.data[0]) {
            this.visible = true;
            this.datosMenu = {
              label: this.titleInternalMenu,
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
