import { OnInit, Component, Input } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
declare var $: any;

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    titulo: string;
    list: string;

    // Se recibe uuid
    @Input() uuid: string;

    constructor(
        private _http: CustomCardService
    ) {
        this.uuid = '';
    }

    ngOnInit() {
        this.getPoliticService();

    }

    getPoliticService() {
        this._http.getCustomContentBasicPage(this.uuid).subscribe(params => {
            this.titulo = params.title;
            this.list = params.body;
        });
    }

}

export interface Post {
    tituloPost: string;
    subtituloPost: string;
    descripcionPost: string;
}
