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
    ruta: any;
    contact: false;
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
        this.ruta = '';
    }

    ngOnInit() {
        this.router.events.subscribe((url: any) => url);
        this.ruta = this.router.url;

        $(window).scrollTop(0);
        this.languagueBrowser = this.banner.getLanguageBrowser();
        if (this.titulo !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.bandera_sevice = false;
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            this.getTitle();
            this.bannerTitle = this.titulo;
            //this.uuid == "39ce2484-2be2-470b-9768-fed85f14bc87" ? this.contact = true : this.contact = false;
            //console.log(this.contact);
        } else {
            this.bandera_sevice = true;
            this.getTitle();
            this.getBannerService();
        }

        // VALIDA SI EL UUID ES IGUAL  CONTÁCTENOS PARA OCULTAR EL SOBRE
        if ($("app-banner").attr("uuid") == "39ce2484-2be2-470b-9768-fed85f14bc87") {

            setTimeout(function () {
                $(".envolope").hide();
                }, 1000);

             } else {
                 $(".envolope").show();
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
            this.banner.getMetaService(params.metatags);
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
            if (this.ruta.indexOf('title-description') === -1) {
                if (params.others_urls[this.languagueBrowser] !== '' &&
                    params.others_urls[this.languagueBrowser] !== '/' + this.languagueBrowser &&
                    params.others_urls[this.languagueBrowser] !== '/node') {
                    this.router.navigate([params.others_urls[this.languagueBrowser]]);
                }
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
                    var titulo_comd = servicesProduct[index].others_urls[value].split('/');
                    if (value === 'es') {
                        var result = titulo_comd[2];
                    } else {
                        var result = titulo_comd[3];
                    }
                    if (result !== undefined) {
                        if (result.indexOf(this.titulo) > -1 &&
                            servicesProduct[index].field_large_image !== undefined) {
                            cont++;
                        }
                    }
                }
                if (cont > 0) {
                    this.banner.getMetaService(servicesProduct[index].field_meta_tags);
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
