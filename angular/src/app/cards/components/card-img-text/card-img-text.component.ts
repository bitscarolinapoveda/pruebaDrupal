import { OnInit, Component, Input } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';

@Component({
    selector: 'app-card-img-text',
    templateUrl: './card-img-text.component.html',
    styleUrls: ['card-img-text.component.scss']
})
export class CardImgTextComponent implements OnInit {
    public titleL: string;
    public cardImgL: any[];
    public titleR: string;
    public cardImgR: any[];

    // Si se recibe IT : Imagen luego texto
    // Si se recibe TI : Texto luego imagen
    @Input() orientacion: string;

    constructor(
        private _http: CustomCardService
    ) {
        this.orientacion = '';
        this.cardImgL = [];
        this.cardImgR = [];
    }

    ngOnInit() {
        this.getCardImgTextServiceL();
        this.getCardImgTextServiceR();
    }

    getCardImgTextServiceL() {
        this._http.getCustomCardInformation('mediaimedicalcard_2').subscribe(params => {
            this.titleL = params.header[0].data.title;
            this.cardImgL = params.data;
        });
    }
    getCardImgTextServiceR() {
        this._http.getCustomCardInformation('mediaimedicalcard').subscribe(params => {
            this.titleR = params.header[0].data.title;
            this.cardImgR = params.data;
        });
    }
}
