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
var content_type_services_1 = require("./../../../services/cards/content-type.services");
var core_1 = require("@angular/core");
var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(sliderCarouselItems) {
        this.sliderCarouselItems = sliderCarouselItems;
        this.carouselsArray = [];
        this.medius = '550px';
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
        this.getCarouselsItems();
    };
    CarouselItemComponent.prototype.getCarouselsItems = function () {
        var _this = this;
        return this.sliderCarouselItems.getContentTypeItems('articles').subscribe(function (items) {
            _this.carouselsArray = Object.keys(items).map(function (key) {
                return items[key];
            });
        });
    };
    CarouselItemComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-item',
            templateUrl: './carousel-item.component.html',
            styleUrls: ['./carousel-item.component.scss']
        }),
        __metadata("design:paramtypes", [content_type_services_1.ContentType])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());
exports.CarouselItemComponent = CarouselItemComponent;
//# sourceMappingURL=carousel-item.component.js.map