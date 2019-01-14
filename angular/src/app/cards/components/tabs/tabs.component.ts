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
        this.getTabs();
    }

    getTabs() {
      return  this.https.getTabsData().subscribe(items =>{
        this.size = items.length;
        for (let tabItem of items) {
            let objectTab:Tab = {titulo:"",icontab:"",urlicon:"",alticon:"",contenido:""};
            objectTab.titulo = tabItem.titulo_tab;
            objectTab.icontab = tabItem.icon_tab;
            objectTab.urlicon = tabItem.url_icon_tab;
            objectTab.alticon = tabItem.alt_icon_tab;
            objectTab.contenido = tabItem.body;
            this.arrayTabs.push(objectTab);
        }
      });
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

