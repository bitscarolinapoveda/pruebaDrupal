import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
    @Input() uuid: string;
    @Input() titulo: string;
    @Input() imgFondo: string;
    bannerTitle: any = [];
    bannerBackground: any = [];
    medius = '550px';
    bannerDescrip: string;
    constructor(
        router: ActivatedRoute,
        private banner: CustomCardService,
    ) {
        this.uuid = '';
    }

    ngOnInit() {
        if (this.imgFondo !== '') {
            this.bannerBackground = this.imgFondo;
        } else {
            this.bannerBackground = '/assets/images/cabezerainternaweb.png';
        }
        this.getBannerService();
    }

    getBannerService() {
        console.log(this.uuid);
        this.banner.getCustomContentBasicPage(this.uuid).subscribe(params => {
            this.bannerTitle = params.title;
            this.bannerDescrip = params.body;
        });
    }
}
