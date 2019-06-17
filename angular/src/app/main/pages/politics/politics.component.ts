import { OnInit, Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-politics-page',
    templateUrl: './politics.component.html',
    styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        $('#float-social-block').removeClass('ocultar-phone');
    }
}
