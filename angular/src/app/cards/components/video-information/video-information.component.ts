import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';
@Component({
    selector: 'app-video-information',
    templateUrl: './video-information.component.html',
    styleUrls: ['./video-information.component.scss']
})
export class VideoInformationComponent implements OnInit {
    videoURL: string;
    videoURLSanitizer: SafeUrl;
    titleSection: string;
    descriptionSection: string;
    link: string;
    @Output() propagar = new EventEmitter<DataMenu>();
    datosMenu: DataMenu;
    @Input() type: string;
    visible: boolean;
    principalVideoInformation: General;
    linkExternal: boolean;
    titleInternalMenu: string;

    constructor(
        private https: CustomCardService,
        private sanitizer: DomSanitizer) {
        this.visible = false;
        this.titleInternalMenu = '';
    }

    ngOnInit() {
        this.getVideoInformationService();
    }

    getVideoInformationService() {
        this.https.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalVideoInformation = this.https.getFilterPrincipalType(items, 'field_video', this.type);

            this.https.getCustomCardInformation('videoplusinformation').subscribe(params => {
                params = this.https.getFilterLists(this.principalVideoInformation, params);
                if (params.data.length !== 0) {
                    this.titleSection = params.data[0].title;
                    this.descriptionSection = params.data[0].body;
                    this.titleInternalMenu = params.header[0].data.internal_menu_title;
                    this.videoURL = params.data[0].field_url_video[0].uri;
                    if (this.videoURL.includes('watch?v=')) {
                        this.videoURLSanitizer = this.sanitizer
                            .bypassSecurityTrustResourceUrl(`${this.videoURL.split('watch?v=')
                            [0]}embed/${this.videoURL.split('watch?v=')[1]}`);
                    } else {
                        this.videoURLSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
                    }
                    this.link = params.data[0].field_url_video[0].uri;
                    this.linkExternal = params.data[0].field_url_video[0].external;
                    if (this.titleSection !== '' && this.videoURLSanitizer !== '') {
                        this.visible = true;
                        this.datosMenu = {
                            label: this.titleInternalMenu,
                            id: 'a7',
                            url: '/imedical'
                        };
                        this.propagar.emit(this.datosMenu);
                    }
                }
            }
            );
        });
    }
}
