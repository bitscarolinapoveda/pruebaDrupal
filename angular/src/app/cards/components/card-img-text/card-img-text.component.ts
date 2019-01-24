import { OnInit, Component, Input } from "@angular/core";
import { CustomCardService } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-card-img-text',
    templateUrl: './card-img-text.component.html',
    styleUrls: ['card-img-text.component.scss']
})
export class CardImgTextComponent implements OnInit{
    
    tituloCard:string;
    subitituloCard:string;
    descripcionCard:string;
    linkCard:string;
    linkLabelCard:string;
    imagenCard:string;
    //Si se recibe IT : Imagen luego texto
    //Si se recibe TI : Texto luego imagen
    @Input() orientacion:string;
    
    constructor(
        private _http:CustomCardService
    ) {
        this.tituloCard = "Título de este card con imagen";
        this.subitituloCard = "Sint labore exercitation sint voluptate aliqua commodo.";
        this.descripcionCard = "Lorem consectetur in enim cillum duis duis excepteur et minim adipisicing. Sint ea irure laboris in do irure do duis irure sint. Esse irure ex irure mollit exercitation. Nulla adipisicing enim reprehenderit occaecat ullamco eiusmod duis cupidatat quis. Elit aliquip officia deserunt tempor minim officia aliquip mollit minim anim nostrud veniam deserunt culpa.";
        this.linkCard = "www.loremipsum.com";
        this.linkLabelCard = "Ver CASOS DE ÉXITO de este producto";
        this.imagenCard = "assets/images/imagen-iz-de-web.png";
        this.orientacion = "";
    }

    ngOnInit(){
        //this.getCardImgTextService();
    }

    getCardImgTextService(){
        this._http.getCustomCardInformation('card-img-text').subscribe( params => {
            this.tituloCard = params.data[0].titulo;
            this.subitituloCard = params.data[0].subtitulo;
            this.descripcionCard = params.data[0].descripcion;
            this.linkCard = params.data[0].link;
            this.linkLabelCard = params.data[0].label;
            this.imagenCard = params.data[0].imagen;
        });
    }
}