"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var content_type_services_1 = require("../../../services/cards/content-type.services");
var core_1 = require("@angular/core");
var CarouselIndicatorsComponent = /** @class */ (function () {
    function CarouselIndicatorsComponent(indicatorsSliderCarouselItems) {
        this.indicatorsSliderCarouselItems = indicatorsSliderCarouselItems;
        this.medius = '550px';
        this.carouselArray = [];
        this.height = (window.innerHeight) + 'px';
    }
    CarouselIndicatorsComponent.prototype.ngOnInit = function () {
        this.getIndicatorsSliderItems();
    };
    CarouselIndicatorsComponent.prototype.getIndicatorsSliderItems = function () {
        var _this = this;
        return this.indicatorsSliderCarouselItems.getContentTypeItems('articles').subscribe(function (items) {
            _this.carousel = items;
        });
    };
    // down() {
    //   let x = document.querySelector('.anchor');
    //   if (x) {
    //      //  x.scrollIntoView({ behavior: 'smooth'});
    //     x.scrollIntoView({ behavior: 'smooth', block: 'start'});
    //   }
    // }
    // ngOnInit() {
    //   this.getImages ();
    // }
    // getImages () {
    //   return this.info.getInfo().subscribe(items => {
    //     this.carousel = items;
    //     console.log(this.carousel);
    //   });
    // }
    CarouselIndicatorsComponent.prototype.onResize = function () {
        this.height = (window.innerHeight) + 'px';
    };
    CarouselIndicatorsComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-indicators',
            templateUrl: './carousel-indicators.component.html',
            styleUrls: ['./carousel-indicators.component.scss']
        }),
        __metadata("design:paramtypes", [content_type_services_1.ContentType])
    ], CarouselIndicatorsComponent);
    return CarouselIndicatorsComponent;
}());
exports.CarouselIndicatorsComponent = CarouselIndicatorsComponent;
//# sourceMappingURL=carousel-indicators.component.js.map