import { OnInit, Component } from "@angular/core";
import { CustomCardService, Slide } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
    
    sliderArray:Slide[];
    
    constructor(
        private _http:CustomCardService
    ) {
        this.sliderArray = this._http.getSliderData();
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}