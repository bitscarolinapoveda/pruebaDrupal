import { OnInit, Component, Input } from '@angular/core';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
declare var $: any;

@Component({
    selector: 'app-menu-template',
    templateUrl: './menu-template.component.html',
    styleUrls: ['./menu-template.component.scss']
})
export class MenuTemplateComponent implements OnInit {

    @Input() menuList: DataMenu[];

    constructor(private router: ActivatedRoute, private service: HttpService,
        private _http: CustomCardService
    ) {

    }

    ngOnInit() {
        // this.getMenuTemplateService();
    }

    getMenuTemplateService() {
        this._http.getCustomCardInformation('menu-template').subscribe(params => {
            this.menuList = params.data[0].menu;
        });
    }

    ubicaciones(id) {
        const x = document.querySelector('#' + id);
        console.log(x);
        if (x) {
            x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
        }
    }
}
export interface DataMenu {
    label: string;
    url: string;
    id: string;
}
