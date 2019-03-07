import { OnInit, Component } from "@angular/core";
import { CustomCardService, Slide } from "src/app/services/cards/v1-card.services";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    sliderArray: Slide[];

    constructor(private _cardService: CustomCardService) {
        this.sliderArray = [];
    }
    ngOnInit() {
        this.getSliderItems();
    }
    getSliderItems() {
        this._cardService.getCustomCardInformation('sliderbackmediarightcard').subscribe(items => {
            let sliders = [];
            for (let item of items.data) {
                let slide: Slide;
                slide = {
                    titleSlide: item.title,
                    subtitleSlide: item.field_subtitle,
                    descriptionSlide: item.field_des,
                    listTextSlide: [],
                    imgSrcSlide: item.field_right_image.url,
                    bkgSrcSlide: item.field_background_image.url,
                };
                sliders.push(slide);
            }
            this.sliderArray = sliders;
        });
    }
}