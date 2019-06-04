import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

declare var $: any;
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
    datosMenuL: DataMenu;
    datosMenuR: DataMenu;
    @Input() type: string;
    showL: boolean;
    showR: boolean;
    showPhone: boolean;

    constructor(
        private _http: CustomCardService
    ) {
        this.orientacion = '';
        this.cardImgL = [];
        this.cardImgR = [];
        this.visibleL = false;
        this.visibleR = false;
        this.showL = false;
        this.showR = false;
        this.showPhone = false;
    }

    ngOnInit() {
        if (this.orientacion === 'IT') {
            this.getCardImgTextServiceL();
        } else {
            this.getCardImgTextServiceR();
        }
    }

    getCardImgTextServiceL() {
        this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalL = this._http.getFilterPrincipalType(items, 'field_left_media', this.type);

            this._http.getCustomCardInformation('mediaimedicalcard_2').subscribe(params => {
                params = this._http.getFilterLists(this.principalL, params);
                if (params.data[0] !== undefined) {
                    this.titleL = params.data[0].field_subtitulo;
                }
                params.data = this._http.addImageField(params.data, ['field_imagen_media_product']);
                this.cardImgL = params.data;
                if (this.cardImgL.length !== 0) {
                    this.visibleL = true;
                    this.datosMenuL = {
                        label: 'IMAG L',
                        id: 'a3',
                        url: '/imedical'
                    };
                    this.propagar.emit(this.datosMenuL);
                }
            });
        });

    }
    getCardImgTextServiceR() {

        this._http.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
            this.principalR = this._http.getFilterPrincipalType(items, 'field_right_media', this.type);

            this._http.getCustomCardInformation('mediaimedicalcard').subscribe(params => {
                params = this._http.getFilterLists(this.principalR, params);
                if (params.data[0] !== undefined) {
                    this.titleR = params.data[0].field_subtitulo;
                }
                params.data = this._http.addImageField(params.data, ['field_imagen_media_product']);
                this.cardImgR = params.data;
                if (this.cardImgR.length !== 0) {
                    this.visibleR = true;
                    this.datosMenuR = {
                        label: 'IMAG R',
                        id: 'a67',
                        url: '/imedical'
                    };
                    this.propagar.emit(this.datosMenuR);
                }
            });
        });
    }

    showImageL() {
        $('.showL .img-fluid').css('transform', 'translate(0,0)');
        $('.showL .img-fluid').css('opacity', '1');
    }

    showImageR() {
        $('.showR .img-fluid').css('transform', 'translate(0,0)');
        $('.showR .img-fluid').css('opacity', '1');
    }

    showImagePhone() {
        $('.showPhone .img-fluid').css('transform', 'translate(0,0)');
        $('.showPhone .img-fluid').css('opacity', '1');
    }
}
