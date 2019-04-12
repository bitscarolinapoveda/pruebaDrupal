import { OnInit, Component, Input } from '@angular/core';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { NgxCarousel } from 'ngx-carousel';
declare var $: any;

@Component({
    selector: 'app-menu-template',
    templateUrl: './menu-template.component.html',
    styleUrls: ['./menu-template.component.scss']
})
export class MenuTemplateComponent implements OnInit {

    @Input() menuList: DataMenu[];
    CarouselControlArray: any = [];
    public carouselOne: NgxCarousel;

    constructor(private router: ActivatedRoute, private service: HttpService,
        private _http: CustomCardService
    ) {

    }

    ngOnInit() {
        // this.getMenuTemplateService();
        this.carouselOne = {
            grid: { xs: 3, sm: 3, md: 4, lg: 4, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false
            },
            load: 4,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    }

    getMenuTemplateService() {
        this._http.getCustomCardInformation('menu-template').subscribe(params => {
            this.menuList = params.data[0].menu;
        });
    }

    ubicaciones(id) {
        const x = document.querySelector('#' + id);
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
