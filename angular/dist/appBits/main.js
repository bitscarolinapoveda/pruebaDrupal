(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@adf/adf.module.ts":
/*!************************************!*\
  !*** ./src/app/@adf/adf.module.ts ***!
  \************************************/
/*! exports provided: AdfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdfModule", function() { return AdfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_adf_components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@adf/components/shared/loading/loading.component */ "./src/app/@adf/components/shared/loading/loading.component.ts");
/* harmony import */ var _components_shared_locations_locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/locations/locations.component */ "./src/app/@adf/components/shared/locations/locations.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdfModule = /** @class */ (function () {
    function AdfModule() {
    }
    AdfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                src_app_adf_components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"],
                _components_shared_locations_locations_component__WEBPACK_IMPORTED_MODULE_2__["LocationsComponent"]
            ],
            exports: [
                src_app_adf_components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"],
                _components_shared_locations_locations_component__WEBPACK_IMPORTED_MODULE_2__["LocationsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDw-dMpMZremi-1F3rIlzEuzrPgX9bojjM'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], AdfModule);
    return AdfModule;
}());



/***/ }),

/***/ "./src/app/@adf/components/shared/loading/loading.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/@adf/components/shared/loading/loading.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loading {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #23475E;\n    z-index: 99999;\n    pointer-events: none;\n}\n\n#loading .center {\n    display: block;\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n#loading .logo {\n  width: 128px;\n  margin: 0 auto;\n}\n\n#loading .logo img {\n  -webkit-filter: drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.2));\n          filter: drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.2))\n}\n\n.spiner{\n  width: 20px;\n  margin: 0 auto 10px;\n  color: white;\n  opacity: .3;\n\n}"

/***/ }),

/***/ "./src/app/@adf/components/shared/loading/loading.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/@adf/components/shared/loading/loading.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Loading -->\n<div id=\"loading\">\n    <div class=\"center\">\n        <br>\n        <div class=\"logo\">\n            <img width=\"128\" src=\"assets/images/logos/logowhite.svg\">\n        </div>\n        <br>\n        <div class=\"spiner\">\n            <div class=\"\">\n                <i class=\"fa fa-sync fa-spin fa-3x\"></i>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/@adf/components/shared/loading/loading.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@adf/components/shared/loading/loading.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    /*   loading: boolean; */
    function LoadingComponent() {
        /*     this.loading = true; */
    }
    LoadingComponent.prototype.ngOnInit = function () {
        /*     setTimeout(() => {
              this.loading = false;
          }, 30000); */
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/@adf/components/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/@adf/components/shared/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/@adf/components/shared/locations/locations.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"title-description\">\n    <h4 class=\"title-block-location\">{{title}}</h4>\n    <p class=\"description-block-location\">Aqui podra ver la ubicacion de nuestras oficinas</p>\n    <!-- CONFIGURACION DE DRUPAL -->\n</section>\n<!-- MOBILE -->\n<section id=\"accordion-section-mobile\" (window:resize)=\"onResize(mobile)\" *ngIf=\"mobileScreen\">\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"static-0\" [closeOthers]=\"closeOthers\">\n        <ngb-panel *ngFor=\"let ubicacion of locations_data ; let i = index\" id=\"static-{{i}}\">\n            <ng-template ngbPanelTitle>\n                <div class=\"container location-block\">\n                    <div class=\"row location-button\">\n                        <div class=\"col-10 info-location\">\n                            <h2 class=\"location-li title\" >{{ubicacion.title}}</h2>\n                            <div id=\"address-block\" class=\"address-block\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                                <li class=\"location-li address\">{{ubicacion.field_address}}</li>\n                            </div>\n                            <div class=\"telephone-block\">\n                                <i class=\"fas fa-phone\"></i>\n                                <li class=\"location-li telephone\">{{ubicacion.field_telephone}}</li>\n                            </div>\n                        </div>\n                        <div class=\"col-2 info-icon\">\n                            <i class=\"fas fa-sort-down\"></i>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n                <section id=\"mapa\">\n                    <agm-map [latitude]=\"ubicacion.lat\" [longitude]=\"ubicacion.lng\" [styles]=\"bitsTypeMap\" [zoom]=\"defaultZoomMap\" [backgroundColor]=\"colorWhileLoad\" style=\"height: 300px;\">\n                        <agm-marker [latitude]=\"ubicacion.lat\" [longitude]=\"ubicacion.lng\" [iconUrl]=\"imageIcon\">\n                            <agm-info-window #windowMobile [isOpen]=\"true\">\n                                <h6 class=\"info-window-location\">{{ubicacion.title}}</h6>\n                                <div class=\"address-block-info-window\">\n                                    <i class=\"fas fa-map-marker-alt\"></i>\n                                    <li class=\"info-window-location address\">{{ubicacion.field_address}}</li>\n                                </div>\n                                <div class=\"telephone-block-info-window\">\n                                    <i class=\"fas fa-phone\"></i>\n                                    <li class=\"info-window-location telephone\">{{ubicacion.field_telephone}}</li>\n                                </div>\n                            </agm-info-window>\n                        </agm-marker>\n                    </agm-map>\n                </section>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n</section>\n<!-- DESKTOP -->\n<section id=\"accordion-section-desktop\" (window:resize)=\"onResize(desktop)\" *ngIf=\"desktopScreen\">\n    <div class=\"row general-box-location\">\n        <div class=\"col-4 buttons-location-desktop\">\n            <div id=\"box-of-buttons\" class=\"row location-button\">\n                <div id=\"{{i}}\" class=\"col-12 button-{{i}} info-location\" *ngFor=\"let ubicacion of locations_data ; let i = index\" (click)=\"ubicateCity(ubicacion, i)\">\n                    <h2 class=\"location-li title\" >{{ubicacion.title}}</h2>\n                    <div id=\"address-block\" class=\"address-block\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <li class=\"location-li address\">{{ubicacion.field_address}}</li>\n                    </div>\n                    <div class=\"telephone-block\">\n                        <i class=\"fas fa-phone\"></i>\n                        <li class=\"location-li telephone\">{{ubicacion.field_telephone}}</li>\n                    </div>\n                </div>\n            </div>\n            <div class=\"control-button\" *ngIf=\"needButtons\">\n                <div class=\"col-12\">\n                    <div class=\"row arrow-up\" (click)=\"scrollMaps('up')\"></div>\n                    <div class=\"row arrow-down\" (click)=\"scrollMaps('down')\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-8 map-location-desktop\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"bitsTypeMap\" [zoom]=\"defaultZoomMap\" [ngStyle]=\"{'width': widthOftheMap}\" [backgroundColor]=\"colorWhileLoad\" style=\"height: 519px;\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"imageIcon\">\n                    <agm-info-window #windowDesktop [isOpen]=\"true\">\n                        <h6 class=\"info-window-location\">{{ titleCity }}</h6>\n                        <div class=\"address-block-info-window\">\n                            <i class=\"fas fa-map-marker-alt\"></i>\n                            <li class=\"info-window-location address\">{{addressCity}}</li>\n                        </div>\n                        <div class=\"telephone-block-info-window\">\n                            <i class=\"fas fa-phone\"></i>\n                            <li class=\"info-window-location telephone\">{{telephoneCity}}</li>\n                        </div>\n                    </agm-info-window>\n                </agm-marker>\n            </agm-map>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/@adf/components/shared/locations/locations.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-description {\n  text-align: center;\n  height: 100%; }\n  #title-description .title-block-location {\n    font-family: Open Sans Codensed;\n    font-size: 30px;\n    display: block;\n    padding-top: 20px; }\n  #title-description .description-block-location {\n    font-family: Open Sans light;\n    font-size: 16px;\n    display: block;\n    margin: 0;\n    padding: 0 50px 40px 50px; }\n  :host /deep/ .card {\n  border-radius: 0; }\n  :host /deep/ .gm-ui-hover-effect {\n  display: none !important; }\n  :host /deep/ .gm-style-iw {\n  position: relative;\n  overflow: visible; }\n  :host /deep/ .gm-style-iw .agm-info-window-content {\n    position: absolute;\n    background: #426177;\n    min-width: 208px;\n    width: auto;\n    height: auto;\n    padding: 10px 20px;\n    bottom: -29px;\n    left: -71px; }\n  :host /deep/ .card-header,\n:host /deep/ .card-body {\n  padding: 0; }\n  :host /deep/ .btn.btn-link {\n  width: 100%;\n  height: 121px;\n  background: #d9dfe4;\n  text-decoration: none;\n  border-radius: 0; }\n  :host /deep/ .btn.btn-link .container.location-block .row.location-button .info-icon .fas.fa-sort-down {\n    transition: 1s ease all; }\n  :host /deep/ .btn.btn-link.collapsed {\n    background: #f2f4f6; }\n  :host /deep/ .btn.btn-link.collapsed .container.location-block .row.location-button .info-icon .fas.fa-sort-down {\n      -webkit-transform: rotate(-180deg);\n              transform: rotate(-180deg);\n      transition: 1s ease all; }\n  #accordion-section-mobile {\n  cursor: pointer;\n  padding: 0; }\n  #accordion-section-mobile .location-block.container {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    color: #002b49; }\n  #accordion-section-mobile .row.location-button {\n    width: 100%;\n    max-width: 100%; }\n  #accordion-section-mobile .row.location-button .info-location {\n      padding: 0 0 0 25px;\n      width: 360px; }\n  #accordion-section-mobile .row.location-button .info-icon {\n      padding: 18px 0 0 32px; }\n  #accordion-section-mobile .location-li {\n    text-align: left;\n    display: block; }\n  #accordion-section-mobile .location-li.title {\n    font-family: Open Sans Codensed;\n    font-size: 17px; }\n  #accordion-section-mobile .location-li.title:hover {\n    text-decoration: none; }\n  #accordion-section-mobile .address-block,\n  #accordion-section-mobile .telephone-block {\n    text-align: left;\n    display: block;\n    font-family: Open Sans;\n    font-size: 13px;\n    color: rgba(0, 43, 73, 0.7); }\n  #accordion-section-mobile .address-block .fas,\n    #accordion-section-mobile .telephone-block .fas {\n      margin-right: 10px;\n      margin-left: 5px; }\n  #accordion-section-mobile .address-block .fa-phone,\n    #accordion-section-mobile .telephone-block .fa-phone {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  #accordion-section-mobile .location-li.address,\n  #accordion-section-mobile .location-li.telephone {\n    display: inline-block; }\n  #accordion-section-mobile #mapa .address-block-info-window {\n    display: flex;\n    flex-direction: row; }\n  #accordion-section-mobile #mapa .address-block-info-window .fa-map-marker-alt {\n      color: white;\n      font-size: 12px;\n      margin-right: 5px;\n      margin-top: 3px; }\n  #accordion-section-mobile #mapa .telephone-block-info-window {\n    display: flex;\n    flex-direction: row; }\n  #accordion-section-mobile #mapa .telephone-block-info-window .fa-phone {\n      color: white;\n      font-size: 12px;\n      margin-right: 5px;\n      margin-top: 3px;\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  #accordion-section-mobile #mapa .info-window-location {\n    color: #ffffff;\n    font-family: Open Sans Codensed;\n    font-size: 10px;\n    list-style: none; }\n  #accordion-section-mobile #mapa .info-window-location.address, #accordion-section-mobile #mapa .info-window-location.telephone {\n      margin: 0; }\n  #accordion-section-desktop {\n  cursor: pointer;\n  padding: 0; }\n  #accordion-section-desktop .general-box-location {\n    height: 520px;\n    border: 1px solid #eeeeee;\n    margin: 0; }\n  #accordion-section-desktop .general-box-location .row.location-button .button-0 {\n      background-color: #d9dfe4; }\n  #accordion-section-desktop .buttons-location-desktop {\n    position: relative;\n    color: #f2f4f6;\n    padding: 0;\n    margin: 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button {\n      position: absolute;\n      top: 0;\n      right: 2px;\n      z-index: 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-up {\n        background-image: url(/assets/images/up-arrow-angle.svg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 45px;\n        height: 45px;\n        margin: 20px 0 385px 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-down {\n        background-image: url(/assets/images/down-arrow-angle.svg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 45px;\n        height: 45px;\n        margin: 0; }\n  #accordion-section-desktop .row.location-button {\n    width: 100%;\n    height: auto;\n    max-height: 520px;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    padding: 0;\n    margin: 0; }\n  #accordion-section-desktop .row.location-button .info-location {\n      background-color: #f2f4f6;\n      padding: 30px 10px 30px 70px;\n      height: 130px;\n      border-bottom: 1px solid #cacaca; }\n  #accordion-section-desktop .row.location-button .info-icon {\n      padding: 18px 0 0 32px; }\n  #accordion-section-desktop .location-li {\n    text-align: left;\n    display: block; }\n  #accordion-section-desktop .location-li.title {\n    font-family: Open Sans;\n    font-size: 18px;\n    color: #002b49; }\n  #accordion-section-desktop .location-li.title:hover {\n    text-decoration: none; }\n  #accordion-section-desktop .address-block,\n  #accordion-section-desktop .telephone-block {\n    text-align: left;\n    display: block;\n    font-family: Open Sans;\n    font-size: 14px;\n    color: rgba(0, 43, 73, 0.7); }\n  #accordion-section-desktop .address-block .fas,\n    #accordion-section-desktop .telephone-block .fas {\n      margin-right: 10px;\n      margin-left: 5px; }\n  #accordion-section-desktop .address-block .fa-phone,\n    #accordion-section-desktop .telephone-block .fa-phone {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  #accordion-section-desktop .location-li.address,\n  #accordion-section-desktop .location-li.telephone {\n    display: inline-block; }\n  #accordion-section-desktop .map-location-desktop {\n    padding: 0; }\n  #accordion-section-desktop .map-location-desktop .address-block-info-window {\n      display: flex;\n      flex-direction: row; }\n  #accordion-section-desktop .map-location-desktop .address-block-info-window .fa-map-marker-alt {\n        color: white;\n        font-size: 14px;\n        margin-right: 5px;\n        margin-top: 3px; }\n  #accordion-section-desktop .map-location-desktop .telephone-block-info-window {\n      display: flex;\n      flex-direction: row; }\n  #accordion-section-desktop .map-location-desktop .telephone-block-info-window .fa-phone {\n        color: white;\n        font-size: 12px;\n        margin-right: 5px;\n        margin-top: 3px;\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n  #accordion-section-desktop .map-location-desktop .info-window-location {\n      color: #ffffff;\n      font-family: Open Sans Codensed;\n      font-size: 18px;\n      list-style: none; }\n  #accordion-section-desktop .map-location-desktop .info-window-location.address, #accordion-section-desktop .map-location-desktop .info-window-location.telephone {\n        margin: 0;\n        font-size: 14px; }\n  @media only screen and (min-width: 768px) {\n  #title-description .title-block-location {\n    font-family: Open Sans Codensed;\n    font-size: 40px;\n    color: rgba(0, 43, 73, 0.8); }\n  #title-description .description-block-location {\n    font-family: Open Sans light;\n    font-size: 20px;\n    color: #002b49; }\n  #accordion-section .row.location-button {\n    margin: 0; }\n  :host /deep/ .gm-style-iw {\n    position: relative;\n    overflow: visible; }\n    :host /deep/ .gm-style-iw .agm-info-window-content {\n      position: absolute;\n      background: #426177;\n      width: 170px;\n      height: auto;\n      padding: 10px 20px;\n      bottom: -29px;\n      left: -71px; } }\n"

/***/ }),

/***/ "./src/app/@adf/components/shared/locations/locations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.ts ***!
  \*************************************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(_http, service) {
        this._http = _http;
        this.service = service;
        this.items = [];
        this.imageIcon = {
            url: '/assets/icon/iconBitsLocationMarker.svg',
            scaledSize: {
                width: 40,
                height: 66
            }
        };
        this.closeOthers = true;
        this.infoWindowOpen = true;
        this.colorWhileLoad = 'rgb(202, 202, 202)';
        this.mobileScreen = false;
        this.desktopScreen = false;
        this.needButtons = false;
        this.defaultZoomMap = 15;
        this.bitsTypeMap = [
            {
                featureType: 'road.highway',
                stylers: [
                    {
                        color: '#a1ff4a'
                    },
                    {
                        saturation: 100
                    },
                    {
                        lightness: 10
                    },
                    {
                        visibility: 'simplified'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#3f9eff'
                    }
                ]
            }
        ];
        this.locations_data = [];
        this.infoWindowOpen = true;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCustomCardInformation('locationcard_2').subscribe(function (params) {
            _this.title = params.header[0].data.title;
            for (var index = 0; index < params.data.length; index++) {
                var value = params.data[index].field_location.split(',');
                _this.items[index] = { lat: '', lon: '', title: '', field_address: '', field_telephone: '' };
                _this.items[index].lat = parseFloat(value[0].trim());
                _this.items[index].lng = parseFloat(value[1].trim());
                _this.items[index].title = params.data[index].title;
                _this.items[index].field_address = params.data[index].field_address;
                _this.items[index].field_telephone = params.data[index].field_telephone;
            }
            if (params.data.length > 4) {
                _this.needButtons = true;
            }
            _this.lat = _this.items[0].lat;
            _this.lng = _this.items[0].lng;
            _this.titleCity = _this.items[0].title;
            _this.addressCity = _this.items[0].field_address;
            _this.telephoneCity = _this.items[0].field_telephone;
            _this.locations_data = _this.items;
        });
        this.onResize(screen);
    };
    LocationsComponent.prototype.onResize = function (screen) {
        var widthScreen = (window.innerWidth);
        if (widthScreen < 1164) {
            this.mobileScreen = true;
            this.desktopScreen = false;
        }
        else {
            this.mobileScreen = false;
            this.desktopScreen = true;
        }
        if (screen === 'desktop') {
            this.sizeOfMap();
        }
    };
    LocationsComponent.prototype.sizeOfMap = function () {
        if (document.readyState === 'complete') {
            var widthOfDiv = document.querySelector('.map-location-desktop').clientWidth + 'px';
            this.widthOftheMap = widthOfDiv;
        }
        else {
            return false;
        }
    };
    LocationsComponent.prototype.ubicateCity = function (ubicacion, index) {
        this.lat = parseFloat(ubicacion.lat);
        this.lng = parseFloat(ubicacion.lng);
        this.titleCity = ubicacion.title;
        this.addressCity = ubicacion.field_address;
        this.telephoneCity = ubicacion.field_telephone;
        for (var i = 0; i < this.locations_data.length; i++) {
            document.getElementById(i + '').style.backgroundColor = '#f2f4f6';
        }
        document.getElementById(index + '').style.backgroundColor = '#d9dfe4';
    };
    LocationsComponent.prototype.scrollMaps = function (direction) {
        var elem = document.getElementById('box-of-buttons');
        var scrollTop = elem.scrollTop;
        if (direction === 'down') {
            if (scrollTop === 0) {
                elem.scrollTo(0, 130);
            }
            else {
                document.getElementById('up-arrow').style.visibility = 'visible';
                elem.scrollTo(0, 130 + scrollTop);
            }
        }
        else if (direction === 'up') {
            if (scrollTop === 130) {
                elem.scrollTo(0, -130);
            }
            else {
                elem.scrollTo(0, -130 + scrollTop);
            }
        }
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/@adf/components/shared/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/@adf/components/shared/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _adf_adf_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@adf/adf.module */ "./src/app/@adf/adf.module.ts");
/* harmony import */ var _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/pages/pages.module */ "./src/app/main/pages/pages.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @trademe/ng-defer-load */ "./node_modules/@trademe/ng-defer-load/dist/index.js");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shared/notification.service */ "./src/app/services/shared/notification.service.ts");
/* harmony import */ var _work_us_work_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./work-us/work-us.component */ "./src/app/work-us/work-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Modulos


// Import your library



// Rutas

// Componentes

// Material

// Notificaciones



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _work_us_work_us_component__WEBPACK_IMPORTED_MODULE_15__["WorkUsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _adf_adf_module__WEBPACK_IMPORTED_MODULE_5__["AdfModule"],
                _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTES"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
                _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_8__["DeferLoadModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_9__["SlickModule"].forRoot()
            ],
            providers: [
                _services_shared_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cards/cards.module.ts":
/*!***************************************!*\
  !*** ./src/app/cards/cards.module.ts ***!
  \***************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carousel-item/carousel-item.component */ "./src/app/cards/components/carousel-item/carousel-item.component.ts");
/* harmony import */ var _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel-indicators/carousel-indicators.component */ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.ts");
/* harmony import */ var _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tecnologies/tecnologies.component */ "./src/app/cards/components/tecnologies/tecnologies.component.ts");
/* harmony import */ var _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/porque-bits/porque-bits.component */ "./src/app/cards/components/porque-bits/porque-bits.component.ts");
/* harmony import */ var _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carousel-item-2/carousel-item-2.component */ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.ts");
/* harmony import */ var _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alliances/alliances.component */ "./src/app/cards/components/alliances/alliances.component.ts");
/* harmony import */ var _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel-controls/carousel-controls.component */ "./src/app/cards/components/carousel-controls/carousel-controls.component.ts");
/* harmony import */ var _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/workwithus/workwithus.component */ "./src/app/cards/components/workwithus/workwithus.component.ts");
/* harmony import */ var _components_workwithus_proserv_workwithus_proserv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/workwithus-proserv/workwithus-proserv.component */ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/cards/components/banner/banner.component.ts");
/* harmony import */ var _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/titles/titles.component */ "./src/app/cards/components/titles/titles.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/cards/components/tabs/tabs.component.ts");
/* harmony import */ var _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/video-information/video-information.component */ "./src/app/cards/components/video-information/video-information.component.ts");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/separator/separator.component */ "./src/app/cards/components/separator/separator.component.ts");
/* harmony import */ var _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/menu-template/menu-template.component */ "./src/app/cards/components/menu-template/menu-template.component.ts");
/* harmony import */ var _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/slide/slide.component */ "./src/app/cards/components/slide/slide.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/cards/components/slider/slider.component.ts");
/* harmony import */ var _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/blurb/blurb.component */ "./src/app/cards/components/blurb/blurb.component.ts");
/* harmony import */ var _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/card-img-text/card-img-text.component */ "./src/app/cards/components/card-img-text/card-img-text.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/cards/components/blog/blog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_client_project_imedical_client_project_imedical_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/client-project-imedical/client-project-imedical.component */ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.ts");
/* harmony import */ var _components_whybitsamericas_whybitsamericas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/whybitsamericas/whybitsamericas.component */ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/cards/components/message/message.component.ts");
/* harmony import */ var _components_knowus_knowus_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/knowus/knowus.component */ "./src/app/cards/components/knowus/knowus.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/cards/components/team/team.component.ts");
/* harmony import */ var _components_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/achievements/achievements.component */ "./src/app/cards/components/achievements/achievements.component.ts");
/* harmony import */ var _components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/testimonies/testimonies.component */ "./src/app/cards/components/testimonies/testimonies.component.ts");
/* harmony import */ var _components_tecnologies_projectservice_tecnologies_projectservice_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/tecnologies-projectservice/tecnologies-projectservice.component */ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/cards/components/history/history.component.ts");
/* harmony import */ var _services_cards_node_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../services/cards/node.service */ "./src/app/services/cards/node.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adf_adf_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../@adf/adf.module */ "./src/app/@adf/adf.module.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_safehtml_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../pipes/safehtml.pipe */ "./src/app/pipes/safehtml.pipe.ts");
/* harmony import */ var _pipes_safecss_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../pipes/safecss.pipe */ "./src/app/pipes/safecss.pipe.ts");
/* harmony import */ var _components_client_proserv_client_proserv_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/client-proserv/client-proserv.component */ "./src/app/cards/components/client-proserv/client-proserv.component.ts");
/* harmony import */ var _components_workus_workus_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/workus/workus.component */ "./src/app/cards/components/workus/workus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































// Servicios








// Pipes




var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_safehtml_pipe__WEBPACK_IMPORTED_MODULE_42__["SafeHtmlPipe"],
                _pipes_safecss_pipe__WEBPACK_IMPORTED_MODULE_43__["SafeCssPipe"],
                _components_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"],
                _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicatorsComponent"],
                _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__["CarouselControlsComponent"],
                _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItem2Component"],
                _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__["TecnologiesComponent"],
                _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__["PorqueBitsComponent"],
                _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__["AlliancesComponent"],
                _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__["WorkWithUsComponent"],
                _components_workwithus_proserv_workwithus_proserv_component__WEBPACK_IMPORTED_MODULE_12__["WorkWithUsProServComponent"],
                _components_workus_workus_component__WEBPACK_IMPORTED_MODULE_45__["WorkusComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_14__["TitleComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_16__["VideoInformationComponent"],
                _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_17__["SeparatorComponent"],
                _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_18__["MenuTemplateComponent"],
                _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_19__["SlideComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__["SliderComponent"],
                _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_21__["BlurbComponent"],
                _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_22__["CardImgTextComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_23__["BlogComponent"],
                _components_client_project_imedical_client_project_imedical_component__WEBPACK_IMPORTED_MODULE_25__["ClientProjectImedicalComponent"],
                _components_client_proserv_client_proserv_component__WEBPACK_IMPORTED_MODULE_44__["ClientProServComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"],
                _components_whybitsamericas_whybitsamericas_component__WEBPACK_IMPORTED_MODULE_26__["WhybitsamericasComponent"],
                _components_knowus_knowus_component__WEBPACK_IMPORTED_MODULE_28__["KnowusComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_29__["TeamComponent"],
                _components_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_30__["AchievementsComponent"],
                _components_tecnologies_projectservice_tecnologies_projectservice_component__WEBPACK_IMPORTED_MODULE_32__["TecnologiesProjectserviceComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_33__["HistoryComponent"],
                _components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_31__["TestimoniesComponent"]
            ],
            exports: [
                _components_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"],
                _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicatorsComponent"],
                _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__["CarouselControlsComponent"],
                _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItem2Component"],
                _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__["TecnologiesComponent"],
                _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__["PorqueBitsComponent"],
                _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__["AlliancesComponent"],
                _components_workus_workus_component__WEBPACK_IMPORTED_MODULE_45__["WorkusComponent"],
                _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__["WorkWithUsComponent"],
                _components_workwithus_proserv_workwithus_proserv_component__WEBPACK_IMPORTED_MODULE_12__["WorkWithUsProServComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_14__["TitleComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_16__["VideoInformationComponent"],
                _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_17__["SeparatorComponent"],
                _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_18__["MenuTemplateComponent"],
                _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_19__["SlideComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_20__["SliderComponent"],
                _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_21__["BlurbComponent"],
                _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_22__["CardImgTextComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_23__["BlogComponent"],
                _components_client_project_imedical_client_project_imedical_component__WEBPACK_IMPORTED_MODULE_25__["ClientProjectImedicalComponent"],
                _components_client_proserv_client_proserv_component__WEBPACK_IMPORTED_MODULE_44__["ClientProServComponent"],
                _components_whybitsamericas_whybitsamericas_component__WEBPACK_IMPORTED_MODULE_26__["WhybitsamericasComponent"],
                _components_knowus_knowus_component__WEBPACK_IMPORTED_MODULE_28__["KnowusComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_29__["TeamComponent"],
                _components_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_30__["AchievementsComponent"],
                _components_tecnologies_projectservice_tecnologies_projectservice_component__WEBPACK_IMPORTED_MODULE_32__["TecnologiesProjectserviceComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_33__["HistoryComponent"],
                _components_testimonies_testimonies_component__WEBPACK_IMPORTED_MODULE_31__["TestimoniesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterModule"],
                _adf_adf_module__WEBPACK_IMPORTED_MODULE_36__["AdfModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_37__["SlickModule"].forRoot(),
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_38__["OwlModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_39__["NgxCarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"]
            ],
            providers: [_services_cards_node_service__WEBPACK_IMPORTED_MODULE_34__["NodeService"]]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/cards/components/achievements/achievements.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/achievements/achievements.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"title\">\n  <h2 [id]=\"datosMenu.id\">{{ title }}</h2>\n  <p [innerHTML]=\"subtitle\"></p>\n</section>\n\n<section class=\"content\">\n  <div class=\"images-content\">\n    <ul class=\"row first images col-md-12\">\n      <li *ngFor=\"let data of list; let i = index\" class=\"col-md-4\">\n        <div class=\"col-md-12\">\n          <img [src]=\"data.field_imagen.url\" [alt]=\"data.field_imagen.alt\" class=\"col-md-6\" />\n          <label class=\"col-md-6\">\n            <span class=\"plus\" *ngIf=\"data.field_icono == 'up'\">↑</span>\n            <span class=\"plus\" *ngIf=\"data.field_icono == 'more'\">+</span> \n            <span class=\"plus\" *ngIf=\"data.field_icono == 'down'\">↓</span>  <span>{{ data.field_cantidad_all }}</span>\n            <p>{{ data.title }}</p>\n          </label>\n        </div>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/components/achievements/achievements.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/achievements/achievements.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title h2 {\n  margin-left: 3%;\n  font-size: 40px;\n  text-transform: uppercase;\n  color: #002b49;\n  text-align: center;\n  margin-top: 40px; }\n  @media (max-width: 667px) {\n    #title h2 {\n      font-size: 30px;\n      margin-left: 0; } }\n  #title p {\n  color: #002b49cc;\n  font-family: Open Sans Codensed;\n  margin-right: 180px;\n  margin-left: 200px;\n  margin-top: 10px;\n  font-size: 20px;\n  text-align: center; }\n  @media (min-width: 1025px) {\n    #title p {\n      margin-right: 0;\n      margin-left: 0; } }\n  @media (max-width: 667px) {\n    #title p {\n      margin-right: 20px;\n      margin-left: 0; } }\n  .content {\n  width: 90%;\n  margin-top: 20px; }\n  @media (max-width: 667px) {\n    .content ul {\n      padding: 0; } }\n  .content .images-content .images {\n    margin-left: 0;\n    margin-right: 0; }\n  @media (min-width: 1025px) {\n      .content .images-content .images {\n        margin-left: 9%; } }\n  .content .images-content .images li {\n      list-style: none;\n      margin-top: 17px; }\n  @media (max-width: 667px) {\n        .content .images-content .images li {\n          margin-bottom: 35px; } }\n  .content .images-content .images li img {\n        float: left;\n        margin-top: 20px; }\n  @media (min-width: 1025px) {\n          .content .images-content .images li img {\n            position: relative; } }\n  @media (max-width: 667px) {\n          .content .images-content .images li img {\n            width: 50%;\n            position: relative; } }\n  .content .images-content .images li label {\n        font-family: 'Open Sans light';\n        color: #002b49;\n        font-weight: 500;\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n        text-align: left; }\n  .content .images-content .images li label span.plus {\n          color: #a6cf24;\n          font-size: 40px; }\n  .content .images-content .images li label span {\n          font-size: 30px; }\n  .content .images-content .images li label p {\n          font-weight: 300; }\n  @media (min-width: 1025px) {\n          .content .images-content .images li label {\n            position: absolute; } }\n  @media (max-width: 667px) {\n          .content .images-content .images li label {\n            position: absolute;\n            width: 50%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/achievements/achievements.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/achievements/achievements.component.ts ***!
  \*************************************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent(_service) {
        this._service = _service;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.list = [];
    }
    AchievementsComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'LOGROS',
            id: 'a10',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getAchievementData();
    };
    AchievementsComponent.prototype.getAchievementData = function () {
        var _this = this;
        this._service.getCustomCardInformationType('achievementsbitsamericas', this.type).subscribe(function (items) {
            _this.title = items.header[0].data.title;
            _this.subtitle = items.header[1].data.sub_title;
            _this.list = items.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AchievementsComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AchievementsComponent.prototype, "type", void 0);
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/cards/components/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.scss */ "./src/app/cards/components/achievements/achievements.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/alliances/alliances.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/alliances/alliances.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row position-relative row-tec\" [ngStyle]=\"{'background-image':'url(' + allianceBackground + ')'}\">\n    <div class=\"position-absolute content-trans\"></div>\n    <div class=\"col-md-12 pt-5 pb-2 px-2\">\n        <h1 class=\"text-center text-white\">{{ allianceTitle }}</h1>\n    </div>\n    <div class=\"col-md-12 py-5 px-2\">\n        <div class=\"tec-slider\">\n            <ngx-tile NgxCarouselItem id=\"logos\" *ngFor=\"let im of arrayLogosCustom\" class=\"mx-auto div-slide\">\n                <div class=\"img-fluid\" *ngFor=\"let img of im\" [ngStyle]=\"{'background-image':'url(' + img.field_alliance_image.url + ')'}\"></div>\n            </ngx-tile>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/alliances/alliances.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/alliances/alliances.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-tec {\n  width: 100%;\n  margin: 0;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(/assets/images/fnd-tecnologias.jpg);\n  min-height: 380px; }\n  .row-tec .content-trans {\n    background: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%; }\n  .row-tec .tec-slider {\n    width: 100%;\n    margin: 0 auto;\n    display: flex; }\n  .row-tec .tec-slider .item {\n      margin: 0 auto; }\n  .row-tec .tec-slider .div-slide {\n      margin: 0 auto; }\n  .img-fluid {\n  width: 175px;\n  height: 140px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 10px 20px; }\n  @media (max-width: 500px) {\n    .img-fluid {\n      width: 100px;\n      height: 90px; } }\n  :host ::ng-deep .tile {\n  box-shadow: none !important;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  @media screen and (max-width: 480px) {\n  .img-slide {\n    width: 70%;\n    display: block;\n    height: auto;\n    margin: 20px auto; } }\n"

/***/ }),

/***/ "./src/app/cards/components/alliances/alliances.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cards/components/alliances/alliances.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlliancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlliancesComponent", function() { return AlliancesComponent; });
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlliancesComponent = /** @class */ (function () {
    function AlliancesComponent(alliance, el) {
        this.alliance = alliance;
        this.el = el;
        this.allianceArrayLogos = [];
        this.allianceTitle = "";
        this.allianceBackground = "";
        this.state = 'hide';
        this.arrayLogosCustom = [];
    }
    AlliancesComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if (scrollPosition >= componentPosition) {
            this.state = 'hide';
        }
        else {
            this.state = 'show';
        }
    };
    AlliancesComponent.prototype.ngOnInit = function () {
        this.getAlliance();
        this.allianceArrayLogos = [0, 1, 2, 3, 4, 5,];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 1,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    AlliancesComponent.prototype.customArrayImages = function (arrayLogosOriginal) {
        for (var i = 0; i <= arrayLogosOriginal.length; i++) {
            this.arrayLogosCustom[i] = [];
            var j2 = 0;
            for (var j = 0; j < 4; j++) {
                if (arrayLogosOriginal.length > 0) {
                    this.arrayLogosCustom[i][j] = arrayLogosOriginal[0];
                    arrayLogosOriginal.shift();
                }
            }
        }
    };
    AlliancesComponent.prototype.getAlliance = function () {
        var _this = this;
        return this.alliance.getCustomCardInformation('ouralliance').subscribe(function (items) {
            _this.allianceTitle = items.header[0].data.title;
            _this.allianceBackground = items.body[0].data.back_movil[0].url;
            _this.allianceArrayLogos = items.data;
            _this.customArrayImages(_this.allianceArrayLogos);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlliancesComponent.prototype, "checkScroll", null);
    AlliancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alliances',
            template: __webpack_require__(/*! ./alliances.component.html */ "./src/app/cards/components/alliances/alliances.component.html"),
            styles: [__webpack_require__(/*! ./alliances.component.scss */ "./src/app/cards/components/alliances/alliances.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: "translateY(100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AlliancesComponent);
    return AlliancesComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/banner/banner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/banner/banner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-header\">\n    <div class=\"title\">\n        <h1> {{ bannerTitle }} </h1>\n    </div>\n    <ng-container>\n        <picture>\n            <source media=\"(max-width:{{medius}})\" [srcset]=\"bannerBackground\">\n            <img [src]=\"bannerBackground\" alt=\"Contactenos\">\n        </picture>\n    </ng-container>\n</section>\n<div class=\"col-md-12\" id=\"descrip-banner\">\n    <p [innerHTML]=\"bannerDescrip\"></p>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/banner/banner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/banner/banner.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  height: 352px;\n  overflow: hidden; }\n  .page-header .title {\n    width: 100%;\n    color: #FFFFFF;\n    position: absolute;\n    margin-top: 178px;\n    text-align: center; }\n  .page-header .title h1 {\n      text-transform: uppercase;\n      position: absolute;\n      width: 100%;\n      margin-left: 50%;\n      font-size: 36px;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  @media (min-width: 1025px) {\n        .page-header .title h1 {\n          font-size: 50px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .page-header .title h1 {\n          font-size: 50px; } }\n  .page-header picture img {\n    width: 100%; }\n  .page-header::before {\n  content: \"\";\n  background-color: #000000;\n  opacity: 0.3;\n  height: 352px;\n  width: 100%;\n  position: absolute; }\n  #descrip-banner p {\n  color: #002b49cc;\n  font-family: Open Sans Codensed;\n  margin-top: 30px;\n  font-size: 20px;\n  overflow-wrap: break-word; }\n  @media (min-width: 1025px) {\n    #descrip-banner p {\n      margin: auto;\n      max-width: 1000px;\n      margin-top: 30px; } }\n  @media (max-width: 667px) {\n    #descrip-banner p {\n      margin-right: 0;\n      margin-left: 0; } }\n"

/***/ }),

/***/ "./src/app/cards/components/banner/banner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/banner/banner.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerComponent = /** @class */ (function () {
    function BannerComponent(router, banner) {
        this.banner = banner;
        this.bannerTitle = [];
        this.bannerBackground = [];
        this.medius = '550px';
        this.uuid = '';
        this.bannerDescrip = '';
    }
    BannerComponent.prototype.ngOnInit = function () {
        if (this.imgFondo !== '') {
            this.bannerBackground = this.imgFondo;
        }
        else {
            this.bannerBackground = '/assets/images/cabezerainternaweb.png';
        }
        if (this.uuid === undefined || this.uuid === '') {
            while (this.titulo.indexOf('-') > -1) {
                this.titulo = this.titulo.replace('-', ' ');
            }
            this.bannerTitle = this.titulo;
        }
        else {
            this.getBannerService();
        }
    };
    BannerComponent.prototype.getBannerService = function () {
        var _this = this;
        this.banner.getCustomContentBasicPage(this.uuid).subscribe(function (params) {
            _this.bannerTitle = params.title;
            _this.bannerDescrip = params.body;
            if (_this.bannerDescrip === null) {
                _this.bannerDescrip = '';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerComponent.prototype, "uuid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerComponent.prototype, "titulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerComponent.prototype, "imgFondo", void 0);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/cards/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/cards/components/banner/banner.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/blog/blog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/blog/blog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"blog\">\n    <div class=\"col-md-12\">\n        <h1 class=\"condensed text-center\">{{ titulo }}</h1>\n    </div>\n    <div class=\"col-md-12\">\n        <p class=\"\" [innerHTML]=\"list\"></p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/blog/blog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/blog/blog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blog p, #blog h1, #blog h3, #blog h4 {\n  color: rgba(0, 43, 73, 0.8);\n  font-family: Open Sans Codensed; }\n\n#blog h1 {\n  font-size: 40px; }\n\n#blog /deep/ .date {\n  font-size: 20px; }\n\n#blog /deep/ h3 {\n  font-size: 36px; }\n\n#blog /deep/ h4 {\n  font-size: 22px;\n  text-transform: uppercase; }\n\n#blog /deep/ p {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/cards/components/blog/blog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cards/components/blog/blog.component.ts ***!
  \*********************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(_http) {
        this._http = _http;
        this.uuid = '';
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getPoliticService();
    };
    BlogComponent.prototype.getPoliticService = function () {
        var _this = this;
        this._http.getCustomContentBasicPage(this.uuid).subscribe(function (params) {
            _this.titulo = params.title;
            _this.list = params.body;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogComponent.prototype, "uuid", void 0);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/cards/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/cards/components/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/blurb/blurb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/blurb/blurb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-block mx-auto my-4 px-2\" style=\"width: 100%;\" [id]=\"datosMenu.id\">\n    <img [src]=\"blurb.imageSrc\" alt=\"\" class=\"d-block mx-auto\" width=\"50\">\n    <h3 class=\"condensed text-center my-2\">{{ blurb.title }}</h3>\n    <p class=\"text-center\" [innerHTML]=\"blurb.description\"></p>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/blurb/blurb.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/blurb/blurb.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.condensed {\n  font-size: 22px;\n  margin-top: 20px;\n  color: #002b49;\n  font-family: 'Open Sans Condensed', sans-serif; }\n\np {\n  font-size: 14px;\n  color: #002b49;\n  opacity: 0.6;\n  width: 71%;\n  display: block;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/cards/components/blurb/blurb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/blurb/blurb.component.ts ***!
  \***********************************************************/
/*! exports provided: BlurbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurbComponent", function() { return BlurbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlurbComponent = /** @class */ (function () {
    function BlurbComponent(_http) {
        this._http = _http;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blurb = {
            imageSrc: 'assets/images/historiaclinicadesktop.png',
            title: 'titulo 1',
            description: 'hola mundo'
        };
    }
    BlurbComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'MÓDULOS',
            id: 'a1',
            url: '/products'
        };
        this.propagar.emit(this.datosMenu);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BlurbComponent.prototype, "blurb", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlurbComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BlurbComponent.prototype, "propagar", void 0);
    BlurbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blurb',
            template: __webpack_require__(/*! ./blurb.component.html */ "./src/app/cards/components/blurb/blurb.component.html"),
            styles: [__webpack_require__(/*! ./blurb.component.scss */ "./src/app/cards/components/blurb/blurb.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], BlurbComponent);
    return BlurbComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/card-img-text/card-img-text.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/card-img-text/card-img-text.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row color-back\" *ngIf=\"orientacion == 'IT'\" [id]=\"datosMenu.id\">\n    <div class=\"col-md-4 p-0\" *ngFor=\"let cil of cardImgL\">\n        <img [src]=\"cil.field_imagen_media_product.url\" alt=\"{{cil.field_imagen_media_product.alt}}\"\n            class=\"img-fluid w-100\">\n    </div>\n    <div class=\"col-md-8 d-block px-4 py-5\" *ngFor=\"let cil of cardImgL\">\n        <h3 class=\"condensed\">{{ cil.title }}</h3>\n        <h1>{{ titleL | uppercase }}</h1>\n        <hr class=\"green\">\n        <p class=\"text-justify\" [innerHTML]=\"cil.field_des\"></p>\n        <a [href]=\"cil.field_link_imedical_media.uri?.internal\" class=\"green\">\n            {{ cil.field_link_imedical_media.title }}</a>\n    </div>\n</div>\n\n<div class=\"row color-back\" *ngIf=\"orientacion == 'TI'\" [id]=\"datosMenu.id\">\n    <div class=\"col-md-8 d-block px-4 py-5\" *ngFor=\"let cir of cardImgR\"  >\n        <h3 class=\"condensed\">{{ cir.title }}</h3>\n        <h1>{{ titleR | uppercase }}</h1>\n        <hr class=\"green\">\n        <p class=\"text-justify\" [innerHTML]=\"cir.field_des\"></p>\n        <a [href]=\"cir.field_link_imedical_media.uri?.internal\" class=\"green\">\n            {{ cir.field_link_imedical_media.title }}</a>\n    </div>\n    <div class=\"col-md-4 p-0\" *ngFor=\"let cir of cardImgR\" >\n        <img [src]=\"cir.field_imagen_media_product.url\" alt=\"{{cir.field_imagen_media_product.alt}}\"\n            class=\"img-fluid w-100\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/card-img-text/card-img-text.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/card-img-text/card-img-text.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.condensed {\n  font-size: 20px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px;\n  color: #002b49;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nh1 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nhr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\na {\n  color: #91b520;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\np {\n  font-size: 14px;\n  width: 88%;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter;\n  color: #002b49; }\n\n.color-back {\n  background-color: #f8f9fa; }\n"

/***/ }),

/***/ "./src/app/cards/components/card-img-text/card-img-text.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/card-img-text/card-img-text.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardImgTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgTextComponent", function() { return CardImgTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardImgTextComponent = /** @class */ (function () {
    function CardImgTextComponent(_http) {
        this._http = _http;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.orientacion = '';
        this.cardImgL = [];
        this.cardImgR = [];
    }
    CardImgTextComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        if (this.orientacion === 'IT') {
            this.datosMenu = {
                label: 'IMAG L',
                id: 'a3',
                url: '/imedical'
            };
        }
        else {
            this.datosMenu = {
                label: 'IMAG R',
                id: 'a4',
                url: '/imedical'
            };
        }
        this.propagar.emit(this.datosMenu);
        this.getCardImgTextServiceL();
        this.getCardImgTextServiceR();
    };
    CardImgTextComponent.prototype.getCardImgTextServiceL = function () {
        var _this = this;
        this._http.getCustomCardInformationType('mediaimedicalcard_2', this.type).subscribe(function (params) {
            _this.titleL = params.header[0].data.title;
            _this.cardImgL = params.data;
        });
    };
    CardImgTextComponent.prototype.getCardImgTextServiceR = function () {
        var _this = this;
        this._http.getCustomCardInformationType('mediaimedicalcard', this.type).subscribe(function (params) {
            _this.titleR = params.header[0].data.title;
            _this.cardImgR = params.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardImgTextComponent.prototype, "orientacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardImgTextComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardImgTextComponent.prototype, "type", void 0);
    CardImgTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-img-text',
            template: __webpack_require__(/*! ./card-img-text.component.html */ "./src/app/cards/components/card-img-text/card-img-text.component.html"),
            styles: [__webpack_require__(/*! ./card-img-text.component.scss */ "./src/app/cards/components/card-img-text/card-img-text.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], CardImgTextComponent);
    return CardImgTextComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/carousel-controls/carousel-controls.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-controls/carousel-controls.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h2>{{ caroseltitle }}</h2>\n</section>\n\n<div class=\"contenedor\">\n    <ngx-carousel [inputs]=\"carocarouselTile\" (carouselLoad)=\"carouselTileLoad($event)\" *ngIf=\"CarouselControlArray\">\n        <ngx-tile NgxCarouselItem *ngFor=\"let main of CarouselControlArray; let i = index\">\n            <a href=\"\" class=\"url-link\">\n                <div class=\"container-img\">\n                    <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ main.field_image?.url }}\" alt=\"{{ main.field_image?.alt }}\">\n                </div>\n                <div class=\"info\">\n                    <hr class=\"line\">\n                    <h4 class=\"name-organization\">{{main.title}}</h4>\n                    <h3 class=\"main-title\">{{main.field_category}}</h3>\n                    <h5 class=\"category\">{{main.field_recognition}}</h5>\n                    <h5 class=\"yeard\">{{main.field_year}}</h5>\n                </div>\n            </a>\n        </ngx-tile>\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\n  </ngx-carousel>\n </div>"

/***/ }),

/***/ "./src/app/cards/components/carousel-controls/carousel-controls.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-controls/carousel-controls.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor {\n  width: 80%;\n  margin: 0 auto; }\n\n.item {\n  width: 405%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .item {\n      width: 200%; } }\n\n@media (min-width: 1025px) {\n    .item {\n      width: 100%; } }\n\n.url-link {\n  width: 100%;\n  padding-left: 4%;\n  padding-right: 4%;\n  margin-top: 1%;\n  text-decoration: none; }\n\n@media (min-width: 1025px) {\n    .url-link {\n      padding-left: 5%;\n      padding-right: 5%; } }\n\n.url-link .container-img {\n    height: 123px;\n    position: relative; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      .url-link .container-img {\n        padding-left: 0%;\n        padding-right: 0%; } }\n\n@media (min-width: 1025px) {\n      .url-link .container-img {\n        padding-left: 10%;\n        padding-right: 10%; } }\n\n.url-link .container-img .img-float {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n\n.url-link .info {\n    width: 100%;\n    color: #002b49;\n    text-align: center; }\n\n.url-link .info::before {\n      content: '';\n      background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n      height: 1px;\n      right: 0%;\n      left: 5%;\n      position: absolute; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n        .url-link .info::before {\n          display: none; } }\n\n@media (min-width: 1025px) {\n        .url-link .info::before {\n          display: none; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      .url-link .info {\n        height: 250px; } }\n\n.url-link .info .line {\n      visibility: hidden; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n        .url-link .info .line {\n          visibility: visible;\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n          height: 1px;\n          width: 83%;\n          position: relative;\n          top: 17px; } }\n\n@media (min-width: 1025px) {\n        .url-link .info .line {\n          visibility: visible;\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n          height: 1px;\n          width: 83%;\n          position: relative;\n          top: 17px; } }\n\n.url-link .info .name-organization {\n      padding-top: 14%;\n      font-size: 16px;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n\n@media (min-width: 1025px) {\n        .url-link .info .name-organization {\n          padding-top: 14%; } }\n\n.url-link .info .main-title {\n      margin-top: 4%;\n      font-size: 20px;\n      font-family: 'Open Sans Codensed';\n      font-weight: 300;\n      text-transform: uppercase; }\n\n.url-link .info .category {\n      width: 100%;\n      margin-top: 5.2%;\n      padding-left: 27%;\n      padding-right: 26%;\n      font-size: 14px;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n\n@media (min-width: 1025px) {\n        .url-link .info .category {\n          padding-left: 12%;\n          padding-right: 12%;\n          width: 100%;\n          height: 56px; } }\n\n.url-link .info .yeard {\n      font-size: 14px;\n      margin-top: 6%;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n\n@media (min-width: 1025px) {\n        .url-link .info .yeard {\n          margin-top: 2%; } }\n\n#main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n\n@media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n\n#main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n\n@media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n#titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n\n@media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n\n#titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n\n@media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\nh1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs:focus, .leftRs:focus {\n  outline: none; }\n\n:host ::ng-deep .tile {\n  box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/cards/components/carousel-controls/carousel-controls.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/carousel-controls/carousel-controls.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CarouselControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselControlsComponent", function() { return CarouselControlsComponent; });
/* harmony import */ var _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cards/content-type.services */ "./src/app/services/cards/content-type.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselControlsComponent = /** @class */ (function () {
    function CarouselControlsComponent(AchievementCarouselItems, _cardService) {
        this.AchievementCarouselItems = AchievementCarouselItems;
        this._cardService = _cardService;
        this.CarouselControlArray = [];
        this.caroseltitle = [];
        this.CarouselControlArray = [];
    }
    CarouselControlsComponent.prototype.ngOnInit = function () {
        this.getAchievementsCarouselItems();
        this.CarouselControlArray = [0, 1, 2, 3];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 4,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    CarouselControlsComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.CarouselControlArray.length;
        if (len <= 4) {
            for (var i = len; i < len + 0; i++) {
                this.CarouselControlArray.push(i);
            }
        }
    };
    CarouselControlsComponent.prototype.getAchievementsCarouselItems = function () {
        var _this = this;
        return this._cardService.getCustomCardInformation('achievementscard').subscribe(function (items) {
            _this.CarouselControlArray = items.data;
            _this.caroseltitle = items.header[0].data.title;
            _this.CarouselControlArray = Object.keys(items.data).map(function (key) { return items.data[key]; });
        });
    };
    CarouselControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-controls',
            template: __webpack_require__(/*! ./carousel-controls.component.html */ "./src/app/cards/components/carousel-controls/carousel-controls.component.html"),
            styles: [__webpack_require__(/*! ./carousel-controls.component.scss */ "./src/app/cards/components/carousel-controls/carousel-controls.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"],
            src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], CarouselControlsComponent);
    return CarouselControlsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-indicators/carousel-indicators.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"carousel-container\">\n    <ngb-carousel *ngIf=\"carousel.length > 0\" (window:resize)=\"onResize()\">\n        <ng-template class=\"prueba\" ngbSlide *ngFor=\"let item of carousel\">\n            <img class=\"carousel-main-image\" [src]=\"item['field_image']['url']\" alt=\"Random first slide\" [ngStyle]=\"{'height': height}\">\n            <div class=\"carousel-caption\">\n            <h3 class=\"carousel-title\">{{ item.title }}</h3>\n            <p class=\"carousel-subtitle\">{{ item.field_subtitle }}</p>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n    <div class=\"col section-button-explorar\" (click)=\"slideDown()\">       \n        <div class=\"row button-explorar\">\n            <h6 class=\"anchor\">EXPLORAR</h6>\n        </div>\n        <div class=\"row button-explorar\">\n            <img class=\"down-arrow-slider\" src=\"../assets/images/DownArrow.svg\" alt=\"DownArrow\">\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .carousel-control-next,\n:host /deep/ .carousel-control-prev {\n  width: 38px; }\n\n:host /deep/ .carousel-control-prev .carousel-control-prev-icon {\n  background-image: url(\"/../assets/images/LeftArrow.svg\");\n  width: 41px;\n  height: 77px; }\n\n:host /deep/ .carousel-control-next .carousel-control-next-icon {\n  background-image: url(\"/../assets/images/rightArrow.svg\");\n  width: 41px;\n  height: 77px; }\n\n:host /deep/ .carousel-indicators {\n  bottom: 150px;\n  justify-content: flex-end;\n  margin: 0 100px 0 0; }\n\n:host /deep/ .carousel-indicators li {\n  width: 15px;\n  height: 15px;\n  margin: 0 5px;\n  border-radius: 50%; }\n\n:host /deep/ .carousel-indicators li.active {\n    background-color: #a6cf24; }\n\n#carousel-container .carousel-main-image {\n  max-height: 1080px;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5); }\n\n@media (min-width: 1025px) {\n    #carousel-container .carousel-main-image {\n      width: 100%; } }\n\n#carousel-container .carousel-caption {\n  width: 100%;\n  text-align: right;\n  top: 50%;\n  right: 0;\n  left: 0;\n  padding: 0 100px 0 100px; }\n\n#carousel-container .carousel-caption .carousel-title {\n    font-family: Open Sans light;\n    font-size: 50px;\n    display: block; }\n\n#carousel-container .carousel-caption .carousel-subtitle {\n    font-family: Open Sans light;\n    font-size: 28px;\n    display: block;\n    padding-left: 25%; }\n\n#carousel-container .section-button-explorar {\n  position: absolute;\n  bottom: 35px;\n  cursor: pointer; }\n\n#carousel-container .section-button-explorar .button-explorar {\n    justify-content: center; }\n\n#carousel-container .section-button-explorar .button-explorar .down-arrow-slider {\n      width: 21px;\n      height: 15px; }\n\n#carousel-container .section-button-explorar .button-explorar .anchor {\n      font-family: Open Sans Codensed;\n      font-size: 16px;\n      color: white; }\n\n@media only screen and (max-width: 1024px) {\n  :host /deep/ .carousel-control-next,\n  :host /deep/ .carousel-control-prev {\n    visibility: hidden; }\n  :host /deep/ .carousel-indicators {\n    bottom: 150px;\n    justify-content: center;\n    margin: 0 0 0 0; } }\n\n@media only screen and (max-width: 1024px) and (max-height: 484px) {\n    :host /deep/ .carousel-indicators {\n      bottom: 110px; } }\n\n@media only screen and (max-width: 1024px) {\n  #carousel-container .carousel-caption {\n    text-align: center;\n    top: 35%;\n    padding: 0 50px 0 50px; } }\n\n@media only screen and (max-width: 1024px) and (max-width: 400px) {\n    #carousel-container .carousel-caption {\n      top: 25%; } }\n\n@media only screen and (max-width: 1024px) {\n    #carousel-container .carousel-caption .carousel-title {\n      font-family: Open Sans light;\n      font-size: 36px;\n      display: block; }\n    #carousel-container .carousel-caption .carousel-subtitle {\n      font-family: Open Sans light;\n      font-size: 18px;\n      display: block;\n      padding: 0; } }\n\n@media only screen and (max-width: 321px) {\n  :host /deep/ .carousel-indicators {\n    bottom: 95px; } }\n"

/***/ }),

/***/ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-indicators/carousel-indicators.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CarouselIndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselIndicatorsComponent", function() { return CarouselIndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselIndicatorsComponent = /** @class */ (function () {
    function CarouselIndicatorsComponent(_cardService) {
        this._cardService = _cardService;
        this.medius = '550px';
        this.carousel = [];
        this.height = (window.innerHeight) + 'px';
    }
    CarouselIndicatorsComponent.prototype.ngOnInit = function () {
        this.getIndicatorsSliderItems();
    };
    CarouselIndicatorsComponent.prototype.getIndicatorsSliderItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('slidercard').subscribe(function (items) {
            _this.carousel = items.data;
        });
    };
    CarouselIndicatorsComponent.prototype.onResize = function () {
        this.height = (window.innerHeight) + 'px';
    };
    CarouselIndicatorsComponent.prototype.slideDown = function () {
        var navBarHeight = document.querySelector('.navbar-expand-lg').clientHeight;
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: window.innerHeight - navBarHeight
        }, 2000);
        return false;
    };
    CarouselIndicatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-indicators',
            template: __webpack_require__(/*! ./carousel-indicators.component.html */ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.html"),
            styles: [__webpack_require__(/*! ./carousel-indicators.component.scss */ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], CarouselIndicatorsComponent);
    return CarouselIndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item-2/carousel-item-2.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h2>{{ titleClients }}</h2>\n</section>\n\n<div class=\"contenedor\" >\n    <ngx-carousel\n    [inputs]=\"carocarouselTile\"\n    (carouselLoad)=\"carouselTileLoad($event)\">\n\n          <ngx-tile NgxCarouselItem *ngFor=\"let ourC of clients; let i = index\">\n            <a href=\"#\" class=\"url-carousel\" >\n                <div class=\"container-img col-md-3 \">\n                    <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ ourC.field_image?.url }}\" alt=\"{{ ourC.field_image?.alt }}\">\n                </div>\n                <div class=\"info-carousel\">\n                    <h3 class=\"title\">{{ ourC.title }}</h3>\n                    <p class=\"text-description\">{{ ourC.field_description }}</p>\n                </div>\n            </a>\n\n          </ngx-tile>\n\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\n  </ngx-carousel>\n\n</div>"

/***/ }),

/***/ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor {\n  width: 80%;\n  margin: 0 auto; }\n\n.item {\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .item {\n      height: initial;\n      width: 68%;\n      left: initial; } }\n\n@media (min-width: 1025px) {\n    .item {\n      height: initial;\n      width: 92.5%;\n      left: initial; } }\n\n.tile {\n  float: left;\n  box-shadow: none !important;\n  position: relative; }\n\n@media (min-width: 1025px) {\n    .tile {\n      left: 0%;\n      padding-left: 0%;\n      justify-content: center; } }\n\n.url-carousel {\n  width: 132px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .url-carousel {\n      width: 285px; } }\n\n@media (min-width: 1025px) {\n    .url-carousel {\n      width: 230px;\n      padding-left: 2%;\n      padding-right: 2%;\n      text-decoration: none;\n      overflow: hidden;\n      height: 253px;\n      display: block; }\n      .url-carousel:hover .container-img {\n        -webkit-transform: translateY(-122%);\n                transform: translateY(-122%); }\n      .url-carousel:hover .info-carousel {\n        -webkit-transform: translateY(-110%);\n                transform: translateY(-110%); } }\n\n.url-carousel .container-img {\n    width: 30%;\n    height: 30%;\n    position: relative;\n    display: -webkit-inline-box;\n    margin-left: 11%;\n    margin-right: auto;\n    margin-top: 5%;\n    display: inline-table;\n    max-width: 100%;\n    align-items: center; }\n\n@media (min-width: 1025px) {\n      .url-carousel .container-img {\n        display: flex;\n        height: 235px;\n        width: 100%;\n        margin-bottom: 14%;\n        margin-top: 0%;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 80%;\n        transition: all ease 0.8s; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      .url-carousel .container-img {\n        display: flex;\n        width: 100%;\n        padding: 22%;\n        align-items: center;\n        height: 100px;\n        margin-left: 36%; } }\n\n.url-carousel .container-img .img-fluid {\n      height: 100%;\n      width: 100%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n        .url-carousel .container-img .img-fluid {\n          height: auto;\n          width: auto; } }\n\n@media (min-width: 1025px) {\n        .url-carousel .container-img .img-fluid {\n          height: auto;\n          width: auto; } }\n\n.url-carousel .info-carousel {\n    display: none; }\n\n@media (min-width: 1025px) {\n      .url-carousel .info-carousel {\n        position: absolute;\n        display: table;\n        width: 100%;\n        height: 222px;\n        transition: all ease 0.8s; }\n        .url-carousel .info-carousel::before {\n          content: '';\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n          display: block;\n          position: absolute;\n          height: 1px;\n          width: 100%; }\n        .url-carousel .info-carousel::after {\n          content: '';\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n          display: block;\n          position: absolute;\n          top: 100%;\n          height: 1px;\n          width: 100%; } }\n\n.url-carousel .info-carousel .title {\n      text-align: center;\n      text-transform: uppercase;\n      width: 100%;\n      padding-top: 12%;\n      font-size: 24px;\n      color: #acd233;\n      padding-left: 16%;\n      padding-right: 18%;\n      font-family: 'Open Sans Condensed';\n      font-weight: 300; }\n\n.url-carousel .info-carousel .text-description {\n      text-align: center;\n      width: 100%;\n      padding-top: 2%;\n      font-size: 14px;\n      color: #002b49;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n\n.icon-left {\n  position: relative;\n  top: 5%;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .icon-left {\n      left: 37%; } }\n\n@media (min-width: 1025px) {\n    .icon-left {\n      height: 34px; } }\n\n.icon-right {\n  position: relative;\n  top: 5%;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .icon-right {\n      right: 40%; } }\n\n@media (min-width: 1025px) {\n    .icon-right {\n      height: 34px; } }\n\n#main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n\n@media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n\n#main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n\n@media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n#titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n\n@media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n\n#titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n\n@media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\nh1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs:focus, .leftRs:focus {\n  outline: none; }\n\n.tile {\n  box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0), 0 2px 10px 0 rgba(255, 255, 255, 0); }\n\n@media screen and (max-width: 480px) {\n  .url-carousel {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    text-align: center; }\n  .container-img {\n    margin-left: 0px !important; } }\n\n:host ::ng-deep .tile {\n  box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item-2/carousel-item-2.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CarouselItem2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem2Component", function() { return CarouselItem2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselItem2Component = /** @class */ (function () {
    function CarouselItem2Component(_cardService) {
        this._cardService = _cardService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clients = [];
    }
    CarouselItem2Component.prototype.ngOnInit = function () {
        this.datosMenu = {
            label: 'CAROUSEL',
            id: 'a6',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getOurClientsItems();
        this.clients = [0, 1, 2, 3, 4, 5];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false,
                pointStyles: "\n            .ngxcarouselPoint {\n              list-style-type: none;\n              text-align: center;\n              padding: 12px;\n              margin: 0;\n              white-space: nowrap;\n              overflow: auto;\n              box-sizing: border-box;\n            }\n            .ngxcarouselPoint li {\n              display: inline-block;\n              border-radius: 50%;\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              padding: 4px;\n              margin: 0 3px;\n              transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n              transition: .4s;\n            }\n            .ngxcarouselPoint li.active {\n                background: #6b6b6b;\n                transform: scale(1.2);\n            }\n          "
            },
            load: 4,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    CarouselItem2Component.prototype.carouselTileLoad = function (evt) {
        var len = this.clients.length;
        if (len <= 4) {
            for (var i = len; i < len + 10; i++) {
                this.clients.push(i);
            }
        }
    };
    CarouselItem2Component.prototype.getOurClientsItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('clientscard').subscribe(function (items) {
            _this.clients = items.data;
            _this.titleClients = items.header[0].data.title;
            _this.clients = Object.keys(items.data).map(function (key) { return items.data[key]; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarouselItem2Component.prototype, "propagar", void 0);
    CarouselItem2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-item-2',
            template: __webpack_require__(/*! ./carousel-item-2.component.html */ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item-2.component.scss */ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], CarouselItem2Component);
    return CarouselItem2Component;
}());



/***/ }),

/***/ "./src/app/cards/components/carousel-item/carousel-item.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item/carousel-item.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-item window-complete\" *ngFor=\"let car of carouselArray\">\n    <picture>\n        <source srcset=\"assets/images/movil.jpg\" media=\"(max-width:{{medius}})\">\n\n        <img class=\"d-block w-100 \" [src]=\" car.field_image.url \" alt=\"desarrollo de software \">\n\n        <div class=\"carousel-caption d-md-block text-slider \">\n            <h1 class=\"title-slider \"> {{car.title}} </h1>\n            <p class=\"description-slider \">{{car.field_subtitle}}</p>\n        </div>\n    </picture>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/carousel-item/carousel-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item/carousel-item.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".window-complete {\n  height: auto; }\n  .window-complete .text-slider {\n    bottom: 23.5%;\n    left: 14%;\n    padding-bottom: initial; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      .window-complete .text-slider {\n        bottom: 25.5%;\n        width: 76%;\n        left: 16%;\n        text-align: right; } }\n  @media (min-width: 1025px) {\n      .window-complete .text-slider {\n        bottom: 26.5%;\n        width: 76%;\n        left: 16%;\n        text-align: right; } }\n  .window-complete .text-slider .title-slider {\n      font-size: 36px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .window-complete .text-slider .title-slider {\n          font-size: 30px; } }\n  @media (min-width: 1025px) {\n        .window-complete .text-slider .title-slider {\n          font-size: 50px; } }\n  .window-complete .text-slider .description-slider {\n      font-size: 18px;\n      font-family: 'Open Sans light';\n      font-weight: 300; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .window-complete .text-slider .description-slider {\n          position: relative;\n          line-height: 1.2;\n          font-size: 19px;\n          width: 88%;\n          left: 11%; } }\n  @media (min-width: 1025px) {\n        .window-complete .text-slider .description-slider {\n          position: relative;\n          line-height: 1.2;\n          font-size: 28px;\n          padding-left: 22%;\n          width: 88%;\n          left: 12%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/carousel-item/carousel-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item/carousel-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: CarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function() { return CarouselItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { ContentType } from './../../../services/cards/content-type.services';


var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(_cardService) {
        this._cardService = _cardService;
        this.medius = '550px';
        this.carouselArray = [];
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
        this.getCarouselsItems();
    };
    CarouselItemComponent.prototype.getCarouselsItems = function () {
        var _this = this;
        return this._cardService.getCustomCardInformation('slidercard').subscribe(function (items) {
            _this.carouselArray = items.data;
        });
    };
    CarouselItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-item',
            template: __webpack_require__(/*! ./carousel-item.component.html */ "./src/app/cards/components/carousel-item/carousel-item.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item.component.scss */ "./src/app/cards/components/carousel-item/carousel-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/cards/components/client-project-imedical/client-project-imedical.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [id]=\"datosMenu.id\">\n    <div class=\"col-md-4 mb-3\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2 class=\"condensed\">{{ titleCard | uppercase}}</h2>\n                <hr class=\"green\">\n                <img id=\"logo-cliente\" [src]=\"imgSrcClient\" class=\"img-fluid\" alt=\"{{nameClient}}\">\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-8 mb-3\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2 class=\"condensed\">{{ titleSection | uppercase }}</h2>\n                <hr class=\"green\">\n                <h2>{{ titleProject | uppercase }}</h2>\n                <p [innerHTML]=\"summaryProject\"></p>\n                <h5>\n                    <span *ngFor=\"let tag of tags\" class=\"badge badge-custom mr-2 mt-2 p-2\">{{ tag | uppercase }}</span>\n                </h5>\n                <a [href]=\"linkProject\" class=\"green\">{{ linkProject }}</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/cards/components/client-project-imedical/client-project-imedical.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo-cliente {\n  width: 50%;\n  display: block;\n  margin: 0px auto; }\n\nhr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\nh2 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter; }\n\n.condensed {\n  color: #002b4994;\n  font-size: 22px;\n  letter-spacing: -1px; }\n\n.badge-custom {\n  background: #91b520;\n  border-radius: 0px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: lighter; }\n\na {\n  color: #91b520;\n  font-family: 'Open Sans Condensed', sans-serif; }\n"

/***/ }),

/***/ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/cards/components/client-project-imedical/client-project-imedical.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ClientProjectImedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProjectImedicalComponent", function() { return ClientProjectImedicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientProjectImedicalComponent = /** @class */ (function () {
    function ClientProjectImedicalComponent(_http) {
        this._http = _http;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titleCard = '';
        this.imgSrcClient = '';
        this.nameClient = '';
        this.titleSection = '';
        this.titleProject = '';
        this.summaryProject = '';
        this.tags = [];
        this.linkProject = '';
    }
    ClientProjectImedicalComponent.prototype.ngOnInit = function () {
        this.datosMenu = {
            label: 'CLIENTS',
            id: 'a8',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getClientProjectImedicalService();
    };
    ClientProjectImedicalComponent.prototype.getClientProjectImedicalService = function () {
        var _this = this;
        this._http.getCustomCardInformation('imedicalclients_2').subscribe(function (params) {
            _this.titleCard = 'El Cliente';
            _this.imgSrcClient = params.data[0].field_image.url;
            _this.nameClient = params.data[0].field_image.alt;
            _this.titleSection = 'El Proyecto';
            _this.titleProject = params.data[0].field_title_description;
            _this.summaryProject = params.data[0].field_description;
            _this.tags = ['salud', 'cloud', 'angularjs', 'mobile', 'tag'];
            _this.linkProject = params.data[0].field_url_client;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientProjectImedicalComponent.prototype, "propagar", void 0);
    ClientProjectImedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-project-imedical',
            template: __webpack_require__(/*! ./client-project-imedical.component.html */ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.html"),
            styles: [__webpack_require__(/*! ./client-project-imedical.component.scss */ "./src/app/cards/components/client-project-imedical/client-project-imedical.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], ClientProjectImedicalComponent);
    return ClientProjectImedicalComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/client-proserv/client-proserv.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/cards/components/client-proserv/client-proserv.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n  <h2 [id]=\"datosMenu.id\">{{ titleClients }}</h2>\n</section>\n\n<div class=\"contenedor\" >\n  <ngx-carousel\n  [inputs]=\"carocarouselTile\"\n  (carouselLoad)=\"carouselTileLoad($event)\">\n\n        <ngx-tile NgxCarouselItem *ngFor=\"let ourC of clients; let i = index\">\n          <a href=\"#\" class=\"url-carousel\" >\n              <div class=\"container-img col-md-3 \">\n                  <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ ourC.field_image?.url }}\" alt=\"{{ ourC.field_image?.alt }}\">\n              </div>\n              <div class=\"info-carousel\">\n                  <h3 class=\"title\">{{ ourC.title }}</h3>\n                  <p class=\"text-description\">{{ ourC.field_description }}</p>\n              </div>\n          </a>\n\n        </ngx-tile>\n\n      <button NgxCarouselPrev class='leftRs'>&lt;</button>\n      <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n\n</div>"

/***/ }),

/***/ "./src/app/cards/components/client-proserv/client-proserv.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/cards/components/client-proserv/client-proserv.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor {\n  width: 80%;\n  margin: 0 auto; }\n\n.item {\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .item {\n      height: initial;\n      width: 68%;\n      left: initial; } }\n\n@media (min-width: 1025px) {\n    .item {\n      height: initial;\n      width: 92.5%;\n      left: initial; } }\n\n.tile {\n  float: left;\n  box-shadow: none !important;\n  position: relative; }\n\n@media (min-width: 1025px) {\n    .tile {\n      left: 0%;\n      padding-left: 0%;\n      justify-content: center; } }\n\n.url-carousel {\n  width: 132px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .url-carousel {\n      width: 285px; } }\n\n@media (min-width: 1025px) {\n    .url-carousel {\n      width: 230px;\n      padding-left: 2%;\n      padding-right: 2%;\n      text-decoration: none;\n      overflow: hidden;\n      height: 253px;\n      display: block; }\n      .url-carousel:hover .container-img {\n        -webkit-transform: translateY(-122%);\n                transform: translateY(-122%); }\n      .url-carousel:hover .info-carousel {\n        -webkit-transform: translateY(-110%);\n                transform: translateY(-110%); } }\n\n.url-carousel .container-img {\n    width: 30%;\n    height: 30%;\n    position: relative;\n    display: -webkit-inline-box;\n    margin-left: 11%;\n    margin-right: auto;\n    margin-top: 5%;\n    display: inline-table;\n    max-width: 100%;\n    align-items: center; }\n\n@media (min-width: 1025px) {\n      .url-carousel .container-img {\n        display: flex;\n        height: 235px;\n        width: 100%;\n        margin-bottom: 14%;\n        margin-top: 0%;\n        padding-left: 20px;\n        padding-right: 20px;\n        width: 80%;\n        transition: all ease 0.8s; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      .url-carousel .container-img {\n        display: flex;\n        width: 100%;\n        padding: 22%;\n        align-items: center;\n        height: 100px;\n        margin-left: 36%; } }\n\n.url-carousel .container-img .img-fluid {\n      height: 100%;\n      width: 100%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n        .url-carousel .container-img .img-fluid {\n          height: auto;\n          width: auto; } }\n\n@media (min-width: 1025px) {\n        .url-carousel .container-img .img-fluid {\n          height: auto;\n          width: auto; } }\n\n.url-carousel .info-carousel {\n    display: none; }\n\n@media (min-width: 1025px) {\n      .url-carousel .info-carousel {\n        position: absolute;\n        display: table;\n        width: 100%;\n        height: 222px;\n        transition: all ease 0.8s; }\n        .url-carousel .info-carousel::before {\n          content: '';\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n          display: block;\n          position: absolute;\n          height: 1px;\n          width: 100%; }\n        .url-carousel .info-carousel::after {\n          content: '';\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n          display: block;\n          position: absolute;\n          top: 100%;\n          height: 1px;\n          width: 100%; } }\n\n.url-carousel .info-carousel .title {\n      text-align: center;\n      text-transform: uppercase;\n      width: 100%;\n      padding-top: 12%;\n      font-size: 24px;\n      color: #acd233;\n      padding-left: 16%;\n      padding-right: 18%;\n      font-family: 'Open Sans Condensed';\n      font-weight: 300; }\n\n.url-carousel .info-carousel .text-description {\n      text-align: center;\n      width: 100%;\n      padding-top: 2%;\n      font-size: 14px;\n      color: #002b49;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n\n.icon-left {\n  position: relative;\n  top: 5%;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .icon-left {\n      left: 37%; } }\n\n@media (min-width: 1025px) {\n    .icon-left {\n      height: 34px; } }\n\n.icon-right {\n  position: relative;\n  top: 5%;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    .icon-right {\n      right: 40%; } }\n\n@media (min-width: 1025px) {\n    .icon-right {\n      height: 34px; } }\n\n#main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n\n@media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n\n#main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n\n@media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n\n#titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n\n@media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n\n#titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n\n@media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n\nh1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n\n.rightRs:focus, .leftRs:focus {\n  outline: none; }\n\n.tile {\n  box-shadow: 0 2px 5px 0 rgba(255, 255, 255, 0), 0 2px 10px 0 rgba(255, 255, 255, 0); }\n\n@media screen and (max-width: 480px) {\n  .url-carousel {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    text-align: center; }\n  .container-img {\n    margin-left: 0px !important; } }\n\n:host ::ng-deep .tile {\n  box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/cards/components/client-proserv/client-proserv.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/client-proserv/client-proserv.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientProServComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProServComponent", function() { return ClientProServComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientProServComponent = /** @class */ (function () {
    function ClientProServComponent(_cardService) {
        this._cardService = _cardService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clients = [];
    }
    ClientProServComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'CAROUSEL',
            id: 'a6',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getOurClientsItems();
        this.clients = [0, 1, 2, 3, 4, 5];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false,
                pointStyles: "\n            .ngxcarouselPoint {\n              list-style-type: none;\n              text-align: center;\n              padding: 12px;\n              margin: 0;\n              white-space: nowrap;\n              overflow: auto;\n              box-sizing: border-box;\n            }\n            .ngxcarouselPoint li {\n              display: inline-block;\n              border-radius: 50%;\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              padding: 4px;\n              margin: 0 3px;\n              transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n              transition: .4s;\n            }\n            .ngxcarouselPoint li.active {\n                background: #6b6b6b;\n                transform: scale(1.2);\n            }\n          "
            },
            load: 4,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    ClientProServComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.clients.length;
        if (len <= 4) {
            for (var i = len; i < len + 10; i++) {
                this.clients.push(i);
            }
        }
    };
    ClientProServComponent.prototype.getOurClientsItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformationType('clientscard', this.type).subscribe(function (items) {
            _this.clients = items.data;
            _this.titleClients = items.header[0].data.title;
            _this.clients = Object.keys(items.data).map(function (key) { return items.data[key]; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientProServComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ClientProServComponent.prototype, "type", void 0);
    ClientProServComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-proserv',
            template: __webpack_require__(/*! ./client-proserv.component.html */ "./src/app/cards/components/client-proserv/client-proserv.component.html"),
            styles: [__webpack_require__(/*! ./client-proserv.component.scss */ "./src/app/cards/components/client-proserv/client-proserv.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], ClientProServComponent);
    return ClientProServComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/float-social/float-social.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/float-social/float-social.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"float-social-block\" [hidden]=\"!hide\">\n  <section class=\"social-networks\">\n    <div class=\"icon-social\">\n      <ul class=\"row fa-ul\">\n        <li *ngFor=\"let net of socialmedia;\">\n          <a href=\"{{ net.data.url }}\" target=\"_blank\">\n            <i class=\"{{ net.data.text }}\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </section>\n  <section class=\"envolope\">\n    <div class=\"icon-mail\">\n      <ul class=\"row fa-ul\">\n        <li>\n          <a routerLink=\"/contact-us\">\n            <i class=\"fa-li fas fa-envelope\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/components/float-social/float-social.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/float-social/float-social.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-networks {\n  width: 41px;\n  height: auto;\n  background-color: #517bbd;\n  opacity: 0.7;\n  position: fixed;\n  z-index: 9;\n  bottom: 50px;\n  display: none; }\n  @media (min-width: 1025px) {\n    .social-networks {\n      display: block; } }\n  .social-networks .icon-social {\n    display: block; }\n  .social-networks .icon-social .row {\n      margin-left: 13px;\n      width: 0; }\n  .social-networks .icon-social .row li {\n        margin-right: 1px;\n        margin-bottom: 9px; }\n  .social-networks .icon-social .row li a {\n          display: block;\n          color: #FFFFFF;\n          margin-top: 11px; }\n  .social-networks .icon-social .row a:hover {\n        color: #a6cf24; }\n  .envolope {\n  width: 41px;\n  height: 41px;\n  background-color: #a6cf24;\n  opacity: 0.7;\n  position: fixed;\n  border-radius: 50%;\n  display: block;\n  z-index: 9;\n  right: 18px;\n  bottom: 15px; }\n  @media (min-width: 1025px) {\n    .envolope {\n      border-radius: 0;\n      bottom: 0;\n      right: initial; } }\n  .envolope .icon-mail {\n    font-size: 22px;\n    margin-top: 5px;\n    margin-left: 0px; }\n  .envolope .icon-mail .row {\n      margin-right: 0;\n      margin-left: 0; }\n  .envolope .icon-mail .row .fa-li {\n        left: -1px; }\n  @media (min-width: 1025px) {\n          .envolope .icon-mail .row .fa-li {\n            left: 0; } }\n  .envolope .icon-mail a {\n      color: #FFFFFF; }\n"

/***/ }),

/***/ "./src/app/cards/components/float-social/float-social.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/float-social/float-social.component.ts ***!
  \*************************************************************************/
/*! exports provided: FloatSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSocialComponent", function() { return FloatSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FloatSocialComponent = /** @class */ (function () {
    function FloatSocialComponent(router, footerBrand2) {
        this.router = router;
        this.footerBrand2 = footerBrand2;
        this.hide = true;
        this.socialmedia = [];
    }
    FloatSocialComponent.prototype.ngOnInit = function () {
        this.getFloatSocialItems();
    };
    FloatSocialComponent.prototype.onWindowScroll = function () {
        if ($(window).height() + $(document).scrollTop() === $(document).height()) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    };
    FloatSocialComponent.prototype.getFloatSocialItems = function () {
        var _this = this;
        this.footerBrand2.getCustomCardInformation('contactcard').subscribe(function (items) {
            _this.socialmedia = items.others;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FloatSocialComponent.prototype, "onWindowScroll", null);
    FloatSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-float-social',
            template: __webpack_require__(/*! ./float-social.component.html */ "./src/app/cards/components/float-social/float-social.component.html"),
            styles: [__webpack_require__(/*! ./float-social.component.scss */ "./src/app/cards/components/float-social/float-social.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], FloatSocialComponent);
    return FloatSocialComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.html":
/*!************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <section id=\"footer-block-location\">\n        <div class=\"row row-block\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-block\"\n                *ngFor=\"let ubicacion of dataUbicaciones; let i = index\">\n                <div class=\"footer-block-location\" [class.site]=\"i > 0\" [class.random]=\"i > 0\">\n                    <div class=\"row location-row\">\n                        <div class=\"col-10 info-location\">\n                            <h2 class=\"title-location\">{{ubicacion.title}}</h2>\n                            <div class=\"subtitle-location\">\n                                <li class=\"location-li address\">{{ubicacion.field_address}}</li>\n                                <li class=\"location-li telephone\">{{ubicacion.field_telephone}}</li>\n                                <li class=\"location-li see-location office\" *ngIf=\"i == 0\">\n                                    <a class=\"link-location\" routerLink=\"/contact-us/\" fragment=\"title-description\"\n                                        (click)=\"cargarMapaUbicaciones()\">\n                                        <i class=\"location-green\"></i>\n                                        <i class=\"location-green-hover\"></i>\n                                        {{title}}\n                                    </a>\n                                </li>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</ng-container>"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.scss":
/*!************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block-location {\n  margin: 20px 0 20px 31%;\n  padding: 0 0 0 30px;\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n  border-left: 1px solid rgba(255, 255, 255, 0.3); }\n  #footer-block-location .row-block {\n    margin: 0; }\n  #footer-block-location .row-block .col-block {\n      padding: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row {\n        margin: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location {\n          padding: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .title-location {\n            color: white;\n            font-family: Open Sans;\n            font-size: 12px; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location {\n            color: rgba(255, 255, 255, 0.7);\n            font-family: Open Sans Light;\n            font-size: 11px; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.address,\n            #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.telephone,\n            #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location {\n              list-style: none;\n              display: block;\n              margin: 8px 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location {\n              margin: 9px 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location {\n                font-family: Open Sans Light;\n                font-size: 12px;\n                color: #a6cf24; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location:hover {\n                  color: #83a024;\n                  text-decoration: none; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location:hover .location-green {\n                    background-image: url(\"/assets/icon/hover-location-icon.svg\");\n                    background-position: center;\n                    background-repeat: no-repeat; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location .location-green {\n                  background-image: url(\"/assets/icon/placeholders-green.svg\");\n                  display: inline-block;\n                  background-position: center;\n                  background-repeat: no-repeat;\n                  width: 16px;\n                  height: 16px; }\n  @media only screen and (max-width: 769px) {\n  #footer-block-location {\n    border-right: 0;\n    border-left: 0;\n    margin: 70px 0 20px 0;\n    padding: 0; }\n    #footer-block-location .row-block .col-block .footer-block-location.site {\n      display: none; }\n    #footer-block-location .row-block .col-block .footer-block-location .location-row {\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n    #footer-block-location .row-block .col-block .footer-block-location .info-location {\n      text-align: center; } }\n  @media only screen and (min-width: 769px) and (max-width: 1025px) {\n  #footer-block-location {\n    margin: 20px 0 20px 13%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.ts ***!
  \**********************************************************************/
/*! exports provided: FooterBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlockComponent", function() { return FooterBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterBlockComponent = /** @class */ (function () {
    function FooterBlockComponent(router, _http, service) {
        this.router = router;
        this._http = _http;
        this.service = service;
        this.dataUbicaciones = [];
    }
    FooterBlockComponent.prototype.ngOnInit = function () {
        this.getFooterBlockItems();
    };
    FooterBlockComponent.prototype.getFooterBlockItems = function () {
        var _this = this;
        this.service.getCustomCardInformation('locationcard').subscribe(function (params) {
            _this.title = params.header[0].data.title;
            _this.dataUbicaciones = params.data;
        });
    };
    FooterBlockComponent.prototype.cargarMapaUbicaciones = function () {
        var x = document.querySelector('#title-description');
        if (x) {
            x.scrollIntoView();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FooterBlockComponent.prototype, "idBlock", void 0);
    FooterBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-block',
            template: __webpack_require__(/*! ./footer-block.html */ "./src/app/cards/components/footer/footer-block/footer-block.html"),
            styles: [__webpack_require__(/*! ./footer-block.scss */ "./src/app/cards/components/footer/footer-block/footer-block.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_3__["CustomCardService"]])
    ], FooterBlockComponent);
    return FooterBlockComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/footer/footer-brand/footer-brand.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-brand/footer-brand.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <section id=\"footer-block-brand\">\n    <div class=\"row row-brand-footer\">\n      <div class=\"col-12 col-brand-footer\">\n        <img class=\"img-brand-footer\" *ngIf=\"imageLogo\" [src]=\"imageLogo.url\" alt=\"BitsAmericas\">\n        <h6 class=\"title-brand\">{{ nameBrand.title }}</h6>\n      </div>\n    </div>\n  </section>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-brand/footer-brand.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-brand/footer-brand.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block-brand {\n  margin: 20px 0; }\n  #footer-block-brand .row-brand-footer {\n    margin: 0;\n    padding: 0; }\n  #footer-block-brand .row-brand-footer .col-brand-footer {\n      margin: 0;\n      padding: 0; }\n  #footer-block-brand .row-brand-footer .col-brand-footer .img-brand-footer {\n        width: 135px; }\n  #footer-block-brand .row-brand-footer .col-brand-footer .title-brand {\n        margin-top: 10px;\n        color: rgba(255, 255, 255, 0.7);\n        font-family: Open Sans Light;\n        font-size: 11px; }\n  @media only screen and (max-width: 769px) {\n  #footer-block-brand {\n    text-align: center; }\n    #footer-block-brand .row-brand-footer .col-brand-footer .img-brand-footer {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-brand/footer-brand.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-brand/footer-brand.component.ts ***!
  \********************************************************************************/
/*! exports provided: FooterBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBrandComponent", function() { return FooterBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-brand',
            template: __webpack_require__(/*! ./footer-brand.component.html */ "./src/app/cards/components/footer/footer-brand/footer-brand.component.html"),
            styles: [__webpack_require__(/*! ./footer-brand.component.scss */ "./src/app/cards/components/footer/footer-brand/footer-brand.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], FooterBrandComponent);
    return FooterBrandComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/footer/footer-contact/footer-contact.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-contact/footer-contact.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <section id=\"footer-block-contact\">\n    <div class=\"row row-contact-block-footer\">\n      <div class=\"col-lg-12 col-contact-footer\">\n        <div class=\"container-info-contact\">\n            <h6 class=\"title-contact\">{{ contactTitle.title }}</h6>\n            <div class=\"other-contact-info\">\n              <li class=\"li-contact-footer-mail\">\n                <a class=\"link-mail\" href=\"{{ contactMailLink.link }}\">\n                  <i class=\"fas fa-envelope\"></i> \n                  <p>{{ contactMailLink.label }}</p>\n                </a>\n              </li>\n              <li class=\"li-contact-footer-icons\" *ngFor=\"let socialIcon of contactSocialArray;\">\n                <a class=\"link-icons\" href=\"{{ socialIcon.data.url }}\">\n                  <i class=\"{{ socialIcon.data.text }} size-of-icons\"></i>\n                </a> \n              </li>\n            </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-contact/footer-contact.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-contact/footer-contact.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block-contact {\n  margin: 20px 0 0 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.3); }\n  #footer-block-contact .row-contact-block-footer {\n    margin: 0;\n    padding: 0; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer {\n      margin: 0;\n      padding: 0; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .title-contact {\n        color: white;\n        font-family: Open Sans;\n        font-size: 12px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-mail {\n        list-style: none; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-mail .link-mail {\n          display: inline-flex;\n          color: rgba(255, 255, 255, 0.7);\n          font-family: Open Sans Light;\n          font-size: 11px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-mail .link-mail:hover {\n            color: #a6cf24;\n            text-decoration: none; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-mail .link-mail .fas.fa-envelope {\n            padding-right: 10px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons {\n        display: inline-block;\n        padding-top: 5px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons {\n          padding: 10px 0;\n          color: rgba(255, 255, 255, 0.7); }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons:hover {\n            color: #a6cf24;\n            text-decoration: none; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons {\n            padding: 0 17px;\n            font-size: 25px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons:first-child {\n              padding: 0 17px 0 0; }\n  @media only screen and (max-width: 769px) {\n  #footer-block-contact {\n    margin: 30px 0 30px 0;\n    padding-left: 0;\n    border-right: 0;\n    text-align: center; }\n    #footer-block-contact .row-contact-block-footer {\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n      #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons {\n        font-size: 18px; }\n        #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons:first-child {\n          padding: 0 15px; } }\n  @media only screen and (min-width: 769px) and (max-width: 1025px) {\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-mail .link-mail .fas.fa-envelope {\n    padding-right: 5px; }\n  #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons {\n    font-size: 25px;\n    padding: 0 12px; }\n    #footer-block-contact .row-contact-block-footer .col-contact-footer .container-info-contact .other-contact-info .li-contact-footer-icons .link-icons .size-of-icons:first-child {\n      padding: 0 12px 0 0; } }\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-contact/footer-contact.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-contact/footer-contact.component.ts ***!
  \************************************************************************************/
/*! exports provided: FooterContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContactComponent", function() { return FooterContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-contact',
            template: __webpack_require__(/*! ./footer-contact.component.html */ "./src/app/cards/components/footer/footer-contact/footer-contact.component.html"),
            styles: [__webpack_require__(/*! ./footer-contact.component.scss */ "./src/app/cards/components/footer/footer-contact/footer-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], FooterContactComponent);
    return FooterContactComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <section id=\"footer-block-newsletter\">\n    <div class=\"newsletter-info\">\n      <h6 *ngIf=\"footerData.title\">{{ footerData.title | uppercase }}</h6>\n      <p [innerHTML]=\"footerData.subtitle\"></p>\n      <button data-toggle=\"modal\" data-target=\"#newsletterModal\">\n        {{ footerData.button}}\n        <i class=\"fas fa-paper-plane\"></i>\n      </button>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"newsletterModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{ titleNewsletter }}</h5>\n              <p class=\"description-modal\">{{ descriptionNewsletter }}</p>\n              <button type=\"button\" class=\"close button-modal\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form action=\"\">\n                <div class=\"col-md-12 item\">\n                  <label class=\"label-modal\" for=\"exampleInputNombre-nw\">{{ nameInput }}*</label>\n                  <input class=\"input-modal\" type=\"text\" id=\"nombree\" placeholder=\"{{ nameInputPlaceholder }}\" name=\"nombre\">\n                  <div *ngIf=\"false\" class=\"alert alert-danger\" role=\"alert\">\n                    Campo obligatorio o invalido\n                  </div>\n                </div>\n                <div class=\"col-md-12 item\">\n                  <label class=\"label-modal\" for=\"exampleInputNombr-nw\">{{ lastNameInput }}</label>\n                  <input class=\"input-modal\" type=\"text\" id=\"apellido\" placeholder=\"{{ lastNameInputPlaceholder }}\"\n                    name=\"apellido\">\n                  <div *ngIf=\"false\" class=\"alert alert-danger\" role=\"alert\">\n                    Campo obligatorio o invalido\n                  </div>\n                </div>\n                <div class=\"col-md-12 item\">\n                  <label class=\"label-modal\" for=\"exampleInputEmail1-nw\">{{ emailInput }}*</label>\n                  <input class=\"input-modal\" type=\"email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                    placeholder=\"{{ emailInputPlaceholder }}\" name=\"correo_electronicoo\" pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\n                  <div *ngIf=\"false\" class=\"alert alert-danger\" role=\"alert\">\n                    Campo obligatorio o invalido\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"form-group\" class=\"terminos_grupo\">\n                <input class=\"check-modal-terms\" type=\"checkbox\" checked=\"checked\" id=\"terms-of-service\" name=\"terms_of_service\"\n                  value=\"false\" required>\n                <label class=\"label-modal-terms\" for=\"terms-of-service-nw\">He leído y acepto los <a class=\"link-modal-terms\"\n                    role=\"button\" href=\"{{ linkTerms }}\">{{ labelTerms }}</a></label>\n                <a data-trigger=\"focus\" role=\"button\" data-toggle=\"popover\" data-placement=\"top\" href=\"#\">\n                  <i class=\"fas fa-info-circle icon-tooltip\"></i>\n                </a>                \n              </div>\n            </div>\n            <button type=\"button\" class=\"save-modal-button\">{{ buttonSendNewsletter }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </section>\n</ng-container>\n<div id='popover-title'>{{titleTermsTooltip}}</div>\n<div id='popover-content' [innerHTML]='bodyTermsTooltip'></div>"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#footer-block-newsletter {\n  margin: 20px 0 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.3); }\n#footer-block-newsletter .newsletter-info h6 {\n    color: white;\n    font-family: Open Sans;\n    font-size: 12px; }\n#footer-block-newsletter .newsletter-info p {\n    color: rgba(255, 255, 255, 0.7);\n    font-family: Open Sans Light;\n    font-size: 11px; }\n#footer-block-newsletter .newsletter-info button {\n    cursor: pointer;\n    margin: 8px 0 0 0;\n    width: 160px;\n    height: 34px;\n    text-align: left;\n    color: white;\n    font-family: Open Sans Light;\n    font-size: 11px;\n    background: rgba(255, 255, 255, 0.2);\n    border: none; }\n#footer-block-newsletter .newsletter-info button .fa-paper-plane {\n      padding-left: 60px; }\n#footer-block-newsletter .newsletter-info button:hover {\n      background: rgba(255, 255, 255, 0.5); }\n#footer-block-newsletter .modal .modal-content {\n    border: 2px solid #a6cf24;\n    width: auto;\n    height: auto; }\n#footer-block-newsletter .modal .modal-content .modal-header {\n      position: relative;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 67px 35px 40px 35px;\n      border: none; }\n@media (max-width: 768px) {\n        #footer-block-newsletter .modal .modal-content .modal-header {\n          padding: 67px 35px 14px 35px; } }\n#footer-block-newsletter .modal .modal-content .modal-header .modal-title {\n        color: #022944;\n        font-family: Open Sans light;\n        font-size: 29px;\n        margin-bottom: 15px;\n        text-align: center; }\n@media (max-width: 768px) {\n          #footer-block-newsletter .modal .modal-content .modal-header .modal-title {\n            font-size: 25px; } }\n#footer-block-newsletter .modal .modal-content .modal-header .description-modal {\n        color: #022944;\n        font-family: Open Sans light;\n        font-size: 16px;\n        text-align: center;\n        padding: 0 20px; }\n@media (max-width: 768px) {\n          #footer-block-newsletter .modal .modal-content .modal-header .description-modal {\n            font-size: 10px; } }\n#footer-block-newsletter .modal .modal-content .modal-header .button-modal {\n        width: auto;\n        height: auto;\n        position: absolute;\n        top: 0;\n        right: 10px;\n        color: #a6cf24; }\n#footer-block-newsletter .modal .modal-content .modal-header .button-modal span {\n          font-size: 40px; }\n#footer-block-newsletter .modal .modal-content .modal-body {\n      border: none; }\n#footer-block-newsletter .modal .modal-content .modal-body form .item {\n        margin-bottom: 25px; }\n#footer-block-newsletter .modal .modal-content .modal-body form .label-modal {\n        font-family: Open Sans Codensed;\n        font-size: 18px;\n        color: #a6cf24;\n        display: block;\n        margin-bottom: 10px;\n        text-align: left; }\n@media (max-width: 768px) {\n          #footer-block-newsletter .modal .modal-content .modal-body form .label-modal {\n            font-size: 15px; } }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal {\n        border-top: none;\n        border-right: none;\n        border-left: none;\n        display: block;\n        width: 100%;\n        font-family: Open Sans light; }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal::-webkit-input-placeholder {\n          color: #93a4aa; }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal:-ms-input-placeholder {\n          color: #93a4aa; }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal::-ms-input-placeholder {\n          color: #93a4aa; }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal::placeholder {\n          color: #93a4aa; }\n#footer-block-newsletter .modal .modal-content .modal-body form .input-modal:focus {\n          outline: none; }\n@media (max-width: 768px) {\n          #footer-block-newsletter .modal .modal-content .modal-body form .input-modal {\n            font-size: 15px; } }\n#footer-block-newsletter .modal .modal-content .modal-footer {\n      border: none;\n      flex-direction: column;\n      justify-content: center;\n      padding: 1.5rem; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo {\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #93a4aa;\n        /* OFF */\n        /* ON */ }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo .check-modal-terms {\n          background: transparent;\n          border: 1px solid #a6cf24; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] {\n          position: absolute;\n          left: -9999px; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] + label:after {\n          content: '';\n          position: absolute; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] + label.label-modal-terms {\n          font-family: Open Sans light;\n          font-size: 17px;\n          display: block;\n          position: relative;\n          padding-left: 26px;\n          cursor: pointer;\n          line-height: 36px;\n          color: rgba(0, 43, 73, 0.8);\n          transition: color .3s; }\n@media (max-width: 768px) {\n            #footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] + label.label-modal-terms {\n              font-size: 10px; } }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] + label a.link-modal-terms {\n          text-decoration: none;\n          color: #a6cf24; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"] + label:after {\n          width: 30px;\n          height: 30px;\n          transition: all .2s;\n          top: 0;\n          left: 0; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n          background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo [type=\"checkbox\"]:checked + label:after {\n          background: url(\"/assets/images/check2.png\") left center no-repeat; }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo .tooltip-modal {\n          width: 440px;\n          height: 400px;\n          padding: 50px 20px 20px 20px;\n          border-radius: 5px;\n          box-shadow: 2px 2px 10px 2px #888888;\n          background: white;\n          position: absolute;\n          bottom: 110px;\n          color: #002b49;\n          overflow: scroll; }\n@media (max-width: 768px) {\n            #footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo .tooltip-modal {\n              width: auto;\n              height: 400px;\n              right: 20px;\n              left: 20px; } }\n#footer-block-newsletter .modal .modal-content .modal-footer .terminos_grupo .tooltip-modal::after {\n            content: 'AUTORIZACIÓN ONLINE';\n            text-align: center;\n            font-size: 12px;\n            width: 100%;\n            height: 30px;\n            background-color: #e5e9ec;\n            position: absolute;\n            top: 0;\n            left: 0;\n            padding-top: 5px; }\n#footer-block-newsletter .modal .modal-content .modal-footer .save-modal-button {\n        background: #a6cf24;\n        color: white;\n        text-align: center;\n        width: 99px;\n        height: 40px;\n        font-size: 17px; }\n@media (max-width: 768px) {\n          #footer-block-newsletter .modal .modal-content .modal-footer .save-modal-button {\n            width: 89px;\n            height: 30px;\n            font-size: 10px; } }\n#footer-block-newsletter .modal .modal-content .modal-footer .fa-info-circle {\n        margin: 0px 5px 8px 8px;\n        color: #93a4aa; }\n@media only screen and (max-width: 769px) {\n  #footer-block-newsletter {\n    margin: 30px 0 30px 0;\n    text-align: center;\n    border-right: 0px; } }\n@media only screen and (min-width: 769px) and (max-width: 1025px) {\n  #footer-block-newsletter .newsletter-info button {\n    width: 120px;\n    height: 25px;\n    margin: 3px 0 0 0; }\n    #footer-block-newsletter .newsletter-info button .fa-paper-plane {\n      padding-left: 30px; } }\n:host /deep/ .tooltip {\n  -webkit-transform: translate3d(8px, 130px, 0px) !important;\n          transform: translate3d(8px, 130px, 0px) !important; }\n:host /deep/ .tooltip-inner {\n  background: #e4e4e4;\n  max-width: 496px;\n  width: 480px;\n  min-height: 400px;\n  height: 400px;\n  overflow: scroll; }\n:host /deep/ .arrow {\n  display: none; }\n:host /deep/ .tooltip-modal h3 {\n  font-family: Open Sans Codensed;\n  font-size: 18px;\n  text-align: justify; }\n:host /deep/ .tooltip-modal h4 {\n  font-family: Open Sans Codensed;\n  font-size: 20px;\n  text-align: justify; }\n:host /deep/ .tooltip-modal p {\n  font-family: Open Sans Codensed;\n  font-size: 12px;\n  text-align: justify; }\n#popover-title,\n#popover-content {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FooterNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNewsletterComponent", function() { return FooterNewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterNewsletterComponent = /** @class */ (function () {
    function FooterNewsletterComponent(_cardService, newsletter) {
        this._cardService = _cardService;
        this.newsletter = newsletter;
        this.footerData = {
            title: '',
            subtitle: '',
            button: ''
        };
    }
    FooterNewsletterComponent.prototype.ngOnInit = function () {
        this.getPopoverService();
        $(function () {
            $('[data-toggle="popover"]').popover({
                html: true,
                title: function () {
                    return $('#popover-title').html();
                },
                content: function () {
                    return document.getElementById('popover-content').innerHTML;
                }
            }).click(function (e) {
                e.preventDefault();
            });
        });
        this.getIndicatorsSliderItems();
        this.getModalCard();
    };
    FooterNewsletterComponent.prototype.getIndicatorsSliderItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('newslettercard_2').subscribe(function (items) {
            var title, subtitle, button;
            for (var _i = 0, _a = items.header; _i < _a.length; _i++) {
                var attr = _a[_i];
                var obj = attr.data;
                if (obj['title']) {
                    title = obj.title;
                }
                else if (obj['subtitle'])
                    subtitle = obj.subtitle;
            }
            for (var _b = 0, _c = items.body; _b < _c.length; _b++) {
                var attr = _c[_b];
                var obj = attr.data;
                if (obj['button']) {
                    button = obj.button;
                }
            }
            _this.footerData = {
                title: title,
                subtitle: subtitle,
                button: button,
            };
        });
    };
    FooterNewsletterComponent.prototype.getModalCard = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('newslettermodalcard').subscribe(function (items) {
            _this.titleNewsletter = items.header[0].data.title;
            _this.descriptionNewsletter = items.header[1].data.subtitle;
            for (var _i = 0, _a = items.body; _i < _a.length; _i++) {
                var attr = _a[_i];
                var obj = attr.data;
                if (obj['name']) {
                    _this.nameInput = obj.name;
                }
                else if (obj['name_description']) {
                    _this.nameInputPlaceholder = obj.name_description;
                }
                else if (obj['last_name']) {
                    _this.lastNameInput = obj.last_name;
                }
                else if (obj['last_name_description']) {
                    _this.lastNameInputPlaceholder = obj.last_name_description;
                }
                else if (obj['email']) {
                    _this.emailInput = obj.email;
                }
                else if (obj['email_description']) {
                    _this.emailInputPlaceholder = obj.email_description;
                }
                else if (obj['link']) {
                    _this.linkTerms = obj.link;
                }
                else if (obj['label']) {
                    _this.labelTerms = obj.label;
                }
                else if (obj['button']) {
                    _this.buttonSendNewsletter = obj.button;
                }
            }
        });
    };
    FooterNewsletterComponent.prototype.getPopoverService = function () {
        var _this = this;
        this.newsletter.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(function (params) {
            _this.titleTermsTooltip = params.title;
            _this.bodyTermsTooltip = params.body;
        });
    };
    FooterNewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-newsletter',
            template: __webpack_require__(/*! ./footer-newsletter.component.html */ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.html"),
            styles: [__webpack_require__(/*! ./footer-newsletter.component.scss */ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], FooterNewsletterComponent);
    return FooterNewsletterComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/generator-of-links/generator-of-links.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/cards/components/generator-of-links/generator-of-links.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{ url }}\">{{ title }}</a>\n\n"

/***/ }),

/***/ "./src/app/cards/components/generator-of-links/generator-of-links.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/cards/components/generator-of-links/generator-of-links.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  position: relative;\n  color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/cards/components/generator-of-links/generator-of-links.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/generator-of-links/generator-of-links.component.ts ***!
  \*************************************************************************************/
/*! exports provided: GeneratorOfLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorOfLinksComponent", function() { return GeneratorOfLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorOfLinksComponent = /** @class */ (function () {
    function GeneratorOfLinksComponent(router, generatoroflinks) {
        this.router = router;
        this.generatoroflinks = generatoroflinks;
        this.title = '';
        this.url = '';
    }
    GeneratorOfLinksComponent.prototype.ngOnInit = function () {
        this.getGeneratorOfLinks();
    };
    GeneratorOfLinksComponent.prototype.getGeneratorOfLinks = function () {
        var _this = this;
        this.generatoroflinks.getCustomCardInformation('generatoroflinks').subscribe(function (items) {
            _this.title = items.body[0].data.label;
            _this.url = items.body[0].data.link;
        });
    };
    GeneratorOfLinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generator-link',
            template: __webpack_require__(/*! ./generator-of-links.component.html */ "./src/app/cards/components/generator-of-links/generator-of-links.component.html"),
            styles: [__webpack_require__(/*! ./generator-of-links.component.scss */ "./src/app/cards/components/generator-of-links/generator-of-links.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], GeneratorOfLinksComponent);
    return GeneratorOfLinksComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/history/history.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cards/components/history/history.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline\"></div>\n"

/***/ }),

/***/ "./src/app/cards/components/history/history.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cards/components/history/history.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#timeline {\n  height: 30%;\n  width: 80%;\n  margin: auto; }\n  #timeline #tl-aucnud {\n    height: 341px; }\n  #timeline .tl-timenav {\n    height: 165px; }\n  #timeline .tl-storyslider {\n    height: 588px; }\n"

/***/ }),

/***/ "./src/app/cards/components/history/history.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/history/history.component.ts ***!
  \***************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var dataObject = {
            'title': {
                'media': {
                    'url': '//www.flickr.com/photos/tm_10001/2310475988/',
                    'caption': 'Whitney Houston performing on her My Love is Your Love Tour in Hamburg.',
                    'credit': "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
                },
                'text': {
                    'headline': "Whitney Houston<br/> 1963 - 2012",
                    'text': "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
                }
            },
            'events': [
                {
                    'media': {
                        'url': "{{ static_url }}/img/examples/houston/family.jpg",
                        'caption': "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
                        'credit': "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
                    },
                    'start_date': {
                        'month': '8',
                        'day': '9',
                        'year': '1963'
                    },
                    'text': {
                        'headline': 'A Musical Heritage',
                        'text': "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
                    }
                },
                {
                    'media': {
                        'url': "https://youtu.be/5Fa09teeaqs",
                        'caption': "CNN looks back at Houston's iconic performance of the national anthem at Superbowl XXV.",
                        "credit": "CNN"
                    },
                    "start_date": {
                        "year": "1991"
                    },
                    "text": {
                        "headline": "Super Bowl",
                        "text": "Houston's national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War."
                    }
                },
                {
                    'media': {
                        'url': "https://youtu.be/h9rCobRl-ng",
                        'caption': "\"Run To You\" from the 1992 \"Bodyguard\" soundtrack..",
                        'credit': "Arista Records"
                    },
                    'start_date': {
                        'year': "1992"
                    },
                    'text': {
                        'headline': "\"The Bodyguard\"",
                        'text': "Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy's for the artist."
                    }
                }
            ]
        };
        var additionalOptions = {
            start_at_end: false,
            /* default_bg_color: {
              r: 0,
              g: 0,
              b: 0
            }, */
            timenav_height: 250
        };
        window.timeline = new TL.Timeline('timeline', dataObject, additionalOptions);
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/cards/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/cards/components/history/history.component.scss"), __webpack_require__(/*! ../../../../assets/timeline/css/timeline.css */ "./src/assets/timeline/css/timeline.css"), __webpack_require__(/*! ../../../../assets/timeline/css/fonts/font.default.css */ "./src/assets/timeline/css/fonts/font.default.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/knowus/knowus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/knowus/knowus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"kw-title\">\n  <h2>{{ title }}</h2>\n  <p [innerHTML]=\"subtitle\"></p>\n</section>\n\n<section class=\"Knowus\">\n  <div class=\"images-knowus\">\n    <ul class=\"row first images col-md-12\">\n      <li *ngFor=\"let kw of list; let i = index\" class=\"col-md-4\">\n        <div class=\"col-md-12\">\n          <img [src]=\"kw.field_imagen.url\" [alt]=\"kw.field_imagen.alt\" class=\"col-md-6\" />\n          <label class=\"col-md-6\">\n            <span class=\"plus\">+</span> <span>{{ kw.field_cantidad }}</span>\n            <p>{{ kw.title }}</p>\n          </label>\n        </div>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/knowus/knowus.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/knowus/knowus.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#kw-title h2 {\n  margin-left: 3%;\n  font-size: 40px;\n  text-transform: uppercase;\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (max-width: 667px) {\n    #kw-title h2 {\n      font-size: 30px;\n      margin-left: 0; } }\n  #kw-title p {\n  color: #002b49cc;\n  font-family: Open Sans Codensed;\n  margin-right: 180px;\n  margin-left: 200px;\n  margin-top: 10px;\n  font-size: 20px;\n  text-align: center; }\n  @media (min-width: 1025px) {\n    #kw-title p {\n      margin-right: 0;\n      margin-left: 0; } }\n  @media (max-width: 667px) {\n    #kw-title p {\n      margin-right: 20px;\n      margin-left: 0; } }\n  .Knowus {\n  width: 90%;\n  margin-top: 20px; }\n  @media (max-width: 667px) {\n    .Knowus ul {\n      padding: 0; } }\n  .Knowus .images-knowus .images {\n    margin-left: 0;\n    margin-right: 0; }\n  @media (min-width: 1025px) {\n      .Knowus .images-knowus .images {\n        margin-left: 9%; } }\n  .Knowus .images-knowus .images li {\n      list-style: none;\n      margin-top: 17px; }\n  @media (max-width: 667px) {\n        .Knowus .images-knowus .images li {\n          margin-bottom: 35px; } }\n  .Knowus .images-knowus .images li img {\n        width: 50%;\n        float: left; }\n  @media (min-width: 1025px) {\n          .Knowus .images-knowus .images li img {\n            position: relative; } }\n  @media (max-width: 667px) {\n          .Knowus .images-knowus .images li img {\n            width: 50%;\n            position: relative; } }\n  .Knowus .images-knowus .images li label {\n        font-family: 'Open Sans light';\n        color: #002b49;\n        font-weight: 700;\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n        text-align: left; }\n  .Knowus .images-knowus .images li label span.plus {\n          color: #a6cf24;\n          font-size: 40px; }\n  .Knowus .images-knowus .images li label span {\n          font-size: 40px; }\n  @media (max-width: 667px) {\n            .Knowus .images-knowus .images li label span {\n              font-size: 30px; } }\n  .Knowus .images-knowus .images li label p {\n          font-weight: 300; }\n  @media (min-width: 1025px) {\n          .Knowus .images-knowus .images li label {\n            position: absolute; } }\n  @media (max-width: 667px) {\n          .Knowus .images-knowus .images li label {\n            position: absolute;\n            width: 70%;\n            top: -20px; } }\n"

/***/ }),

/***/ "./src/app/cards/components/knowus/knowus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/knowus/knowus.component.ts ***!
  \*************************************************************/
/*! exports provided: KnowusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowusComponent", function() { return KnowusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnowusComponent = /** @class */ (function () {
    function KnowusComponent(_service) {
        this._service = _service;
        this.list = [];
    }
    KnowusComponent.prototype.ngOnInit = function () {
        this.getKnowusData();
    };
    KnowusComponent.prototype.getKnowusData = function () {
        var _this = this;
        this._service.getCustomCardInformation('knowusbitsamericas').subscribe(function (items) {
            _this.title = items.header[0].data.title;
            _this.subtitle = items.header[1].data.sub_title;
            _this.list = items.data;
        });
    };
    KnowusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-knowus',
            template: __webpack_require__(/*! ./knowus.component.html */ "./src/app/cards/components/knowus/knowus.component.html"),
            styles: [__webpack_require__(/*! ./knowus.component.scss */ "./src/app/cards/components/knowus/knowus.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], KnowusComponent);
    return KnowusComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/menu-template/menu-template.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/menu-template/menu-template.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center mb-3\">\n    <li class=\"nav-item\" *ngFor=\"let menuItem of menuList\">        \n        <div class=\"nav-link\" (click)=\"ubicaciones(menuItem.id)\">\n            {{ menuItem.label }}\n        </div>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/cards/components/menu-template/menu-template.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/menu-template/menu-template.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.nav-item {\n  border-right: 1px solid #a6cf24; }\n  li.nav-item:last-child {\n    border-right: none; }\n  li.nav-item .nav-link {\n    text-transform: uppercase;\n    cursor: pointer;\n    font-family: 'Open Sans light';\n    color: #002b49;\n    transition: 0.3s all;\n    -webkit-transition: 0.3s all;\n    -moz-transition: 0.3s all;\n    -o-transition: 0.3s all; }\n  li.nav-item .nav-link:hover {\n      font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/cards/components/menu-template/menu-template.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/menu-template/menu-template.component.ts ***!
  \***************************************************************************/
/*! exports provided: MenuTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTemplateComponent", function() { return MenuTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuTemplateComponent = /** @class */ (function () {
    function MenuTemplateComponent(router, service, _http) {
        this.router = router;
        this.service = service;
        this._http = _http;
    }
    MenuTemplateComponent.prototype.ngOnInit = function () {
        // this.getMenuTemplateService();
    };
    MenuTemplateComponent.prototype.getMenuTemplateService = function () {
        var _this = this;
        this._http.getCustomCardInformation('menu-template').subscribe(function (params) {
            _this.menuList = params.data[0].menu;
        });
    };
    MenuTemplateComponent.prototype.ubicaciones = function (id) {
        var x = document.querySelector('#' + id);
        console.log(x);
        if (x) {
            x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MenuTemplateComponent.prototype, "menuList", void 0);
    MenuTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-template',
            template: __webpack_require__(/*! ./menu-template.component.html */ "./src/app/cards/components/menu-template/menu-template.component.html"),
            styles: [__webpack_require__(/*! ./menu-template.component.scss */ "./src/app/cards/components/menu-template/menu-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], MenuTemplateComponent);
    return MenuTemplateComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/message/message.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cards/components/message/message.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"dataMessage.length > 0\">\n  <li *ngFor=\"let data of dataMessage\">\n    <div *ngIf=\"data.visible == true\" ngClass={{data.status}}>\n      <i ngClass={{data.status}}></i>\n      <p>{{ data.message}}</p>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/cards/components/message/message.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cards/components/message/message.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 25px;\n  margin-bottom: 0; }\n  ul li {\n    list-style: none;\n    margin-top: 5px;\n    margin-bottom: 5px; }\n  ul li .error {\n      background-color: #efcfd2;\n      color: #721c24;\n      padding: 5px; }\n  ul li .success {\n      background-color: #e7efcd;\n      padding: 10px;\n      color: #002b49;\n      padding-left: 20px; }\n  ul li i.error {\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg width%3D%226.6477mm%22 height%3D%2213.295mm%22 version%3D%221.1%22 viewBox%3D%220 0 6.6477 13.295%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22 xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22 xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E %3Cmetadata%3E  %3Crdf%3ARDF%3E   %3Ccc%3AWork rdf%3Aabout%3D%22%22%3E    %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E    %3Cdc%3Atype rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E    %3Cdc%3Atitle%2F%3E   %3C%2Fcc%3AWork%3E  %3C%2Frdf%3ARDF%3E %3C%2Fmetadata%3E %3Cg transform%3D%22translate(168.12 -65.379)%22%3E  %3Ccircle transform%3D%22rotate(-45)%22 cx%3D%22-165.11%22 cy%3D%22-67.95%22 r%3D%223.3238%22 fill%3D%22%23b2dd54%22%2F%3E  %3Cpath d%3D%22m-163.13 67.355-2.157 2.1574-1.005-1.0062-0.456 0.4564 1.005 1.0057 0.456 0.4556 0.456-0.4556 2.157-2.1572z%22 fill%3D%22%23fff%22%2F%3E  %3Ccircle transform%3D%22rotate(-45)%22 cx%3D%22-169.81%22 cy%3D%22-63.249%22 r%3D%223.3238%22 fill%3D%22%23dd5454%22%2F%3E  %3Cpath d%3D%22m-163.72 73.814-1.0784 1.0784-1.0769-1.0771-0.45587 0.45588 1.0768 1.0769-1.0784 1.079 0.45588 0.45588 1.079-1.0784 1.0795 1.0795 0.45587-0.45588-1.0795-1.0795 1.0784-1.0784z%22 fill%3D%22%23fff%22%2F%3E %3C%2Fg%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      width: 30px;\n      height: 30px;\n      display: inline-block;\n      background-position-y: -30px;\n      position: absolute; }\n  ul li i.success {\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!-- Created with Inkscape (http%3A%2F%2Fwww.inkscape.org%2F) --%3E%3Csvg width%3D%226.6477mm%22 height%3D%2213.295mm%22 version%3D%221.1%22 viewBox%3D%220 0 6.6477 13.295%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22 xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22 xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E %3Cmetadata%3E  %3Crdf%3ARDF%3E   %3Ccc%3AWork rdf%3Aabout%3D%22%22%3E    %3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E    %3Cdc%3Atype rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E    %3Cdc%3Atitle%2F%3E   %3C%2Fcc%3AWork%3E  %3C%2Frdf%3ARDF%3E %3C%2Fmetadata%3E %3Cg transform%3D%22translate(168.12 -65.379)%22%3E  %3Ccircle transform%3D%22rotate(-45)%22 cx%3D%22-165.11%22 cy%3D%22-67.95%22 r%3D%223.3238%22 fill%3D%22%23b2dd54%22%2F%3E  %3Cpath d%3D%22m-163.13 67.355-2.157 2.1574-1.005-1.0062-0.456 0.4564 1.005 1.0057 0.456 0.4556 0.456-0.4556 2.157-2.1572z%22 fill%3D%22%23fff%22%2F%3E  %3Ccircle transform%3D%22rotate(-45)%22 cx%3D%22-169.81%22 cy%3D%22-63.249%22 r%3D%223.3238%22 fill%3D%22%23dd5454%22%2F%3E  %3Cpath d%3D%22m-163.72 73.814-1.0784 1.0784-1.0769-1.0771-0.45587 0.45588 1.0768 1.0769-1.0784 1.079 0.45588 0.45588 1.079-1.0784 1.0795 1.0795 0.45587-0.45588-1.0795-1.0795 1.0784-1.0784z%22 fill%3D%22%23fff%22%2F%3E %3C%2Fg%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      width: 30px;\n      height: 30px;\n      display: inline-block;\n      position: absolute; }\n  ul li p {\n      display: inline-block;\n      margin-left: 40px;\n      margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/cards/components/message/message.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/message/message.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.dataMessage = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MessageComponent.prototype, "dataMessage", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/cards/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/cards/components/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/porque-bits/porque-bits.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/porque-bits/porque-bits.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h2>{{ mainTitleLink?.title }}</h2>\n</section>\n\n<section class=\"WhyBits\">\n    <div class=\"images-whybits\">\n        <ul class=\"row first images\">\n            <li *ngFor=\"let mv of moralValues; let i = index\">\n                <a [routerLink]=\"'home'\">\n                    <img [src]=\"mv.field_imagen.url\" [alt]=\"mv.field_imagen.alt\" />\n                    <p>{{ mv.title }}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/porque-bits/porque-bits.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/porque-bits/porque-bits.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".WhyBits {\n  position: relative;\n  width: 100%;\n  margin-top: 39px; }\n  @media (min-width: 1025px) {\n    .WhyBits {\n      width: 98%; } }\n  .WhyBits .images-whybits .images {\n    -webkit-padding-start: 0;\n    justify-content: center;\n    margin-left: 0;\n    margin-right: 0; }\n  @media (min-width: 1025px) {\n      .WhyBits .images-whybits .images {\n        margin-left: 9%; } }\n  .WhyBits .images-whybits .images li {\n      list-style: none;\n      margin-top: 17px;\n      text-align: center; }\n  @media (min-width: 1025px) {\n        .WhyBits .images-whybits .images li {\n          margin-right: 5%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .WhyBits .images-whybits .images li {\n          margin-right: 1%; } }\n  .WhyBits .images-whybits .images li p {\n        font-family: 'Open Sans Codensed';\n        font-weight: 300;\n        font-size: 20px;\n        width: 133px;\n        margin-top: 16px; }\n  @media (min-width: 1025px) {\n          .WhyBits .images-whybits .images li p {\n            font-size: 24px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          .WhyBits .images-whybits .images li p {\n            font-size: 21px;\n            width: 126px; } }\n  .WhyBits .images-whybits .images li a {\n        text-decoration: none;\n        color: #002b49; }\n  .WhyBits .images-whybits .images li a:hover {\n        color: #a6cf24; }\n  .WhyBits .images-whybits .images li:nth-child(6) {\n      display: none; }\n  .WhyBits .images-whybits .images li:nth-child(7) {\n      display: none; }\n  #main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n  #main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n  @media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  #titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n  @media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n  #titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n  @media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/porque-bits/porque-bits.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cards/components/porque-bits/porque-bits.component.ts ***!
  \***********************************************************************/
/*! exports provided: PorqueBitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorqueBitsComponent", function() { return PorqueBitsComponent; });
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-porque-bits',
            template: __webpack_require__(/*! ./porque-bits.component.html */ "./src/app/cards/components/porque-bits/porque-bits.component.html"),
            styles: [__webpack_require__(/*! ./porque-bits.component.scss */ "./src/app/cards/components/porque-bits/porque-bits.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"]])
    ], PorqueBitsComponent);
    return PorqueBitsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/product-services/product-services.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/product-services/product-services.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"title-gallery\">\n    <div class=\"title\">\n        <h1> {{ title }} </h1>\n    </div>\n</section>\n<section id=\"gallery-images\">\n    <div class=\"tz-gallery\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4\" *ngFor=\"let ps of servicesProduct\">\n                <div class=\"thumbnai\">\n                    <div class=\"background\">\n                        <img class=\"images lightbox\" [src]=\"ps.short_image[0].url\" alt=\"{{ps.short_image[0].alt}}\">\n                    </div>\n                    <div class=\"box-title\">\n                        <span class=\"titlepr\">{{ ps.label }}</span>\n                        <div class=\"box-text\">\n                            <span class=\"text\" [innerHTML]=\"ps.description\"></span>\n                        </div>\n                    </div>\n                    <div class=\"box-info\">\n                        <div class=\"box-botton\">\n                            <a class=\"botton_products\" [routerLink]=\"[ps.type, ps.nid]\">Ver Mas</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section id=\"bottons-services\">\n    <div class=\"totalbottons\">\n        <div class=\"bottons\">\n            <a class=\"bottonleft\" [routerLink]=\"buttonL.link\">{{ buttonL.label }}</a>\n            <a class=\"bottonrigth\" [routerLink]=\"buttonR.link\">{{ buttonR.label }} </a>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/product-services/product-services.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/product-services/product-services.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-gallery {\n  margin-top: 14%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #title-gallery {\n      margin-top: 7%; } }\n  @media (min-width: 1025px) {\n    #title-gallery {\n      margin-top: 4%; } }\n  #title-gallery .title {\n    background: #f7f9f9;\n    height: 160px;\n    padding-top: 11%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #title-gallery .title {\n        padding-top: 7%; } }\n  @media (min-width: 1025px) {\n      #title-gallery .title {\n        height: 171px;\n        padding-top: 3.5%; } }\n  #title-gallery .title h1 {\n      width: 97%;\n      padding-left: 8%;\n      padding-right: 4%;\n      margin-bottom: 0%;\n      text-align: center;\n      text-transform: uppercase;\n      color: #002b49; }\n  @media (min-width: 1025px) {\n        #title-gallery .title h1 {\n          width: 100%;\n          padding-left: 0%;\n          padding-right: 0%; } }\n  #gallery-images {\n  height: 1116px;\n  overflow: hidden; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #gallery-images {\n      height: auto; } }\n  @media (min-width: 1025px) {\n    #gallery-images {\n      height: 906px; } }\n  #gallery-images .block-title {\n    height: 142px;\n    width: 100%;\n    background: #f7f9f9; }\n  @media (min-width: 1025px) {\n      #gallery-images .block-title {\n        height: 185px; } }\n  #gallery-images .block-title h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: 200;\n      font-size: 40px;\n      margin: 0%;\n      z-index: 100;\n      color: #002b49;\n      padding: 0%;\n      padding-top: 11%;\n      padding-top: 81px;\n      padding-bottom: 61px; }\n  @media (min-width: 1025px) {\n        #gallery-images .block-title h2 {\n          margin: initial;\n          padding-top: 81px; } }\n  #gallery-images .container {\n    width: 100%;\n    position: relative;\n    height: 690px;\n    padding-left: 0%;\n    padding-left: 0%; }\n  @media (min-width: 1025px) {\n      #gallery-images .container {\n        height: 895px;\n        padding: 0%; } }\n  #gallery-images .gallery-container h1 {\n    text-align: center;\n    margin-top: 70px;\n    font-weight: bold;\n    color: #58595a; }\n  #gallery-images .tz-gallery {\n    height: auto; }\n  #gallery-images .tz-gallery .row {\n      width: 100%;\n      height: 50%;\n      margin: 0%; }\n  #gallery-images .tz-gallery .row .col-md-4 {\n        height: 372px;\n        padding: 0%;\n        /*  @include breakpoint(phone) {\n                    &:nth-child(1n+4) {\n                        display: none;\n                    }\n                }*/ }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .row .col-md-4 {\n            height: 453px; } }\n  #gallery-images .tz-gallery .thumbnail:hover {\n    -webkit-transform: translateY(-10px) scale(1.02);\n            transform: translateY(-10px) scale(1.02); }\n  #gallery-images .tz-gallery .caption {\n    padding: 26px 30px;\n    text-align: center; }\n  #gallery-images .tz-gallery .caption h3 {\n    font-size: 14px;\n    font-weight: bold;\n    margin-top: 0; }\n  #gallery-images .tz-gallery .caption p {\n    font-size: 12px;\n    color: #7b7d7d;\n    margin: 0; }\n  #gallery-images .baguetteBox-button {\n    background-color: transparent; }\n  #gallery-images .tz-gallery .thumbnai {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    border: none;\n    overflow: hidden;\n    position: relative;\n    background-color: transparent;\n    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06); }\n  #gallery-images .tz-gallery .thumbnai .lightbox {\n      height: 100%;\n      width: 100%; }\n  #gallery-images .tz-gallery .thumbnai .background {\n      height: 100%;\n      display: flex; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .background {\n          background: rgba(0, 88, 146, 0.3); } }\n  #gallery-images .tz-gallery .thumbnai .background .images {\n        width: 100%;\n        height: 100%;\n        -webkit-filter: brightness(85%);\n                filter: brightness(85%);\n        width: 100%;\n        height: 100%;\n        z-index: -1; }\n  #gallery-images .tz-gallery .thumbnai .box-info {\n      height: 100%;\n      width: 100%;\n      background-color: rgba(0, 43, 73, 0.62);\n      position: absolute;\n      bottom: 0%;\n      padding-right: 14%;\n      padding-left: 14%; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-info {\n          transition: all ease 0.89s;\n          visibility: hidden;\n          top: 100%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        top: 77%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n            top: 81%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n          display: flex;\n          border: none;\n          padding-top: 2.5%;\n          padding-bottom: 2.5%;\n          text-transform: uppercase;\n          text-align: center;\n          color: #8ECE17;\n          text-decoration: none;\n          visibility: hidden;\n          font-family: 'Open Sans';\n          justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              left: 0%;\n              width: 100%;\n              padding-left: 19%;\n              margin-left: auto;\n              margin-right: auto;\n              justify-content: center; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n            content: '';\n            position: relative;\n            right: 9%;\n            width: 100%;\n            top: 0px;\n            margin-right: auto;\n            margin-left: auto;\n            padding-left: 27%;\n            padding-right: 27%;\n            padding-top: 29%;\n            background-image: url(\"/assets/icon/mas.svg\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: 35px;\n            visibility: visible; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                padding-left: 20%;\n                padding-right: 20%;\n                padding-top: 8%;\n                right: 31%; } }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              display: block;\n              width: 55%;\n              padding-left: 0%;\n              padding-right: 0%;\n              padding-top: 3.5%;\n              padding-bottom: 3.5%;\n              border: solid 1px #8ECE17;\n              border-radius: 3%;\n              color: #8ECE17;\n              font-size: 20px;\n              visibility: visible; }\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                content: '';\n                visibility: hidden;\n                padding-right: initial;\n                padding-left: initial; } }\n  #gallery-images .tz-gallery .thumbnai .box-title {\n      position: relative;\n      bottom: 92%;\n      padding-left: 9%;\n      padding-right: 9%;\n      text-align: center;\n      z-index: 10; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-title {\n          clear: both;\n          bottom: 62.5%;\n          padding-left: 25%;\n          padding-right: 25%;\n          transition: all ease 0.8s; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n        color: #ffffff;\n        position: relative;\n        top: 56%;\n        line-height: 46px;\n        font-weight: 300;\n        height: auto;\n        font-size: 31px;\n        font-family: 'Open Sans Codensed'; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n            font-size: 36px; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n        content: '';\n        position: relative;\n        display: block;\n        width: 100%;\n        height: 1.2px;\n        left: 0%;\n        bottom: -14px;\n        transition: all .3s ease-in-out;\n        -webkit-transform: scaleX(0.3);\n                transform: scaleX(0.3);\n        background: #8ECE17; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n            top: 134%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n        position: relative;\n        padding-top: 10%;\n        padding-left: 4%;\n        padding-right: 5%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n            top: 365px;\n            transition: all ease 1s;\n            width: 140%;\n            right: 20%;\n            padding: 10% 0%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n          display: block;\n          text-align: center;\n          height: auto;\n          color: #ffffff;\n          font-size: 15px;\n          font-family: 'Open Sans light'; }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n              font-size: 18px;\n              top: 26%;\n              height: auto;\n              line-height: 1.4; } }\n  @media (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-info {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%);\n      background: rgba(0, 43, 73, 0.62);\n      visibility: initial; }\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 86%;\n      z-index: 100; } }\n  @media (min-width: 1025px) and (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 93%; } }\n  @media (min-width: 1025px) {\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .box-text {\n        top: 14px;\n        -webkit-transform: translateY(-6%);\n                transform: translateY(-6%); }\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .titlepr:after {\n        transform: scaleX(0.8);\n        -webkit-transform: scaleX(0.8); } }\n  #bottons-services .totalbottons {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  background: #f7f9f9;\n  height: 141px; }\n  @media (min-width: 1025px) {\n    #bottons-services .totalbottons {\n      top: initial; } }\n  #bottons-services .totalbottons .bottons {\n    display: flex;\n    padding-top: 10%;\n    width: 91%;\n    justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #bottons-services .totalbottons .bottons {\n        padding-bottom: 0%;\n        padding-top: 6%; } }\n  @media (min-width: 1025px) {\n      #bottons-services .totalbottons .bottons {\n        padding-top: 40px;\n        padding-bottom: initial; } }\n  #bottons-services .totalbottons .bottons .bottonleft,\n    #bottons-services .totalbottons .bottons .bottonrigth {\n      display: flex;\n      width: 27%;\n      text-align: center;\n      border: solid 1px rgba(142, 206, 23, 0.7);\n      padding: 2% 1.5%;\n      position: relative;\n      text-decoration: none;\n      color: #ffffff;\n      background: rgba(142, 206, 23, 0.7);\n      font-size: 14px;\n      font-family: 'Open Sans';\n      text-transform: uppercase;\n      justify-content: center;\n      align-items: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          width: 14%;\n          padding-top: 1%;\n          padding-bottom: 1%; } }\n  @media (min-width: 1025px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          font-size: 18px;\n          width: 16%;\n          padding: 1%; } }\n  #bottons-services .totalbottons .bottons .bottonrigth {\n      left: 8%; }\n  #bottons-services .totalbottons .bottons .bottonleft:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n  #bottons-services .totalbottons .bottons .bottonrigth:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n"

/***/ }),

/***/ "./src/app/cards/components/product-services/product-services.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/product-services/product-services.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductServicesComponent", function() { return ProductServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductServicesComponent = /** @class */ (function () {
    function ProductServicesComponent(_cardService) {
        this._cardService = _cardService;
        this.servicesProduct = [];
        this.buttonL = {
            link: 'string',
            label: ''
        };
        this.buttonR = {
            link: '',
            label: ''
        };
    }
    ProductServicesComponent.prototype.ngOnInit = function () {
        this.getProductsAndServicesItems();
    };
    ProductServicesComponent.prototype.getProductsAndServicesItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('productsandservicescard_2').subscribe(function (items) {
            _this.servicesProduct = items.data;
            _this.title = items.header[0].data.title;
            for (var index = 0; index < _this.servicesProduct.length; index++) {
                _this.servicesProduct[index].type = '/' + _this.servicesProduct[index].type;
                while (_this.servicesProduct[index].nid.indexOf('_') > -1) {
                    _this.servicesProduct[index].nid = _this.servicesProduct[index].nid.replace('_', '-');
                }
            }
            _this.buttonL = items.body[0].data;
            _this.buttonR = items.body[1].data;
        });
    };
    ProductServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-services',
            template: __webpack_require__(/*! ./product-services.component.html */ "./src/app/cards/components/product-services/product-services.component.html"),
            styles: [__webpack_require__(/*! ./product-services.component.scss */ "./src/app/cards/components/product-services/product-services.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], ProductServicesComponent);
    return ProductServicesComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/separator/separator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/separator/separator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteiner-1\">\n    <div class=\"conteiner-2\">\n        <div class=\"div-left-side\"></div>\n        <div class=\"divIconSeparator\">                      \n            <i class=\"bits-icon {{iconCustom}}\" aria-hidden=\"true\"></i>            \n        </div>\n        <div class=\"div-right-side\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/separator/separator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/separator/separator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conteiner-1 {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 70px 65px 40px; }\n\n.conteiner-2 {\n  max-width: 900px;\n  position: relative;\n  margin: 0 auto; }\n\n.conteiner-2 .div-left-side {\n    background: #e2e2e2;\n    background: linear-gradient(to right, #e2e2e2 0%, #135670 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#135670',GradientType=1 );\n    width: 50%;\n    height: 2px;\n    position: absolute;\n    left: 0;\n    margin-left: -30px; }\n\n.conteiner-2 .divIconSeparator {\n    display: block;\n    position: absolute;\n    width: 60px;\n    left: 50%;\n    margin-left: -30px;\n    margin-top: -20px;\n    text-align: center; }\n\n.conteiner-2 .div-right-side {\n    background: #135670;\n    background: linear-gradient(to right, #135670 0%, #e2e2e2 99%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#135670', endColorstr='#e2e2e2',GradientType=1 );\n    width: 50%;\n    height: 2px;\n    display: block;\n    position: absolute;\n    right: 0;\n    margin-right: -30px; }\n\n.bits-icon {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-repeat: no-repeat; }\n\n.bits-icon.icon-startproject {\n    background-image: url(\"/assets/icon/aboutus5-startproject.svg\"); }\n\n.bits-icon.icon-startmeeting {\n    background-image: url(\"/assets/icon/aboutus5-startprojectv2.svg\"); }\n\n.bits-icon.icon-people {\n    background-image: url(\"/assets/icon/template8-team.svg\"); }\n\n.bits-icon.icon-location {\n    background-image: url(\"/assets/icon/contactus3-placeholder.svg\"); }\n\n.bits-icon.icon-module {\n    background-image: url(\"/assets/icon/template2-module.svg\"); }\n\n.bits-icon.icon-video {\n    background-image: url(\"/assets/icon/template3-video.svg\"); }\n\n.bits-icon.icon-technologies {\n    background-image: url(\"/assets/icon/template4-tech.svg\"); }\n\n.bits-icon.icon-opinions {\n    background-image: url(\"/assets/icon/template5-opinions.svg\"); }\n\n.bits-icon.icon-results {\n    background-image: url(\"/assets/icon/template6-done.svg\"); }\n\n.bits-icon.icon-camera {\n    background-image: url(\"/assets/icon/template7-camera.svg\"); }\n\n.bits-icon.icon-team {\n    background-image: url(\"/assets/icon/template8-team.svg\"); }\n\n.bits-icon.icon-clients {\n    background-image: url(\"/assets/icon/template9-clients.svg\"); }\n\n.bits-icon.icon-project {\n    background-image: url(\"/assets/icon/template10-related.svg\"); }\n\n.bits-icon.icon-startteam {\n    background-image: url(\"/assets/icon/aboutus1-whyus.svg\"); }\n\n.bits-icon.icon-history {\n    background-image: url(\"/assets/icon/aboutus2-timeline.svg\"); }\n\n.bits-icon.icon-certficate {\n    background-image: url(\"/assets/icon/aboutus3-certficate.svg\"); }\n\n.bits-icon.icon-medal {\n    background-image: url(\"/assets/icon/medalla.svg\"); }\n\n.bits-icon.icon-aboutus {\n    background-image: url(\"/assets/icon/aboutus4-aboutus.svg\"); }\n\n.bits-icon.icon-privacity {\n    background-image: url(\"/assets/icon/privacy1.svg\"); }\n\n.bits-icon.icon-historymedical {\n    background-image: url(\"/assets/icon/template1A-medical.svg\"); }\n\n.bits-icon.icon-medicallogistic {\n    background-image: url(\"/assets/icon/template1B-logistic.svg\"); }\n\n.bits-icon.icon-medicalIT {\n    background-image: url(\"/assets/icon/template1C-IT.svg\"); }\n\n.bits-icon.icon-redes {\n    background-image: url(\"/assets/icon/template1D-IT.svg\"); }\n\n.bits-icon.icon-connection {\n    background-image: url(\"/assets/icon/template1E-IT.svg\"); }\n\n.bits-icon.icon-engranaje {\n    background-image: url(\"/assets/icon/Engranes.svg\"); }\n"

/***/ }),

/***/ "./src/app/cards/components/separator/separator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cards/components/separator/separator.component.ts ***!
  \*******************************************************************/
/*! exports provided: SeparatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeparatorComponent", function() { return SeparatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeparatorComponent = /** @class */ (function () {
    function SeparatorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SeparatorComponent.prototype, "iconCustom", void 0);
    SeparatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-separator',
            template: __webpack_require__(/*! ./separator.component.html */ "./src/app/cards/components/separator/separator.component.html"),
            styles: [__webpack_require__(/*! ./separator.component.scss */ "./src/app/cards/components/separator/separator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SeparatorComponent);
    return SeparatorComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/slide/slide.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/slide/slide.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row fondoSlide\" [ngStyle]=\"{'background-image':'url('+ slide.bkgSrcSlide +')'}\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <div class=\"mx-4 px-3 pt-7 pb-3 black-trans\">\n                    <h1 class=\"text-light\">{{ slide.titleSlide | uppercase }}</h1>\n                    <h2 class=\"condensed text-green\">{{ slide.subtitleSlide | uppercase}}</h2>\n                    <div class=\"text-light\" [innerHTML]=\"slide.descriptionSlide\"></div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"pt-3\">\n                    <img [src]=\"slide.imgSrcSlide\" [alt]=\"slide.titleSlide\" width=\"400\" height=\"400\" class=\"d-block m-auto img-fluid\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/slide/slide.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/slide/slide.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, p {\n  font-family: 'Open Sans light'; }\n\n.imgFondoSlide {\n  position: absolute; }\n\n.fondoSlide {\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed; }\n\n.p-6 {\n  padding: 4.5rem; }\n\n.pt-6 {\n  padding-top: 4.5rem; }\n\n.p-7 {\n  padding: 6rem; }\n\n.pt-7 {\n  padding-top: 4.5rem; }\n\n.black-trans {\n  background: #00000073; }\n\nh1.text-light {\n  color: #94b1cc !important; }\n\n.green, .text-green {\n  color: #91b520; }\n"

/***/ }),

/***/ "./src/app/cards/components/slide/slide.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/slide/slide.component.ts ***!
  \***********************************************************/
/*! exports provided: SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideComponent = /** @class */ (function () {
    function SlideComponent() {
    }
    SlideComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "slide", void 0);
    SlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! ./slide.component.html */ "./src/app/cards/components/slide/slide.component.html"),
            styles: [__webpack_require__(/*! ./slide.component.scss */ "./src/app/cards/components/slide/slide.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/slider/slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/slider/slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"sliderArray.length > 0\">\n    <ng-template ngbSlide *ngFor=\"let item of sliderArray\">\n        <app-slide [slide]=\"item\"></app-slide>\n    </ng-template>\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/cards/components/slider/slider.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/slider/slider.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel /deep/ .carousel-indicators {\n  bottom: -10px; }\n  .carousel /deep/ .carousel-indicators li {\n    width: 20px;\n    height: 20px;\n    border-radius: 20px;\n    box-shadow: 0px 1px 5px #00000050; }\n  .carousel /deep/ .carousel-indicators li.active {\n    background-color: #a6cf24 !important; }\n"

/***/ }),

/***/ "./src/app/cards/components/slider/slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/slider/slider.component.ts ***!
  \*************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent(_cardService) {
        this._cardService = _cardService;
        this.sliderArray = [];
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.getSliderItems();
    };
    SliderComponent.prototype.getSliderItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('sliderbackmediarightcard').subscribe(function (items) {
            var sliders = [];
            for (var _i = 0, _a = items.data; _i < _a.length; _i++) {
                var item = _a[_i];
                var slide = void 0;
                slide = {
                    titleSlide: item.title,
                    subtitleSlide: item.field_subtitle,
                    descriptionSlide: item.field_des,
                    listTextSlide: [],
                    imgSrcSlide: item.field_right_image.url,
                    bkgSrcSlide: item.field_background_image.url,
                };
                sliders.push(slide);
            }
            _this.sliderArray = sliders;
        });
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/cards/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/cards/components/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n\t<div class=\"contactenos\">\n\t\t<button class=\"active\" (click)=\"toogleHidden()\">\n\t\t\t{{this.title_a}}\n\t\t</button>\n\t</div>\n\t<div class=\"trabaje\">\n\t\t<button (click)=\"toogleHidden()\">\n\t\t\t{{this.title_b}}\n\t\t</button>\n\t</div>\n</div>\n<br /><br />\n<div class=\"container\" [hidden]=\"hidden\">\n\n\t<div class=\"row\">\n\t\t<form id=\"formulario_contacto\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\" class=\"col-md-12\" name=\"formulario_contacto\">\n\t\t\t<app-message [dataMessage]=\"dataMessage\"></app-message>\n\t\t\t<div class=\"form-group\" [ngClass]=\"aplicaCssErro(nombre)\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputNombre\">Nombre</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" name=\"nombre\" ngModel required #nombre=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"nombre.invalid && nombre.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputOrg\">Organización</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"organizacion\" placeholder=\"Organización\" name=\"organizacion\" ngModel\n\t\t\t\t\t #organizacion=\"ngModel\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Escriba su email\"\n\t\t\t\t\t name=\"correo_electronico\" ngModel pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n\t\t\t\t\t #correo_electronico=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"correo_electronico.invalid && correo_electronico.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputTel\">Telefono</label>\n\t\t\t\t\t<input type=\"tel\" class=\"form-control\" id=\"org\" placeholder=\"Escriba su telefono\" name=\"telefono\" ngModel pattern=\"^(\\([0-9]{3}\\)|[0-9]{3})[0-9]{3}[0-9]{4}$\"\n\t\t\t\t\t #telefono=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"telefono.invalid && telefono.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"pais\">Pais</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"pais\" placeholder=\"Seleccione su pais\" name=\"pais\" ngModel></select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"ciudad\">Ciudad</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"ciudad\" placeholder=\"Seleccione su ciudad\" name=\"ciudad\" ngModel></select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"producto\">Producto de interés</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"producto\" placeholder=\"Seleccione un producto\" name=\"Producto\"\n\t\t\t\t\t ngModel></select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"servicio\">Servicio de interés</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"servicio\" placeholder=\"Seleccione un servicio\" name=\"Servicio\"\n\t\t\t\t\t ngModel></select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12 comentario\">\n\t\t\t\t<label for=\"exampleInputComm\">Comentarios</label>\n\t\t\t\t<textarea class=\"form-control\" id=\"comentario\" placeholder=\"Escriba sus comentarios\" name=\"comentario\" ngModel\n\t\t\t\t #comentario=\"ngModel\"></textarea>\n\t\t\t\t<div *ngIf=\"comentario.invalid && comentario.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12 terminos_grupo\">\n\t\t\t\t<input type=\"checkbox\" checked=\"checked\" id=\"terms-of-service\" name=\"terms_of_service\" value=\"false\" ngModel\n\t\t\t\t required>\n\t\t\t\t<label ng-reflect-ng-class=\"\" for=\"terms-of-service\">He leído y acepto los\n\t\t\t\t\t<a data-trigger=\"focus\" role=\"button\" data-toggle=\"popover\" data-placement=\"top\" href=\"#\">\n\t\t\t\t\t\ttérminos y condiciones\n\t\t\t\t\t</a>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n\t\t\t<div class=\"obligatorios col-md-12\"> <span>*</span>Datos Obligatorios</div>\n\t\t</form>\n\t</div>\n</div>\n<app-workus [hidden]=\"!hidden\"></app-workus>\n<div id='popover-title'>{{titulo}}</div>\n<div id='popover-content' [innerHTML]='list'></div>"

/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n.item {\n  display: inline-block; }\n\nlabel {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px;\n  font-weight: 100;\n  font-family: 'Open Sans light'; }\n\ninput,\nselect {\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  border-radius: 0px;\n  font-family: 'Open Sans light'; }\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px red; }\n\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #808080; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #808080; }\n\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #808080; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #808080; }\n\n.comentario {\n  width: 98%;\n  margin: 0 auto; }\n\n@media screen and (max-width: 480px) {\n    .comentario {\n      width: 91%; } }\n\n.comentario textarea {\n    min-height: 40px;\n    border-radius: 0px;\n    border: 1px solid #b2c6cd;\n    padding: 10px 20px;\n    font-family: 'Open Sans light'; }\n\n.terminos_grupo {\n  position: relative;\n  max-width: 380px;\n  margin: 40px auto;\n  text-align: center;\n  /* OFF */\n  /* ON */ }\n\n.terminos_grupo [type=\"checkbox\"] {\n    position: absolute;\n    left: -9999px; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    content: '';\n    position: absolute; }\n\n.terminos_grupo [type=\"checkbox\"] + label {\n    display: block;\n    position: relative;\n    padding-left: 26px;\n    cursor: pointer;\n    line-height: 36px;\n    font-size: 1rem;\n    color: rgba(0, 43, 73, 0.8);\n    transition: color .3s; }\n\n.terminos_grupo [type=\"checkbox\"] + label a {\n    color: #91b520; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    width: 30px;\n    height: 30px;\n    transition: all .2s;\n    top: 0;\n    left: 0; }\n\n.terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n    background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n\n.terminos_grupo [type=\"checkbox\"]:checked + label:after {\n    background: url(\"/assets/images/check2.png\") left center no-repeat; }\n\nselect {\n  background: #f8f8f8;\n  font-family: 'Open Sans light'; }\n\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #808080; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #808080; }\n\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #808080; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #808080; }\n\n.comentario {\n  width: 98%;\n  margin: 0 auto; }\n\n@media screen and (max-width: 480px) {\n    .comentario {\n      width: 91%; } }\n\n.comentario textarea {\n    min-height: 40px;\n    border-radius: 0px;\n    border: 1px solid #b2c6cd;\n    padding: 10px 20px;\n    font-family: 'Open Sans light'; }\n\n.terminos_grupo {\n  position: relative;\n  max-width: 380px;\n  margin: 40px auto;\n  text-align: center;\n  /* OFF */\n  /* ON */ }\n\n.terminos_grupo [type=\"checkbox\"] {\n    position: absolute;\n    left: -9999px; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    content: '';\n    position: absolute; }\n\n.terminos_grupo [type=\"checkbox\"] + label {\n    display: block;\n    position: relative;\n    padding-left: 26px;\n    cursor: pointer;\n    line-height: 36px;\n    font-size: 1rem;\n    color: rgba(0, 43, 73, 0.8);\n    transition: color .3s; }\n\n.terminos_grupo [type=\"checkbox\"] + label a {\n    color: #91b520; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    width: 30px;\n    height: 30px;\n    transition: all .2s;\n    top: 0;\n    left: 0; }\n\n.terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n    background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n\n.terminos_grupo [type=\"checkbox\"]:checked + label:after {\n    background: url(\"/assets/images/check2.png\") left center no-repeat; }\n\n.btn-primary {\n  border-radius: 0px;\n  background: #91b520;\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  margin: 0 auto;\n  display: block;\n  font-family: 'Open Sans light'; }\n\n.obligatorios {\n  text-align: center;\n  margin-top: 20px;\n  color: #6d747f;\n  font-family: 'Open Sans light'; }\n\n.obligatorios span {\n    color: #91b520; }\n\n.tab {\n  background: #e5e9ec;\n  height: 140px;\n  margin-top: 40px; }\n\n.tab .contactenos {\n    height: 140px;\n    padding-left: 11.8%;\n    display: inline-block;\n    position: relative;\n    width: 50%; }\n\n.tab .contactenos button {\n      display: block;\n      width: 84%;\n      height: 100%;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      background: url(/assets/images/contactus1-newproject.svg) no-repeat center 25px;\n      background-size: 10%;\n      padding-top: 8.5%;\n      border: none;\n      font-size: 22px;\n      font-family: 'Open Sans light';\n      color: #2e516a;\n      cursor: pointer; }\n\n@media (min-width: 1367px) {\n        .tab .contactenos button {\n          background-size: 8%; } }\n\n.tab .contactenos button:active,\n    .tab .contactenos button.active {\n      background: url(/assets/images/contactus1-newproject-white.svg) no-repeat center 25px, #30506c;\n      background-size: 10%;\n      color: #fff;\n      outline: 0px auto -webkit-focus-ring-color; }\n\n@media (min-width: 1367px) {\n        .tab .contactenos button:active,\n        .tab .contactenos button.active {\n          background-size: 8%; } }\n\n.tab .contactenos button.active::before {\n      content: '';\n      position: absolute;\n      border-width: 30px 65px 0;\n      border-style: solid;\n      border-color: #2e516a transparent transparent;\n      top: 97%;\n      margin-left: 37px; }\n\n.tab .contactenos button::after {\n      content: '';\n      position: absolute;\n      height: 75px;\n      width: 1px;\n      margin-top: -7%;\n      left: 0%;\n      background-color: #95a7b3; }\n\n.tab .contactenos button.active::after {\n      display: none; }\n\n@media screen and (max-width: 480px) {\n      .tab .contactenos button,\n      .tab .contactenos button.active {\n        width: 100%;\n        font-size: 15px;\n        padding-top: 46px;\n        background-size: 33%; }\n      .tab .contactenos button.active::before {\n        top: 96%;\n        left: 29%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      .tab .contactenos button::after {\n        display: none; } }\n\n@media (max-width: 768px) and (min-width: 600px) {\n      .tab .contactenos button.active::before {\n        top: 90%; } }\n\n.tab .trabaje {\n    height: 140px;\n    padding-right: 11.8%;\n    display: inline-block;\n    position: relative;\n    width: 50%; }\n\n.tab .trabaje button {\n      display: block;\n      width: 84%;\n      height: 100%;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      background: none;\n      padding-top: 8.5%;\n      background: url(/assets/images/contactus2-joinus.svg) no-repeat center 25px;\n      background-size: 10%;\n      border: none;\n      font-size: 22px;\n      font-family: 'Open Sans light';\n      color: #2e516a;\n      cursor: pointer; }\n\n@media (min-width: 1367px) {\n        .tab .trabaje button {\n          background-size: 8%; } }\n\n.tab .trabaje button:active,\n    .tab .trabaje button.active {\n      background: url(/assets/images/contactus2-joinus-white.svg) no-repeat center 25px, #30506c;\n      background-size: 10%;\n      color: #fff;\n      outline: 0px auto -webkit-focus-ring-color; }\n\n@media (min-width: 1367px) {\n        .tab .trabaje button:active,\n        .tab .trabaje button.active {\n          background-size: 8%; } }\n\n.tab .trabaje button.active::before {\n      content: '';\n      position: absolute;\n      border-width: 30px 65px 0;\n      border-style: solid;\n      border-color: #2e516a transparent transparent;\n      top: 97%;\n      margin-left: 37px; }\n\n.tab .trabaje button::after {\n      content: '';\n      position: absolute;\n      height: 75px;\n      width: 1px;\n      margin-top: -7%;\n      right: 0%;\n      background-color: #95a7b3; }\n\n.tab .trabaje button.active::after {\n      display: none; }\n\n@media screen and (max-width: 480px) {\n      .tab .trabaje button,\n      .tab .trabaje button.active {\n        width: 100%;\n        font-size: 15px;\n        padding-top: 46px;\n        background-size: 33%; }\n      .tab .trabaje button.active::before {\n        top: 96%;\n        left: 29%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      .tab .trabaje button::after {\n        display: none; } }\n\n@media (max-width: 768px) and (min-width: 600px) {\n      .tab .trabaje button.active::before {\n        top: 90%; } }\n\n#msj-modal {\n  background: #30506cab;\n  width: 100vw;\n  height: 100vh; }\n\n#msj-modal .content-modal {\n    display: table;\n    position: relative;\n    margin-top: 25%;\n    width: 50%;\n    margin-left: 25%;\n    padding: 20px;\n    background: #fff;\n    border-radius: 10px;\n    border: solid #91b520 1px; }\n\n#msj-modal .content-modal p {\n      text-align: center; }\n\n#popover-title,\n#popover-content {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.ts ***!
  \*********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsComponent = /** @class */ (function () {
    function TabsComponent(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.hidden = false;
        this.usuario = {
            nombre: null,
            email: null
        };
        this.dataMessage = [];
        this.list = [];
    }
    TabsComponent.prototype.toogleHidden = function () {
        this.dataMessage = [];
        this.hidden = !this.hidden;
    };
    TabsComponent.prototype.onSubmit = function (formulario) {
        var _this = this;
        this.dataMessage = [];
        console.log(formulario);
        formulario['webform_id'] = 'contact_us';
        $('#formulario_contacto')[0].reset();
        /* $('#msj-modal').show();
        $('.close').click(function () {
          $('#msj-modal').hide();
        }); */
        this._http.post('webform_rest/submit?_format=json', formulario, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        })
            .subscribe(function (datos) {
            _this.ubicar();
            if (datos.error) {
                for (var key in datos.error) {
                    _this.dataMessage.push({
                        visible: true,
                        status: 'error',
                        message: datos.error[key]
                    });
                }
            }
            else if (datos.sid) {
                _this.dataMessage.push({
                    visible: true,
                    status: 'success',
                    message: 'Respuesta satisfactoria'
                });
            }
            // formulario.form.reset();
        });
    };
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTabsData();
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
        $('.trabaje').on('click', function () {
            $('.trabaje button').toggleClass('active');
            $('.contactenos button').toggleClass('active');
        });
        $('.contactenos').on('click', function () {
            $('.trabaje button').toggleClass('active');
            $('.contactenos button').toggleClass('active');
        });
        this.getPopoverService();
        $(function () {
            $('[data-toggle="popover"]').popover({
                html: true,
                title: function () {
                    return $('#popover-title').html();
                },
                content: function () {
                    return document.getElementById('popover-content').innerHTML;
                }
            }).click(function (e) {
                e.preventDefault();
            });
        });
    };
    TabsComponent.prototype.getTabsData = function () {
        var _this = this;
        this._service.getCustomCardInformation('howcanwehelpyoucard').subscribe(function (items) {
            _this.title_a = items.body[0].data.text_form_left;
            _this.title_b = items.body[2].data.text_form_right;
        });
    };
    TabsComponent.prototype.getPopoverService = function () {
        var _this = this;
        this._service.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(function (params) {
            _this.titulo = params.title;
            _this.list = params.body;
        });
    };
    TabsComponent.prototype.verificaValidTouched = function (campo) {
        return !campo.valid && campo.touched;
    };
    TabsComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    TabsComponent.prototype.ubicar = function () {
        var x = document.querySelector('.tab');
        console.log(x);
        if (x) {
            x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
        }
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/cards/components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/cards/components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"]])
    ], TabsComponent);
    return TabsComponent;
}());

//     arrayTabs:Tab[] = [];
//     ids:number = 0;
//     size:number;
//     constructor(
//         private https: CustomCardService,
//     ) {}
//     ngOnInit() {
//     }
//     mostrar(link:number){
//         this.ids = link;
//         console.log(this.ids);
//     }
// }
// export interface Tab{
//     titulo:string;
//     icontab:string;
//     urlicon:string;
//     alticon:string;
//     contenido:string;
// }


/***/ }),

/***/ "./src/app/cards/components/team/team.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/team/team.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"kw-title\">\n  <h2 [id]=\"datosMenu.id\">{{ title }}</h2>\n  <p [innerHTML]=\"subtitle\"></p>\n</section>\n\n<div class=\"contenedor\">\n  <ngx-carousel [inputs]=\"carocarouselTile\" (carouselLoad)=\"carouselTileLoad($event)\" *ngIf=\"CarouselControlArray\">\n    <ngx-tile NgxCarouselItem *ngFor=\"let main of CarouselControlArray; let i = index\">\n      <a href=\"\" class=\"url-link\">\n        <div class=\"container-img\">\n          <img class=\"d-block img-fluid img-float mx-auto\" [src]=\"main.field_imagen?.url\" [alt]=\"main.field_imagen?.alt\" />\n        </div>\n        <div class=\"info\">\n          <h4 class=\"name-cargo\">{{main?.field_cargo}}</h4>\n          <h3 class=\"main-title\">{{main?.title}}</h3>\n          <h5 class=\"correo\">{{main?.field_correo_electronico}}</h5>\n          <span class=\"in\">in</span>\n        </div>\n      </a>\n    </ngx-tile>\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\n  </ngx-carousel>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/team/team.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/team/team.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#kw-title h2 {\n  margin-left: 3%;\n  font-size: 40px;\n  color: #002b49;\n  text-align: center;\n  margin-top: 40px; }\n  @media (max-width: 667px) {\n    #kw-title h2 {\n      font-size: 28px;\n      margin-left: 0; } }\n  #kw-title p {\n  color: #002b49cc;\n  font-family: Open Sans Codensed;\n  margin-right: 180px;\n  margin-left: 200px;\n  margin-top: 10px;\n  font-size: 20px;\n  text-align: center; }\n  @media (min-width: 1025px) {\n    #kw-title p {\n      margin-right: 0;\n      margin-left: 0; } }\n  @media (max-width: 667px) {\n    #kw-title p {\n      margin-right: 20px;\n      margin-left: 0; } }\n  .contenedor {\n  width: 80%;\n  margin: 0 auto; }\n  .item {\n  width: 405%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .item {\n      width: 200%; } }\n  @media (min-width: 1025px) {\n    .item {\n      width: 100%; } }\n  .url-link {\n  width: 100%;\n  padding-left: 4%;\n  padding-right: 4%;\n  margin-top: 1%;\n  text-decoration: none; }\n  @media (min-width: 1025px) {\n    .url-link {\n      padding-left: 5%;\n      padding-right: 5%; } }\n  .url-link .container-img {\n    height: 123px;\n    position: relative; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      .url-link .container-img {\n        padding-left: 0%;\n        padding-right: 0%; } }\n  @media (min-width: 1025px) {\n      .url-link .container-img {\n        padding-left: 10%;\n        padding-right: 10%; } }\n  .url-link .container-img .img-float {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      border-radius: 50%; }\n  .url-link .info {\n    width: 100%;\n    color: #002b49;\n    text-align: center; }\n  .url-link .info::before {\n      content: '';\n      background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n      height: 1px;\n      right: 0%;\n      left: 5%;\n      position: absolute; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .url-link .info::before {\n          display: none; } }\n  @media (min-width: 1025px) {\n        .url-link .info::before {\n          display: none; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      .url-link .info {\n        height: 250px; } }\n  .url-link .info .line {\n      visibility: hidden; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .url-link .info .line {\n          visibility: visible;\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n          height: 1px;\n          width: 83%;\n          position: relative;\n          top: 17px; } }\n  @media (min-width: 1025px) {\n        .url-link .info .line {\n          visibility: visible;\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n          height: 1px;\n          width: 83%;\n          position: relative;\n          top: 17px; } }\n  .url-link .info .name-cargo {\n      padding-top: 14%;\n      font-size: 20px;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n  @media (min-width: 1025px) {\n        .url-link .info .name-cargo {\n          padding-top: 14%; } }\n  .url-link .info .main-title {\n      margin-top: 4%;\n      font-size: 20px;\n      font-family: 'Open Sans Codensed';\n      font-weight: 300; }\n  .url-link .info .correo {\n      width: 100%;\n      margin-top: 5.2%;\n      padding-left: 27%;\n      padding-right: 26%;\n      font-size: 14px;\n      font-family: 'Open Sans';\n      font-weight: 300; }\n  @media (min-width: 1025px) {\n        .url-link .info .correo {\n          padding-left: 12%;\n          padding-right: 12%;\n          width: 100%; } }\n  @media (max-width: 667px) {\n        .url-link .info .correo {\n          padding: 0; } }\n  .url-link .info .in {\n      font-size: 14px;\n      margin-top: 6%;\n      font-family: 'Open Sans';\n      font-weight: 900;\n      color: #a6cf24; }\n  @media (min-width: 1025px) {\n        .url-link .info .in {\n          margin-top: 2%; } }\n  #main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n  #main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n  @media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  #titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n  @media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n  #titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n  @media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n  h1 {\n  min-height: 200px;\n  background-color: #ccc;\n  text-align: center;\n  line-height: 200px; }\n  .leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/left-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n  .rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  border: none;\n  background: transparent;\n  background-image: url(/assets/icon/right-arrow.svg);\n  background-size: 37px;\n  height: 0;\n  width: 28px;\n  overflow: hidden;\n  padding-top: 37px;\n  cursor: pointer; }\n  .rightRs:focus,\n.leftRs:focus {\n  outline: none; }\n  :host ::ng-deep .tile {\n  box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/cards/components/team/team.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cards/components/team/team.component.ts ***!
  \*********************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent(https) {
        this.https = https;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CarouselControlArray = [];
        this.caroseltitle = [];
        this.CarouselControlArray = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'TEAMS',
            id: 'a9',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getTeamInformationService();
        this.CarouselControlArray = [0, 1, 2, 3];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 2, md: 4, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: false,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 4,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    TeamComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.CarouselControlArray.length;
        if (len <= 4) {
            for (var i = len; i < len + 0; i++) {
                this.CarouselControlArray.push(i);
            }
        }
    };
    TeamComponent.prototype.getTeamInformationService = function () {
        var _this = this;
        this.https.getCustomCardInformationType('teambitsamericas', this.type).subscribe(function (items) {
            _this.title = items.header[0].data.title;
            _this.subtitle = items.header[1].data.sub_title;
            _this.CarouselControlArray = items.data;
            _this.CarouselControlArray = Object.keys(items.data).map(function (key) { return items.data[key]; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeamComponent.prototype, "type", void 0);
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/cards/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/cards/components/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"title\">\n  <h2 [id]=\"datosMenu.id\">{{ title }}</h2>\n  <p [innerHTML]=\"subtitle\"></p>\n</section>\n<section class=\"content\"> \n  <div class=\"content-img\" style=\"display: flex; flex-wrap: wrap; justify-content:center\">    \n      <div class=\"img-fluid\" [ngStyle]=\"{'background-image':'url(' + data.field_tech_color_image?.url + ')'}\"\n      *ngFor=\"let data of CarouselControlArray; let i = index\">\n      </div>    \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title h2 {\n  margin-left: 3%;\n  font-size: 40px;\n  color: #002b49;\n  text-align: center;\n  margin-top: 40px; }\n  @media (max-width: 667px) {\n    #title h2 {\n      font-size: 28px;\n      margin-left: 0; } }\n  #title p {\n  color: #002b49cc;\n  font-family: Open Sans Codensed;\n  margin-right: 180px;\n  margin-left: 200px;\n  margin-top: 10px;\n  font-size: 20px;\n  text-align: center; }\n  @media (min-width: 1025px) {\n    #title p {\n      margin-right: 0;\n      margin-left: 0; } }\n  @media (max-width: 667px) {\n    #title p {\n      margin-right: 20px;\n      margin-left: 0; } }\n  .content-img {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  .content-img .img-fluid {\n    width: 200px;\n    height: 140px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    margin: 10px 20px; }\n  @media (max-width: 500px) {\n      .content-img .img-fluid {\n        width: 100px;\n        height: 90px; } }\n"

/***/ }),

/***/ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TecnologiesProjectserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiesProjectserviceComponent", function() { return TecnologiesProjectserviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TecnologiesProjectserviceComponent = /** @class */ (function () {
    function TecnologiesProjectserviceComponent(https) {
        this.https = https;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CarouselControlArray = [];
    }
    TecnologiesProjectserviceComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'TECNOLOGIA',
            id: 'a11',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getTecnoInformationService();
    };
    TecnologiesProjectserviceComponent.prototype.getTecnoInformationService = function () {
        var _this = this;
        this.https.getCustomCardInformationType('expertsinimedicalcard', this.type).subscribe(function (items) {
            _this.title = items.header[0].data.title;
            _this.subtitle = items.header[1].data.sub_title;
            _this.CarouselControlArray = items.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TecnologiesProjectserviceComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TecnologiesProjectserviceComponent.prototype, "type", void 0);
    TecnologiesProjectserviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tecnologies-projectservice',
            template: __webpack_require__(/*! ./tecnologies-projectservice.component.html */ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.html"),
            styles: [__webpack_require__(/*! ./tecnologies-projectservice.component.scss */ "./src/app/cards/components/tecnologies-projectservice/tecnologies-projectservice.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], TecnologiesProjectserviceComponent);
    return TecnologiesProjectserviceComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row position-relative row-tec\" [ngStyle]=\"{'background-image':'url(' + background + ')'}\" \n[id]=\"datosMenu.id\">\n        <div class=\"position-absolute content-trans\"></div>\n        <div class=\"col-md-12 pt-5 pb-2 px-2\">\n            <h1 class=\"text-center text-white\">{{ title }}</h1>\n        </div>\n        <div class=\"col-md-12 py-5 px-2\">\n            <div class=\"tec-slider\">\n                <ngx-tile NgxCarouselItem id=\"logos\" *ngFor=\"let im of arrayLogosCustom\" >\n                    <div class=\"img-fluid\" *ngFor=\"let img of im\" [ngStyle]=\"{'background-image':'url(' + img.field_tech_image?.url + ')'}\"></div>\n                </ngx-tile>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-tec {\n  width: 100%;\n  margin: 0;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(/assets/images/fnd-tecnologias.jpg) !important;\n  min-height: 380px; }\n  .row-tec .content-trans {\n    background: #002b49c0;\n    width: 100%;\n    height: 100%; }\n  .row-tec .tec-slider {\n    width: 100%;\n    margin: 0 auto;\n    display: flex; }\n  .row-tec .tec-slider .item {\n      margin: 0 auto; }\n  .row-tec .tec-slider .div-slide {\n      margin: 0 auto; }\n  .img-fluid {\n  width: 175px;\n  height: 140px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  margin: 10px 20px; }\n  @media (max-width: 500px) {\n    .img-fluid {\n      width: 100px;\n      height: 90px; } }\n  :host ::ng-deep .tile {\n  box-shadow: none !important;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  @media screen and (max-width: 480px) {\n  .img-slide {\n    width: 70%;\n    display: block;\n    height: auto;\n    margin: 20px auto; } }\n"

/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.ts ***!
  \***********************************************************************/
/*! exports provided: TecnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiesComponent", function() { return TecnologiesComponent; });
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TecnologiesComponent = /** @class */ (function () {
    function TecnologiesComponent(_tecnologies, el) {
        this._tecnologies = _tecnologies;
        this.el = el;
        this.arrayLogos = [];
        this.state = 'hide';
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.arrayLogosCustom = [];
    }
    TecnologiesComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if (scrollPosition >= componentPosition) {
            this.state = 'hide';
        }
        else {
            this.state = 'show';
        }
    };
    TecnologiesComponent.prototype.ngOnInit = function () {
        this.datosMenu = {
            label: 'TECNOLOGÍAS',
            id: 'a5',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getItemsTecnologies();
        this.arrayLogos = [0, 1, 2, 3, 4, 5,];
        this.carocarouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 1,
            touch: true,
            easing: 'ease',
            loop: true,
        };
    };
    TecnologiesComponent.prototype.customArrayImages = function (arrayLogosOriginal) {
        for (var i = 0; i <= arrayLogosOriginal.length; i++) {
            this.arrayLogosCustom[i] = [];
            var j2 = 0;
            for (var j = 0; j < 4; j++) {
                if (arrayLogosOriginal.length > 0) {
                    this.arrayLogosCustom[i][j] = arrayLogosOriginal[0];
                    arrayLogosOriginal.shift();
                }
            }
        }
    };
    TecnologiesComponent.prototype.getItemsTecnologies = function () {
        var _this = this;
        return this._tecnologies.getCustomCardInformation('technologies').subscribe(function (items) {
            _this.title = items.header[0].data.title;
            _this.background = items.body[0].data.back_movil[0].url;
            _this.arrayLogos = items.data;
            _this.customArrayImages(_this.arrayLogos);
            console.log(_this.arrayLogosCustom);
            /*this.createSlick();*/
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], TecnologiesComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TecnologiesComponent.prototype, "checkScroll", null);
    TecnologiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tecnologies',
            template: __webpack_require__(/*! ./tecnologies.component.html */ "./src/app/cards/components/tecnologies/tecnologies.component.html"),
            styles: [__webpack_require__(/*! ./tecnologies.component.scss */ "./src/app/cards/components/tecnologies/tecnologies.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TecnologiesComponent);
    return TecnologiesComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/testimonies/testimonies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/testimonies/testimonies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonies-main-title\">\n    <h1 [id]=\"datosMenu.id\" class=\"testimonies-general-title\" >{{ testimoniesTitle }}</h1>\n    <p class=\"testimonies-general-subtitle\" >{{ testimoniesSubTitle }}</p>\n</section>\n<div id=\"testimonies-carousel\">\n  <ngb-carousel *ngIf=\"testimoniesData\">\n      <ng-template ngbSlide *ngFor=\"let item of testimoniesData\">\n        <div class=\"container\"></div>\n        <div class=\"carousel-caption\">\n          <p class=\"testimonies-text testimonies-description\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, repellat quia ipsam rerum eius modi iure tempore minus et in nihil nemo voluptatibus hic, asperiores ullam, reprehenderit culpa sapiente inventore!</p>\n          <h3 class=\"testimonies-text testimonies-name\">{{ item.title }}</h3>\n          <h3 class=\"testimonies-text testimonies-company\">COMPANY NAME</h3>\n        </div>\n      </ng-template>\n  </ngb-carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/cards/components/testimonies/testimonies.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/testimonies/testimonies.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#testimonies-main-title {\n  text-align: center;\n  width: 100%;\n  padding: 50px 0 0px 0;\n  color: #002b49; }\n  #testimonies-main-title .testimonies-general-title {\n    font-family: Open Sans Codensed Light;\n    font-size: 40px; }\n  #testimonies-main-title .testimonies-general-subtitle {\n    font-family: Open Sans Codensed Light;\n    font-size: 20px; }\n  #testimonies-carousel .container {\n  width: 100%;\n  height: 200px;\n  background-color: white; }\n  #testimonies-carousel .carousel-caption {\n  padding-top: 0;\n  padding-bottom: 50px; }\n  #testimonies-carousel .carousel-caption .testimonies-text {\n    font-family: Open Sans Light;\n    color: #002b49; }\n  #testimonies-carousel .carousel-caption .testimonies-description {\n    font-size: 16px; }\n  #testimonies-carousel .carousel-caption .testimonies-name {\n    font-size: 17px; }\n  #testimonies-carousel .carousel-caption .testimonies-company {\n    font-family: Open Sans Codensed Light;\n    font-size: 20px; }\n  :host /deep/ .carousel-control-next,\n:host /deep/ .carousel-control-prev {\n  visibility: hidden; }\n  :host /deep/ .carousel-indicators li {\n  width: 15px;\n  height: 15px;\n  margin: 0 5px;\n  border-radius: 50%;\n  background-color: #ededed; }\n  :host /deep/ .carousel-indicators li.active {\n    background-color: #a6cf24; }\n  :host /deep/ .carousel.slide {\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/cards/components/testimonies/testimonies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cards/components/testimonies/testimonies.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestimoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniesComponent", function() { return TestimoniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimoniesComponent = /** @class */ (function () {
    function TestimoniesComponent(testimonies) {
        this.testimonies = testimonies;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TestimoniesComponent.prototype.ngOnInit = function () {
        this.datosMenu = {
            label: 'TESTIMONIES',
            id: 'a12',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getTestimoniesInfo();
    };
    TestimoniesComponent.prototype.getTestimoniesInfo = function () {
        var _this = this;
        return this.testimonies.getCustomCardInformation('testimoniesbitsamericas').subscribe(function (items) {
            console.log(items);
            _this.testimoniesTitle = items.header[0].data.title;
            _this.testimoniesSubTitle = items.header[1].data.sub_title;
            _this.testimoniesData = items.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TestimoniesComponent.prototype, "propagar", void 0);
    TestimoniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonies',
            template: __webpack_require__(/*! ./testimonies.component.html */ "./src/app/cards/components/testimonies/testimonies.component.html"),
            styles: [__webpack_require__(/*! ./testimonies.component.scss */ "./src/app/cards/components/testimonies/testimonies.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], TestimoniesComponent);
    return TestimoniesComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/titles/title.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cards/components/titles/title.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h2> {{titleArray}} </h2>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/titles/title.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cards/components/titles/title.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n  #main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    letter-spacing: -2px; }\n  @media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/titles/titles.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/titles/titles.component.ts ***!
  \*************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        // this.title.getCustomCardInformation('contact_title').subscribe(items => {
        this.title.getCustomCardInformation('howcanwehelpyoucard').subscribe(function (items) {
            _this.titleArray = items.header[0].data.title;
        });
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/cards/components/titles/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/cards/components/titles/title.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/video-information/video-information.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/video-information/video-information.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-light\" [id]=\"datosMenu.id\">\n    <div class=\"col-md-6 p-0\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" [src]=\"videoURLSanitizer\" allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6 my-5\">\n        <h2>{{ titleSection | uppercase}}</h2>\n        <hr class=\"green\">\n        <p [innerHTML]=\"descriptionSection\" ></p>\n        <br>\n        <a [href]=\"link\" class=\"green\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i> {{link}}</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/video-information/video-information.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/video-information/video-information.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2.condensed {\n  font-size: 20px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px;\n  color: #002b49;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nh2 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nhr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\na {\n  color: #91b520;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\np {\n  font-size: 14px;\n  width: 88%;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter;\n  color: #002b49; }\n\niframe {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/cards/components/video-information/video-information.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/video-information/video-information.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VideoInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoInformationComponent", function() { return VideoInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoInformationComponent = /** @class */ (function () {
    function VideoInformationComponent(https, sanitizer) {
        this.https = https;
        this.sanitizer = sanitizer;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VideoInformationComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'VIDEOS',
            id: 'a7',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getVideoInformationService();
    };
    VideoInformationComponent.prototype.getVideoInformationService = function () {
        var _this = this;
        this.https.getCustomCardInformationType('videoplusinformation', this.type).subscribe(function (items) {
            _this.titleSection = items.data[0].title;
            _this.descriptionSection = items.data[0].body;
            _this.videoURL = items.data[0].field_url_video[0].uri;
            if (_this.videoURL.includes('watch?v=')) {
                _this.videoURLSanitizer = _this.sanitizer
                    .bypassSecurityTrustResourceUrl(_this.videoURL.split('watch?v=')[0] + "embed/" + _this.videoURL.split('watch?v=')[1]);
            }
            else {
                _this.videoURLSanitizer = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.videoURL);
            }
            // this.link = items.data[0].link;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideoInformationComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VideoInformationComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideoInformationComponent.prototype, "type", void 0);
    VideoInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-information',
            template: __webpack_require__(/*! ./video-information.component.html */ "./src/app/cards/components/video-information/video-information.component.html"),
            styles: [__webpack_require__(/*! ./video-information.component.scss */ "./src/app/cards/components/video-information/video-information.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoInformationComponent);
    return VideoInformationComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/whybitsamericas/whybitsamericas.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h1 class=\"why-general-title\" >{{ whyTitle }}</h1>\n    <p class=\"why-general-subtitle\" >{{ whySubTitle }}</p>\n</section>\n\n<section class=\"WhyBits\">\n    <div class=\"images-whybits\">\n        <ul class=\"row why-boxes\">\n            <li class=\"why-list\" *ngFor=\"let why of whyData; let i = index\">\n              <div class=\"row why-img-and-title-box\">\n                <div class=\"col-5 why-img\">\n                  <img [src]=\"why.field_imagen?.url\" [alt]=\"why.field_imagen?.alt\" />\n                </div>\n                <div class=\"col-7 why-title\">\n                  <h3>{{ why?.title }}</h3>\n                </div>\n              </div>\n              <div class=\"row why-description-box\">\n                <div class=\"col-12 why-description\">\n                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In a quas, quidem vitae at aspernatur cum quibusdam excepturi quasi ab? Vitae magnam quae, officiis aliquam eum veniam similique illo reprehenderit.</p>\n                </div>\n              </div>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/whybitsamericas/whybitsamericas.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-title {\n  text-align: center;\n  width: 100%;\n  padding: 50px 0;\n  color: #002b49; }\n  #main-title .why-general-title {\n    font-family: Open Sans Codensed Light;\n    font-size: 40px; }\n  #main-title .why-general-subtitle {\n    font-family: Open Sans Codensed Light;\n    font-size: 20px; }\n  .WhyBits {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .WhyBits .images-whybits {\n    padding: 0; }\n  .WhyBits .images-whybits .why-boxes {\n      justify-content: center;\n      align-items: center;\n      padding: 0;\n      max-width: 966px; }\n  .WhyBits .images-whybits .why-list {\n      list-style: none;\n      max-width: 282px;\n      text-align: justify;\n      margin: 0 20px;\n      color: #002b49; }\n  .WhyBits .images-whybits .why-list .why-img-and-title-box {\n        margin-bottom: 15px; }\n  .WhyBits .images-whybits .why-list .why-img-and-title-box .why-img {\n          height: 89px;\n          border-right: 1px solid #a6cf24; }\n  .WhyBits .images-whybits .why-list .why-img-and-title-box .why-img img {\n            height: 89px; }\n  .WhyBits .images-whybits .why-list .why-img-and-title-box .why-title {\n          display: flex;\n          align-items: flex-end; }\n  .WhyBits .images-whybits .why-list .why-img-and-title-box .why-title h3 {\n            font-family: Open Sans Codensed Light;\n            font-size: 24px; }\n  .WhyBits .images-whybits .why-list .why-description-box .why-description p {\n        font-family: Open Sans light;\n        font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cards/components/whybitsamericas/whybitsamericas.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WhybitsamericasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhybitsamericasComponent", function() { return WhybitsamericasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhybitsamericasComponent = /** @class */ (function () {
    function WhybitsamericasComponent(whyBits) {
        this.whyBits = whyBits;
    }
    WhybitsamericasComponent.prototype.ngOnInit = function () {
        this.getWhybitsInfo();
    };
    WhybitsamericasComponent.prototype.getWhybitsInfo = function () {
        var _this = this;
        return this.whyBits.getCustomCardInformation('whybitsamericas').subscribe(function (items) {
            _this.whyTitle = items.header[0].data.title;
            _this.whySubTitle = items.header[1].data.sub_title;
            _this.whyData = items.data;
        });
    };
    WhybitsamericasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whybitsamericas',
            template: __webpack_require__(/*! ./whybitsamericas.component.html */ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.html"),
            styles: [__webpack_require__(/*! ./whybitsamericas.component.scss */ "./src/app/cards/components/whybitsamericas/whybitsamericas.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], WhybitsamericasComponent);
    return WhybitsamericasComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/workus/workus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/workus/workus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-message [dataMessage]=\"dataMessage\"></app-message>\n  <div class=\"row\">\n    <form id=\"formulario_contacto\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\" class=\"col-md-12\" name=\"formulario_contacto\">\n      <div class=\"form-group\" [ngClass]=\"aplicaCssErro(nombre)\" class=\"col-md-12\">\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputNombre\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" name=\"nombre\" ngModel required\n            #nombre=\"ngModel\">\n          <div *ngIf=\"nombre.invalid && nombre.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o\n            invalido</div>\n        </div>\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Escriba su email\"\n            name=\"correo_electronico\" ngModel pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n            #correo_electronico=\"ngModel\">\n          <div *ngIf=\"correo_electronico.invalid && correo_electronico.touched\" class=\"alert alert-danger\" role=\"alert\">Campo\n            obligatorio o invalido</div>\n        </div>\n      </div>\n      <div class=\"form-group\" class=\"col-md-12\">\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputTel\">Telefono</label>\n          <input type=\"tel\" class=\"form-control\" id=\"org\" placeholder=\"Escriba su telefono\" name=\"telefono\" ngModel\n            pattern=\"^(\\([0-9]{3}\\)|[0-9]{3})[0-9]{3}[0-9]{4}$\" #telefono=\"ngModel\">\n          <div *ngIf=\"telefono.invalid && telefono.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o\n            invalido</div>\n        </div>\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputOrg\">Hoja de vida</label>\n          <input type=\"file\" class=\"form-control hoja-v\" id=\"hojav\" placeholder=\"Hoja de vida\" name=\"hoja_de_vida\"\n            ngModel #hojadevida=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\" class=\"col-md-12\">\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputPais\">Pais</label>\n          <select type=\"select\" class=\"form-control\" id=\"Pais\" placeholder=\"Seleccione su pais\" name=\"pais\" ngModel>\n          </select>\n        </div>\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputPais\">Ciudad</label>\n          <select type=\"select\" class=\"form-control\" id=\"ciudad\" placeholder=\"Seleccione su ciudad\" name=\"ciudad\"\n            ngModel> </select>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputPais\">Sitio web personal</label>\n          <input type=\"text\" class=\"form-control\" id=\"web\" placeholder=\"Su sitio web\" name=\"sitio_web\" ngModel\n            #sitio_web=\"ngModel\" pattern=\"https?://.+\">\n          <div *ngIf=\"sitio_web.invalid && sitio_web.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio\n            o invalido</div>\n        </div>\n        <div class=\"col-md-6 item\">\n          <label for=\"exampleInputPais\">Linkedin</label>\n          <input type=\"text\" class=\"form-control\" id=\"linkedin\" placeholder=\"Su perfil\" name=\"linkedin\" ngModel\n            #linkedin=\"ngModel\" pattern=\"https?://.+\">\n          <div *ngIf=\"linkedin.invalid && linkedin.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o\n            invalido</div>\n        </div>\n      </div>\n      <div class=\"form-group\" class=\"col-md-12 comentario\">\n        <label for=\"exampleInputComm\">Comentarios</label>\n        <textarea class=\"form-control\" id=\"comentario\" placeholder=\"Escriba sus comentarios\" name=\"comentario\" ngModel\n          #comentario=\"ngModel\"></textarea>\n        <div *ngIf=\"comentario.invalid && comentario.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio\n          o invalido</div>\n      </div>\n      <div class=\"form-group\" class=\"col-md-12 terminos_grupo\">\n        <input type=\"checkbox\" id=\"terminos\" name=\"terms_of_service\" value=\"false\" required ngModel>\n        <label ng-reflect-ng-class=\"\" for=\"terms-of-service\">He leído y acepto los\n          <a data-trigger=\"focus\" role=\"button\" data-toggle=\"popover\" data-placement=\"top\" href=\"#\">\n            términos y condiciones\n          </a>\n        </label>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n      <div class=\"obligatorios col-md-12\"> <span>*</span>Datos Obligatorios</div>\n    </form>\n    <div id=\"msj-modal\" class=\"modal\" role=\"dialog\">\n      <div class=\"content-modal\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <p>Gracias por registrar su información</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div id='popover-title'>{{titulo}}</div>\n<div id='popover-content' [innerHTML]='list'></div>"

/***/ }),

/***/ "./src/app/cards/components/workus/workus.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/workus/workus.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\n.item {\n  display: inline-block; }\n\nlabel {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px;\n  font-weight: 100;\n  font-family: 'Open Sans light'; }\n\ninput,\nselect {\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  border-radius: 0px;\n  font-family: 'Open Sans light'; }\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px red; }\n\nselect {\n  background: #f8f8f8;\n  font-family: 'Open Sans light'; }\n\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #808080; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #808080; }\n\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #808080; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #808080; }\n\n.comentario {\n  width: 98%;\n  margin: 0 auto; }\n\n@media screen and (max-width: 480px) {\n    .comentario {\n      width: 91%; } }\n\n.comentario textarea {\n    min-height: 40px;\n    border-radius: 0px;\n    border: 1px solid #b2c6cd;\n    padding: 10px 20px;\n    font-family: 'Open Sans light'; }\n\n.terminos_grupo {\n  position: relative;\n  max-width: 380px;\n  margin: 40px auto;\n  text-align: center;\n  /* OFF */\n  /* ON */ }\n\n.terminos_grupo [type=\"checkbox\"] {\n    position: absolute;\n    left: -9999px; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    content: '';\n    position: absolute; }\n\n.terminos_grupo [type=\"checkbox\"] + label {\n    display: block;\n    position: relative;\n    padding-left: 26px;\n    cursor: pointer;\n    line-height: 36px;\n    font-size: 1rem;\n    color: rgba(0, 43, 73, 0.8);\n    transition: color .3s; }\n\n.terminos_grupo [type=\"checkbox\"] + label a {\n    color: #91b520; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    width: 30px;\n    height: 30px;\n    transition: all .2s;\n    top: 0;\n    left: 0; }\n\n.terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n    background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n\n.terminos_grupo [type=\"checkbox\"]:checked + label:after {\n    background: url(\"/assets/images/check2.png\") left center no-repeat; }\n\n.btn-primary {\n  border-radius: 0px;\n  background: #91b520;\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  margin: 0 auto;\n  display: block;\n  font-family: 'Open Sans light'; }\n\n.obligatorios {\n  text-align: center;\n  margin-top: 20px;\n  color: #6d747f;\n  font-family: 'Open Sans light'; }\n\n.obligatorios span {\n    color: #91b520; }\n\n.hoja-v {\n  color: transparent; }\n\n.hoja-v::-webkit-file-upload-button {\n  visibility: hidden; }\n\n.hoja-v::before {\n  content: '';\n  color: black;\n  display: inline-block;\n  background: url(/assets/images/adjunto.png);\n  background-size: contain;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  right: 15px;\n  top: 39px; }\n\n.hoja-v:hover::before {\n  border-color: black; }\n\n.hoja-v:active {\n  outline: 0; }\n\n.hoja-v:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); }\n\n#msj-modal {\n  background: #30506cab;\n  width: 100vw;\n  height: 100vh; }\n\n#msj-modal .content-modal {\n    display: table;\n    position: relative;\n    margin-top: 25%;\n    width: 50%;\n    margin-left: 25%;\n    padding: 20px;\n    background: #fff;\n    border-radius: 10px;\n    border: solid #91b520 1px; }\n\n#msj-modal .content-modal p {\n      text-align: center; }\n\n#popover-title,\n#popover-content {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/cards/components/workus/workus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/workus/workus.component.ts ***!
  \*************************************************************/
/*! exports provided: WorkusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkusComponent", function() { return WorkusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkusComponent = /** @class */ (function () {
    function WorkusComponent(_http, _service) {
        this._http = _http;
        this._service = _service;
        this.hidden = false;
        this.usuario = {
            nombre: null,
            email: null
        };
        this.dataMessage = [];
        this.list = [];
    }
    WorkusComponent.prototype.onSubmit = function (formulario) {
        var _this = this;
        this.dataMessage = [];
        console.log(formulario);
        formulario['webform_id'] = 'work_with_us';
        jQuery('#formulario_contacto')[0].reset();
        /* jQuery('#msj-modal').show();
        jQuery('.close').click(function () {
          jQuery('#msj-modal').hide();
        }); */
        this._http.post('webform_rest/submit?_format=json', formulario, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        })
            .subscribe(function (datos) {
            _this.ubicar();
            if (datos.error) {
                for (var key in datos.error) {
                    _this.dataMessage.push({
                        visible: true,
                        status: 'error',
                        message: datos.error[key]
                    });
                }
            }
            else if (datos.sid) {
                _this.dataMessage.push({
                    visible: true,
                    status: 'success',
                    message: 'Respuesta satisfactoria'
                });
            }
            // formulario.form.reset();
        });
    };
    WorkusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
        this.getPopoverService();
        $(function () {
            $('[data-toggle="popover"]').popover({
                html: true,
                title: function () {
                    return $('#popover-title').html();
                },
                content: function () {
                    return document.getElementById('#popover-content').innerHTML;
                }
            }).click(function (e) {
                e.preventDefault();
            });
        });
    };
    WorkusComponent.prototype.verificaValidTouched = function (campo) {
        return !campo.valid && campo.touched;
    };
    WorkusComponent.prototype.getPopoverService = function () {
        var _this = this;
        this._service.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(function (params) {
            _this.titulo = params.title;
            _this.list = params.body;
        });
    };
    WorkusComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    WorkusComponent.prototype.ubicar = function () {
        var x = document.querySelector('.tab');
        console.log(x);
        if (x) {
            x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
        }
    };
    WorkusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workus',
            template: __webpack_require__(/*! ./workus.component.html */ "./src/app/cards/components/workus/workus.component.html"),
            styles: [__webpack_require__(/*! ./workus.component.scss */ "./src/app/cards/components/workus/workus.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_3__["CustomCardService"]])
    ], WorkusComponent);
    return WorkusComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/workwithus-proserv/workwithus-proserv.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkWithUsProServComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithUsProServComponent", function() { return WorkWithUsProServComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkWithUsProServComponent = /** @class */ (function () {
    function WorkWithUsProServComponent(router, footerService) {
        this.router = router;
        this.footerService = footerService;
        this.workWithUsTitle = '';
        this.workWithUsSubtitle = '';
        this.url = '';
        this.workWithUsButton = '';
    }
    WorkWithUsProServComponent.prototype.ngOnInit = function () {
        this.getWorkwithUsItems();
    };
    WorkWithUsProServComponent.prototype.getWorkwithUsItems = function () {
        var _this = this;
        this.footerService.getCustomCardInformation('workwithus').subscribe(function (items) {
            _this.workWithUsTitle = items.header[0].data;
            _this.workWithUsSubtitle = items.header[1].data;
            _this.url = items.body[0].data.link;
            _this.workWithUsButton = items.body[1].data;
            _this.workWithUsThirdText = items.body[2].data;
        });
    };
    WorkWithUsProServComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workwithus-proserv',
            template: __webpack_require__(/*! ./workwithus-proserv.html */ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.html"),
            styles: [__webpack_require__(/*! ./workwithus-proserv.scss */ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], WorkWithUsProServComponent);
    return WorkWithUsProServComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/workwithus-proserv/workwithus-proserv.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"work-with-us\">\n  <h1>{{ workWithUsTitle.title }}</h1>\n  <p>{{ workWithUsSubtitle.subtitle }}</p>\n  <a class=\"btn btn-primary\" href=\"contact-us\">{{ workWithUsButton.title_bottom }}</a>\n  <hr>\n  <p class=\"text1\">o si lo desea</p>\n  <div [innerHTML]= workWithUsThirdText class=\"text2\"></div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/workwithus-proserv/workwithus-proserv.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/workwithus-proserv/workwithus-proserv.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#work-with-us {\n  display: block;\n  margin-top: 65px;\n  text-align: center;\n  color: #002b49; }\n  #work-with-us h1 {\n    font-size: 40px;\n    text-transform: none;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    letter-spacing: -2px; }\n  #work-with-us p {\n    font-size: 20px;\n    margin-top: 11px;\n    margin-bottom: 30px; }\n  @media (min-width: 1025px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  #work-with-us a.btn-primary {\n    background-color: #a6cf24;\n    border-color: #a6cf24;\n    opacity: 0.75;\n    border-radius: 0;\n    width: 292px;\n    font-size: 20px;\n    height: 45px;\n    margin-bottom: 12px; }\n  @media (min-width: 1025px) {\n      #work-with-us a.btn-primary {\n        margin-bottom: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us a.btn-primary {\n        margin-bottom: 0; } }\n  #work-with-us .text1 {\n    font-size: 24px;\n    margin-top: 11px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    background-color: #FFFFFF;\n    width: 42%;\n    margin-left: 29%; }\n  @media (min-width: 1025px) {\n      #work-with-us .text1 {\n        width: 12%;\n        margin-left: 44%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us .text1 {\n        width: 17%;\n        margin-left: 42%; } }\n  #work-with-us hr {\n    background: linear-gradient(-90deg, #FFFFFF, #a6cf24, #a6cf24, #FFFFFF);\n    height: 1px;\n    width: 80%;\n    position: absolute;\n    margin-top: 31px;\n    left: 10%; }\n  @media (min-width: 1025px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  #work-with-us .text2 {\n    margin-bottom: 67px; }\n"

/***/ }),

/***/ "./src/app/cards/components/workwithus/workwithus.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/workwithus/workwithus.component.ts ***!
  \*********************************************************************/
/*! exports provided: WorkWithUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithUsComponent", function() { return WorkWithUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkWithUsComponent = /** @class */ (function () {
    function WorkWithUsComponent(router, footerService) {
        this.router = router;
        this.footerService = footerService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.workWithUsTitle = '';
        this.workWithUsSubtitle = '';
        this.url = '';
        this.workWithUsButton = '';
    }
    WorkWithUsComponent.prototype.ngOnInit = function () {
        while (this.type.indexOf('-') > -1) {
            this.type = this.type.replace('-', '_');
        }
        this.datosMenu = {
            label: 'RELACIONADOS',
            id: 'a2',
            url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
        this.getWorkwithUsItems();
    };
    WorkWithUsComponent.prototype.getWorkwithUsItems = function () {
        var _this = this;
        this.footerService.getCustomCardInformationType('workwithus', this.type).subscribe(function (items) {
            _this.workWithUsTitle = items.header[0].data;
            _this.workWithUsSubtitle = items.header[1].data;
            _this.url = items.body[0].data.link;
            _this.workWithUsButton = items.body[1].data;
            _this.workWithUsThirdText = items.body[2].data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WorkWithUsComponent.prototype, "propagar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WorkWithUsComponent.prototype, "type", void 0);
    WorkWithUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workwithus',
            template: __webpack_require__(/*! ./workwithus.html */ "./src/app/cards/components/workwithus/workwithus.html"),
            styles: [__webpack_require__(/*! ./workwithus.scss */ "./src/app/cards/components/workwithus/workwithus.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_2__["CustomCardService"]])
    ], WorkWithUsComponent);
    return WorkWithUsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/workwithus/workwithus.html":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/workwithus/workwithus.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"work-with-us\">\n  <h1>{{ workWithUsTitle.title }}</h1>\n  <p>{{ workWithUsSubtitle.title }}</p>\n  <a class=\"btn btn-primary\" href=\"contact-us\">{{ workWithUsButton.title_bottom }}</a>\n  <hr>\n  <p class=\"text1\">o si lo desea</p>\n  <div [innerHTML]= workWithUsThirdText class=\"text2\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/components/workwithus/workwithus.scss":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/workwithus/workwithus.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#work-with-us {\n  display: block;\n  margin-top: 65px;\n  text-align: center;\n  color: #002b49; }\n  #work-with-us h1 {\n    font-size: 40px;\n    text-transform: none;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    letter-spacing: -2px; }\n  #work-with-us p {\n    font-size: 20px;\n    margin-top: 11px;\n    margin-bottom: 30px; }\n  @media (min-width: 1025px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  #work-with-us a.btn-primary {\n    background-color: #a6cf24;\n    border-color: #a6cf24;\n    opacity: 0.75;\n    border-radius: 0;\n    width: 292px;\n    font-size: 20px;\n    height: 45px;\n    margin-bottom: 12px; }\n  @media (min-width: 1025px) {\n      #work-with-us a.btn-primary {\n        margin-bottom: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us a.btn-primary {\n        margin-bottom: 0; } }\n  #work-with-us .text1 {\n    font-size: 24px;\n    margin-top: 11px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    background-color: #FFFFFF;\n    width: 42%;\n    margin-left: 29%; }\n  @media (min-width: 1025px) {\n      #work-with-us .text1 {\n        width: 12%;\n        margin-left: 44%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us .text1 {\n        width: 17%;\n        margin-left: 42%; } }\n  #work-with-us hr {\n    background: linear-gradient(-90deg, #FFFFFF, #a6cf24, #a6cf24, #FFFFFF);\n    height: 1px;\n    width: 80%;\n    position: absolute;\n    margin-top: 31px;\n    left: 10%; }\n  @media (min-width: 1025px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  #work-with-us .text2 {\n    margin-bottom: 67px; }\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer-block\">\n    <div class=\"blue-layer\"></div>\n    <div class=\"general-container footer-img\">\n        <section class=\"first-info-container-footer\">\n            <div class=\"row row-info-footer\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 locations\" >\n                    <app-footer-block class=\"locations-container\"></app-footer-block>\n                </div>\n                <div class=\"col-sm-12 col-md-12 col-lg-2 col-xl-2 newsletters\">\n                    <app-footer-newsletter></app-footer-newsletter>\n                </div>\n                <div class=\"col-sm-12 col-md-12 col-lg-2 col-xl-2 contact\">\n                    <app-footer-contact></app-footer-contact>\n                </div>\n                <div class=\"col-sm-12 col-md-12 col-lg-2 col-xl-2 iconbits\">\n                    <app-footer-brand></app-footer-brand>\n                </div>\n            </div>\n        </section>\n        <section class=\"second-info-container-footer\">\n            <div class=\"second-blue-layer\"></div>\n            <div class=\"row row-info-footer\">\n                <div class=\"col-12 list-of-footer\">\n                    <a class=\"items-footer\" href=\"#\">politicas</a>\n                    <div class=\"circule\"></div>\n                    <a class=\"items-footer\" href=\"#\">Mapa del sitio</a>\n                    <div class=\"circule\"></div>\n                    <a class=\"items-footer\" href=\"#\">PQRS</a>\n                </div>\n            </div>\n        </section>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block {\n  position: relative; }\n  #footer-block .blue-layer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 43, 73, 0.82); }\n  #footer-block .general-container.footer-img {\n    background-image: url(\"/assets/images/footer.png\");\n    background-size: cover; }\n  @media (max-width: 667px) {\n      #footer-block .general-container.footer-img {\n        background-position: top right; } }\n  #footer-block .general-container.footer-img .first-info-container-footer {\n      margin: 0; }\n  #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer {\n        margin: 0; }\n  #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .locations,\n        #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .newsletters,\n        #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .contact,\n        #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .iconbits {\n          margin: 24px 0 0 0; }\n  #footer-block .general-container.footer-img .second-info-container-footer {\n      width: 100%; }\n  #footer-block .general-container.footer-img .second-info-container-footer .second-blue-layer {\n        position: absolute;\n        width: 100%;\n        height: 47px;\n        background: rgba(0, 43, 73, 0.6); }\n  #footer-block .general-container.footer-img .second-info-container-footer .row-info-footer {\n        margin: 0;\n        height: 47px;\n        align-items: center; }\n  #footer-block .general-container.footer-img .second-info-container-footer .row-info-footer .list-of-footer {\n          text-align: center; }\n  #footer-block .general-container.footer-img .second-info-container-footer .row-info-footer .list-of-footer .items-footer {\n            font-family: Open Sans light;\n            font-size: 11px;\n            display: inline-block;\n            text-decoration: none;\n            color: white; }\n  #footer-block .general-container.footer-img .second-info-container-footer .row-info-footer .list-of-footer .items-footer:hover {\n              color: #d8d8dc; }\n  #footer-block .general-container.footer-img .second-info-container-footer .row-info-footer .list-of-footer .circule {\n            margin: 0 20px;\n            display: inline-block;\n            background: white;\n            width: 4px;\n            height: 4px;\n            border-radius: 50%; }\n  @media only screen and (max-width: 768px) {\n  #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer {\n    margin: 0 87px; }\n    #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .locations,\n    #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .newsletters,\n    #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .contact {\n      padding: 0;\n      margin: 0;\n      border-right: 0px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n    #footer-block .general-container.footer-img .first-info-container-footer .row-info-footer .iconbits {\n      padding: 0;\n      margin: 0; } }\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <section class=\"logo\">\n        <div class=\"container-logo\">\n            <a routerLink=\"/home\" class=\"image-url\">\n                <img class=\"image-bits blur-logo\" src=\"assets/images/Logowhite.png\" alt=\"BitsAmericas\">\n            </a>\n        </div>\n    </section>\n    <app-navbar #navBar ></app-navbar>\n</header>"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  z-index: 10; }\n  header .logo {\n    width: 15%;\n    position: fixed;\n    z-index: 1022; }\n  header .logo .container-logo {\n      width: 100%;\n      padding-left: 40%;\n      padding-top: 5%;\n      position: relative;\n      z-index: 100; }\n  @media (min-width: 300px) and (max-width: 1024px) {\n        header .logo .container-logo {\n          padding-top: 20%; } }\n  header .logo .container-logo .image-url {\n        width: 100%;\n        position: relative;\n        left: 28%; }\n  header .logo .container-logo .image-url img {\n          width: 90px; }\n  @media (min-width: 1025px) {\n            header .logo .container-logo .image-url img {\n              width: 100%;\n              padding-left: 4%;\n              padding-top: 2%; } }\n  header .inverse-color {\n  background: #ffffff; }\n  header .tigger-menu {\n  background: #ffffff;\n  color: #002b49; }\n  header nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav {\n    padding-top: 0%;\n    width: 100%;\n    position: fixed; } }\n  @media (min-width: 1025px) {\n  header nav {\n    float: right;\n    padding-top: 0%;\n    width: 100%;\n    position: fixed;\n    text-align: right; } }\n  header nav .menuToggle {\n  display: block;\n  position: relative;\n  width: 100%;\n  z-index: 1; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle {\n    top: 22px; } }\n  header nav .menuToggle .Botton {\n  display: block;\n  width: 22%;\n  height: auto;\n  position: absolute;\n  left: 75%;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2; }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .Botton {\n    display: none; } }\n  header nav .menuToggle .Botton:checked ~ .lines {\n  opacity: 1;\n  -webkit-transform: rotate(45deg) translate(1px, 0px);\n          transform: rotate(45deg) translate(1px, 0px);\n  background: #0c7ffb; }\n  header nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n  opacity: 0;\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n          transform: rotate(0deg) scale(0.2, 0.2); }\n  header nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n  opacity: 1;\n  -webkit-transform: rotate(-45deg) translate(1px, 2px);\n          transform: rotate(-45deg) translate(1px, 2px); }\n  header nav .menuToggle .Botton:checked ~ .list-menu {\n  display: block;\n  -webkit-transform: none;\n          transform: none; }\n  header nav .menuToggle .lines {\n  display: block;\n  width: 26px;\n  height: 2.4px;\n  margin-bottom: 5px;\n  margin-left: 81%;\n  position: relative;\n  background: #ffffff;\n  border-radius: 30%;\n  z-index: 1;\n  -webkit-transform-origin: 4px 0px;\n          transform-origin: 4px 0px;\n  transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .lines {\n    display: none; } }\n  header nav .menuToggle .color-scroll {\n  background: #0c7ffb; }\n  header nav .menuToggle .lines:first-child {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%; }\n  header nav .menuToggle .lines:nth-last-child(2) {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  margin-bottom: 8%; }\n  header nav .menuToggle ul {\n  margin-bottom: 0; }\n  header nav .menuToggle .list-menu {\n  padding-left: 0%;\n  width: 100%;\n  position: relative;\n  display: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu {\n    display: block;\n    -webkit-transform: initial;\n            transform: initial;\n    transition-delay: initial; } }\n  header nav .menuToggle .list-menu .items {\n  list-style: none;\n  padding-bottom: 7%;\n  padding-top: 7%;\n  padding-left: 12%;\n  border-bottom: 1px solid #f5fafc; }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items {\n    width: 8%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 0%;\n    padding-right: 0%;\n    border-bottom: initial;\n    display: inline-block; } }\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n  border-top: 1px solid #cfe3ee; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; } }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; } }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(7) {\n    padding-right: 3%; } }\n  header nav .menuToggle .list-menu .items .scroll-white {\n  color: #002b49; }\n  header nav .menuToggle .list-menu .language {\n  list-style: none; }\n  header .logo {\n  width: 15%;\n  position: fixed;\n  z-index: 1022; }\n  header .logo .container-logo {\n  width: 100%;\n  padding-left: 50%;\n  padding-top: 28%;\n  position: relative;\n  z-index: 100; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header .logo .container-logo {\n    padding-top: 20%; } }\n  @media (min-width: 1025px) {\n  header .logo .container-logo {\n    padding-top: 4%;\n    padding-left: 43%; } }\n  header .logo .container-logo .image-url {\n  width: 100%;\n  position: relative;\n  left: 28%; }\n  header .logo .container-logo .image-url img {\n  width: 90px; }\n  @media (min-width: 1025px) {\n  header .logo .container-logo .image-url img {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 2%; } }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var count = 0;
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document) {
        this.document = document;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $('.Botton').on('click', function () {
            count = count + 1; // Numero Impar = menu abierto ; Numero par = menu cerrado
            if (count % 2 === 0) {
                console.log('par');
                //PAR MENU CERRADO
                $('html').css('overflow', 'auto');
                if (window.scrollY === 0) {
                    $('.blur-logo').attr('src', 'assets/images/Logowhite.png');
                    $('.arrow-down-change-color').css({ color: '#002b49' });
                    $('.lines').css({ background: '#fff' });
                }
            }
            else {
                console.log('impar');
                //IMPAR = MENU ABIERTO 
                $('html').css('overflow', 'hidden');
                if (window.scrollY === 0) {
                    $('.blur-logo').attr('src', 'assets/images/Logocolor.png');
                    $('.arrow-down-change-color').css({ color: '#002b49' });
                    $('.lines').css({ background: '#002b49' });
                }
            }
        });
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        if (window.scrollY > 0) {
            if (count) {
            }
            $('.image-bits').attr('src', 'assets/images/Logocolor.png');
            $('.lines').css({ background: '#002b49' });
            $('.arrow-down-change-color').css({ color: '#002b49' });
        }
        else {
            $('.image-bits').attr('src', 'assets/images/Logowhite.png');
            $('.lines').css({ background: '#fff' });
            $('.arrow-down-change-color').css({ color: '#fff' });
        }
        // if ($('.image-bits').offset().top > 40) {
        //   $('.image-bits').attr('src', 'assets/images/Logocolor.png');
        //   $('.arrow-down-change-color').css({color: '#002b49'});
        // } else {
        //   $('.image-bits').attr('src', 'assets/images/Logowhite.png');
        //     $('.arrow-down-change-color').css({color: '#fff'});
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/item_menu/item_menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/item_menu/item_menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu-tree-level custmulcol-{{col}} customulrow-{{row}} {{flActiveActual ? 'visible-in-mobile' : 'invisible-in-mobile'}}\" [style.backgroundImage]=\"image != undefined ? 'url(' + image + ')' : 'url(no-existe.png)'\"  (window:resize)=\"onResize()\" [ngStyle]=\"{'top': row === 2 ? heightTop : '0px'}\">\n    <ng-container *ngFor=\"let child of menus; let idx= index\" >\n        <li class=\"menu-item-child index-{{idx}} custmcol-{{col}} customrow-{{row}}\" [ngClass]=\"{'active-ul': child.showrow === true}\" >\n            <a [routerLink]=\"['/'+child.uri]\"\n               class=\"link\">\n                <span class=\"title\">{{ child.title }}</span>\n                <span class=\"description\">{{ child.description }}</span>\n            </a>\n            <ng-container *ngIf=\"child.below\">\n                <i class=\"fas fa-angle-right menu-caret\" (click)=\"activeChild(idx)\" *ngIf=\"desktop\"></i>\n                <i class=\"fas fa-caret-down menu-caret fa-caret-down-item-menu\" (click)=\"activeChild(idx)\" *ngIf=\"mobile\"></i>\n                <app-menu-item [menus]=\"child.below\" [col]=\"col\" [row]=\"row+1\" [image]='child.image' [flActiveActual]=\"getActiveChild(idx)\" (addchild)=\"activeChild($event)\" ></app-menu-item>\n            </ng-container>\n            <ng-container *ngIf=\"padre?.image\">\n                <img [src]=\"padre.image\" class=\"submenu-image\"/>\n            </ng-container>\n        </li>\n    </ng-container>\n</ul>"

/***/ }),

/***/ "./src/app/layout/components/item_menu/item_menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/item_menu/item_menu.component.ts ***!
  \********************************************************************/
/*! exports provided: ItemMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMenuComponent", function() { return ItemMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemMenuComponent = /** @class */ (function () {
    function ItemMenuComponent() {
        this.addchild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flActiveChilds = [];
        this.flActiveActual = false;
    }
    ItemMenuComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    ItemMenuComponent.prototype.onResize = function () {
        if (window.innerWidth > 1080) {
            this.heightTop = $('.list-menu').height() + 1 + 'px';
            this.mobile = false;
            this.desktop = true;
        }
        else {
            this.heightTop = '0px';
            this.mobile = true;
            this.desktop = false;
        }
    };
    ItemMenuComponent.prototype.activeChild = function (idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        this.flActiveChilds[idx] = !this.flActiveChilds[idx];
        //this.addchild.emit(info);
        //return this.navBar.activeChild(event, col, row);
    };
    ItemMenuComponent.prototype.getActiveChild = function (idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        return this.flActiveChilds[idx];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemMenuComponent.prototype, "addchild", void 0);
    ItemMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            inputs: ['padre', 'menus', 'col', 'row', 'image', 'flActiveActual'],
            selector: 'app-menu-item',
            template: __webpack_require__(/*! ./item_menu.component.html */ "./src/app/layout/components/item_menu/item_menu.component.html")
        })
    ], ItemMenuComponent);
    return ItemMenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"block-navbar\">\n    <nav class=\"navbar-expand-lg flex-column flex-md-row  menu-scroll shadow-of-nav\">\n        <div class=\"menuToggle menu-scroll \">\n            <input type=\"checkbox\" class=\"Botton\"/>\n            <span class=\"lines\"></span>\n            <span class=\"lines\"></span>\n            <span class=\"lines\"></span>\n            <ul class=\"list-menu\">\n                <ng-container *ngFor=\"let nav of NavbarArray; let i= index \">\n                    <li class=\"items customrow-1\" [class.menu-has-children]=\"nav.below\" (mouseover)='menuOver($event)' (mouseleave)='menuOut($event)'>\n                        <a #sub [routerLink]=\"nav.showrow ? ['/'+nav.uri] : null\" [routerLinkActive]=\"'active'\" class=\"link\"> \n                            {{ nav.title }} \n                        </a>\n                        <ng-container *ngIf=\"nav.below\">\n                            <i class=\"fas fa-caret-down menu-caret arrow-down-change-color\" (click)=\"activeChild(i)\" ></i>\n                            <app-menu-item [padre]=\"nav\" [menus]=\"nav.below\" [col]=\"i\" [row]=\"2\" (addchild)=\"activeChild($event)\" [flActiveActual]=\"getActiveChild(i)\" *ngIf=\"nav.below\"></app-menu-item>\n                        </ng-container>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n    </nav>\n</section>"

/***/ }),

/***/ "./src/app/layout/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#block-navbar .inverse-color {\n  background: #ffffff; }\n\n#block-navbar .color-white {\n  background: #ffffff; }\n\n#block-navbar nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #block-navbar nav {\n      padding-top: 0%;\n      width: 100%;\n      position: fixed; } }\n\n@media (min-width: 1025px) {\n    #block-navbar nav {\n      float: right;\n      padding-top: 0%;\n      width: 100%;\n      position: fixed;\n      text-align: right; } }\n\n#block-navbar nav .menuToggle {\n    display: block;\n    position: relative;\n    width: 100%;\n    z-index: 1; }\n\n@media only screen and (max-width: 1080px) {\n      #block-navbar nav .menuToggle {\n        padding-top: 1%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #block-navbar nav .menuToggle {\n        top: 38px; } }\n\n#block-navbar nav .menuToggle .Botton {\n      display: block;\n      width: 22%;\n      height: auto;\n      position: absolute;\n      left: 75%;\n      cursor: pointer;\n      opacity: 0;\n      z-index: 2; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .Botton {\n          display: none; } }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines {\n      opacity: 1;\n      -webkit-transform: rotate(45deg) translate(1px, 0px);\n              transform: rotate(45deg) translate(1px, 0px);\n      background: #0c7ffb; }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n      opacity: 0;\n      -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n              transform: rotate(0deg) scale(0.2, 0.2); }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n      opacity: 1;\n      -webkit-transform: rotate(-45deg) translate(1px, 2px);\n              transform: rotate(-45deg) translate(1px, 2px); }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .list-menu {\n      display: block;\n      -webkit-transform: none;\n              transform: none; }\n\n#block-navbar nav .menuToggle .lines {\n      display: block;\n      width: 26px;\n      height: 2.4px;\n      margin-bottom: 5px;\n      margin-left: 81%;\n      position: relative;\n      background: #ffffff;\n      border-radius: 30%;\n      z-index: 1;\n      -webkit-transform-origin: 4px 0px;\n              transform-origin: 4px 0px;\n      transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .lines {\n          display: none; } }\n\n#block-navbar nav .menuToggle .lines:first-child {\n      -webkit-transform-origin: 0% 0%;\n              transform-origin: 0% 0%; }\n\n#block-navbar nav .menuToggle .lines:nth-last-child(2) {\n      -webkit-transform-origin: 0% 100%;\n              transform-origin: 0% 100%;\n      margin-bottom: 8%; }\n\n#block-navbar nav .menuToggle ul {\n      margin-bottom: 0; }\n\n#block-navbar nav .menuToggle .list-menu {\n      padding-left: 0%;\n      width: 100%;\n      position: relative;\n      display: none;\n      -webkit-font-smoothing: antialiased;\n      -webkit-transform: translate(0, -100%);\n              transform: translate(0, -100%);\n      transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .list-menu {\n          display: flex;\n          justify-content: flex-end;\n          -webkit-transform: initial;\n                  transform: initial;\n          transition-delay: initial; } }\n\n#block-navbar nav .menuToggle .list-menu .items {\n        cursor: pointer;\n        list-style: none;\n        padding-bottom: 7%;\n        padding-top: 7%;\n        padding-left: 12%;\n        border-bottom: 1px solid #f5fafc; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle .list-menu .items {\n            width: 9%;\n            text-align: center;\n            padding-top: 2%;\n            padding-bottom: 2%;\n            padding-left: 0%;\n            padding-right: 0%;\n            border-bottom: initial;\n            display: inline-block; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle .list-menu .items {\n            padding: 0px;\n            width: 100%; } }\n\n#block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n          border-top: 1px solid #cfe3ee; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\n#block-navbar nav .menuToggle .list-menu .items:hover i {\n          color: #a6cf24 !important; }\n\n#block-navbar nav .menuToggle .list-menu .items:hover .link {\n          color: #a6cf24;\n          text-decoration: none; }\n\n#block-navbar nav .menuToggle .list-menu .items .link {\n          color: #002b49;\n          width: 100%;\n          text-decoration: none;\n          text-align: left;\n          padding-right: 73%;\n          font-size: 15px;\n          font-family: 'Open Sans light';\n          font-weight: 300; }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              display: block; } }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              color: #ffffff;\n              padding-left: 12%;\n              padding-right: 15%;\n              padding-top: 20%; } }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              padding: 20px;\n              width: 100%; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link .arrow {\n            padding-left: 59%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 6%; } }\n\n@media (min-width: 1025px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 0%;\n                padding-right: 0%;\n                padding-top: 0%; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n            padding-left: 61.2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 7.2%; } }\n\n@media (min-width: 1025px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 0%; } }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle .list-menu .items .active {\n            border-top: 4px solid #a6cf24; } }\n\n#block-navbar nav .menuToggle .list-menu .items .scroll-white {\n          color: #002b49;\n          background: white; }\n\n#block-navbar nav .menuToggle .list-menu .items .tigger-menu {\n          background: #ffffff;\n          color: #002b49; }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .tigger-menu {\n              border-bottom: 1px solid #eef6f9; } }\n\n#block-navbar nav .menuToggle .list-menu .language {\n        list-style: none; }\n\n#block-navbar nav .menuToggle /deep/ li {\n      position: relative; }\n\n#block-navbar nav .menuToggle /deep/ li .menu-caret {\n        display: block; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n            font-size: 10px;\n            position: absolute;\n            right: 35px;\n            bottom: 46px;\n            color: #fff; } }\n\n@media (min-width: 1025px) and (max-width: 1281px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 12px;\n      bottom: 31px; } }\n\n@media (min-width: 1025px) and (min-width: 1282px) and (max-width: 1367px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 14px;\n      bottom: 34px; } }\n\n@media (min-width: 1025px) and (min-width: 1368px) and (max-width: 1441px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 16px;\n      bottom: 35px; } }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-angle-right {\n            color: #002b49;\n            font-size: 13px;\n            position: absolute;\n            right: 18px;\n            bottom: 18px;\n            transition: 0.5s ease all; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret {\n            position: absolute;\n            right: 10px;\n            top: 8px;\n            width: 45px;\n            height: 45px;\n            box-sizing: border-box;\n            padding: 15px 18px; }\n            #block-navbar nav .menuToggle /deep/ li .menu-caret.fa-caret-down-item-menu {\n              top: 2px; } }\n\n#block-navbar nav .menuToggle /deep/ .customrow-1 ul {\n      display: none; }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ .customrow-1 ul.invisible-in-mobile {\n          display: none; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ .customrow-1 ul.visible-in-mobile {\n          display: block; } }\n\n#block-navbar nav .menuToggle /deep/ li:hover > app-menu-item > ul {\n      display: block; }\n\n#block-navbar nav .menuToggle /deep/ li:hover > app-menu-item > ul li:hover i.fa-angle-right {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        transition: 0.5s ease all; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n      list-style-type: none;\n      position: absolute;\n      padding: 0px;\n      right: 0px; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n          margin-top: -2px; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n          position: relative;\n          bottom: 0; } }\n\n@media (max-width: 1080px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 {\n          border: 1px solid #f5fafc; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2:hover > i {\n        color: #a6cf24; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2:hover > a.link {\n        text-decoration: none;\n        color: #a6cf24; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n        border-bottom: 1px solid #cecece;\n        padding: 12px;\n        padding-left: 11px;\n        text-align: left;\n        background: #fff;\n        display: block;\n        font-family: Open Sans;\n        font-size: 15px;\n        font-weight: 400;\n        color: #002b49;\n        min-height: 38px;\n        height: 49px; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n            width: 251px; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n            padding-left: 45px;\n            font-family: Open Sans Light;\n            border: 0;\n            border-bottom: 1px solid #eef6f9; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > img {\n        display: none; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n      border: 1px solid #cecece;\n      list-style-type: none;\n      padding: 0;\n      position: relative; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3::before {\n          content: '';\n          display: block;\n          background-image: url(\"/assets/images/MenuLuzDiagonal.png\");\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0; } }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n          width: 430px;\n          background: #fff;\n          top: 0;\n          background-size: cover;\n          background-position: bottom right;\n          background-repeat: no-repeat;\n          position: absolute;\n          right: 194px;\n          height: 245px;\n          left: -431px; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n          border: 0; } }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 {\n          text-align: left;\n          height: 61px;\n          width: 50%;\n          float: left; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n        font-family: Open Sans;\n        font-size: 15px;\n        color: #002b49;\n        display: block;\n        background-color: transparent; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n            color: #333;\n            padding: 9px; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n            padding-left: 76px;\n            padding-top: 15px;\n            font-family: Open Sans Light;\n            border: 0;\n            text-align: left;\n            background: #fff;\n            display: block;\n            font-size: 15px;\n            font-weight: 400;\n            color: #002b49;\n            min-height: 38px;\n            height: 49px;\n            border-bottom: 1px solid #eef6f9; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .title {\n            color: #002b49;\n            font-size: 15px; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .description {\n          display: none;\n          font-family: Open Sans Light;\n          font-size: 13px;\n          color: #002b49; }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .description {\n              display: block; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link:hover {\n          text-decoration: none; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link:hover span.title {\n            color: #a6cf26; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 .title {\n        font-weight: normal;\n        font-size: 13px;\n        color: #333;\n        display: block; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 .description {\n        font-weight: normal;\n        font-size: 10px;\n        color: #777;\n        display: block;\n        padding-left: 14px;\n        line-height: 15px; }\n\n#block-navbar .shadow-if-exit-scroll {\n  box-shadow: 0 2px 2px #d1d1d1; }\n\napp-navbar /deep/ .menu-item-child .a {\n  text-decoration: none; }\n\napp-navbar /deep/ .menu-item-child .menu-tree-level {\n  list-style-type: none;\n  display: none; }\n\napp-navbar /deep/ .menu-item-child .menu-has-children:hover > app-menu-item > .menu-tree-level {\n  display: block; }\n\napp-navbar /deep/ .menu-item-child .fa-angle-right {\n  color: #002b49; }\n\napp-navbar /deep/ .menu-item-child .locations-container {\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_layout_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/layout/navbar.service */ "./src/app/services/layout/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, navbar) {
        this.router = router;
        this.navbar = navbar;
        this.positionChild = 1;
        this.resolution = 'desktop';
        this.flActiveChilds = [];
        this.onResize({});
    }
    NavbarComponent.prototype.ngOnInit = function () {
        $('.Botton, .show-more').on('click', function () {
            $('.menu-scroll, .link').toggleClass('tigger-menu scroll-white color-white');
        });
        $(window).scroll(function () {
            if (window.scrollY > 0) {
                $('.menu-scroll, .link').addClass('inverse-color color-scroll scroll-white');
                $('.lines').css({ background: '#002b49' });
                $('.shadow-of-nav').addClass('shadow-if-exit-scroll');
            }
            else {
                $('.menu-scroll, .link').removeClass('inverse-color color-scroll scroll-white');
                $('.lines').css({ background: '#ffffff' });
                $('.shadow-of-nav').removeClass('shadow-if-exit-scroll');
            }
            // if ($('.menu-scroll, .lines, .link').offset().top > 10) {
            //     $('.menu-scroll, .lines, .link').addClass('inverse-color color-scroll scroll-white');
            //     $('.shadow-of-nav').addClass('shadow-if-exit-scroll');
            // } else {
            //     $('.menu-scroll, .lines, .link').removeClass('inverse-color color-scroll scroll-white');
            //     $('.shadow-of-nav').removeClass('shadow-if-exit-scroll');
            // }
        });
        this.getNavBarItems();
    };
    NavbarComponent.prototype.getNavBarItems = function () {
        var _this = this;
        return this.navbar.getMenuItems().subscribe(function (items) {
            _this.NavbarArray = items;
            _this.NavbarArray = _this.addIdForColToNavbar(_this.NavbarArray, 1, 1);
        });
    };
    NavbarComponent.prototype.addIdForColToNavbar = function (navbarArray, posCol, posRow) {
        for (var i in navbarArray) {
            navbarArray[i].posCol = posCol;
            navbarArray[i].posRow = posRow;
            if (posRow == 1) {
                navbarArray[i].showrow = true;
            }
            else {
                navbarArray[i].showrow = false;
            }
            if (navbarArray[i].below) {
                navbarArray.below = this.addIdForColToNavbar(navbarArray[i].below, i, posRow + 1);
            }
        }
        return navbarArray;
    };
    NavbarComponent.prototype.activeChild = function (idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        this.flActiveChilds[idx] = !this.flActiveChilds[idx];
        //this.addchild.emit(info);
        //return this.navBar.activeChild(event, col, row);
    };
    NavbarComponent.prototype.getActiveChild = function (idx) {
        if (!this.flActiveChilds[idx]) {
            this.flActiveChilds[idx] = false;
        }
        return this.flActiveChilds[idx];
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($('body').width() < 1025) {
            this.resolution = 'mobile';
        }
        else {
            this.resolution = 'desktop';
        }
    };
    NavbarComponent.prototype.menuOver = function (event) {
        $('.hover-menu-dark-layout').removeClass('hide');
        $('.hover-menu-dark-layout').css('height', document.getElementById('main-wrapper').scrollHeight + 'px');
    };
    NavbarComponent.prototype.menuOut = function ($event) {
        $('.hover-menu-dark-layout').addClass('hide');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layout/components/navbar/navbar.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_layout_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_item_menu_item_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/item_menu/item_menu.component */ "./src/app/layout/components/item_menu/item_menu.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/layout/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/layout/components/navbar/navbar.component.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cards_components_footer_footer_brand_footer_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/components/footer/footer-brand/footer-brand.component */ "./src/app/cards/components/footer/footer-brand/footer-brand.component.ts");
/* harmony import */ var _cards_components_footer_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cards/components/footer/footer-contact/footer-contact.component */ "./src/app/cards/components/footer/footer-contact/footer-contact.component.ts");
/* harmony import */ var _cards_components_footer_footer_newsletter_footer_newsletter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cards/components/footer/footer-newsletter/footer-newsletter.component */ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.ts");
/* harmony import */ var _cards_components_generator_of_links_generator_of_links_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/components/generator-of-links/generator-of-links.component */ "./src/app/cards/components/generator-of-links/generator-of-links.component.ts");
/* harmony import */ var _cards_components_footer_footer_block_footer_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cards/components/footer/footer-block/footer-block */ "./src/app/cards/components/footer/footer-block/footer-block.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
            ],
            declarations: [
                _components_item_menu_item_menu_component__WEBPACK_IMPORTED_MODULE_1__["ItemMenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _cards_components_footer_footer_brand_footer_brand_component__WEBPACK_IMPORTED_MODULE_6__["FooterBrandComponent"],
                _cards_components_footer_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_7__["FooterContactComponent"],
                _cards_components_footer_footer_newsletter_footer_newsletter_component__WEBPACK_IMPORTED_MODULE_8__["FooterNewsletterComponent"],
                _cards_components_generator_of_links_generator_of_links_component__WEBPACK_IMPORTED_MODULE_9__["GeneratorOfLinksComponent"],
                _cards_components_footer_footer_block_footer_block__WEBPACK_IMPORTED_MODULE_10__["FooterBlockComponent"],
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/main/pages/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner imgFondo=\"/assets/images/cabezerainternaweb.png\" uuid=\"e58b3214-c259-4bd2-b6ba-2f81c9ba86b4\"></app-banner>\n<app-whybitsamericas></app-whybitsamericas>\n<app-carousel-controls></app-carousel-controls>\n<app-alliances></app-alliances>\n<app-history></app-history>\n<app-knowus></app-knowus>\n<app-workwithus-proserv></app-workwithus-proserv>"

/***/ }),

/***/ "./src/app/main/pages/about-us/about-us.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/about-us/about-us.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/main/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/main/pages/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner uuid = \"39ce2484-2be2-470b-9768-fed85f14bc87\" imgFondo=\"\"></app-banner>\n<app-title></app-title>\n<app-tabs></app-tabs>\n<app-separator [iconCustom]=\"'icon-location'\"></app-separator>\n<app-locations></app-locations>\n\n"

/***/ }),

/***/ "./src/app/main/pages/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/main/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/main/pages/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/pages/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-float-social></app-float-social>\n<app-carousel-indicators></app-carousel-indicators>\n<app-porque-bits></app-porque-bits>\n<app-product-services></app-product-services>\n<app-carousel-item-2></app-carousel-item-2>\n<app-tecnologies></app-tecnologies>\n<app-carousel-controls></app-carousel-controls>\n<app-alliances></app-alliances>\n<app-workwithus-proserv></app-workwithus-proserv>\n"

/***/ }),

/***/ "./src/app/main/pages/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/pages/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/pages/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/main/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/no-page-found/no-page-found.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/no-page-found/no-page-found.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagenotfound\">\n    <img src=\"assets/images/nopagefound.png\">\n</div>"

/***/ }),

/***/ "./src/app/main/pages/no-page-found/no-page-found.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/pages/no-page-found/no-page-found.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagenotfound {\n  margin: 0 auto;\n  width: 1200px; }\n\n.pagenotfound img {\n  width: 1200px; }\n"

/***/ }),

/***/ "./src/app/main/pages/no-page-found/no-page-found.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/pages/no-page-found/no-page-found.component.ts ***!
  \*********************************************************************/
/*! exports provided: NoPageFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageFoundComponent", function() { return NoPageFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoPageFoundComponent = /** @class */ (function () {
    function NoPageFoundComponent() {
    }
    NoPageFoundComponent.prototype.ngOnInit = function () {
    };
    NoPageFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-page-found',
            template: __webpack_require__(/*! ./no-page-found.component.html */ "./src/app/main/pages/no-page-found/no-page-found.component.html"),
            styles: [__webpack_require__(/*! ./no-page-found.component.scss */ "./src/app/main/pages/no-page-found/no-page-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoPageFoundComponent);
    return NoPageFoundComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/pages.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/pages/pages.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading id=\"page-loader\" [hidden]=\"!loading\"></app-loading>\n<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n\n    <app-header></app-header>\n    <div class=\"hover-menu-dark-layout hide\"></div>\n    <!-- ============================================================== -->\n    <!-- Page wrapper  -->\n    <!-- ============================================================== -->\n    <div class=\"page-wrapper\">\n\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"\">\n\n\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n\n            <router-outlet></router-outlet>\n\n            <!-- ============================================================== -->\n            <!-- End Page Content -->\n            <!-- ============================================================== -->\n\n        </div>\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n\n\n    </div>\n    <!-- ============================================================== -->\n    <!-- END Page wrapper  -->\n    <!-- ============================================================== -->\n     <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/main/pages/pages.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/pages/pages.component.ts ***!
  \***********************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iniciarCarga();
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/main/pages/pages.component.html")
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/pages.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/pages/pages.module.ts ***!
  \********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.routes */ "./src/app/main/pages/pages.routes.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _adf_adf_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@adf/adf.module */ "./src/app/@adf/adf.module.ts");
/* harmony import */ var _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cards/cards.module */ "./src/app/cards/cards.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.component */ "./src/app/main/pages/pages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/pages/home/home.component.ts");
/* harmony import */ var _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no-page-found/no-page-found.component */ "./src/app/main/pages/no-page-found/no-page-found.component.ts");
/* harmony import */ var _cards_components_product_services_product_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cards/components/product-services/product-services.component */ "./src/app/cards/components/product-services/product-services.component.ts");
/* harmony import */ var _cards_components_float_social_float_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../cards/components/float-social/float-social.component */ "./src/app/cards/components/float-social/float-social.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/main/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/main/pages/projects/projects.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/main/pages/products/products.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/services.component */ "./src/app/main/pages/services/services.component.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_ui_basic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-dynamic-forms/ui-basic */ "./node_modules/@ng-dynamic-forms/ui-basic/fesm5/ui-basic.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _products_or_services_products_or_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products-or-services/products-or-services.component */ "./src/app/main/pages/products-or-services/products-or-services.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/main/pages/politics/politics.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/main/pages/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_9__["NoPageFoundComponent"],
                _cards_components_product_services_product_services_component__WEBPACK_IMPORTED_MODULE_10__["ProductServicesComponent"],
                _cards_components_float_social_float_social_component__WEBPACK_IMPORTED_MODULE_11__["FloatSocialComponent"],
                _products_or_services_products_or_services_component__WEBPACK_IMPORTED_MODULE_21__["ProductsOrServicesComponent"],
                _politics_politics_component__WEBPACK_IMPORTED_MODULE_22__["PoliticsComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsComponent"]
            ],
            exports: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_9__["NoPageFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _adf_adf_module__WEBPACK_IMPORTED_MODULE_4__["AdfModule"],
                _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_2__["PagesRoutes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_17__["DynamicFormsCoreModule"],
                _ng_dynamic_forms_ui_basic__WEBPACK_IMPORTED_MODULE_18__["DynamicFormsBasicUIModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_20__["HttpModule"]
            ],
            providers: [
                _services_http_http_service__WEBPACK_IMPORTED_MODULE_16__["HttpService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PathLocationStrategy"] }
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/main/pages/pages.routes.ts":
/*!********************************************!*\
  !*** ./src/app/main/pages/pages.routes.ts ***!
  \********************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/main/pages/pages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/pages/home/home.component.ts");
/* harmony import */ var _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-page-found/no-page-found.component */ "./src/app/main/pages/no-page-found/no-page-found.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/main/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/main/pages/projects/projects.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/main/pages/products/products.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/main/pages/services/services.component.ts");
/* harmony import */ var _products_or_services_products_or_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-or-services/products-or-services.component */ "./src/app/main/pages/products-or-services/products-or-services.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/main/pages/politics/politics.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/main/pages/about-us/about-us.component.ts");











var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
            { path: 'product/:type', component: _products_or_services_products_or_services_component__WEBPACK_IMPORTED_MODULE_8__["ProductsOrServicesComponent"] },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
            { path: 'service/:type', component: _products_or_services_products_or_services_component__WEBPACK_IMPORTED_MODULE_8__["ProductsOrServicesComponent"] },
            { path: 'politics', component: _politics_politics_component__WEBPACK_IMPORTED_MODULE_9__["PoliticsComponent"] },
            { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"] },
            { path: '**', component: _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_3__["NoPageFoundComponent"] }
            // { path: 'home', component: HomeComponent },
            // { path: '', component: HomeComponent },
            // { path: 'NoPageFoundComponent', component: NoPageFoundComponent },
            // { path: '**', pathMatch: 'full', redirectTo: 'N√oPageFoundComponent' }
            // { path: 'home', component: HomeComponent },
            // { path: '', redirectTo: '/home', pathMatch: 'full' },
            // { path: 'contact-us', component: ContactUsComponent },
            // {path: 'workus', component: WorkusComponent},
            // { path: 'contact-us', redirectTo: '/contact-us' },
            // {path: 'workus', redirectTo: '/workus'},
            // { path: '**', component: NoPageFoundComponent },
        ]
    }
];
var PagesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/main/pages/politics/politics.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/politics/politics.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner uuid=\"2e857290-ddeb-450e-8db6-79dda724be50\" imgFondo=\"\"></app-banner>\n<div class=\"container my-5\">\n    <app-blog [uuid]=\"'b63181f1-38dd-40c9-a993-c4b8d7faf305'\"></app-blog>\n    <app-separator [iconCustom]=\"'icon-location'\"></app-separator>\n    <app-blog [uuid]=\"'c00ea48d-1ce3-4bba-b65e-d57daf71cf4a'\"></app-blog>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/politics/politics.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/politics/politics.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/politics/politics.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/politics/politics.component.ts ***!
  \***********************************************************/
/*! exports provided: PoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsComponent", function() { return PoliticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliticsComponent = /** @class */ (function () {
    function PoliticsComponent() {
    }
    PoliticsComponent.prototype.ngOnInit = function () { };
    PoliticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-politics-page',
            template: __webpack_require__(/*! ./politics.component.html */ "./src/app/main/pages/politics/politics.component.html"),
            styles: [__webpack_require__(/*! ./politics.component.scss */ "./src/app/main/pages/politics/politics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoliticsComponent);
    return PoliticsComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/products-or-services/products-or-services.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/pages/products-or-services/products-or-services.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner [titulo]=\"type\" imgFondo=\"/assets/images/imedicalweb.png\"></app-banner>\n<div class=\"my-5\">\n    <div class=\"container\">\n        <app-client-project-imedical (propagar)=\"onMenu($event)\"></app-client-project-imedical>\n    </div>\n    <hr>\n    <app-menu-template [menuList]=\"listMenu\"></app-menu-template>\n    <app-slider></app-slider>\n    <div class=\"container\">\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-5\">\n                <h1 class=\"condensed text-center\">{{ tituloModulos }}</h1>\n                <p class=\"text-center\" [innerHTML]=\"descripcionModulos\"></p>\n            </div>\n            <div class=\"col-md-4\" *ngFor=\"let blurbItem of blurbArray\">\n                <app-blurb [blurb]=\"blurbItem\" (propagar)=\"onMenu($event)\" [type]=\"type\"></app-blurb>\n            </div>\n        </div>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-card-img-text [orientacion]=\"'IT'\" (propagar)=\"onMenu($event)\" [type]=\"type\"></app-card-img-text>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-tecnologies-projectservice (propagar)=\"onMenu($event)\" [type]=\"type\"></app-tecnologies-projectservice>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-testimonies (propagar)=\"onMenu($event)\"></app-testimonies>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>        \n        <app-achievements (propagar)=\"onMenu($event)\" [type]=\"type\"></app-achievements>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <!-- <app-tecnologies (propagar)=\"onMenu($event)\"></app-tecnologies>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator> -->\n        <app-team (propagar)=\"onMenu($event)\" [type]=\"type\"></app-team>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-card-img-text [orientacion]=\"'TI'\" (propagar)=\"onMenu($event)\" [type]=\"type\"></app-card-img-text>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-client-proserv (propagar)=\"onMenu($event)\" [type]=\"type\"></app-client-proserv>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n        <app-video-information [link]=\"'www.eliseupnorcum.cedu.co'\" (propagar)=\"onMenu($event)\" [type]=\"type\"></app-video-information>\n        <app-separator [iconCustom]=\"'icon-historymedical'\"></app-separator>\n    </div>\n    <app-workwithus (propagar)=\"onMenu($event)\" [type]=\"type\"></app-workwithus>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/products-or-services/products-or-services.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/main/pages/products-or-services/products-or-services.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/products-or-services/products-or-services.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/pages/products-or-services/products-or-services.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductsOrServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsOrServicesComponent", function() { return ProductsOrServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cards/v1-card.services */ "./src/app/services/cards/v1-card.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsOrServicesComponent = /** @class */ (function () {
    function ProductsOrServicesComponent(_http, rutaActiva, service) {
        this._http = _http;
        this.rutaActiva = rutaActiva;
        this.service = service;
        this.blurbArray = [];
        this.listMenu = [];
    }
    ProductsOrServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.rutaActiva.snapshot.params.type;
        this.rutaActiva.params.subscribe(function (params) {
            _this.type = params.type;
        });
        this.getModulesService();
    };
    ProductsOrServicesComponent.prototype.getModulesService = function () {
        var _this = this;
        this._http
            .getCustomCardInformation('moduleinformation')
            .subscribe(function (params) {
            _this.tituloModulos = params.header[0].data.title;
            _this.descripcionModulos = params.header[1].data.title;
            for (var _i = 0, _a = params.data; _i < _a.length; _i++) {
                var blurbItem = _a[_i];
                var blurbObject = {
                    imageSrc: '',
                    title: '',
                    description: ''
                };
                blurbObject.imageSrc = blurbItem.field_image.url;
                blurbObject.title = blurbItem.title;
                blurbObject.description = blurbItem.body;
                _this.blurbArray.push(blurbObject);
            }
        });
    };
    ProductsOrServicesComponent.prototype.onMenu = function (listMenu) {
        var cont = 0;
        for (var index = 0; index < this.listMenu.length; index++) {
            if (listMenu.id === this.listMenu[index].id) {
                cont++;
            }
        }
        if (cont === 0) {
            this.listMenu.push(listMenu);
        }
    };
    ProductsOrServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-or-services',
            template: __webpack_require__(/*! ./products-or-services.component.html */ "./src/app/main/pages/products-or-services/products-or-services.component.html"),
            styles: [__webpack_require__(/*! ./products-or-services.component.scss */ "./src/app/main/pages/products-or-services/products-or-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ProductsOrServicesComponent);
    return ProductsOrServicesComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner imgFondo=\"\" uuid=\"bc5dfea3-e1cb-4e97-8d7b-db359a613d28\"></app-banner>\n<app-title></app-title>\nPágina principal de Productos..."

/***/ }),

/***/ "./src/app/main/pages/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.title = 'Productos';
    }
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/main/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/main/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-title></app-title>\nPágina principal de Proyectos..."

/***/ }),

/***/ "./src/app/main/pages/projects/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/projects/projects.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.title = 'Proyectos';
    }
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/main/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/main/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner imgFondo=\"\" uuid=\"116fa45b-1b72-407e-89af-8c3fb33193e2\"></app-banner>\n<app-title></app-title>\nPágina principal de Servicios..."

/***/ }),

/***/ "./src/app/main/pages/services/services.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/services/services.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.title = 'Servicios';
    }
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/main/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/main/pages/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pipes/safecss.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/safecss.pipe.ts ***!
  \***************************************/
/*! exports provided: SafeCssPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeCssPipe", function() { return SafeCssPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeCssPipe = /** @class */ (function () {
    function SafeCssPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafeCssPipe.prototype.transform = function (value) {
        return this._sanitizer.bypassSecurityTrustStyle(value);
    };
    SafeCssPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safecss' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeCssPipe);
    return SafeCssPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safehtml.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safehtml.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safehtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/base/base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/base/base.service.ts ***!
  \***********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    BaseService.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/cards/content-type.services.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/cards/content-type.services.ts ***!
  \*********************************************************/
/*! exports provided: ContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentType = /** @class */ (function () {
    function ContentType(http) {
        this.http = http;
    }
    ContentType.prototype.getContentTypeItems = function (typeOfContent) {
        var url = "v1/content-types/" + typeOfContent;
        return this.http.get(url);
    };
    ContentType = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ContentType);
    return ContentType;
}());



/***/ }),

/***/ "./src/app/services/cards/node.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/cards/node.service.ts ***!
  \************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
        this.nodes = [
            {
                title: 'Titulos 1',
                description: 'Descripcion 1'
            },
            {
                title: 'Titulos 2',
                description: 'Descripcion 2'
            }
        ];
        //console.log('Content Type Listo');
    }
    NodeService.prototype.getNodes = function () {
        return this.nodes;
    };
    NodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/services/cards/v1-card.services.ts":
/*!****************************************************!*\
  !*** ./src/app/services/cards/v1-card.services.ts ***!
  \****************************************************/
/*! exports provided: CustomCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCardService", function() { return CustomCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomCardService = /** @class */ (function () {
    function CustomCardService(http) {
        this.http = http;
        this.sliderData = [
            {
                titleSlide: 'Título de la diapositiva 1',
                subtitleSlide: 'Subtitulo de diapositiva',
                descriptionSlide: 'Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.',
                listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
                imgSrcSlide: '/assets/images/phone-mockup.png',
                bkgSrcSlide: '/assets/images/fondo-hospital.jpg'
            },
            {
                titleSlide: 'Título de la diapositiva 2',
                subtitleSlide: 'Subtitulo de diapositiva',
                descriptionSlide: 'Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.',
                listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
                imgSrcSlide: '/assets/images/phone-mockup2.png',
                bkgSrcSlide: '/assets/images/fondo-hospital2.jpg'
            }
        ];
    }
    CustomCardService.prototype.getCustomCardInformation = function (idblock) {
        var url = "v1/card/config/" + idblock + "/export?_format=json";
        console.info('restv1:', idblock);
        return this.http.get(url);
    };
    CustomCardService.prototype.getCustomCardInformationType = function (idblock, type) {
        var url = "v1/card/config/" + idblock + "/" + type + "/export?_format=json";
        console.info('restv1:', idblock, type);
        return this.http.get(url);
    };
    CustomCardService.prototype.getCustomContentBasicPage = function (uuid) {
        var url = "v1/content/" + uuid + "/export?_format=json";
        return this.http.get(url);
    };
    CustomCardService.prototype.getFooterContactItems = function () {
        return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
    };
    CustomCardService.prototype.getSliderData = function () {
        // return this.http.get('v1/card/contact/export/custom?_format=json&bid=slider');
        return this.sliderData;
    };
    CustomCardService.prototype.getTabsData = function () {
        // return this.http.get('v1/card/export/tab-horizontal');
    };
    CustomCardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], CustomCardService);
    return CustomCardService;
}());



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base.service */ "./src/app/services/base/base.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/services/shared/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(_http, _notificationService) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._notificationService = _notificationService;
        _this._in = 0;
        _this._out = 0;
        _this.allLoaded = false;
        _this.targetPorcentaje = 100;
        _this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        _this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({});
        return _this;
    }
    /***
     * @param url
     * @param header
     * @param options
     */
    HttpService.prototype.get = function (url, header, options) {
        var _this = this;
        var objH = {};
        for (var key in header) {
            objH[key] = header[key].toString();
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](objH);
        var _options = {
            headers: headers
        };
        for (var key in options) {
            _options[key] = options[key].toString();
        }
        var _get = this._http.get(this.baseUrl + url, _options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            return _this.errorHandler(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
        this.addIn(_get);
        return _get;
    };
    HttpService.prototype.post = function (url, body, headers) {
        var _this = this;
        var objH = {};
        for (var key in headers) {
            objH[key] = headers[key].toString();
        }
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](objH);
        var _post = this._http.post(this.baseUrl + url, body, { headers: _headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (err) {
            return _this.errorHandler(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
        return _post;
    };
    // Para el manejo de errores se debe manejar la estructura {code,message}
    HttpService.prototype.errorHandler = function (err) {
        var error = JSON.parse(JSON.stringify(err));
        var errorParam = {
            code: error.status,
            message: error.message
        };
        this._notificationService.error(errorParam);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
    };
    /***
     * Restablece los valores para iniciar una nueva carga
     */
    HttpService.prototype.resetLoader = function () {
        this._in = 0;
        this._out = 0;
        this.allLoaded = false;
    };
    /***
     * Genera una "suscripción" para llamar al método de acumulación de "out's"
     * @param get
     */
    HttpService.prototype.addIn = function (get) {
        var _this = this;
        get.subscribe(function (event) {
            _this.addOut();
        }, function (error) {
            _this.addOut();
        });
        this._in++; // Sumar una petición
    };
    /***
     * Agrega un "out" y llama al método checkLoad()
     */
    HttpService.prototype.addOut = function () {
        this._out++; // Sumar una petición completada
        this.checkLoad(); // Verificar avance
    };
    /***
     * Verifica (comparando los "in's" y "out's") si ya se cumplió el "targetPorcentaje"
     */
    HttpService.prototype.checkLoad = function () {
        if (!this.allLoaded) {
            if (this._in === 0)
                return;
            var porc = (this._out * 100) / this._in;
            console.log(parseInt(porc.toString()) + '% loaded : get requests');
            if (porc >= this.targetPorcentaje) {
                this.allLoaded = true;
                this.subscriber.next(); // Notifica a los "suscriptores"
            }
        }
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], HttpService);
    return HttpService;
}(_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/layout/navbar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/layout/navbar.service.ts ***!
  \***************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarService = /** @class */ (function () {
    function NavbarService(http) {
        this.http = http;
        // console.log('NavBar Listo');
    }
    NavbarService.prototype.getMenuItems = function () {
        return this.http.get('adf_menu/menu?_format=json');
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/shared/notification.messages.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/shared/notification.messages.ts ***!
  \**********************************************************/
/*! exports provided: statusCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusCodes", function() { return statusCodes; });
var statusCodes = [
    {
        code: 200,
        message: 'OK',
        label: 'Successful'
    },
    {
        code: 404,
        message: 'Not Found',
        label: 'Client Error'
    },
    {
        code: 500,
        message: 'Internal Server Error',
        label: 'Error'
    }
];


/***/ }),

/***/ "./src/app/services/shared/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/shared/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notification_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.messages */ "./src/app/services/shared/notification.messages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
        this.toastOptions = {
            dismiss: 'click',
            showCloseButton: true,
            animate: 'flyRight',
            progressBar: 'true'
        };
    }
    NotificationService.prototype.error = function (errorParam) {
        if (typeof errorParam === 'string') {
            this.toastr.error(errorParam, 'Error', this.toastOptions);
        }
        else {
            var error_c = this.convertObjectError(errorParam);
            this.toastr.error(error_c.message, error_c.label, this.toastOptions);
        }
    };
    NotificationService.prototype.success = function (messageParam) {
        this.toastr.error(messageParam, 'Success', this.toastOptions);
    };
    NotificationService.prototype.warnig = function (messageParam) {
        this.toastr.error(messageParam, 'warning', this.toastOptions);
    };
    NotificationService.prototype.convertObjectError = function (error) {
        return _notification_messages__WEBPACK_IMPORTED_MODULE_2__["statusCodes"].find(function (x) { return x.code === error.code; });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/work-us/work-us.component.html":
/*!************************************************!*\
  !*** ./src/app/work-us/work-us.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  work-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/work-us/work-us.component.scss":
/*!************************************************!*\
  !*** ./src/app/work-us/work-us.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work-us/work-us.component.ts":
/*!**********************************************!*\
  !*** ./src/app/work-us/work-us.component.ts ***!
  \**********************************************/
/*! exports provided: WorkUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkUsComponent", function() { return WorkUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkUsComponent = /** @class */ (function () {
    function WorkUsComponent() {
    }
    WorkUsComponent.prototype.ngOnInit = function () {
    };
    WorkUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-us',
            template: __webpack_require__(/*! ./work-us.component.html */ "./src/app/work-us/work-us.component.html"),
            styles: [__webpack_require__(/*! ./work-us.component.scss */ "./src/app/work-us/work-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkUsComponent);
    return WorkUsComponent;
}());



/***/ }),

/***/ "./src/assets/timeline/css/fonts/font.default.css":
/*!********************************************************!*\
  !*** ./src/assets/timeline/css/fonts/font.default.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(//fonts.googleapis.com/css?family=PT+Sans|PT+Sans+Narrow:700|PT+Serif:400,400italic);\n/*\n    TimelineJS - ver. 3.6.3 - 2018-12-20\n    Copyright (c) 2012-2016 Northwestern University\n    a project of the Northwestern University Knight Lab, originally created by Zach Wise\n    https://github.com/NUKnightLab/TimelineJS3\n    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.\n    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.\n*/\n.tl-timeline{font-family:'PT Serif',serif;font-weight:400;font-size:16px;line-height:1.3em}\n.tl-timeline h1,.tl-timeline h2,.tl-timeline h3,.tl-timeline h4,.tl-timeline h5,.tl-timeline h6{font-family:'PT Sans Narrow',sans-serif;text-transform:uppercase;font-weight:700;font-size:46px;line-height:46px}\n.tl-timeline h2.tl-headline-title{font-size:58px;line-height:58px}\n.tl-timeline p{font-family:'PT Serif',serif;font-size:16px;line-height:1.3em}\n.tl-timeline ul{font-family:'PT Serif',serif}\n.tl-timeline .tl-media .tl-media-wikipedia h4 a,.tl-timeline .tl-media h4,.tl-timeline .tl-media h4 a{font-family:'PT Serif',serif;font-weight:700;font-size:24px;line-height:24px}\n.tl-timeline .tl-caption,.tl-timeline .tl-credit{font-family:'PT Serif',serif}\n.tl-timeline .vcard{font-family:'PT Sans Narrow',sans-serif !important;font-weight:normal !important}\n.tl-timeline .tl-slidenav-next,.tl-timeline .tl-slidenav-previous,.tl-timeline .tl-message,.tl-timeline .tl-timegroup-message{font-family:'PT Sans Narrow',sans-serif;font-weight:700;text-transform:uppercase}\n.tl-timeline .tl-slidenav-next .tl-slidenav-title,.tl-timeline .tl-slidenav-previous .tl-slidenav-title,.tl-timeline .tl-message .tl-slidenav-title,.tl-timeline .tl-timegroup-message .tl-slidenav-title{line-height:1.3em !important}\n.tl-timeline .tl-headline-date,.tl-timeline h3.tl-headline-date{font-family:'PT Sans Narrow',sans-serif !important;font-weight:normal !important;text-transform:uppercase !important}\n.tl-timeline .tl-headline-date small,.tl-timeline h3.tl-headline-date small{font-weight:normal !important}\n.tl-timeline .tl-timenav-slider{font-family:'PT Sans Narrow',sans-serif;font-weight:700}\n.tl-timeline .tl-timenav-slider h2.tl-headline{font-family:'PT Sans',sans-serif;font-weight:700;text-transform:none}\n.tl-timeline .tl-timenav-slider .tl-timeaxis{font-family:'PT Sans Narrow',sans-serif;font-weight:700;text-transform:uppercase}\n.tl-timeline .tl-menubar{font-family:'PT Sans Narrow',sans-serif}\n.tl-timeline blockquote,.tl-timeline blockquote p{font-family:'PT Serif',serif;font-style:italic;font-weight:400;line-height:1.3}\ninput[type=\"text\"].editor-headline{font-family:'PT Sans Narrow',sans-serif;text-transform:uppercase;font-weight:700;font-size:46px;line-height:46px}\n.tl-timeline .tl-timenav-slider .tl-timeaxis{font-weight:normal}"

/***/ }),

/***/ "./src/assets/timeline/css/timeline.css":
/*!**********************************************!*\
  !*** ./src/assets/timeline/css/timeline.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n    TimelineJS - ver. 3.6.3 - 2018-12-20\n    Copyright (c) 2012-2016 Northwestern University\n    a project of the Northwestern University Knight Lab, originally created by Zach Wise\n    https://github.com/NUKnightLab/TimelineJS3\n    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.\n    If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.\n*/\n/*!\n\tTimeline JS 3 \n\t\n\tDesigned and built by Zach Wise for the Northwestern University Knight Lab\n\t\n\tThis Source Code Form is subject to the terms of the Mozilla Public\n\tLicense, v. 2.0. If a copy of the MPL was not distributed with this\n\tfile, You can obtain one at https://mozilla.org/MPL/2.0/.\n\n*/\n/*!\n\tTimeline JS 3\n\n\tDesigned and built by Zach Wise for the Northwestern University Knight Lab\n\n\tThis Source Code Form is subject to the terms of the Mozilla Public\n\tLicense, v. 2.0. If a copy of the MPL was not distributed with this\n\tfile, You can obtain one at https://mozilla.org/MPL/2.0/.\n\n*/\n.tl-storyjs div *{box-sizing:content-box}\n.tl-storyjs h1,.tl-storyjs h2,.tl-storyjs h3,.tl-storyjs h4,.tl-storyjs h5,.tl-storyjs h6,.tl-storyjs p,.tl-storyjs blockquote,.tl-storyjs pre,.tl-storyjs a,.tl-storyjs abbr,.tl-storyjs acronym,.tl-storyjs address,.tl-storyjs cite,.tl-storyjs code,.tl-storyjs del,.tl-storyjs dfn,.tl-storyjs em,.tl-storyjs img,.tl-storyjs q,.tl-storyjs s,.tl-storyjs samp,.tl-storyjs small,.tl-storyjs strike,.tl-storyjs strong,.tl-storyjs sub,.tl-storyjs sup,.tl-storyjs tt,.tl-storyjs var,.tl-storyjs dd,.tl-storyjs dl,.tl-storyjs dt,.tl-storyjs li,.tl-storyjs ol,.tl-storyjs ul,.tl-storyjs fieldset,.tl-storyjs form,.tl-storyjs label,.tl-storyjs legend,.tl-storyjs button,.tl-storyjs table,.tl-storyjs caption,.tl-storyjs tbody,.tl-storyjs tfoot,.tl-storyjs thead,.tl-storyjs tr,.tl-storyjs th,.tl-storyjs td,.tl-storyjs .tl-container,.tl-storyjs .content-container,.tl-storyjs .media,.tl-storyjs .text,.tl-storyjs .tl-slider,.tl-storyjs .slider,.tl-storyjs .date,.tl-storyjs .title,.tl-storyjs .message,.tl-storyjs .map,.tl-storyjs .credit,.tl-storyjs .caption,.tl-storyjs .tl-feedback,.tl-storyjs .tl-feature,.tl-storyjs .toolbar,.tl-storyjs .marker,.tl-storyjs .dot,.tl-storyjs .line,.tl-storyjs .flag,.tl-storyjs .time,.tl-storyjs .era,.tl-storyjs .major,.tl-storyjs .minor,.tl-storyjs .tl-navigation,.tl-storyjs .start,.tl-storyjs .active{margin:0;padding:0;border:0;font-weight:400;font-style:normal;font-size:100%;line-height:1;font-family:inherit;width:auto;float:none}\n.tl-storyjs h1,.tl-storyjs h2,.tl-storyjs h3,.tl-storyjs h4,.tl-storyjs h5,.tl-storyjs h6{clear:none}\n.tl-storyjs table{border-collapse:collapse;border-spacing:0}\n.tl-storyjs ol,.tl-storyjs ul{list-style:none}\n.tl-storyjs q:before,.tl-storyjs q:after,.tl-storyjs blockquote:before,.tl-storyjs blockquote:after{content:\"\"}\n.tl-storyjs a:focus{outline:thin dotted}\n.tl-storyjs a:hover,.tl-storyjs a:active{outline:0}\n.tl-storyjs article,.tl-storyjs aside,.tl-storyjs details,.tl-storyjs figcaption,.tl-storyjs figure,.tl-storyjs footer,.tl-storyjs header,.tl-storyjs hgroup,.tl-storyjs nav,.tl-storyjs section{display:block}\n.tl-storyjs audio,.tl-storyjs canvas,.tl-storyjs video{display:inline-block;*display:inline;*zoom:1}\n.tl-storyjs audio:not([controls]){display:none}\n.tl-storyjs div{max-width:none}\n.tl-storyjs sub,.tl-storyjs sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n.tl-storyjs sup{top:-.5em}\n.tl-storyjs sub{bottom:-.25em}\n.tl-storyjs img{border:0;-ms-interpolation-mode:bicubic}\n.tl-storyjs button,.tl-storyjs input,.tl-storyjs select,.tl-storyjs textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}\n.tl-storyjs button,.tl-storyjs input{line-height:normal;*overflow:visible}\n.tl-storyjs button::-moz-focus-inner,.tl-storyjs input::-moz-focus-inner{border:0;padding:0}\n.tl-storyjs button,.tl-storyjs input[type=button],.tl-storyjs input[type=reset],.tl-storyjs input[type=submit]{cursor:pointer;-webkit-appearance:button}\n.tl-storyjs input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}\n.tl-storyjs input[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n.tl-storyjs textarea{overflow:auto;vertical-align:top}\n.tl-timeline{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}\n.tl-timeline h1,.tl-timeline h2,.tl-timeline h3,.tl-timeline h4,.tl-timeline h5,.tl-timeline h6{color:#000}\n.tl-timeline h1,.tl-timeline h2,.tl-timeline h3{font-size:28px;line-height:28px}\n.tl-timeline h1 small,.tl-timeline h2 small,.tl-timeline h3 small{font-size:24px;line-height:24px}\n.tl-timeline h4,.tl-timeline h5,.tl-timeline h6{font-size:24px;line-height:24px;margin-bottom:0}\n.tl-timeline h4 small,.tl-timeline h5 small,.tl-timeline h6 small{font-size:15px;line-height:15px}\n.tl-timeline h2.tl-headline-title{font-size:38px;line-height:38px}\n.tl-timeline h2.tl-headline-title small{display:block;margin-top:5px;font-size:24px;line-height:24px}\n.tl-timeline h2{margin-top:20px;margin-bottom:5px}\n.tl-timeline p{margin-top:5px;margin-bottom:10px;font-size:15px;line-height:1.42857143;color:#666}\n.tl-timeline p.lead{font-size:24px}\n.tl-timeline p a{color:#666;text-decoration:underline}\n.tl-timeline p a:hover,.tl-timeline p a:focus{color:#c34528}\n@media (-webkit-min-device-pixel-ratio:1.5), (min-resolution:144dpi){.tl-timeline p a{text-decoration:underline;background-image:none;text-shadow:none}.tl-timeline p a:hover,.tl-timeline p a:focus{color:#c34528;text-decoration:underline}}\n.tl-timeline b,.tl-timeline strong{font-weight:700}\n.tl-timeline i,.tl-timeline em{font-style:italic}\n.tl-timeline a{text-decoration:none;color:#c34528}\n.tl-timeline a:hover{text-decoration:underline;color:#6e2717}\n.tl-timeline .tl-caption,.tl-timeline .tl-credit,.tl-timeline .tl-slidenav-next,.tl-timeline .tl-slidenav-previous{font-size:11px;line-height:11px}\n.tl-timeline .tl-caption a,.tl-timeline .tl-credit a,.tl-timeline .tl-slidenav-next a,.tl-timeline .tl-slidenav-previous a{color:#000}\n.tl-timeline .tl-makelink{word-break:break-all;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}\n.tl-timeline blockquote,.tl-timeline blockquote p{font-family:Georgia,Times New Roman,Times,serif;color:#999;font-size:24px;line-height:24px;text-align:left;background:0 0;border:0;padding:0}\n.tl-timeline blockquote cite,.tl-timeline blockquote p cite{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:11px;color:#666;display:block;text-align:right;font-style:normal}\n.tl-timeline blockquote cite:before,.tl-timeline blockquote p cite:before{content:\"\\2014\"}\n.tl-timeline blockquote p:before{content:open-quote;display:inline-block;font-size:28px;position:relative;top:8px;margin-right:5px}\n.tl-timeline blockquote p:after{content:close-quote;display:inline-block;font-size:28px;position:relative;top:8px;margin-left:3px}\n.tl-timeline blockquote{margin:10px}\n.tl-timeline blockquote p{margin:0}\n.tl-timeline .vcard{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:15px;line-height:15px;*zoom:1;margin-bottom:15px;margin-top:10px}\n.tl-timeline .vcard:before,.tl-timeline .vcard:after{display:table;content:\"\"}\n.tl-timeline .vcard:after{clear:both}\n.tl-timeline .vcard .twitter-date{text-align:left;font-size:11px}\n.tl-timeline .vcard .author{float:right}\n.tl-timeline .vcard a{color:#333;text-decoration:none}\n.tl-timeline .vcard a:hover{text-decoration:none}\n.tl-timeline .vcard a:hover .fn,.tl-timeline .vcard a:hover .nickname{color:#c34528}\n.tl-timeline .vcard .fn,.tl-timeline .vcard .nickname{padding-left:42px}\n.tl-timeline .vcard .fn{display:block;font-weight:700}\n.tl-timeline .vcard .nickname{margin-top:1px;display:block;color:#666}\n.tl-timeline .vcard .avatar{float:left;display:block;width:32px;height:32px}\n.tl-timeline .vcard .avatar img{border-radius:5px}\n.tl-timeline .tl-text ul{padding:0;padding-left:30px;margin:0}\n.tl-timeline .tl-text ul li{margin-bottom:5px}\n.tl-timeline .tl-button-calltoaction{cursor:pointer;font-weight:700;padding-top:10px;margin-bottom:10px;padding-bottom:10px}\n.tl-timeline .tl-button-calltoaction .tl-button-calltoaction-text{display:inline-block;background-color:#c34528;color:#fff;padding:10px 15px;border-radius:7px}\n.tl-timeline .tl-note{display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:italic;background-color:#e6e6e6;font-size:15px;line-height:17px;padding:10px;border-radius:7px;color:#8a6d3b;background-color:#fcf8e3;border:1px solid #faebcc;text-shadow:none}\n@media only screen and (max-width:800px), only screen and (max-device-width:800px){.tl-timeline h1,.tl-timeline h2,.tl-timeline h3{font-size:28px;line-height:28px}}\n@media only screen and (max-width:500px), only screen and (max-device-width:500px){.tl-timeline h1,.tl-timeline h2,.tl-timeline h3{font-size:24px;line-height:24px}}\n.tl-skinny h2{margin-top:0}\n@font-face{font-family:tl-icons;src:url('tl-icons.eot');src:url('tl-icons.eot?#iefix') format('embedded-opentype'),url('tl-icons.ttf') format('truetype'),url(data:font/woff2;base64,d09GMgABAAAAACFgAA0AAAAAPGgAACEKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCYhEICudQ0iMLdAABNgIkA4FiBCAFgyEHhDwbXzAjEXZ69vKLomwwYtlfJNjOuHGHykY4RZMRDt8ebkdo7JPcn+fn9ufuvb1VvrFgsFEbIGMwYITIWLEhPWZhjBQLWkFRygrABIsvJhZGoX7w+6usxsLf+qvc4Zo2Nm+LDNpMsi4OkJPL4MitnFngZRd58SpaFSkqXeDkxXmVJDQz7Wx7EFGr0hTxobb9N7PbzB4J40etLzf71qfQ51YEXuXKBGC8gFZfKUb9DpDHprHClygvdcva/m+pSWdt/3u7dymjIB2rnYA8njD098+ut4wkr0Z6ybhv5LTrYyllo5TaAQsKrS7tui6lNOQXVjoNqzDPj4eAhkk6T2AARfF1rDev9RhOZvH4zCHcarJrOZsF2hOrEwNP8Jq9zxWtaTvgJ1OIzw5oCwEAbYWbUomALv/yHv9zEMqITZYkonhrYxAPCHAGw7BrqAOoneqm9C9soPcHfQ8GxIDJsSE+nMUEqtHJ2LC3x6MKphICJFVMEXuTvpADmCrRg8R7b2EDHShudNUoMWocnez93+sF4CUwGj6a0OR9LsdlI7InLheVDSMAOYhC8wtrKe4vmUkjAuT1Ag/aE6watssWmg4nD8yjd94nXGNROQ7IPTgFCF8lCWOOAkhiYxIkvUUq0vt705gCAWOxIhpKNLWB4TIZ+cmqm4PJjlfKyInXU6kkNWZ2lj/JluHEpBI0MiREHyCjQ2bkZpEkGbrfHUaMKovAMirKSXmoLIVX2OLPVQmF900ZKSFJfzIX8k0SJPfKyZg8LT+eRFJCClzeCBqNRWeQIn+Wmi0iQ/1kAirtjkay6HIBT0AmKtV1A5tNDYZmWR41WtORiy8pT1F0EuFQZm+APE6+GXecZ5ZOE+JvRw87oOomrNCJb3ehzdigjqBYWONlpppcbRMdLjKVUBq7DUPq3ZNPT5zzIAhSB2OBUlnlVXG1w9ipDZdBzqaOgK2eg0rGa4z7hHLJr7s1TX6yGMu8LOdZtNgKZT/iB5KSHyMiICW6hOI+jd/K6LWaDmsj+ZBDKSxIKsjz7ecgkIIdJLruHcoQeQQ4k+Upd2Ia2J7O4y7gcAb4W3SzA20mpsp4WcOWpDiLCa/rxOauAr9Ol7MHA1/MAjM3gLwDnqXlNfdgDWM4yuszkJJarZXRd9brkmNp1bSS1rKGoSvZh5aEwoSxFkvUYZJ5ETdzRbBSTcCxJGJ1aqymKhEBYyzja2aN0fy2pcFgxrWMQLnC3hHbgvtYRr2eNTbqBmzI3qE91obagV6vI3566CKrrsu7Rycu5GB6xeYMHQcy9jShlMjNCvNO5asv09Ia++TWTk3f+lq3uT0h5OyxTXObkyhrUoNwoqqMjGp1DZAmXMAMYaxGF34zxO5yJGz3UuwcpQZsef2ddgCBqM2vMzGMenYeqhtINvS8LlNRlua6Lmm+oFKZWsqn9UylkmKrcgW9sTd27c0gTTObL+4/Irhti7SbLSdTcDTYzBKqtEiJcCQqF8sE69hpyk38Zewy50yzLQ7nJQReH565N9EjSSNxZBOJ9sfHLNjjghfv1qFVGiPejW7upIT4vqiwT/QWebvK2zo++Okj6x1t8/I1xai7a7B74Gpf0O9Pcz3oItfxqoAqbpuT0K/BZl+7mQfnOBh26yAj0Y690tgwkVZHCRDSH8ankb0Rnbic+Dsz7fpMeP4kyaOyY7bKPQ+CzazqtttHyCAMj4TRB+ERFkeY8azKNgG01hzfXba1WJL7ekjx5WtADUeikjHhbnqrP3IvzhLiT4nYj8UJJDZiRWCbp9m/uQzOSbQ6j+JPyjlHUr2cH19Wv3COUfHL+lprskh8v8Teg0Yg0WCzDnm9Ncih85MVljGgrVGEZXa2A3n3CgsoloUFq+95wlvPzp/t7KttbA7vtvrj7b3V1UYv9z1q0GDAoMEyFgelMuOrl7jkmyGPZ1+AV4K52e5BGIAEYrjLln1+f5Bj10DxAU7G2F7KIUtEc9vFn5RH0YddtS9AE1ulkQM5+fBihgmj915ByQ9UmQEkw70+sZ0oExARnrA/iH3t+d2G4zZ6obI6jkTrtZr4nTQo7YaYyKGsXmtNcVtbwwzLrn8tbJpWZMMygRjV9XecNd6cDpHrj5uAGqMeJ4NJC6p36ta3fTr6Egbj7Qrxifcuds19tzfPqveqt5ZVwuIFiMkL6cdQjKYLxDUpf9TpEUXFR2aTK+XkZBe/Oi41deoZJd55fWJ7N6uqhIi6HbZF9fSeuVfrdvEym1aVVHvn34R6upWzT2ud0Tc6c2546vRSgJafdSDZRmDkVJMxwZy0BkdYO9QfozohAnUcKnI7yRpXbfLkjhwS4lRUWQp90hOGp4OvX8xYTJVnjV4vt+tKJXUX/Zjfcufiq/HmMYsXt8Mbb/tbTNPlP2JKS5BLhMCFyrMs5C6c70LemZzHcvZkC5CMMZitfds+0Nvjc/WtjhNIHw5H/yD4eVxyTfG10k/EFIdX80AR5ogVvMWH0819tyYDbtbkmbZWZ7lJ7dN9M6dP4ROtpKbIAQEYGZOD6ObmpYFYFGwUyaSKawZqY2F+H0geAK4IvJPFPc4c+LUnwTvqlOKLUhrPaJ5gBo21R4NUBGEp58+OKzPDW5PLT8G2bXQ0dci68HyeLby4+ED8p2tAFbpwVrhJ6H01vT562h1uQtb9MBeSpXl6IWR1+l46H9BFvG26DO+kpwydc7RfQFtXif99abddXnUrlS7WrGFLAB2VsZejYgE86bkVQFXP0/WdDnLJOwto7XyQ2NR3RQzSRHJAnLMMGjRinDTAJ23T5DZtbcp1rEFLcVChjcUGp4taYhOyL3DQGuOKW2euLPLqMbbzQ2SSR0KFeKF3/1yqSZYZUKTJMjBMUrSFwiWxnURYx8J1H0K9NnVzFb7XCxowNd5ZoGpVE7BndTKmJKjxKXKb/xlAHywX8J/Sn/7bBjTCtTrOhk0PF0o0dRdpD22UjBMYMOBarSU+XQQVDm97ClMkTMUSprhb++NGkVOwIgBTyVgG/ry50RidxXI+XduGcyB3uaEJscKhhXO9aCTtbDlcWl5sFps60JgjJ9eMM6DFZAyAsdovpTdqAGqO+3V/Y0Ra+5SRV24u6sPxjjvuKCq3ZlczscBNFz++Wt74I1su+P7xrVcuuKQkcrTgCdR3vYezIznHutqgjVlUoJxyNbJ4gb2PJW97O1aQ0yT9b6OVUvcNvt/aSgw3j1FHwZUUBX6M6YZgtiXDyemnJys9QXpU/J4Yf1eoRBcfZrI+A+/fUj1NcSmtUvFBJsfK02t2L2jHIDHAvJ5euB+3n3o8XUDwkGlS2nU7ihK8I4AGjwLe6OJBJDw8Y1rXKu3lyLmrPYhPgOQMztG0ZrM6H16+AlXCvJRQPojJsxraoe/nflfzx2FzIWqtq4Xt2DNMg+nSXbO3Av5xBfUfN6GFFhTzENAYybghV1oQxgmOwd094Oh4rJL90IYZ67rPmT6TL7dwVZYbiuvaFHmqWHCywrogP3fN8+62Tu16aa1aYXz+mV8ykKOKAnMOT57sYVWoxZ3c1v0DanQImpF0WSQvw4Am6jer/Ge8sVGHlri0NcVqJgoq0ekNNM9yr5pG2YRXtP6pkFEvZzYqooc76rVMpBFdXJiPAw0Nub+/U3NNcSSn0NCe1ulKxZJkGlTLPFK3MbeR+uOlmNxu8FbjSf91yxcftTQUKbviyJSwYikC3jaxJOwojkSrikQcMRHeyDQvTvtlu3Wr5etCiuqVLO21QK1eIkni75ECPH0hyAvNtsloHYnzf0wekD1Quk9jtJ0vZAejx0TXHeGgo7o631y31Hoh90uT/BnOrS+HSytRubIULa+H20CciPA6ciAFjWx3t2VQg1HGaxpPw4tSmcBIk6DN5n0gRxZ1Hc5TXhl8qbMU9qkmnpGGaApOxl/MAFA6s0QlCteQyR1w+P2CS5RfnncfjrCs7C36+9YhF9eWgscSzhV2F7y9a+DIWNB4b2VrH0pToJTLyaIOkbMBcgsayJXGN5xkCEQDBCrklqApF1882l787BXkpc9fP9ZZKNjs1cPhfP4FoIXC07sFwf7S58MvAc2/lVaA+E86Iqi5WlypIUvF6wIVCsVS/8xiqizzL4YJGDmJViSlaUpPj5LJs5PAfm6aeWYMdvqxD1rt18DOf9ivftZe/0Z72+z52n4MbQilT/Mu1yeLPgx4KUD9bsEDeeLtxhFDvzC3xJVaBHO+ptt+LJJYIi3cbQmFKq2BhdsZPWcfMVPsgrE552SL10Vi8ObT5tndWKJS4cOLpHreu/PQ7ivPhXOe7fuLj56drEA/wiaDtWfGBTpKssMCLTeeHr34kAiHMGfNy9njiDUBlmfKLwkYVZIiof+FM47mNeLH3QiK0FmwFjzQerm3mhop4napvug/XKdU6j5S3FX8OYj7mvpD689Onr/Lg6WHyZR2/iZ+8tY0icER8bf1cOQEDCAhQrVCBdZ1Fe2ryEHYCVw2gRPYx6yI8h+yjkNl0fMQmIoqzgUCFIth7lXkBHwpQ9NkZqPFm3vUNlmrLPllS3Cq4o3CFGy1ItWrXGiTggdiuQlM/xWAQ5e3tHUsYlgQOLGJ9FX/uKW/ZyE44GQU0jzD2cwvnEDJxNtZbf9rBljax7VMVvuPcaze+MfFrDGbQBRkF8YOXbk9p/nMnqHuUplHt2bnhrW2vLOBv33upFAJDR7inFgeW/7s2k6hMzX7D4CPnad/bafdW034kjw6QMcHn4UmKox6AHPpIqkmhCrECBxRqIjOHGc85G/+qZBGoRMEhdCSuIBCCQgS49OEdfgs/uOEWXPWzokbTSk/0P52sJmQ2VdtH5c0yV2h3qa9VQ2gjlYDpend71vw9rICOqIzGDiePntRsL17mQlQMMmgkrHRAgqYcjx8iA4UAKy/uH7l1oVUG7xx4hNZjT/kyV+lIDjoYBYyjAM5jM/SAWWFXmLF/1TLZNc+iu9lxT9uZ7FqHhtZvF89m4InnDc6zpRcnVDWd+5AQcEHndMJWmZOsTwUQ7pY26bzmajx5OJ4OAV0LIOePT9h4E/d+UFpTdCyMWV/j3bFf/3kiXHeRx2TgMK33fm2Th8Xmi/Xr8YBun5Wtb+yvZ+FILeTWyMu/a477bg8y2cad4qMc+R47Pz/JsaXyguwcWrz/LN7IaoMfuvj0K+uVJ0GswAYDvZErkOP7zQbswAcq+IBYot2TJz75+cLoX0D2+FdymYve+tks51vl7HZS70OtvepMJs+nZPJgaPwmXXHV1r7Q1+ALTWajnD9pzjAa9EIgMzsly21i6p62JNeb2JzNr2exA4jOc7/J2Fi2fypwVNs8VmShd98sjWRp719rJ5MXPRhH3fKZl+OLHfGvNjt7zQwATCmemzSV18/ScosL1pDIzZtrw7T0ZPNMqbUR4SzXSX1HMYUsamcHmRwZoqvXvmotLiMm+YzXqzMn3oNYx7Izp5xW/rfJwdO5fkkZS2Azw6bFEid3BBX/u4pN0Iv3mFK3pv+wSKUKkw9sNN1grnp8SQmR/u2jsmqfavlMCc93sjadSBfiMImpgQqdTGA0O6vJ/dvLMt+D5mEjl0nXe8HO9wxe7Ysy7ckOhpjg04u22J1yRvfXY9e5KkLQMNU4FgsrkaofvRlFbWzbqGPEYNwFI6+VnEQiu7kXztB+zSTHi7Muv8i58UHN0yMq6ctCIWuvVT0O5E+aersGCHSMDhzBU2+C14OO7ai72tN6uNkZ+AOgev+thN9548/rdu/H4/bU9MZ1/j126GGuBunRqznX5QYJl5ccaVhX+U/DumuVUpNFwKTCUwwFoOW4ZZhr0r8rFsnFuu6n4nr36KhJzDk9aY0z4C1W6Avb+KRI7r1MUf1ux6c72u1YMa4tQ0bjy6+RzaIG2pL+vg9TYJZgybqGOScPDnMkn2fxQo3iDMGrghaVZUJ1gTZnPGT8xJNACbK21ufjr7i0y40CXL/fMMKEzwKrez2DIxXr1BlhNOYbDlhwhaq5iXMyPBMPTAnkSe/ukaSwWmvn9KHKOZd0MgsH940em4MP/WYOpmt1J3u4NGAfV+ZfOwsUw5nYDgnZLw6R+pmDXTA4zlbj2TemHUb+BvE/j13eG4vBPzaAqmTpsgiXP6m2BC7JtTXnp+u1GE0glAFjx/rS7BdncPziV42mzB6VPYYjS046EK6tpg0mgpV5tgAW5By96SgPcvqJv7BYOkHov/7793oc6RswMFLcw9OW49JaASmNN9yiuM0JnJ0k1L5i9tGehhA+bUwy3ggNKUvoIO5+HBq1OCFrR0dfzcNRqVeHNzWITw8bBp+GRFiMFOL1qq0KG1am1FaY2xKTatmDw2+S0ihgQztUDOkeE0eAEzW8EVhA+IxgBao5ubXLxGGhlpahlKIlPPNpqEnB3kkGPE6cwM+D8jV6ebw87OoY74H8qbZ9jQ27rFNa1E9WGGeYGloaAzSt7QwcJPt04dxMPmXL1aM9QmgObTTORYMsseunlm+Jik7d1XSrPLE1RoNHnii93LkBlrZtzvraYK2k6s+//knr+ffHy4PB4z8P300rkBjt4VMxfENLbrhcTHTNFab1kdGRh4WM26oGZpXaEX8+GMeNZzSehdSrGXymZqHFMkBNxSKGwHJivq6aZGMDCneoaERdehnuVKdbuv7LFTdPkic1trSPc6hRnmLPFBhw+a6qAkTourMDcV/L/isuBWA0CInDeYYc5jvNYP2aKpqteQimJEhri/MYHQFF4iKDIYNrW10reIyFgQXiRAI22W8NKZf2TH7Z9bdnTvDvq21IjJ8Fz/nr39Y29a5OgYzbud9PMapyZFnjqfrhSE/bCdsLEv5jhPBJ8THSkumm+uDI18S0KPz61W4RmpL7vy86zZj7WjeX/GvmVOJPHxv79vJv1Td2fFj2TdHj/W+7BT/senjmVu7jT65fe904KsWSb5nT3n9DykPtjPNkpH3i8/Fh9bn7MvsML8j+ag7hpyxm2NY8HRvfXieOPW/lSu9jsgctZsfEUFI6FrxQhwCwR+fdfUfu4NRqTQMo80hhr31d332h0C97eIqtXrVxW3q8SWQX2ig1y9AbwsYr7xLu3LlVG5iiHM021/HyrXY2qJSAzFsIyY2mDGoWVWDFL9GZcnlmdG/Kr7/X8V7YlxlZfM9vB189/HdYTNcnFqZovJ6h0t9nZi5OYWTtuXmypWZs+o4LZy6WZl/uZtb0i5eUUlJuaWg+kfoO0kQUxhCNvVcKK7ziYliiX/5xmvr+eOHT85evd733jWe8Mqm+ptXV8/N3LrizbXOeO2ERK5g5urOF/9+cfzQwUDqnwVzj7QUi/YBDAMYTF3a57+6r13wPLy8wfKU/3WO+pI6OzJCnTuYE/j1mz0Ra++GTHYaL5u5+pEKXZ4rcp5pXGRlXm6FfuRNvixNl2APF4cpzOpMYkvapx7liddMidjn3t55qz63qD4sCQiacOh9T8uhuNfnTP5rotNLh/kPXZf40rExnPuLdk4IDtK+9qTLeuG7D0XB7OsPHk37uoTkJDScnz376Y+yNqz9YbuDz7a2Pl5G2Va++6xU3K7cyrj9fUixxJBJJspMYxRJVWfrW/DbB60Ge5wEZ+YcJt6hfDu09MhO9q4cIaEIT5JUnexrjaqlMl9e5ZxtXN7FZet8Qhaf4fL2T/9DIrWvO8Pj7auQ+NA0wm7hWhG5XtwtpD/74EJczNRkP4ZosXCVwOWlP7t1foK7aXokgx45vcntvnDrGb0h/cRtWxvbdMaitbYJH3/w/hnnXULlCqicaRyamEtdQvMX07mT2DhfSZW0s6XvFYi+isZoNEKPEzhOmVOoJ9hyBtaG0dlcekT8nJzeDjoOn/loc9dMWeI+qhHz9iybuLmqbvTFzwz4OyUsI/iMsbu/5AD2tln28NfH+LPttu+zhOXVMDR0b+lqWRzCh/Hr1l3EsyYJRvgPrZ8LPPwv+twTweczzhAse2G6+AWohULU18dXj/uG9euDB7FgQx42guUZgjFP+9gouB7nv32LcAyneFJeX57yble08mI5mzIw9Pt9l2d4X54eTqfRsMuX9VVVdBw+De/XxB4K0bmC/3EH/uva/5l7h0MC/4GUlGFoGWiGmXF89/c5/inrByZLL1wLFUzaLRxYCxBNUcmfB4yTy8cFPJc/3bwH7mE+c/fRMKLyYXbB/48C1/3pHBM4J3L8orMxe1xFOewgG/uvjZufqZ0+1TmZ2TuDytM3cOxBFAzDgLDDHMYKMo00VjVXGvl6vYovx2YPZq9enT04e/aGFh3iotgRhqftsTc02PdMm7YhoUNcFPu05jwLmTZvWog1IypxKND4RwHLhEx0B1EAv1PEMqtRyyQzv1E0g/Y1bXtwTpzVGlcTc3a2bvxC9yAChMDgO02Ysc+XSLIXi9X/7J1XE0TYHZUZOQqn8INcMDG6U8sU6bvLf/NpFdjlBQGgf+cLY6gnzeHRGo0KGV2LRoLj60s9VeRrzid9p/uS+WbfolPUsMYhgs59HEKqcvMT2bdNTwICnjR9K3uyWZl6ZzfmQ9T4shrCSW0ri6em85I2qpOoMb7gBPRcutCoL1zq2dX2i/UH9OL2ADiv2eRTGjg5aryTmc1a59sWuPir/NKgPGvEs2XixrCl1Go7J51bNie8V3DoJ7NlgNGdM72H5zEWUViRB1ex2Zm+FOfYhZ6Cxvg/sulbFQ1pOdXM8Uy3+qC7vT3DTa0Of3ZTAZ+fu9P9PXzffee7bhB5X2S00JK3r+eLZfDk8KbTGqbmUQ3TwKp5RBpYPuMPXNZQqSveVXzWxXB5e7fvb87cxl4C4WkZk6bo6wT5wLvK9J/ZuEDlv6Bxpn+8ZKquYvbU8Y7lA9dj/3dfbz2m/lccjG1vJBc4p+ArNqi3yf748/c3wwOc/1eM5fF4fr4s0Rr1N+T84dTf1zKZnDxpiWqqYdAhdHEyaDze6fE4ju9V3C+tj7twjU/6Gx9cm4gVkvIbDOYIkwpYGpxM+lrgHzmjLdrwakU6NWWy7T6LK3ot8Riin6ctYLPrrLzAQNWvn/v4+DtqA39MwoFgwcnjoDFEMRh9E3yoEF892BkYBUx9vurLwAIm+6LvMR6/KXwBi+s/b3ICehHbdKDou8WZVKayYL1bbUycqB2X5ldEp0tnRk20Wj+I0Voff7PijKvFdsB4m7d6wO/VvIT6D8pmrPtoq3T52UR7qtvjWqiycJ5ex59DI3iw/RSqUAQUtRqD4dI0xfwFv7KhnryRiAVYCL2KMJixq0dHjmLRFkKlJywBIrI4sY7LwlYuy1xx7g2ohCoKElFwRFCDo1S90mrpld5CSWpHb66sc+SaslM6oIoiSQKni4T8d8ySV6XFO6ZG0qn0sESNfPfucZvS95LMWyUT6dri9/h8fgAgJMYwnCYyqHpzyShmm0hNdnSQuZKT7EKfwgGVQeSDEwTJ53tkc06xaOGpNQVF1wuH06tTdXT+BY/Mw1eRBAFUJEYUvpACVaIoyYneVBHymK7wBcwrVbmiFr6KxKlUWVCe/r3aSdLl9eKk/A/avCeaqK0J2Solg3+4MCxH5WOu4z6BBn2VQJzK7hIL+J4qPhJ1MdUi1MKPFhEYdDm6oOvtpo1vO6ATZIZzzGwPe90YIuFeOnKRKwkZBrlBrpHJNZqm5LiTcWNtCba91mh59F0fHlOBhF9HP/FNLpH7PvP/zVUdlrXbX7mkybDIoNil8N+VHTpMpcf44TEiuTaqLCnit2khmmm/RRT/vu5zNaGZu/1w3wJGg0Yq0zRoZVJtz5Hl3NTq5csp5aybN8tZlC3Lq1+vXMY1Vy3fgvEMY57nlHA30fp8e8L2RnlWujdZs/lvTUnkbxmakKm/60r8s8ynP1SgjPG/rpTXJSufxlwXUhRMPu1+DMT8XJGV9bi393H2YYSNeZid/ci9/I+2bH32bPasBuDPtFoWqAPmv/qW61a94Zd6iig/jAn7KbzUal3AYTX07u7uRSrUWVqL5i94r+Xy4YGGDevT7KsGBhpBcJ9us9JD+ntC6Cqmz2s+Xq8P1c3OsZlMcnJP/9jk/m6Y3f3JjrQKp8l0phV4U0wFBWPiLTg9SB0VD53comNexcZ7Qc4qZ1LVxod+tny/Cr98mx85Vnez2+oHDofz3I+hd/tT8MN53js5ZSdPlP1+J1AAsZJUSGNYnFohudjv1bPQe7jfB1rvnszPiw9xl584ZbZoE8rLrsZYHMHS6tra6vgOelVrbWxxUs8/JsXLa6XF+/sGD305suf01hNT7Pc+dQodYhd9CctldZlpLvendx3icJU8opmTl/r7SMs7jrR259JlTRVOnlOYDTkwXpQheG/YZk4xacaHOJzOGTOKQgqDDtpkuVIkwqOiqGo8K2B4uK9NmirBKYYoAVZM79w1bkxIaOmiwuJjyR+cff/q1NnJJ9d2x149dzbCd+7s6xKZvLGsgOQ6OHbSnPXq1vPf5y7J8nbuDdIqecxf7tzT6deu+9nGs5I2MQ1M6Byvv7Ozn8fr7+E50528nsZ7vXhZL3R6Hy0nHEq5/V2dXS+vux/Z/T12T1eRa910bArNdvlSbh6HWwR9jgdcxG7yci9dzqfR800mG/3dH7PpIR7vUFNy+fI1obkTkTuNDhsoFLZ6g5KznZYdwoDcSm6b2B1aHspUQHqsmWZ7pXJzI4hEIiVFxzi+HO9M1tRUKx0mRfT0RTadnDODN/Z3OguHz8qGXlrlHAHYdYjo8B3o861bAAjwsiTeLgxd8d6Zm1FwYaMNOMAQ5SsaZcJqOhpwmNcbiKXh9uLA0kgTFv0BCbAcrMpBBouU4tZTW2W9jdiKTdCAaayDabZXAA8753oDyoNUIYqj4HwvAG1zlyagMGDdDAUmO7hwDNDO6meAuF1OARroIiwH6REOKF9OBRasjghA/xYmiOHxixzCGUzoo+UU4IJfhBHERTggfzkVJFATEYAte2OCFk7DfCiGSoiAWbS5AmoB5hdXRnyF21X7y4NSmAn1MBcKoQbgP2CvOThcKsPqE6AUaqCWxltUoAfdVoTvkN0rvU7vbKXJigCrF0IdlEJJdxE0HtLZN8qcyeFK8KsCofMh/e0o7YVLMSklfCn4Y4goCEM4oiIC0RAdMRATsRAbcRAX8RAfCZAQiZAYkUiCfJAUyZAcKZAvUiI/5I9USI0CUCAKQsEoBGmQFoWiMBSOxqAIpEORSI8mEQkZBRWt+//eGAAFBAIGAfVdbEoBUNAwHXs4AyAQMAgoGDgEXEgoaJiOPVwAEAgYBBQMHA4EXEgoaJiOPVwBEAgYBBQMHE4c) format('woff2'),url('tl-icons.woff') format('woff'),url('tl-icons.svg#tl-icons') format('svg');font-weight:400;font-style:normal}\n[class^=tl-icon-],[class*=\" tl-icon-\"]{font-family:tl-icons;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}\n.tl-icon-vine:after{content:\"\\e64d\"}\n.tl-icon-wikipedia:after{content:\"\\e64e\"}\n.tl-icon-chevron-right:after{content:\"\\e64f\"}\n.tl-icon-chevron-left:after{content:\"\\e650\"}\n.tl-icon-youtube-logo:after{content:\"\\e651\"}\n.tl-icon-foursquare:after{content:\"\\e652\"}\n.tl-icon-camera-retro:after{content:\"\\e653\"}\n.tl-icon-doc:after{content:\"\\e654\"}\n.tl-icon-weibo:after{content:\"\\e655\"}\n.tl-icon-resize-horizontal:after{content:\"\\e656\"}\n.tl-icon-resize-vertical:after{content:\"\\e657\"}\n.tl-icon-resize-full:after{content:\"\\e658\"}\n.tl-icon-resize-small:after{content:\"\\e659\"}\n.tl-icon-twitter:after{content:\"\\e62b\"}\n.tl-icon-google-plus:after{content:\"\\e62c\"}\n.tl-icon-video:after{content:\"\\e62d\"}\n.tl-icon-youtube:after{content:\"\\e62d\"}\n.tl-icon-plaintext:after{content:\"\\e62e\"}\n.tl-icon-storify:after{content:\"\\e62e\"}\n.tl-icon-image-v2:after{content:\"\\e62f\"}\n.tl-icon-quote-v2:after{content:\"\\e630\"}\n.tl-icon-zoom-in:after{content:\"\\e631\"}\n.tl-icon-zoom-out:after{content:\"\\e632\"}\n.tl-icon-list:after{content:\"\\e633\"}\n.tl-icon-music:after{content:\"\\e634\"}\n.tl-icon-spotify:after{content:\"\\e634\"}\n.tl-icon-location:after{content:\"\\e635\"}\n.tl-icon-googlemaps:after{content:\"\\e635\"}\n.tl-icon-web:after{content:\"\\e636\"}\n.tl-icon-share-v2:after{content:\"\\e637\"}\n.tl-icon-soundcloud:after{content:\"\\e639\"}\n.tl-icon-video-v2:after{content:\"\\e63a\"}\n.tl-icon-dailymotion:after{content:\"\\e63a\"}\n.tl-icon-tumblr:after{content:\"\\e63b\"}\n.tl-icon-lastfm:after{content:\"\\e63c\"}\n.tl-icon-github:after{content:\"\\e63d\"}\n.tl-icon-goback:after{content:\"\\e63e\"}\n.tl-icon-doc-v2:after{content:\"\\e63f\"}\n.tl-icon-googledrive:after{content:\"\\e640\"}\n.tl-icon-facebook:after{content:\"\\e641\"}\n.tl-icon-flickr:after{content:\"\\e642\"}\n.tl-icon-dribbble:after{content:\"\\e643\"}\n.tl-icon-image:after{content:\"\\e605\"}\n.tl-icon-vimeo:after{content:\"\\e606\"}\n.tl-icon-instagram:after{content:\"\\e644\"}\n.tl-icon-pinterest:after{content:\"\\e645\"}\n.tl-icon-arrow-left:after{content:\"\\e646\"}\n.tl-icon-arrow-down:after{content:\"\\e647\"}\n.tl-icon-arrow-up:after{content:\"\\e648\"}\n.tl-icon-arrow-right:after{content:\"\\e649\"}\n.tl-icon-share:after{content:\"\\e64a\"}\n.tl-icon-blockquote:after{content:\"\\e64b\"}\n.tl-icon-evernote:after{content:\"\\e64c\"}\n.tl-icon-mappin:after{content:\"\\e600\"}\n.tl-icon-swipe-right:after{content:\"\\e601\"}\n.tl-icon-swipe-left:after{content:\"\\e602\"}\n.tl-icon-touch-spread:after{content:\"\\e603\"}\n.tl-icon-touch-pinch:after{content:\"\\e604\"}\n.tl-dragging{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}\n.tl-menubar{position:absolute;z-index:11;text-align:center;color:#333;overflow:hidden;border-bottom-right-radius:10px;border-top-right-radius:10px;top:100%;left:50%;left:0}\n@keyframes invertToBlack{from{background-color:#fff}to{background-color:#000}}\n@-webkit-keyframes invertToBlack{from{background:#fff}to{background:#000}}\n@keyframes invertToWhite{from{background-color:#000}to{background-color:#fff}}\n@-webkit-keyframes invertToWhite{from{background:#000}to{background:#fff}}\n.tl-menubar-button{font-size:18px;line-height:18px;background-color:rgba(242,242,242,.9);cursor:pointer;padding:6px 12px;display:inline-block;display:block;color:#bfbfbf}\n.tl-menubar-button.tl-menubar-button-inactive{opacity:.33}\n.tl-menubar-button:hover{background:#333;color:#fff}\n.tl-menubar-button:hover.tl-menubar-button-inactive{color:#bfbfbf;background-color:rgba(242,242,242,.9)}\n.tl-mobile .tl-menubar-button{display:block}\n.tl-mobile .tl-menubar-button:hover{background-color:rgba(242,242,242,.67);color:#737373}\n.tl-mobile .tl-menubar-button:active{background:#c34528;color:#fff}\n@keyframes invertToBlack{from{background-color:#fff}to{background-color:#000}}\n@-webkit-keyframes invertToBlack{from{background:#fff}to{background:#000}}\n@keyframes invertToWhite{from{background-color:#000}to{background-color:#fff}}\n@-webkit-keyframes invertToWhite{from{background:#000}to{background:#fff}}\n.tl-message,.tl-message-full{width:100%;height:100%;position:absolute;display:table;overflow:hidden;top:0;left:0;z-index:99;margin:auto;text-align:center}\n.tl-message .tl-message-container,.tl-message-full .tl-message-container{padding:20px;margin:20px;text-align:center;vertical-align:middle;display:table-cell}\n.tl-message .tl-message-container .tl-message-content,.tl-message-full .tl-message-container .tl-message-content{color:#666;text-align:center;font-size:11px;line-height:13px;text-transform:uppercase;margin-top:7.5px;margin-bottom:7.5px;text-shadow:1px 1px 1px #fff}\n.tl-message .tl-message-container .tl-message-content strong,.tl-message-full .tl-message-container .tl-message-content strong{text-transform:uppercase}\n.tl-message .tl-message-container .tl-loading-icon,.tl-message-full .tl-message-container .tl-loading-icon{width:30px;height:30px;background-color:#666;vertical-align:middle;box-shadow:inset 0 1px 2px rgba(255,255,255,.1);margin-left:auto;margin-right:auto;text-align:center;-webkit-animation:rotateplane 1.2s infinite ease-in-out;animation:rotateplane 1.2s infinite ease-in-out}\n@-webkit-keyframes rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}100%{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}\n@keyframes rotateplane{0%{-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg);transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}\n.tl-message-full{background-color:rgba(255,255,255,.8)}\n.tl-message-full [class^=tl-icon-],.tl-message-full [class*=\" tl-icon-\"]{color:#666;font-size:72px}\n.tl-message-full .tl-message-container .tl-message-content{font-size:22px;line-height:22px;text-shadow:none;color:#666;text-transform:none;font-weight:400}\n.tl-message-full .tl-message-container .tl-message-content .tl-button{display:inline-block;cursor:pointer;background-color:#fff;color:#333;padding:10px;margin-top:10px;border-radius:7px}\n.tl-timenav{width:100%;background-color:#f2f2f2;position:relative;overflow:hidden;border-top:1px solid #e5e5e5}\n.tl-timenav .tl-attribution{cursor:pointer;z-index:9;position:absolute;bottom:2px;left:0;font-size:10px;line-height:10px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif!important;background-color:rgba(255,255,255,.85);padding:3px}\n.tl-timenav .tl-attribution a{color:#ccc}\n.tl-timenav .tl-attribution a:hover{color:#000;text-decoration:none}\n.tl-timenav .tl-attribution a:hover .tl-knightlab-logo{background-color:#c34528}\n.tl-timenav .tl-attribution .tl-knightlab-logo{display:inline-block;vertical-align:middle;height:8px;width:8px;margin-right:3px;background-color:#c34528;background-color:#ccc;transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg)}\n.tl-timenav .tl-timenav-line{position:absolute;top:0;left:50%;width:1px;height:100%;background-color:#d9d9d9;z-index:2;display:none}\n.tl-timenav .tl-timenav-line:before,.tl-timenav .tl-timenav-line:after{font-family:tl-icons;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#c34528;font-size:32px;line-height:32px;position:absolute;left:-14px}\n.tl-timenav .tl-timenav-line:before{top:-10px}\n.tl-timenav .tl-timenav-line:after{content:\"\\e648\";bottom:24px}\n.tl-timenav .tl-timenav-slider{position:absolute;height:100%;width:100%;top:0}\n.tl-timenav .tl-timenav-slider.tl-timenav-slider-animate{transition:all 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timenav .tl-timenav-slider .tl-timenav-slider-background{position:absolute;height:100%;width:100%;cursor:move;z-index:6}\n.tl-timenav .tl-timenav-slider .tl-timenav-container-mask{position:absolute;height:100%;top:0}\n.tl-timenav .tl-timenav-slider .tl-timenav-container-mask .tl-timenav-container{position:absolute;height:100%}\n.tl-timenav .tl-timenav-slider .tl-timenav-container-mask .tl-timenav-container .tl-timenav-item-container{position:absolute;height:100%}\n.tl-timemarker{height:100%;position:absolute;top:0;left:0;cursor:pointer;transition:left 1000ms cubic-bezier(.77,0,.175,1),top 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timemarker.tl-timemarker-fast{transition:top 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1),width 500ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timemarker.tl-timemarker-fast .tl-timemarker-content-container{transition:width 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1)}\n.tl-timemarker.tl-timemarker-fast .tl-timemarker-timespan{transition:height 500ms cubic-bezier(.77,0,.175,1),width 500ms cubic-bezier(.77,0,.175,1)}\n.tl-timemarker .tl-timemarker-timespan{pointer-events:none;position:absolute;margin:0;width:100%;height:100%;background-color:rgba(229,229,229,.15);border-top-right-radius:4px;border-top-left-radius:4px;transition:height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timemarker .tl-timemarker-timespan .tl-timemarker-timespan-content{display:none;position:absolute;width:100%;background-color:#e5e5e5;border-top-left-radius:4px;border-top-right-radius:4px;height:100px;box-sizing:border-box}\n.tl-timemarker .tl-timemarker-line-right{display:none;right:0}\n.tl-timemarker .tl-timemarker-line-left{width:1px;left:0}\n.tl-timemarker .tl-timemarker-line-left,.tl-timemarker .tl-timemarker-line-right{margin-top:7px;box-sizing:border-box;border-left:1px solid #d9d9d9;z-index:5;content:\" \";position:absolute;height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:1px 1px 1px #fff}\n.tl-timemarker .tl-timemarker-line-left:after,.tl-timemarker .tl-timemarker-line-right:after{display:block;content:\" \";position:absolute;left:-4px;bottom:0;height:6px;width:6px;background-color:#919191;z-index:8;border-radius:50%}\n.tl-timemarker .tl-timemarker-content-container{position:absolute;background-color:#e5e5e5;border:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;height:100%;width:100px;overflow:hidden;z-index:6;transition:height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1);box-sizing:border-box;border:1px solid #d9d9d9;box-shadow:1px 1px 1px #fff}\n.tl-timemarker .tl-timemarker-content-container:hover{z-index:9}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content{position:relative;overflow:hidden;height:100%;z-index:8;padding:5px;box-sizing:border-box}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text{overflow:hidden;position:relative}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline,.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline p{display:-webkit-box;line-clamp:2;-webkit-line-clamp:2;box-orient:vertical;text-overflow:ellipsis;font-size:12px;line-height:12px;height:100%;overflow:hidden;font-weight:400;margin:0;color:#bfbfbf;position:relative}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline.tl-headline-fadeout:after,.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline p.tl-headline-fadeout:after{content:\"\";text-align:right;position:absolute;bottom:0;right:0;width:100%;height:50%;background:linear-gradient(to bottom,rgba(229,229,229,0)0,#e5e5e5 50%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='@thecolor', endColorstr='@thecolor', GradientType=0)}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container{float:left;max-width:24px;max-height:24px;overflow:hidden;margin-right:5px;height:100%;box-sizing:border-box}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container .tl-timemarker-media{max-width:24px;max-height:100%;opacity:.25}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class^=tl-icon-],.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class*=\" tl-icon-\"]{display:block;font-size:24px;color:#bfbfbf;margin-top:0}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container .tl-icon-wikipedia{font-size:16px}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content.tl-timemarker-content-small .tl-timemarker-text h2.tl-headline{display:block;white-space:nowrap;text-overflow:ellipsis}\n.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content.tl-timemarker-content-small .tl-timemarker-media-container [class^=tl-icon-],.tl-timemarker .tl-timemarker-content-container .tl-timemarker-content.tl-timemarker-content-small .tl-timemarker-media-container [class*=\" tl-icon-\"]{font-size:12px}\n.tl-timemarker:hover .tl-timemarker-timespan{background-color:rgba(191,191,191,.15)}\n.tl-timemarker:hover .tl-timemarker-timespan .tl-timemarker-timespan-content{background-color:#bfbfbf}\n.tl-timemarker:hover .tl-timemarker-timespan .tl-timemarker-line-left,.tl-timemarker:hover .tl-timemarker-timespan .tl-timemarker-line-right{border-color:#a6a6a6}\n.tl-timemarker:hover .tl-timemarker-timespan .tl-timemarker-line-left:after,.tl-timemarker:hover .tl-timemarker-timespan .tl-timemarker-line-right:after{background-color:#3d3d3d}\n.tl-timemarker:hover .tl-timemarker-content-container{background-color:#bfbfbf;border-color:#a6a6a6;transition:height 250ms cubic-bezier(.77,0,.175,1),width 250ms cubic-bezier(.77,0,.175,1)}\n.tl-timemarker:hover .tl-timemarker-content-container.tl-timemarker-content-container-small{width:200px}\n.tl-timemarker:hover .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{color:#fff}\n.tl-timemarker:hover .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline.tl-headline-fadeout:after{background:linear-gradient(to bottom,rgba(191,191,191,0)0,#bfbfbf 80%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='@thecolor', endColorstr='@thecolor', GradientType=0)}\n.tl-timemarker:hover .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container .tl-timemarker-media{opacity:1}\n.tl-timemarker:hover .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class^=tl-icon-],.tl-timemarker:hover .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class*=\" tl-icon-\"]{color:#fff}\n.tl-timemarker:hover.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline.tl-headline-fadeout:after{background:linear-gradient(to bottom,rgba(255,255,255,0)0,#fff 80%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='@thecolor', endColorstr='@thecolor', GradientType=0)}\n.tl-timemarker:hover.tl-timemarker-active .tl-timemarker-line-left,.tl-timemarker:hover.tl-timemarker-active .tl-timemarker-line-right{border-color:#000}\n.tl-timemarker:hover.tl-timemarker-active .tl-timemarker-line-left:after,.tl-timemarker:hover.tl-timemarker-active .tl-timemarker-line-right:after{background-color:#000}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-timespan{background-color:rgba(255,255,255,.5);z-index:8}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-timespan .tl-timemarker-timespan-content{background-color:#333}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-line-left,.tl-timemarker.tl-timemarker-active .tl-timemarker-line-right{border-color:rgba(51,51,51,.5);border-width:1px;z-index:8;box-shadow:0 1px 3px rgba(145,145,145,.5)}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-line-left:after,.tl-timemarker.tl-timemarker-active .tl-timemarker-line-right:after{background-color:#333}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container{background-color:#fff;color:#333;z-index:9;border-color:rgba(51,51,51,.5);box-shadow:1px 1px 3px rgba(145,145,145,.5)}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{color:#333}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline.tl-headline-fadeout:after{background:linear-gradient(to bottom,rgba(255,255,255,0)0,#fff 80%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='@thecolor', endColorstr='@thecolor', GradientType=0)}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container .tl-timemarker-media{opacity:1}\n.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class^=tl-icon-],.tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container [class*=\" tl-icon-\"]{color:#333}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-timespan .tl-timemarker-timespan-content{display:block}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-timespan .tl-timemarker-line-left,.tl-timemarker.tl-timemarker-with-end .tl-timemarker-timespan .tl-timemarker-line-right{z-index:5}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-timespan:after{display:block;content:\" \";position:absolute;left:0;bottom:-7px;height:6px;width:100%;background-color:rgba(115,115,115,.15);z-index:6;border-radius:7px}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-content-container.tl-timemarker-content-container-long{box-shadow:none}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-line-right{display:block}\n.tl-timemarker.tl-timemarker-with-end .tl-timemarker-line-left{box-shadow:none}\n.tl-timemarker.tl-timemarker-with-end:hover .tl-timemarker-timespan:after{background-color:rgba(0,0,0,.25)}\n.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-timespan:after{background-color:rgba(51,51,51,.5)}\n.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-line-left,.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-line-right{border-width:1px}\n.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-line-left:after,.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-line-right:after{background-color:#333!important}\n.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active .tl-timemarker-line-left{box-shadow:none}\n.tl-timemarker.tl-timemarker-with-end.tl-timemarker-active:hover .tl-timemarker-timespan:after{background-color:rgba(51,51,51,.5)}\n.tl-timeera{height:100%;height:40px;position:absolute;bottom:0;left:0;pointer-events:none;z-index:3;transition:left 1000ms cubic-bezier(.77,0,.175,1),top 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timeera.tl-timeera-fast{transition:top 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1),width 500ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timeera .tl-timeera-background{position:absolute;background-color:#28a6c3;width:100%;height:100%;opacity:1}\n.tl-timeera.tl-timeera-color0 .tl-timeera-background{background-color:#c34528}\n.tl-timeera.tl-timeera-color1 .tl-timeera-background{background-color:#28a6c3}\n.tl-timeera.tl-timeera-color2 .tl-timeera-background{background-color:#2832c3}\n.tl-timeera.tl-timeera-color3 .tl-timeera-background{background-color:#28c36c}\n.tl-timeera.tl-timeera-color4 .tl-timeera-background{background-color:#286dc3}\n.tl-timeera.tl-timeera-color5 .tl-timeera-background{background-color:#28c3a7}\n.tl-timeera .tl-timeera-content-container{position:absolute;border:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px;height:100%;width:100px;overflow:hidden;transition:height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1);box-sizing:border-box;border:1px solid #d9d9d9}\n.tl-timeera .tl-timeera-content-container .tl-timeera-content{position:relative;overflow:hidden;height:100%;padding:5px;box-sizing:border-box}\n.tl-timeera .tl-timeera-content-container .tl-timeera-content .tl-timeera-text{overflow:hidden;position:relative;height:100%}\n.tl-timeera .tl-timeera-content-container .tl-timeera-content .tl-timeera-text h2.tl-headline{bottom:0;position:absolute;display:-webkit-box;line-clamp:4;-webkit-line-clamp:4;box-orient:vertical;text-overflow:ellipsis;font-size:10px;line-height:10px;overflow:hidden;font-weight:400;margin:0;color:#fff;margin-left:10px}\n.tl-timeera .tl-timeera-content-container .tl-timeera-content .tl-timeera-text h2.tl-headline.tl-headline-fadeout:after{content:\"\";text-align:right;position:absolute;bottom:0;right:0;width:100%;height:50%;background:linear-gradient(to bottom,rgba(229,229,229,0)0,#e5e5e5 50%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='@thecolor', endColorstr='@thecolor', GradientType=0)}\n.tl-timegroup{width:100%;position:absolute;top:0;left:0;background-color:#f2f2f2;display:flex;align-items:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;transition:left 1000ms cubic-bezier(.77,0,.175,1),top 500ms cubic-bezier(.77,0,.175,1),height 500ms cubic-bezier(.77,0,.175,1),width 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timegroup .tl-timegroup-message{color:#e0e0e0;text-shadow:#fff 0 2px 2px;margin-left:80px}\n.tl-timegroup.tl-timegroup-alternate{background-color:#fafafa}\n.tl-timegroup.tl-timegroup-hidden{display:none}\n.tl-timeaxis-background{height:39px;width:100%;position:absolute;bottom:0;left:0;background-color:#fff;border-top:1px solid #e5e5e5;z-index:2}\n.tl-timeaxis{height:39px;width:100%;position:absolute;bottom:0;left:0;z-index:3}\n.tl-timeaxis .tl-timeaxis-content-container{position:relative;bottom:0;height:39px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor{opacity:0;position:absolute}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick{position:absolute;display:block;top:0;left:0;text-align:center;font-weight:400}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick .tl-timeaxis-tick-text,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick .tl-timeaxis-tick-text{display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick:before,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick:before{content:\"|\";display:block;color:#fff;width:1px;overflow:hidden;border-left:1px solid #bfbfbf;text-align:center}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major.tl-timeaxis-animate .tl-timeaxis-tick,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor.tl-timeaxis-animate .tl-timeaxis-tick{transition:all 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major.tl-timeaxis-animate-opacity .tl-timeaxis-tick,.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor.tl-timeaxis-animate-opacity .tl-timeaxis-tick{transition:opacity 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major{z-index:1;background-color:#fff}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick{font-size:12px;line-height:14px;color:#737373;width:100px;margin-left:-50px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-major .tl-timeaxis-tick:before{border-color:#a6a6a6;font-size:18px;line-height:18px;margin-bottom:2px;margin-left:50px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick{font-size:11px;line-height:13px;color:#bfbfbf;width:50px;margin-left:-25px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick .tl-timeaxis-tick-text{opacity:0;white-space:normal;padding-left:2px;padding-right:2px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick .tl-timeaxis-tick-text span{display:block;font-size:9px;line-height:9px;margin-top:-2px;color:#e6e6e6}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick:before{font-size:9px;line-height:9px;margin-left:25px}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick.tl-timeaxis-tick-hidden .tl-timeaxis-tick-text{opacity:0!important}\n.tl-timeaxis .tl-timeaxis-content-container .tl-timeaxis-minor .tl-timeaxis-tick.tl-timeaxis-tick-hidden:before{opacity:.33}\n.tlanimate{-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden}\n.tl-animate{transition:all 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-animate-opacity{transition:opacity 1000ms cubic-bezier(.77,0,.175,1);transition-timing-function:cubic-bezier(.77,0,.175,1)}\n.tl-slide{position:absolute;width:100%;height:100%;padding:0;margin:0;overflow-x:hidden;overflow-y:auto}\n.tl-slide .tl-slide-background{position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;overflow:hidden;display:none;filter:alpha(opacity=50);-khtml-opacity:.5;-moz-opacity:.5;opacity:.5;background:no-repeat center center;background-size:cover}\n.tl-slide .tl-slide-scrollable-container{display:table;table-layout:fixed;height:100%;z-index:1}\n.tl-slide .tl-slide-content-container{display:table-cell;vertical-align:middle;position:relative;width:100%;height:100%;z-index:3}\n.tl-slide .tl-slide-content-container .tl-slide-content{display:table;vertical-align:middle;padding-left:100px;padding-right:100px;position:relative;max-width:100%}\n.tl-slide .tl-slide-content-container .tl-slide-content .tl-media{position:relative;width:100%;min-width:50%;float:left;margin-top:auto;margin-bottom:auto}\n.tl-slide .tl-slide-content-container .tl-slide-content .tl-text{width:50%;max-width:50%;min-width:120px;padding:0 20px;display:table-cell;vertical-align:middle;text-align:left}\n.tl-slide-media-only .tl-slide-content-container .tl-slide-content{text-align:center}\n.tl-slide-media-only .tl-slide-content-container .tl-slide-content .tl-media{text-align:center;position:relative;width:100%;min-width:50%;max-width:100%;float:none;margin-top:auto;margin-bottom:auto}\n.tl-slide-media-only .tl-slide-content-container .tl-slide-content .tl-text{width:100%;max-width:100%;display:block;margin-left:auto;margin-right:auto;text-align:center}\n.tl-slide-text-only .tl-slide-content-container .tl-slide-content{text-align:center}\n.tl-slide-text-only .tl-slide-content-container .tl-slide-content .tl-text{max-width:80%;width:80%;display:block;margin-left:auto;margin-right:auto}\n.tl-slide.tl-full-image-background,.tl-slide.tl-full-color-background{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background p,.tl-slide.tl-full-color-background p,.tl-slide.tl-full-image-background h1,.tl-slide.tl-full-color-background h1,.tl-slide.tl-full-image-background h2,.tl-slide.tl-full-color-background h2,.tl-slide.tl-full-image-background h3,.tl-slide.tl-full-color-background h3,.tl-slide.tl-full-image-background h4,.tl-slide.tl-full-color-background h4,.tl-slide.tl-full-image-background h5,.tl-slide.tl-full-color-background h5,.tl-slide.tl-full-image-background h6,.tl-slide.tl-full-color-background h6{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background a,.tl-slide.tl-full-color-background a,.tl-slide.tl-full-image-background a:hover,.tl-slide.tl-full-color-background a:hover,.tl-slide.tl-full-image-background b,.tl-slide.tl-full-color-background b,.tl-slide.tl-full-image-background i,.tl-slide.tl-full-color-background i,.tl-slide.tl-full-image-background blockquote,.tl-slide.tl-full-color-background blockquote,.tl-slide.tl-full-image-background blockquote p,.tl-slide.tl-full-color-background blockquote p{color:#fff!important;text-shadow:1px 1px 1px #000!important;color:#fff}\n.tl-slide.tl-full-image-background .tl-caption,.tl-slide.tl-full-color-background .tl-caption,.tl-slide.tl-full-image-background .tl-credit,.tl-slide.tl-full-color-background .tl-credit{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background .tl-media-twitter blockquote,.tl-slide.tl-full-color-background .tl-media-twitter blockquote,.tl-slide.tl-full-image-background .tl-media-blockquote blockquote,.tl-slide.tl-full-color-background .tl-media-blockquote blockquote{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background .tl-media-twitter blockquote p,.tl-slide.tl-full-color-background .tl-media-twitter blockquote p,.tl-slide.tl-full-image-background .tl-media-blockquote blockquote p,.tl-slide.tl-full-color-background .tl-media-blockquote blockquote p{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background .vcard a,.tl-slide.tl-full-color-background .vcard a,.tl-slide.tl-full-image-background .vcard .nickname,.tl-slide.tl-full-color-background .vcard .nickname{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background{background:no-repeat center center;background-size:cover;background-position:center 25%;text-shadow:1px 1px 2px #000}\n.tl-slide.tl-full-image-background p,.tl-slide.tl-full-image-background h1,.tl-slide.tl-full-image-background h2,.tl-slide.tl-full-image-background h3,.tl-slide.tl-full-image-background h4,.tl-slide.tl-full-image-background h5,.tl-slide.tl-full-image-background h6{text-shadow:1px 1px 2px #000}\n.tl-slide.tl-full-image-background .tl-caption,.tl-slide.tl-full-image-background .tl-credit{text-shadow:1px 1px 2px #000}\n.tl-slide.tl-full-image-background .tl-media-twitter blockquote,.tl-slide.tl-full-image-background .tl-media-blockquote blockquote{text-shadow:1px 1px 2px #000!important}\n.tl-slide.tl-full-image-background .tl-media-twitter blockquote p,.tl-slide.tl-full-image-background .tl-media-blockquote blockquote p{text-shadow:1px 1px 2px #000!important}\n.tl-slide.tl-text-background .tl-text .tl-text-content-container{padding:20px;background:#000 transparent;background:rgba(0,0,0,.6);border-radius:7px}\n.tl-slide.tl-text-background .tl-text .tl-text-content-container h2{margin-top:5px}\n.tl-skinny .tl-slide{display:block;padding-top:10px}\n.tl-skinny .tl-slide .tl-slide-content-container{display:block;position:static;height:auto;height:100%;display:flex;align-items:center;-webkit-align-items:center}\n.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content{display:block;display:flex;flex-direction:column-reverse;position:static;height:auto;padding-left:50px;padding-right:50px}\n.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media{position:static;width:100%;height:auto;float:none;display:block;padding-top:20px;border-top:1px solid #e6e6e6}\n.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-text{display:block;height:auto;vertical-align:initial;position:static;width:100%;max-width:100%;min-width:0;float:none;padding:0}\n.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-text .tl-text-content-container{padding-left:10px;padding-right:10px;padding-bottom:10px}\n.tl-skinny .tl-slide.tl-slide.tl-full-color-background .tl-slide-content-container .tl-slide-content .tl-media,.tl-skinny .tl-slide.tl-full-image-background .tl-slide-content-container .tl-slide-content .tl-media{border-color:rgba(230,230,230,.25)}\n.tl-skinny .tl-slide.tl-slide-media-only .tl-slide-content-container .tl-slide-content{flex-direction:column}\n.tl-skinny .tl-slide.tl-slide-media-only .tl-slide-content-container .tl-slide-content .tl-media{border-top:none;padding-top:0}\n.tl-mobile.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media img,.tl-mobile.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media embed,.tl-mobile.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media object,.tl-mobile.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media video,.tl-mobile.tl-skinny .tl-slide .tl-slide-content-container .tl-slide-content .tl-media iframe{max-height:175px}\n.tl-slidenav-previous,.tl-slidenav-next{position:absolute;top:45%;z-index:10;cursor:pointer}\n.tl-slidenav-previous .tl-slidenav-content-container,.tl-slidenav-next .tl-slidenav-content-container{height:200px;width:100px;position:absolute}\n.tl-slidenav-previous .tl-slidenav-title,.tl-slidenav-next .tl-slidenav-title,.tl-slidenav-previous .tl-slidenav-description,.tl-slidenav-next .tl-slidenav-description{width:80px;-webkit-line-clamp:2;line-clamp:2;text-overflow:ellipsis;filter:alpha(opacity=15);-khtml-opacity:.15;-moz-opacity:.15;opacity:.15}\n.tl-slidenav-previous .tl-slidenav-title small,.tl-slidenav-next .tl-slidenav-title small,.tl-slidenav-previous .tl-slidenav-description small,.tl-slidenav-next .tl-slidenav-description small{display:block}\n.tl-slidenav-previous .tl-slidenav-title,.tl-slidenav-next .tl-slidenav-title{margin-top:10px;font-size:11px;line-height:11px}\n.tl-slidenav-previous .tl-slidenav-description,.tl-slidenav-next .tl-slidenav-description{font-size:11px;margin-top:5px;filter:alpha(opacity=0);-khtml-opacity:0;-moz-opacity:0;opacity:0}\n.tl-slidenav-previous .tl-slidenav-description small,.tl-slidenav-next .tl-slidenav-description small{display:none}\n.tl-slidenav-previous .tl-slidenav-content-container .tl-slidenav-icon,.tl-slidenav-next .tl-slidenav-content-container .tl-slidenav-icon,.tl-slidenav-previous .tl-slidenav-content-container .tl-slidenav-title,.tl-slidenav-next .tl-slidenav-content-container .tl-slidenav-title,.tl-slidenav-previous .tl-slidenav-content-container .tl-slidenav-description,.tl-slidenav-next .tl-slidenav-content-container .tl-slidenav-description{text-shadow:1px 1px 1px #fff;color:#333}\n.tl-slidenav-previous .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-icon,.tl-slidenav-next .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-icon,.tl-slidenav-previous .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-title,.tl-slidenav-next .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-title,.tl-slidenav-previous .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-description,.tl-slidenav-next .tl-slidenav-content-container.tl-slidenav-inverted .tl-slidenav-description{color:#f2f2f2;text-shadow:1px 1px 1px #333}\n.tl-slidenav-next .tl-slidenav-icon,.tl-slidenav-previous .tl-slidenav-icon{font-family:tl-icons;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:32px;margin-bottom:5px}\n.tl-slidenav-next{text-align:right;margin-right:10px;right:100px}\n.tl-slidenav-next .tl-slidenav-title,.tl-slidenav-next .tl-slidenav-description{margin-left:20px}\n.tl-slidenav-next .tl-slidenav-icon{margin-left:76px}\n.tl-slidenav-next .tl-slidenav-icon:before{content:\"\\e64f\"}\n.tl-slidenav-previous{text-align:left;margin-left:10px}\n.tl-slidenav-previous .tl-slidenav-icon{margin-left:0}\n.tl-slidenav-previous .tl-slidenav-icon:before{content:\"\\e650\"}\n.tl-slidenav-previous:hover .tl-slidenav-title,.tl-slidenav-next:hover .tl-slidenav-title{filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-slidenav-previous:hover .tl-slidenav-description,.tl-slidenav-next:hover .tl-slidenav-description{filter:alpha(opacity=50);-khtml-opacity:.5;-moz-opacity:.5;opacity:.5}\n.tl-slidenav-next:hover .tl-slidenav-icon{margin-left:80px}\n.tl-slidenav-previous:hover .tl-slidenav-icon{margin-left:-4px}\n.tl-skinny .tl-slidenav-next{right:32px}\n.tl-skinny .tl-slidenav-next .tl-slidenav-icon{margin-left:8px}\n.tl-skinny .tl-slidenav-previous .tl-slidenav-content-container,.tl-skinny .tl-slidenav-next .tl-slidenav-content-container{width:32px;height:32px}\n.tl-skinny .tl-slidenav-previous .tl-slidenav-title,.tl-skinny .tl-slidenav-next .tl-slidenav-title,.tl-skinny .tl-slidenav-previous .tl-slidenav-description,.tl-skinny .tl-slidenav-next .tl-slidenav-description{display:none}\n.tl-skinny .tl-slidenav-previous .tl-slidenav-icon,.tl-skinny .tl-slidenav-next .tl-slidenav-icon{filter:alpha(opacity=33);-khtml-opacity:.33;-moz-opacity:.33;opacity:.33}\n.tl-skinny .tl-slidenav-next:hover .tl-slidenav-icon{margin-left:12px;filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-skinny .tl-slidenav-previous:hover .tl-slidenav-icon{margin-left:-4px;filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-layout-landscape.tl-mobile .tl-slidenav-next:hover{right:70px}\n.tl-layout-landscape.tl-mobile .tl-slidenav-next:hover .tl-slidenav-icon{margin-left:8px;filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-layout-landscape.tl-mobile .tl-slidenav-next:active .tl-slidenav-icon{margin-left:0;filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-layout-landscape.tl-mobile .tl-slidenav-previous:hover .tl-slidenav-icon{margin-left:80px;filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-layout-landscape.tl-mobile .tl-slidenav-previous:active .tl-slidenav-icon{filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1;margin-left:-4px}\n.tl-layout-portrait.tl-mobile .tl-slidenav-next:hover .tl-slidenav-icon{filter:alpha(opacity=33);-khtml-opacity:.33;-moz-opacity:.33;opacity:.33}\n.tl-layout-portrait.tl-mobile .tl-slidenav-next:active .tl-slidenav-icon{filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-layout-portrait.tl-mobile .tl-slidenav-previous:hover .tl-slidenav-icon{filter:alpha(opacity=33);-khtml-opacity:.33;-moz-opacity:.33;opacity:.33}\n.tl-layout-portrait.tl-mobile .tl-slidenav-previous:active .tl-slidenav-icon{filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1}\n.tl-mobile .tl-slidenav-previous,.tl-skinny.tl-mobile .tl-slidenav-previous,.tl-skinny.tl-layout-landscape.tl-mobile .tl-slidenav-previous,.tl-skinny.tl-layout-portrait.tl-mobile .tl-slidenav-previous,.tl-mobile .tl-slidenav-next,.tl-skinny.tl-mobile .tl-slidenav-next,.tl-skinny.tl-layout-landscape.tl-mobile .tl-slidenav-next,.tl-skinny.tl-layout-portrait.tl-mobile .tl-slidenav-next{display:none}\n.tl-storyslider{width:100%;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;position:relative;box-sizing:content-box;z-index:8}\n.tl-storyslider img,.tl-storyslider embed,.tl-storyslider object,.tl-storyslider video,.tl-storyslider iframe{max-width:100%;position:relative}\n.tl-storyslider .tl-slider-background{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}\n.tl-storyslider .tl-slider-touch-mask{width:100%;height:100%;z-index:25;top:0;left:0;position:absolute}\n.tl-storyslider .tl-slider-container-mask{text-align:center;width:100%;height:100%;position:relative;z-index:5}\n.tl-storyslider .tl-slider-container-mask .tl-slider-container{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}\n.tl-storyslider .tl-slider-container-mask .tl-slider-container .tl-slider-item-container{width:100%;height:100%;display:table-cell;vertical-align:middle}\n.tl-media{width:100%;min-width:50%;height:100%;float:left;margin-top:auto;margin-bottom:auto;position:relative}\n.tl-media .tl-media-content-container.tl-media-content-container-text{border-right:1px solid #e6e6e6;padding-right:20px}\n.tl-media .tl-media-content-container .tl-media-content{position:relative;*zoom:1}\n.tl-media .tl-media-content-container .tl-media-content:before,.tl-media .tl-media-content-container .tl-media-content:after{display:table;content:\"\"}\n.tl-media .tl-media-content-container .tl-media-content:after{clear:both}\n.tl-media .tl-media-content-container .tl-media-content .tl-media-loaderror p{color:#f2f2f2;text-align:center}\n.tl-media .tl-media-content-container .tl-media-content .tl-media-loaderror p span{color:#f2f2f2}\n.tl-media .tl-media-content-container .tl-media-content .tl-media-loaderror [class^=tl-icon-],.tl-media .tl-media-content-container .tl-media-content .tl-media-loaderror [class*=\" tl-icon-\"]{font-size:28px;color:#f2f2f2;text-align:center}\n.tl-media .tl-media-content-container .tl-media-content img,.tl-media .tl-media-content-container .tl-media-content embed,.tl-media .tl-media-content-container .tl-media-content object,.tl-media .tl-media-content-container .tl-media-content video{max-width:100%;max-height:100%}\n.tl-slide-media-only .tl-media .tl-media-content-container.tl-media-content-container-text{border-right:none;padding-right:0}\n.tl-media-shadow{position:relative;z-index:1;box-shadow:0 12px 10px -10px rgba(0,0,0,.6)}\n.tl-slide.tl-full-image-background a,.tl-slide.tl-full-color-background a,.tl-slide.tl-full-image-background .vcard a,.tl-slide.tl-full-color-background .vcard a{color:#fff!important;text-shadow:1px 1px 1px #000!important;color:#fff}\n.tl-credit{color:#999;text-align:right;display:block;margin:0 auto;margin-top:6px;font-size:10px;line-height:13px}\n.tl-caption{text-align:left;margin-right:auto;margin-left:auto;margin-top:10px;color:#666;font-size:11px;line-height:14px;text-rendering:optimizeLegibility;word-wrap:break-word}\n.tl-full-image-background .tl-media-shadow:before,.tl-full-color-background .tl-media-shadow:before,.tl-full-image-background .tl-media-shadow:after,.tl-full-color-background .tl-media-shadow:after{background:0 0;box-shadow:0 0 0 #000}\n.tl-skinny .tl-media{width:100%;height:auto;float:none;display:block}\n.tl-skinny .tl-media .tl-media-content-container.tl-media-content-container-text{border-right:0;padding-right:0}\n.tl-skinny .tl-media .tl-media-content-container .tl-credit,.tl-skinny .tl-media .tl-media-content-container .tl-caption{margin-top:2px;padding-left:10px;padding-right:10px;font-size:8px}\n.tl-skinny .tl-media .tl-media-content-container .tl-credit{margin-top:0}\n.tl-mobile.tl-skinny .tl-media{width:100%;height:auto;float:none;display:block}\n.tl-mobile.tl-skinny .tl-media .tl-media-content-container.tl-media-content-container-text{border-right:0;padding-right:0}\n.tl-text{width:50%;max-width:50%;min-width:120px;padding:0 20px;display:table-cell;vertical-align:middle;text-align:left;text-shadow:none;color:#737373}\n.tl-text p{color:#737373}\n.tl-text h2.tl-headline-title,.tl-text h2.tl-headline{margin-top:0}\n.tl-text .tl-headline-date,.tl-text h3.tl-headline-date{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:15px;line-height:15px;font-weight:400;margin:0 0 3px;color:#b3b3b3}\n.tl-text .tl-headline-date small,.tl-text h3.tl-headline-date small{font-size:15px;line-height:15px;font-weight:400;color:#b3b3b3}\n.tl-text .tl-text-date{display:inline-block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:400;margin-top:10px;font-size:12px;color:#b3b3b3}\n.tl-full-image-background .tl-text,.tl-full-color-background .tl-text,.tl-full-image-background .tl-text p,.tl-full-color-background .tl-text p{color:#f2f2f2!important;text-shadow:1px 1px 2px #000}\n.tl-full-image-background .tl-text .tl-headline-date,.tl-full-color-background .tl-text .tl-headline-date,.tl-full-image-background .tl-text p .tl-headline-date,.tl-full-color-background .tl-text p .tl-headline-date,.tl-full-image-background .tl-text h3.tl-headline-date,.tl-full-color-background .tl-text h3.tl-headline-date,.tl-full-image-background .tl-text p h3.tl-headline-date,.tl-full-color-background .tl-text p h3.tl-headline-date{color:#f2f2f2!important}\n.tl-full-image-background .tl-text .tl-headline-date small,.tl-full-color-background .tl-text .tl-headline-date small,.tl-full-image-background .tl-text p .tl-headline-date small,.tl-full-color-background .tl-text p .tl-headline-date small,.tl-full-image-background .tl-text h3.tl-headline-date small,.tl-full-color-background .tl-text h3.tl-headline-date small,.tl-full-image-background .tl-text p h3.tl-headline-date small,.tl-full-color-background .tl-text p h3.tl-headline-date small{color:#f2f2f2!important}\n.tl-skinny .tl-text{width:100%;max-width:100%;min-width:auto;float:none;margin-top:20px}\n.tl-skinny .tl-text h2.tl-headline-title,.tl-skinny .tl-text h2.tl-headline{font-size:32px;line-height:36px}\n.tl-medium .tl-text h2.tl-headline-title,.tl-medium .tl-text h2.tl-headline{font-size:32px;line-height:36px}\n.tl-mobile.tl-skinny .tl-media .tl-media-image{max-height:250px!important}\n.tl-media .tl-media-twitter{text-align:left;clear:both}\n.tl-media .tl-media-twitter blockquote{margin:0;margin-right:15px;font-size:15px;line-height:21px;color:#333}\n.tl-media .tl-media-twitter blockquote p{font-size:28px;line-height:30px;color:#000}\n.tl-media .tl-media-twitter blockquote p:before{display:none}\n.tl-media .tl-media-twitter blockquote p:after{display:none}\n.tl-media .tl-media-twitter .tl-icon-twitter{color:#55acee}\n.tl-media .tl-media-twitter .vcard a:hover,.tl-media .tl-media-twitter .vcard a.tl-date:hover{text-decoration:none;color:#55acee}\n.tl-media .tl-media-twitter .vcard a:hover .fn,.tl-media .tl-media-twitter .vcard a.tl-date:hover .fn,.tl-media .tl-media-twitter .vcard a:hover .nickname,.tl-media .tl-media-twitter .vcard a.tl-date:hover .nickname{color:#55acee}\n.tl-slide-media-only .tl-media .tl-media-twitter{width:80%;margin-left:auto;margin-right:auto}\n.tl-mobile.tl-skinny .tl-media .tl-media-twitter blockquote p{font-size:15px;line-height:21px}\n.tl-skinny .tl-media .tl-media-twitter{margin-left:10px;margin-right:10px}\n.tl-skinny .tl-media .tl-media-twitter blockquote p{font-size:24px;line-height:26px}\n.tl-media .tl-media-blockquote{text-align:left;clear:both}\n.tl-media .tl-media-blockquote blockquote{margin:0;margin-right:15px;text-align:left;font-size:28px;line-height:30px;color:#333}\n.tl-media .tl-media-blockquote blockquote p{font-size:28px;line-height:30px;color:#333}\n.tl-media .tl-media-blockquote blockquote p:before,.tl-media .tl-media-blockquote blockquote p:after{display:inline-block;font-size:36px}\n.tl-media .tl-media-blockquote blockquote p:before{content:open-quote;margin-right:5px}\n.tl-media .tl-media-blockquote blockquote p:after{content:close-quote;margin-left:3px}\n.tl-media .tl-media-blockquote blockquote cite{font-size:15px;line-height:21px;color:#999;text-align:right;margin-top:15px}\n.tl-slide-media-only .tl-media .tl-media-blockquote{border-right:0;width:80%;margin-left:auto;margin-right:auto}\n@media only screen and (max-width:800px), only screen and (max-device-width:800px){.tl-media .tl-media-blockquote blockquote p{font-size:24px;line-height:26px}}\n@media only screen and (max-width:500px), only screen and (max-device-width:500px){.tl-media .tl-media-blockquote blockquote p{font-size:15px;line-height:21px}}\n.tl-mobile.tl-skinny .tl-media .tl-media-instagram{max-height:250px!important}\n.tl-media .tl-media-profile{border-radius:50%}\n.tl-media .tl-media-iframe{width:100%;height:100%}\n.tl-media .tl-media-iframe iframe{width:100%;height:100%}\n.tl-media .tl-media-wikipedia{text-align:left;margin-left:auto;margin-right:auto;clear:both}\n.tl-media .tl-media-wikipedia .tl-icon-wikipedia{font-size:32px;margin-right:10px;float:left;padding-top:3px}\n.tl-media .tl-media-wikipedia .tl-wikipedia-pageimage{float:left;margin-right:10px;margin-bottom:5px;margin-top:5px}\n.tl-media .tl-media-wikipedia .tl-wikipedia-title{margin-left:60px;padding-left:10px;border-left:1px solid #e6e6e6;margin-bottom:10px}\n.tl-media .tl-media-wikipedia .tl-wikipedia-source{font-size:13px;line-height:15px;font-style:italic;margin-top:3px;display:block;color:rgba(0,0,0,.5)}\n.tl-media .tl-media-wikipedia h4{margin-top:0;margin-bottom:0}\n.tl-media .tl-media-wikipedia h4 a{color:#000;text-decoration:none}\n.tl-media .tl-media-wikipedia h4 a:hover{text-decoration:underline}\n.tl-media .tl-media-wikipedia p{font-size:13px;line-height:19px}\n.tl-slide-media-only .tl-media .tl-media-wikipedia{border-right:0;border-top:1px solid #e6e6e6;width:80%;margin-left:auto;margin-right:auto;margin-top:25px;padding-top:25px}\n.tl-slide.tl-full-image-background .tl-media .tl-media-wikipedia,.tl-slide.tl-full-color-background .tl-media .tl-media-wikipedia{padding:20px;background:#000 transparent;background:rgba(0,0,0,.6);border-radius:7px}\n.tl-slide.tl-full-image-background .tl-media .tl-media-wikipedia h4 a,.tl-slide.tl-full-color-background .tl-media .tl-media-wikipedia h4 a{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-slide.tl-full-image-background .tl-media .tl-media-wikipedia .tl-wikipedia-title,.tl-slide.tl-full-color-background .tl-media .tl-media-wikipedia .tl-wikipedia-title{border-color:rgba(230,230,230,.25)}\n.tl-slide.tl-full-image-background .tl-media .tl-media-wikipedia .tl-wikipedia-source,.tl-slide.tl-full-color-background .tl-media .tl-media-wikipedia .tl-wikipedia-source{color:rgba(230,230,230,.85)}\n.tl-mobile.tl-skinny .tl-media .tl-media-wikipedia,.tl-skinny .tl-media .tl-media-wikipedia{margin-left:10px;margin-right:10px}\n.tl-media .tl-media-website{text-align:left;margin-left:auto;margin-right:auto;clear:both}\n.tl-media .tl-media-website .tl-media-website-description{font-size:16px;line-height:19px;font-style:italic;margin-bottom:10px;text-transform:uppercase}\n.tl-media .tl-media-website h4{margin-top:0;margin-bottom:0;line-height:1}\n.tl-media .tl-media-website h4 a{color:#000;text-decoration:none}\n.tl-media .tl-media-website h4 a:hover{text-decoration:underline}\n.tl-media .tl-media-website p{font-size:13px;line-height:19px}\n.tl-media .tl-media-content-container .tl-media-content .tl-media-website img{float:right;max-width:120px;max-height:120px;margin:4px 0 0 15px}\n.tl-media .tl-media-content-container .tl-media-content .tl-media-website img.tl-media-website-icon{max-width:16px;max-height:16px;float:none;margin:0;margin-right:3px}\n.tl-slide.tl-full-image-background .tl-media .tl-media-website,.tl-slide.tl-full-color-background .tl-media .tl-media-website{padding:20px;background:#000 transparent;background:rgba(0,0,0,.6);border-radius:7px}\n.tl-slide.tl-full-image-background .tl-media .tl-media-website h4 a,.tl-slide.tl-full-color-background .tl-media .tl-media-website h4 a{color:#fff!important;text-shadow:1px 1px 1px #000!important}\n.tl-mobile.tl-skinny .tl-media .tl-media-website{margin-left:10px;margin-right:10px}\n.tl-timeline{width:100%;height:100%;font-size:16px;line-height:normal;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;background-color:#fff;color:#737373;box-sizing:content-box}\n.tl-timeline.tl-timeline-embed{box-sizing:border-box;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-radius:0}\n.tl-timeline.tl-timeline-full-embed{box-sizing:border-box;border:1px solid #ccc;border-radius:8px}\n.tl-layout-portrait .tl-storyslider{box-shadow:0 -3px 6px rgba(0,0,0,.2)}\n.tl-rtl .tl-text-content,.tl-rtl .tl-headline,.tl-rtl .tl-media-blockquote,.tl-rtl .tl-headline-date,.tl-rtl .tl-timeline blockquote p,.tl-rtl .tl-media-website,.tl-rtl .tl-media-wikipedia,.tl-rtl .tl-media .tl-media-blockquote blockquote,.tl-rtl .blockquote,.tl-rtl blockquote p,.tl-rtl .tl-text-content p{text-align:right;direction:rtl}\n.tl-rtl .tl-slide-media-only .tl-headline,.tl-rtl .tl-slide-media-only .tl-headline-date{text-align:center}\n.tl-rtl .tl-timemarker-text{margin-right:35px}\n.tl-rtl .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container{float:right}\n.tl-rtl .tl-caption{text-align:right}\n.tl-rtl .tl-credit{text-align:left}"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'default',
    apiUrl: 'http://bits-redesign-stg.dev01.bitsamericas.net/',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/bitsamericas/webSiteBitsD8/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map