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
var v1_card_services_1 = require("../../../services/cards/v1-card.services");
var FloatSocialComponent = /** @class */ (function () {
    function FloatSocialComponent(router, footerBrand2) {
        this.router = router;
        this.footerBrand2 = footerBrand2;
        this.socialmedia = [];
    }
    FloatSocialComponent.prototype.ngOnInit = function () {
        this.getFloatSocialItems();
    };
    FloatSocialComponent.prototype.getFloatSocialItems = function () {
        var _this = this;
        this.footerBrand2.getCustomCardInformation('contactcard').subscribe(function (items) {
            _this.socialmedia = items.others;
        });
    };
    FloatSocialComponent = __decorate([
        core_1.Component({
            selector: 'app-float-social',
            templateUrl: './float-social.component.html',
            styleUrls: ['./float-social.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], FloatSocialComponent);
    return FloatSocialComponent;
}());
exports.FloatSocialComponent = FloatSocialComponent;
//# sourceMappingURL=float-social.component.js.map