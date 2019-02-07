import { OnInit, Component } from "@angular/core";
import { CustomCardService } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

    titulo:string;
    fechaPublicacion:string;
    postList:Post[] 

    constructor(
        private _http:CustomCardService
    ) {
        this.titulo = "Política de privacidad BITS Americas S.A.S";
        this.fechaPublicacion = "Febrero 22, 2018";
        this.postList = [{
            tituloPost : "Qui aliquip ex elit aliquip.",
            subtituloPost : "Laborum aliquip in ipsum nulla sint consequat",
            descripcionPost : "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
        },{
            tituloPost : "Qui aliquip ex elit aliquip.",
            subtituloPost : "Laborum aliquip in ipsum nulla sint consequat",
            descripcionPost : "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
        },{
            tituloPost : "Qui aliquip ex elit aliquip.",
            subtituloPost : "Laborum aliquip in ipsum nulla sint consequat",
            descripcionPost : "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
        }];
    }

    ngOnInit(){}

    getPoliticService(){
        this._http.getCustomCardInformation('politics').subscribe(params => {
            
        });
    }
}

export interface Post{
    tituloPost:string;
    subtituloPost:string;
    descripcionPost:string;
}