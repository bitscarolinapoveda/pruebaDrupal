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
var v1_card_services_1 = require("../../../../services/cards/v1-card.services");
var FooterBrandComponent = /** @class */ (function () {
    function FooterBrandComponent(router, footerBrand) {
        this.router = router;
        this.footerBrand = footerBrand;
        this.imageLogo = '';
        this.nameBrand = '';
    }
    FooterBrandComponent.prototype.ngOnInit = function () {
        this.getFooterBrandItems();
    };
    FooterBrandComponent.prototype.getFooterBrandItems = function () {
        var _this = this;
        this.footerBrand.getCustomCardInformation('brandcard').subscribe(function (items) {
            _this.imageLogo = items.header[0].data[0];
            _this.nameBrand = items.body[0].data;
        });
    };
    FooterBrandComponent = __decorate([
        core_1.Component({
            selector: 'app-footer-brand',
            templateUrl: './footer-brand.component.html',
            styleUrls: ['./footer-brand.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], FooterBrandComponent);
    return FooterBrandComponent;
}());
exports.FooterBrandComponent = FooterBrandComponent;
//# sourceMappingURL=footer-brand.component.js.map