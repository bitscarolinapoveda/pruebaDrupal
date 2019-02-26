import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataMenu } from '../menu-template/menu-template.component';

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
    @Input() link: string;

    @Output() propagar = new EventEmitter<DataMenu>();

    datosMenu: DataMenu;

    constructor(
        private https: CustomCardService,
        private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.datosMenu = {
            label: 'VIDEOS',
            id: 'a7',
            url: '/imedical'
        };

        this.propagar.emit(this.datosMenu);
        this.getVideoInformationService();
    }

    getVideoInformationService() {
        this.https.getCustomCardInformation('videoplusinformation').subscribe(items => {
            this.titleSection = items.data[0].title;
            this.descriptionSection = items.data[0].body;
            this.videoURL = items.data[0].field_url_video.split(',')[0];
            if (this.videoURL.includes('watch?v=')) {
                this.videoURLSanitizer = this.sanitizer
                .bypassSecurityTrustResourceUrl(`${this.videoURL.split('watch?v=')[0]}embed/${this.videoURL.split('watch?v=')[1]}`);
            } else {
                this.videoURLSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
            }
            // this.link = items.data[0].link;
        }
        );

    }
}
