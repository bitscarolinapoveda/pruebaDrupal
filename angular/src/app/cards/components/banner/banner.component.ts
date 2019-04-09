import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { General } from '../blurb/blurb.component';
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

    constructor(
        router: ActivatedRoute,
        private banner: CustomCardService,
    ) {
        this.uuid = '';
        this.bannerDescrip = '';
        this.titulo = '';
    }

    ngOnInit() {
        if (this.titulo !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            this.getTitle();
            this.bannerTitle = this.titulo;
        } else {
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
                this.bannerBackground = params.field_image.url;
            } else {
                this.bannerBackground = this.imgFondo;
            }
        });
    }

    getProductsAndServicesItems() {
        this.banner.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalBanner = this.banner.clone(items);
            this.principalBanner.data = this.banner.addImageField(this.principalBanner.data, ['field_short_image']);
            this.principalBanner.data = this.banner.addImageField(this.principalBanner.data, ['field_large_image']);
            const servicesProduct = this.principalBanner.data;
            for (let index = 0; index < servicesProduct.length; index++) {
                if (servicesProduct[index].url.indexOf(this.titulo) > -1 && servicesProduct[index].field_large_image !== undefined) {
                    this.bannerBackground = servicesProduct[index].field_large_image.url;
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
