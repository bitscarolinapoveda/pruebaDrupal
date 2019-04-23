import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService, Slide } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';

declare var $: any;
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    sliderArray: Slide[];
    @Output() propagar = new EventEmitter<DataMenu>();
    datosMenu: DataMenu;
    @Input() type: string;
    principalSlider: General;
    visible: boolean;

    constructor(private _cardService: CustomCardService) {
        this.sliderArray = [];
    }
    ngOnInit() {
        this.getSliderItems();
    }
    getSliderItems() {
        this._cardService.getCustomCardInformation('allproductsandservicescard_2').subscribe(params => {
            this.principalSlider = this._cardService.getFilterPrincipalType(params, 'field_slider', this.type);

            this._cardService.getCustomCardInformation('sliderbackmediarightcard').subscribe(items => {
                items = this._cardService.getFilterLists(this.principalSlider, items);
                items.data = this._cardService.addImageField(items.data, ['field_background_image']);
                items.data = this._cardService.addImageField(items.data, ['field_right_image']);
                let sliders = [];
                for (let item of items.data) {
                    let slide: Slide;
                    slide = {
                        titleSlide: item.title,
                        subtitleSlide: item.field_subtitle,
                        descriptionSlide: item.body,
                        listTextSlide: [],
                        imgSrcSlide: item.field_right_image.url,
                        bkgSrcSlide: item.field_background_image.url,
                    };
                    sliders.push(slide);
                }
                this.sliderArray = sliders;

                if (this.sliderArray.length !== 0) {
                    this.visible = true;
                    this.datosMenu = {
                        label: 'SLIDER',
                        id: 'a61',
                        url: '/imedical'
                    };
                    this.propagar.emit(this.datosMenu);
                }

            });
        });
    }
}
