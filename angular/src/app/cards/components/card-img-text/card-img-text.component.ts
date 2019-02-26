import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

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

    @Output() propagar = new EventEmitter<DataMenu>();

    datosMenu: DataMenu;

    @Input() type: string;

    constructor(
        private _http: CustomCardService
    ) {
        this.orientacion = '';
        this.cardImgL = [];
        this.cardImgR = [];
    }

    ngOnInit() {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }

        if (this.orientacion === 'IT') {
            this.datosMenu = {
                label: 'IMAG L',
                id: 'a3',
                url: '/imedical'
            };
        } else {
            this.datosMenu = {
                label: 'IMAG R',
                id: 'a4',
                url: '/imedical'
            };
        }

        this.propagar.emit(this.datosMenu);

        this.getCardImgTextServiceL();
        this.getCardImgTextServiceR();
    }

    getCardImgTextServiceL() {
        this._http.getCustomCardInformationType('mediaimedicalcard_2', this.type).subscribe(params => {
            this.titleL = params.header[0].data.title;
            this.cardImgL = params.data;
        });
    }
    getCardImgTextServiceR() {
        this._http.getCustomCardInformationType('mediaimedicalcard', this.type).subscribe(params => {
            this.titleR = params.header[0].data.title;
            this.cardImgR = params.data;
        });
    }
}
