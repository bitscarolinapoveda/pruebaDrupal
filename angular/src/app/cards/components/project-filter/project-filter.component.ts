import { CustomCardService } from '../../../services/cards/v1-card.services';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

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
  public band;
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

  ngOnInit() {
    this.getFilterService();
    this.getInfoProject();
    this.onResize();
  }

  getInfoProject() {
    this.listClient = [];
    this.listSector = [];
    this.listTecnology = [];
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
    var size = window.innerWidth;
    if (size < 767) {
      this.organizeGrid();
    } else {
      var heightOfBox = Math.round(((window.innerWidth) / 3)) + 'px';
      $('.muuri-item').css('height', heightOfBox);
    }
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
    var sizeOfBox = Math.round(((window.innerWidth) / 3));
    console.log('sizeOfBox', sizeOfBox);
    var size = window.innerWidth;

    if (size < 767) {
      this.grid = new Muuri('.grid', {
        dragEnabled: false,
        layout: {
          fillGaps: true
        }
      });
    } else {
      this.grid = new Muuri('.grid', {
        dragEnabled: false,
        items: '.item',
        layout: function (items, containerWidth, containerHeight) { // custom strict horizontal left-to-right order
          if (!items.length) return layout;
          var layout = {
            slots: {},
            height: 0,
            setHeight: true
          };
          // in this case, container width (1000px) always divisible by item width (200px)
          var colCount = 3;
          var numRow = (items.length / colCount).toString();
          var rowCount = 1 + parseInt(numRow, 10);
          // save calculated slots in 2D array
          var slotDimensions = array2D(rowCount);
          var newSlot, topSlot, leftSlot, slotRow, slotCol;
          items.forEach(function (item, index) {
            console.log( Math.round(item._height));
            console.log(Math.round(item._width));
            newSlot = {
              left: 0,
              top: 0,
              height: Math.round(item._height),
              width: Math.round(item._width)
            };
            slotCol = index % colCount;
            var numRow2 = (index / colCount).toString();
            slotRow = parseInt(numRow2, 10);
            if (topRowExists(slotRow)) { // add slot to row below
              topSlot = slotDimensions[slotRow - 1][slotCol];
              if (index === 10 || index === 17) {
                newSlot.top = topSlot.top + topSlot.height + sizeOfBox;
              } else if (index === 20) {
                newSlot.top = topSlot.top + topSlot.height - sizeOfBox;
              } else {
                newSlot.top = topSlot.top + topSlot.height;
              }
            }
            if (leftColExists(slotCol)) { // add slot to rightward col
              leftSlot = slotDimensions[slotRow][slotCol - 1];
              if (index === 8 || index === 17 || index === 20) {
                newSlot.left = (leftSlot.left + leftSlot.width) - sizeOfBox;
              } else {
                newSlot.left = leftSlot.left + leftSlot.width;
              }
            }
            slotDimensions[slotRow][slotCol] = newSlot;
            layout.slots[item._id] = newSlot;
            layout.height = Math.max(layout.height, newSlot.top + newSlot.height);
          });
          return layout;
        }
      });
    }
    function leftColExists(slotCol) {
      if (slotCol - 1 == -1) return false;
      return true;
    }
    function topRowExists(slotRow) {
      if (slotRow - 1 == -1) return false;
      return true;
    }
    function array2D(rows) {
      var array = [];
      for (var i = 0; i < rows; i++) {
        array[i] = [];
      }
      return array;
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
