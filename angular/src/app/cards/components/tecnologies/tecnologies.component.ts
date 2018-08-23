import { Component, OnInit } from '@angular/core';
import { TecnologiesService } from '../../../services/cards/tecnologies.service';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent implements OnInit {
    tecnologiesArray: any = [];

    constructor( private _tecnologies: TecnologiesService ) {}
    ngOnInit() {
        console.log('hi from experts');
        this.getItemsTecnologies();
    }

    getItemsTecnologies() {
        return this._tecnologies.getTecnologies().subscribe(items => {
            this.tecnologiesArray = Object.keys(items.data).map(function (key) {
                return items.data[key];
            });
            console.log(this.tecnologiesArray);
        });
    }
}
