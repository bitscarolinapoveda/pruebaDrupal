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

    /* tituloCard:string;
    subitituloCard:string;
    descripcionCard:string;
    linkCard:string;
    linkLabelCard:string;
     */
    // imagenCard: string;
    // Si se recibe IT : Imagen luego texto
    // Si se recibe TI : Texto luego imagen
    @Input() orientacion: string;

    constructor(
        private _http: CustomCardService
    ) {
        /* this.tituloCard = "Título de este card con imagen";
        this.subitituloCard = "Sint labore exercitation sint voluptate aliqua commodo Alegna.";
        this.descripcionCard = "Lorem ";
        this.linkCard = "www.loremipsum.com";
        this.linkLabelCard = "Ver CASOS DE ÉXITO de este producto";
         */
        // this.imagenCard = 'assets/images/imagen-iz-de-web.png';
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
            /* this.tituloCard = params.data[0].titulo;
            this.subitituloCard = params.data[0].subtitulo;
            this.descripcionCard = params.data[0].descripcion;
            this.linkCard = params.data[0].link;
            this.linkLabelCard = params.data[0].label;
            this.imagenCard = params.data[0].imagen;  */
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
