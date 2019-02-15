import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-client-card',
    templateUrl: './client-card.component.html',
    styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit{
    
    titleCard:string;
    imgSrcClient:string;
    nameClient:string;

    constructor(
        private _http : CustomCardService
    ){
        this.titleCard = "El Cliente";
        this.nameClient = "Universidad Javeriana"
        this.imgSrcClient = "/assets/images/logo-javeriana.png";
    }

    ngOnInit(){
        //this.getClientCardService();
    }

    getClientCardService(){
        this._http.getCustomCardInformation('client-card').subscribe( params => {
            this.titleCard = params.data[0].title;
            this.imgSrcClient = params.data[0].src;
            this.nameClient = params.data[0].name;
        });
    }
}