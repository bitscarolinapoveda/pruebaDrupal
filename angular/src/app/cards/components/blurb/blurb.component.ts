import { OnInit, Component, Input } from "@angular/core";
import { Blurb, CustomCardService } from '../../../services/cards/v1-card.services';


@Component({
    selector: 'app-blurb',
    templateUrl: './blurb.component.html',
    styleUrls: ['./blurb.component.scss']
})
export class BlurbComponent implements OnInit{

    @Input() blurb:Blurb;

    constructor(
        private _http:CustomCardService
    ) {
        this.blurb = {
            imageSrc : 'assets/images/historiaclinicadesktop.png',
            title: 'titulo 1',
            description: 'hola mundo'
        }
    }

    ngOnInit(){}
}