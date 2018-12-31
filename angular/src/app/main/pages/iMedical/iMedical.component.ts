import { Component, OnInit } from '@angular/core';
import { CustomCardService, Blurb } from '../../../services/cards/v1-card.services';


@Component({
    selector: 'app-iMedical',
    templateUrl: './iMedical.component.html',
    styleUrls: ['./iMedical.component.scss']
})
export class iMedicalComponent implements OnInit{

    blurbArray:Blurb[];
    tituloModulos:string;
    descripcionModulos:string;

    constructor(
        private _http:CustomCardService
    ) {
        this.blurbArray = this._http.getBlurbData();
        this.tituloModulos = "Módulos";
        this.descripcionModulos = "Incididunt reprehenderit labore laboris veniam deserunt cillum aliqua."
    }

    ngOnInit(){
        //this.getiMedicalService();
    }

    getiMedicalService(){
        this._http.getCustomCardInformation('imedical').subscribe( params => {
            this.tituloModulos = params.data[0].titulo_modulos;
            this.descripcionModulos = params.data[0].descripcion_modulos;
        });
    }
}