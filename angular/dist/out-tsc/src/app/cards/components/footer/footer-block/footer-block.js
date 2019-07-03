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
var http_service_1 = require("../../../../services/http/http.service");
var FooterBlock = /** @class */ (function () {
    function FooterBlock(router, _http) {
        this.router = router;
        this._http = _http;
        this.dataUbicaciones = [];
    }
    FooterBlock.prototype.ngOnInit = function () {
        this.getFooterBlockItems();
    };
    FooterBlock.prototype.getFooterBlockItems = function () {
        var _this = this;
        this._http.get('location-resources?_format=json', { 'limit': 2 }).subscribe(function (items) {
            _this.dataUbicaciones = items;
        });
        /*this.footerBlockService.getCustomCardInformation('footerblock').subscribe((items) => {
          this.dataUbicaciones = items.data;
          /*console.log(items);
          this.subtitle = items.header[0].data;
          this.body = items.body[0].data;-/
        });*/
    };
    FooterBlock.prototype.cargarMapaUbicaciones = function () {
        var x = document.querySelector("#title-description");
        if (x) {
            x.scrollIntoView();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FooterBlock.prototype, "idBlock", void 0);
    FooterBlock = __decorate([
        core_1.Component({
            selector: 'app-footer-block',
            templateUrl: './footer-block.html',
            styleUrls: ['./footer-block.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_service_1.HttpService])
    ], FooterBlock);
    return FooterBlock;
}());
exports.FooterBlock = FooterBlock;
//# sourceMappingURL=footer-block.js.map