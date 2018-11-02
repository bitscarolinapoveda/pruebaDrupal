import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
    tabLeft: any = [];
    tabRight: any = [];
    constructor(
        private https: CustomCardService,
    ) {}

    ngOnInit() {
        this.getTabs();
    }

    getTabs() {
      return  this.https.getCustomCardInformation('tabsvertical').subscribe(items =>{
          this.tabLeft = items.header[0].data;
          this.tabRight = items.header[1].data;
      });
    }
}

