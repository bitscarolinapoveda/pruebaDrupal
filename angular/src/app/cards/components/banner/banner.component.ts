import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
    @Input() titulo: string = "";
    @Input() imgFondo: string = "";
    bannerTitle: any = [];
    bannerBackground: any = [];
    medius = '550px';
    constructor(
        router: ActivatedRoute,
        private banner: CustomCardService,
    ) { 
      }

    ngOnInit() {  
        console.log(`Mi titulo ${ this.titulo } y Mi Fondo ${ this.imgFondo }`);
        if (this.titulo != "") {
            this.bannerTitle = this.titulo.toUpperCase();
            if(this.imgFondo != ""){
                this.bannerBackground = this.imgFondo;
            }
        }
        else{
            this.getBannerService();
        }      
    }
    getBannerService() {
        this.banner.getCustomCardInformation('contact_banner').subscribe(items => {
            this.bannerTitle = items.header[0].data[0].title[0];
            this.bannerBackground = items.header[0].data[0].url[0];
        });
    }
}
