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
var FooterContactComponent = /** @class */ (function () {
    function FooterContactComponent(router, footerBrand) {
        this.router = router;
        this.footerBrand = footerBrand;
        this.contactTitle = '';
        this.contactMailLabel = '';
        this.contactMailLink = '';
        this.contactIcon1 = '';
        this.contactIcon2 = '';
        this.contactIcon3 = '';
        this.contactIcon4 = '';
        this.contactSocialArray = [];
    }
    FooterContactComponent.prototype.ngOnInit = function () {
        this.getFooterContactItems();
    };
    FooterContactComponent.prototype.getFooterContactItems = function () {
        var _this = this;
        this.footerBrand.getCustomCardInformation('contactcard').subscribe(function (items) {
            _this.contactTitle = items.header[0].data;
            _this.contactMailLink = items.header[1].data;
            _this.contactSocialArray = items.others;
        });
    };
    FooterContactComponent = __decorate([
        core_1.Component({
            selector: 'app-footer-contact',
            templateUrl: './footer-contact.component.html',
            styleUrls: ['./footer-contact.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], FooterContactComponent);
    return FooterContactComponent;
}());
exports.FooterContactComponent = FooterContactComponent;
//# sourceMappingURL=footer-contact.component.js.map