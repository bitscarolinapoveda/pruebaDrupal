import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { General } from '../blurb/blurb.component';
import { TextService } from 'src/app/services/text/text.service';

declare var $: any;
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
    principalBanner: General;
    languagueBrowser: any;

    phoneWidth = 500 * window.devicePixelRatio;
    tabletWidth = 1024 * window.devicePixelRatio;
    sxgaScreen = 1280 * window.devicePixelRatio;
    hdScreen = 1366 * window.devicePixelRatio;
    fhdScreen = 1920 * window.devicePixelRatio;

    bandera_sevice = false;
    constructor(
        private router: Router,
        private banner: CustomCardService,
        private textFilter: TextService
    ) {
        this.uuid = '';
        this.bannerDescrip = '';
        this.titulo = '';
        this.languagueBrowser = '';
    }

    ngOnInit() {
        $(window).scrollTop(0);
        this.languagueBrowser = this.banner.getLanguageBrowser();
        if (this.titulo !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.bandera_sevice = false;
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            this.getTitle();
            this.bannerTitle = this.titulo;
        } else {
            this.bandera_sevice = true;
            this.getTitle();
            this.getBannerService();
        }
    }

    getTitle() {
        if (this.titulo !== '') {
            while (this.titulo.indexOf('-') > -1) {
                this.titulo = this.titulo.replace('-', '_');
            }
        }
    }

    getBannerService() {
        this.banner.getMetaService(this.uuid);
        this.banner.getCustomContentBasicPage(this.uuid).subscribe(params => {
            this.bannerTitle = params.title;
            this.bannerDescrip = this.textFilter.filterHtml(params.body);
            if (this.bannerDescrip === null) {
                this.bannerDescrip = '';
            }
            if (this.imgFondo === '') {
                if (params.field_image === undefined) {
                    this.bandera_sevice = false;
                } else {
                    this.bannerBackground = params.field_image;
                }
            } else {
                this.bannerBackground = this.imgFondo;
            }
        });
    }

    getProductsAndServicesItems() {
        this.banner.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalBanner = items;
            this.principalBanner.data = this.banner.addImageField(this.principalBanner.data, ['field_short_image']);
            this.principalBanner.data = this.banner.addImageField(this.principalBanner.data, ['field_large_image']);
            const servicesProduct = this.principalBanner.data;
            let cont = 0;
            for (let index = 0; index < servicesProduct.length; index++) {
                cont = 0;
                for (let value in servicesProduct[index].others_urls) {
                    if (servicesProduct[index].others_urls[value].indexOf(this.titulo) > -1 &&
                     servicesProduct[index].field_large_image !== undefined) {
                      cont ++;
                    }
                }
                if (cont > 0) {
                       this.bannerBackground = servicesProduct[index].field_large_image.url;
                       this.bannerDescrip = this.textFilter.filterHtml(servicesProduct[index].field_descriptions);
                       this.bannerTitle = servicesProduct[index].title;
                       this.router.navigate([servicesProduct[index].others_urls[this.languagueBrowser]]);
                       break;
                }
            }
            if (cont === 0) {
                this.router.navigate(['/error']);
            }
        });
    }
}
