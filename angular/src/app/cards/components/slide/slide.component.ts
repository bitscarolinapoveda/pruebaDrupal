import { OnInit, Component, Input } from "@angular/core";
import { CustomCardService, Slide } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit{
    
    @Input() slide:Slide;

    constructor(
        private _http:CustomCardService
    ) {

        this.slide = {
            titleSlide : "Título de la diapositiva",
            subtitleSlide : "Subtitulo de diapositiva",
            descriptionSlide : "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
            listTextSlide : ['Caracteristica #1','Caracteristica #2','Caracteristica #3'],
            imgSrcSlide : "/assets/images/phone-mockup.png",
            bkgSrcSlide : "/assets/images/fondo-hospital.jpg"
        }
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}