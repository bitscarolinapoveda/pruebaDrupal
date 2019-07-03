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
var v1_card_services_1 = require("./../../../services/cards/v1-card.services");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PorqueBitsComponent = /** @class */ (function () {
    function PorqueBitsComponent(router, porquebits) {
        this.router = router;
        this.porquebits = porquebits;
        this.moralValues = [];
    }
    PorqueBitsComponent.prototype.ngOnInit = function () {
        this.getMoralValuesItems();
    };
    // getMoralValuesItems() {
    //   this.porquebits.getMoralValuesItems().subscribe( items => {
    //     this.moralValues = Object.keys(items.data).map(function (key) {
    //         return items.data[key];
    //     });
    //     this.mainTitleLink = items.data;
    //   });
    // }
    PorqueBitsComponent.prototype.getMoralValuesItems = function () {
        var _this = this;
        this.porquebits.getCustomCardInformation('whybits').subscribe(function (items) {
            _this.moralValues = items.data;
            _this.mainTitleLink = items.header[0].data;
            _this.mainUrlLink = items.header[1].data;
        });
    };
    PorqueBitsComponent = __decorate([
        core_1.Component({
            selector: 'app-porque-bits',
            templateUrl: './porque-bits.component.html',
            styleUrls: ['./porque-bits.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterModule,
            v1_card_services_1.CustomCardService])
    ], PorqueBitsComponent);
    return PorqueBitsComponent;
}());
exports.PorqueBitsComponent = PorqueBitsComponent;
//# sourceMappingURL=porque-bits.component.js.map