import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { General } from '../blurb/blurb.component';

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


    phoneWidth = 500 * window.devicePixelRatio;
    tabletWidth = 1024 * window.devicePixelRatio;
    sxgaScreen = 1280 * window.devicePixelRatio;
    hdScreen = 1366 * window.devicePixelRatio;
    fhdScreen = 1920 * window.devicePixelRatio;

    bandera_sevice = false;
    constructor(
        router: ActivatedRoute,
        private banner: CustomCardService,
    ) {
        this.uuid = '';
        this.bannerDescrip = '';
        this.titulo = '';
    }

    ngOnInit() {
        $(window).scrollTop(0);
        if (this.titulo !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.bandera_sevice = false;
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            console.log("ENTRO A OTRA 2");
            this.getTitle();
            this.bannerTitle = this.titulo;
        } else {
            console.log("BASICA");
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
        this.banner.getCustomContentBasicPage(this.uuid).subscribe(params => {
            this.bannerTitle = params.title;
            this.bannerDescrip = params.body;
            if (this.bannerDescrip === null) {
                this.bannerDescrip = '';
            }
            if (this.imgFondo === '') {
                console.log(params.field_image);
 
                this.bannerBackground = params.field_image;
            } else {
                console.log("NAAAA");
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
            for (let index = 0; index < servicesProduct.length; index++) {
                if (servicesProduct[index].url.indexOf(this.titulo) > -1 && servicesProduct[index].field_large_image !== undefined) {
     
                    this.bannerBackground = servicesProduct[index].field_large_image.url;
                    this.bannerDescrip = servicesProduct[index].field_descripcion;
                }
            }
            if (this.titulo !== '') {
                while (this.titulo.indexOf('-') > -1) {
                    this.titulo = this.titulo.replace('-', ' ');
                }
            }
            this.bannerTitle = this.titulo;
        });
    }
}
