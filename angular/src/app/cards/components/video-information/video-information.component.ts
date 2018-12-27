import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

    constructor( 
        private https: CustomCardService,
        private sanitizer: DomSanitizer ){}

    ngOnInit(){
        this.getVideoInformationService();
    }

    getVideoInformationService(){
        this.https.getCustomCardInformation('videoplusinformation').subscribe( items => {
            this.titleSection = items.data[0].title;
            this.descriptionSection = items.data[0].body;
            this.videoURL = items.data[0].field_url_video.split(',')[0];
            if(this.videoURL.includes("watch?v=")){
                this.videoURLSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(`${ this.videoURL.split('watch?v=')[0] }embed/${ this.videoURL.split('watch?v=')[1] }`);
            }else{
                this.videoURLSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
            }
        }
        );
        
    }
}

