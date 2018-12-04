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
var TecnologiesComponent = /** @class */ (function () {
    function TecnologiesComponent(_tecnologies) {
        this._tecnologies = _tecnologies;
        this.tecnologiesArrayLogos = [];
        this.tecnologiesTitle = [];
        this.tecnologiesback = [];
        this.tecnologiesMovil = [];
    }
    TecnologiesComponent.prototype.ngOnInit = function () {
        this.getItemsTecnologies();
    };
    TecnologiesComponent.prototype.getItemsTecnologies = function () {
        var _this = this;
        return this._tecnologies.getCustomCardInformation('technologies').subscribe(function (items) {
            _this.tecnologiesTitle = items.header[0].data;
            _this.tecnologiesMovil = items.body[0].data.back_movil[0];
            _this.tecnologiesDesktop = items.body[0].data.back_desktop[0];
            _this.tecnologiesArrayLogos = items.data;
            //this.tecnologiesArrayLogos = items.files[0].data.logo;
        });
    };
    TecnologiesComponent = __decorate([
        core_1.Component({
            selector: 'app-tecnologies',
            templateUrl: './tecnologies.component.html',
            styleUrls: ['./tecnologies.component.scss']
        }),
        __metadata("design:paramtypes", [v1_card_services_1.CustomCardService])
    ], TecnologiesComponent);
    return TecnologiesComponent;
}());
exports.TecnologiesComponent = TecnologiesComponent;
//# sourceMappingURL=tecnologies.component.js.map