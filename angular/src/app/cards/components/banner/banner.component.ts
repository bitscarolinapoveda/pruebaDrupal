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
        this.bannerDescrip = '';
        this.titulo = '';
    }

    ngOnInit() {
        if (this.titulo !== '') {
            while (this.titulo.indexOf('-') > -1) {
                this.titulo = this.titulo.replace('-', ' ');
            }
        }
        if (this.titulo !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            this.bannerTitle = this.titulo;
        } else {
            this.getBannerService();
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
        this.banner.getCustomCardInformation('productsandservicescard_2').subscribe(items => {
            const servicesProduct = items.data;
            for (let index = 0; index < servicesProduct.length; index++) {
                if (servicesProduct[index].nid === this.titulo) {
                    this.bannerBackground = servicesProduct[index].large_image[0].url;
                }
            }
        });
    }
}
