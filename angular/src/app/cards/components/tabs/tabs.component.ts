import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {

    arrayTabs:Tab[] = [];
    ids:number = 0;
    size:number;

    constructor(
        private https: CustomCardService,
    ) {}

    ngOnInit() {

    }

    mostrar(link:number){
        this.ids = link;
        console.log(this.ids);
    }
}

export interface Tab{
    titulo:string;
    icontab:string;
    urlicon:string;
    alticon:string;
    contenido:string;
}

