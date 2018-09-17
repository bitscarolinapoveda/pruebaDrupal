import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../services/cards/banner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
    bannerArray: any = [];
    bannerimage: any = [];
    constructor(router: ActivatedRoute, private banner: BannerService) {}

    ngOnInit() {
        this.getBannerService();
    }
    getBannerService() {
        this.banner.getBanner().subscribe(items => {
            this.bannerArray = items.data;
            this.bannerimage = items.data.background;
            console.log(this.bannerimage);
        });
    }
}
