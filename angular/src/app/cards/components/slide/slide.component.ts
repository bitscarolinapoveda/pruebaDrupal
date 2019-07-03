import { OnInit, Component, Input } from "@angular/core";
import { CustomCardService, Slide } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

    @Input() slide: Slide;

    constructor(
    ) {
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
