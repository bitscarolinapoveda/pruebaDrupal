import { CustomCardService } from '../../../services/cards/v1-card.services';
import { Component, OnInit, Input } from '@angular/core';
import { SelectComponent } from 'ng2-select';

declare var Muuri: any;
declare var $: any;

@Component({
  selector: 'app-services-filter',
  templateUrl: './services-filter.component.html',
  styleUrls: ['./services-filter.component.scss']
})

export class ServicesFilterComponent implements OnInit {

  public gridInfo;
  public listClients;
  public grid;
  public clients;
  public disabled;
  @Input() type: string;
  band: any[];

  constructor(
    private servicesInfo: CustomCardService,
  ) {
    this.band = [];
  }
  ngOnInit() {
    this.getInfoServices();
    this.onResize();
  }
  getInfoServices() {
    var list = [];
    return this.servicesInfo.getCustomCardInformation('allproductsandservicescard').subscribe(items => {

      for (let index = 0; index < items.data.length; index++) {
        if (items.data[index].type === this.type) {
          this.band.push(items.data[index]);
        }
      }
      this.gridInfo = this.band;

      for (let i = 0; i < this.gridInfo.length; i++) {
        for (let j = 0; j < this.gridInfo[i].clients.length; j++) {
          list.push(this.gridInfo[i].clients[j].label);
        }
        this.listClients = list;
      }
    });
  }
  onResize() {
    var size = window.innerWidth;
    if (size < 767) {
      this.organizeGrid();
    } else {
      var heightOfBox = ((window.innerWidth) / 3) + 'px';
      $('.muuri-item').css('height', heightOfBox);
      var heightOfBoxLarge = (((window.innerWidth) / 3) * 2) + 'px';
      $('.item.box-5').css('height', heightOfBoxLarge);
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
          var numRow = (items.length / colCount).toString()
          var rowCount = 1 + parseInt(numRow, 10);
          // save calculated slots in 2D array
          var slotDimensions = array2D(rowCount);
          var newSlot, topSlot, leftSlot, slotRow, slotCol;
          items.forEach(function (item, index) {
            newSlot = {
              left: 0,
              top: 0,
              height: item._height,
              width: item._width
            };
            slotCol = index % colCount;
            var numRow2 = (index / colCount).toString();
            slotRow = parseInt(numRow2, 10);
            if (topRowExists(slotRow)) { // add slot to row below
              topSlot = slotDimensions[slotRow - 1][slotCol];
              if (index === 10 || index === 17) {
                newSlot.top = topSlot.top + topSlot.height + 640;
              } else if (index === 20) {
                newSlot.top = topSlot.top + topSlot.height - 640;
              } else {
                newSlot.top = topSlot.top + topSlot.height;
              }
            }
            if (leftColExists(slotCol)) { // add slot to rightward col
              leftSlot = slotDimensions[slotRow][slotCol - 1];
              if (index === 8 || index === 17 || index === 20) {
                newSlot.left = (leftSlot.left + leftSlot.width) - 640;
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
    for (let i = 0; i < this.gridInfo.length; i++) {
      for (let j = 0; j < this.gridInfo[i].clients.length; j++) {
        $('.item.box-' + i).addClass(this.gridInfo[i].clients[j].label);
      }
    }
  }
  filter(eve) {
    this.grid.filter('.' + eve.id);
  }
}
