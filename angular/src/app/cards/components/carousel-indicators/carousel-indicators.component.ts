import { Component, OnInit } from '@angular/core';

import { CarouselService } from '../../../services/cards/carousel.service';


import { NodeService, Node } from '../../../services/cards/node.service';

declare  var $: any;
@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {


  carouselArray: any = [] ;
  constructor(  private _carousel: CarouselService ) {

  }
  ngOnInit() {
    this.getCarouselItems();
  }
  getCarouselItems()  {
    return this._carousel.getsliderItems().subscribe(items => {
      this.carouselArray = Object.keys(items).map(function (key) {
          return items[key];
        });
      console.log(this.carouselArray);
    });
  }

  down() {
   let x = document.querySelector('#container-elements');
    if (x) {
        x.scrollIntoView({behavior: 'smooth'});
    }
  }

  nodes: Node[] = [];

  constructor(  private _nodeService: NodeService ) {

  }
  ngOnInit() {
    this.nodes = this._nodeService.getNodes();
    console.log(this.nodes);
    $(document).ready(function () {
      $('.down-main').click(function () {
        $('body, html').animate({
          scrollTop: '100px'
        }, 700);
      });
    });
  }


}
