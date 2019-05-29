import { CustomCardService } from '../../../services/cards/v1-card.services';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var Muuri: any;
declare var $: any;

@Component({
  selector: 'app-services-filter',
  templateUrl: './services-filter.component.html',
  styleUrls: ['./services-filter.component.scss']
})

export class ServicesFilterComponent implements OnInit {
  public gridInfo;
  public grid;
  title: string;
  datos: any;
  public listClients;
  public clients;
  public disabled;
  @Input() type: string;
  selectedClient: any;
  @ViewChild('divClick') divClick: ElementRef;
  band: any[];

  constructor(
    private servicesInfo: CustomCardService,
  ) {
    this.band = [];
    this.gridInfo = [];
    this.title = '';
    this.datos = [];
    this.listClients = [];
  }

  widthWithoutScroll: number = 0;
  widthWithoutScrollLast: number = 0;
  countChangeScroll: number = 0;
  maxNumChangeScroll: number = 10;
  changeScroll() {
    this.countChangeScroll++;
    if (this.widthWithoutScroll === 0) {
      this.widthWithoutScrollLast = document.body.clientWidth;
    }
    this.widthWithoutScroll = document.body.clientWidth;

    if (this.widthWithoutScroll > 767 && this.countChangeScroll < this.maxNumChangeScroll) {
      setTimeout(() => {
        if (this.widthWithoutScroll !== this.widthWithoutScrollLast) {
          this.organizeGrid();
        } else {
          this.changeScroll();
        }
      }, 500);
    }
  }

  ngOnInit() {
    this.changeScroll();
    this.getFilterService();
    this.getInfoServices();
    this.onResize();
  }

  getInfoServices() {
    return this.servicesInfo.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      items.data = this.servicesInfo.addImageField(items.data, ['field_white_icon']);
      items.data = this.servicesInfo.addImageField(items.data, ['field_large_image']);
      items.data = this.servicesInfo.addImageField(items.data, ['field_short_image']);
      for (let index = 0; index < items.data.length; index++) {
        if (items.data[index].field_type[0].label === this.type) {
          this.band.push(items.data[index]);
        }
      }
      this.gridInfo = this.band;
      for (let index = 0; index < this.gridInfo.length; index++) {
        this.gridInfo[index].type = '/' + items.data[index].field_type[0].label;
      }

      this.listClients = this.getFilterList('field_clients', 'clients-');
    });
  }
  getFilterList(campo, id) {
    var list: any[] = [];
    for (let i = 0; i < this.gridInfo.length; i++) {
      if (this.gridInfo[i][campo] !== undefined) {
        for (let j = 0; j < this.gridInfo[i][campo].length; j++) {
          if (list.length === 0) {
            let obj = {
              'id': [id] + this.gridInfo[i][campo][j].id,
              'text': this.gridInfo[i][campo][j].label,
            }
            list.push(obj);
          } else {
            let cont = 0;
            for (let z = 0; z < list.length; z++) {
              if (list[z].text === this.gridInfo[i][campo][j].label) {
                cont++;
              }
            }
            if (cont === 0) {
              let obj = {
                'id': [id] + this.gridInfo[i][campo][j].id,
                'text': this.gridInfo[i][campo][j].label
              }
              list.push(obj);
            }
          }
        }
      }
    }
    return list;
  }

  getFilterService() {
    if (this.type === 'producto') {
      this.servicesInfo.getCustomCardInformation('servicesfiltercard_2').subscribe(params => {
        this.title = params.header[0].data.title;
        this.datos = params.body;
      });
    } else if (this.type === 'servicio') {
      this.servicesInfo.getCustomCardInformation('servicesfiltercard').subscribe(params => {
        this.title = params.header[0].data.title;
        this.datos = params.body;
      });
    }

  }
  onResize() {
    this.organizeGrid();
  }
  showDescription(eve, i) {
    if (eve.type === 'mouseover') {
      $('.hover-info-' + i).css({
        'visibility': 'visible',
        'top': '0',
        'transition': 'top 0.5s ease'
      });
      $('.info-' + i).css({
        'visibility': 'hidden',
      });
    } else if (eve.type === 'mouseleave') {
      $('.info-' + i).css({
        'visibility': 'visible',
      });
      $('.hover-info-' + i).css({
        'visibility': 'hidden',
        'top': '100%',
        'transition': 'all 0.5s ease',
      });
    }
  }

  organizeGrid() {
    if (true === true) {
      this.grid = new Muuri('.grid', {
        dragEnabled: false,
        layout: {
          fillGaps: true
        }
      });
    }

    this.addFilterClass('field_clients', 'clients-');
  }
  addFilterClass(campo, id) {
    for (let i = 0; i < this.gridInfo.length; i++) {
      if (this.gridInfo[i][campo] !== undefined) {
        for (let j = 0; j < this.gridInfo[i][campo].length; j++) {
          $('.item.box-' + i).addClass([id] + this.gridInfo[i][campo][j].id);
        }
      }
    }
  }
  filter(eve) {
    if (eve.id !== undefined) {
      this.grid.filter('.' + eve.id);
      this.ocultarDatos();
    }
  }

  public removedClient(value: any): void {
    this.addFilterrClass();
    this.gridInfo = [];
    this.band = [];
    this.getInfoServices();
    this.onResize();
  }

  public removedGeneral() {
    this.addFilterrClass();
    this.selectedClient = [];
    this.gridInfo = [];
    this.band = [];
    this.getInfoServices();
    this.onResize();
  }

  public selected(value: any): void {
    this.addFilterrClass();
    this.ocultarDatos();
  }

  public typed(value: any): void {
    this.removeFilterClass();
  }

  ocultarDatos() {
    this.divClick.nativeElement.click();
  }

  addFilterrClass() {
    $('#client').addClass('no-strong');
  }

  removeFilterClass() {
    $('#client').removeClass('no-strong');
  }
}
