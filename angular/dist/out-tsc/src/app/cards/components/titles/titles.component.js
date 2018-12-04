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
var v1_card_services_1 = require("src/app/services/cards/v1-card.services");
var TitleComponent = /** @class */ (function () {
    function TitleComponent(title) {
        this.title = title;
        this.titleArray = [];
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.getTitiles();
    };
    TitleComponent.prototype.getTitiles = function () {
        var _this = this;
        this.title.getCustomCardInformation('contact_title').subscribe(function (items) {
            _this.titleArray = items.header[0].data.title;
        });
    };
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'app-title',
            templateUrl: './title.component.html',
            styleUrls: ['./title.component.scss']
        }),
        __metadata("design:paramtypes", [v1_card_services_1.CustomCardService])
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=titles.component.js.map