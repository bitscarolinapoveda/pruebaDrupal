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
    @Input() urlservprod: string;
    @Input() imgFondo: string;
    bannerTitle: any = [];
    bannerBackground: any = [];
    medius = '550px';
    bannerDescrip: string;
    principalBanner: General;
    languagueBrowser: any;
    ruta: any;
    contact: false;
    phoneWidth = 500 * window.devicePixelRatio + 'w';
    tabletWidth = 1024 * window.devicePixelRatio + 'w';
    sxgaScreen = 1280 * window.devicePixelRatio + 'w';
    hdScreen = 1366 * window.devicePixelRatio + 'w';
    fhdScreen = 1920 * window.devicePixelRatio + 'w';

    bandera_sevice = false;
    constructor(
        private router: Router,
        private banner: CustomCardService,
        private textFilter: TextService
    ) {
        this.uuid = '';
        this.bannerDescrip = '';
        this.urlservprod = '';
        this.languagueBrowser = '';
        this.ruta = '';
    }

    ngOnInit() {
        this.router.events.subscribe((url: any) => url);
        this.ruta = this.router.url;

        $(window).scrollTop(0);
        this.languagueBrowser = this.banner.getLanguageBrowser();
        if (this.urlservprod !== '' && (this.imgFondo === '' || this.imgFondo === undefined)) {
            this.bandera_sevice = true;
            this.getProductsAndServicesItems();
        } else if (this.uuid === undefined || this.uuid === '') {
            this.bannerTitle = this.urlservprod;
            //this.uuid == "39ce2484-2be2-470b-9768-fed85f14bc87" ? this.contact = true : this.contact = false;
        } else {
            this.bandera_sevice = true;
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
            this.principalBanner.data = this.banner.addImageField(this.principalBanner.data, ['field_large_image']);
            const servicesProduct = this.principalBanner.data;
            let bnVerContenido = false;
            let bnRedirigirPorCambioDeIdioma = false;
            //  Pasa por cada uno de los productos o servicios
            for (let index = 0; index < servicesProduct.length; index++) {
                if (window.location.pathname == servicesProduct[index].url) {
                    if (this.languagueBrowser
                        && servicesProduct[index].others_urls[this.languagueBrowser]
                        && servicesProduct[index].url != servicesProduct[index].others_urls[this.languagueBrowser]) {
                            this.router.navigate([servicesProduct[index].others_urls[this.languagueBrowser]]);
                    }
                    else {
                        bnVerContenido = true;
                    }
                }
                else {
                    for (let value in servicesProduct[index].others_urls) {
                        var titulo_comd = servicesProduct[index].others_urls[value];
                        if (window.location.pathname == titulo_comd) {
                            if (this.languagueBrowser
                                && servicesProduct[index].others_urls[this.languagueBrowser]) {
                                this.router.navigate([servicesProduct[index].others_urls[this.languagueBrowser]]);
                                bnVerContenido = true;
                            }
                        }
                    }
                }
                //  Debido a que es la misma URL cargamos la información del contenido
                if (bnVerContenido) {
                    this.banner.getMetaService(servicesProduct[index].field_meta_tags);
                    this.bannerBackground = servicesProduct[index].field_large_image;
                    this.bannerDescrip = this.textFilter.filterHtml(servicesProduct[index].field_descriptions);
                    this.bannerTitle = servicesProduct[index].title;
                    break;
                }
            }
            if (!bnVerContenido) {
                this.router.navigate(['/error']);
            }
        });
    }
}
