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
var router_1 = require("@angular/router");
var CarouselControlsComponent = /** @class */ (function () {
    function CarouselControlsComponent(router, AchievementCarouselItems) {
        this.router = router;
        this.AchievementCarouselItems = AchievementCarouselItems;
        this.CarouselControlArray = [];
        this.caroseltitle = [];
    }
    CarouselControlsComponent.prototype.ngOnInit = function () {
        this.getAchievementsCarouselItems();
    };
    CarouselControlsComponent.prototype.getAchievementsCarouselItems = function () {
        var _this = this;
        return this.AchievementCarouselItems.getContentTypeItems('achievements').subscribe(function (items) {
            _this.CarouselControlArray = items.datos;
            _this.caroseltitle = items;
            _this.CarouselControlArray = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
        });
    };
    CarouselControlsComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-controls',
            templateUrl: './carousel-controls.component.html',
            styleUrls: ['./carousel-controls.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            content_type_services_1.ContentType])
    ], CarouselControlsComponent);
    return CarouselControlsComponent;
}());
exports.CarouselControlsComponent = CarouselControlsComponent;
//# sourceMappingURL=carousel-controls.component.js.map