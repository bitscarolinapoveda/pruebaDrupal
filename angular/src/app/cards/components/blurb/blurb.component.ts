import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Blurb, CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

@Component({
    selector: 'app-blurb',
    templateUrl: './blurb.component.html',
    styleUrls: ['./blurb.component.scss']
})
export class BlurbComponent implements OnInit {

    @Input() blurb: Blurb;

    @Input() type: string;

    @Output() propagar = new EventEmitter<DataMenu>();

    datosMenu: DataMenu;

    constructor(
        private _http: CustomCardService
    ) {
        this.blurb = {
            imageSrc: 'assets/images/historiaclinicadesktop.png',
            title: 'titulo 1',
            description: 'hola mundo'
        };
    }

    ngOnInit() {

        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }

        this.datosMenu = {
            label: 'MÓDULOS',
            id: 'a1',
            url: '/products'
        };

        this.propagar.emit(this.datosMenu);
    }
}
