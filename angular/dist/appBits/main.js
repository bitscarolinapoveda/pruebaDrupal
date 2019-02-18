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

module.exports = "<section id=\"title-description\">\n    <h4 class=\"title-block-location\">Nuestra ubicacion</h4>\n    <p class=\"description-block-location\">Aqui podra ver la ubicacion de nuestras oficinas</p>\n    <!-- CONFIGURACION DE DRUPAL -->\n</section>\n<!-- MOBILE -->\n<section id=\"accordion-section-mobile\" (window:resize)=\"onResize(mobile)\" *ngIf=\"mobileScreen\">\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"static-0\" [closeOthers]=\"closeOthers\">\n        <ngb-panel *ngFor=\"let ubicacion of locations_data ; let i = index\" id=\"static-{{i}}\">\n            <ng-template ngbPanelTitle>\n                <div class=\"container location-block\">\n                    <div class=\"row location-button\">\n                        <div class=\"col-10 info-location\">\n                            <h2 class=\"location-li title\" >{{ubicacion.title}}</h2>\n                            <div id=\"address-block\" class=\"address-block\">\n                                <i class=\"fas fa-map-marker-alt\"></i>\n                                <li class=\"location-li address\">{{ubicacion.address}}</li>\n                            </div>\n                            <div class=\"telephone-block\">\n                                <i class=\"fas fa-phone\"></i>\n                                <li class=\"location-li telephone\">{{ubicacion.telephone}}</li>\n                            </div>\n                        </div>\n                        <div class=\"col-2 info-icon\">\n                            <i class=\"fas fa-sort-down\"></i>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n                <section id=\"mapa\">\n                    <agm-map [latitude]=\"ubicacion.lat\" [longitude]=\"ubicacion.lng\" [styles]=\"bitsTypeMap\" [zoom]=\"defaultZoomMap\" [backgroundColor]=\"colorWhileLoad\" style=\"height: 300px;\">\n                        <agm-marker [latitude]=\"ubicacion.lat\" [longitude]=\"ubicacion.lng\" [iconUrl]=\"imageIcon\"> \n                            <agm-info-window #window [isOpen]=\"true\">\n                                <h6 class=\"info-window-location\">{{ubicacion.title}}</h6>\n                                <h6 class=\"info-window-location address\">{{ubicacion.address}}</h6>\n                            </agm-info-window>\n                        </agm-marker>\n                    </agm-map>\n                </section>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n</section>\n<!-- DESKTOP -->\n<section id=\"accordion-section-desktop\" (window:resize)=\"onResize(desktop)\" *ngIf=\"desktopScreen\">\n    <div class=\"row general-box-location\">\n        <div class=\"col-4 buttons-location-desktop\">\n            <div class=\"control-button\" *ngIf=\"needButtons\">\n                <div class=\"col-12\">\n                    <div class=\"row arrow-up\" (click)=\"scrollMaps('up')\">\n                        <i id =\"up-arrow\" class=\"fas fa-chevron-circle-up fa-3x\"></i>\n                    </div>\n                    <div class=\"row arrow-down\" (click)=\"scrollMaps('down')\">\n                        <i id =\"down-arrow\" class=\"fas fa-chevron-circle-down fa-3x\"></i>\n                    </div>\n                </div>\n            </div>\n            <div id=\"box-of-buttons\" class=\"row location-button\">\n                <div id=\"{{i}}\" class=\"col-12 button-{{i}} info-location\" *ngFor=\"let ubicacion of locations_data ; let i = index\" (click)=\"ubicateCity(ubicacion, i)\">\n                    <h2 class=\"location-li title\" >{{ubicacion.title}}</h2>\n                    <div id=\"address-block\" class=\"address-block\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <li class=\"location-li address\">{{ubicacion.address}}</li>\n                    </div>\n                    <div class=\"telephone-block\">\n                        <i class=\"fas fa-phone\"></i>\n                        <li class=\"location-li telephone\">{{ubicacion.telephone}}</li>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-8 map-location-desktop\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"bitsTypeMap\" [zoom]=\"defaultZoomMap\" [ngStyle]=\"{'width': widthOftheMap}\" [backgroundColor]=\"colorWhileLoad\" style=\"height: 519px;\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"imageIcon\"> \n                    <agm-info-window #window [isOpen]=\"infoWindowOpen\">\n                        <h6 class=\"info-window-location\">{{ titleCity }}</h6>\n                        <h6 class=\"info-window-location address\">{{ addressCity }}</h6>\n                    </agm-info-window>\n                </agm-marker>\n            </agm-map>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/@adf/components/shared/locations/locations.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-description {\n  text-align: center;\n  height: 100%; }\n  #title-description .title-block-location {\n    font-family: Open Sans Codensed;\n    font-size: 30px;\n    display: block;\n    padding-top: 20px; }\n  #title-description .description-block-location {\n    font-family: Open Sans light;\n    font-size: 16px;\n    display: block;\n    margin: 0;\n    padding: 0 50px 40px 50px; }\n  :host /deep/ .card {\n  border-radius: 0; }\n  :host /deep/ .card-header,\n:host /deep/ .card-body {\n  padding: 0; }\n  :host /deep/ .btn.btn-link {\n  width: 100%;\n  height: 121px;\n  background: #d9dfe4;\n  text-decoration: none;\n  border-radius: 0; }\n  :host /deep/ .btn.btn-link .container.location-block .row.location-button .info-icon .fas.fa-sort-down {\n    transition: 1s ease all; }\n  :host /deep/ .btn.btn-link.collapsed {\n    background: #f2f4f6; }\n  :host /deep/ .btn.btn-link.collapsed .container.location-block .row.location-button .info-icon .fas.fa-sort-down {\n      -webkit-transform: rotate(-180deg);\n              transform: rotate(-180deg);\n      transition: 1s ease all; }\n  #accordion-section-mobile {\n  cursor: pointer;\n  padding: 0; }\n  #accordion-section-mobile .location-block.container {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    color: #002b49; }\n  #accordion-section-mobile .row.location-button {\n    width: 100%;\n    max-width: 100%; }\n  #accordion-section-mobile .row.location-button .info-location {\n      padding: 0 0 0 25px;\n      width: 360px; }\n  #accordion-section-mobile .row.location-button .info-icon {\n      padding: 18px 0 0 32px; }\n  #accordion-section-mobile .location-li {\n    text-align: left;\n    display: block; }\n  #accordion-section-mobile .location-li.title {\n    font-family: Open Sans Codensed;\n    font-size: 17px; }\n  #accordion-section-mobile .location-li.title:hover {\n    text-decoration: none; }\n  #accordion-section-mobile .address-block,\n  #accordion-section-mobile .telephone-block {\n    text-align: left;\n    display: block;\n    font-family: Open Sans;\n    font-size: 13px;\n    color: rgba(0, 43, 73, 0.7); }\n  #accordion-section-mobile .address-block .fas,\n    #accordion-section-mobile .telephone-block .fas {\n      margin-right: 10px;\n      margin-left: 5px; }\n  #accordion-section-mobile .address-block .fa-phone,\n    #accordion-section-mobile .telephone-block .fa-phone {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  #accordion-section-mobile .location-li.address,\n  #accordion-section-mobile .location-li.telephone {\n    display: inline-block; }\n  #accordion-section-mobile #mapa .info-window-location {\n    color: #002b49;\n    font-family: Open Sans Codensed;\n    font-size: 10px; }\n  #accordion-section-mobile #mapa .info-window-location.address {\n      margin: 0; }\n  #accordion-section-desktop {\n  cursor: pointer;\n  padding: 0; }\n  #accordion-section-desktop .general-box-location {\n    height: 520px;\n    border: 1px solid #eeeeee;\n    margin: 0; }\n  #accordion-section-desktop .general-box-location .row.location-button .button-0 {\n      background-color: #d9dfe4; }\n  #accordion-section-desktop .buttons-location-desktop {\n    position: relative;\n    color: #f2f4f6;\n    padding: 0;\n    margin: 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button {\n      position: absolute;\n      right: 20px;\n      z-index: 1; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-up {\n        margin: 20px 0 385px 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-up .fa-chevron-circle-up {\n          color: #c0c9d1; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-down {\n        margin: 0; }\n  #accordion-section-desktop .buttons-location-desktop .control-button .arrow-down .fa-chevron-circle-down {\n          color: #c0c9d1; }\n  #accordion-section-desktop .row.location-button {\n    width: 100%;\n    height: auto;\n    max-height: 520px;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    padding: 0;\n    margin: 0; }\n  #accordion-section-desktop .row.location-button .info-location {\n      background-color: #f2f4f6;\n      padding: 30px 10px 30px 70px;\n      height: 130px;\n      border-bottom: 1px solid #cacaca; }\n  #accordion-section-desktop .row.location-button .info-icon {\n      padding: 18px 0 0 32px; }\n  #accordion-section-desktop .location-li {\n    text-align: left;\n    display: block; }\n  #accordion-section-desktop .location-li.title {\n    font-family: Open Sans;\n    font-size: 18px;\n    color: #002b49; }\n  #accordion-section-desktop .location-li.title:hover {\n    text-decoration: none; }\n  #accordion-section-desktop .address-block,\n  #accordion-section-desktop .telephone-block {\n    text-align: left;\n    display: block;\n    font-family: Open Sans;\n    font-size: 14px;\n    color: rgba(0, 43, 73, 0.7); }\n  #accordion-section-desktop .address-block .fas,\n    #accordion-section-desktop .telephone-block .fas {\n      margin-right: 10px;\n      margin-left: 5px; }\n  #accordion-section-desktop .address-block .fa-phone,\n    #accordion-section-desktop .telephone-block .fa-phone {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  #accordion-section-desktop .location-li.address,\n  #accordion-section-desktop .location-li.telephone {\n    display: inline-block; }\n  #accordion-section-desktop .map-location-desktop {\n    padding: 0; }\n  #accordion-section-desktop .map-location-desktop .info-window-location {\n      color: #002b49;\n      font-family: Open Sans Codensed;\n      font-size: 18px; }\n  #accordion-section-desktop .map-location-desktop .info-window-location.address {\n        margin: 0;\n        font-size: 14px; }\n  @media only screen and (min-width: 768px) {\n  #title-description .title-block-location {\n    font-family: Open Sans Codensed;\n    font-size: 40px;\n    color: rgba(0, 43, 73, 0.8); }\n  #title-description .description-block-location {\n    font-family: Open Sans light;\n    font-size: 20px;\n    color: #002b49; }\n  #accordion-section .row.location-button {\n    margin: 0; }\n  :host /deep/ .agm-info-window-content {\n    height: 46px; } }\n"

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
    function LocationsComponent(_http) {
        this._http = _http;
        this.imageIcon = '/assets/icon/iconBitsLocationMarker.svg';
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
        this._http.get('/location-resources').subscribe(function (items) {
            for (var index = 0; index < items.length; index++) {
                items[index].lat = parseFloat(items[index].lat);
                items[index].lng = parseFloat(items[index].lng);
            }
            if (items.length > 4) {
                _this.needButtons = true;
            }
            _this.lat = items[0].lat;
            _this.lng = items[0].lng;
            _this.titleCity = items[0].title;
            _this.addressCity = items[0].address;
            _this.locations_data = items;
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
        this.addressCity = ubicacion.address;
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
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
                _work_us_work_us_component__WEBPACK_IMPORTED_MODULE_15__["WorkUsComponent"]
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
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/cards/components/banner/banner.component.ts");
/* harmony import */ var _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/titles/titles.component */ "./src/app/cards/components/titles/titles.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/cards/components/tabs/tabs.component.ts");
/* harmony import */ var _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/video-information/video-information.component */ "./src/app/cards/components/video-information/video-information.component.ts");
/* harmony import */ var _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/separator/separator.component */ "./src/app/cards/components/separator/separator.component.ts");
/* harmony import */ var _components_client_card_client_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/client-card/client-card.component */ "./src/app/cards/components/client-card/client-card.component.ts");
/* harmony import */ var _components_project_summary_project_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/project-summary/project-summary.component */ "./src/app/cards/components/project-summary/project-summary.component.ts");
/* harmony import */ var _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/menu-template/menu-template.component */ "./src/app/cards/components/menu-template/menu-template.component.ts");
/* harmony import */ var _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/slide/slide.component */ "./src/app/cards/components/slide/slide.component.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/cards/components/slider/slider.component.ts");
/* harmony import */ var _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/blurb/blurb.component */ "./src/app/cards/components/blurb/blurb.component.ts");
/* harmony import */ var _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/card-img-text/card-img-text.component */ "./src/app/cards/components/card-img-text/card-img-text.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/cards/components/blog/blog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_cards_node_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/cards/node.service */ "./src/app/services/cards/node.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adf_adf_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../@adf/adf.module */ "./src/app/@adf/adf.module.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _pipes_safehtml_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pipes/safehtml.pipe */ "./src/app/pipes/safehtml.pipe.ts");
/* harmony import */ var _pipes_safecss_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../pipes/safecss.pipe */ "./src/app/pipes/safecss.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// Servicios







//Pipes


var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_safehtml_pipe__WEBPACK_IMPORTED_MODULE_33__["SafeHtmlPipe"],
                _pipes_safecss_pipe__WEBPACK_IMPORTED_MODULE_34__["SafeCssPipe"],
                _components_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"],
                _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicatorsComponent"],
                _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__["CarouselControlsComponent"],
                _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItem2Component"],
                _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__["TecnologiesComponent"],
                _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__["PorqueBitsComponent"],
                _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__["AlliancesComponent"],
                _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__["WorkWithUsComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_13__["TitleComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"],
                _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_15__["VideoInformationComponent"],
                _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_16__["SeparatorComponent"],
                _components_client_card_client_card_component__WEBPACK_IMPORTED_MODULE_17__["ClientCardComponent"],
                _components_project_summary_project_summary_component__WEBPACK_IMPORTED_MODULE_18__["ProjectSummaryComponent"],
                _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_19__["MenuTemplateComponent"],
                _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_20__["SlideComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_21__["SliderComponent"],
                _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_22__["BlurbComponent"],
                _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_23__["CardImgTextComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"]
            ],
            exports: [
                _components_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__["CarouselItemComponent"],
                _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicatorsComponent"],
                _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__["CarouselControlsComponent"],
                _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItem2Component"],
                _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__["TecnologiesComponent"],
                _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__["PorqueBitsComponent"],
                _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__["AlliancesComponent"],
                _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__["WorkWithUsComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_13__["TitleComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"],
                _components_video_information_video_information_component__WEBPACK_IMPORTED_MODULE_15__["VideoInformationComponent"],
                _components_separator_separator_component__WEBPACK_IMPORTED_MODULE_16__["SeparatorComponent"],
                _components_client_card_client_card_component__WEBPACK_IMPORTED_MODULE_17__["ClientCardComponent"],
                _components_project_summary_project_summary_component__WEBPACK_IMPORTED_MODULE_18__["ProjectSummaryComponent"],
                _components_menu_template_menu_template_component__WEBPACK_IMPORTED_MODULE_19__["MenuTemplateComponent"],
                _components_slide_slide_component__WEBPACK_IMPORTED_MODULE_20__["SlideComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_21__["SliderComponent"],
                _components_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_22__["BlurbComponent"],
                _components_card_img_text_card_img_text_component__WEBPACK_IMPORTED_MODULE_23__["CardImgTextComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], _adf_adf_module__WEBPACK_IMPORTED_MODULE_28__["AdfModule"], ngx_slick__WEBPACK_IMPORTED_MODULE_29__["SlickModule"].forRoot(), ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_30__["OwlModule"], ngx_carousel__WEBPACK_IMPORTED_MODULE_31__["NgxCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]],
            providers: [_services_cards_node_service__WEBPACK_IMPORTED_MODULE_26__["NodeService"]]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/cards/components/alliances/alliances.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/alliances/alliances.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"transition-image2\">\n    <picture *ngIf=\"allianceBackground\">\n        <source media=\"(max-width:500px)\" [srcset]=\"allianceBackground.url\">\n        <img class=\"w-100 backgraund-image\" [src]=\"allianceBackground.url\" alt=\"{{ allianceBackground.title }}\">\n    </picture>\n    <h1>{{ allianceTitle?.title }}</h1>\n    <div class=\"list-image-item\">\n        <ul class=\"row\">\n            <li *ngFor=\"let our of allianceArrayLogos; let id = index\">\n                <picture>\n                    <img id=\"slide-img2-{{ id }}\" class=\"img-item2\" [src]=\"our.field_alliance_image.url\" [alt]=\"our.field_alliance_image.alt\" >\n                </picture>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/alliances/alliances.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/alliances/alliances.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#transition-image2 {\n  margin-top: 53px;\n  height: 358px;\n  display: block; }\n  @media (min-width: 1025px) {\n    #transition-image2 {\n      height: 300px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #transition-image2 {\n      height: 300px; } }\n  #transition-image2 picture {\n    display: flex; }\n  #transition-image2 picture .backgraund-image {\n      height: 358px;\n      position: absolute; }\n  @media (min-width: 1025px) {\n        #transition-image2 picture .backgraund-image {\n          height: 300px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #transition-image2 picture .backgraund-image {\n          height: 300px; } }\n  #transition-image2 h1 {\n    font-size: 30px;\n    color: #FFFFFF;\n    position: absolute;\n    z-index: 1;\n    margin-top: 62px;\n    width: 100%;\n    text-align: center; }\n  @media (min-width: 1025px) {\n      #transition-image2 h1 {\n        margin-left: 0%;\n        width: 100%;\n        margin-top: 67px;\n        font-size: 40px;\n        text-align: center; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #transition-image2 h1 {\n        width: 100%;\n        margin-left: 0%;\n        text-align: center;\n        margin-top: 67px;\n        font-size: 40px; } }\n  #transition-image2 .list-image-item {\n    height: 357px; }\n  #transition-image2 .list-image-item .row {\n      width: 100%;\n      padding: 0%;\n      position: absolute;\n      margin-top: 116px;\n      margin-right: auto;\n      margin-left: auto;\n      justify-content: center; }\n  @media (min-width: 1025px) {\n        #transition-image2 .list-image-item .row {\n          margin-top: 170px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #transition-image2 .list-image-item .row {\n          margin-top: 125px; } }\n  #transition-image2 .list-image-item .row li {\n        z-index: 1;\n        height: 49px;\n        width: 28%;\n        list-style: none;\n        display: flex;\n        margin-top: 9%;\n        margin-left: 5%;\n        margin-right: 5%;\n        align-items: center; }\n  @media (min-width: 1025px) {\n          #transition-image2 .list-image-item .row li {\n            height: auto;\n            width: initial;\n            justify-items: center;\n            padding: 0 3.2%;\n            margin-top: auto;\n            margin-left: initial;\n            margin-right: initial; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          #transition-image2 .list-image-item .row li {\n            height: auto;\n            width: initial;\n            margin-left: initial;\n            margin-right: initial;\n            margin-top: 3%;\n            padding: 0 2.2%; } }\n  #transition-image2 .list-image-item .row li img {\n          height: 100%;\n          width: 100%; }\n  #transition-image2 .list-image-item::after {\n    content: \"\";\n    background-color: #000000;\n    opacity: 0.3;\n    height: 358px;\n    width: 100%;\n    position: absolute; }\n  @media (min-width: 1025px) {\n      #transition-image2 .list-image-item::after {\n        height: 300px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #transition-image2 .list-image-item::after {\n        height: 300px; } }\n"

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



var AlliancesComponent = /** @class */ (function () {
    function AlliancesComponent(router, alliance) {
        this.router = router;
        this.alliance = alliance;
        this.allianceBackground = null;
    }
    AlliancesComponent.prototype.ngOnInit = function () {
        this.getAlliance();
    };
    AlliancesComponent.prototype.getAlliance = function () {
        var _this = this;
        this.alliance.getCustomCardInformation('ouralliance').subscribe(function (items) {
            _this.allianceTitle = items.header[0].data;
            _this.allianceBackground = items.body[0].data.back_movil[0];
            _this.allianceArrayLogos = items.data;
            //this.allianceArrayLogos = items.files[0].data.logo;
        });
    };
    AlliancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alliances',
            template: __webpack_require__(/*! ./alliances.component.html */ "./src/app/cards/components/alliances/alliances.component.html"),
            styles: [__webpack_require__(/*! ./alliances.component.scss */ "./src/app/cards/components/alliances/alliances.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"]])
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

module.exports = "<section class=\"page-header\">\n    <div class=\"title\">\n        <h1> {{ bannerTitle }} </h1>\n    </div>\n    <ng-container>\n        <picture>\n            <source media=\"(max-width:{{medius}})\" [srcset]=\"bannerBackground\">\n            <img [src]=\"bannerBackground\" alt=\"Contactenos\">\n        </picture>\n    </ng-container>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/banner/banner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cards/components/banner/banner.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\n  height: 352px; }\n  .page-header .title {\n    width: 100%;\n    color: #FFFFFF;\n    position: absolute;\n    margin-top: 178px;\n    text-align: center; }\n  .page-header .title h1 {\n      text-transform: uppercase;\n      position: absolute;\n      width: 100%;\n      margin-left: 50%;\n      font-size: 36px;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  @media (min-width: 1025px) {\n        .page-header .title h1 {\n          font-size: 50px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        .page-header .title h1 {\n          font-size: 50px; } }\n  .page-header picture img {\n    width: 100%;\n    height: 352px; }\n  .page-header::before {\n  content: \"\";\n  background-color: #000000;\n  opacity: 0.3;\n  height: 352px;\n  width: 100%;\n  position: absolute; }\n"

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
        this.titulo = "";
        this.imgFondo = "";
        this.bannerTitle = [];
        this.bannerBackground = [];
        this.medius = '550px';
    }
    BannerComponent.prototype.ngOnInit = function () {
        console.log("Mi titulo " + this.titulo + " y Mi Fondo " + this.imgFondo);
        if (this.titulo != "") {
            this.bannerTitle = this.titulo.toUpperCase();
            if (this.imgFondo != "") {
                this.bannerBackground = this.imgFondo;
            }
        }
        else {
            this.getBannerService();
        }
    };
    BannerComponent.prototype.getBannerService = function () {
        var _this = this;
        this.banner.getCustomCardInformation('contact_banner').subscribe(function (items) {
            _this.bannerTitle = items.header[0].data[0].title[0];
            _this.bannerBackground = items.header[0].data[0].url[0];
        });
    };
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

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1 class=\"condensed text-center\">{{ titulo }}</h1>\n    </div>\n    <div class=\"col-md-12\">\n        <p>{{ fechaPublicacion }}</p>\n        <div *ngFor=\"let postItem of postList\">\n            <h1 class=\"condensed\"> {{ postItem.tituloPost }}</h1>\n            <h3 class=\"condensed\"> {{ postItem.subtituloPost }} </h3>\n            <p class=\"text-justify\"> {{ postItem.descripcionPost }}</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/blog/blog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/blog/blog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.titulo = "Política de privacidad BITS Americas S.A.S";
        this.fechaPublicacion = "Febrero 22, 2018";
        this.postList = [{
                tituloPost: "Qui aliquip ex elit aliquip.",
                subtituloPost: "Laborum aliquip in ipsum nulla sint consequat",
                descripcionPost: "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
            }, {
                tituloPost: "Qui aliquip ex elit aliquip.",
                subtituloPost: "Laborum aliquip in ipsum nulla sint consequat",
                descripcionPost: "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
            }, {
                tituloPost: "Qui aliquip ex elit aliquip.",
                subtituloPost: "Laborum aliquip in ipsum nulla sint consequat",
                descripcionPost: "Reprehenderit ea ad dolor pariatur consequat nulla consequat elit elit velit irure do elit. Aliqua anim do esse esse occaecat eu. Aliquip culpa ad qui mollit exercitation ut nisi excepteur dolore veniam est sunt non exercitation. Irure sit consequat enim reprehenderit do proident consequat aliqua ea dolor esse reprehenderit. Consectetur velit do cupidatat aliqua minim velit esse nisi laboris est ullamco voluptate elit. Do aliqua exercitation mollit est quis labore eu irure esse dolor do."
            }];
    }
    BlogComponent.prototype.ngOnInit = function () { };
    BlogComponent.prototype.getPoliticService = function () {
        this._http.getCustomCardInformation('politics').subscribe(function (params) {
        });
    };
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

module.exports = "<div class=\"d-block mx-auto my-4 px-2\" style=\"width: 100%;\">\n    <img [src]=\"blurb.imageSrc\" alt=\"\" class=\"d-block mx-auto\" width=\"50\">\n    <h3 class=\"condensed text-center my-2\">{{ blurb.title }}</h3>\n    <p class=\"text-center\" [innerHTML]=\"blurb.description\" ></p>\n</div>"

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
        this.blurb = {
            imageSrc: 'assets/images/historiaclinicadesktop.png',
            title: 'titulo 1',
            description: 'hola mundo'
        };
    }
    BlurbComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BlurbComponent.prototype, "blurb", void 0);
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

module.exports = "<div class=\"row\" *ngIf=\"orientacion == 'IT'\" style=\"background-color:#f8f9fa\">\n    <div class=\"col-md-4 p-0\">\n        <img [src]=\"imagenCard\" alt=\"\" class=\"img-fluid w-100\">\n    </div>\n    <div class=\"col-md-8 d-block px-4 py-5\">\n        <h3 class=\"condensed\">{{ subitituloCard }}</h3>\n        <h1>{{ tituloCard | uppercase }}</h1>\n        <hr class=\"green\">\n        <p class=\"text-justify\">{{ descripcionCard }}</p>\n        <a [href]=\"linkCard\" class=\"green\">{{ linkLabelCard }}</a>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"orientacion == 'TI'\" style=\"background-color:#f8f9fa\">\n    <div class=\"col-md-8 d-block px-4 py-5\">\n        <h3 class=\"condensed\">{{ subitituloCard }}</h3>\n        <h1>{{ tituloCard | uppercase }}</h1>\n        <hr class=\"green\">\n        <p class=\"text-justify\">{{ descripcionCard }}</p>\n        <a [href]=\"linkCard\" class=\"green\">{{ linkLabelCard }}</a>\n    </div>\n    <div class=\"col-md-4 p-0\">\n        <img [src]=\"imagenCard\" alt=\"\" class=\"img-fluid w-100\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/card-img-text/card-img-text.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/card-img-text/card-img-text.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.condensed {\n  font-size: 20px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px;\n  color: #002b49;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nh1 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\nhr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\na {\n  color: #91b520;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter; }\n\np {\n  font-size: 14px;\n  width: 88%;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: lighter;\n  color: #002b49; }\n"

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
        this.tituloCard = "Título de este card con imagen";
        this.subitituloCard = "Sint labore exercitation sint voluptate aliqua commodo.";
        this.descripcionCard = "Lorem consectetur in enim cillum duis duis excepteur et minim adipisicing. Sint ea irure laboris in do irure do duis irure sint. Esse irure ex irure mollit exercitation. Nulla adipisicing enim reprehenderit occaecat ullamco eiusmod duis cupidatat quis. Elit aliquip officia deserunt tempor minim officia aliquip mollit minim anim nostrud veniam deserunt culpa.";
        this.linkCard = "www.loremipsum.com";
        this.linkLabelCard = "Ver CASOS DE ÉXITO de este producto";
        this.imagenCard = "assets/images/imagen-iz-de-web.png";
        this.orientacion = "";
    }
    CardImgTextComponent.prototype.ngOnInit = function () {
        //this.getCardImgTextService();
    };
    CardImgTextComponent.prototype.getCardImgTextService = function () {
        var _this = this;
        this._http.getCustomCardInformation('card-img-text').subscribe(function (params) {
            _this.tituloCard = params.data[0].titulo;
            _this.subitituloCard = params.data[0].subtitulo;
            _this.descripcionCard = params.data[0].descripcion;
            _this.linkCard = params.data[0].link;
            _this.linkLabelCard = params.data[0].label;
            _this.imagenCard = params.data[0].imagen;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardImgTextComponent.prototype, "orientacion", void 0);
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

module.exports = "<section id=\"main-title\">\n    <h2>{{ caroseltitle }}</h2>\n</section>\n\n<div class=\"contenedor\">\n    <ngx-carousel\n    [inputs]=\"carocarouselTile\"\n    (carouselLoad)=\"carouselTileLoad($event)\">\n        <ngx-tile NgxCarouselItem *ngFor=\"let main of CarouselControlArray; let i = index\">\n            <a href=\"\" class=\"url-link\">\n                <div class=\"container-img\">\n                    <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ main.field_image.url }}\" alt=\"{{ main.field_image.alt }}\">\n                </div>\n                <div class=\"info\">\n                    <hr class=\"line\">\n                    <h4 class=\"name-organization\">{{main.title}}</h4>\n                    <h3 class=\"main-title\">{{main.field_category}}</h3>\n                    <h5 class=\"category\">{{main.field_recognition}}</h5>\n                    <h5 class=\"yeard\">{{main.field_year}}</h5>\n                </div>\n            </a>\n        </ngx-tile>\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\n  </ngx-carousel>\n </div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var CarouselControlsComponent = /** @class */ (function () {
    function CarouselControlsComponent(router, AchievementCarouselItems, _cardService) {
        this.router = router;
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"],
            src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_3__["CustomCardService"]])
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

module.exports = "<!-- <section class=\"Slider\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide carousel-slider\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators slider-botton\">\n            <li *ngFor=\"let car of carouselArray; let i= index\" data-target=\"#carouselExampleIndicators\" [attr.data-slide-to]=\"i\" class=\"circle-botton\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active window-complete\">\n                <picture>\n                    <source srcset=\"assets/images/movil.jpg\" media=\"(max-width:{{medius}})\">\n                    <img class=\"d-block w-100\" [src]=\"carouselArray[1]?.field_image\" alt=\"bits\">\n                    <div class=\"carousel-caption  d-md-block text-slider\">\n                        <h1 class=\"title-slider\"> {{carouselArray[1]?.title}} </h1>\n                        <p class=\"description-slider\">{{carouselArray[1]?.field_tags}}</p>\n                    </div>\n                </picture>\n            </div>\n            <app-carousel-item></app-carousel-item>\n        </div>\n        <a class=\"down-main\" (click)=\"down()\">\n            <div class=\"arrow-down\"></div>\n        </a>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon icon-mobile icon-prev\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next \" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon  icon-mobile icon-next\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n    <a class=\"anchor\"></a>\n</section> -->\n<section id=\"carousel-container\">\n    <ngb-carousel *ngIf=\"carousel\" (window:resize)=\"onResize()\">\n        <ng-template class=\"prueba\" ngbSlide *ngFor=\"let item of carousel\">\n            <img class=\"carousel-main-image\" [src]=\"item.field_image\" alt=\"Random first slide\" [ngStyle]=\"{'height': height}\">\n            <div class=\"carousel-caption\">\n            <h3 class=\"carousel-title\">{{ item.title }}</h3>\n            <p class=\"carousel-subtitle\">{{ item.field_tags }}</p>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n    <div class=\"col section-button-explorar\" (click)=\"slideDown()\">       \n        <div class=\"row button-explorar\">\n            <h6 class=\"anchor\">EXPLORAR</h6>\n        </div>\n        <div class=\"row button-explorar\">\n            <i class=\"fas fa-angle-down\"></i>\n        </div>\n    </div>\n</section>\n<!--<a>Anchor</a>-->"

/***/ }),

/***/ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .carousel-control-next,\n:host /deep/ .carousel-control-prev {\n  width: 50px; }\n\n:host /deep/ .carousel-indicators {\n  bottom: 150px;\n  justify-content: flex-end;\n  margin: 0 100px 0 0; }\n\n:host /deep/ .carousel-indicators li {\n  width: 15px;\n  height: 15px;\n  margin: 0 5px;\n  border-radius: 50%; }\n\n:host /deep/ .carousel-indicators li.active {\n    background-color: #a6cf24; }\n\n#carousel-container .carousel-main-image {\n  max-height: 1080px;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5); }\n\n@media (min-width: 1025px) {\n    #carousel-container .carousel-main-image {\n      width: 100%; } }\n\n#carousel-container .carousel-caption {\n  width: 100%;\n  text-align: right;\n  top: 50%;\n  right: 0;\n  left: 0;\n  padding: 0 100px 0 100px; }\n\n#carousel-container .carousel-caption .carousel-title {\n    font-family: Open Sans light;\n    font-size: 50px;\n    display: block; }\n\n#carousel-container .carousel-caption .carousel-subtitle {\n    font-family: Open Sans light;\n    font-size: 28px;\n    display: block;\n    padding-left: 25%; }\n\n#carousel-container .section-button-explorar {\n  position: absolute;\n  bottom: 35px;\n  cursor: pointer; }\n\n#carousel-container .section-button-explorar .button-explorar {\n    justify-content: center; }\n\n#carousel-container .section-button-explorar .button-explorar .fa-angle-down {\n      color: white; }\n\n#carousel-container .section-button-explorar .button-explorar .anchor {\n      font-family: Open Sans Codensed;\n      font-size: 16px;\n      color: white; }\n\n@media only screen and (max-width: 1024px) {\n  :host /deep/ .carousel-control-next,\n  :host /deep/ .carousel-control-prev {\n    visibility: hidden; }\n  :host /deep/ .carousel-indicators {\n    bottom: 150px;\n    justify-content: center;\n    margin: 0 0 0 0; }\n  #carousel-container .carousel-caption {\n    text-align: center;\n    top: 40%;\n    padding: 0 50px 0 50px; }\n    #carousel-container .carousel-caption .carousel-title {\n      font-family: Open Sans light;\n      font-size: 36px;\n      display: block; }\n    #carousel-container .carousel-caption .carousel-subtitle {\n      font-family: Open Sans light;\n      font-size: 18px;\n      display: block;\n      padding: 0; } }\n\n@media only screen and (max-width: 321px) {\n  :host /deep/ .carousel-indicators {\n    bottom: 95px; } }\n"

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
/* harmony import */ var _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cards/content-type.services */ "./src/app/services/cards/content-type.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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
    function CarouselIndicatorsComponent(indicatorsSliderCarouselItems) {
        this.indicatorsSliderCarouselItems = indicatorsSliderCarouselItems;
        this.medius = '550px';
        this.carouselArray = [];
        this.height = (window.innerHeight) + 'px';
    }
    CarouselIndicatorsComponent.prototype.ngOnInit = function () {
        this.getIndicatorsSliderItems();
    };
    CarouselIndicatorsComponent.prototype.getIndicatorsSliderItems = function () {
        var _this = this;
        return this.indicatorsSliderCarouselItems.getContentTypeItems('articles').subscribe(function (items) {
            _this.carousel = items;
        });
    };
    CarouselIndicatorsComponent.prototype.onResize = function () {
        this.height = (window.innerHeight) + 'px';
    };
    CarouselIndicatorsComponent.prototype.slideDown = function () {
        var navBarHeight = document.querySelector('.navbar-expand-lg').clientHeight;
        jquery__WEBPACK_IMPORTED_MODULE_2__('html, body').animate({
            scrollTop: window.innerHeight - navBarHeight
        }, 2000);
        return false;
    };
    CarouselIndicatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-indicators',
            template: __webpack_require__(/*! ./carousel-indicators.component.html */ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.html"),
            styles: [__webpack_require__(/*! ./carousel-indicators.component.scss */ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"]])
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

module.exports = "\n<section id=\"main-title\">\n    <h2>{{ titleClients }}</h2>\n</section>\n\n<div class=\"contenedor\">\n    <ngx-carousel\n    [inputs]=\"carocarouselTile\"\n    (carouselLoad)=\"carouselTileLoad($event)\">\n\n          <ngx-tile NgxCarouselItem *ngFor=\"let ourC of clients; let i = index\">\n            <a href=\"#\" class=\"url-carousel\" >\n                <div class=\"container-img col-md-3 \">\n                    <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ ourC.field_image.url }}\" alt=\"{{ ourC.field_image.alt }}\">\n                </div>\n                <div class=\"info-carousel\">\n                    <h3 class=\"title\">{{ ourC.title }}</h3>\n                    <p class=\"text-description\">{{ ourC.field_description }}</p>\n                </div>\n            </a>\n\n          </ngx-tile>\n\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\n  </ngx-carousel>\n\n</div>"

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
        this.titleClients = "";
        this.clients = [];
    }
    CarouselItem2Component.prototype.ngOnInit = function () {
        this.getOurClientsItems();
        this.clients = [0, 1, 2, 3, 4, 5,];
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

module.exports = "<div class=\"carousel-item window-complete\" *ngFor=\"let car of carouselsArray\">\n    <picture>\n        <source srcset=\"assets/images/movil.jpg\" media=\"(max-width:{{medius}})\">\n\n        <img class=\"d-block w-100 \" [src]=\" car.field_image \" alt=\"desarrollo de software \">\n\n        <div class=\"carousel-caption d-md-block text-slider \">\n            <h1 class=\"title-slider \"> {{car.title}} </h1>\n            <p class=\"description-slider \">{{car.field_tags}}</p>\n        </div>\n    </picture>\n</div>"

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
/* harmony import */ var _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/cards/content-type.services */ "./src/app/services/cards/content-type.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselItemComponent = /** @class */ (function () {
    function CarouselItemComponent(sliderCarouselItems) {
        this.sliderCarouselItems = sliderCarouselItems;
        this.carouselsArray = [];
        this.medius = '550px';
    }
    CarouselItemComponent.prototype.ngOnInit = function () {
        this.getCarouselsItems();
    };
    CarouselItemComponent.prototype.getCarouselsItems = function () {
        var _this = this;
        return this.sliderCarouselItems.getContentTypeItems('articles').subscribe(function (items) {
            _this.carouselsArray = Object.keys(items).map(function (key) {
                return items[key];
            });
        });
    };
    CarouselItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-item',
            template: __webpack_require__(/*! ./carousel-item.component.html */ "./src/app/cards/components/carousel-item/carousel-item.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item.component.scss */ "./src/app/cards/components/carousel-item/carousel-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"]])
    ], CarouselItemComponent);
    return CarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/client-card/client-card.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/client-card/client-card.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2 class=\"condensed\">{{ titleCard | uppercase}}</h2>\n        <hr class=\"green\">\n        <img id=\"logo-cliente\" [src]=\"imgSrcClient\" class=\"img-fluid\" alt=\"Logo de {{nameClient}}\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/client-card/client-card.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/client-card/client-card.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo-cliente {\n  width: 50%;\n  display: block;\n  margin: 0px auto; }\n\nhr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\nh2 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter; }\n\nh2.condensed {\n  color: #002b4994;\n  font-size: 22px; }\n"

/***/ }),

/***/ "./src/app/cards/components/client-card/client-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cards/components/client-card/client-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCardComponent", function() { return ClientCardComponent; });
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


var ClientCardComponent = /** @class */ (function () {
    function ClientCardComponent(_http) {
        this._http = _http;
        this.titleCard = "El Cliente";
        this.nameClient = "Universidad Javeriana";
        this.imgSrcClient = "/assets/images/logo-javeriana.png";
    }
    ClientCardComponent.prototype.ngOnInit = function () {
        //this.getClientCardService();
    };
    ClientCardComponent.prototype.getClientCardService = function () {
        var _this = this;
        this._http.getCustomCardInformation('client-card').subscribe(function (params) {
            _this.titleCard = params.data[0].title;
            _this.imgSrcClient = params.data[0].src;
            _this.nameClient = params.data[0].name;
        });
    };
    ClientCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-card',
            template: __webpack_require__(/*! ./client-card.component.html */ "./src/app/cards/components/client-card/client-card.component.html"),
            styles: [__webpack_require__(/*! ./client-card.component.scss */ "./src/app/cards/components/client-card/client-card.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], ClientCardComponent);
    return ClientCardComponent;
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

module.exports = ".social-networks {\n  width: 41px;\n  height: auto;\n  background-color: #517bbd;\n  opacity: 0.7;\n  position: fixed;\n  z-index: 9;\n  bottom: 120px;\n  display: none; }\n  @media (min-width: 1025px) {\n    .social-networks {\n      display: block; } }\n  .social-networks .icon-social {\n    display: block; }\n  .social-networks .icon-social .row {\n      margin-left: 13px;\n      width: 0; }\n  .social-networks .icon-social .row li {\n        margin-right: 1px;\n        margin-bottom: 9px; }\n  .social-networks .icon-social .row li a {\n          display: block;\n          color: #FFFFFF;\n          margin-top: 11px; }\n  .social-networks .icon-social .row a:hover {\n        color: #a6cf24; }\n  .envolope {\n  width: 41px;\n  height: 41px;\n  background-color: #a6cf24;\n  opacity: 0.7;\n  position: fixed;\n  border-radius: 50%;\n  display: block;\n  z-index: 9;\n  right: 40px;\n  bottom: 0; }\n  @media (min-width: 1025px) {\n    .envolope {\n      border-radius: 0;\n      bottom: 40px;\n      right: initial; } }\n  .envolope .icon-mail {\n    font-size: 22px;\n    margin-top: 5px;\n    margin-left: 0px; }\n  .envolope .icon-mail .row {\n      margin-right: 0;\n      margin-left: 0; }\n  .envolope .icon-mail .row .fa-li {\n        left: 0; }\n  @media (min-width: 1025px) {\n          .envolope .icon-mail .row .fa-li {\n            left: 0; } }\n  .envolope .icon-mail a {\n      color: #FFFFFF; }\n"

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
        var allDocument = document.documentElement;
        if (allDocument.clientHeight + Math.round(allDocument.scrollTop) === allDocument.scrollHeight) {
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

module.exports = "<ng-container>\n    <section id=\"footer-block-location\">\n        <div class=\"row row-block\">\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-block\" *ngFor=\"let ubicacion of dataUbicaciones; let i = index\">\n                <div class=\"footer-block-location\" [class.site]=\"i > 0\" [class.random]=\"i > 0\">\n                    <div class=\"row location-row\">\n                        <div class=\"col-10 info-location\">\n                            <h2 class=\"title-location\" >{{ ubicacion.title }}</h2>\n                            <div class=\"subtitle-location\">\n                                <li class=\"location-li address\">{{ubicacion.address}}</li>\n                                <li class=\"location-li telephone\">{{ubicacion.telephone}}</li>\n                                <li class=\"location-li see-location office\" *ngIf=\"i == 0\">\n                                    <a class=\"link-location\" routerLink=\"/contact-us/\" fragment=\"title-description\" (click)=\"cargarMapaUbicaciones()\">\n                                        <i class=\"fas fa-compass\"></i>\n                                        Ver todas nuestras oficinas\n                                    </a>\n                                </li>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</ng-container>"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.scss":
/*!************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block-location {\n  margin: 20px 0 20px 31%;\n  padding: 0 0 0 30px;\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n  border-left: 1px solid rgba(255, 255, 255, 0.3); }\n  #footer-block-location .row-block {\n    margin: 0; }\n  #footer-block-location .row-block .col-block {\n      padding: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row {\n        margin: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location {\n          padding: 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .title-location {\n            color: white;\n            font-family: Open Sans;\n            font-size: 12px; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location {\n            color: rgba(255, 255, 255, 0.7);\n            font-family: Open Sans Light;\n            font-size: 11px; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.address,\n            #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.telephone,\n            #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location {\n              list-style: none;\n              display: block;\n              margin: 8px 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location {\n              margin: 9px 0; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location {\n                font-family: Open Sans Light;\n                font-size: 12px;\n                color: #a6cf24; }\n  #footer-block-location .row-block .col-block .footer-block-location .location-row .info-location .subtitle-location .location-li.see-location .link-location:hover {\n                  color: #83a024;\n                  text-decoration: none; }\n  @media only screen and (max-width: 769px) {\n  #footer-block-location {\n    border-right: 0;\n    border-left: 0;\n    margin: 70px 0 20px 0;\n    padding: 0; }\n    #footer-block-location .row-block .col-block .footer-block-location.site {\n      display: none; }\n    #footer-block-location .row-block .col-block .footer-block-location .location-row {\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n    #footer-block-location .row-block .col-block .footer-block-location .info-location {\n      text-align: center; } }\n  @media only screen and (min-width: 769px) and (max-width: 1025px) {\n  #footer-block-location {\n    margin: 20px 0 20px 13%; } }\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.ts ***!
  \**********************************************************************/
/*! exports provided: FooterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlock", function() { return FooterBlock; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FooterBlock.prototype, "idBlock", void 0);
    FooterBlock = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-block',
            template: __webpack_require__(/*! ./footer-block.html */ "./src/app/cards/components/footer/footer-block/footer-block.html"),
            styles: [__webpack_require__(/*! ./footer-block.scss */ "./src/app/cards/components/footer/footer-block/footer-block.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], FooterBlock);
    return FooterBlock;
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

module.exports = "<ng-container>\n  <section id=\"footer-block-newsletter\">\n    <div class=\"newsletter-info\">\n      <h6>NEWSLETTER</h6>\n      <p>Reciba nuestras ultimas noticias</p>\n      <button>\n          Subscribirse\n          <i class=\"fas fa-paper-plane\"></i>\n      </button>\n    </div>\n  </section>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer-block-newsletter {\n  margin: 20px 0 20px 0;\n  border-right: 1px solid rgba(255, 255, 255, 0.3); }\n  #footer-block-newsletter .newsletter-info h6 {\n    color: white;\n    font-family: Open Sans;\n    font-size: 12px; }\n  #footer-block-newsletter .newsletter-info p {\n    color: rgba(255, 255, 255, 0.7);\n    font-family: Open Sans Light;\n    font-size: 11px; }\n  #footer-block-newsletter .newsletter-info button {\n    cursor: pointer;\n    margin: 8px 0 0 0;\n    width: 160px;\n    height: 34px;\n    text-align: left;\n    color: white;\n    font-family: Open Sans Light;\n    font-size: 11px;\n    background: rgba(255, 255, 255, 0.2);\n    border: none; }\n  #footer-block-newsletter .newsletter-info button .fa-paper-plane {\n      padding-left: 60px; }\n  #footer-block-newsletter .newsletter-info button:hover {\n      background: rgba(255, 255, 255, 0.5); }\n  @media only screen and (max-width: 769px) {\n  #footer-block-newsletter {\n    margin: 30px 0 30px 0;\n    text-align: center;\n    border-right: 0px; } }\n  @media only screen and (min-width: 769px) and (max-width: 1025px) {\n  #footer-block-newsletter .newsletter-info button {\n    width: 120px;\n    height: 25px;\n    margin: 3px 0 0 0; }\n    #footer-block-newsletter .newsletter-info button .fa-paper-plane {\n      padding-left: 30px; } }\n"

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
    function FooterNewsletterComponent() {
    }
    FooterNewsletterComponent.prototype.ngOnInit = function () {
    };
    FooterNewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-newsletter',
            template: __webpack_require__(/*! ./footer-newsletter.component.html */ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.html"),
            styles: [__webpack_require__(/*! ./footer-newsletter.component.scss */ "./src/app/cards/components/footer/footer-newsletter/footer-newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/cards/components/menu-template/menu-template.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/menu-template/menu-template.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center mb-3\">\n    <li class=\"nav-item\" *ngFor=\"let menuItem of menuList\">\n        <a class=\"nav-link\" [href]=\"menuItem.url\">{{ menuItem.label | uppercase }}</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/cards/components/menu-template/menu-template.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/components/menu-template/menu-template.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.nav-item {\n  border-right: 1px solid #a6cf24; }\n  li.nav-item:last-child {\n    border-right: none; }\n  a {\n  font-family: 'Open Sans light';\n  color: #002b49;\n  transition: 0.3s all;\n  -webkit-transition: 0.3s all;\n  -moz-transition: 0.3s all;\n  -o-transition: 0.3s all; }\n  a:hover {\n    font-weight: bold; }\n"

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
    function MenuTemplateComponent(_http) {
        this._http = _http;
        this.menuList = [
            {
                label: "Módulos",
                url: "/menu1"
            },
            {
                label: "Tecnologías",
                url: "/menu2"
            },
            {
                label: "Testimonios",
                url: "/menu3"
            },
            {
                label: "Logros",
                url: "/menu4"
            },
            {
                label: "Screenshot",
                url: "/menu5"
            },
            {
                label: "Equipos",
                url: "/menu5"
            },
            {
                label: "Videos",
                url: "/menu5"
            },
            {
                label: "Clientes",
                url: "/menu5"
            },
            {
                label: "Relacionados",
                url: "/menu5"
            }
        ];
    }
    MenuTemplateComponent.prototype.ngOnInit = function () {
        //this.getMenuTemplateService();
    };
    MenuTemplateComponent.prototype.getMenuTemplateService = function () {
        var _this = this;
        this._http.getCustomCardInformation('menu-template').subscribe(function (params) {
            _this.menuList = params.data[0].menu;
        });
    };
    MenuTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-template',
            template: __webpack_require__(/*! ./menu-template.component.html */ "./src/app/cards/components/menu-template/menu-template.component.html"),
            styles: [__webpack_require__(/*! ./menu-template.component.scss */ "./src/app/cards/components/menu-template/menu-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], MenuTemplateComponent);
    return MenuTemplateComponent;
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

module.exports = "<section id=\"title-gallery\">\n    <div class=\"title\">\n        <h1> {{ title }} </h1>\n    </div>\n</section>\n<section id=\"gallery-images\">\n    <div class=\"tz-gallery\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4\" *ngFor=\"let ps of servicesProduct\">\n                <div class=\"thumbnai\">\n                    <div class=\"background\">\n                        <img class=\"images lightbox\" [src]=\"ps.field_ps_short_image.url\" alt=\"{{ps.field_ps_short_image.alt}}\">\n                    </div>\n                    <div class=\"box-title\">\n                        <span class=\"titlepr\">{{ ps.title }}</span>\n                        <div class=\"box-text\">\n                            <span class=\"text\" [innerHTML]=\"ps.body\"></span>\n                        </div>\n                    </div>\n                    <div class=\"box-info\">\n                        <div class=\"box-botton\">\n                            <a class=\"botton_products\" href=\"#\">Ver Mas</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section id=\"bottons-services\">\n    <div class=\"totalbottons\">\n        <div class=\"bottons\">\n            <a class=\"bottonleft\" routerLink=\"products\">VER PRODUCTOS </a>\n            <a class=\"bottonrigth\" routerLink=\"services\">VER SERVICIOS </a>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/product-services/product-services.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/product-services/product-services.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-gallery {\n  margin-top: 14%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #title-gallery {\n      margin-top: 7%; } }\n  @media (min-width: 1025px) {\n    #title-gallery {\n      margin-top: 4%; } }\n  #title-gallery .title {\n    background: #f7f9f9;\n    height: 160px;\n    padding-top: 11%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #title-gallery .title {\n        padding-top: 7%; } }\n  @media (min-width: 1025px) {\n      #title-gallery .title {\n        height: 171px;\n        padding-top: 3.5%; } }\n  #title-gallery .title h1 {\n      width: 97%;\n      padding-left: 8%;\n      padding-right: 4%;\n      margin-bottom: 0%;\n      text-align: center;\n      text-transform: uppercase;\n      color: #002b49; }\n  @media (min-width: 1025px) {\n        #title-gallery .title h1 {\n          width: 100%;\n          padding-left: 0%;\n          padding-right: 0%; } }\n  #gallery-images {\n  height: 1116px;\n  overflow: hidden; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #gallery-images {\n      height: auto; } }\n  @media (min-width: 1025px) {\n    #gallery-images {\n      height: 906px; } }\n  #gallery-images .block-title {\n    height: 142px;\n    width: 100%;\n    background: #f7f9f9; }\n  @media (min-width: 1025px) {\n      #gallery-images .block-title {\n        height: 185px; } }\n  #gallery-images .block-title h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: 200;\n      font-size: 40px;\n      margin: 0%;\n      z-index: 100;\n      color: #002b49;\n      padding: 0%;\n      padding-top: 11%;\n      padding-top: 81px;\n      padding-bottom: 61px; }\n  @media (min-width: 1025px) {\n        #gallery-images .block-title h2 {\n          margin: initial;\n          padding-top: 81px; } }\n  #gallery-images .container {\n    width: 100%;\n    position: relative;\n    height: 690px;\n    padding-left: 0%;\n    padding-left: 0%; }\n  @media (min-width: 1025px) {\n      #gallery-images .container {\n        height: 895px;\n        padding: 0%; } }\n  #gallery-images .gallery-container h1 {\n    text-align: center;\n    margin-top: 70px;\n    font-weight: bold;\n    color: #58595a; }\n  #gallery-images .tz-gallery {\n    height: auto; }\n  #gallery-images .tz-gallery .row {\n      width: 100%;\n      height: 50%;\n      margin: 0%; }\n  #gallery-images .tz-gallery .row .col-md-4 {\n        height: 372px;\n        padding: 0%;\n        /*  @include breakpoint(phone) {\n                    &:nth-child(1n+4) {\n                        display: none;\n                    }\n                }*/ }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .row .col-md-4 {\n            height: 453px; } }\n  #gallery-images .tz-gallery .thumbnail:hover {\n    -webkit-transform: translateY(-10px) scale(1.02);\n            transform: translateY(-10px) scale(1.02); }\n  #gallery-images .tz-gallery .caption {\n    padding: 26px 30px;\n    text-align: center; }\n  #gallery-images .tz-gallery .caption h3 {\n    font-size: 14px;\n    font-weight: bold;\n    margin-top: 0; }\n  #gallery-images .tz-gallery .caption p {\n    font-size: 12px;\n    color: #7b7d7d;\n    margin: 0; }\n  #gallery-images .baguetteBox-button {\n    background-color: transparent; }\n  #gallery-images .tz-gallery .thumbnai {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    border: none;\n    overflow: hidden;\n    position: relative;\n    background-color: transparent;\n    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06); }\n  #gallery-images .tz-gallery .thumbnai .lightbox {\n      height: 100%;\n      width: 100%; }\n  #gallery-images .tz-gallery .thumbnai .background {\n      height: 100%;\n      display: flex; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .background {\n          background: rgba(0, 88, 146, 0.3); } }\n  #gallery-images .tz-gallery .thumbnai .background .images {\n        width: 100%;\n        height: 100%;\n        -webkit-filter: brightness(85%);\n                filter: brightness(85%);\n        width: 100%;\n        height: 100%;\n        z-index: -1; }\n  #gallery-images .tz-gallery .thumbnai .box-info {\n      height: 100%;\n      width: 100%;\n      background-color: rgba(0, 43, 73, 0.62);\n      position: absolute;\n      bottom: 0%;\n      padding-right: 14%;\n      padding-left: 14%; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-info {\n          transition: all ease 0.89s;\n          visibility: hidden;\n          top: 100%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        top: 77%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n            top: 81%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n          display: flex;\n          border: none;\n          padding-top: 2.5%;\n          padding-bottom: 2.5%;\n          text-transform: uppercase;\n          text-align: center;\n          color: #8ECE17;\n          text-decoration: none;\n          visibility: hidden;\n          font-family: 'Open Sans';\n          justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              left: 0%;\n              width: 100%;\n              padding-left: 19%;\n              margin-left: auto;\n              margin-right: auto;\n              justify-content: center; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n            content: '';\n            position: relative;\n            right: 9%;\n            width: 100%;\n            top: 0px;\n            margin-right: auto;\n            margin-left: auto;\n            padding-left: 27%;\n            padding-right: 27%;\n            padding-top: 29%;\n            background-image: url(\"/assets/icon/mas.svg\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: 35px;\n            visibility: visible; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                padding-left: 20%;\n                padding-right: 20%;\n                padding-top: 8%;\n                right: 31%; } }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              display: block;\n              width: 55%;\n              padding-left: 0%;\n              padding-right: 0%;\n              padding-top: 3.5%;\n              padding-bottom: 3.5%;\n              border: solid 1px #8ECE17;\n              border-radius: 3%;\n              color: #8ECE17;\n              font-size: 20px;\n              visibility: visible; }\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                content: '';\n                visibility: hidden;\n                padding-right: initial;\n                padding-left: initial; } }\n  #gallery-images .tz-gallery .thumbnai .box-title {\n      position: relative;\n      bottom: 92%;\n      padding-left: 9%;\n      padding-right: 9%;\n      text-align: center;\n      z-index: 10; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-title {\n          float: right;\n          clear: both;\n          bottom: 62.5%;\n          padding-left: 25%;\n          padding-right: 25%;\n          transition: all ease 0.8s; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n        color: #ffffff;\n        position: relative;\n        top: 56%;\n        line-height: 46px;\n        font-weight: 300;\n        height: auto;\n        font-size: 31px;\n        font-family: 'Open Sans Codensed'; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n            font-size: 36px; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n        content: '';\n        position: relative;\n        display: block;\n        width: 100%;\n        height: 1.2px;\n        left: 0%;\n        bottom: -14px;\n        transition: all .3s ease-in-out;\n        -webkit-transform: scaleX(0.3);\n                transform: scaleX(0.3);\n        background: #8ECE17; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n            top: 134%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n        position: relative;\n        padding-top: 10%;\n        padding-left: 4%;\n        padding-right: 5%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n            top: 365px;\n            transition: all ease 1s;\n            width: 140%;\n            right: 20%;\n            padding: 10% 0%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n          display: block;\n          text-align: center;\n          height: auto;\n          color: #ffffff;\n          font-size: 15px;\n          font-family: 'Open Sans light'; }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n              font-size: 18px;\n              top: 26%;\n              height: auto;\n              line-height: 1.4; } }\n  @media (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-info {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%);\n      background: rgba(0, 43, 73, 0.62);\n      visibility: initial; }\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 86%;\n      z-index: 100; } }\n  @media (min-width: 1025px) and (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 93%; } }\n  @media (min-width: 1025px) {\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .box-text {\n        top: 14px;\n        -webkit-transform: translateY(-6%);\n                transform: translateY(-6%); }\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .titlepr:after {\n        transform: scaleX(0.8);\n        -webkit-transform: scaleX(0.8); } }\n  #bottons-services .totalbottons {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  background: #f7f9f9;\n  height: 141px; }\n  @media (min-width: 1025px) {\n    #bottons-services .totalbottons {\n      top: initial; } }\n  #bottons-services .totalbottons .bottons {\n    display: flex;\n    padding-top: 10%;\n    width: 91%;\n    justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #bottons-services .totalbottons .bottons {\n        padding-bottom: 0%;\n        padding-top: 6%; } }\n  @media (min-width: 1025px) {\n      #bottons-services .totalbottons .bottons {\n        padding-top: 40px;\n        padding-bottom: initial; } }\n  #bottons-services .totalbottons .bottons .bottonleft,\n    #bottons-services .totalbottons .bottons .bottonrigth {\n      display: flex;\n      width: 27%;\n      text-align: center;\n      border: solid 1px rgba(142, 206, 23, 0.7);\n      padding: 2% 1.5%;\n      position: relative;\n      text-decoration: none;\n      color: #ffffff;\n      background: rgba(142, 206, 23, 0.7);\n      font-size: 14px;\n      font-family: 'Open Sans';\n      text-transform: uppercase;\n      justify-content: center;\n      align-items: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          width: 14%;\n          padding-top: 1%;\n          padding-bottom: 1%; } }\n  @media (min-width: 1025px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          font-size: 18px;\n          width: 16%;\n          padding: 1%; } }\n  #bottons-services .totalbottons .bottons .bottonrigth {\n      left: 8%; }\n  #bottons-services .totalbottons .bottons .bottonleft:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n  #bottons-services .totalbottons .bottons .bottonrigth:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n"

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
    }
    ProductServicesComponent.prototype.ngOnInit = function () {
        this.getProductsAndServicesItems();
    };
    ProductServicesComponent.prototype.getProductsAndServicesItems = function () {
        var _this = this;
        this._cardService.getCustomCardInformation('productsandservicescard').subscribe(function (items) {
            _this.servicesProduct = items.data;
            _this.title = items.header[0].data.title;
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

/***/ "./src/app/cards/components/project-summary/project-summary.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/project-summary/project-summary.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2 class=\"condensed\">{{ titleSection | uppercase }}</h2>\n        <hr class=\"green\">\n        <h2>{{ titleProject | uppercase }}</h2>\n        <p>{{ summaryProject }}</p>\n        <h5>\n            <span *ngFor=\"let tag of tags\" class=\"badge badge-custom mr-2 mt-2 p-2\">{{ tag | uppercase }}</span>\n        </h5>\n        <a [href]=\"linkProject\" class=\"green\">{{ linkProject }}</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/project-summary/project-summary.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/project-summary/project-summary.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#a6cf24+54,e5e5e5+100&1+0,0+100 */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #a6cf24 0%, rgba(166, 207, 36, 0.46) 54%, rgba(229, 229, 229, 0) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6cf24', endColorstr='#00e5e5e5',GradientType=1 );\n  /* IE6-9 */\n  height: 1px; }\n\nh2 {\n  color: #002b49;\n  font-size: 30px;\n  font-weight: lighter; }\n\nh2.condensed {\n  color: #002b4994;\n  font-size: 22px;\n  letter-spacing: -1px; }\n\n.badge-custom {\n  background: #91b520;\n  border-radius: 0px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: lighter; }\n\na {\n  color: #91b520;\n  font-family: 'Open Sans Condensed', sans-serif; }\n"

/***/ }),

/***/ "./src/app/cards/components/project-summary/project-summary.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cards/components/project-summary/project-summary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSummaryComponent", function() { return ProjectSummaryComponent; });
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


var ProjectSummaryComponent = /** @class */ (function () {
    function ProjectSummaryComponent(_http) {
        this._http = _http;
        this.titleSection = "El Proyecto";
        this.titleProject = "Sistema de gestión de rotaciones médicas";
        this.summaryProject = "Mollit id aliqua commodo ipsum sit do velit labore id. Id ea ullamco ullamco ea amet dolore sit est veniam qui veniam et ipsum. Aliquip esse eiusmod proident do tempor culpa velit eu fugiat enim deserunt amet.";
        this.tags = ['salud', 'cloud', 'angularjs', 'mobile', 'tag'];
        this.linkProject = "www.loremipsuotus.com.co";
    }
    ProjectSummaryComponent.prototype.ngOnInit = function () {
        //this.getProjectSummaryService();
    };
    ProjectSummaryComponent.prototype.getProjectSummaryService = function () {
        var _this = this;
        this._http.getCustomCardInformation('summary-project').subscribe(function (params) {
            _this.titleSection = params.data[0].titleSection;
            _this.titleProject = params.data[0].nameProject;
            _this.summaryProject = params.data[0].summary;
            _this.linkProject = params.data[0].url;
            _this.tags = params.data[0].listTags;
        });
    };
    ProjectSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-summary',
            template: __webpack_require__(/*! ./project-summary.component.html */ "./src/app/cards/components/project-summary/project-summary.component.html"),
            styles: [__webpack_require__(/*! ./project-summary.component.scss */ "./src/app/cards/components/project-summary/project-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], ProjectSummaryComponent);
    return ProjectSummaryComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/separator/separator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/separator/separator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-1 mb-5\">\n    <div class=\"divIconSeparator mx-auto\">\n        <i class=\"fas {{iconCustom}} fa-2x\" aria-hidden=\"true\"></i>\n    </div>\n    <hr>\n</div>"

/***/ }),

/***/ "./src/app/cards/components/separator/separator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cards/components/separator/separator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divIconSeparator {\n  width: 60px;\n  background: white;\n  padding: 10px;\n  border-radius: 100px;\n  transform: translateY(10px);\n  -webkit-transform: translateY(45px); }\n  .divIconSeparator i {\n    color: #002b49; }\n  hr {\n  border-top: 1px solid #002b49; }\n"

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

module.exports = "<div class=\"row fondoSlide\" [ngStyle]=\"{'background-image':'url('+ slide.bkgSrcSlide +')'}\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n                <div class=\"mx-4 px-3 pt-7 pb-3 black-trans\">\n                    <h1 class=\"text-light\">{{ slide.titleSlide | uppercase }}</h1>\n                    <h2 class=\"condensed text-green\">{{ slide.subtitleSlide | uppercase}}</h2>\n                    <p class=\"text-light\">{{ slide.descriptionSlide }}</p>\n                    <ul>\n                        <li *ngFor=\"let item of slide.listTextSlide\" class=\"d-flex\">\n                            <i class=\"fas fa-check fa-sm green mr-2\"></i>\n                            <p class=\"text-light\">{{ item }}</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"pt-3\">\n                    <img [src]=\"slide.imgSrcSlide\" [alt]=\"slide.titleSlide\" width=\"400\" height=\"400\" class=\"d-block m-auto img-fluid\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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


var SlideComponent = /** @class */ (function () {
    function SlideComponent(_http) {
        this._http = _http;
        this.slide = {
            titleSlide: "Título de la diapositiva",
            subtitleSlide: "Subtitulo de diapositiva",
            descriptionSlide: "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
            listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
            imgSrcSlide: "/assets/images/phone-mockup.png",
            bkgSrcSlide: "/assets/images/fondo-hospital.jpg"
        };
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
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
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

module.exports = "<ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let item of sliderArray\">\n        <app-slide [slide]=\"item\"></app-slide>\n    </ng-template>\n</ngb-carousel>"

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
    function SliderComponent(_http) {
        this._http = _http;
        this.sliderArray = this._http.getSliderData();
    }
    SliderComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
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

module.exports = "<!--<section id=\"blocks-tabs\">\n    <div class=\"block\">\n        <ul class=\"nav\">\n            <li class=\"list\">\n                <a href=\"#form-contact-us\" class=\"item-block nav-link  active\" data-toggle=\"tab\"> {{tabLeft.title}} </a>\n            </li>\n            <li class=\"list list-color\">\n                <a href=\"#form-workwith-us\" class=\"item-block-2 nav-link\" data-toggle=\"tab\"> {{tabRight.title}} </a>\n            </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"form-contact-us\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                FORMULARIO CONTÁCTENOS\n            </div>\n            <div class=\"tab-pane fade\" id=\"form-workwith-us\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                FORMULARIO TRABAJE CON NOSOTROS\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"row my-5\">\n    <div class=\"col-md-12\">\n        <ngb-tabset id=\"tabsetCustom\" [justify]=\"'center'\">\n            <ngb-tab *ngFor=\"let tab of arrayTabs\">\n                <ng-template ngbTabTitle>\n                    <div class=\"d-block div-title\">\n                        <img [src]=\"tab.urlicon\" class=\"d-block mx-auto\" width=\"50\" height=\"50\">\n                        <br>\n                        <h3 class=\"condensed\">{{tab.titulo}}</h3>\n                    </div>\n                </ng-template>\n                <ng-template ngbTabContent>\n                    <div [innerHTML]=\"tab.contenido | safehtml\" class=\"py-5 px-5\"></div>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n</div>\n<div class=\"my-5\">\n    <ul class=\"nav nav-tabs nav-justified nav-fill\">\n        <li *ngFor=\"let tabItem of arrayTabs; let i = index\" [class.active]=\"ids == i\" class=\"nav-item\">\n            <a href=\"#{{i}}\" data-toggle=\"tab\" (click)=\"mostrar(i)\">\n                <div class=\"d-block\">\n                    <img [src]=\"tabItem.urlicon\" [alt]=\"tabItem.alticon\" width=\"50\" height=\"50\" class=\"d-block mx-auto\">\n                    <br>\n                    <h3 class=\"condensed\">{{tabItem.titulo}}</h3>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div id=\"{{i}}\" class=\"tab-pane\" role=\"tabpanel\" *ngFor=\"let tabItem of arrayTabs; let i = index\" [class.active]=\"ids == i\">\n            <div [innerHTML]=\"tabItem.contenido | safehtml\" class=\"py-5 px-5\"></div>\n        </div>\n    </div>\n</div>-->\n\n"

/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  background-color: #d9e0e4; }\n  @media (max-width: 480px) {\n    .nav {\n      display: block; } }\n  .nav li {\n    margin: 0px 10px;\n    padding: 10px; }\n  .nav li h3 {\n      color: #002b49; }\n  .nav li.active {\n      background-color: #002b49; }\n  .nav li.active h3 {\n        color: white; }\n  .nav li.active:after {\n        width: 0;\n        height: 0;\n        border-left: 15px solid transparent;\n        border-right: 15px solid transparent;\n        border-top: 15px solid #002b49;\n        content: \" \";\n        position: absolute;\n        bottom: 20px; }\n  @media (max-width: 736px) {\n          .nav li.active:after {\n            bottom: 50px; } }\n  @media (max-width: 480px) {\n          .nav li.active:after {\n            display: none; } }\n  .nav li a {\n      text-decoration: none; }\n"

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


var TabsComponent = /** @class */ (function () {
    function TabsComponent(https) {
        this.https = https;
        this.arrayTabs = [];
        this.ids = 0;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.mostrar = function (link) {
        this.ids = link;
        console.log(this.ids);
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/cards/components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/cards/components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row position-relative row-tec\" [ngStyle]=\"{'background-image':'url(' + background + ')'}\">\n        <div class=\"position-absolute content-trans\"></div>\n        <div class=\"col-md-12 pt-5 pb-2 px-2\">\n            <h1 class=\"text-center text-white\">{{ title }}</h1>\n        </div>\n        <div class=\"col-md-12 py-5 px-2\">\n            <div class=\"tec-slider\">\n                <ngx-tile NgxCarouselItem id=\"logos\" *ngFor=\"let im of arrayLogosCustom\" >\n                    <img *ngFor=\"let img of im\" [src]=\"img.field_tech_image.url\" [alt]=\"img.field_tech_image.alt\">\n                </ngx-tile>\n            </div>\n        </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-tec {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(/assets/images/fnd-tecnologias.jpg) !important;\n  min-height: 380px; }\n  .row-tec .content-trans {\n    background: #002b49c0;\n    width: 100%;\n    height: 100%; }\n  .row-tec .tec-slider {\n    width: 100%;\n    margin: 0 auto;\n    display: flex; }\n  .row-tec .tec-slider .item {\n      margin: 0 auto; }\n  .row-tec .tec-slider .div-slide {\n      margin: 0 auto; }\n  .row-tec .tec-slider /deep/ img {\n      padding-right: 61px;\n      padding-left: 61px; }\n  .img-fluid {\n  max-width: 100%;\n  height: auto;\n  margin: 20px; }\n  :host ::ng-deep .tile {\n  box-shadow: none !important; }\n  @media screen and (max-width: 480px) {\n  .img-slide {\n    width: 70%;\n    display: block;\n    height: auto;\n    margin: 20px auto; } }\n"

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
        this.title = "";
        this.background = "";
        this.state = 'hide';
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
                else {
                    this.arrayLogosCustom[i][j] = this.arrayLogosCustom[i - 1][j2];
                    j2++;
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
            /*this.createSlick();*/
        });
    };
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
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TecnologiesComponent);
    return TecnologiesComponent;
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
        this.title.getCustomCardInformation('contact_title').subscribe(function (items) {
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

module.exports = "<div class=\"row bg-light\">\n    <div class=\"col-md-6 p-0\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" [src]=\"videoURLSanitizer\" allowfullscreen></iframe>\n        </div>\n    </div>\n    <div class=\"col-md-6 my-5\">\n        <h2>{{ titleSection | uppercase}}</h2>\n        <hr class=\"green\">\n        <p [innerHTML]=\"descriptionSection\" ></p>\n        <br>\n        <a [href]=\"link\" class=\"green\"><i class=\"fa fa-link\" aria-hidden=\"true\"></i> {{link}}</a>\n    </div>\n</div>"

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
    }
    VideoInformationComponent.prototype.ngOnInit = function () {
        this.getVideoInformationService();
    };
    VideoInformationComponent.prototype.getVideoInformationService = function () {
        var _this = this;
        this.https.getCustomCardInformation('videoplusinformation').subscribe(function (items) {
            _this.titleSection = items.data[0].title;
            _this.descriptionSection = items.data[0].body;
            _this.videoURL = items.data[0].field_url_video.split(',')[0];
            if (_this.videoURL.includes("watch?v=")) {
                _this.videoURLSanitizer = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.videoURL.split('watch?v=')[0] + "embed/" + _this.videoURL.split('watch?v=')[1]);
            }
            else {
                _this.videoURLSanitizer = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.videoURL);
            }
            //this.link = items.data[0].link;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideoInformationComponent.prototype, "link", void 0);
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
        this.workWithUsTitle = '';
        this.workWithUsSubtitle = '';
        this.url = '';
        this.workWithUsButton = '';
    }
    WorkWithUsComponent.prototype.ngOnInit = function () {
        this.getWorkwithUsItems();
    };
    WorkWithUsComponent.prototype.getWorkwithUsItems = function () {
        var _this = this;
        this.footerService.getCustomCardInformation('workwithus').subscribe(function (items) {
            _this.workWithUsTitle = items.header[0].data;
            _this.workWithUsSubtitle = items.header[1].data;
            _this.url = items.body[0].data.link;
            _this.workWithUsButton = items.body[1].data;
            _this.workWithUsThirdText = items.body[2].data;
        });
    };
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

module.exports = "<section id=\"work-with-us\">\n  <h1>{{ workWithUsTitle.title }}</h1>\n  <p>{{ workWithUsSubtitle.title }}</p>\n  <a class=\"btn btn-primary\" href=\"contact-us\">{{ workWithUsButton.title }}</a>\n  <hr>\n  <p class=\"text1\">o si lo desea</p>\n  <div [innerHTML]= workWithUsThirdText class=\"text2\"></div>\n</section>\n"

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

module.exports = "header .logo {\n  width: 15%;\n  position: fixed;\n  z-index: 1022; }\n  header .logo .container-logo {\n    width: 100%;\n    padding-left: 40%;\n    padding-top: 5%;\n    position: relative;\n    z-index: 100; }\n  @media (min-width: 300px) and (max-width: 1024px) {\n      header .logo .container-logo {\n        padding-top: 20%; } }\n  header .logo .container-logo .image-url {\n      width: 100%;\n      position: relative;\n      left: 28%; }\n  header .logo .container-logo .image-url img {\n        width: 90px; }\n  @media (min-width: 1025px) {\n          header .logo .container-logo .image-url img {\n            width: 100%;\n            padding-left: 4%;\n            padding-top: 2%; } }\n  header .inverse-color {\n  background: #ffffff; }\n  header .tigger-menu {\n  background: #ffffff;\n  color: #002b49; }\n  header nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav {\n    padding-top: 0%;\n    width: 100%;\n    position: fixed; } }\n  @media (min-width: 1025px) {\n  header nav {\n    float: right;\n    padding-top: 0%;\n    width: 100%;\n    position: fixed;\n    text-align: right; } }\n  header nav .menuToggle {\n  display: block;\n  position: relative;\n  width: 100%;\n  z-index: 1; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle {\n    top: 22px; } }\n  header nav .menuToggle .Botton {\n  display: block;\n  width: 22%;\n  height: auto;\n  position: absolute;\n  left: 75%;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2; }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .Botton {\n    display: none; } }\n  header nav .menuToggle .Botton:checked ~ .lines {\n  opacity: 1;\n  -webkit-transform: rotate(45deg) translate(1px, 0px);\n          transform: rotate(45deg) translate(1px, 0px);\n  background: #0c7ffb; }\n  header nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n  opacity: 0;\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n          transform: rotate(0deg) scale(0.2, 0.2); }\n  header nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n  opacity: 1;\n  -webkit-transform: rotate(-45deg) translate(1px, 2px);\n          transform: rotate(-45deg) translate(1px, 2px); }\n  header nav .menuToggle .Botton:checked ~ .list-menu {\n  display: block;\n  -webkit-transform: none;\n          transform: none; }\n  header nav .menuToggle .lines {\n  display: block;\n  width: 26px;\n  height: 2.4px;\n  margin-bottom: 5px;\n  margin-left: 81%;\n  position: relative;\n  background: #ffffff;\n  border-radius: 30%;\n  z-index: 1;\n  -webkit-transform-origin: 4px 0px;\n          transform-origin: 4px 0px;\n  transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .lines {\n    display: none; } }\n  header nav .menuToggle .color-scroll {\n  background: #0c7ffb; }\n  header nav .menuToggle .lines:first-child {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%; }\n  header nav .menuToggle .lines:nth-last-child(2) {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  margin-bottom: 8%; }\n  header nav .menuToggle ul {\n  margin-bottom: 0; }\n  header nav .menuToggle .list-menu {\n  padding-left: 0%;\n  width: 100%;\n  position: relative;\n  display: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu {\n    display: block;\n    -webkit-transform: initial;\n            transform: initial;\n    transition-delay: initial; } }\n  header nav .menuToggle .list-menu .items {\n  list-style: none;\n  padding-bottom: 7%;\n  padding-top: 7%;\n  padding-left: 12%;\n  border-bottom: 1px solid #f5fafc; }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items {\n    width: 8%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 0%;\n    padding-right: 0%;\n    border-bottom: initial;\n    display: inline-block; } }\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n  border-top: 1px solid #cfe3ee; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; } }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; } }\n  @media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(7) {\n    padding-right: 3%; } }\n  header nav .menuToggle .list-menu .items .scroll-white {\n  color: #002b49; }\n  header nav .menuToggle .list-menu .language {\n  list-style: none; }\n  header .logo {\n  width: 15%;\n  position: fixed;\n  z-index: 1022; }\n  header .logo .container-logo {\n  width: 100%;\n  padding-left: 50%;\n  padding-top: 28%;\n  position: relative;\n  z-index: 100; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  header .logo .container-logo {\n    padding-top: 20%; } }\n  @media (min-width: 1025px) {\n  header .logo .container-logo {\n    padding-top: 4%;\n    padding-left: 43%; } }\n  header .logo .container-logo .image-url {\n  width: 100%;\n  position: relative;\n  left: 28%; }\n  header .logo .container-logo .image-url img {\n  width: 90px; }\n  @media (min-width: 1025px) {\n  header .logo .container-logo .image-url img {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 2%; } }\n"

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

module.exports = "#block-navbar .inverse-color {\n  background: #ffffff; }\n\n#block-navbar .color-white {\n  background: #ffffff; }\n\n#block-navbar nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    #block-navbar nav {\n      padding-top: 0%;\n      width: 100%;\n      position: fixed; } }\n\n@media (min-width: 1025px) {\n    #block-navbar nav {\n      float: right;\n      padding-top: 0%;\n      width: 100%;\n      position: fixed;\n      text-align: right; } }\n\n#block-navbar nav .menuToggle {\n    display: block;\n    position: relative;\n    width: 100%;\n    z-index: 1; }\n\n@media only screen and (max-width: 1080px) {\n      #block-navbar nav .menuToggle {\n        padding-top: 1%; } }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      #block-navbar nav .menuToggle {\n        top: 38px; } }\n\n#block-navbar nav .menuToggle .Botton {\n      display: block;\n      width: 22%;\n      height: auto;\n      position: absolute;\n      left: 75%;\n      cursor: pointer;\n      opacity: 0;\n      z-index: 2; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .Botton {\n          display: none; } }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines {\n      opacity: 1;\n      -webkit-transform: rotate(45deg) translate(1px, 0px);\n              transform: rotate(45deg) translate(1px, 0px);\n      background: #0c7ffb; }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n      opacity: 0;\n      -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n              transform: rotate(0deg) scale(0.2, 0.2); }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n      opacity: 1;\n      -webkit-transform: rotate(-45deg) translate(1px, 2px);\n              transform: rotate(-45deg) translate(1px, 2px); }\n\n#block-navbar nav .menuToggle .Botton:checked ~ .list-menu {\n      display: block;\n      -webkit-transform: none;\n              transform: none; }\n\n#block-navbar nav .menuToggle .lines {\n      display: block;\n      width: 26px;\n      height: 2.4px;\n      margin-bottom: 5px;\n      margin-left: 81%;\n      position: relative;\n      background: #ffffff;\n      border-radius: 30%;\n      z-index: 1;\n      -webkit-transform-origin: 4px 0px;\n              transform-origin: 4px 0px;\n      transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .lines {\n          display: none; } }\n\n#block-navbar nav .menuToggle .lines:first-child {\n      -webkit-transform-origin: 0% 0%;\n              transform-origin: 0% 0%; }\n\n#block-navbar nav .menuToggle .lines:nth-last-child(2) {\n      -webkit-transform-origin: 0% 100%;\n              transform-origin: 0% 100%;\n      margin-bottom: 8%; }\n\n#block-navbar nav .menuToggle ul {\n      margin-bottom: 0; }\n\n#block-navbar nav .menuToggle .list-menu {\n      padding-left: 0%;\n      width: 100%;\n      position: relative;\n      display: none;\n      -webkit-font-smoothing: antialiased;\n      -webkit-transform: translate(0, -100%);\n              transform: translate(0, -100%);\n      transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle .list-menu {\n          display: flex;\n          justify-content: flex-end;\n          -webkit-transform: initial;\n                  transform: initial;\n          transition-delay: initial; } }\n\n#block-navbar nav .menuToggle .list-menu .items {\n        cursor: pointer;\n        list-style: none;\n        padding-bottom: 7%;\n        padding-top: 7%;\n        padding-left: 12%;\n        border-bottom: 1px solid #f5fafc; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle .list-menu .items {\n            width: 9%;\n            text-align: center;\n            padding-top: 2%;\n            padding-bottom: 2%;\n            padding-left: 0%;\n            padding-right: 0%;\n            border-bottom: initial;\n            display: inline-block; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle .list-menu .items {\n            padding: 0px;\n            width: 100%; } }\n\n#block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n          border-top: 1px solid #cfe3ee; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link {\n          color: #002b49;\n          width: 100%;\n          text-decoration: none;\n          text-align: left;\n          padding-right: 73%;\n          font-size: 15px;\n          font-family: 'Open Sans light';\n          font-weight: 300; }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              display: block; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link:hover {\n            color: #a6cf24;\n            text-decoration: none; }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              color: #ffffff;\n              padding-left: 12%;\n              padding-right: 15%;\n              padding-top: 20%; } }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .link {\n              padding: 20px;\n              width: 100%; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link .arrow {\n            padding-left: 59%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 6%; } }\n\n@media (min-width: 1025px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 0%;\n                padding-right: 0%;\n                padding-top: 0%; } }\n\n#block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n            padding-left: 61.2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 7.2%; } }\n\n@media (min-width: 1025px) {\n              #block-navbar nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 0%; } }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle .list-menu .items .active {\n            border-top: 4px solid #a6cf24; } }\n\n#block-navbar nav .menuToggle .list-menu .items .scroll-white {\n          color: #002b49;\n          background: white; }\n\n#block-navbar nav .menuToggle .list-menu .items .tigger-menu {\n          background: #ffffff;\n          color: #002b49; }\n\n@media (max-width: 1024px) {\n            #block-navbar nav .menuToggle .list-menu .items .tigger-menu {\n              border-bottom: 1px solid #eef6f9; } }\n\n#block-navbar nav .menuToggle .list-menu .language {\n        list-style: none; }\n\n#block-navbar nav .menuToggle /deep/ li {\n      position: relative; }\n\n#block-navbar nav .menuToggle /deep/ li .menu-caret {\n        display: block; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n            font-size: 10px;\n            position: absolute;\n            right: 35px;\n            bottom: 46px;\n            color: #fff; } }\n\n@media (min-width: 1025px) and (max-width: 1281px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 12px;\n      bottom: 31px; } }\n\n@media (min-width: 1025px) and (min-width: 1282px) and (max-width: 1367px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 14px;\n      bottom: 34px; } }\n\n@media (min-width: 1025px) and (min-width: 1368px) and (max-width: 1441px) {\n    #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-caret-down {\n      right: 16px;\n      bottom: 35px; } }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret.fas.fa-angle-right {\n            color: #002b49;\n            font-size: 13px;\n            position: absolute;\n            right: 18px;\n            bottom: 18px;\n            transition: 0.5s ease all; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ li .menu-caret {\n            position: absolute;\n            right: 10px;\n            top: 8px;\n            width: 45px;\n            height: 45px;\n            box-sizing: border-box;\n            padding: 15px 18px; }\n            #block-navbar nav .menuToggle /deep/ li .menu-caret.fa-caret-down-item-menu {\n              top: 2px; } }\n\n#block-navbar nav .menuToggle /deep/ .customrow-1 ul {\n      display: none; }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ .customrow-1 ul.invisible-in-mobile {\n          display: none; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ .customrow-1 ul.visible-in-mobile {\n          display: block; } }\n\n#block-navbar nav .menuToggle /deep/ li:hover > app-menu-item > ul {\n      display: block; }\n\n#block-navbar nav .menuToggle /deep/ li:hover > app-menu-item > ul li:hover i.fa-angle-right {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        transition: 0.5s ease all; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n      list-style-type: none;\n      position: absolute;\n      padding: 0px;\n      right: 0px; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n          margin-top: -2px; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 {\n          position: relative;\n          bottom: 0; } }\n\n@media (max-width: 1080px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 {\n          border: 1px solid #f5fafc; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n        border-bottom: 1px solid #cecece;\n        padding: 12px;\n        padding-left: 11px;\n        text-align: left;\n        background: #fff;\n        display: block;\n        font-family: Open Sans;\n        font-size: 15px;\n        font-weight: 400;\n        color: #002b49;\n        min-height: 38px;\n        height: 49px; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n            width: 251px; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link {\n            padding-left: 45px;\n            font-family: Open Sans Light;\n            border: 0;\n            border-bottom: 1px solid #eef6f9; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > a.link:hover {\n          text-decoration: none;\n          color: #a6cf24; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-2 > li.customrow-2 > img {\n        display: none; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n      border: 1px solid #cecece;\n      list-style-type: none;\n      padding: 0;\n      position: relative; }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3::before {\n          content: '';\n          display: block;\n          background-image: url(\"/assets/images/MenuLuzDiagonal.png\");\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0; } }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n          width: 430px;\n          background: #fff;\n          top: 0;\n          background-size: cover;\n          background-position: bottom right;\n          background-repeat: no-repeat;\n          position: absolute;\n          right: 194px;\n          height: 245px;\n          left: -431px; } }\n\n@media (max-width: 1024px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 {\n          border: 0; } }\n\n@media (min-width: 1025px) {\n        #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 {\n          text-align: left;\n          height: 61px;\n          width: 50%;\n          float: left; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n        font-family: Open Sans;\n        font-size: 15px;\n        color: #002b49;\n        display: block;\n        background-color: transparent; }\n\n@media (min-width: 1025px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n            color: #333;\n            padding: 9px; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link {\n            padding-left: 76px;\n            padding-top: 15px;\n            font-family: Open Sans Light;\n            border: 0;\n            text-align: left;\n            background: #fff;\n            display: block;\n            font-size: 15px;\n            font-weight: 400;\n            color: #002b49;\n            min-height: 38px;\n            height: 49px;\n            border-bottom: 1px solid #eef6f9; } }\n\n@media (max-width: 1024px) {\n          #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .title {\n            color: #002b49;\n            font-size: 15px; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .description {\n          display: none;\n          font-family: Open Sans Light;\n          font-size: 13px;\n          color: #002b49; }\n\n@media (min-width: 1025px) {\n            #block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link .description {\n              display: block; } }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link:hover {\n          text-decoration: none; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 > a.link:hover span.title {\n            color: #a6cf26; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 .title {\n        font-weight: normal;\n        font-size: 13px;\n        color: #333;\n        display: block; }\n\n#block-navbar nav .menuToggle /deep/ ul.customulrow-3 > li.customrow-3 .description {\n        font-weight: normal;\n        font-size: 10px;\n        color: #777;\n        display: block;\n        padding-left: 14px;\n        line-height: 15px; }\n\n#block-navbar .shadow-if-exit-scroll {\n  box-shadow: 0 2px 2px #d1d1d1; }\n\napp-navbar /deep/ .menu-item-child .a {\n  text-decoration: none; }\n\napp-navbar /deep/ .menu-item-child .menu-tree-level {\n  list-style-type: none;\n  display: none; }\n\napp-navbar /deep/ .menu-item-child .menu-has-children:hover > app-menu-item > .menu-tree-level {\n  display: block; }\n\napp-navbar /deep/ .menu-item-child .fa-angle-right {\n  color: #002b49; }\n\napp-navbar /deep/ .menu-item-child .locations-container {\n  height: 100%;\n  width: 100%; }\n"

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
            console.log(_this.NavbarArray);
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
        $('.page-wrapper').css('filter', 'blur(2px)');
    };
    NavbarComponent.prototype.menuOut = function ($event) {
        $('.page-wrapper').css('filter', '');
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
                _cards_components_footer_footer_block_footer_block__WEBPACK_IMPORTED_MODULE_10__["FooterBlock"],
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

/***/ "./src/app/main/pages/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-title></app-title>\n<!--<app-tabs></app-tabs>-->\n\n<div class=\"tab\">\n\t<div class=\"contactenos\">\n\t\t<button class=\"active\" (click)=\"toogleHidden()\">Comenzar un proyecto</button>\n\t</div>\n\t<div class=\"trabaje\">\n\t\t<button (click)=\"toogleHidden()\">Trabaja con nosotros</button>\n\t</div>\n</div>\n<br/><br/>\n<div class=\"container\" [hidden]=\"hidden\">\n\t<div class=\"row\">\n\t\t<form id=\"formulario_contacto\" #userForm = \"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\" class=\"col-md-12\">\n\t\t\t<div class=\"form-group\" [ngClass]=\"aplicaCssErro(nombre)\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\" >\n\t\t\t\t\t<label for=\"exampleInputNombre\">Nombre</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" name=\"nombre\" ngModel required #nombre=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"nombre.invalid && nombre.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputOrg\">Organización</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"organizacion\" placeholder=\"Organización\" name=\"organizacion\" ngModel #organizacion=\"ngModel\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Escriba su email\" name=\"correo_electronico\" ngModel                        pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n\t\t\t\t\t#correo_electronico=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"correo_electronico.invalid && correo_electronico.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputTel\">Telefono</label>\n\t\t\t\t\t<input type=\"tel\" class=\"form-control\" id=\"org\" placeholder=\"Escriba su telefono\" name=\"telefono\" ngModel\n\t\t\t\t\tpattern=\"^(\\([0-9]{3}\\)|[0-9]{3})[0-9]{3}[0-9]{4}$\" #telefono=\"ngModel\">\n\t\t\t\t\t<div *ngIf=\"telefono.invalid && telefono.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-12 item\">\n\t\t\t\t\t<label for=\"exampleInputPais\">Pais</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"Pais\" placeholder=\"Seleccione su pais\" name=\"pais\" ngModel></select>\n\t\t\t\t</div >\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputPinteres\">Producto de interés</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"Producto\" placeholder=\"Seleccione un producto\" name=\"Producto\" ngModel></select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 item\">\n\t\t\t\t\t<label for=\"exampleInputSinteres\">Servicio de interés</label>\n\t\t\t\t\t<select type=\"select\" class=\"form-control\" id=\"Servicio\" placeholder=\"Seleccione un servicio\" name=\"Servicio\" ngModel></select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\" class=\"col-md-12 comentario\" >\n\t\t\t\t<label for=\"exampleInputComm\">Comentarios</label>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"comentario\" placeholder=\"Escriba sus comentarios\" name=\"comentario\" ngModel #comentario=\"ngModel\"></textarea>\n\t\t\t\t\t<div *ngIf=\"comentario.invalid && comentario.touched\" class=\"alert alert-danger\" role=\"alert\">\n\t\t\t\t\t\tCampo obligatorio o invalido\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" class=\"col-md-12 terminos_grupo\">\n\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" id=\"terms-of-service\" name=\"terms_of_service\"  value=\"false\" ngModel required>\n\t\t\t\t\t<label ng-reflect-ng-class=\"\" for=\"terms-of-service\">He leído y acepto los <a role=\"button\" href=\"#terms\">términos y condiciones</a></label>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n\t\t\t\t<div class=\"obligatorios col-md-12\"> <span>*</span>Datos Obligatorios</div>\n\n\t\t</form>\n\t</div>\n</div>\n\n<app-workus [hidden]=\"!hidden\" ></app-workus>\n<app-separator [iconCustom]=\"'fa-map-marker'\"></app-separator>\n<app-locations></app-locations>\n\n"

/***/ }),

/***/ "./src/app/main/pages/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *::before, *::after {\n  box-sizing: border-box; }\n\n.item {\n  display: inline-block; }\n\nlabel {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px;\n  font-weight: 100;\n  font-family: 'Open Sans light'; }\n\ninput, select {\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  border-radius: 0px;\n  font-family: 'Open Sans light'; }\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px red; }\n\nselect {\n  background: #f8f8f8;\n  font-family: 'Open Sans light'; }\n\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #808080; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #808080; }\n\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #808080; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #808080; }\n\n.comentario {\n  width: 98%;\n  margin: 0 auto; }\n\n@media screen and (max-width: 480px) {\n    .comentario {\n      width: 91%; } }\n\n.comentario textarea {\n    min-height: 40px;\n    border-radius: 0px;\n    border: 1px solid #b2c6cd;\n    padding: 10px 20px;\n    font-family: 'Open Sans light'; }\n\n.terminos_grupo {\n  position: relative;\n  max-width: 380px;\n  margin: 40px auto;\n  text-align: center;\n  /* OFF */\n  /* ON */ }\n\n.terminos_grupo [type=\"checkbox\"] {\n    position: absolute;\n    left: -9999px; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    content: '';\n    position: absolute; }\n\n.terminos_grupo [type=\"checkbox\"] + label {\n    display: block;\n    position: relative;\n    padding-left: 26px;\n    cursor: pointer;\n    line-height: 36px;\n    font-size: 1rem;\n    color: rgba(0, 43, 73, 0.8);\n    transition: color .3s; }\n\n.terminos_grupo [type=\"checkbox\"] + label a {\n    color: #91b520; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    width: 30px;\n    height: 30px;\n    transition: all .2s;\n    top: 0;\n    left: 0; }\n\n.terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n    background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n\n.terminos_grupo [type=\"checkbox\"]:checked + label:after {\n    background: url(\"/assets/images/check2.png\") left center no-repeat; }\n\n.btn-primary {\n  border-radius: 0px;\n  background: #91b520;\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  margin: 0 auto;\n  display: block;\n  font-family: 'Open Sans light'; }\n\n.obligatorios {\n  text-align: center;\n  margin-top: 20px;\n  color: #6d747f;\n  font-family: 'Open Sans light'; }\n\n.obligatorios span {\n    color: #91b520; }\n\n.tab {\n  background: #e5e9ec;\n  height: 140px;\n  margin-top: 40px; }\n\n.tab .contactenos {\n    height: 140px;\n    padding-left: 11.8%;\n    display: inline-block;\n    position: relative;\n    width: 50%; }\n\n.tab .contactenos button {\n      display: block;\n      width: 84%;\n      height: 100%;\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      background: url(/assets/images/contact.svg) no-repeat center 10px;\n      background-size: 10%;\n      padding-top: 3.5%;\n      border: none;\n      font-size: 22px;\n      font-family: 'Open Sans light';\n      color: #2e516a;\n      cursor: pointer; }\n\n.tab .contactenos button:active, .tab .contactenos button.active {\n      background: url(/assets/images/contact-white.svg) no-repeat center 10px, #30506c;\n      background-size: 10%;\n      color: #fff;\n      outline: 0px auto -webkit-focus-ring-color; }\n\n.tab .contactenos button.active::before {\n      content: '';\n      position: absolute;\n      border-width: 22px 65px 0;\n      border-style: solid;\n      border-color: #2e516a transparent transparent;\n      top: 92%;\n      margin-left: 37px; }\n\n.tab .contactenos button::after {\n      content: '';\n      position: absolute;\n      height: 75px;\n      width: 1px;\n      margin-top: -7%;\n      left: 0%;\n      background-color: #95a7b3; }\n\n.tab .contactenos button.active::after {\n      display: none; }\n\n@media screen and (max-width: 480px) {\n      .tab .contactenos button, .tab .contactenos button.active {\n        width: 100%;\n        font-size: 15px;\n        padding-top: 46px;\n        background-size: 33%; }\n      .tab .contactenos button.active::before {\n        top: 96%;\n        left: 29%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      .tab .contactenos button::after {\n        display: none; } }\n\n@media (max-width: 768px) and (min-width: 600px) {\n      .tab .contactenos button.active::before {\n        top: 90%; } }\n\n.tab .trabaje {\n    height: 140px;\n    padding-right: 11.8%;\n    display: inline-block;\n    position: relative;\n    width: 50%; }\n\n.tab .trabaje button {\n      display: block;\n      width: 84%;\n      height: 100%;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      background: none;\n      padding-top: 3.5%;\n      background: url(/assets/images/contact.svg) no-repeat center 10px;\n      background-size: 10%;\n      border: none;\n      font-size: 22px;\n      font-family: 'Open Sans light';\n      color: #2e516a;\n      cursor: pointer; }\n\n.tab .trabaje button:active, .tab .trabaje button.active {\n      background: url(/assets/images/contact-white.svg) no-repeat center 10px, #30506c;\n      background-size: 10%;\n      color: #fff;\n      outline: 0px auto -webkit-focus-ring-color; }\n\n.tab .trabaje button.active::before {\n      content: '';\n      position: absolute;\n      border-width: 22px 65px 0;\n      border-style: solid;\n      border-color: #2e516a transparent transparent;\n      top: 92%;\n      margin-left: 37px; }\n\n.tab .trabaje button::after {\n      content: '';\n      position: absolute;\n      height: 75px;\n      width: 1px;\n      margin-top: -7%;\n      right: 0%;\n      background-color: #95a7b3; }\n\n.tab .trabaje button.active::after {\n      display: none; }\n\n@media screen and (max-width: 480px) {\n      .tab .trabaje button, .tab .trabaje button.active {\n        width: 100%;\n        font-size: 15px;\n        padding-top: 46px;\n        background-size: 33%; }\n      .tab .trabaje button.active::before {\n        top: 96%;\n        left: 29%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      .tab .trabaje button::after {\n        display: none; } }\n\n@media (max-width: 768px) and (min-width: 600px) {\n      .tab .trabaje button.active::before {\n        top: 90%; } }\n\n#msj-modal {\n  background: #30506cab;\n  width: 100vw;\n  height: 100vh; }\n\n#msj-modal .content-modal {\n    display: table;\n    position: relative;\n    margin-top: 25%;\n    width: 50%;\n    margin-left: 25%;\n    padding: 20px;\n    background: #fff;\n    border-radius: 10px;\n    border: solid #91b520 1px; }\n\n#msj-modal .content-modal p {\n      text-align: center; }\n"

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
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
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
    function ContactUsComponent(_http) {
        this._http = _http;
        this.hidden = false;
        this.usuario = {
            nombre: null,
            email: null
        };
    }
    ContactUsComponent.prototype.toogleHidden = function () {
        this.hidden = !this.hidden;
    };
    ContactUsComponent.prototype.onSubmit = function (formulario) {
        console.log(formulario);
        formulario['webform_id'] = 'contact_us';
        $("#formulario_contacto")[0].reset();
        $("#msj-modal").show();
        $(".close").click(function () {
            $("#msj-modal").hide();
        });
        this._http.post('webform_rest/submit?_format=json', formulario, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        })
            .subscribe(function (datos) {
            console.log(datos);
            formulario.form.reset();
        });
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
        $(".trabaje").on('click', function () {
            $(".trabaje button").toggleClass("active");
            $(".contactenos button").toggleClass("active");
        });
        $(".contactenos").on('click', function () {
            $(".trabaje button").toggleClass("active");
            $(".contactenos button").toggleClass("active");
        });
    };
    ContactUsComponent.prototype.verificaValidTouched = function (campo) {
        return !campo.valid && campo.touched;
    };
    ContactUsComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/main/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/main/pages/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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

module.exports = "<app-float-social></app-float-social>\n<app-carousel-indicators></app-carousel-indicators>\n<app-porque-bits></app-porque-bits>\n<app-product-services></app-product-services>\n<app-carousel-item-2></app-carousel-item-2>\n<app-tecnologies></app-tecnologies>\n<app-carousel-controls></app-carousel-controls>\n<app-alliances></app-alliances>\n<app-workwithus></app-workwithus>"

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

/***/ "./src/app/main/pages/iMedical/iMedical.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/iMedical/iMedical.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner titulo=\"iMedical\" imgFondo=\"/assets/images/imedicalweb.png\"></app-banner>\n<div class=\"my-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 mb-3\">\n                <app-client-card></app-client-card>\n            </div>\n            <div class=\"col-md-8 mb-3\">\n                <app-project-summary></app-project-summary>\n            </div>\n        </div>\n    </div>\n    <hr>\n    <app-menu-template></app-menu-template>\n    <app-slider></app-slider>\n    <div class=\"container\">\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-5\">\n                <h1 class=\"condensed text-center\">{{ tituloModulos }}</h1>\n                <p class=\"text-center\" [innerHTML]=\"descripcionModulos\"></p>\n            </div>\n            <div class=\"col-md-4\" *ngFor=\"let blurbItem of blurbArray\">\n                <app-blurb [blurb]=\"blurbItem\"></app-blurb>\n            </div>\n        </div>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <app-card-img-text [orientacion]=\"'IT'\"></app-card-img-text>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <app-tecnologies></app-tecnologies>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <app-card-img-text [orientacion]=\"'TI'\"></app-card-img-text>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <app-carousel-item-2></app-carousel-item-2>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>\n        <app-video-information [link]=\"'www.eliseupnorcum.cedu.co'\"></app-video-information>\n        <app-separator [iconCustom]=\"'fa-cogs'\"></app-separator>        \n    </div>\n    <app-workwithus></app-workwithus>\n</div>"

/***/ }),

/***/ "./src/app/main/pages/iMedical/iMedical.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/iMedical/iMedical.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/pages/iMedical/iMedical.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/pages/iMedical/iMedical.component.ts ***!
  \***********************************************************/
/*! exports provided: iMedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iMedicalComponent", function() { return iMedicalComponent; });
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


var iMedicalComponent = /** @class */ (function () {
    function iMedicalComponent(_http) {
        this._http = _http;
        this.blurbArray = [];
    }
    iMedicalComponent.prototype.ngOnInit = function () {
        this.getModulesService();
    };
    iMedicalComponent.prototype.getModulesService = function () {
        var _this = this;
        this._http
            .getCustomCardInformation("moduleinformation")
            .subscribe(function (params) {
            for (var _i = 0, _a = params.data; _i < _a.length; _i++) {
                var blurbItem = _a[_i];
                var blurbObject = {
                    imageSrc: "",
                    title: "",
                    description: ""
                };
                blurbObject.imageSrc = blurbItem.field_image.url;
                blurbObject.title = blurbItem.title;
                blurbObject.description = blurbItem.body;
                _this.blurbArray.push(blurbObject);
            }
        });
    };
    iMedicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-iMedical",
            template: __webpack_require__(/*! ./iMedical.component.html */ "./src/app/main/pages/iMedical/iMedical.component.html"),
            styles: [__webpack_require__(/*! ./iMedical.component.scss */ "./src/app/main/pages/iMedical/iMedical.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_1__["CustomCardService"]])
    ], iMedicalComponent);
    return iMedicalComponent;
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

module.exports = "<app-loading id=\"page-loader\" [hidden]=\"!loading\"></app-loading>\n<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n\n    <app-header></app-header>\n\n    <!-- ============================================================== -->\n    <!-- Page wrapper  -->\n    <!-- ============================================================== -->\n    <div class=\"page-wrapper\">\n\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"\">\n\n\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n\n            <router-outlet></router-outlet>\n\n            <!-- ============================================================== -->\n            <!-- End Page Content -->\n            <!-- ============================================================== -->\n\n        </div>\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n\n\n    </div>\n    <!-- ============================================================== -->\n    <!-- END Page wrapper  -->\n    <!-- ============================================================== -->\n     <app-footer></app-footer>\n\n</div>"

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
/* harmony import */ var _iMedical_iMedical_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./iMedical/iMedical.component */ "./src/app/main/pages/iMedical/iMedical.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/main/pages/politics/politics.component.ts");
/* harmony import */ var _workus_workus_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./workus/workus.component */ "./src/app/main/pages/workus/workus.component.ts");
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
                _iMedical_iMedical_component__WEBPACK_IMPORTED_MODULE_21__["iMedicalComponent"],
                _politics_politics_component__WEBPACK_IMPORTED_MODULE_22__["PoliticsComponent"],
                _workus_workus_component__WEBPACK_IMPORTED_MODULE_23__["WorkusComponent"],
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
/* harmony import */ var _workus_workus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workus/workus.component */ "./src/app/main/pages/workus/workus.component.ts");
/* harmony import */ var _iMedical_iMedical_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iMedical/iMedical.component */ "./src/app/main/pages/iMedical/iMedical.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/main/pages/politics/politics.component.ts");











var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
            { path: 'workus', component: _workus_workus_component__WEBPACK_IMPORTED_MODULE_8__["WorkusComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
            { path: 'imedical', component: _iMedical_iMedical_component__WEBPACK_IMPORTED_MODULE_9__["iMedicalComponent"] },
            { path: 'politics', component: _politics_politics_component__WEBPACK_IMPORTED_MODULE_10__["PoliticsComponent"] },
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

module.exports = "<app-banner [titulo]=\"'Politicas'\"></app-banner>\n<div class=\"container my-5\">\n    <app-blog></app-blog>\n    <app-separator [iconCustom]=\"'fa-map-marked-alt'\"></app-separator>\n    <app-blog></app-blog>\n</div>"

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

/***/ "./src/app/main/pages/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/pages/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-title></app-title>\nPágina principal de Productos..."

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

module.exports = "<app-banner></app-banner>\n<app-title></app-title>\nPágina principal de Servicios..."

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

/***/ "./src/app/main/pages/workus/workus.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/pages/workus/workus.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <form id=\"formulario_contacto\" #userForm = \"ngForm\" (ngSubmit)=\"onSubmit(userForm.value)\" class=\"col-md-12\">\n        <div class=\"form-group\" [ngClass]=\"aplicaCssErro(nombre)\" class=\"col-md-12\">\n            <div class=\"col-md-6 item\" >\n                <label for=\"exampleInputNombre\">Nombre</label>\n                <input type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" name=\"nombre\" ngModel required #nombre=\"ngModel\">\n                <div *ngIf=\"nombre.invalid && nombre.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n            </div>\n            <div class=\"col-md-6 item\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Escriba su email\" name=\"correo_electronico\" ngModel\n                        pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                        #correo_electronico=\"ngModel\">\n                <div *ngIf=\"correo_electronico.invalid && correo_electronico.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n            </div>\n        </div>\n        <div class=\"form-group\" class=\"col-md-12\">\n            <div class=\"col-md-6 item\">\n                <label for=\"exampleInputTel\">Telefono</label>\n                <input type=\"tel\" class=\"form-control\" id=\"org\" placeholder=\"Escriba su telefono\" name=\"telefono\" ngModel\n                        pattern=\"^(\\([0-9]{3}\\)|[0-9]{3})[0-9]{3}[0-9]{4}$\" #telefono=\"ngModel\">\n                <div *ngIf=\"telefono.invalid && telefono.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n            </div>\n            <div class=\"col-md-6 item\">\n                <label for=\"exampleInputOrg\">Hoja de vida</label>\n                <input type=\"file\" class=\"form-control hoja-v\" id=\"hojav\" placeholder=\"Hoja de vida\" name=\"hoja_de_vida\" ngModel #hojadevida=\"ngModel\">\n            </div>\n        </div>\n        <div class=\"form-group\" class=\"col-md-12\">\n            <div class=\"col-md-6 item\">\n                <label for=\"exampleInputPais\">Pais</label>\n                <select type=\"select\" class=\"form-control\" id=\"Pais\" placeholder=\"Seleccione su pais\" name=\"pais\" ngModel> </select>\n            </div >\n            <div class=\"col-md-6 item\">\n                <label for=\"exampleInputPais\">Ciudad</label>\n                <select type=\"select\" class=\"form-control\" id=\"ciudad\" placeholder=\"Seleccione su ciudad\" name=\"ciudad\" ngModel> </select>\n              </div >\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"col-md-6 item\">\n              <label for=\"exampleInputPais\">Sitio web personal</label>\n              <input type=\"text\" class=\"form-control\" id=\"web\" placeholder=\"Su sitio web\" name=\"sitio_web\" ngModel #sitio_web=\"ngModel\" pattern=\"https?://.+\">\n              <div *ngIf=\"sitio_web.invalid && sitio_web.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n            </div >\n            <div class=\"col-md-6 item\">\n              <label for=\"exampleInputPais\">Linkedin</label>\n              <input type=\"text\" class=\"form-control\" id=\"linkedin\" placeholder=\"Su perfil\" name=\"linkedin\" ngModel #linkedin=\"ngModel\" pattern=\"https?://.+\">\n              <div *ngIf=\"linkedin.invalid && linkedin.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n            </div >\n        </div>\n        <div class=\"form-group\" class=\"col-md-12 comentario\" >\n            <label for=\"exampleInputComm\">Comentarios</label>\n            <textarea class=\"form-control\" id=\"comentario\" placeholder=\"Escriba sus comentarios\" name=\"comentario\" ngModel #comentario=\"ngModel\"></textarea>\n            <div *ngIf=\"comentario.invalid && comentario.touched\" class=\"alert alert-danger\" role=\"alert\">Campo obligatorio o invalido</div>\n        </div>\n        <div class=\"form-group\" class=\"col-md-12 terminos_grupo\">\n            <input type=\"checkbox\" id=\"terminos\" name=\"terms_of_service\"  value=\"false\" required ngModel><label ng-reflect-ng-class=\"\" for=\"terminos\">He leído y acepto los términos y condiciones</label>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" >Enviar</button>\n        <div class=\"obligatorios col-md-12\"> <span>*</span>Datos Obligatorios</div>\n    </form>\n    <div id=\"msj-modal\" class=\"modal\" role=\"dialog\">\n      <div class=\"content-modal\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <p>Gracias por registrar su información</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/main/pages/workus/workus.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/pages/workus/workus.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *::before, *::after {\n  box-sizing: border-box; }\n\n.item {\n  display: inline-block; }\n\nlabel {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px;\n  font-weight: 100;\n  font-family: 'Open Sans light'; }\n\ninput, select {\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  border-radius: 0px;\n  font-family: 'Open Sans light'; }\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px red; }\n\nselect {\n  background: #f8f8f8;\n  font-family: 'Open Sans light'; }\n\ninput::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #808080; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #808080; }\n\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #808080; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #808080; }\n\n.comentario {\n  width: 98%;\n  margin: 0 auto; }\n\n@media screen and (max-width: 480px) {\n    .comentario {\n      width: 91%; } }\n\n.comentario textarea {\n    min-height: 40px;\n    border-radius: 0px;\n    border: 1px solid #b2c6cd;\n    padding: 10px 20px;\n    font-family: 'Open Sans light'; }\n\n.terminos_grupo {\n  position: relative;\n  max-width: 380px;\n  margin: 40px auto;\n  text-align: center;\n  /* OFF */\n  /* ON */ }\n\n.terminos_grupo [type=\"checkbox\"] {\n    position: absolute;\n    left: -9999px; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    content: '';\n    position: absolute; }\n\n.terminos_grupo [type=\"checkbox\"] + label {\n    display: block;\n    position: relative;\n    padding-left: 26px;\n    cursor: pointer;\n    line-height: 36px;\n    font-size: 1rem;\n    color: rgba(0, 43, 73, 0.8);\n    transition: color .3s; }\n\n.terminos_grupo [type=\"checkbox\"] + label a {\n    color: #91b520; }\n\n.terminos_grupo [type=\"checkbox\"] + label:after {\n    width: 30px;\n    height: 30px;\n    transition: all .2s;\n    top: 0;\n    left: 0; }\n\n.terminos_grupo [type=\"checkbox\"]:not(:checked) + label:after {\n    background: url(\"/assets/images/check2_off.png\") left center no-repeat; }\n\n.terminos_grupo [type=\"checkbox\"]:checked + label:after {\n    background: url(\"/assets/images/check2.png\") left center no-repeat; }\n\n.btn-primary {\n  border-radius: 0px;\n  background: #91b520;\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  margin: 0 auto;\n  display: block;\n  font-family: 'Open Sans light'; }\n\n.obligatorios {\n  text-align: center;\n  margin-top: 20px;\n  color: #6d747f;\n  font-family: 'Open Sans light'; }\n\n.obligatorios span {\n    color: #91b520; }\n\n.hoja-v {\n  color: transparent; }\n\n.hoja-v::-webkit-file-upload-button {\n  visibility: hidden; }\n\n.hoja-v::before {\n  content: '';\n  color: black;\n  display: inline-block;\n  background: url(/assets/images/adjunto.png);\n  background-size: contain;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  text-shadow: 1px 1px #fff;\n  font-weight: 700;\n  font-size: 10pt;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  right: 15px;\n  top: 39px; }\n\n.hoja-v:hover::before {\n  border-color: black; }\n\n.hoja-v:active {\n  outline: 0; }\n\n.hoja-v:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); }\n\n#msj-modal {\n  background: #30506cab;\n  width: 100vw;\n  height: 100vh; }\n\n#msj-modal .content-modal {\n    display: table;\n    position: relative;\n    margin-top: 25%;\n    width: 50%;\n    margin-left: 25%;\n    padding: 20px;\n    background: #fff;\n    border-radius: 10px;\n    border: solid #91b520 1px; }\n\n#msj-modal .content-modal p {\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/pages/workus/workus.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/pages/workus/workus.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkusComponent", function() { return WorkusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
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
    function WorkusComponent(_http) {
        this._http = _http;
        this.hidden = false;
        this.usuario = {
            nombre: null,
            email: null
        };
    }
    WorkusComponent.prototype.onSubmit = function (formulario) {
        console.log(formulario);
        formulario['webform_id'] = 'work_us';
        jQuery("#formulario_contacto")[0].reset();
        jQuery("#msj-modal").show();
        jQuery(".close").click(function () {
            jQuery("#msj-modal").hide();
        });
        this._http.post('webform_rest/submit?_format=json', formulario, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        })
            .subscribe(function (datos) {
            console.log(datos);
            //formulario.form.reset();
        });
    };
    WorkusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
    };
    WorkusComponent.prototype.verificaValidTouched = function (campo) {
        return !campo.valid && campo.touched;
    };
    WorkusComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo)
        };
    };
    WorkusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workus',
            template: __webpack_require__(/*! ./workus.component.html */ "./src/app/main/pages/workus/workus.component.html"),
            styles: [__webpack_require__(/*! ./workus.component.scss */ "./src/app/main/pages/workus/workus.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], WorkusComponent);
    return WorkusComponent;
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
                titleSlide: "Título de la diapositiva 1",
                subtitleSlide: "Subtitulo de diapositiva",
                descriptionSlide: "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
                listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
                imgSrcSlide: "/assets/images/phone-mockup.png",
                bkgSrcSlide: "/assets/images/fondo-hospital.jpg"
            },
            {
                titleSlide: "Título de la diapositiva 2",
                subtitleSlide: "Subtitulo de diapositiva",
                descriptionSlide: "Reprehenderit cupidatat pariatur qui amet dolore id minim eu qui ipsum qui.",
                listTextSlide: ['Caracteristica #1', 'Caracteristica #2', 'Caracteristica #3'],
                imgSrcSlide: "/assets/images/phone-mockup2.png",
                bkgSrcSlide: "/assets/images/fondo-hospital2.jpg"
            }
        ];
    }
    CustomCardService.prototype.getCustomCardInformation = function (idblock) {
        var url = "v1/card/config/" + idblock + "/export?_format=json";
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
        //return this.http.get('v1/card/export/tab-horizontal');
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
        this._in++; //Sumar una petición
    };
    /***
     * Agrega un "out" y llama al método checkLoad()
     */
    HttpService.prototype.addOut = function () {
        this._out++; //Sumar una petición completada
        this.checkLoad(); //Verificar avance
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
                this.subscriber.next(); //Notifica a los "suscriptores"
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