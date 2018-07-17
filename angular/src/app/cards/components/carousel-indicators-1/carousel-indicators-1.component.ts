import { Component, OnInit } from '@angular/core';

import { NodeService, Node} from '../../../services/cards/node.service';

@Component({
  selector: 'app-carousel-indicators-1',
  templateUrl: './carousel-indicators-1.component.html',
  styleUrls: ['./carousel-indicators-1.component.scss']
})
export class CarouselIndicators1Component implements OnInit {

  nodes: Node[] = [];

  constructor(  private _nodeService: NodeService ) {

  }
  ngOnInit(){
    this.nodes = this._nodeService.getNodes();
    console.log(this.nodes);
  }

}
