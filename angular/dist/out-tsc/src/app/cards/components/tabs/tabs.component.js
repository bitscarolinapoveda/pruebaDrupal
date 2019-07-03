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
var TabsComponent = /** @class */ (function () {
    function TabsComponent(https) {
        this.https = https;
        this.tabLeft = [];
        this.tabRight = [];
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.getTabs();
    };
    TabsComponent.prototype.getTabs = function () {
        var _this = this;
        return this.https.getCustomCardInformation('tabsvertical').subscribe(function (items) {
            _this.tabLeft = items.header[0].data;
            _this.tabRight = items.header[1].data;
        });
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
        }),
        __metadata("design:paramtypes", [v1_card_services_1.CustomCardService])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map