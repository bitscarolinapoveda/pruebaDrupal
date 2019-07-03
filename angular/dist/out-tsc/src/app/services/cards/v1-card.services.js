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
var http_service_1 = require("../http/http.service");
var CustomCardService = /** @class */ (function () {
    function CustomCardService(http) {
        this.http = http;
    }
    CustomCardService.prototype.getCustomCardInformation = function (idblock) {
        var url = "v1/card/config/" + idblock + "/export?_format=json";
        return this.http.get(url);
    };
    CustomCardService.prototype.getFooterContactItems = function () {
        return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
    };
    CustomCardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], CustomCardService);
    return CustomCardService;
}());
exports.CustomCardService = CustomCardService;
//# sourceMappingURL=v1-card.services.js.map