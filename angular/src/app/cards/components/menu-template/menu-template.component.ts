import { OnInit, Component } from "@angular/core";
import { CustomCardService } from '../../../services/cards/v1-card.services';


@Component({
    selector: 'app-menu-template',
    templateUrl: './menu-template.component.html',
    styleUrls: ['./menu-template.component.scss']
})
export class MenuTemplateComponent implements OnInit{
    
    menuList:Menu[];
    
    constructor(
        private _http : CustomCardService
    ) {
        this.menuList = [
            {
                label : "Módulos",
                url : "/menu1"
            },
            {
                label : "Tecnologías",
                url : "/menu2"
            },
            {
                label : "Testimonios",
                url : "/menu3"
            },
            {
                label : "Logros",
                url : "/menu4"
            },
            {
                label : "Screenshot",
                url : "/menu5"
            },
            {
                label : "Equipos",
                url : "/menu5"
            },
            {
                label : "Videos",
                url : "/menu5"
            },
            {
                label : "Clientes",
                url : "/menu5"
            },
            {
                label : "Relacionados",
                url : "/menu5"
            }
        ];
    }

    ngOnInit(){
        //this.getMenuTemplateService();
    }

    getMenuTemplateService(){
        this._http.getCustomCardInformation('menu-template').subscribe( params => {
            this.menuList = params.data[0].menu;
        });
    }
}

interface Menu{
    label:string;
    url:string;
}