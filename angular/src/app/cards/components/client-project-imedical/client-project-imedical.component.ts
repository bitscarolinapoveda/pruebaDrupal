import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

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
  linkProject: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;

  constructor(private _http: CustomCardService) {
    this.titleCard = '';
    this.imgSrcClient = '';
    this.nameClient = '';
    this.titleSection = '';
    this.titleProject = '';
    this.summaryProject = '';
    this.tags = [];
    this.linkProject = '';
  }

  ngOnInit() {
    this.datosMenu = {
      label: 'CLIENTS',
      id: 'a8',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.getClientProjectImedicalService();
  }

  getClientProjectImedicalService() {
    this._http.getCustomCardInformation('imedicalclients_2').subscribe(params => {
      this.titleCard = 'El Cliente';
      this.imgSrcClient = params.data[0].field_image.url;
      this.nameClient = params.data[0].field_image.alt;
      this.titleSection = 'El Proyecto';
      this.titleProject = params.data[0].field_title_description;
      this.summaryProject = params.data[0].field_description;
      this.tags = ['salud', 'cloud', 'angularjs', 'mobile', 'tag'];
      this.linkProject = params.data[0].field_url_client;
    });
  }

}
