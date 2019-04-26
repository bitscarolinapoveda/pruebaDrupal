import { CustomCardService } from '../../../services/cards/v1-card.services';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var Muuri: any;
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.scss']
})
export class ProjectFilterComponent implements OnInit {
  public gridInfo;
  public grid;
  title: string;
  datos: any;
  listClient: Array<string>;
  listSector: Array<string>;
  listTecnology: Array<string>;
  private disabled: boolean;
  selectedClient: any;
  selectedSector: any;
  selectedTecnology: any;
  @ViewChild('divClick') divClick: ElementRef;

  constructor(
    private projectInfo: CustomCardService,
  ) {
    this.title = '';
    this.datos = [];
    this.listClient = [];
    this.listSector = [];
    this.listTecnology = [];
    this.gridInfo = [];
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
    this.getInfoProject();
    this.onResize();
  }

  getInfoProject() {
    this.listClient = [];
    this.listSector = [];
    this.listTecnology = [];
    this.gridInfo = [];
    this.projectInfo.getCustomCardInformation('allourworkbitsamericas').subscribe(items => {
      items.data = this.projectInfo.addImageField(items.data, ['field_background_image']);
      items.data = this.projectInfo.addImageField(items.data, ['field_image']);
      this.gridInfo = items.data;

      this.listClient = this.getFilterList('field_clients', 'clients-');
      this.listSector = this.getFilterList('field_sector', 'sector-');
      this.listTecnology = this.getFilterList('field_technologies', 'technologies-');
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
              'text': this.gridInfo[i][campo][j].label
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

  filter(eve) {
    if (eve.id !== undefined) {
      this.grid.filter('.' + eve.id);
      this.ocultarDatos();
    }
  }

  getFilterService() {
    this.projectInfo.getCustomCardInformation('successcasefiltercard').subscribe(params => {
      this.title = params.header[0].data.title;
      this.datos = params.body;
    });
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
    this.addFilterClass('field_sector', 'sector-');
    this.addFilterClass('field_technologies', 'technologies-');
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

  public removed(value: any): void {
    this.addFilterrClass();
    this.gridInfo = [];
    this.getInfoProject();
    this.onResize();
  }

  public removedGeneral() {
    this.addFilterrClass();
    this.selectedClient = [];
    this.selectedSector = [];
    this.selectedTecnology = [];
    this.gridInfo = [];
    this.getInfoProject();
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
    $('#sector').addClass('no-strong');
    $('#tecnology').addClass('no-strong');
  }

  removeFilterClass() {
    $('#client').removeClass('no-strong');
    $('#sector').removeClass('no-strong');
    $('#tecnology').removeClass('no-strong');
  }

}
