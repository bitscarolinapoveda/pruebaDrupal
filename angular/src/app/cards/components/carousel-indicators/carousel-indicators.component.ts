import { Component, OnInit } from '@angular/core';

import { NodeService, Node } from '../../../services/cards/node.service';
declare  var $: any;
@Component({
  selector: 'app-carousel-indicators',
  templateUrl: './carousel-indicators.component.html',
  styleUrls: ['./carousel-indicators.component.scss']
})
export class CarouselIndicatorsComponent implements OnInit {

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
