import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';
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
    visibleL: boolean;
    visibleR: boolean;
    principalL: General;
    principalR: General;
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
        this.visibleL = false;
        this.visibleR = false;
    }

    ngOnInit() {
        this.getCardImgTextServiceL();
        this.getCardImgTextServiceR();
    }

    getCardImgTextServiceL() {
        this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalL = this._http.getFilterPrincipalType(items, 'field_left_media', this.type);

            this._http.getCustomCardInformation('mediaimedicalcard_2').subscribe(params => {
                params = this._http.getFilterLists(this.principalL, params);
                this.titleL = params.data[0].field_subtitulo;
                params.data = this._http.addImageField(params.data, ['field_imagen_media_product']);
                this.cardImgL = params.data;
                if (this.cardImgL.length !== 0) {
                    this.visibleL = true;
                    this.datosMenu = {
                        label: 'IMAG L',
                        id: 'a3',
                        url: '/imedical'
                    };
                    this.propagar.emit(this.datosMenu);
                }
            });
        });

    }
    getCardImgTextServiceR() {

        this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalR = this._http.getFilterPrincipalType(items, 'field_right_media', this.type);

            this._http.getCustomCardInformation('mediaimedicalcard').subscribe(params => {
                params = this._http.getFilterLists(this.principalR, params);
                this.titleR = params.data[0].field_subtitulo;
                params.data = this._http.addImageField(params.data, ['field_imagen_media_product']);
                this.cardImgR = params.data;
                if (this.cardImgR.length !== 0) {
                    this.visibleR = true;
                    this.datosMenu = {
                        label: 'IMAG R',
                        id: 'a4',
                        url: '/imedical'
                    };
                    this.propagar.emit(this.datosMenu);
                }
            });
        });
    }
}
