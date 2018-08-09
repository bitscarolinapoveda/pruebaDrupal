import { Component, OnInit } from '@angular/core';

import { NodeService, Node } from '../../../services/cards/node.service';

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
  }

}
