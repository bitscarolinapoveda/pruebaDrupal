import { Component, OnInit } from '@angular/core';
import { TitileService } from '../../../services/cards/titiles.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
    titleArray: any = [];
    constructor(private title: TitileService) {

    }
    ngOnInit() {
        this.getTitiles();
    }
    getTitiles() {
        this.title.getTitle().subscribe(items => {
            this.titleArray = items.data;
        });
    }

}
