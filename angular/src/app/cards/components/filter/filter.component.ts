import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  title: string;
  datos: any;

  clientSelected: any;
  bandClient: Array<string>;
  listClient: Array<string>;

  sectorSelected: any;
  bandSector: Array<string>;
  listSector: Array<string>;

  tecnologySelected: any;
  bandTecnology: Array<string>;
  listTecnology: Array<string>;

  themeSelected: any;
  bandTheme: Array<string>;
  listTheme: Array<string>;

  private value: any = {};
  private _disabledV: string;
  private disabled: boolean;


  constructor(private _http: CustomCardService) {
    this.title = '';

    this.datos = [];

    this.clientSelected = '';
    this.bandClient = [];
    this.listClient = [];

    this.sectorSelected = '';
    this.bandSector = [];
    this.listSector = [];

    this.tecnologySelected = '';
    this.bandTecnology = [];
    this.listTecnology = [];

    this.themeSelected = '';
    this.bandTheme = [];
    this.listTheme = [];
  }

  ngOnInit() {
    this.getFilterService();
  }

  getFilterService() {
    this._http.getCustomCardInformation('successcasefiltercard').subscribe(params => {
      this.title = params.header[0].data.title;
      this.datos = params.body;
    });
  }

  // Metodos del select
  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  // Client
  public selectedClient(value: any): void {
    this.clientSelected = value.text;
  }

  public removedClient(value: any): void {
    this.clientSelected = '';
  }

  public typedCategory(value: any): void {
  }

  public refreshValueClient(value: any): void {
    this.clientSelected = value.text;
  }

  // Sector
  public selectedSector(value: any): void {
    this.sectorSelected = value.text;
  }

  public removedSector(value: any): void {
    this.sectorSelected = '';
  }

  public typedSector(value: any): void {
  }

  public refreshValueSector(value: any): void {
    this.sectorSelected = value.text;
  }

  // Tecnology
  public selectedTecnology(value: any): void {
    this.tecnologySelected = value.text;
  }

  public removedTecnology(value: any): void {
    this.tecnologySelected = '';
  }

  public typedTecnology(value: any): void {
  }

  public refreshValueTecnology(value: any): void {
    this.tecnologySelected = value.text;
  }

  // Theme
  public selectedTheme(value: any): void {
    this.themeSelected = value.text;
  }

  public removedTheme(value: any): void {
    this.themeSelected = '';
  }

  public typedTheme(value: any): void {
  }

  public refreshValueTheme(value: any): void {
    this.themeSelected = value.text;
  }

}
