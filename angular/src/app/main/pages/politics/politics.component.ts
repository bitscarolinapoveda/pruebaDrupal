import { OnInit, Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-politics-page',
    templateUrl: './politics.component.html',
    styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {

    constructor(private meta: Meta) {
    }

    ngOnInit() {
        this.meta.removeTag('name="general"');
        this.meta.updateTag({ name: 'component', content: 'app-politics-page' });
    }
}
