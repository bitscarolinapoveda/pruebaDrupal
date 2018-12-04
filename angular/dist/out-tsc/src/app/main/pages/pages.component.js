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
var http_service_1 = require("../../services/http/http.service");
var PagesComponent = /** @class */ (function () {
    function PagesComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iniciarCarga();
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.iniciarCarga();
            }
        });
        this._http.subscriber.subscribe(function (resp) {
            _this.endLoad();
        });
    };
    PagesComponent.prototype.iniciarCarga = function () {
        this.loading = true;
        this._http.resetLoader();
        document.body.style.overflow = 'hidden';
    };
    PagesComponent.prototype.endLoad = function () {
        this.loading = false;
        document.body.style.overflow = 'auto';
    };
    PagesComponent = __decorate([
        core_1.Component({
            selector: 'app-pages',
            templateUrl: './pages.component.html'
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map