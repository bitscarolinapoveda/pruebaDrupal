import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
    titleArray: any = [];
    constructor(
        private title: CustomCardService,
    ) {}

    ngOnInit() {
        this.getTitiles();
    }
    getTitiles() {
        this.title.getCustomCardInformation('contact_title').subscribe(items => {
            this.titleArray = items.header[0].data.title;
        });
    }

}
