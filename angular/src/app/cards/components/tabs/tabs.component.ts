import { Component, OnInit } from '@angular/core';
import { TabsService } from '../../../services/cards/tabs.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
    tabsArray: any = [];
    tabRight: any = [];
    constructor(private https: TabsService) {

    }

    ngOnInit() {
        this.getTabs();
    }

    getTabs() {
      return  this.https.getTabs().subscribe(items =>{
          this.tabsArray = items.data.left_title;
          this.tabRight = items.data.right_title;
      });
    }
}

