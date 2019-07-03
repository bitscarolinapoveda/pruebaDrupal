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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var v1_card_services_1 = require("src/app/services/cards/v1-card.services");
var BannerComponent = /** @class */ (function () {
    function BannerComponent(router, banner) {
        this.banner = banner;
        this.bannerTitle = [];
        this.bannerBackground = [];
        this.medius = '550px';
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getBannerService();
    };
    BannerComponent.prototype.getBannerService = function () {
        var _this = this;
        this.banner.getCustomCardInformation('contact_banner').subscribe(function (items) {
            _this.bannerTitle = items.header[0].data[0].title[0];
            _this.bannerBackground = items.header[0].data[0].url[0];
        });
    };
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.scss'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map