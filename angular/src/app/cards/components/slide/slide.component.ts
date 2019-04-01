import { OnInit, Component, Input } from "@angular/core";
import { CustomCardService, Slide } from "src/app/services/cards/v1-card.services";
declare var $: any;

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

    @Input() slide: Slide;

    constructor(
    ) {
        $('.text-light li').prepend('<i class=\"far fa-question-circle\"></i>');
    }

    ngOnInit(): void {
        $('.text-light li').prepend('<i class=\"far fa-question-circle\"></i>');
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}
