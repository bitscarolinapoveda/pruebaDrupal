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
                })
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

module.exports = "<!-- Loading -->\n<div id=\"loading\">\n    <div class=\"center\">\n        <div class=\"spiner\">\n            <div class=\"\">\n                <i class=\"fa fa-sync fa-spin fa-3x\"></i>\n            </div>\n        </div>\n        <div class=\"logo\">\n            <img width=\"128\" src=\"assets/images/logos/logowhite.svg\">\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/@adf/components/shared/locations/locations.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*TODO: Agregado temporalmente para poder probar, debe ajustarse/cambiarse...*/\n\nbody {\n  width: 100%;\n  font-family: 'Open Sans', sans-serif; }\n\nbody h1 {\n  font-family: 'Open Sans', sans-serif;\n  text-transform: uppercase; }\n\nbody footer picture img {\n  position: absolute;\n  height: 466px; }\n\n@media (min-width: 1025px) {\n  body footer picture img {\n    height: 181px; }\n}\n\n@media (min-width: 668px) and\n\n(max-width: 1024px) {\n  body footer picture img {\n    height: 181px; }\n}\n\n@media (min-width: 1025px) {\n  body footer {\n    width: 100%; }\n}\n\n@media (min-width: 1025px) {\n  body footer .container-elements {\n    width: 100%;\n    display: flex; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .container-elements {\n    width: 100%;\n    display: flex; }\n}\n\nbody footer .container-elements::after {\n  content: \"\";\n  background-color: #002b49;\n  opacity: 0.83;\n  position: absolute;\n  height: 464px;\n  width: 100%;\n  margin-top: -419px; }\n\n@media (min-width: 1025px) {\n  body footer .container-elements::after {\n    height: 182px;\n    margin-top: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .container-elements::after {\n    height: 182px;\n    margin-top: 0; }\n}\n\nbody footer .row {\n  margin-right: 0px; }\n\n@media (min-width: 1025px) {\n  body footer .row {\n    margin-right: -17px; }\n}\n\nbody footer .location {\n  color: #fff;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n\nbody footer .location hr {\n  width: 50%;\n  background-color: #dfdfdf;\n  margin-left: 28%;\n  opacity: 0.3;\n  margin-top: 6px; }\n\n@media (min-width: 1025px) {\n  body footer .location hr {\n    display: none; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location hr {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  body footer .location .row {\n    margin-left: 39%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row {\n    margin-left: 149px; }\n}\n\nbody footer .location .row .site {\n  display: none; }\n\n@media (min-width: 1025px) {\n  body footer .location .row .site {\n    display: block;\n    margin-left: 163px;\n    margin-top: -136px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row .site {\n    display: block;\n    margin-left: 163px;\n    margin-top: -136px; }\n}\n\nbody footer .location .row .col-lg h6 {\n  margin-left: 25px;\n  margin-top: 33px; }\n\n@media (min-width: 1025px) {\n  body footer .location .row .col-lg h6 {\n    font-size: 12px;\n    margin-left: 41px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row .col-lg h6 {\n    font-size: 12px;\n    margin-left: 41px; }\n}\n\nbody footer .location .row .col-lg ul {\n  list-style: none;\n  margin-right: 4%; }\n\nbody footer .location .row .col-lg ul .office {\n  margin-top: 10px; }\n\n@media (min-width: 1025px) {\n  body footer .location .row .col-lg ul .office {\n    width: 120%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row .col-lg ul .office {\n    width: 120%; }\n}\n\nbody footer .location .row .col-lg ul .office::before {\n  content: \"\";\n  /*background-image: url(\"../icon/placeholders.png\");*/\n  padding-left: 16px;\n  padding-top: 2px;\n  background-repeat: no-repeat; }\n\nbody footer .location .row .col-lg ul .office:hover::before {\n  /*background-image: url(\"../icon/placeholders-green.png\");*/ }\n\nbody footer .location .row .col-lg ul li {\n  color: #c1cbd3;\n  font-size: 12px; }\n\nbody footer .location .row .col-lg ul li a {\n  color: #c1cbd3;\n  margin-left: 1%; }\n\nbody footer .location .row .col-lg ul li a:hover {\n  color: #a6cf24; }\n\n@media (min-width: 1025px) {\n  body footer .location .row .col-lg ul li {\n    margin-right: 25%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row .col-lg ul li {\n    margin-right: 25%; }\n}\n\n@media (min-width: 1025px) {\n  body footer .location .row .col-lg .addres-phone {\n    margin-right: 37px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location .row .col-lg .addres-phone {\n    margin-right: 37px; }\n}\n\nbody footer .location .row .col-lg .addres-phone .addres {\n  width: 125px; }\n\n@media (min-width: 1025px) {\n  body footer .location {\n    width: 40%;\n    text-align: left; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location {\n    width: 46%;\n    text-align: left;\n    margin-left: -123px; }\n}\n\nbody footer .location::before {\n  content: \"\"; }\n\n@media (min-width: 1025px) {\n  body footer .location::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 37px;\n    margin-left: 46%;\n    opacity: 0.3; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .location::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 37px;\n    margin-left: 185px;\n    opacity: 0.3; }\n}\n\nbody footer .newsletter {\n  color: #fff;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n\nbody footer .newsletter hr {\n  width: 50%;\n  background-color: #dfdfdf;\n  margin-left: 28%;\n  opacity: 0.3; }\n\n@media (min-width: 1025px) {\n  body footer .newsletter hr {\n    display: none; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .newsletter hr {\n    display: none; }\n}\n\nbody footer .newsletter .row .col-lg-12 a {\n  margin-left: 3%; }\n\nbody footer .newsletter .row .col-lg-12 h6 {\n  margin-left: 7%; }\n\n@media (min-width: 1025px) {\n  body footer .newsletter .row .col-lg-12 h6 {\n    margin-top: 32px;\n    font-size: 12px;\n    margin-left: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .newsletter .row .col-lg-12 h6 {\n    margin-top: 32px;\n    font-size: 12px;\n    margin-left: 0; }\n}\n\nbody footer .newsletter .row .col-lg-12 ul {\n  list-style: none;\n  margin-right: 4%; }\n\nbody footer .newsletter .row .col-lg-12 ul li {\n  color: #c1cbd3;\n  font-size: 75%; }\n\n@media (min-width: 1025px) {\n  body footer .newsletter .row .col-lg-12 ul li {\n    width: 158px;\n    font-size: 11px;\n    margin-left: 15%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .newsletter .row .col-lg-12 ul li {\n    width: 158px;\n    font-size: 11px;\n    margin-left: 15%; }\n}\n\nbody footer .newsletter::before {\n  content: \"\"; }\n\n@media (min-width: 1025px) {\n  body footer .newsletter::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 37px;\n    margin-left: -63px;\n    opacity: 0.3; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .newsletter::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 37px;\n    margin-left: -63px;\n    opacity: 0.3; }\n}\n\nbody footer .contac {\n  color: #fff;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n\nbody footer .contac hr {\n  width: 50%;\n  background-color: #dfdfdf;\n  margin-left: 28%;\n  opacity: 0.3;\n  margin-top: 0; }\n\n@media (min-width: 1025px) {\n  body footer .contac hr {\n    display: none; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac hr {\n    display: none; }\n}\n\nbody footer .contac .row .col-lg-12 a {\n  color: #c1cbd3; }\n\nbody footer .contac .row .col-lg-12 a:hover {\n  color: #a6cf24; }\n\nbody footer .contac .row .col-lg-12 .icon-social {\n  margin-top: -6px;\n  margin-left: 23%; }\n\n@media (min-width: 1025px) {\n  body footer .contac .row .col-lg-12 .icon-social {\n    margin-left: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac .row .col-lg-12 .icon-social {\n    margin-left: 0; }\n}\n\nbody footer .contac .row .col-lg-12 .icon-social .fa-twitter, body footer .contac .row .col-lg-12 .icon-social .fa-facebook-f, body footer .contac .row .col-lg-12 .icon-social .fa-google-plus-g {\n  margin-left: 19px; }\n\nbody footer .contac .row .col-lg-12 .icon-social ul li {\n  font-size: 24px; }\n\n@media (min-width: 1025px) {\n  body footer .contac .row .col-lg-12 .icon-social ul li {\n    font-size: 21px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac .row .col-lg-12 .icon-social ul li {\n    font-size: 21px; }\n}\n\nbody footer .contac .row .col-lg-12 .icon:hover {\n  color: #a6cf24; }\n\nbody footer .contac .row .col-lg-12 h6 {\n  margin-left: 7%; }\n\n@media (min-width: 1025px) {\n  body footer .contac .row .col-lg-12 h6 {\n    font-size: 12px;\n    margin-left: 13px;\n    margin-right: 12px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac .row .col-lg-12 h6 {\n    font-size: 12px;\n    margin-left: 13px;\n    margin-right: 12px; }\n}\n\nbody footer .contac .row .col-lg-12 .mail {\n  margin-left: 12%; }\n\nbody footer .contac .row .col-lg-12 .mail .fa-li {\n  margin-left: 31%; }\n\n@media (min-width: 1025px) {\n  body footer .contac .row .col-lg-12 .mail .fa-li {\n    margin-left: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac .row .col-lg-12 .mail .fa-li {\n    margin-left: 0; }\n}\n\nbody footer .contac .row .col-lg-12 .mail li {\n  font-size: 75%; }\n\n@media (min-width: 1025px) {\n  body footer .contac .row .col-lg-12 .mail {\n    margin-left: 36%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac .row .col-lg-12 .mail {\n    margin-left: 36%; }\n}\n\n@media (min-width: 1025px) {\n  body footer .contac {\n    margin-top: 32px;\n    margin-left: 3%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac {\n    margin-top: 32px;\n    margin-left: 3%; }\n}\n\nbody footer .contac::before {\n  content: \"\"; }\n\n@media (min-width: 1025px) {\n  body footer .contac::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 6px;\n    margin-left: -65px;\n    opacity: 0.3; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .contac::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 6px;\n    margin-left: -65px;\n    opacity: 0.3; }\n}\n\nbody footer .logo {\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n\nbody footer .logo .row .col-lg-12 a {\n  margin-left: 3%; }\n\nbody footer .logo .row .col-lg-12 h6 {\n  color: #c1cbd3;\n  margin-left: 8%;\n  font-size: 75%;\n  margin-bottom: 25px; }\n\n@media (min-width: 1025px) {\n  body footer .logo .row .col-lg-12 h6 {\n    margin-top: 6px;\n    width: 97%;\n    font-size: 11px;\n    margin-left: 14%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .logo .row .col-lg-12 h6 {\n    margin-top: 6px;\n    width: 135px;\n    font-size: 11px;\n    margin-left: 3%; }\n}\n\nbody footer .logo .row .col-lg-12 img {\n  display: none; }\n\n@media (min-width: 1025px) {\n  body footer .logo .row .col-lg-12 img {\n    margin-left: 15%;\n    display: block; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .logo .row .col-lg-12 img {\n    display: block; }\n}\n\n@media (min-width: 1025px) {\n  body footer .logo {\n    margin-top: 32px;\n    margin-left: 3%;\n    width: 11%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .logo {\n    margin-top: 32px;\n    margin-left: 6%;\n    width: 11%; }\n}\n\nbody footer .logo::before {\n  content: \"\"; }\n\n@media (min-width: 1025px) {\n  body footer .logo::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 6px;\n    margin-left: -71px;\n    opacity: 0.3; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .logo::before {\n    border-left: 1px solid #c1cbd3;\n    position: absolute;\n    height: 81px;\n    margin-top: 6px;\n    margin-left: -71px;\n    opacity: 0.3; }\n}\n\nheader .inverse-color {\n  background: #fff; }\n\nheader .tigger-menu {\n  background: #fff;\n  color: #002b49; }\n\nheader nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header nav {\n    padding-top: 0%;\n    width: 100%;\n    position: fixed; }\n}\n\n@media (min-width: 1025px) {\n  header nav {\n    float: right;\n    padding-top: 0%;\n    width: 100%;\n    position: fixed;\n    text-align: right; }\n}\n\nheader nav .menuToggle {\n  display: block;\n  position: relative;\n  width: 100%;\n  z-index: 1; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle {\n    top: 22px; }\n}\n\nheader nav .menuToggle .Botton {\n  display: block;\n  width: 22%;\n  height: auto;\n  position: absolute;\n  left: 75%;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 2; }\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .Botton {\n    display: none; }\n}\n\nheader nav .menuToggle .Botton:checked ~ .lines {\n  opacity: 1;\n  -webkit-transform: rotate(45deg) translate(1px, 0px);\n          transform: rotate(45deg) translate(1px, 0px);\n  background: #0c7ffb; }\n\nheader nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n  opacity: 0;\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n          transform: rotate(0deg) scale(0.2, 0.2); }\n\nheader nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n  opacity: 1;\n  -webkit-transform: rotate(-45deg) translate(1px, 2px);\n          transform: rotate(-45deg) translate(1px, 2px); }\n\nheader nav .menuToggle .Botton:checked ~ .list-menu {\n  display: block;\n  -webkit-transform: none;\n          transform: none; }\n\nheader nav .menuToggle .lines {\n  display: block;\n  width: 26px;\n  height: 2.4px;\n  margin-bottom: 5px;\n  margin-left: 81%;\n  position: relative;\n  background: #fff;\n  border-radius: 30%;\n  z-index: 1;\n  -webkit-transform-origin: 4px 0px;\n          transform-origin: 4px 0px;\n  transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .lines {\n    display: none; }\n}\n\nheader nav .menuToggle .color-scroll {\n  background: #0c7ffb; }\n\nheader nav .menuToggle .lines:first-child {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%; }\n\nheader nav .menuToggle .lines:nth-last-child(2) {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  margin-bottom: 8%; }\n\nheader nav .menuToggle ul {\n  margin-bottom: 0; }\n\nheader nav .menuToggle .list-menu {\n  padding-left: 0%;\n  width: 100%;\n  position: relative;\n  display: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu {\n    display: block;\n    -webkit-transform: initial;\n            transform: initial;\n    transition-delay: initial; }\n}\n\nheader nav .menuToggle .list-menu .items {\n  list-style: none;\n  padding-bottom: 7%;\n  padding-top: 7%;\n  padding-left: 12%;\n  border-bottom: 1px solid #f5fafc; }\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items {\n    width: 8%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 0%;\n    padding-right: 0%;\n    border-bottom: initial;\n    display: inline-block; }\n}\n\nheader nav .menuToggle .list-menu .items:nth-child(1) {\n  border-top: 1px solid #cfe3ee; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; }\n}\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(1) {\n    border-top: initial; }\n}\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items:nth-child(7) {\n    padding-right: 3%; }\n}\n\nheader nav .menuToggle .list-menu .items .link {\n  color: #fff;\n  width: 100%;\n  font-size: 15px;\n  text-decoration: none;\n  text-align: left;\n  padding-right: 73%; }\n\nheader nav .menuToggle .list-menu .items .link:hover {\n  color: #a6cf24;\n  text-decoration: none; }\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items .link {\n    padding-left: 12%;\n    padding-right: 15%;\n    padding-top: 29px; }\n  header nav .menuToggle .list-menu .items .link:hover {\n    border-top: 4px solid #a6cf24; }\n}\n\nheader nav .menuToggle .list-menu .items .link .arrow {\n  padding-left: 59%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle .list-menu .items .link .arrow {\n    padding-left: 6%; }\n}\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items .link .arrow {\n    padding-left: 0%;\n    padding-right: 0%;\n    padding-top: 0%; }\n}\n\nheader nav .menuToggle .list-menu .items .link .arrow-service {\n  padding-left: 61.2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header nav .menuToggle .list-menu .items .link .arrow-service {\n    padding-left: 7.2%; }\n}\n\n@media (min-width: 1025px) {\n  header nav .menuToggle .list-menu .items .link .arrow-service {\n    padding-left: 0%; }\n}\n\nheader nav .menuToggle .list-menu .items .active {\n  border-top: 4px solid #a6cf24; }\n\nheader nav .menuToggle .list-menu .items .scroll-white {\n  color: #002b49; }\n\nheader nav .menuToggle .list-menu .language {\n  list-style: none; }\n\nheader .logo {\n  width: 15%;\n  position: fixed;\n  z-index: 1022; }\n\nheader .logo .container-logo {\n  width: 100%;\n  padding-left: 50%;\n  padding-top: 28%;\n  position: relative;\n  z-index: 100; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  header .logo .container-logo {\n    padding-top: 20%; }\n}\n\n@media (min-width: 1025px) {\n  header .logo .container-logo {\n    padding-top: 4%;\n    padding-left: 43%; }\n}\n\nheader .logo .container-logo .image-url {\n  width: 100%;\n  position: relative;\n  left: 28%; }\n\nheader .logo .container-logo .image-url img {\n  width: 90px; }\n\n@media (min-width: 1025px) {\n  header .logo .container-logo .image-url img {\n    width: 100%;\n    padding-left: 4%;\n    padding-top: 2%; }\n}\n\nbody footer .privacy {\n  width: 100%; }\n\n@media (min-width: 1025px) {\n  body footer .privacy {\n    width: 98.7%; }\n}\n\nbody footer .privacy .row .col-lg-12 {\n  background-color: #002b49;\n  opacity: 0.8;\n  color: #fff;\n  text-align: center;\n  height: 47px; }\n\nbody footer .privacy .row .col-lg-12 .politics::after {\n  content: \".\";\n  margin: 10px; }\n\nbody footer .privacy .row .col-lg-12 .sites::after {\n  content: \".\";\n  margin: 10px; }\n\nbody footer .privacy .row .col-lg-12 .politics-site {\n  margin-top: 17px;\n  font-size: 11px;\n  margin-left: 8%; }\n\nbody footer .privacy .row .col-lg-12 .politics-site a {\n  color: #fff; }\n\n@media (min-width: 1025px) {\n  body footer .privacy .row .col-lg-12 .politics-site {\n    margin-top: 14px;\n    text-align: center;\n    margin-left: 0%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body footer .privacy .row .col-lg-12 .politics-site {\n    margin-top: 16px;\n    text-align: center;\n    margin-left: 0%; }\n}\n\n@media (min-width: 1025px) {\n  body footer .privacy .row .col-lg-12 {\n    height: 46px; }\n}\n\n.social-networks .icon-social {\n  display: none; }\n\n@media (min-width: 1025px) {\n  .social-networks {\n    width: 41px;\n    height: 154px;\n    background-color: #517bbd;\n    opacity: 0.7;\n    position: fixed;\n    margin-top: 396px;\n    z-index: 1; }\n  .social-networks .icon-social {\n    display: block; }\n  .social-networks .icon-social .row {\n    margin-left: 38px;\n    width: 0; }\n  .social-networks .icon-social .row li {\n    margin-right: 1px;\n    margin-bottom: 25px; }\n  .social-networks .icon-social .row a {\n    display: block;\n    color: #fff;\n    margin-top: 11px; }\n  .social-networks .icon-social .row a:hover {\n    color: #a6cf24; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .social-networks {\n    width: 41px;\n    height: 154px;\n    background-color: #517bbd;\n    opacity: 0.7;\n    position: fixed;\n    margin-top: 396px;\n    z-index: 1; }\n  .social-networks .icon-social {\n    display: block; }\n  .social-networks .icon-social .row {\n    margin-left: 38px;\n    width: 0; }\n  .social-networks .icon-social .row li {\n    margin-right: 1px;\n    margin-bottom: 25px; }\n  .social-networks .icon-social .row a {\n    display: block;\n    color: #fff;\n    margin-top: 11px; }\n  .social-networks .icon-social .row a:hover {\n    color: #a6cf24; }\n}\n\n.envolope {\n  width: 41px;\n  height: 41px;\n  background-color: #a6cf24;\n  opacity: 0.7;\n  position: fixed;\n  border-radius: 200px;\n  margin-left: 65%;\n  margin-top: 538px;\n  z-index: 1; }\n\n.envolope .icon-mail {\n  font-size: 22px;\n  margin-top: 4px;\n  margin-left: -12px; }\n\n.envolope .icon-mail a {\n  color: #fff; }\n\n@media (min-width: 1025px) {\n  .envolope {\n    width: 41px;\n    height: 41px;\n    background-color: #a6cf24;\n    opacity: 0.7;\n    position: fixed;\n    border-radius: 0;\n    margin-top: 592px;\n    margin-left: 0;\n    z-index: 1; }\n  .envolope .icon-mail {\n    margin-left: -13px;\n    font-size: 22px;\n    margin-top: 5px; }\n  .envolope .icon-mail a {\n    color: #fff; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .envolope {\n    width: 41px;\n    height: 41px;\n    background-color: #a6cf24;\n    opacity: 0.7;\n    position: fixed;\n    margin-top: 592px;\n    border-radius: 0;\n    margin-left: 0;\n    z-index: 1; }\n  .envolope .icon-mail {\n    margin-left: -13px;\n    text-align: center;\n    font-size: 22px;\n    margin-top: 6px; }\n  .envolope .icon-mail a {\n    color: #fff; }\n}\n\n#button-top {\n  position: fixed;\n  z-index: 2;\n  height: 41px;\n  width: 41px;\n  margin-left: 79%;\n  margin-top: 538px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #button-top {\n    margin-left: 93%;\n    margin-top: 45%;\n    width: 36px;\n    height: 33px; }\n}\n\n@media (min-width: 1025px) {\n  #button-top {\n    width: 3%;\n    height: 37px;\n    top: 78.6%;\n    left: 95%;\n    margin-left: 0%;\n    margin-top: 0%; }\n}\n\n#button-top .top-return {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  /*background-image: url(\"../icon/arriba.svg\");*/\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: 1px solid transparent;\n  background-color: rgba(204, 217, 221, 0.74);\n  visibility: hidden; }\n\n#button-top .movil-display {\n  visibility: visible; }\n\n.Slider .carousel-slider {\n  width: 100%; }\n\n.Slider .carousel-slider .slider-botton {\n  bottom: 18%;\n  margin-left: 15%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .slider-botton {\n    margin-left: 78%;\n    margin-right: 6%; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .slider-botton {\n    margin-left: 81%;\n    margin-right: 4%; }\n}\n\n.Slider .carousel-slider .slider-botton .circle-botton {\n  background-color: #fff;\n  border-radius: 100%;\n  margin-left: 5.2%;\n  width: 14px;\n  height: 14px; }\n\n.Slider .carousel-slider .slider-botton .active {\n  background-color: #9db232; }\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .window-complete {\n    height: 100vh; }\n}\n\n.Slider .carousel-slider .window-complete .text-slider {\n  bottom: 19.5%;\n  left: 14%;\n  padding-bottom: initial; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .window-complete .text-slider {\n    width: 76%;\n    left: 16%;\n    text-align: right; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .window-complete .text-slider {\n    width: 76%;\n    left: 16%;\n    text-align: right; }\n}\n\n.Slider .carousel-slider .window-complete .text-slider .title-slider {\n  font-size: 36px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .window-complete .text-slider .title-slider {\n    font-size: 32px; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .window-complete .text-slider .title-slider {\n    font-size: 50px; }\n}\n\n.Slider .carousel-slider .window-complete .text-slider .description-slider {\n  font-size: 18px;\n  font-family: 'Roboto', sans-serif; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .window-complete .text-slider .description-slider {\n    position: relative;\n    line-height: 1.2;\n    font-size: 21px;\n    width: 88%;\n    left: 11%; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .window-complete .text-slider .description-slider {\n    position: relative;\n    line-height: 1.2;\n    font-size: 28px;\n    padding-left: 22%;\n    width: 88%;\n    left: 12%; }\n}\n\n.Slider .carousel-slider .icon-mobile {\n  display: none; }\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .icon-mobile {\n    display: initial; }\n}\n\n.Slider .carousel-slider .down-main {\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  position: relative;\n  bottom: 46px;\n  left: 43.2%; }\n\n.Slider .carousel-slider .down-main::after {\n  content: \"EXPLORAR\";\n  position: relative;\n  background: transparent;\n  right: 16%;\n  bottom: 30px;\n  color: #fff; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .down-main::after {\n    bottom: 18px;\n    right: 6%; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .down-main::after {\n    bottom: 30px;\n    right: 4.2%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .down-main {\n    bottom: 56px;\n    left: 48.2%; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .down-main {\n    bottom: 56px;\n    left: 48.2%; }\n}\n\n.Slider .carousel-slider .down-main .arrow-down {\n  width: 12%;\n  left: 2%;\n  position: relative; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  .Slider .carousel-slider .down-main .arrow-down {\n    width: 4%;\n    left: 0; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .down-main .arrow-down {\n    width: 3%;\n    left: 0; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .icon-prev {\n    height: 11%;\n    width: 17%;\n    bottom: 5%;\n    margin-right: 82%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.63);\n    /*background-image: url(\"../icon/back-white.svg\");*/\n    background-size: 94%;\n    background-position: center;\n    background-repeat: no-repeat; }\n}\n\n@media (min-width: 1025px) {\n  .Slider .carousel-slider .icon-next {\n    height: 11%;\n    width: 17%;\n    bottom: 5%;\n    margin-left: 81%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.63);\n    /*background-image: url(\"../icon/next-white.svg\");*/\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 94%; }\n}\n\n#title-gallery {\n  margin-top: 14%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #title-gallery {\n    margin-top: 7%; }\n}\n\n@media (min-width: 1025px) {\n  #title-gallery {\n    margin-top: 4%; }\n}\n\n#title-gallery .title {\n  background: #f7f9f9;\n  height: 160px;\n  padding-top: 11%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #title-gallery .title {\n    padding-top: 7%; }\n}\n\n@media (min-width: 1025px) {\n  #title-gallery .title {\n    height: 171px;\n    padding-top: 5%; }\n}\n\n#title-gallery .title h1 {\n  width: 97%;\n  padding-left: 8%;\n  padding-right: 4%;\n  margin-bottom: 0%;\n  text-align: center;\n  color: #002b49; }\n\n@media (min-width: 1025px) {\n  #title-gallery .title h1 {\n    width: 100%;\n    padding-left: 0%;\n    padding-right: 0%; }\n}\n\n#gallery-images {\n  height: 1122px;\n  overflow: hidden; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #gallery-images {\n    height: auto; }\n}\n\n@media (min-width: 1025px) {\n  #gallery-images {\n    height: 906px; }\n}\n\n#gallery-images .block-title {\n  height: 142px;\n  width: 100%;\n  background: #f7f9f9; }\n\n@media (min-width: 1025px) {\n  #gallery-images .block-title {\n    height: 185px; }\n}\n\n#gallery-images .block-title h2 {\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 200;\n  font-size: 40px;\n  margin: 0%;\n  z-index: 100;\n  color: #002b49;\n  padding: 0%;\n  padding-top: 11%;\n  padding-top: 81px;\n  padding-bottom: 61px; }\n\n@media (min-width: 1025px) {\n  #gallery-images .block-title h2 {\n    margin: initial;\n    padding-top: 81px; }\n}\n\n#gallery-images .container {\n  width: 100%;\n  position: relative;\n  height: 690px;\n  padding-left: 0%;\n  padding-left: 0%; }\n\n@media (min-width: 1025px) {\n  #gallery-images .container {\n    height: 895px;\n    padding: 0%; }\n}\n\n#gallery-images .gallery-container h1 {\n  text-align: center;\n  margin-top: 70px;\n  font-weight: bold;\n  color: #58595a; }\n\n#gallery-images .tz-gallery {\n  height: auto; }\n\n#gallery-images .tz-gallery .row {\n  width: 100%;\n  height: 50%;\n  margin: 0%; }\n\n#gallery-images .tz-gallery .row .col-md-4 {\n  height: 372px;\n  padding: 0%; }\n\n@media (max-width: 667px) {\n  #gallery-images .tz-gallery .row .col-md-4:nth-child(1n+4) {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .row .col-md-4 {\n    height: 453px; }\n}\n\n#gallery-images .tz-gallery .thumbnail:hover {\n  -webkit-transform: translateY(-10px) scale(1.02);\n          transform: translateY(-10px) scale(1.02); }\n\n#gallery-images .tz-gallery .caption {\n  padding: 26px 30px;\n  text-align: center; }\n\n#gallery-images .tz-gallery .caption h3 {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 0; }\n\n#gallery-images .tz-gallery .caption p {\n  font-size: 12px;\n  color: #7b7d7d;\n  margin: 0; }\n\n#gallery-images .baguetteBox-button {\n  background-color: transparent; }\n\n#gallery-images .tz-gallery .thumbnai {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin-bottom: 30px;\n  border: none;\n  overflow: hidden;\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06); }\n\n#gallery-images .tz-gallery .thumbnai .lightbox {\n  height: 100%;\n  width: 100%; }\n\n#gallery-images .tz-gallery .thumbnai .images {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: brightness(70%) grayscale(51%);\n          filter: brightness(70%) grayscale(51%);\n  width: 100%;\n  height: 100%; }\n\n#gallery-images .tz-gallery .thumbnai .box-info {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 43, 73, 0.62);\n  position: absolute;\n  bottom: 0%;\n  padding-right: 14%;\n  padding-left: 14%; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-info {\n    transition: all ease 0.89s;\n    visibility: hidden;\n    top: 100%; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n  position: relative;\n  top: 88%; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n    top: 81%;\n    left: 4%; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-info .botton_products {\n  position: relative;\n  border: none;\n  left: 32%;\n  padding-top: 2.5%;\n  padding-bottom: 2.5%;\n  text-transform: uppercase;\n  text-align: center;\n  color: #8ece17;\n  text-decoration: none;\n  visibility: hidden; }\n\n#gallery-images .tz-gallery .thumbnai .box-info .botton_products::after {\n  content: '';\n  position: relative;\n  right: 24%;\n  top: 5px;\n  padding-left: 17%;\n  padding-right: 17%;\n  padding-top: 17%;\n  /*background-image: url(\"../icon/mas.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 35px;\n  visibility: visible; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-info .botton_products {\n    left: 28%;\n    margin-right: initial;\n    margin-left: initial;\n    padding-left: 8.5%;\n    padding-right: 8.5%;\n    padding-top: 3.5%;\n    padding-bottom: 3.5%;\n    border: solid 1px #8ece17;\n    border-radius: 3%;\n    color: #8ece17;\n    font-size: 20px;\n    visibility: visible; }\n  #gallery-images .tz-gallery .thumbnai .box-info .botton_products::after {\n    content: '';\n    visibility: hidden;\n    padding-right: initial;\n    padding-left: initial; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-title {\n  position: relative;\n  bottom: 93%;\n  padding-left: 9%;\n  padding-right: 9%;\n  text-align: center;\n  z-index: 10; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-title {\n    float: right;\n    clear: both;\n    bottom: 61%;\n    padding-left: 15%;\n    padding-right: 15%;\n    transition: all ease 0.8s; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n  color: #fff;\n  position: relative;\n  top: 56%;\n  line-height: 46px;\n  font-weight: 300;\n  height: auto;\n  font-size: 31px;\n  font-family: 'Open Sans', sans-serif; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 36px; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n  content: '';\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 1.2px;\n  left: 0%;\n  bottom: -14px;\n  transition: all .3s ease-in-out;\n  -webkit-transform: scaleX(0.3);\n          transform: scaleX(0.3);\n  background: #8ece17; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n    top: 134%; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-title .box-text {\n  position: relative;\n  padding-top: 10%;\n  padding-left: 4%;\n  padding-right: 5%; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n    top: 365px;\n    transition: all ease 1s; }\n}\n\n#gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n  display: block;\n  text-align: center;\n  height: auto;\n  color: #fff;\n  font-weight: 300;\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif; }\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n    font-size: 18px;\n    top: 26%;\n    height: auto;\n    line-height: 1.4; }\n}\n\n@media (min-width: 1025px) {\n  #gallery-images .tz-gallery .thumbnai:hover .box-info {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    background: rgba(0, 43, 73, 0.62);\n    visibility: initial; }\n  #gallery-images .tz-gallery .thumbnai:hover .box-title {\n    bottom: 90%;\n    z-index: 100; }\n  #gallery-images .tz-gallery .thumbnai:hover .box-title .box-text {\n    top: 14px;\n    -webkit-transform: translateY(-6%);\n            transform: translateY(-6%); }\n  #gallery-images .tz-gallery .thumbnai:hover .titlepr:after {\n    -webkit-transform: scaleX(0.8);\n            transform: scaleX(0.8); }\n}\n\nbody .page-header {\n  height: 352px; }\n\nbody .page-header .title {\n  color: #fff; }\n\nbody .page-header .title h1 {\n  position: absolute;\n  margin-top: 178px;\n  font-size: 36px;\n  left: 52%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-transform: none; }\n\n@media (min-width: 1025px) {\n  body .page-header .title h1 {\n    font-size: 50px;\n    left: 50%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body .page-header .title h1 {\n    font-size: 50px;\n    left: 50%; }\n}\n\nbody .page-header picture img {\n  width: 100%;\n  height: 352px; }\n\nbody .page-header::before {\n  content: \"\";\n  background-color: #000;\n  opacity: 0.3;\n  height: 352px;\n  width: 100%;\n  position: absolute; }\n\nbody main #main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n\n@media (min-width: 1025px) {\n  body main #main-title {\n    margin-top: 80px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #main-title {\n    margin-top: 80px; }\n}\n\nbody main #main-title h2 {\n  margin-left: 3%;\n  font-size: 30px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -2px; }\n\n@media (min-width: 1025px) {\n  body main #main-title h2 {\n    margin-left: 0;\n    font-size: 40px;\n    width: 100%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #main-title h2 {\n    margin-left: 0;\n    font-size: 40px;\n    width: 100%; }\n}\n\nbody main #titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n\n@media (min-width: 1025px) {\n  body main #titles {\n    margin-top: 80px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #titles {\n    margin-top: 80px; }\n}\n\nbody main #titles h3 {\n  margin-left: 3%;\n  font-size: 16px; }\n\n@media (min-width: 1025px) {\n  body main #titles h3 {\n    margin-left: 0;\n    font-size: 20px;\n    width: 100%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #titles h3 {\n    margin-left: 0;\n    font-size: 20px;\n    width: 100%; }\n}\n\nmain #list-images {\n  width: 96%;\n  margin-top: 39px; }\n\n@media (min-width: 1025px) {\n  main #list-images {\n    width: 98%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  main #list-images {\n    width: 98%; }\n}\n\nmain #list-images .item-images .images {\n  margin-left: 0; }\n\n@media (min-width: 1025px) {\n  main #list-images .item-images .images {\n    margin-left: 9%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  main #list-images .item-images .images {\n    margin-left: 5%; }\n}\n\nmain #list-images .item-images .images li {\n  list-style: none;\n  margin-right: 25px;\n  margin-top: 17px;\n  text-align: center; }\n\n@media (min-width: 1025px) {\n  main #list-images .item-images .images li {\n    margin-right: 8%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  main #list-images .item-images .images li {\n    margin-right: 5%; }\n}\n\nmain #list-images .item-images .images li p {\n  font-size: 20px;\n  width: 133px;\n  margin-top: 16px;\n  color: #002b49; }\n\n@media (min-width: 1025px) {\n  main #list-images .item-images .images li p {\n    font-size: 24px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  main #list-images .item-images .images li p {\n    font-size: 24px; }\n}\n\nmain #list-images .item-images .images li:last-child {\n  margin-left: 24%; }\n\n@media (min-width: 1025px) {\n  main #list-images .item-images .images li:last-child {\n    margin-left: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  main #list-images .item-images .images li:last-child {\n    margin-left: 0; }\n}\n\n#bottons-services .totalbottons {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  background: #f7f9f9;\n  height: 141px; }\n\n@media (min-width: 1025px) {\n  #bottons-services .totalbottons {\n    top: initial; }\n}\n\n#bottons-services .totalbottons .bottons {\n  padding-left: 10%;\n  padding-bottom: 12%;\n  padding-top: 10%;\n  width: 100%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #bottons-services .totalbottons .bottons {\n    padding-left: 29%;\n    padding-bottom: 0%;\n    padding-top: 6%; }\n}\n\n@media (min-width: 1025px) {\n  #bottons-services .totalbottons .bottons {\n    padding-left: 36%;\n    padding-top: 4%;\n    padding-bottom: initial; }\n}\n\n#bottons-services .totalbottons .bottons .bottonleft {\n  width: 200px;\n  border: solid 1px rgba(142, 206, 23, 0.7);\n  padding-right: 3.5%;\n  padding-bottom: 2%;\n  padding-left: 3.5%;\n  padding-top: 2%;\n  position: relative;\n  text-decoration: none;\n  color: #fff;\n  background: rgba(142, 206, 23, 0.7);\n  font-size: 14px;\n  font-family: open_sansregular;\n  text-transform: uppercase; }\n\n@media (min-width: 1025px) {\n  #bottons-services .totalbottons .bottons .bottonleft {\n    font-size: 18px;\n    padding-bottom: 0.9%;\n    padding-top: 0.9%; }\n}\n\n#bottons-services .totalbottons .bottons .bottonrigth {\n  width: 200px;\n  border: solid 1px rgba(142, 206, 23, 0.7);\n  left: 8%;\n  padding-right: 3.5%;\n  padding-bottom: 2%;\n  padding-left: 3.5%;\n  padding-top: 2%;\n  position: relative;\n  text-decoration: none;\n  color: #fff;\n  background: rgba(142, 206, 23, 0.7);\n  font-size: 14px;\n  font-family: open_sansregular;\n  text-transform: uppercase; }\n\n@media (min-width: 1025px) {\n  #bottons-services .totalbottons .bottons .bottonrigth {\n    font-size: 18px;\n    padding-bottom: 0.9%;\n    padding-top: 0.9%; }\n}\n\n#bottons-services .totalbottons .bottons .bottonleft:hover {\n  border: solid 1px #8ece17;\n  background: #8ece17; }\n\n#bottons-services .totalbottons .bottons .bottonrigth:hover {\n  border: solid 1px #8ece17;\n  background: #8ece17; }\n\nbody main #transition-image {\n  margin-top: 53px;\n  height: 358px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image {\n    height: 366px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image {\n    height: 366px; }\n}\n\nbody main #transition-image picture .backgraund-image {\n  height: 358px;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #transition-image picture .backgraund-image {\n    height: 366px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image picture .backgraund-image {\n    height: 366px; }\n}\n\nbody main #transition-image h1 {\n  font-size: 30px;\n  color: #fff;\n  position: absolute;\n  z-index: 1;\n  margin-top: 62px;\n  margin-left: 10%; }\n\n@media (min-width: 1025px) {\n  body main #transition-image h1 {\n    margin-left: 36%;\n    margin-top: 67px;\n    font-size: 40px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image h1 {\n    margin-left: 36%;\n    margin-top: 67px;\n    font-size: 40px; }\n}\n\nbody main #transition-image .list-image-item {\n  height: 357px; }\n\nbody main #transition-image .list-image-item .row {\n  position: absolute;\n  margin-top: 146px;\n  margin-right: 0;\n  margin-left: 2px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image .list-image-item .row {\n    margin-top: 167px;\n    margin-left: 13%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image .list-image-item .row {\n    margin-top: 167px;\n    margin-left: 8%; }\n}\n\nbody main #transition-image .list-image-item .row li {\n  z-index: 1;\n  list-style: none;\n  margin-right: 23px;\n  margin-bottom: 68px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image .list-image-item .row li {\n    margin-right: 130px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image .list-image-item .row li {\n    margin-right: 96px; }\n}\n\nbody main #transition-image .list-image-item .row li:last-child {\n  margin-left: 10%;\n  margin-top: 15px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image .list-image-item .row li:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image .list-image-item .row li:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n}\n\n@media (min-width: 1025px) {\n  body main #transition-image .list-image-item .row li:nth-child(2n+1) {\n    margin-top: 38px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image .list-image-item .row li:nth-child(2n+1) {\n    margin-top: 38px; }\n}\n\nbody main #transition-image .list-image-item::after {\n  content: \"\";\n  background-color: #002b49;\n  opacity: 0.7;\n  height: 358px;\n  width: 100%;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #transition-image .list-image-item::after {\n    height: 366px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image .list-image-item::after {\n    height: 366px; }\n}\n\nbody main #transition-image2 {\n  margin-top: 53px;\n  height: 338px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 {\n    height: 317px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 {\n    height: 317px; }\n}\n\nbody main #transition-image2 picture .backgraund-image {\n  height: 338px;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 picture .backgraund-image {\n    height: 317px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 picture .backgraund-image {\n    height: 317px; }\n}\n\nbody main #transition-image2 h1 {\n  font-size: 30px;\n  color: #fff;\n  position: absolute;\n  z-index: 1;\n  margin-top: 57px;\n  margin-left: 10%; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 h1 {\n    margin-left: 36%;\n    margin-top: 77px;\n    font-size: 40px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 h1 {\n    margin-left: 36%;\n    margin-top: 77px;\n    font-size: 40px; }\n}\n\nbody main #transition-image2 .list-image-item {\n  height: 357px; }\n\nbody main #transition-image2 .list-image-item .row {\n  position: absolute;\n  margin-top: 126px;\n  margin-right: 0;\n  margin-left: 2px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item .row {\n    margin-top: 182px;\n    margin-left: 13%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item .row {\n    margin-top: 182px;\n    margin-left: 8%; }\n}\n\nbody main #transition-image2 .list-image-item .row li {\n  z-index: 1;\n  list-style: none;\n  margin-right: 17px;\n  margin-bottom: 76px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item .row li {\n    margin-right: 130px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item .row li {\n    margin-right: 68px; }\n}\n\nbody main #transition-image2 .list-image-item .row li:last-child {\n  margin-top: -22px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item .row li:last-child {\n    margin-top: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item .row li:last-child {\n    margin-top: 0; }\n}\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item .row li:nth-child(3) {\n    margin-top: 26px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item .row li:nth-child(3) {\n    margin-top: 26px; }\n}\n\nbody main #transition-image2 .list-image-item .row li:nth-child(2) {\n  margin-left: 10%;\n  margin-top: 20px; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item .row li:nth-child(2) {\n    margin-left: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item .row li:nth-child(2) {\n    margin-left: 0; }\n}\n\nbody main #transition-image2 .list-image-item::after {\n  content: \"\";\n  background-color: #000;\n  opacity: 0.3;\n  height: 338px;\n  width: 100%;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #transition-image2 .list-image-item::after {\n    height: 317px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #transition-image2 .list-image-item::after {\n    height: 317px; }\n}\n\n#Carousel-4items {\n  margin-top: 5%; }\n\n@media (min-width: 1025px) {\n  #Carousel-4items {\n    margin-top: 2%; }\n}\n\n#Carousel-4items .carousel-inner .carousel-item.active,\n#Carousel-4items .carousel-inner .carousel-item-next,\n#Carousel-4items .carousel-inner .carousel-item-prev {\n  display: contents; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #Carousel-4items .carousel-inner .carousel-item.active,\n  #Carousel-4items .carousel-inner .carousel-item-next,\n  #Carousel-4items .carousel-inner .carousel-item-prev {\n    display: flex; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner .carousel-item.active,\n  #Carousel-4items .carousel-inner .carousel-item-next,\n  #Carousel-4items .carousel-inner .carousel-item-prev {\n    display: flex; }\n}\n\n#Carousel-4items .carousel-inner .carousel-item-right.active,\n#Carousel-4items .carousel-inner .carousel-item-next {\n  -webkit-transform: translateX(25%);\n          transform: translateX(25%); }\n\n#Carousel-4items .carousel-inner .carousel-item-left.active,\n#Carousel-4items .carousel-inner .carousel-item-prev {\n  -webkit-transform: translateX(-25%);\n          transform: translateX(-25%); }\n\n#Carousel-4items .carousel-inner .carousel-item-right,\n#Carousel-4items .carousel-inner .carousel-item-left {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n#Carousel-4items .carousel-inner {\n  height: 232px;\n  width: 75%;\n  left: 2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #Carousel-4items .carousel-inner {\n    height: initial;\n    width: 68%;\n    left: initial; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner {\n    height: initial;\n    width: 63%;\n    left: initial; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner .carousel-item {\n    left: 3%; }\n}\n\n#Carousel-4items .carousel-inner .carousel-item .url-carousel {\n  width: 132px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel {\n    width: 285px; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel {\n    width: 400px;\n    text-decoration: none; }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel:hover .container-img {\n    -webkit-transform: translateY(-122%);\n            transform: translateY(-122%); }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel:hover .info-carousel {\n    -webkit-transform: translateY(-110%);\n            transform: translateY(-110%); }\n}\n\n#Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img {\n  height: 110px;\n  flex: initial;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  position: relative;\n  margin-bottom: 6%;\n  padding-top: 20%; }\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img {\n    height: 223px;\n    margin-bottom: 14%;\n    padding-top: 39%;\n    padding-bottom: 16%;\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 69.5%;\n    transition: all ease 0.8s; }\n}\n\n#Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel {\n  display: none; }\n\n@media (min-width: 1025px) {\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel {\n    position: absolute;\n    display: block;\n    width: 22%;\n    height: 222px;\n    transition: all ease 0.8s; }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel::before {\n    content: '';\n    background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%; }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel::after {\n    content: '';\n    background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n    display: block;\n    position: absolute;\n    top: 100%;\n    height: 1px;\n    width: 100%; }\n}\n\n#Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel .title {\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  padding-top: 12%;\n  font-size: 24px;\n  color: #acd233;\n  padding-left: 16%;\n  padding-right: 18%; }\n\n#Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel .text-description {\n  text-align: center;\n  width: 100%;\n  padding-top: 2%;\n  font-size: 14px;\n  color: #002b49; }\n\n#Carousel-4items .icon-left {\n  position: relative;\n  top: 5%;\n  /*background-image: url(\"../icon/left-arrow.svg\");*/\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #Carousel-4items .icon-left {\n    left: 37%; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .icon-left {\n    height: 34px;\n    left: 160px; }\n}\n\n#Carousel-4items .icon-right {\n  position: relative;\n  top: 5%;\n  /*background-image: url(\"../icon/right-arrow.svg\");*/\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #Carousel-4items .icon-right {\n    right: 40%; }\n}\n\n@media (min-width: 1025px) {\n  #Carousel-4items .icon-right {\n    height: 34px;\n    right: 160px; }\n}\n\n#title-carousel {\n  margin-top: 15.5%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #title-carousel {\n    margin-top: 5.5%; }\n}\n\n@media (min-width: 1025px) {\n  #title-carousel {\n    margin-top: 4.8%; }\n}\n\n#title-carousel h1 {\n  font-size: 30px;\n  text-align: center;\n  color: #002b49; }\n\n@media (min-width: 1025px) {\n  #title-carousel h1 {\n    font-size: 40px; }\n}\n\n#carousel-4text {\n  margin-top: 4%; }\n\n#carousel-4text .carousel-inner .carousel-item.active,\n#carousel-4text .carousel-inner .carousel-item-next,\n#carousel-4text .carousel-inner .carousel-item-prev {\n  display: flex; }\n\n#carousel-4text .carousel-inner .carousel-item-right.active,\n#carousel-4text .carousel-inner .carousel-item-next {\n  -webkit-transform: translateX(25%);\n          transform: translateX(25%); }\n\n#carousel-4text .carousel-inner .carousel-item-left.active,\n#carousel-4text .carousel-inner .carousel-item-prev {\n  -webkit-transform: translateX(-25%);\n          transform: translateX(-25%); }\n\n#carousel-4text .carousel-inner .carousel-item-right,\n#carousel-4text .carousel-inner .carousel-item-left {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner {\n    width: 78%;\n    left: 11%; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner {\n    width: 85.5%;\n    left: 6%; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n  width: 405%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n    width: 100%; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n    width: 100%; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link {\n  width: 100%;\n  text-decoration: none; }\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link {\n    padding-left: 8px;\n    padding-right: 10px; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n  display: flex;\n  height: 131px;\n  width: 100%;\n  padding-left: 22%;\n  padding-right: 21%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n    padding-left: 0%;\n    padding-right: 0%; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n    padding-left: 10%;\n    padding-right: 10%;\n    height: 111px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img .img-float {\n    max-width: 90%;\n    height: 100%;\n    padding-left: 3%;\n    padding-right: 3%; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img .img-float {\n    max-width: 100%;\n    height: 100%;\n    padding-top: 7%;\n    padding-bottom: 1%;\n    padding-left: 9%;\n    padding-right: 9%; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info {\n  width: 100%;\n  color: #002b49;\n  text-align: center; }\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n  content: '';\n  background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n  height: 1px;\n  right: 0%;\n  left: 5%;\n  top: 164px;\n  width: 15%;\n  position: absolute; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n    display: none; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info {\n    height: 250px; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n  visibility: hidden; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n    visibility: visible;\n    background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n    height: 1px;\n    width: 83%;\n    position: relative;\n    top: 17px; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n    visibility: visible;\n    background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n    height: 1px;\n    width: 83%;\n    position: relative;\n    top: 17px; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .name-organization {\n  padding-top: 14%;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif; }\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .name-organization {\n    padding-top: 14%; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .main-title {\n  margin-top: 4%;\n  font-size: 20px;\n  font-family: 'Open Sans Condensed', sans-serif;\n  text-transform: uppercase; }\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .category {\n  width: 100%;\n  margin-top: 5.2%;\n  padding-left: 27%;\n  padding-right: 26%;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif; }\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .category {\n    padding-left: 12%;\n    padding-right: 12%;\n    width: 100%;\n    height: 56px; }\n}\n\n#carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .yeard {\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  margin-top: 6%; }\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .yeard {\n    margin-top: 2%; }\n}\n\n#carousel-4text #carousel-items1 .icon-left {\n  position: relative;\n  top: 1%;\n  /*background-image: url(\"../icon/left-arrow.svg\");*/\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .icon-left {\n    top: initial;\n    bottom: 32px; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .icon-left {\n    height: 34px;\n    right: 21%;\n    bottom: 15px;\n    top: initial; }\n}\n\n#carousel-4text #carousel-items1 .icon-right {\n  position: relative;\n  top: 1%;\n  /*background-image: url(\"../icon/right-arrow.svg\");*/\n  background-size: 37px;\n  height: 27px;\n  width: 24px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #carousel-4text #carousel-items1 .icon-right {\n    top: initial;\n    bottom: 32px; }\n}\n\n@media (min-width: 1025px) {\n  #carousel-4text #carousel-items1 .icon-right {\n    height: 34px;\n    left: 14%;\n    bottom: 15px;\n    top: initial; }\n}\n\nbody main #work-with-us {\n  display: block;\n  margin-top: 65px;\n  text-align: center;\n  color: #002b49; }\n\nbody main #work-with-us h1 {\n  font-size: 40px;\n  text-transform: none;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -2px; }\n\nbody main #work-with-us p {\n  font-size: 20px;\n  margin-top: 11px;\n  margin-bottom: 30px; }\n\n@media (min-width: 1025px) {\n  body main #work-with-us p {\n    margin-bottom: 17px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #work-with-us p {\n    margin-bottom: 17px; }\n}\n\nbody main #work-with-us .btn-primary {\n  background-color: #a6cf24;\n  border-color: #a6cf24;\n  opacity: 0.75;\n  border-radius: 0;\n  width: 292px;\n  font-size: 20px;\n  height: 45px;\n  margin-bottom: 12px; }\n\n@media (min-width: 1025px) {\n  body main #work-with-us .btn-primary {\n    margin-bottom: 0; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #work-with-us .btn-primary {\n    margin-bottom: 0; }\n}\n\nbody main #work-with-us .text1 {\n  font-size: 24px;\n  margin-top: 11px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  background-color: #fff;\n  width: 42%;\n  margin-left: 29%; }\n\n@media (min-width: 1025px) {\n  body main #work-with-us .text1 {\n    width: 12%;\n    margin-left: 44%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #work-with-us .text1 {\n    width: 17%;\n    margin-left: 42%; }\n}\n\nbody main #work-with-us hr {\n  background: linear-gradient(-90deg, #fff, #a6cf24, #a6cf24, #fff);\n  height: 1px;\n  width: 80%;\n  position: absolute;\n  margin-top: 31px;\n  left: 10%; }\n\n@media (min-width: 1025px) {\n  body main #work-with-us hr {\n    width: 22%;\n    left: 39%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #work-with-us hr {\n    width: 22%;\n    left: 39%; }\n}\n\nbody main #work-with-us .text2 {\n  margin-bottom: 67px; }\n\n#tabs-vertical {\n  margin-top: 12%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #tabs-vertical {\n    margin-top: 5%;\n    width: 29%; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical {\n    margin-top: 3%;\n    width: 31%; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical {\n    height: 480px;\n    overflow: hidden; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs--vertical {\n  border-bottom: none;\n  display: flex;\n  flex-flow: column nowrap; }\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item {\n  height: 121px;\n  border-bottom: 1px solid #d9e0e4;\n  background: #f2f4f6; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item {\n    transition: all ease 0.89s; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link {\n  height: 100%;\n  border-bottom: 1px solid #d9e0e4;\n  padding-top: 7%; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link {\n    padding-left: 20.5%; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .title {\n  color: #002b49;\n  font-size: 17px; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .title {\n    font-size: 18px; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .title::after {\n  content: '';\n  position: absolute;\n  display: flex;\n  /*background-image: url(\"../icon/ordenar-abajo.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  padding: 10px;\n  margin-top: -6%;\n  margin-left: 81%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .title::after {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .title::after {\n    display: none; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .address {\n  font-size: 13px;\n  color: #838d99;\n  text-transform: uppercase; }\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .address::before {\n  content: '';\n  /*background-image: url(\"../icon/ubication.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  padding: 10px;\n  margin-right: 3%; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .address {\n    font-size: 14px; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .phone {\n  font-size: 13px;\n  color: #838d99;\n  text-transform: uppercase; }\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .phone::before {\n  content: '';\n  /*background-image: url(\"../icon/phone.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  padding: 10px;\n  margin-right: 3%;\n  margin-left: 0.5%; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .nav-link .phone {\n    font-size: 14px; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .active {\n  background-color: #d9e0e4; }\n\n#tabs-vertical .block-vertical .nav-tabs .nav-item .active .title::after {\n  content: '';\n  /*background-image: url(\"../icon/ordenar-arriba.svg\");*/ }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .active .title::after {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav-item .active .title::after {\n    display: none; }\n}\n\n#tabs-vertical .block-vertical .nav-tabs .nav2 {\n  display: none; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav2 {\n    display: initial; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .nav-tabs .nav2 {\n    display: initial; }\n}\n\n#tabs-vertical .block-vertical .show-more {\n  height: 88px;\n  background: #f2f4f6;\n  color: #002b49;\n  text-align: center;\n  padding-top: 7%;\n  font-size: 18px;\n  font-family: 'Open Sans Condensed', sans-serif; }\n\n#tabs-vertical .block-vertical .show-more::before {\n  content: \"VER MAS UBICACIONES\";\n  position: absolute;\n  padding: 10px;\n  margin-top: 0%;\n  margin-left: -63px; }\n\n#tabs-vertical .block-vertical .show-more::after {\n  content: '';\n  position: absolute;\n  /*background-image: url(\"../icon/ordenar-abajo.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 23px;\n  padding: 10px;\n  margin-top: 9%;\n  margin-left: -2px; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .show-more {\n    display: none; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #tabs-vertical .block-vertical .show-more .button-more {\n    display: none; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .show-more .button-more {\n    display: none; }\n}\n\n#tabs-vertical .block-vertical .show-less {\n  background: #d9e0e4; }\n\n#tabs-vertical .block-vertical .show-less::before {\n  content: \"VER MENOS UBICACIONES\";\n  position: absolute;\n  padding: 10px;\n  margin-top: 4%;\n  margin-left: -86px; }\n\n#tabs-vertical .block-vertical .show-less::after {\n  content: '';\n  position: absolute;\n  /*background-image: url(\"../icon/ordenar-arriba.svg\");*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 23px;\n  padding: 10px;\n  margin-top: 1%;\n  margin-left: -9px; }\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .botton-arrive {\n    /*background-image: url(\"../icon/flecha-arriba.svg\");*/\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 65%;\n    background-color: #d9e0e4;\n    border-radius: 100%;\n    border: transparent;\n    width: 44px;\n    height: 41px;\n    position: absolute;\n    padding: 1%;\n    top: 77em;\n    left: 27.1%; }\n}\n\n@media (min-width: 1025px) {\n  #tabs-vertical .block-vertical .botton-down {\n    /*background-image: url(\"../icon/descargar-down.svg\");*/\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 65%;\n    background-color: #d9e0e4;\n    border-radius: 100%;\n    border: transparent;\n    width: 44px;\n    height: 41px;\n    position: relative;\n    padding: 2%;\n    padding-left: 5%;\n    padding-right: 4%;\n    left: 88%;\n    bottom: 11em; }\n}\n\n#blocks-tabs {\n  margin-top: 12%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #blocks-tabs {\n    margin-top: 6%; }\n}\n\n@media (min-width: 1025px) {\n  #blocks-tabs {\n    margin-top: 3.5%; }\n}\n\n#blocks-tabs .block {\n  background: #e5e9ec;\n  height: 137px; }\n\n@media (min-width: 1025px) {\n  #blocks-tabs .block {\n    height: 140px; }\n}\n\n#blocks-tabs .block .nav {\n  height: 100%; }\n\n#blocks-tabs .block .nav .list {\n  width: 50%;\n  font-size: 22px;\n  text-align: center; }\n\n@media (min-width: 1025px) {\n  #blocks-tabs .block .nav .list {\n    padding-left: 11.8%;\n    z-index: 2; }\n  #blocks-tabs .block .nav .list::after {\n    content: '';\n    z-index: -1;\n    position: absolute;\n    height: 75px;\n    width: 1px;\n    margin-top: -7%;\n    left: 11.8%;\n    background-color: #95a7b3; }\n}\n\n#blocks-tabs .block .nav .list .nav-link {\n  height: 100%;\n  padding-top: 6%;\n  color: #2e516a; }\n\n@media (min-width: 1025px) {\n  #blocks-tabs .block .nav .list .nav-link {\n    padding-top: 3.5%; }\n}\n\n#blocks-tabs .block .nav .list .item-block {\n  text-decoration: none; }\n\n#blocks-tabs .block .nav .list .item-block::before {\n  content: '';\n  display: block;\n  padding: 1em;\n  /*background-image: url(\"../icon/contact.svg\");*/\n  background-repeat: no-repeat;\n  background-position: center; }\n\n#blocks-tabs .block .nav .list .item-block-2 {\n  text-decoration: none; }\n\n#blocks-tabs .block .nav .list .item-block-2::before {\n  content: '';\n  display: block;\n  padding: 1em;\n  /*background-image: url(\"../icon/joinus.svg\");*/\n  background-repeat: no-repeat;\n  background-position: center; }\n\n#blocks-tabs .block .nav .list .active {\n  background: #2e516a;\n  color: #fff; }\n\n#blocks-tabs .block .nav .list .active::before {\n  content: '';\n  /*background-image: url(\"../icon/contact-white.svg\");*/ }\n\n#blocks-tabs .block .nav .list .active::after {\n  content: '';\n  position: absolute;\n  border-width: 22px 65px 0;\n  border-style: solid;\n  border-color: #2e516a transparent transparent;\n  margin-top: 11.38%;\n  margin-left: -112px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #blocks-tabs .block .nav .list .active::after {\n    margin-top: 6%;\n    margin-left: -179px; }\n}\n\n@media (min-width: 1025px) {\n  #blocks-tabs .block .nav .list .active::after {\n    margin-top: 4.2%;\n    margin-left: -206px;\n    border-width: 35px 95px 0; }\n}\n\n@media (min-width: 1025px) {\n  #blocks-tabs .block .nav .list-color {\n    padding-left: 0%;\n    padding-right: 11.8%; }\n  #blocks-tabs .block .nav .list-color::after {\n    content: '';\n    position: absolute;\n    height: 75px;\n    width: 1px;\n    margin-top: -7%;\n    left: 88.14%;\n    background-color: #95a7b3; }\n}\n\n#blocks-tabs .block .nav .list-color .active {\n  background: #2e516a;\n  color: #fff; }\n\n#blocks-tabs .block .nav .list-color .active::before {\n  content: '';\n  /*background-image: url(\"../icon/joinus-white.svg\");*/ }\n\n.modal-open {\n  overflow: auto;\n  padding-right: 0 !important; }\n\nbody main #alert-item1 {\n  margin-left: 12%;\n  width: 76%;\n  margin-top: 52px; }\n\nbody main #alert-item1 .alert-success {\n  background-color: #fff;\n  border-color: #fff;\n  color: #002b49; }\n\nbody main #alert-item1 .alert-success .successful-text {\n  font-style: normal;\n  margin-left: 1%; }\n\nbody main #alert-item1 .alert-success .fa-check-circle {\n  font-size: 24px;\n  color: #a6cf24; }\n\nbody main .modal {\n  position: initial; }\n\nbody main #alert-item1::before {\n  content: \"\";\n  background-color: #a6cf24;\n  opacity: 0.15;\n  z-index: 1;\n  width: 76%;\n  height: 119px;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #alert-item1::before {\n    height: 50px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #alert-item1::before {\n    height: 50px; }\n}\n\nbody main #alert-item2 {\n  margin-left: 12%;\n  width: 77%;\n  margin-top: 52px; }\n\nbody main #alert-item2 .alert-danger {\n  border-radius: 0; }\n\nbody main #alert-item2 .alert-danger .error-text {\n  font-style: normal;\n  margin-left: 1%; }\n\nbody main #alert-item2 .alert-danger .fa-exclamation-circle {\n  font-size: 24px; }\n\nbody main #alert-item2::before {\n  content: \"\";\n  z-index: 1;\n  width: 77%;\n  height: 119px;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #alert-item2::before {\n    height: 50px; }\n}\n\nbody .modal-backdrop {\n  position: absolute;\n  background-color: #fff;\n  z-index: 0; }\n\nbody .modal-backdrop.show {\n  opacity: 0; }\n\nbody main #separators {\n  margin-top: 63px; }\n\n@media (min-width: 1025px) {\n  body main #separators {\n    margin-top: 86px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #separators {\n    margin-top: 86px; }\n}\n\nbody main #separators hr {\n  width: 78%;\n  background: linear-gradient(-90deg, #fff, #002b49, #002b49, #fff);\n  height: 1px; }\n\n@media (min-width: 1025px) {\n  body main #separators hr {\n    width: 66%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #separators hr {\n    width: 66%; }\n}\n\nbody main #separators img {\n  height: 37px;\n  position: absolute;\n  margin-left: 44%;\n  margin-top: -15px;\n  background-color: #fff;\n  width: 14%; }\n\n@media (min-width: 1025px) {\n  body main #separators img {\n    height: 55px;\n    margin-left: 46%;\n    margin-top: -28px;\n    width: 7%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #separators img {\n    height: 55px;\n    margin-left: 46%;\n    margin-top: -28px;\n    width: 7%; }\n}\n\nbody main #title-description {\n  text-align: center;\n  color: #002b49;\n  margin-top: 39px; }\n\n@media (min-width: 1025px) {\n  body main #title-description {\n    margin-top: 49px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #title-description {\n    margin-top: 49px; }\n}\n\nbody main #title-description h4 {\n  font-size: 30px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px; }\n\nbody main #title-description p {\n  font-size: 16px; }\n\n@media (min-width: 1025px) {\n  body main #title-description p {\n    font-size: 20px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #title-description p {\n    font-size: 20px; }\n}\n\nbody main #date {\n  color: #a6cf24;\n  font-size: 18px;\n  margin-left: 10%;\n  margin-top: 51px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px; }\n\n@media (min-width: 1025px) {\n  body main #date {\n    margin-left: 13%;\n    color: #002b49; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #date {\n    margin-left: 13%;\n    color: #002b49; }\n}\n\nbody main #date i {\n  font-style: normal; }\n\nbody main .title-subtitle-description {\n  margin-left: 10%;\n  color: #002b49;\n  margin-top: 44px;\n  width: 82%; }\n\n@media (min-width: 1025px) {\n  body main .title-subtitle-description {\n    margin-left: 13%; }\n}\n\nbody main .title-subtitle-description h3 {\n  font-size: 26px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px; }\n\n@media (min-width: 1025px) {\n  body main .title-subtitle-description h3 {\n    font-size: 36px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main .title-subtitle-description h3 {\n    font-size: 36px; }\n}\n\nbody main .title-subtitle-description h4 {\n  font-size: 22px;\n  margin-top: 29px; }\n\nbody main .title-subtitle-description p {\n  font-size: 14px;\n  margin-top: 22px; }\n\nbody main .title-subtitle-description p a {\n  color: #a6cf24; }\n\nbody main .title-subtitle-description:last-child {\n  margin-bottom: 83px; }\n\n@media (min-width: 1025px) {\n  body main #block-image-left {\n    margin-left: 10%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-left {\n    margin-left: 10%; }\n}\n\nbody main #block-image-left .backgraundColor {\n  background-color: #93a4aa;\n  opacity: 0.10;\n  height: 628px;\n  margin-top: 37px; }\n\n@media (min-width: 1025px) {\n  body main #block-image-left .backgraundColor {\n    height: 390px;\n    width: 83%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-left .backgraundColor {\n    height: 390px;\n    width: 83%; }\n}\n\nbody main #block-image-left picture img {\n  height: 271px;\n  width: 100%;\n  position: absolute; }\n\n@media (min-width: 1025px) {\n  body main #block-image-left picture img {\n    height: 389px;\n    width: 27.5%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-left picture img {\n    height: 389px;\n    width: 36%; }\n}\n\nbody main #block-image-left .description {\n  position: absolute;\n  margin-top: 310px;\n  color: #002b49;\n  z-index: 1;\n  margin-left: 12%; }\n\n@media (min-width: 1025px) {\n  body main #block-image-left .description {\n    margin-top: 37px;\n    width: 49%;\n    margin-left: 30%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-left .description {\n    margin-top: 37px;\n    width: 37%;\n    margin-left: 40%; }\n}\n\nbody main #block-image-left .description h3 {\n  font-size: 20px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px; }\n\nbody main #block-image-left .description h2 {\n  font-size: 30px;\n  letter-spacing: 1px;\n  font-weight: bolder; }\n\nbody main #block-image-left .description p {\n  font-size: 14px;\n  width: 88%; }\n\nbody main #block-image-left .description a {\n  color: #a6cf24; }\n\nbody main #block-image-left .description hr {\n  width: 86%;\n  margin-left: 0px;\n  height: 1px;\n  background: linear-gradient(90deg, #a6cf24, #fff); }\n\n@media (min-width: 1025px) {\n  body main #block-image-right {\n    margin-left: 10%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-right {\n    margin-left: 10%; }\n}\n\nbody main #block-image-right .backgraundColor {\n  background-color: #93a4aa;\n  opacity: 0.10;\n  height: 628px;\n  margin-top: 37px; }\n\n@media (min-width: 1025px) {\n  body main #block-image-right .backgraundColor {\n    height: 390px;\n    width: 83%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-right .backgraundColor {\n    height: 390px;\n    width: 83%; }\n}\n\nbody main #block-image-right picture img {\n  position: absolute;\n  width: 100%;\n  height: 271px; }\n\n@media (min-width: 1025px) {\n  body main #block-image-right picture img {\n    margin-left: 47.2%;\n    height: 389px;\n    width: 27.5%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-right picture img {\n    margin-left: 38%;\n    height: 389px;\n    width: 36%; }\n}\n\nbody main #block-image-right .description {\n  position: absolute;\n  margin-top: 310px;\n  color: #002b49;\n  z-index: 1;\n  margin-left: 12%; }\n\n@media (min-width: 1025px) {\n  body main #block-image-right .description {\n    margin-top: 37px;\n    width: 49%;\n    margin-left: 2.2%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-image-right .description {\n    margin-top: 37px;\n    width: 37%;\n    margin-left: 2.2%; }\n}\n\nbody main #block-image-right .description h3 {\n  font-size: 20px;\n  -webkit-transform: scaleY(1.2);\n          transform: scaleY(1.2);\n  letter-spacing: -1px; }\n\nbody main #block-image-right .description h2 {\n  font-size: 30px;\n  letter-spacing: 1px;\n  font-weight: bolder; }\n\nbody main #block-image-right .description p {\n  font-size: 14px;\n  width: 88%; }\n\nbody main #block-image-right .description a {\n  color: #a6cf24; }\n\nbody main #block-image-right .description hr {\n  width: 86%;\n  margin-left: 0px;\n  height: 1px;\n  background: linear-gradient(90deg, #a6cf24, #fff); }\n\n@media (min-width: 1025px) {\n  body main #block-video {\n    margin-left: 10%;\n    height: 371px; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-video {\n    margin-left: 10%;\n    height: 371px; }\n}\n\nbody main #block-video .backgraundColor {\n  background-color: #93a4aa;\n  opacity: 0.10;\n  height: 546px;\n  margin-top: 37px; }\n\n@media (min-width: 1025px) {\n  body main #block-video .backgraundColor {\n    height: 371px;\n    width: 83%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-video .backgraundColor {\n    height: 371px;\n    width: 83%; }\n}\n\nbody main #block-video .embed-responsive {\n  height: auto;\n  width: 100%;\n  position: absolute;\n  z-index: 1; }\n\n@media (min-width: 1025px) {\n  body main #block-video .embed-responsive {\n    height: 371px;\n    width: 49%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-video .embed-responsive {\n    height: 371px;\n    width: 49%; }\n}\n\nbody main #block-video .description {\n  position: absolute;\n  margin-top: 249px;\n  color: #002b49;\n  z-index: 1;\n  margin-left: 12%; }\n\n@media (min-width: 1025px) {\n  body main #block-video .description {\n    margin-top: 40px;\n    width: 22%;\n    margin-left: 51%; }\n}\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #block-video .description {\n    margin-top: 40px;\n    width: 23%;\n    margin-left: 51%; }\n}\n\nbody main #block-video .description h2 {\n  font-size: 30px;\n  letter-spacing: 1px;\n  font-weight: bolder; }\n\nbody main #block-video .description p {\n  font-size: 14px;\n  width: 88%; }\n\nbody main #block-video .description a {\n  color: #a6cf24;\n  letter-spacing: -1px; }\n\nbody main #block-video .description a i {\n  margin-right: 8px; }\n\nbody main #block-video .description hr {\n  width: 86%;\n  margin-left: 0px;\n  height: 1px;\n  background: linear-gradient(90deg, #a6cf24, #fff); }\n\n#image-desccription {\n  margin-top: 10.5%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription {\n    margin-top: 4.5%;\n    display: flex;\n    padding-left: 9%;\n    padding-right: 9%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription {\n    display: flex;\n    margin-top: 3%;\n    padding-left: 13.5%;\n    padding-right: 12%; }\n}\n\n#image-desccription .container {\n  text-align: center; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container {\n    width: 34%;\n    text-align: left; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container {\n    width: 34%;\n    text-align: left;\n    margin-top: 4px;\n    display: none; }\n}\n\n#image-desccription .container .container-title {\n  text-transform: uppercase;\n  color: #a3b1b6; }\n\n#image-desccription .container .container-title .title {\n  font-size: 20px;\n  font-family: 'Open Sans Condensed', sans-serif; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container .container-title .title {\n    font-size: 20px; }\n}\n\n#image-desccription .container .container-image {\n  padding-top: 2%;\n  padding-bottom: 11%; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container .container-image {\n    padding-top: 5%;\n    margin-left: 8%; }\n}\n\n#image-desccription .stripes {\n  height: 0.5px;\n  width: 86.8%;\n  background: linear-gradient(-90deg, #fff, #b8d950, #b8d950, #b8d950, #b8d950, #fff); }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .stripes {\n    width: 100%;\n    background: linear-gradient(-90deg, #fff, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950); }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .stripes {\n    width: 100%;\n    background: linear-gradient(-90deg, transparent, transparent, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950, #b8d950); }\n}\n\n#image-desccription .container-second {\n  text-align: center; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second {\n    text-align: left;\n    margin-left: 3%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second {\n    margin-left: 5%;\n    text-align: left; }\n}\n\n#image-desccription .container-second .title-frist {\n  text-transform: uppercase;\n  color: #a7b5b9; }\n\n#image-desccription .container-second .title-frist .title {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 20px; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .title-frist .title {\n    font-size: 24px; }\n}\n\n#image-desccription .container-second .single-image {\n  float: left;\n  margin-right: 6%;\n  height: 187px;\n  display: none; }\n\n#image-desccription .container-second .container-main {\n  color: #002b49; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .container-main {\n    margin-top: -3%; }\n}\n\n#image-desccription .container-second .container-main .main-title {\n  font-size: 22px;\n  font-family: 'Open Sans', sans-serif;\n  padding-left: 14%;\n  padding-right: 14%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second .container-main .main-title {\n    padding-left: 0%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .container-main .main-title {\n    padding-left: 0%; }\n}\n\n#image-desccription .container-second .container-description {\n  margin-top: 5%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second .container-description {\n    margin-top: 1%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .container-description {\n    margin-top: 0%; }\n}\n\n#image-desccription .container-second .container-description a {\n  text-decoration: none; }\n\n#image-desccription .container-second .container-description a .title {\n  color: #97d135;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: 22px;\n  display: none; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .container-description a .title {\n    position: relative;\n    width: 32%;\n    left: 43%;\n    bottom: 35px; }\n}\n\n#image-desccription .container-second .container-description .description {\n  font-size: 14px;\n  color: #7c8385;\n  padding-left: 11%;\n  padding-right: 11%;\n  padding-top: 2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second .container-description .description {\n    padding-top: 0%;\n    padding-right: 2%;\n    padding-left: 0%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .container-description .description {\n    padding-top: 0%;\n    padding-right: 2%;\n    padding-left: 0%;\n    position: relative; }\n}\n\n#image-desccription .container-second .bottons {\n  padding-left: 10%;\n  padding-right: 10%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second .bottons {\n    padding-left: 0%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .bottons {\n    padding-left: 0%;\n    position: relative; }\n}\n\n#image-desccription .container-second .bottons .badge {\n  background-color: #b0dd5c;\n  border-radius: 0%;\n  padding-left: 3%;\n  padding-right: 3%;\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  font-size: 12px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  #image-desccription .container-second .bottons .badge {\n    margin-left: 0%;\n    margin-right: 1%;\n    padding-left: 1%;\n    padding-right: 2%;\n    width: 13%; }\n}\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .bottons .badge {\n    margin-left: 0%;\n    width: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%; }\n}\n\n#image-desccription .container-second .url {\n  position: relative;\n  top: 15px;\n  color: #8ece17;\n  font-size: 18px;\n  font-family: 'Open Sans Condensed', sans-serif; }\n\n@media (min-width: 1025px) {\n  #image-desccription .container-second .url {\n    top: 12px; }\n}\n\nbody main #title-description {\n  width: 58%;\n  margin-left: auto;\n  margin-right: auto; }\n\n@media (min-width: 1025px) {\n  body main #title-description {\n    width: auto; }\n}\n\nbody main #logo-title-description .row {\n  margin-right: 0;\n  margin-left: 0;\n  margin-top: 0%;\n  text-align: -webkit-center; }\n\n@media (min-width: 1025px) {\n  body main #logo-title-description .row {\n    margin-top: 2%;\n    text-align: -webkit-center;\n    margin-left: 8%; }\n}\n\nbody main #logo-title-description div .col-md-4 {\n  margin-top: 1%;\n  margin-right: -66px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #logo-title-description div .col-md-4 {\n    margin-right: 0px; }\n}\n\nbody main #logo-title-description h1 {\n  font-size: 22px;\n  margin-top: 20px;\n  color: #002b49;\n  font-family: 'Open Sans Condensed', sans-serif; }\n\nbody main #logo-title-description p {\n  font-size: 14px;\n  color: #002b49;\n  opacity: 0.6;\n  width: 71%; }\n\nbody main #title-logo {\n  text-align: center;\n  margin-top: 46px;\n  width: 63%;\n  margin-left: auto;\n  margin-right: auto;\n  color: #022944;\n  margin-bottom: auto; }\n\nbody main #title-logo h4 {\n  font-size: 35px; }\n\nbody main #title-logo p {\n  font-size: 18px; }\n\nbody main #logo-image {\n  text-align: center; }\n\nbody main #logo-image .description-image {\n  margin-top: 70px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #logo-image .description-image {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%; }\n}\n\nbody main #logo-image div .mgen {\n  margin-bottom: 35px;\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #logo-image div .mgen {\n    margin-bottom: 0px;\n    margin-right: 70px;\n    padding: 2%; }\n}\n\n@media (min-width: 1025px) {\n  body main #logo-image div .mgen {\n    margin-bottom: 0px; }\n}\n\nbody main #barra-url {\n  margin-top: 2%;\n  margin-bottom: -4%; }\n\nbody main #barra-url #linea {\n  background-color: #c2c6c7;\n  margin-bottom: 0%; }\n\nbody main #barra-url .barra {\n  width: 100%;\n  overflow: auto;\n  margin-left: auto; }\n\nbody main #barra-url .list-bloque {\n  flex-wrap: nowrap;\n  width: 1016px; }\n\n@media (min-width: 1025px) {\n  body main #barra-url .list-bloque {\n    width: auto; }\n}\n\nbody main #barra-url .list-bloque .content-botton {\n  position: relative; }\n\nbody main #barra-url .list-bloque .content-botton .nav-link {\n  color: #022944; }\n\nbody main #barra-url .list-bloque .content-botton .nav-link:hover {\n  color: #bcdb5b; }\n\nbody main #barra-url .list-bloque .content-botton .nav-link:after {\n  content: '';\n  display: block;\n  background-color: #bcdb5b;\n  width: 1px;\n  height: 14px;\n  position: absolute;\n  top: 13px;\n  right: -1px; }\n\nbody main #barra-url .list-bloque .content-botton:last-child .nav-link:after {\n  background: transparent; }\n\nbody main .oo {\n  margin-top: -539px;\n  margin-bottom: 260px; }\n\nbody main #forms {\n  /* Popup container - can be anything you want */\n  /* The actual popup */\n  /* Popup arrow */\n  /* Toggle this class - hide and show the popup */\n  /* Add animation (fade in the popup) */ }\n\nbody main #forms .principal-data {\n  list-style: none; }\n\nbody main #forms .principal-data .item-comid {\n  max-width: 100%; }\n\nbody main #forms .principal-data .item-comid .description {\n  display: -ms-grid;\n  display: grid;\n  margin-left: auto;\n  margin-right: auto;\n  width: 92%;\n  margin-top: 19px;\n  color: #bcdb5b; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .principal-data .item-comid .description {\n    margin-left: 44px; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .item-comid .description {\n    width: 77%; }\n}\n\nbody main #forms .principal-data .item-comid .description #style1 {\n  padding: 10px 20px;\n  border: 1px solid #b2c6cd;\n  color: #002b49; }\n\nbody main #forms .principal-data .position {\n  margin-left: auto;\n  margin-right: 17px;\n  width: 92%; }\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .position {\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n    margin-top: 25px; }\n}\n\nbody main #forms .principal-data .contenido {\n  display: -ms-grid;\n  display: grid; }\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .contenido {\n    margin-right: 25px;\n    margin-left: 15px; }\n}\n\nbody main #forms .principal-data .contenido label {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px; }\n\nbody main #forms .principal-data .contenido #style {\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49; }\n\nbody main #forms .principal-data .name {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px; }\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .name {\n    margin-left: 15px; }\n}\n\nbody main #forms .principal-data .document {\n  display: block; }\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .document {\n    margin-right: 25px;\n    margin-left: 15px; }\n}\n\nbody main #forms .principal-data .document #adjunto {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n\nbody main #forms .principal-data .adjun-image {\n  /*background-image: url(\"../images/adjunto.png\");*/\n  width: 45px;\n  height: 45px;\n  display: block;\n  background-size: contain;\n  margin-left: 87%;\n  margin-top: -20px;\n  cursor: pointer; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .principal-data .adjun-image {\n    margin-left: 86%; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .principal-data .adjun-image {\n    margin-left: 90%; }\n}\n\nbody main #forms .principal-data .contenido-adjunto {\n  margin-top: -26px;\n  display: block;\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  cursor: pointer; }\n\nbody main #forms p {\n  margin-top: 57px;\n  color: #002b49;\n  text-align: center;\n  margin-left: 11px; }\n\n@media (min-width: 1025px) {\n  body main #forms p {\n    margin-left: auto; }\n}\n\nbody main #forms p a {\n  color: #bcdb5b;\n  text-decoration: underline;\n  margin-left: 3px; }\n\nbody main #forms .container {\n  display: block;\n  cursor: pointer;\n  max-width: 42%;\n  padding-left: 0px;\n  margin-left: 0px;\n  margin-left: 11px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .container {\n    margin-left: 177px; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .container {\n    margin-left: 471px; }\n}\n\nbody main #forms .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n\nbody main #forms .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 24px;\n  width: 24px;\n  background-color: #fff;\n  /*background-image: url(\"../images/check.png\");*/ }\n\nbody main #forms .container input:checked ~ .checkmark {\n  /*background-image: url(\"../images/check2.png\");*/ }\n\nbody main #forms .container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid blanck;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\nbody main #forms .popup {\n  position: relative;\n  cursor: pointer;\n  /*background-image: url(\"../images/question.png\");*/\n  background-size: contain;\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin-left: 93%;\n  margin-top: -31px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .popup {\n    margin-left: 73%; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .popup {\n    margin-left: 821px; }\n}\n\nbody main #forms .popup .popuptext {\n  visibility: hidden;\n  width: 365px;\n  background-color: #e5e9ec;\n  color: #002b49;\n  text-align: center;\n  border-radius: 6px;\n  padding: 8px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 227%;\n  margin-left: -351px; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .popup .popuptext {\n    width: 781px;\n    margin-left: -535px; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .popup .popuptext {\n    width: 1231px;\n    margin-left: -766px;\n    margin-bottom: 5px; }\n}\n\nbody main #forms .popup .popuptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 97.4%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #e5e9ec transparent transparent transparent; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n  body main #forms .popup .popuptext::after {\n    left: 69.4%; }\n}\n\n@media (min-width: 1025px) {\n  body main #forms .popup .popuptext::after {\n    left: 62.6%; }\n}\n\nbody main #forms .popup .show {\n  visibility: visible;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; }\n}\n\nbody main #forms .button {\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  color: white !important;\n  margin: 33px 108px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 48px;\n  width: 137px;\n  text-align: center;\n  -webkit-appearance: none;\n  text-align: center;\n  opacity: 0.8; }\n\nbody main #forms .dato-button {\n  text-align: center;\n  color: #002b49;\n  margin-top: 20px; }\n\nbody main #forms .dato-button strong {\n  color: #bcdb5b; }\n\n#tabs-vertical {\n  float: left;\n}\n\nagm-map {\n  float: left;\n  margin-top: 3%;\n  height: 361px;\n  width: 800px;\n}"

/***/ }),

/***/ "./src/app/@adf/components/shared/locations/locations.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/@adf/components/shared/locations/locations.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"title-description\">\n    <h4>Nuestra ubicacion</h4>\n    <p>Aqui podra ver la ubicacion de nuestras oficinas</p>\n</section>\n<section id=\"tabs-vertical\">\n    <div class=\"block-vertical\" id=\"run\">\n        <ul class=\"nav nav-tabs nav-tabs--vertical nav-tabs--left\">\n            <li class=\"nav-item ubicacion\" *ngFor=\"let ubicacion of locations_data\"\n                (click)=\"setCenter(ubicacion.lat, ubicacion.lng)\">\n                <a href=\"#\" class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\">\n                    <h5 class=\"title\">{{ubicacion.title}}</h5>\n                    <h6 class=\"address\">{{ubicacion.address}}</h6>\n                    <h6 class=\"phone\">{{ubicacion.telephone}}</h6>\n                </a>\n            </li>\n        </ul>\n        <div class=\"show-more\">\n            <a class=\"button-more\"></a>\n        </div>\n        <a class=\"botton-arrive\" role=\"button\">\n\n        </a>\n        <a class=\"botton-down\" role=\"button\">\n\n        </a>\n    </div>\n</section>\n<section id=\"mapa\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapReady)=\"mapReady($event)\">\n        <agm-marker *ngFor=\"let ubicacion of locations_data\" [latitude]=\"ubicacion.lat\"\n                    [longitude]=\"ubicacion.lng\" [iconUrl]=\"'/assets/icon/ubication.png'\">\n            <agm-info-window>\n                <h5 class=\"title\">{{ubicacion.title}}</h5>\n                <h6 class=\"addres\">{{ubicacion.address}}</h6>\n                <h6 class=\"phone\">{{ubicacion.telephone}}</h6>\n            </agm-info-window>\n        </agm-marker>\n    </agm-map>\n</section>"

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
        this.locations_data = [];
        //Coordenadas de Bogotá
        this.lat = 4.6097102;
        this.lng = -74.081749;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Se conecta direcamente con el módulo adf_location en Drupal
        this._http.get('location-resources').subscribe(function (items) {
            _this.locations_data = items;
        });
    };
    LocationsComponent.prototype.mapReady = function (map) {
        this.map = map;
    };
    /***
     * Al hacer click en una ubicación, la "centra" en el mapa
     * @param lat
     * @param lng
     */
    LocationsComponent.prototype.setCenter = function (lat, lng) {
        var pos = { lat: parseFloat(lat), lng: parseFloat(lng) };
        this.map.setCenter(pos);
        this.map.setZoom(15);
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/@adf/components/shared/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.css */ "./src/app/@adf/components/shared/locations/locations.component.css")]
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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/shared/notification.service */ "./src/app/services/shared/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Modulos


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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _adf_adf_module__WEBPACK_IMPORTED_MODULE_5__["AdfModule"],
                _main_pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["APP_ROUTES"]
            ],
            providers: [
                _services_shared_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
/* harmony import */ var _services_cards_node_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/cards/node.service */ "./src/app/services/cards/node.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adf_adf_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@adf/adf.module */ "./src/app/@adf/adf.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Servicios



var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
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
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"]
            ],
            exports: [
                _components_carousel_indicators_carousel_indicators_component__WEBPACK_IMPORTED_MODULE_5__["CarouselIndicatorsComponent"],
                _components_carousel_controls_carousel_controls_component__WEBPACK_IMPORTED_MODULE_10__["CarouselControlsComponent"],
                _components_carousel_item_2_carousel_item_2_component__WEBPACK_IMPORTED_MODULE_8__["CarouselItem2Component"],
                _components_tecnologies_tecnologies_component__WEBPACK_IMPORTED_MODULE_6__["TecnologiesComponent"],
                _components_porque_bits_porque_bits_component__WEBPACK_IMPORTED_MODULE_7__["PorqueBitsComponent"],
                _components_alliances_alliances_component__WEBPACK_IMPORTED_MODULE_9__["AlliancesComponent"],
                _components_workwithus_workwithus_component__WEBPACK_IMPORTED_MODULE_11__["WorkWithUsComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                _components_titles_titles_component__WEBPACK_IMPORTED_MODULE_13__["TitleComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _adf_adf_module__WEBPACK_IMPORTED_MODULE_17__["AdfModule"]],
            providers: [_services_cards_node_service__WEBPACK_IMPORTED_MODULE_15__["NodeService"]]
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
        /* $ (function ($) {
          if ($('#transition-image2').length) {
              console.log('if')
              var items = 4;
              var $elements = $('.img-item2');
    
              var groups = createGroups($elements, items);
              var groups:{} = completeGroup(groups, items);
    
              //console.log($elements)
              startSlide(groups, items);
          }
    
          function createGroups($elements, numberItems) {
              var elems = {};
              var group = 1;
              var item = 0;
              elems[group] = [];
    
              $.each($elements, function(key, value) {
                  var elemId = $(this).prop('id');
                  elems[group][item] = elemId;
                  item++;
    
                  if (((key + 1) % numberItems) == 0) {
                      item = 0;
                      group++;
                      elems[group] = [];
                  }
              });
    
              return elems;
          }
    
          function completeGroup(elems, numberItems) {
              $.each(elems, function(key, currentElem) {
                  var count = 0;
                  $.each(currentElem, function(k, v) {
                      count++;
                  });
    
                  if ((count % numberItems) > 0) {
                      var iter = numberItems - count;
                      var pos = count;
                      var c = 0;
    
                      $.each(elems, function(a, b) {
                          $.each(b, function(item, v) {
                              if (c < iter) {
                                  elems[key][pos] = v;
                                  pos++;
                              }
                              c++;
                          });
                      });
                  }
              });
    
              $.each(elems, function(key, array) {
                  array.sort(function(a, b){
                      if(a== b) return 0;
                      return a> b? 1: -1;
                  });
              });
    
              return elems;
          }
    
          function startSlide(elems, numberItems) {
              var slide = 1;
              var itemSlide = 0;
              var oper = 'show';
              var interval = setInterval(function() {
                  if (itemSlide < numberItems && oper == 'show') {
                      var elemId = elems[slide][itemSlide];
                      var $elem = $('#' + elemId);
                      $elem.addClass('fadeInUp displayed').removeClass('fadeOutUp no-displayed').css('display', 'block');
                      itemSlide++;
                  }
                  else {
                      oper = 'remove';
                      if (((itemSlide) % numberItems) == 0) {
                          itemSlide = 0;
                      }
                      var elemId = elems[slide][itemSlide];
                      var $elem = $('#' + elemId);
                      $elem.addClass('fadeOutUp').removeClass('fadeInUp');
                      itemSlide++;
                      if (itemSlide == numberItems) {
                          oper = 'show';
                          itemSlide = 0;
                          slide++;
    
                          if (elems[slide] == undefined) {
                              slide = 1;
                          }
                          $('.displayed').css('display', 'none').removeClass('displayed').addClass('no-displayed');
                      }
                  }
              }, 500);
          }
        }); */
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
        this.bannerTitle = [];
        this.bannerBackground = [];
        this.medius = '550px';
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getBannerService();
    };
    BannerComponent.prototype.getBannerService = function () {
        var _this = this;
        this.banner.getCustomCardInformation('contact_banner').subscribe(function (items) {
            _this.bannerTitle = items.header[0].data[0].title[0];
            _this.bannerBackground = items.header[0].data[0].url[0];
        });
    };
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

/***/ "./src/app/cards/components/carousel-controls/carousel-controls.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-controls/carousel-controls.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-title\">\n    <h2>{{ caroseltitle?.titulo }}</h2>\n</section>\n<section id=\"carousel-4text\">\n    <div class=\"container text-center my-3\">\n        <div class=\"row mx-auto my-auto\">\n            <div id=\"carousel-items1\" class=\"carousel carousel-run slide w-100\" data-ride=\"carousel\">\n                <div class=\"carousel-inner\" role=\"listbox\">\n                    <div *ngFor=\"let main of CarouselControlArray; let i = index\" class=\"carousel-item\" [ngClass]=\"{'active': i === 0}\">\n                        <a href=\"\" class=\"url-link\">\n                            <div class=\"container-img\">\n                                <img class=\"d-block img-fluid img-float  mx-auto\" src=\"{{ main.field_image }}\">\n                            </div>\n                            <div class=\"info\">\n                                <hr class=\"line\">\n                                <h4 class=\"name-organization\">{{main.title}}</h4>\n                                <h3 class=\"main-title\">{{main.field_category}}</h3>\n                                <h5 class=\"category\">{{main.field_recognition}}</h5>\n                                <h5 class=\"yeard\">{{main.field_year}}</h5>\n                            </div>\n                        </a>\n\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carousel-items1\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon  icon-left\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carousel-items1\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon icon-right\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/carousel-controls/carousel-controls.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-controls/carousel-controls.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#carousel-4text {\n  list-style-type: none;\n  margin-top: 4%; }\n  #carousel-4text .carousel-inner .carousel-item.active,\n  #carousel-4text .carousel-inner .carousel-item-next,\n  #carousel-4text .carousel-inner .carousel-item-prev {\n    display: flex; }\n  #carousel-4text .carousel-inner .carousel-item-right.active,\n  #carousel-4text .carousel-inner .carousel-item-next {\n    -webkit-transform: translateX(25%);\n            transform: translateX(25%); }\n  #carousel-4text .carousel-inner .carousel-item-left.active,\n  #carousel-4text .carousel-inner .carousel-item-prev {\n    -webkit-transform: translateX(-25%);\n            transform: translateX(-25%); }\n  #carousel-4text .carousel-inner .carousel-item-right,\n  #carousel-4text .carousel-inner .carousel-item-left {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #carousel-4text #carousel-items1 .carousel-inner {\n      width: 78%;\n      left: 11%; } }\n  @media (min-width: 1025px) {\n    #carousel-4text #carousel-items1 .carousel-inner {\n      width: 92.5%;\n      left: 4%; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n    width: 405%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n        width: 200%; } }\n  @media (min-width: 1025px) {\n      #carousel-4text #carousel-items1 .carousel-inner .carousel-item {\n        width: 100%; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link {\n      width: 100%;\n      padding-left: 4%;\n      padding-right: 4%;\n      margin-top: 1%;\n      text-decoration: none; }\n  @media (min-width: 1025px) {\n        #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link {\n          padding-left: 5%;\n          padding-right: 5%; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n        height: 123px;\n        position: relative; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n            padding-left: 0%;\n            padding-right: 0%; } }\n  @media (min-width: 1025px) {\n          #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img {\n            padding-left: 10%;\n            padding-right: 10%; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .container-img .img-float {\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          right: 0; }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info {\n        width: 100%;\n        color: #002b49;\n        text-align: center; }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n          content: '';\n          background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n          height: 1px;\n          right: 0%;\n          left: 5%;\n          top: 164px;\n          width: 15%;\n          position: absolute; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n              display: none; } }\n  @media (min-width: 1025px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info::before {\n              display: none; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info {\n            height: 250px; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n          visibility: hidden; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n              visibility: visible;\n              background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n              height: 1px;\n              width: 83%;\n              position: relative;\n              top: 17px; } }\n  @media (min-width: 1025px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .line {\n              visibility: visible;\n              background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #b8d950, rgba(255, 255, 255, 0));\n              height: 1px;\n              width: 83%;\n              position: relative;\n              top: 17px; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .name-organization {\n          padding-top: 14%;\n          font-size: 16px;\n          font-family: 'Open Sans';\n          font-weight: 300; }\n  @media (min-width: 1025px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .name-organization {\n              padding-top: 14%; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .main-title {\n          margin-top: 4%;\n          font-size: 20px;\n          font-family: 'Open Sans Codensed';\n          font-weight: 300;\n          text-transform: uppercase; }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .category {\n          width: 100%;\n          margin-top: 5.2%;\n          padding-left: 27%;\n          padding-right: 26%;\n          font-size: 14px;\n          font-family: 'Open Sans';\n          font-weight: 300; }\n  @media (min-width: 1025px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .category {\n              padding-left: 12%;\n              padding-right: 12%;\n              width: 100%;\n              height: 56px; } }\n  #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .yeard {\n          font-size: 14px;\n          margin-top: 6%;\n          font-family: 'Open Sans';\n          font-weight: 300; }\n  @media (min-width: 1025px) {\n            #carousel-4text #carousel-items1 .carousel-inner .carousel-item .url-link .info .yeard {\n              margin-top: 2%; } }\n  #carousel-4text #carousel-items1 .icon-left {\n    position: relative;\n    top: 1%;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 viewBox%3D%220 0 129 129%22 enable-background%3D%22new 0 0 129 129%22 width%3D%22512px%22 height%3D%22512px%22%3E  %3Cg%3E    %3Cpath d%3D%22m88.6%2C121.3c0.8%2C0.8 1.8%2C1.2 2.9%2C1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8%2C0l-54%2C53.9c-1.6%2C1.6-1.6%2C4.2 0%2C5.8l54%2C53.9z%22 fill%3D%22%23002b49%22%2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-size: 37px;\n    height: 27px;\n    width: 24px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #carousel-4text #carousel-items1 .icon-left {\n        top: initial;\n        bottom: 32px; } }\n  @media (min-width: 1025px) {\n      #carousel-4text #carousel-items1 .icon-left {\n        height: 34px;\n        right: 21%;\n        bottom: 15px;\n        top: initial; } }\n  #carousel-4text #carousel-items1 .icon-right {\n    position: relative;\n    top: 1%;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 viewBox%3D%220 0 129 129%22 enable-background%3D%22new 0 0 129 129%22 width%3D%22512px%22 height%3D%22512px%22%3E  %3Cg%3E    %3Cpath d%3D%22m40.4%2C121.3c-0.8%2C0.8-1.8%2C1.2-2.9%2C1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8%2C0l53.9%2C53.9c1.6%2C1.6 1.6%2C4.2 0%2C5.8l-53.9%2C53.9z%22 fill%3D%22%23002b49%22%2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-size: 37px;\n    height: 27px;\n    width: 24px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #carousel-4text #carousel-items1 .icon-right {\n        top: initial;\n        bottom: 32px; } }\n  @media (min-width: 1025px) {\n      #carousel-4text #carousel-items1 .icon-right {\n        height: 34px;\n        left: 14%;\n        bottom: 15px;\n        top: initial; } }\n  #main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n  #main-title h2 {\n    text-transform: uppercase;\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n  @media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  #titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n  @media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n  #titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n  @media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n"

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
    function CarouselControlsComponent(router, AchievementCarouselItems) {
        this.router = router;
        this.AchievementCarouselItems = AchievementCarouselItems;
        this.CarouselControlArray = [];
        this.caroseltitle = [];
    }
    CarouselControlsComponent.prototype.ngOnInit = function () {
        this.getAchievementsCarouselItems();
    };
    CarouselControlsComponent.prototype.getAchievementsCarouselItems = function () {
        var _this = this;
        return this.AchievementCarouselItems.getContentTypeItems('achievements').subscribe(function (items) {
            _this.CarouselControlArray = items.datos;
            _this.caroseltitle = items;
            _this.CarouselControlArray = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
        });
    };
    CarouselControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-controls',
            template: __webpack_require__(/*! ./carousel-controls.component.html */ "./src/app/cards/components/carousel-controls/carousel-controls.component.html"),
            styles: [__webpack_require__(/*! ./carousel-controls.component.scss */ "./src/app/cards/components/carousel-controls/carousel-controls.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"]])
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

module.exports = "<!-- <section class=\"Slider\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide carousel-slider\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators slider-botton\">\n            <li *ngFor=\"let car of carouselArray; let i= index\" data-target=\"#carouselExampleIndicators\" [attr.data-slide-to]=\"i\" class=\"circle-botton\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active window-complete\">\n                <picture>\n                    <source srcset=\"assets/images/movil.jpg\" media=\"(max-width:{{medius}})\">\n                    <img class=\"d-block w-100\" [src]=\"carouselArray[1]?.field_image\" alt=\"bits\">\n                    <div class=\"carousel-caption  d-md-block text-slider\">\n                        <h1 class=\"title-slider\"> {{carouselArray[1]?.title}} </h1>\n                        <p class=\"description-slider\">{{carouselArray[1]?.field_tags}}</p>\n                    </div>\n                </picture>\n            </div>\n            <app-carousel-item></app-carousel-item>\n        </div>\n        <a class=\"down-main\" (click)=\"down()\">\n            <div class=\"arrow-down\"></div>\n        </a>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon icon-mobile icon-prev\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next \" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon  icon-mobile icon-next\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n    <a class=\"anchor\"></a>\n</section> -->\n<ngb-carousel *ngIf=\"carousel\" (window:resize)=\"onResize()\">\n    <ng-template class=\"prueba\" ngbSlide *ngFor=\"let item of carousel\">\n      <img class=\"carousel-main-image\" [src]=\"item.field_image\" alt=\"Random first slide\" [ngStyle]=\"{'height': height}\">\n      <div class=\"carousel-caption\">\n        <h3>{{ item.title }}</h3>\n        <p>{{ item.field_tags }}</p>\n      </div>\n    </ng-template>\n</ngb-carousel>\n<!--<a>Anchor</a>-->"

/***/ }),

/***/ "./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/cards/components/carousel-indicators/carousel-indicators.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-main-image {\n  max-height: 1080px;\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5); }\n  @media (min-width: 1025px) {\n    .carousel-main-image {\n      width: 100%; } }\n"

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
    // down() {
    //   let x = document.querySelector('.anchor');
    //   if (x) {
    //      //  x.scrollIntoView({ behavior: 'smooth'});
    //     x.scrollIntoView({ behavior: 'smooth', block: 'start'});
    //   }
    // }
    // ngOnInit() {
    //   this.getImages ();
    // }
    // getImages () {
    //   return this.info.getInfo().subscribe(items => {
    //     this.carousel = items;
    //     console.log(this.carousel);
    //   });
    // }
    CarouselIndicatorsComponent.prototype.onResize = function () {
        this.height = (window.innerHeight) + 'px';
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

module.exports = "<section id=\"main-title\">\n    <h2>{{ titleClients?.titulo }}</h2>\n</section>\n\n<section id=\"Carousel-4items\">\n    <div class=\"container text-center my-3\">\n        <div id=\"recipeCarousel\" class=\"carousel carousel-run slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner row mx-auto my-auto\" role=\"listbox\">\n                <ng-container *ngFor=\"let ourC of clients; let i = index\">\n                    <div class=\"carousel-item\" [ngClass]=\"{'active': i === 0}\">\n                        <a href=\"#\" class=\"url-carousel\">\n                            <div class=\"container-img col-md-3 \">\n                                <img class=\"d-block img-fluid    img-float  mx-auto\" src=\"{{ ourC.field_image }}\" alt=\"\">\n                            </div>\n                            <div class=\"info-carousel\">\n                                <h3 class=\"title\">{{ ourC.title }}</h3>\n                                <p class=\"text-description\">{{ ourC.field_description }}</p>\n                            </div>\n                        </a>\n                    </div>\n                </ng-container>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#recipeCarousel\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon icon-left\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#recipeCarousel\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon icon-right\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Carousel-4items {\n  margin-top: 4%; }\n  @media (min-width: 1025px) {\n    #Carousel-4items {\n      margin-top: 1%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #Carousel-4items .carousel-inner .carousel-item.active,\n    #Carousel-4items .carousel-inner .carousel-item-next,\n    #Carousel-4items .carousel-inner .carousel-item-prev {\n      display: flex; } }\n  @media (min-width: 1025px) {\n    #Carousel-4items .carousel-inner .carousel-item.active,\n    #Carousel-4items .carousel-inner .carousel-item-next,\n    #Carousel-4items .carousel-inner .carousel-item-prev {\n      display: flex; } }\n  @media (min-width: 1025px) {\n    #Carousel-4items .carousel-inner .carousel-item-right.active,\n    #Carousel-4items .carousel-inner .carousel-item-next {\n      -webkit-transform: translateX(24.2%);\n              transform: translateX(24.2%); } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #Carousel-4items .carousel-inner .carousel-item-right.active,\n    #Carousel-4items .carousel-inner .carousel-item-next {\n      -webkit-transform: translateX(25%);\n              transform: translateX(25%); } }\n  @media (min-width: 1025px) {\n    #Carousel-4items .carousel-inner .carousel-item-left.active,\n    #Carousel-4items .carousel-inner .carousel-item-prev {\n      -webkit-transform: translateX(-24.2%);\n              transform: translateX(-24.2%); } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #Carousel-4items .carousel-inner .carousel-item-left.active,\n    #Carousel-4items .carousel-inner .carousel-item-prev {\n      -webkit-transform: translateX(-21.5%);\n              transform: translateX(-21.5%); } }\n  @media (min-width: 1025px) {\n    #Carousel-4items .carousel-inner .carousel-item-right,\n    #Carousel-4items .carousel-inner .carousel-item-left {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #Carousel-4items .carousel-inner .carousel-item-right,\n    #Carousel-4items .carousel-inner .carousel-item-left {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n  #Carousel-4items .carousel-inner {\n    height: 196px;\n    align-items: center;\n    justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #Carousel-4items .carousel-inner {\n        height: initial;\n        width: 68%;\n        left: initial; } }\n  @media (min-width: 1025px) {\n      #Carousel-4items .carousel-inner {\n        height: initial;\n        width: 92.5%;\n        left: initial; } }\n  #Carousel-4items .carousel-inner .carousel-item {\n      margin-top: 6px; }\n  @media (min-width: 1025px) {\n        #Carousel-4items .carousel-inner .carousel-item {\n          left: 0%;\n          padding-left: 4%;\n          justify-content: center; } }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel {\n        width: 132px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          #Carousel-4items .carousel-inner .carousel-item .url-carousel {\n            width: 285px; } }\n  @media (min-width: 1025px) {\n          #Carousel-4items .carousel-inner .carousel-item .url-carousel {\n            width: 255px;\n            padding-left: 2%;\n            padding-right: 2%;\n            text-decoration: none; }\n            #Carousel-4items .carousel-inner .carousel-item .url-carousel:hover .container-img {\n              -webkit-transform: translateY(-122%);\n                      transform: translateY(-122%); }\n            #Carousel-4items .carousel-inner .carousel-item .url-carousel:hover .info-carousel {\n              -webkit-transform: translateY(-110%);\n                      transform: translateY(-110%); } }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img {\n          width: 33%;\n          height: 66px;\n          position: relative;\n          display: -webkit-inline-box;\n          margin-left: 11%;\n          margin-right: auto;\n          margin-top: 5%;\n          display: inline-table;\n          max-width: 100%;\n          align-items: center; }\n  @media (min-width: 1025px) {\n            #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img {\n              display: flex;\n              height: 235px;\n              width: 100%;\n              margin-bottom: 14%;\n              margin-top: 0%;\n              padding-top: 39%;\n              padding-left: 20px;\n              padding-right: 20px;\n              width: 69.5%;\n              transition: all ease 0.8s; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img {\n              display: flex;\n              width: 100%;\n              padding: 22%;\n              align-items: center;\n              height: 100px;\n              margin-left: 0; } }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img .img-fluid {\n            height: 100%;\n            width: 100%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n              #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img .img-fluid {\n                height: auto;\n                width: auto; } }\n  @media (min-width: 1025px) {\n              #Carousel-4items .carousel-inner .carousel-item .url-carousel .container-img .img-fluid {\n                height: auto;\n                width: auto; } }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel {\n          display: none; }\n  @media (min-width: 1025px) {\n            #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel {\n              position: absolute;\n              display: block;\n              width: 22%;\n              height: 222px;\n              transition: all ease 0.8s; }\n              #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel::before {\n                content: '';\n                background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n                display: block;\n                position: absolute;\n                height: 1px;\n                width: 100%; }\n              #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel::after {\n                content: '';\n                background: linear-gradient(-90deg, rgba(255, 255, 255, 0), #005892, rgba(255, 255, 255, 0));\n                display: block;\n                position: absolute;\n                top: 100%;\n                height: 1px;\n                width: 100%; } }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel .title {\n            text-align: center;\n            text-transform: uppercase;\n            width: 100%;\n            padding-top: 12%;\n            font-size: 24px;\n            color: #acd233;\n            padding-left: 16%;\n            padding-right: 18%;\n            font-family: 'Open Sans Condensed';\n            font-weight: 300; }\n  #Carousel-4items .carousel-inner .carousel-item .url-carousel .info-carousel .text-description {\n            text-align: center;\n            width: 100%;\n            padding-top: 2%;\n            font-size: 14px;\n            color: #002b49;\n            font-family: 'Open Sans';\n            font-weight: 300; }\n  #Carousel-4items .icon-left {\n    position: relative;\n    top: 5%;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 viewBox%3D%220 0 129 129%22 enable-background%3D%22new 0 0 129 129%22 width%3D%22512px%22 height%3D%22512px%22%3E  %3Cg%3E    %3Cpath d%3D%22m88.6%2C121.3c0.8%2C0.8 1.8%2C1.2 2.9%2C1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8%2C0l-54%2C53.9c-1.6%2C1.6-1.6%2C4.2 0%2C5.8l54%2C53.9z%22 fill%3D%22%23002b49%22%2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-size: 37px;\n    height: 27px;\n    width: 24px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #Carousel-4items .icon-left {\n        left: 37%; } }\n  @media (min-width: 1025px) {\n      #Carousel-4items .icon-left {\n        height: 34px; } }\n  #Carousel-4items .icon-right {\n    position: relative;\n    top: 5%;\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 viewBox%3D%220 0 129 129%22 enable-background%3D%22new 0 0 129 129%22 width%3D%22512px%22 height%3D%22512px%22%3E  %3Cg%3E    %3Cpath d%3D%22m40.4%2C121.3c-0.8%2C0.8-1.8%2C1.2-2.9%2C1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8%2C0l53.9%2C53.9c1.6%2C1.6 1.6%2C4.2 0%2C5.8l-53.9%2C53.9z%22 fill%3D%22%23002b49%22%2F%3E  %3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-size: 37px;\n    height: 27px;\n    width: 24px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #Carousel-4items .icon-right {\n        right: 40%; } }\n  @media (min-width: 1025px) {\n      #Carousel-4items .icon-right {\n        height: 34px; } }\n  #main-title {\n  color: #002b49;\n  text-align: center;\n  margin-top: 64px; }\n  @media (min-width: 1025px) {\n    #main-title {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #main-title {\n      margin-top: 80px; } }\n  #main-title h2 {\n    margin-left: 3%;\n    font-size: 30px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2); }\n  @media (min-width: 1025px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #main-title h2 {\n        margin-left: 0;\n        font-size: 40px;\n        width: 100%; } }\n  #titles {\n  color: #002b49;\n  text-align: center;\n  margin-top: 60px; }\n  @media (min-width: 1025px) {\n    #titles {\n      margin-top: 80px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #titles {\n      margin-top: 80px; } }\n  #titles h3 {\n    margin-left: 3%;\n    font-size: 16px; }\n  @media (min-width: 1025px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #titles h3 {\n        margin-left: 0;\n        font-size: 20px;\n        width: 100%; } }\n"

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
/* harmony import */ var _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cards/content-type.services */ "./src/app/services/cards/content-type.services.ts");
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



var CarouselItem2Component = /** @class */ (function () {
    function CarouselItem2Component(router, ourClientCarouselItems) {
        this.router = router;
        this.ourClientCarouselItems = ourClientCarouselItems;
        this.clients = [];
        this.titleClients = [];
    }
    CarouselItem2Component.prototype.ngOnInit = function () {
        $(document).ready(function () {
            setTimeout(function () {
                $('#recipeCarousel').carousel({
                    interval: 4000
                });
                $('.carousel-run .carousel-item').each(function () {
                    // tslint:disable-next-line:no-var-keyword
                    var next = $(this).next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                    // tslint:disable-next-line:no-var-keyword
                    for (var i = 0; i < 2; i++) {
                        next = next.next();
                        if (!next.length) {
                            next = $(this).siblings(':first');
                        }
                        next.children(':first-child').clone().appendTo($(this));
                    }
                });
            }, 3000);
        });
        this.getOurClientsItems();
    };
    CarouselItem2Component.prototype.getOurClientsItems = function () {
        var _this = this;
        this.ourClientCarouselItems.getContentTypeItems('clients').subscribe(function (items) {
            _this.clients = items.datos;
            _this.titleClients = items;
            _this.clients = Object.keys(items.datos).map(function (key) { return items.datos[key]; });
        });
    };
    CarouselItem2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel-item-2',
            template: __webpack_require__(/*! ./carousel-item-2.component.html */ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.html"),
            styles: [__webpack_require__(/*! ./carousel-item-2.component.scss */ "./src/app/cards/components/carousel-item-2/carousel-item-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"]])
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

/***/ "./src/app/cards/components/float-social/float-social.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/float-social/float-social.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"social-networks\">\n  <div class=\"icon-social\">\n    <ul class=\"row fa-ul\">\n      <li *ngFor=\"let net of socialmedia;\">\n        <a href=\"{{ net.data.url }}\" target=\"_blank\">\n          <i class=\"{{ net.data.text }}\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n<section class=\"envolope\">\n  <div class=\"icon-mail\">\n    <ul class=\"row fa-ul\">\n      <li>\n        <a routerLink=\"/contact-us\">\n          <i class=\"fa-li fas fa-envelope\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/components/float-social/float-social.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/cards/components/float-social/float-social.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-networks {\n  width: 41px;\n  height: auto;\n  background-color: #517bbd;\n  opacity: 0.7;\n  position: fixed;\n  z-index: 9;\n  bottom: 200px;\n  display: none; }\n  @media (min-width: 1025px) {\n    .social-networks {\n      display: block; } }\n  .social-networks .icon-social {\n    display: block; }\n  .social-networks .icon-social .row {\n      margin-left: 13px;\n      width: 0; }\n  .social-networks .icon-social .row li {\n        margin-right: 1px;\n        margin-bottom: 9px; }\n  .social-networks .icon-social .row li a {\n          display: block;\n          color: #FFFFFF;\n          margin-top: 11px; }\n  .social-networks .icon-social .row a:hover {\n        color: #a6cf24; }\n  .envolope {\n  width: 41px;\n  height: 41px;\n  background-color: #a6cf24;\n  opacity: 0.7;\n  position: fixed;\n  border-radius: 50%;\n  display: block;\n  z-index: 9;\n  right: 40px;\n  bottom: 0; }\n  @media (min-width: 1025px) {\n    .envolope {\n      border-radius: 0;\n      bottom: 150px;\n      right: initial; } }\n  .envolope .icon-mail {\n    font-size: 22px;\n    margin-top: 5px;\n    margin-left: 0px; }\n  .envolope .icon-mail .row {\n      margin-right: 0;\n      margin-left: 0; }\n  .envolope .icon-mail .row .fa-li {\n        left: 0; }\n  @media (min-width: 1025px) {\n          .envolope .icon-mail .row .fa-li {\n            left: 0; } }\n  .envolope .icon-mail a {\n      color: #FFFFFF; }\n"

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
        this.socialmedia = [];
    }
    FloatSocialComponent.prototype.ngOnInit = function () {
        this.getFloatSocialItems();
    };
    FloatSocialComponent.prototype.getFloatSocialItems = function () {
        var _this = this;
        this.footerBrand2.getCustomCardInformation('contactcard').subscribe(function (items) {
            _this.socialmedia = items.others;
        });
    };
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

module.exports = "<ng-container *ngFor=\"let ubicacion of dataUbicaciones; let i = index\">\n    <div class=\"col-lg\" [class.site]=\"i > 0\" [class.random]=\"i > 0\">\n        <h6>{{ ubicacion.title }}</h6>\n        <div>\n            <ul>\n                <li>{{ubicacion.address}}</li>\n                <li>{{ubicacion.telephone}}</li>\n                <li *ngIf=\"i == 0\" class=\"office\">\n                    <a routerLink=\"/contact-us/\" fragment=\"title-description\" (click)=\"cargarMapaUbicaciones()\">Ver todas nuestras oficinas</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-block/footer-block.scss":
/*!************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-block/footer-block.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <img *ngIf=\"imageLogo\" [src]=\"imageLogo.url\" alt=\"BitsAmericas\">\n    <h6>{{ nameBrand.title }}</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-brand/footer-brand.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-brand/footer-brand.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h6>{{ contactTitle.title }}</h6>\n    <ul class=\"fa-ul mail\">\n      <li>\n        <a href=\"{{ contactMailLink.link }}\">\n          <i class=\"fa-li fas fa-envelope\"></i> {{ contactMailLink.label }} </a>\n      </li>\n    </ul>\n    <div class=\"icon-social\">\n      <ul class=\"row first fa-ul\">\n        <li *ngFor=\"let socialIcon of contactSocialArray;\">\n          <a href=\"{{ socialIcon.data.url }}\">\n            <i class=\"{{ socialIcon.data.text }}\"></i>\n          </a> \n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/cards/components/footer/footer-contact/footer-contact.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/cards/components/footer/footer-contact/footer-contact.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

module.exports = "<section id=\"title-gallery\">\n    <div class=\"title\">\n        <h1> {{ titleProducts.titulo }} </h1>\n    </div>\n</section>\n<section id=\"gallery-images\">\n    <div class=\"tz-gallery\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4\" *ngFor=\"let ps of servicesProduct\">\n                <div class=\"thumbnai\">\n                    <div class=\"background\">\n                        <img class=\"images lightbox\" [src]=\"ps.field_imagen_producto_o_servicio\" alt=\"products software\">\n                    </div>\n                    <div class=\"box-title\">\n                        <span class=\"titlepr\">{{ ps.title }}</span>\n                        <div class=\"box-text\">\n                            <span class=\"text\">\n                                {{ ps.body }}\n                              </span>\n                        </div>\n                    </div>\n                    <div class=\"box-info\">\n                        <div class=\"box-botton\">\n                            <a class=\"botton_products\" href=\"#\">Ver Mas</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section id=\"bottons-services\">\n    <div class=\"totalbottons\">\n        <div class=\"bottons\">\n            <a class=\"bottonleft\" routerLink=\"products\">VER PRODUCTOS </a>\n            <a class=\"bottonrigth\" routerLink=\"services\">VER SERVICIOS </a>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/product-services/product-services.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/cards/components/product-services/product-services.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title-gallery {\n  margin-top: 14%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #title-gallery {\n      margin-top: 7%; } }\n  @media (min-width: 1025px) {\n    #title-gallery {\n      margin-top: 4%; } }\n  #title-gallery .title {\n    background: #f7f9f9;\n    height: 160px;\n    padding-top: 11%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #title-gallery .title {\n        padding-top: 7%; } }\n  @media (min-width: 1025px) {\n      #title-gallery .title {\n        height: 171px;\n        padding-top: 3.5%; } }\n  #title-gallery .title h1 {\n      width: 97%;\n      padding-left: 8%;\n      padding-right: 4%;\n      margin-bottom: 0%;\n      text-align: center;\n      text-transform: uppercase;\n      color: #002b49; }\n  @media (min-width: 1025px) {\n        #title-gallery .title h1 {\n          width: 100%;\n          padding-left: 0%;\n          padding-right: 0%; } }\n  #gallery-images {\n  height: 1116px;\n  overflow: hidden; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #gallery-images {\n      height: auto; } }\n  @media (min-width: 1025px) {\n    #gallery-images {\n      height: 906px; } }\n  #gallery-images .block-title {\n    height: 142px;\n    width: 100%;\n    background: #f7f9f9; }\n  @media (min-width: 1025px) {\n      #gallery-images .block-title {\n        height: 185px; } }\n  #gallery-images .block-title h2 {\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: 200;\n      font-size: 40px;\n      margin: 0%;\n      z-index: 100;\n      color: #002b49;\n      padding: 0%;\n      padding-top: 11%;\n      padding-top: 81px;\n      padding-bottom: 61px; }\n  @media (min-width: 1025px) {\n        #gallery-images .block-title h2 {\n          margin: initial;\n          padding-top: 81px; } }\n  #gallery-images .container {\n    width: 100%;\n    position: relative;\n    height: 690px;\n    padding-left: 0%;\n    padding-left: 0%; }\n  @media (min-width: 1025px) {\n      #gallery-images .container {\n        height: 895px;\n        padding: 0%; } }\n  #gallery-images .gallery-container h1 {\n    text-align: center;\n    margin-top: 70px;\n    font-weight: bold;\n    color: #58595a; }\n  #gallery-images .tz-gallery {\n    height: auto; }\n  #gallery-images .tz-gallery .row {\n      width: 100%;\n      height: 50%;\n      margin: 0%; }\n  #gallery-images .tz-gallery .row .col-md-4 {\n        height: 372px;\n        padding: 0%;\n        /*  @include breakpoint(phone) {\n                    &:nth-child(1n+4) {\n                        display: none;\n                    }\n                }*/ }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .row .col-md-4 {\n            height: 453px; } }\n  #gallery-images .tz-gallery .thumbnail:hover {\n    -webkit-transform: translateY(-10px) scale(1.02);\n            transform: translateY(-10px) scale(1.02); }\n  #gallery-images .tz-gallery .caption {\n    padding: 26px 30px;\n    text-align: center; }\n  #gallery-images .tz-gallery .caption h3 {\n    font-size: 14px;\n    font-weight: bold;\n    margin-top: 0; }\n  #gallery-images .tz-gallery .caption p {\n    font-size: 12px;\n    color: #7b7d7d;\n    margin: 0; }\n  #gallery-images .baguetteBox-button {\n    background-color: transparent; }\n  #gallery-images .tz-gallery .thumbnai {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    border: none;\n    overflow: hidden;\n    position: relative;\n    background-color: transparent;\n    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.06); }\n  #gallery-images .tz-gallery .thumbnai .lightbox {\n      height: 100%;\n      width: 100%; }\n  #gallery-images .tz-gallery .thumbnai .background {\n      height: 100%;\n      display: flex; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .background {\n          background: rgba(0, 88, 146, 0.3); } }\n  #gallery-images .tz-gallery .thumbnai .background .images {\n        width: 100%;\n        height: 100%;\n        -webkit-filter: brightness(85%);\n                filter: brightness(85%);\n        width: 100%;\n        height: 100%;\n        z-index: -1; }\n  #gallery-images .tz-gallery .thumbnai .box-info {\n      height: 100%;\n      width: 100%;\n      background-color: rgba(0, 43, 73, 0.62);\n      position: absolute;\n      bottom: 0%;\n      padding-right: 14%;\n      padding-left: 14%; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-info {\n          transition: all ease 0.89s;\n          visibility: hidden;\n          top: 100%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        top: 77%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-info .box-botton {\n            top: 81%; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n          display: flex;\n          border: none;\n          padding-top: 2.5%;\n          padding-bottom: 2.5%;\n          text-transform: uppercase;\n          text-align: center;\n          color: #8ECE17;\n          text-decoration: none;\n          visibility: hidden;\n          font-family: 'Open Sans';\n          justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              left: 0%;\n              width: 100%;\n              padding-left: 19%;\n              margin-left: auto;\n              margin-right: auto;\n              justify-content: center; } }\n  #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n            content: '';\n            position: relative;\n            right: 9%;\n            width: 100%;\n            top: 0px;\n            margin-right: auto;\n            margin-left: auto;\n            padding-left: 27%;\n            padding-right: 27%;\n            padding-top: 29%;\n            background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 viewBox%3D%220 0 42 42%22 style%3D%22enable-background%3Anew 0 0 42 42%3B%22 xml%3Aspace%3D%22preserve%22 width%3D%22512px%22 height%3D%22512px%22%3E%3Cpolygon points%3D%2242%2C20 22%2C20 22%2C0 20%2C0 20%2C20 0%2C20 0%2C22 20%2C22 20%2C42 22%2C42 22%2C22 42%2C22 %22 fill%3D%22%23a6cf24%22%2F%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: 35px;\n            visibility: visible; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                padding-left: 20%;\n                padding-right: 20%;\n                padding-top: 8%;\n                right: 31%; } }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products {\n              display: block;\n              width: 55%;\n              padding-left: 0%;\n              padding-right: 0%;\n              padding-top: 3.5%;\n              padding-bottom: 3.5%;\n              border: solid 1px #8ECE17;\n              border-radius: 3%;\n              color: #8ECE17;\n              font-size: 20px;\n              visibility: visible; }\n              #gallery-images .tz-gallery .thumbnai .box-info .box-botton .botton_products::after {\n                content: '';\n                visibility: hidden;\n                padding-right: initial;\n                padding-left: initial; } }\n  #gallery-images .tz-gallery .thumbnai .box-title {\n      position: relative;\n      bottom: 92%;\n      padding-left: 9%;\n      padding-right: 9%;\n      text-align: center;\n      z-index: 10; }\n  @media (min-width: 1025px) {\n        #gallery-images .tz-gallery .thumbnai .box-title {\n          float: right;\n          clear: both;\n          bottom: 62.5%;\n          padding-left: 25%;\n          padding-right: 25%;\n          transition: all ease 0.8s; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n        color: #ffffff;\n        position: relative;\n        top: 56%;\n        line-height: 46px;\n        font-weight: 300;\n        height: auto;\n        font-size: 31px;\n        font-family: 'Open Sans Codensed'; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr {\n            font-size: 36px; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n        content: '';\n        position: relative;\n        display: block;\n        width: 100%;\n        height: 1.2px;\n        left: 0%;\n        bottom: -14px;\n        transition: all .3s ease-in-out;\n        -webkit-transform: scaleX(0.3);\n                transform: scaleX(0.3);\n        background: #8ECE17; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .titlepr:after {\n            top: 134%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n        position: relative;\n        padding-top: 10%;\n        padding-left: 4%;\n        padding-right: 5%; }\n  @media (min-width: 1025px) {\n          #gallery-images .tz-gallery .thumbnai .box-title .box-text {\n            top: 365px;\n            transition: all ease 1s;\n            width: 140%;\n            right: 20%;\n            padding: 10% 0%; } }\n  #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n          display: block;\n          text-align: center;\n          height: auto;\n          color: #ffffff;\n          font-size: 15px;\n          font-family: 'Open Sans light'; }\n  @media (min-width: 1025px) {\n            #gallery-images .tz-gallery .thumbnai .box-title .box-text .text {\n              font-size: 18px;\n              top: 26%;\n              height: auto;\n              line-height: 1.4; } }\n  @media (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-info {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%);\n      background: rgba(0, 43, 73, 0.62);\n      visibility: initial; }\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 86%;\n      z-index: 100; } }\n  @media (min-width: 1025px) and (min-width: 1025px) {\n    #gallery-images .tz-gallery .thumbnai:hover .box-title {\n      bottom: 93%; } }\n  @media (min-width: 1025px) {\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .box-text {\n        top: 14px;\n        -webkit-transform: translateY(-6%);\n                transform: translateY(-6%); }\n      #gallery-images .tz-gallery .thumbnai:hover .box-title .titlepr:after {\n        transform: scaleX(0.8);\n        -webkit-transform: scaleX(0.8); } }\n  #bottons-services .totalbottons {\n  position: relative;\n  top: 50%;\n  width: 100%;\n  background: #f7f9f9;\n  height: 141px; }\n  @media (min-width: 1025px) {\n    #bottons-services .totalbottons {\n      top: initial; } }\n  #bottons-services .totalbottons .bottons {\n    display: flex;\n    padding-top: 10%;\n    width: 91%;\n    justify-content: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #bottons-services .totalbottons .bottons {\n        padding-bottom: 0%;\n        padding-top: 6%; } }\n  @media (min-width: 1025px) {\n      #bottons-services .totalbottons .bottons {\n        padding-top: 40px;\n        padding-bottom: initial; } }\n  #bottons-services .totalbottons .bottons .bottonleft,\n    #bottons-services .totalbottons .bottons .bottonrigth {\n      display: flex;\n      width: 27%;\n      text-align: center;\n      border: solid 1px rgba(142, 206, 23, 0.7);\n      padding: 2% 1.5%;\n      position: relative;\n      text-decoration: none;\n      color: #ffffff;\n      background: rgba(142, 206, 23, 0.7);\n      font-size: 14px;\n      font-family: 'Open Sans';\n      text-transform: uppercase;\n      justify-content: center;\n      align-items: center; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          width: 14%;\n          padding-top: 1%;\n          padding-bottom: 1%; } }\n  @media (min-width: 1025px) {\n        #bottons-services .totalbottons .bottons .bottonleft,\n        #bottons-services .totalbottons .bottons .bottonrigth {\n          font-size: 18px;\n          width: 16%;\n          padding: 1%; } }\n  #bottons-services .totalbottons .bottons .bottonrigth {\n      left: 8%; }\n  #bottons-services .totalbottons .bottons .bottonleft:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n  #bottons-services .totalbottons .bottons .bottonrigth:hover {\n      border: solid 1px #8ECE17;\n      background: #8ECE17; }\n"

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
/* harmony import */ var _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cards/content-type.services */ "./src/app/services/cards/content-type.services.ts");
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



var ProductServicesComponent = /** @class */ (function () {
    function ProductServicesComponent(router, contentTypeService) {
        this.router = router;
        this.contentTypeService = contentTypeService;
        this.titleProducts = [];
        this.servicesProduct = [];
    }
    ProductServicesComponent.prototype.ngOnInit = function () {
        this.getProductsAndServicesItems();
    };
    ProductServicesComponent.prototype.getProductsAndServicesItems = function () {
        var _this = this;
        this.contentTypeService.getContentTypeItems('products').subscribe(function (items) {
            _this.servicesProduct = items.datos;
            _this.titleProducts = items;
            _this.servicesProduct = Object.keys(items.datos).map(function (key) {
                return items.datos[key];
            });
        });
    };
    ProductServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-services',
            template: __webpack_require__(/*! ./product-services.component.html */ "./src/app/cards/components/product-services/product-services.component.html"),
            styles: [__webpack_require__(/*! ./product-services.component.scss */ "./src/app/cards/components/product-services/product-services.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cards_content_type_services__WEBPACK_IMPORTED_MODULE_0__["ContentType"]])
    ], ProductServicesComponent);
    return ProductServicesComponent;
}());



/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"blocks-tabs\">\n    <div class=\"block\">\n        <ul class=\"nav\">\n            <li class=\"list\">\n                <a href=\"#form-contact-us\" class=\"item-block nav-link  active\" data-toggle=\"tab\"> {{tabLeft.title}} </a>\n            </li>\n            <li class=\"list list-color\">\n                <a href=\"#form-workwith-us\" class=\"item-block-2 nav-link\" data-toggle=\"tab\"> {{tabRight.title}} </a>\n            </li>\n        </ul>\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"form-contact-us\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                FORMULARIO CONTÁCTENOS\n            </div>\n            <div class=\"tab-pane fade\" id=\"form-workwith-us\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                FORMULARIO TRABAJE CON NOSOTROS\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/tabs/tabs.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cards/components/tabs/tabs.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blocks-tabs {\n  margin-top: 12%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #blocks-tabs {\n      margin-top: 6%; } }\n  @media (min-width: 1025px) {\n    #blocks-tabs {\n      margin-top: 3.5%; } }\n  #blocks-tabs .block {\n    background: #e5e9ec;\n    height: 137px; }\n  @media (min-width: 1025px) {\n      #blocks-tabs .block {\n        height: 140px; } }\n  #blocks-tabs .block .nav {\n      height: 100%; }\n  #blocks-tabs .block .nav .list {\n        width: 50%;\n        font-size: 22px;\n        text-align: center; }\n  @media (min-width: 1025px) {\n          #blocks-tabs .block .nav .list {\n            padding-left: 11.8%;\n            z-index: 2; }\n            #blocks-tabs .block .nav .list::after {\n              content: '';\n              z-index: -1;\n              position: absolute;\n              height: 75px;\n              width: 1px;\n              margin-top: -102px;\n              left: 11.8%;\n              background-color: #95a7b3; } }\n  #blocks-tabs .block .nav .list .nav-link {\n          height: 100%;\n          padding-top: 6%;\n          color: #2e516a; }\n  @media (min-width: 1025px) {\n            #blocks-tabs .block .nav .list .nav-link {\n              padding-top: 3.5%; } }\n  #blocks-tabs .block .nav .list .item-block {\n          text-decoration: none; }\n  #blocks-tabs .block .nav .list .item-block::before {\n            content: '';\n            display: block;\n            padding: 1em;\n            background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 50.37 49.75%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23002b49%3B%7D.cls-2%7Bfill%3Anone%3Bstroke%3A%23002b49%3Bstroke-miterlimit%3A10%3Bstroke-width%3A0.75px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Econtactus1-newproject%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M39.24%2C36.18%2C35.6%2C34.6l3.08-1.3a.43.43%2C0%2C0%2C0%2C.26-.38.41.41%2C0%2C0%2C0-.26-.38L30%2C28.84a.32.32%2C0%2C0%2C0-.3%2C0l-4.36%2C1.79L21%2C29a.76.76%2C0%2C0%2C0-.3%2C0l-8.76%2C3.67a.43.43%2C0%2C0%2C0-.26.38.41.41%2C0%2C0%2C0%2C.26.38L15%2C34.7l-3.64%2C1.61a.4.4%2C0%2C0%2C0-.26.38.44.44%2C0%2C0%2C0%2C.26.38L15.61%2C39v6.75a.39.39%2C0%2C0%2C0%2C.25.38l9.27%2C3.62a.39.39%2C0%2C0%2C0%2C.15%2C0%2C.41.41%2C0%2C0%2C0%2C.16%2C0l9.24-3.64a.4.4%2C0%2C0%2C0%2C.26-.39V38.83l4.3-1.91a.46.46%2C0%2C0%2C0%2C.26-.38A.39.39%2C0%2C0%2C0%2C39.24%2C36.18ZM13.13%2C33l7.65-3.23%2C3.36%2C1.27-8.09%2C3.21Zm-.59%2C3.66L16%2C35.19l8.37%2C3.49L21%2C40.43Zm12.35%2C12-8.39-3.3V39.35l4.36%2C1.95a.38.38%2C0%2C0%2C0%2C.18%2C0%2C.84.84%2C0%2C0%2C0%2C.2%2C0l3.65-1.93v9.36Zm.39-10.52L17%2C34.76l8.24-3.26%2C8.17%2C3.21Zm8.83%2C7.22-8.39%2C3.32V39.35l3.67%2C1.83a.61.61%2C0%2C0%2C0%2C.18%2C0%2C.38.38%2C0%2C0%2C0%2C.18%2C0l4.36-2Zm0-7.09-4.55%2C2L26.25%2C38.7l7.86-3.36Zm.25-4.12-8-3.15%2C3.39-1.38%2C7.65%2C3.23Zm.58%2C3.74V35.22L38%2C36.56Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M43.75%2C11.46a5.74%2C5.74%2C0%2C0%2C0-7.37%2C1.25%2C5.54%2C5.54%2C0%2C0%2C0-1.05%2C4.61%2C5.75%2C5.75%2C0%2C0%2C1-.67%2C4.13l-1.16%2C2a1.67%2C1.67%2C0%2C0%2C0%2C.62%2C2.29L36%2C26.81a1.68%2C1.68%2C0%2C0%2C0%2C2.31-.57l1.16-2a5.34%2C5.34%2C0%2C0%2C1%2C3.16-2.55%2C5.42%2C5.42%2C0%2C0%2C0%2C3.28-2.49%2C5.74%2C5.74%2C0%2C0%2C0-2.17-7.78ZM37.58%2C25.84a.79.79%2C0%2C0%2C1-1.1.27L34.58%2C25a.79.79%2C0%2C0%2C1-.29-1.1L34.8%2C23%2C38.09%2C25l-.51.87Zm4.84-4.94a6.23%2C6.23%2C0%2C0%2C0-3.72%2C3l-.2.34-3.29-1.94.2-.34a6.7%2C6.7%2C0%2C0%2C0%2C.71-4.76%2C4.59%2C4.59%2C0%2C0%2C1%2C.89-3.9%2C5%2C5%2C0%2C0%2C1%2C6.29-1%2C4.85%2C4.85%2C0%2C0%2C1%2C1.86%2C6.58A4.5%2C4.5%2C0%2C0%2C1%2C42.42%2C20.9Z%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2243.88%22 y%3D%228.97%22 width%3D%222.1%22 height%3D%220.88%22 transform%3D%22translate(14.04 43.36) rotate(-59.53)%22%2F%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2248.08 14.76 48.3 15.62 50.37 15.13 50.15 14.27 48.08 14.76%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2247.93%22 y%3D%2220.65%22 width%3D%220.88%22 height%3D%222.18%22 transform%3D%22translate(5.11 52.41) rotate(-59.53)%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2232.08%22 y%3D%2211.32%22 width%3D%220.88%22 height%3D%222.18%22 transform%3D%22translate(5.33 34.15) rotate(-59.53)%22%2F%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2238.16 7.21 37.3 7.43 37.87 9.47 38.73 9.25 38.16 7.21%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M15.18%2C15H13.63a.5.5%2C0%2C0%2C1-.36-.16.58.58%2C0%2C0%2C1%2C0-.82L14.33%2C13a.8.8%2C0%2C0%2C0%2C.24-.58.82.82%2C0%2C0%2C0-.24-.59l-1.47-1.47a.66.66%2C0%2C0%2C0-.92%2C0l-1.22%2C1.23a.47.47%2C0%2C0%2C1-.34.13.58.58%2C0%2C0%2C1-.6-.58V9.45a.65.65%2C0%2C0%2C0-.65-.64H6.87a.65.65%2C0%2C0%2C0-.65.64v1.67a.57.57%2C0%2C0%2C1-.23.47.58.58%2C0%2C0%2C1-.75-.06L4.18%2C10.47a.82.82%2C0%2C0%2C0-1.16%2C0L1.67%2C11.82a.82.82%2C0%2C0%2C0-.24.59.8.8%2C0%2C0%2C0%2C.24.58l1.05%2C1a.56.56%2C0%2C0%2C1%2C.17.5.57.57%2C0%2C0%2C1-.57.49H.82a.82.82%2C0%2C0%2C0-.82.82v1.91a.82.82%2C0%2C0%2C0%2C.82.82H2.36a.51.51%2C0%2C0%2C1%2C.37.16.58.58%2C0%2C0%2C1%2C0%2C.82L1.67%2C20.62a.82.82%2C0%2C0%2C0-.24.59.8.8%2C0%2C0%2C0%2C.24.58l1.47%2C1.47a.66.66%2C0%2C0%2C0%2C.92%2C0L5.28%2C22a.44.44%2C0%2C0%2C1%2C.34-.14.58.58%2C0%2C0%2C1%2C.6.59v1.67a.65.65%2C0%2C0%2C0%2C.65.65H9.13a.65.65%2C0%2C0%2C0%2C.65-.65V22.52a.6.6%2C0%2C0%2C1%2C.28-.53.56.56%2C0%2C0%2C1%2C.7.09l1.06%2C1.06a.82.82%2C0%2C0%2C0%2C1.16%2C0l1.35-1.35a.8.8%2C0%2C0%2C0%2C.24-.58.82.82%2C0%2C0%2C0-.24-.59l-1.05-1.05a.56.56%2C0%2C0%2C1-.17-.5.57.57%2C0%2C0%2C1%2C.57-.49h1.5a.82.82%2C0%2C0%2C0%2C.82-.82V15.85A.82.82%2C0%2C0%2C0%2C15.18%2C15Zm.23%2C2.73a.23.23%2C0%2C0%2C1-.23.23H13.72a1.21%2C1.21%2C0%2C0%2C0-1.05.58A1.16%2C1.16%2C0%2C0%2C0%2C12.85%2C20L13.91%2C21a.24.24%2C0%2C0%2C1%2C0%2C.33l-1.35%2C1.35a.22.22%2C0%2C0%2C1-.32%2C0l-1-1a1.21%2C1.21%2C0%2C0%2C0-1.15-.34%2C1.17%2C1.17%2C0%2C0%2C0-.87%2C1.14V24a.23.23%2C0%2C0%2C1-.24.23H7.05A.23.23%2C0%2C0%2C1%2C6.81%2C24V22.54a1.18%2C1.18%2C0%2C0%2C0-1.17-1.23%2C1.15%2C1.15%2C0%2C0%2C0-.82.35L3.76%2C22.72a.22.22%2C0%2C0%2C1-.32%2C0L2.09%2C21.37a.24.24%2C0%2C0%2C1%2C0-.33l1-1a1.19%2C1.19%2C0%2C0%2C0%2C.34-1.15A1.14%2C1.14%2C0%2C0%2C0%2C2.32%2C18H.82a.23.23%2C0%2C0%2C1-.23-.23V15.85a.23.23%2C0%2C0%2C1%2C.23-.23H2.28a1.2%2C1.2%2C0%2C0%2C0%2C1.05-.57%2C1.18%2C1.18%2C0%2C0%2C0-.18-1.42L2.09%2C12.57a.24.24%2C0%2C0%2C1%2C0-.33l1.35-1.35a.22.22%2C0%2C0%2C1%2C.32%2C0l1%2C1a1.21%2C1.21%2C0%2C0%2C0%2C1.15.34%2C1.16%2C1.16%2C0%2C0%2C0%2C.87-1.13V9.63a.23.23%2C0%2C0%2C1%2C.24-.23H9a.23.23%2C0%2C0%2C1%2C.24.23v1.45a1.19%2C1.19%2C0%2C0%2C0%2C.57%2C1.05A1.15%2C1.15%2C0%2C0%2C0%2C11.18%2C12l1.06-1.06a.22.22%2C0%2C0%2C1%2C.32%2C0l1.35%2C1.35a.24.24%2C0%2C0%2C1%2C0%2C.33l-1%2C1a1.19%2C1.19%2C0%2C0%2C0-.34%2C1.15%2C1.15%2C1.15%2C0%2C0%2C0%2C1.13.87h1.5a.23.23%2C0%2C0%2C1%2C.23.23Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M8%2C14a2.67%2C2.67%2C0%2C1%2C0%2C2.66%2C2.67A2.68%2C2.68%2C0%2C0%2C0%2C8%2C14Zm0%2C4.74a2.08%2C2.08%2C0%2C1%2C1%2C2.07-2.07A2.08%2C2.08%2C0%2C0%2C1%2C8%2C18.75Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M34.64.86a2.93%2C2.93%2C0%2C0%2C0-4.15%2C0L18.74%2C12.61h0l0%2C0a.2.2%2C0%2C0%2C0%2C0%2C.08v0h0L17.5%2C17.6v.08a.23.23%2C0%2C0%2C0%2C0%2C.11v0a.18.18%2C0%2C0%2C0%2C.06.09.28.28%2C0%2C0%2C0%2C.11.08l.12%2C0h.08l4.83-1.15h.06l.07%2C0s0%2C0%2C0%2C0h0L34.64%2C5A2.93%2C2.93%2C0%2C0%2C0%2C34.64.86Zm-.46.46a2.27%2C2.27%2C0%2C0%2C1%2C.21%2C3L31.2%2C1.11A2.29%2C2.29%2C0%2C0%2C1%2C34.18%2C1.32ZM32.56%2C6.16%2C29.34%2C2.93l.46-.46L33%2C5.7ZM19.11%2C16.45a.32.32%2C0%2C0%2C0-.46%2C0l-.25.25.84-3.5L20.68%2C13l-.19%2C1.67v.1a.14.14%2C0%2C0%2C0%2C0%2C.06l0%2C.06%2C0%2C0%2C.05%2C0%2C.05%2C0%2C.06%2C0h.11l1.67-.18-.16%2C1.44-3.5.83.25-.25A.32.32%2C0%2C0%2C0%2C19.11%2C16.45ZM23.2%2C14.6l7.29-7.29A.33.33%2C0%2C0%2C0%2C30%2C6.85l-7.29%2C7.29-1.56.17.18-1.55%2C7.29-7.3a.32.32%2C0%2C0%2C0%2C0-.46.34.34%2C0%2C0%2C0-.46%2C0L20.9%2C12.29l-1%2C.12%2C9-9L32.1%2C6.62l-9%2C9ZM33.49%2C5.23%2C30.26%2C2l.46-.46L34%2C4.77Z%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M40.5%2C32.56c.09-3%2C2.24-6.52%2C8-7.75%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M10.5%2C32.56c-.1-3-2.25-6.52-8-7.75%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n            background-repeat: no-repeat;\n            background-position: center; }\n  #blocks-tabs .block .nav .list .item-block-2 {\n          text-decoration: none; }\n  #blocks-tabs .block .nav .list .item-block-2::before {\n            content: '';\n            display: block;\n            padding: 1em;\n            background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 50 50%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity%3A0.85%3B%7D.cls-2%7Bfill%3A%23002b49%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Econtactus2-joinus%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cg class%3D%22cls-1%22%3E%3Cpath class%3D%22cls-2%22 d%3D%22M38.75%2C26.68l-5.4-6.89a11.59%2C11.59%2C0%2C0%2C0%2C3.27-7.29H45v.91a4.17%2C4.17%2C0%2C1%2C0%2C1.67%2C0V11.66a.84.84%2C0%2C0%2C0-.84-.83h-9.2a11.74%2C11.74%2C0%2C0%2C0-2.44-6.34l1.16-1.16h9.8a2.5%2C2.5%2C0%2C1%2C0%2C0-1.66H35a.78.78%2C0%2C0%2C0-.58.24L33.06%2C3.26a11.64%2C11.64%2C0%2C0%2C0-19.68%2C7.57h-7L3.66%2C4.7a2.49%2C2.49%2C0%2C1%2C0-3.37-1A2.53%2C2.53%2C0%2C0%2C0%2C1.93%2C4.93L5.08%2C12a.83.83%2C0%2C0%2C0%2C.76.5h7.54a11.6%2C11.6%2C0%2C0%2C0%2C3.21%2C7.22l-7%2C7A8.32%2C8.32%2C0%2C1%2C0%2C7.09%2C43.22l.42.05v4.21a.83.83%2C0%2C0%2C0%2C.83.83H16a2.5%2C2.5%2C0%2C1%2C0%2C1.52-3.19A2.53%2C2.53%2C0%2C0%2C0%2C16%2C46.65H9.17V43.27a8.32%2C8.32%2C0%2C0%2C0%2C2.25-16l6.41-6.41a11.59%2C11.59%2C0%2C0%2C0%2C14.26.06l4.63%2C5.88a11.69%2C11.69%2C0%2C1%2C0%2C2-.1Zm9.57-9.14a2.5%2C2.5%2C0%2C1%2C1-2.5-2.49A2.49%2C2.49%2C0%2C0%2C1%2C48.32%2C17.54ZM47.49%2C1.72a.83.83%2C0%2C1%2C1-.83.83A.83.83%2C0%2C0%2C1%2C47.49%2C1.72Zm-45%2C1.66a.83.83%2C0%2C1%2C1%2C0-1.66.83.83%2C0%2C1%2C1%2C0%2C1.66ZM18.33%2C46.7a.84.84%2C0%2C0%2C1%2C.84.83.85.85%2C0%2C0%2C1-.84.84.84.84%2C0%2C0%2C1-.83-.84A.83.83%2C0%2C0%2C1%2C18.33%2C46.7Zm-6.66-5.9A6.61%2C6.61%2C0%2C0%2C1%2C5%2C40.8V39.27a3.37%2C3.37%2C0%2C0%2C1%2C3.08-3.39%2C3.33%2C3.33%2C0%2C0%2C1%2C3.58%2C3.32Zm-5-8.26a1.67%2C1.67%2C0%2C1%2C1%2C3.33%2C0%2C1.67%2C1.67%2C0%2C0%2C1-3.33%2C0Zm6.67-1.92a6.67%2C6.67%2C0%2C0%2C1%2C0%2C8.81V39.2a5%2C5%2C0%2C0%2C0-2.59-4.37%2C3.33%2C3.33%2C0%2C1%2C0-4.82%2C0A5%2C5%2C0%2C0%2C0%2C3.34%2C39.2v.23a6.66%2C6.66%2C0%2C0%2C1%2C10-8.81ZM30.83%2C19.76a9.9%2C9.9%2C0%2C0%2C1-11.66%2C0v-2A2.75%2C2.75%2C0%2C0%2C1%2C21.92%2C15h1.85l-1.21%2C3a.83.83%2C0%2C0%2C0%2C.18.9l1.67%2C1.66a.83.83%2C0%2C0%2C0%2C1.18%2C0l1.66-1.66a.84.84%2C0%2C0%2C0%2C.19-.9l-1.21-3h1.85a2.75%2C2.75%2C0%2C0%2C1%2C2.75%2C2.75v2ZM25.12%2C6.29a.8.8%2C0%2C0%2C0-.08.16c-.42%2C1.27-2.7%2C1.74-4.16%2C1.88C21.1%2C5.54%2C22.42%2C4.22%2C25%2C4.22a3.64%2C3.64%2C0%2C0%2C1%2C4%2C3.45L26.26%2C6A.82.82%2C0%2C0%2C0%2C25.12%2C6.29Zm1%2C1.59%2C3%2C1.78A5.15%2C5.15%2C0%2C0%2C1%2C25%2C13.38%2C5.23%2C5.23%2C0%2C0%2C1%2C21%2C10C22.37%2C9.89%2C25%2C9.45%2C26.15%2C7.88Zm-.46%2C10.3-.69.69-.69-.69L25%2C16.46Zm2.94-4.76a5.79%2C5.79%2C0%2C0%2C0%2C2.2-4.21c0-5.5-3.17-6.66-5.83-6.66s-5.83%2C1.16-5.83%2C6.66a5.74%2C5.74%2C0%2C0%2C0%2C2.19%2C4.21%2C4.41%2C4.41%2C0%2C0%2C0-3.86%2C4.37v.51a10%2C10%2C0%2C1%2C1%2C15%2C0v-.51A4.41%2C4.41%2C0%2C0%2C0%2C28.63%2C13.42Zm15.53%2C33a9.94%2C9.94%2C0%2C0%2C1-11.66%2C0v-2a2.75%2C2.75%2C0%2C0%2C1%2C2.74-2.75h1.85l-1.21%2C3a.83.83%2C0%2C0%2C0%2C.19.9l1.67%2C1.67a.83.83%2C0%2C0%2C0%2C1.17%2C0l1.67-1.67a.81.81%2C0%2C0%2C0%2C.18-.9l-1.2-3h1.85a2.75%2C2.75%2C0%2C0%2C1%2C2.75%2C2.75ZM39.47%2C34.53h0l3%2C1.79A5.17%2C5.17%2C0%2C0%2C1%2C38.32%2C40a5.27%2C5.27%2C0%2C0%2C1-4-3.38C35.7%2C36.54%2C38.27%2C36.11%2C39.47%2C34.53ZM34.21%2C35h0c.22-2.79%2C1.53-4.12%2C4.12-4.12a3.64%2C3.64%2C0%2C0%2C1%2C4%2C3.45l-2.77-1.66a.84.84%2C0%2C0%2C0-1.15.28.87.87%2C0%2C0%2C0-.07.17C38%2C34.37%2C35.67%2C34.85%2C34.21%2C35ZM39%2C44.83l-.68.69-.69-.69.69-1.72Zm6.81.13v-.51A4.4%2C4.4%2C0%2C0%2C0%2C42%2C40.07a5.78%2C5.78%2C0%2C0%2C0%2C2.2-4.2c0-5.51-3.17-6.66-5.83-6.66s-5.83%2C1.15-5.83%2C6.66a5.78%2C5.78%2C0%2C0%2C0%2C2.19%2C4.21%2C4.4%2C4.4%2C0%2C0%2C0-3.86%2C4.37V45a10%2C10%2C0%2C1%2C1%2C15%2C0Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n            background-repeat: no-repeat;\n            background-position: center; }\n  #blocks-tabs .block .nav .list .active {\n          background: #2e516a;\n          color: #ffffff; }\n  #blocks-tabs .block .nav .list .active::before {\n            content: '';\n            background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 50.37 49.75%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D.cls-2%7Bfill%3Anone%3Bstroke%3A%23fff%3Bstroke-miterlimit%3A10%3Bstroke-width%3A0.75px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Econtactus1-newproject-white%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M39.24%2C36.18%2C35.6%2C34.6l3.08-1.3a.43.43%2C0%2C0%2C0%2C.26-.38.41.41%2C0%2C0%2C0-.26-.38L30%2C28.84a.32.32%2C0%2C0%2C0-.3%2C0l-4.36%2C1.79L21%2C29a.76.76%2C0%2C0%2C0-.3%2C0l-8.76%2C3.67a.43.43%2C0%2C0%2C0-.26.38.41.41%2C0%2C0%2C0%2C.26.38L15%2C34.7l-3.64%2C1.61a.4.4%2C0%2C0%2C0-.26.38.44.44%2C0%2C0%2C0%2C.26.38L15.61%2C39v6.75a.39.39%2C0%2C0%2C0%2C.25.38l9.27%2C3.62a.39.39%2C0%2C0%2C0%2C.15%2C0%2C.41.41%2C0%2C0%2C0%2C.16%2C0l9.24-3.64a.4.4%2C0%2C0%2C0%2C.26-.39V38.83l4.3-1.91a.46.46%2C0%2C0%2C0%2C.26-.38A.39.39%2C0%2C0%2C0%2C39.24%2C36.18ZM13.13%2C33l7.65-3.23%2C3.36%2C1.27-8.09%2C3.21Zm-.59%2C3.66L16%2C35.19l8.37%2C3.49L21%2C40.43Zm12.35%2C12-8.39-3.3V39.35l4.36%2C1.95a.38.38%2C0%2C0%2C0%2C.18%2C0%2C.84.84%2C0%2C0%2C0%2C.2%2C0l3.65-1.93v9.36Zm.39-10.52L17%2C34.76l8.24-3.26%2C8.17%2C3.21Zm8.83%2C7.22-8.39%2C3.32V39.35l3.67%2C1.83a.61.61%2C0%2C0%2C0%2C.18%2C0%2C.38.38%2C0%2C0%2C0%2C.18%2C0l4.36-2Zm0-7.09-4.55%2C2L26.25%2C38.7l7.86-3.36Zm.25-4.12-8-3.15%2C3.39-1.38%2C7.65%2C3.23Zm.58%2C3.74V35.22L38%2C36.56Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M43.75%2C11.46a5.74%2C5.74%2C0%2C0%2C0-7.37%2C1.25%2C5.54%2C5.54%2C0%2C0%2C0-1.05%2C4.61%2C5.75%2C5.75%2C0%2C0%2C1-.67%2C4.13l-1.16%2C2a1.67%2C1.67%2C0%2C0%2C0%2C.62%2C2.29L36%2C26.81a1.68%2C1.68%2C0%2C0%2C0%2C2.31-.57l1.16-2a5.34%2C5.34%2C0%2C0%2C1%2C3.16-2.55%2C5.42%2C5.42%2C0%2C0%2C0%2C3.28-2.49%2C5.74%2C5.74%2C0%2C0%2C0-2.17-7.78ZM37.58%2C25.84a.79.79%2C0%2C0%2C1-1.1.27L34.58%2C25a.79.79%2C0%2C0%2C1-.29-1.1L34.8%2C23%2C38.09%2C25l-.51.87Zm4.84-4.94a6.23%2C6.23%2C0%2C0%2C0-3.72%2C3l-.2.34-3.29-1.94.2-.34a6.7%2C6.7%2C0%2C0%2C0%2C.71-4.76%2C4.59%2C4.59%2C0%2C0%2C1%2C.89-3.9%2C5%2C5%2C0%2C0%2C1%2C6.29-1%2C4.85%2C4.85%2C0%2C0%2C1%2C1.86%2C6.58A4.5%2C4.5%2C0%2C0%2C1%2C42.42%2C20.9Z%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2243.88%22 y%3D%228.97%22 width%3D%222.1%22 height%3D%220.88%22 transform%3D%22translate(14.04 43.36) rotate(-59.53)%22%2F%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2248.08 14.76 48.3 15.62 50.37 15.13 50.15 14.27 48.08 14.76%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2247.93%22 y%3D%2220.65%22 width%3D%220.88%22 height%3D%222.18%22 transform%3D%22translate(5.11 52.41) rotate(-59.53)%22%2F%3E%3Crect class%3D%22cls-1%22 x%3D%2232.08%22 y%3D%2211.32%22 width%3D%220.88%22 height%3D%222.18%22 transform%3D%22translate(5.33 34.15) rotate(-59.53)%22%2F%3E%3Cpolygon class%3D%22cls-1%22 points%3D%2238.16 7.21 37.3 7.43 37.87 9.47 38.73 9.25 38.16 7.21%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M15.18%2C15H13.63a.5.5%2C0%2C0%2C1-.36-.16.58.58%2C0%2C0%2C1%2C0-.82L14.33%2C13a.8.8%2C0%2C0%2C0%2C.24-.58.82.82%2C0%2C0%2C0-.24-.59l-1.47-1.47a.66.66%2C0%2C0%2C0-.92%2C0l-1.22%2C1.23a.47.47%2C0%2C0%2C1-.34.13.58.58%2C0%2C0%2C1-.6-.58V9.45a.65.65%2C0%2C0%2C0-.65-.64H6.87a.65.65%2C0%2C0%2C0-.65.64v1.67a.57.57%2C0%2C0%2C1-.23.47.58.58%2C0%2C0%2C1-.75-.06L4.18%2C10.47a.82.82%2C0%2C0%2C0-1.16%2C0L1.67%2C11.82a.82.82%2C0%2C0%2C0-.24.59.8.8%2C0%2C0%2C0%2C.24.58l1.05%2C1a.56.56%2C0%2C0%2C1%2C.17.5.57.57%2C0%2C0%2C1-.57.49H.82a.82.82%2C0%2C0%2C0-.82.82v1.91a.82.82%2C0%2C0%2C0%2C.82.82H2.36a.51.51%2C0%2C0%2C1%2C.37.16.58.58%2C0%2C0%2C1%2C0%2C.82L1.67%2C20.62a.82.82%2C0%2C0%2C0-.24.59.8.8%2C0%2C0%2C0%2C.24.58l1.47%2C1.47a.66.66%2C0%2C0%2C0%2C.92%2C0L5.28%2C22a.44.44%2C0%2C0%2C1%2C.34-.14.58.58%2C0%2C0%2C1%2C.6.59v1.67a.65.65%2C0%2C0%2C0%2C.65.65H9.13a.65.65%2C0%2C0%2C0%2C.65-.65V22.52a.6.6%2C0%2C0%2C1%2C.28-.53.56.56%2C0%2C0%2C1%2C.7.09l1.06%2C1.06a.82.82%2C0%2C0%2C0%2C1.16%2C0l1.35-1.35a.8.8%2C0%2C0%2C0%2C.24-.58.82.82%2C0%2C0%2C0-.24-.59l-1.05-1.05a.56.56%2C0%2C0%2C1-.17-.5.57.57%2C0%2C0%2C1%2C.57-.49h1.5a.82.82%2C0%2C0%2C0%2C.82-.82V15.85A.82.82%2C0%2C0%2C0%2C15.18%2C15Zm.23%2C2.73a.23.23%2C0%2C0%2C1-.23.23H13.72a1.21%2C1.21%2C0%2C0%2C0-1.05.58A1.16%2C1.16%2C0%2C0%2C0%2C12.85%2C20L13.91%2C21a.24.24%2C0%2C0%2C1%2C0%2C.33l-1.35%2C1.35a.22.22%2C0%2C0%2C1-.32%2C0l-1-1a1.21%2C1.21%2C0%2C0%2C0-1.15-.34%2C1.17%2C1.17%2C0%2C0%2C0-.87%2C1.14V24a.23.23%2C0%2C0%2C1-.24.23H7.05A.23.23%2C0%2C0%2C1%2C6.81%2C24V22.54a1.18%2C1.18%2C0%2C0%2C0-1.17-1.23%2C1.15%2C1.15%2C0%2C0%2C0-.82.35L3.76%2C22.72a.22.22%2C0%2C0%2C1-.32%2C0L2.09%2C21.37a.24.24%2C0%2C0%2C1%2C0-.33l1-1a1.19%2C1.19%2C0%2C0%2C0%2C.34-1.15A1.14%2C1.14%2C0%2C0%2C0%2C2.32%2C18H.82a.23.23%2C0%2C0%2C1-.23-.23V15.85a.23.23%2C0%2C0%2C1%2C.23-.23H2.28a1.2%2C1.2%2C0%2C0%2C0%2C1.05-.57%2C1.18%2C1.18%2C0%2C0%2C0-.18-1.42L2.09%2C12.57a.24.24%2C0%2C0%2C1%2C0-.33l1.35-1.35a.22.22%2C0%2C0%2C1%2C.32%2C0l1%2C1a1.21%2C1.21%2C0%2C0%2C0%2C1.15.34%2C1.16%2C1.16%2C0%2C0%2C0%2C.87-1.13V9.63a.23.23%2C0%2C0%2C1%2C.24-.23H9a.23.23%2C0%2C0%2C1%2C.24.23v1.45a1.19%2C1.19%2C0%2C0%2C0%2C.57%2C1.05A1.15%2C1.15%2C0%2C0%2C0%2C11.18%2C12l1.06-1.06a.22.22%2C0%2C0%2C1%2C.32%2C0l1.35%2C1.35a.24.24%2C0%2C0%2C1%2C0%2C.33l-1%2C1a1.19%2C1.19%2C0%2C0%2C0-.34%2C1.15%2C1.15%2C1.15%2C0%2C0%2C0%2C1.13.87h1.5a.23.23%2C0%2C0%2C1%2C.23.23Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M8%2C14a2.67%2C2.67%2C0%2C1%2C0%2C2.66%2C2.67A2.68%2C2.68%2C0%2C0%2C0%2C8%2C14Zm0%2C4.74a2.08%2C2.08%2C0%2C1%2C1%2C2.07-2.07A2.08%2C2.08%2C0%2C0%2C1%2C8%2C18.75Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M34.64.86a2.93%2C2.93%2C0%2C0%2C0-4.15%2C0L18.74%2C12.61h0l0%2C0a.2.2%2C0%2C0%2C0%2C0%2C.08v0h0L17.5%2C17.6v.08a.23.23%2C0%2C0%2C0%2C0%2C.11v0a.18.18%2C0%2C0%2C0%2C.06.09.28.28%2C0%2C0%2C0%2C.11.08l.12%2C0h.08l4.83-1.15h.06l.07%2C0s0%2C0%2C0%2C0h0L34.64%2C5A2.93%2C2.93%2C0%2C0%2C0%2C34.64.86Zm-.46.46a2.27%2C2.27%2C0%2C0%2C1%2C.21%2C3L31.2%2C1.11A2.29%2C2.29%2C0%2C0%2C1%2C34.18%2C1.32ZM32.56%2C6.16%2C29.34%2C2.93l.46-.46L33%2C5.7ZM19.11%2C16.45a.32.32%2C0%2C0%2C0-.46%2C0l-.25.25.84-3.5L20.68%2C13l-.19%2C1.67v.1a.14.14%2C0%2C0%2C0%2C0%2C.06l0%2C.06%2C0%2C0%2C.05%2C0%2C.05%2C0%2C.06%2C0h.11l1.67-.18-.16%2C1.44-3.5.83.25-.25A.32.32%2C0%2C0%2C0%2C19.11%2C16.45ZM23.2%2C14.6l7.29-7.29A.33.33%2C0%2C0%2C0%2C30%2C6.85l-7.29%2C7.29-1.56.17.18-1.55%2C7.29-7.3a.32.32%2C0%2C0%2C0%2C0-.46.34.34%2C0%2C0%2C0-.46%2C0L20.9%2C12.29l-1%2C.12%2C9-9L32.1%2C6.62l-9%2C9ZM33.49%2C5.23%2C30.26%2C2l.46-.46L34%2C4.77Z%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M40.5%2C32.56c.09-3%2C2.24-6.52%2C8-7.75%22%2F%3E%3Cpath class%3D%22cls-2%22 d%3D%22M10.5%2C32.56c-.1-3-2.25-6.52-8-7.75%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n  #blocks-tabs .block .nav .list .active::after {\n            content: '';\n            position: absolute;\n            border-width: 22px 65px 0;\n            border-style: solid;\n            border-color: #2e516a transparent transparent;\n            margin-top: 11.38%;\n            margin-left: -112px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n              #blocks-tabs .block .nav .list .active::after {\n                margin-top: 6%;\n                margin-left: -179px; } }\n  @media (min-width: 1025px) {\n              #blocks-tabs .block .nav .list .active::after {\n                margin-top: 4.2%;\n                margin-left: -206px;\n                border-width: 35px 95px 0; } }\n  @media (min-width: 1025px) {\n        #blocks-tabs .block .nav .list-color {\n          padding-left: 0%;\n          padding-right: 11.8%; }\n          #blocks-tabs .block .nav .list-color::after {\n            content: '';\n            position: absolute;\n            height: 75px;\n            width: 1px;\n            margin-top: -102px;\n            left: 88.14%;\n            background-color: #95a7b3; } }\n  #blocks-tabs .block .nav .list-color .active {\n        background: #2e516a;\n        color: #ffffff; }\n  #blocks-tabs .block .nav .list-color .active::before {\n          content: '';\n          background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 50 50%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bopacity%3A0.85%3B%7D.cls-2%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Econtactus2-joinus-white%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cg class%3D%22cls-1%22%3E%3Cpath class%3D%22cls-2%22 d%3D%22M38.75%2C26.68l-5.4-6.89a11.59%2C11.59%2C0%2C0%2C0%2C3.27-7.29H45v.91a4.17%2C4.17%2C0%2C1%2C0%2C1.67%2C0V11.66a.84.84%2C0%2C0%2C0-.84-.83h-9.2a11.74%2C11.74%2C0%2C0%2C0-2.44-6.34l1.16-1.16h9.8a2.5%2C2.5%2C0%2C1%2C0%2C0-1.66H35a.78.78%2C0%2C0%2C0-.58.24L33.06%2C3.26a11.64%2C11.64%2C0%2C0%2C0-19.68%2C7.57h-7L3.66%2C4.7a2.49%2C2.49%2C0%2C1%2C0-3.37-1A2.53%2C2.53%2C0%2C0%2C0%2C1.93%2C4.93L5.08%2C12a.83.83%2C0%2C0%2C0%2C.76.5h7.54a11.6%2C11.6%2C0%2C0%2C0%2C3.21%2C7.22l-7%2C7A8.32%2C8.32%2C0%2C1%2C0%2C7.09%2C43.22l.42.05v4.21a.83.83%2C0%2C0%2C0%2C.83.83H16a2.5%2C2.5%2C0%2C1%2C0%2C1.52-3.19A2.53%2C2.53%2C0%2C0%2C0%2C16%2C46.65H9.17V43.27a8.32%2C8.32%2C0%2C0%2C0%2C2.25-16l6.41-6.41a11.59%2C11.59%2C0%2C0%2C0%2C14.26.06l4.63%2C5.88a11.69%2C11.69%2C0%2C1%2C0%2C2-.1Zm9.57-9.14a2.5%2C2.5%2C0%2C1%2C1-2.5-2.49A2.49%2C2.49%2C0%2C0%2C1%2C48.32%2C17.54ZM47.49%2C1.72a.83.83%2C0%2C1%2C1-.83.83A.83.83%2C0%2C0%2C1%2C47.49%2C1.72Zm-45%2C1.66a.83.83%2C0%2C1%2C1%2C0-1.66.83.83%2C0%2C1%2C1%2C0%2C1.66ZM18.33%2C46.7a.84.84%2C0%2C0%2C1%2C.84.83.85.85%2C0%2C0%2C1-.84.84.84.84%2C0%2C0%2C1-.83-.84A.83.83%2C0%2C0%2C1%2C18.33%2C46.7Zm-6.66-5.9A6.61%2C6.61%2C0%2C0%2C1%2C5%2C40.8V39.27a3.37%2C3.37%2C0%2C0%2C1%2C3.08-3.39%2C3.33%2C3.33%2C0%2C0%2C1%2C3.58%2C3.32Zm-5-8.26a1.67%2C1.67%2C0%2C1%2C1%2C3.33%2C0%2C1.67%2C1.67%2C0%2C0%2C1-3.33%2C0Zm6.67-1.92a6.67%2C6.67%2C0%2C0%2C1%2C0%2C8.81V39.2a5%2C5%2C0%2C0%2C0-2.59-4.37%2C3.33%2C3.33%2C0%2C1%2C0-4.82%2C0A5%2C5%2C0%2C0%2C0%2C3.34%2C39.2v.23a6.66%2C6.66%2C0%2C0%2C1%2C10-8.81ZM30.83%2C19.76a9.9%2C9.9%2C0%2C0%2C1-11.66%2C0v-2A2.75%2C2.75%2C0%2C0%2C1%2C21.92%2C15h1.85l-1.21%2C3a.83.83%2C0%2C0%2C0%2C.18.9l1.67%2C1.66a.83.83%2C0%2C0%2C0%2C1.18%2C0l1.66-1.66a.84.84%2C0%2C0%2C0%2C.19-.9l-1.21-3h1.85a2.75%2C2.75%2C0%2C0%2C1%2C2.75%2C2.75v2ZM25.12%2C6.29a.8.8%2C0%2C0%2C0-.08.16c-.42%2C1.27-2.7%2C1.74-4.16%2C1.88C21.1%2C5.54%2C22.42%2C4.22%2C25%2C4.22a3.64%2C3.64%2C0%2C0%2C1%2C4%2C3.45L26.26%2C6A.82.82%2C0%2C0%2C0%2C25.12%2C6.29Zm1%2C1.59%2C3%2C1.78A5.15%2C5.15%2C0%2C0%2C1%2C25%2C13.38%2C5.23%2C5.23%2C0%2C0%2C1%2C21%2C10C22.37%2C9.89%2C25%2C9.45%2C26.15%2C7.88Zm-.46%2C10.3-.69.69-.69-.69L25%2C16.46Zm2.94-4.76a5.79%2C5.79%2C0%2C0%2C0%2C2.2-4.21c0-5.5-3.17-6.66-5.83-6.66s-5.83%2C1.16-5.83%2C6.66a5.74%2C5.74%2C0%2C0%2C0%2C2.19%2C4.21%2C4.41%2C4.41%2C0%2C0%2C0-3.86%2C4.37v.51a10%2C10%2C0%2C1%2C1%2C15%2C0v-.51A4.41%2C4.41%2C0%2C0%2C0%2C28.63%2C13.42Zm15.53%2C33a9.94%2C9.94%2C0%2C0%2C1-11.66%2C0v-2a2.75%2C2.75%2C0%2C0%2C1%2C2.74-2.75h1.85l-1.21%2C3a.83.83%2C0%2C0%2C0%2C.19.9l1.67%2C1.67a.83.83%2C0%2C0%2C0%2C1.17%2C0l1.67-1.67a.81.81%2C0%2C0%2C0%2C.18-.9l-1.2-3h1.85a2.75%2C2.75%2C0%2C0%2C1%2C2.75%2C2.75ZM39.47%2C34.53h0l3%2C1.79A5.17%2C5.17%2C0%2C0%2C1%2C38.32%2C40a5.27%2C5.27%2C0%2C0%2C1-4-3.38C35.7%2C36.54%2C38.27%2C36.11%2C39.47%2C34.53ZM34.21%2C35h0c.22-2.79%2C1.53-4.12%2C4.12-4.12a3.64%2C3.64%2C0%2C0%2C1%2C4%2C3.45l-2.77-1.66a.84.84%2C0%2C0%2C0-1.15.28.87.87%2C0%2C0%2C0-.07.17C38%2C34.37%2C35.67%2C34.85%2C34.21%2C35ZM39%2C44.83l-.68.69-.69-.69.69-1.72Zm6.81.13v-.51A4.4%2C4.4%2C0%2C0%2C0%2C42%2C40.07a5.78%2C5.78%2C0%2C0%2C0%2C2.2-4.2c0-5.51-3.17-6.66-5.83-6.66s-5.83%2C1.15-5.83%2C6.66a5.78%2C5.78%2C0%2C0%2C0%2C2.19%2C4.21%2C4.4%2C4.4%2C0%2C0%2C0-3.86%2C4.37V45a10%2C10%2C0%2C1%2C1%2C15%2C0Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n"

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

module.exports = "<section id=\"transition-image\">\n    <picture>\n        <source *ngIf=\"tecnologiesMovil\" media=\"(max-width:500px)\" [srcset]=\"tecnologiesMovil?.url \">\n        <img *ngIf=\"tecnologiesDesktop\" class=\"w-100 backgraund-image\" [src]=\"tecnologiesDesktop?.url\" alt=\"{{tecnologiesDesktop?.title}}\">\n    </picture>\n    <h1> {{tecnologiesTitle.title}} </h1>\n    <div class=\"list-image-item\">\n        <ul class=\"row\">\n            <li *ngFor=\"let tec of tecnologiesArrayLogos; let i = index\">\n                <picture>\n                    <img id=\"slide-img-{{i}} \" class=\"img-item animated\" [src]=\"tec.field_tech_image.url\" [alt]=\"tec.field_tech_image.alt\"/>\n                </picture>\n            </li>\n        </ul>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/cards/components/tecnologies/tecnologies.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/cards/components/tecnologies/tecnologies.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#transition-image {\n  margin-top: 53px;\n  height: 400px;\n  display: block; }\n  @media (min-width: 1025px) {\n    #transition-image {\n      height: 366px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    #transition-image {\n      height: 366px; } }\n  #transition-image picture {\n    display: flex; }\n  #transition-image picture .backgraund-image {\n      height: 400px;\n      position: absolute; }\n  @media (min-width: 1025px) {\n        #transition-image picture .backgraund-image {\n          height: 366px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #transition-image picture .backgraund-image {\n          height: 366px; } }\n  #transition-image h1 {\n    text-transform: uppercase;\n    font-size: 30px;\n    color: #FFFFFF;\n    position: absolute;\n    z-index: 1;\n    margin-top: 62px;\n    width: 100%;\n    text-align: center; }\n  @media (min-width: 1025px) {\n      #transition-image h1 {\n        margin-left: 0%;\n        width: 100%;\n        margin-top: 67px;\n        font-size: 40px;\n        text-align: center; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #transition-image h1 {\n        width: 100%;\n        margin-left: 0%;\n        text-align: center;\n        margin-top: 67px;\n        font-size: 40px; } }\n  #transition-image .list-image-item {\n    height: 400px; }\n  #transition-image .list-image-item .row {\n      width: 100%;\n      padding: 0%;\n      position: absolute;\n      margin-top: 78px;\n      margin-right: auto;\n      margin-left: auto;\n      justify-content: center; }\n  @media (min-width: 1025px) {\n        #transition-image .list-image-item .row {\n          margin-top: 170px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        #transition-image .list-image-item .row {\n          margin-top: 140px; } }\n  #transition-image .list-image-item .row li {\n        z-index: 1;\n        height: 49px;\n        width: 28%;\n        list-style: none;\n        padding: 0% 4.2%;\n        display: flex;\n        margin-left: 4%;\n        margin-top: 19%; }\n  @media (min-width: 1025px) {\n          #transition-image .list-image-item .row li {\n            align-items: center;\n            width: initial;\n            justify-items: center;\n            height: auto;\n            padding: 0 5.2%;\n            margin-left: initial;\n            margin-top: initial; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          #transition-image .list-image-item .row li {\n            width: initial;\n            align-items: center;\n            justify-items: center;\n            height: auto;\n            padding: 0 4.2%;\n            margin-left: initial;\n            margin-top: initial; } }\n  #transition-image .list-image-item .row li img {\n          width: 100%;\n          height: 100%; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n            #transition-image .list-image-item .row li img {\n              width: initial;\n              height: initial; } }\n  @media (min-width: 1025px) {\n            #transition-image .list-image-item .row li img {\n              width: initial;\n              height: initial; } }\n  #transition-image .list-image-item::after {\n    content: \"\";\n    background-color: #002b49;\n    opacity: 0.7;\n    height: 400px;\n    width: 100%;\n    position: absolute; }\n  @media (min-width: 1025px) {\n      #transition-image .list-image-item::after {\n        height: 366px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #transition-image .list-image-item::after {\n        height: 366px; } }\n"

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tecnologies',
            template: __webpack_require__(/*! ./tecnologies.component.html */ "./src/app/cards/components/tecnologies/tecnologies.component.html"),
            styles: [__webpack_require__(/*! ./tecnologies.component.scss */ "./src/app/cards/components/tecnologies/tecnologies.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cards_v1_card_services__WEBPACK_IMPORTED_MODULE_0__["CustomCardService"]])
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

module.exports = "<section id=\"work-with-us\">\n  <h1>{{ workWithUsTitle.title }}</h1>\n  <p>{{ workWithUsSubtitle.title }}</p>\n  <button type=\"button\" class=\"btn btn-primary\">{{ workWithUsButton.title }}</button>\n  <hr>\n  <p class=\"text1\">o si lo desea</p>\n  <div [innerHTML]= workWithUsThirdText class=\"text2\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/cards/components/workwithus/workwithus.scss":
/*!*************************************************************!*\
  !*** ./src/app/cards/components/workwithus/workwithus.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#work-with-us {\n  display: block;\n  margin-top: 65px;\n  text-align: center;\n  color: #002b49; }\n  #work-with-us h1 {\n    font-size: 40px;\n    text-transform: none;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    letter-spacing: -2px; }\n  #work-with-us p {\n    font-size: 20px;\n    margin-top: 11px;\n    margin-bottom: 30px; }\n  @media (min-width: 1025px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us p {\n        margin-bottom: 17px; } }\n  #work-with-us .btn-primary {\n    background-color: #a6cf24;\n    border-color: #a6cf24;\n    opacity: 0.75;\n    border-radius: 0;\n    width: 292px;\n    font-size: 20px;\n    height: 45px;\n    margin-bottom: 12px; }\n  @media (min-width: 1025px) {\n      #work-with-us .btn-primary {\n        margin-bottom: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us .btn-primary {\n        margin-bottom: 0; } }\n  #work-with-us .text1 {\n    font-size: 24px;\n    margin-top: 11px;\n    -webkit-transform: scaleY(1.2);\n            transform: scaleY(1.2);\n    background-color: #FFFFFF;\n    width: 42%;\n    margin-left: 29%; }\n  @media (min-width: 1025px) {\n      #work-with-us .text1 {\n        width: 12%;\n        margin-left: 44%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us .text1 {\n        width: 17%;\n        margin-left: 42%; } }\n  #work-with-us hr {\n    background: linear-gradient(-90deg, #FFFFFF, #a6cf24, #a6cf24, #FFFFFF);\n    height: 1px;\n    width: 80%;\n    position: absolute;\n    margin-top: 31px;\n    left: 10%; }\n  @media (min-width: 1025px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      #work-with-us hr {\n        width: 22%;\n        left: 39%; } }\n  #work-with-us .text2 {\n    margin-bottom: 67px; }\n"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <picture>\n        <source media=\"(max-width:500px)\" srcset=\"../../../../assets/images/footermovil.png\">\n        <img class=\"w-100\" src=\"../../../../assets/images/footer.png\" alt=\"Footer\">\n    </picture>\n    <section class=\"container-elements\" id=\"container-elements\">\n        <div class=\"row\">\n            <section class=\"location\">\n                <div class=\"row\">\n                    <app-footer-block class=\"locations-container\"></app-footer-block>\n                </div>\n                <hr>\n            </section>\n            <section class=\"newsletter\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <h6>NEWSLETTER</h6>\n                        <ul>\n                            <li>Reciba nuestras ultimas noticias</li>\n                        </ul>\n                    </div>\n                </div>\n                <hr>\n            </section>\n            <section class=\"contac\">\n                <app-footer-contact></app-footer-contact>\n            </section>\n            <section class=\"logo\">\n                <app-footer-brand></app-footer-brand>\n            </section>\n        </div>\n    </section>\n    <section class=\"privacy\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"politics-site\">\n                    <a href=\"#\" class=\"politics\">Politica de Privacidad</a>\n                    <a href=\"#\" class=\"sites\">Mapa del Sitio</a>\n                    <a href=\"#\">PQRS</a>\n                </div>\n            </div>\n        </div>\n    </section>\n</footer>"

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer picture img {\n  position: absolute;\n  height: 466px; }\n  @media (min-width: 1025px) {\n    footer picture img {\n      height: 181px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer picture img {\n      height: 181px; } }\n  @media (min-width: 1025px) {\n  footer {\n    width: 100%; } }\n  @media (min-width: 1025px) {\n  footer .container-elements {\n    width: 100%;\n    display: flex; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n  footer .container-elements {\n    width: 100%;\n    display: flex; } }\n  footer .container-elements .row {\n  margin-right: -15px;\n  width: 100%;\n  justify-content: center;\n  display: flow-root;\n  margin-left: 0; }\n  @media (min-width: 1025px) {\n    footer .container-elements .row {\n      display: flex; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .container-elements .row {\n      display: flex; } }\n  footer .container-elements::after {\n  content: \"\";\n  background-color: #002b49;\n  opacity: 0.83;\n  position: absolute;\n  height: 464px;\n  width: 100%;\n  margin-top: -419px; }\n  @media (min-width: 1025px) {\n    footer .container-elements::after {\n      height: 182px;\n      margin-top: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .container-elements::after {\n      height: 182px;\n      margin-top: 0; } }\n  footer .location {\n  color: #FFFFFF;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n  @media (min-width: 1025px) {\n    footer .location {\n      width: 33%;\n      text-align: left;\n      margin-left: 0%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .location {\n      width: 33%;\n      text-align: left;\n      margin-left: 0%; } }\n  footer .location hr {\n    width: 50%;\n    background-color: #dfdfdf;\n    margin-left: 28%;\n    opacity: 0.3;\n    margin-top: 6px; }\n  @media (min-width: 1025px) {\n      footer .location hr {\n        display: none; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .location hr {\n        display: none; } }\n  footer .location .row {\n    margin-left: 0; }\n  footer .location .row .site {\n      display: none; }\n  @media (min-width: 1025px) {\n        footer .location .row .site {\n          display: block;\n          margin-left: 0;\n          margin-top: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        footer .location .row .site {\n          display: block;\n          margin-left: 0;\n          margin-top: 0; } }\n  footer .location .row .col-lg h6 {\n      margin-left: 25px;\n      margin-top: 33px; }\n  @media (min-width: 1025px) {\n        footer .location .row .col-lg h6 {\n          font-size: 12px;\n          margin-left: 41px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        footer .location .row .col-lg h6 {\n          font-size: 12px;\n          margin-left: 41px; } }\n  footer .location .row .col-lg ul {\n      list-style: none;\n      margin-right: 4%; }\n  footer .location .row .col-lg ul .office {\n        margin-top: 10px; }\n  @media (min-width: 1025px) {\n          footer .location .row .col-lg ul .office {\n            width: 120%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          footer .location .row .col-lg ul .office {\n            width: 120%; } }\n  footer .location .row .col-lg ul .office::before {\n        content: \"\";\n        padding-left: 16px; }\n  footer .location .row .col-lg ul li {\n        color: #c1cbd3;\n        font-size: 12px; }\n  footer .location .row .col-lg ul li a {\n          color: #c1cbd3;\n          margin-left: 1%; }\n  footer .location .row .col-lg ul li a:hover {\n          color: #a6cf24; }\n  @media (min-width: 1025px) {\n          footer .location .row .col-lg ul li {\n            margin-right: 25%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n          footer .location .row .col-lg ul li {\n            margin-right: 25%; } }\n  @media (min-width: 1025px) {\n      footer .location .row .col-lg .addres-phone {\n        margin-right: 37px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .location .row .col-lg .addres-phone {\n        margin-right: 37px; } }\n  footer .location .row .col-lg .addres-phone .addres {\n      width: 125px; }\n  footer .location::before {\n  content: \"\"; }\n  @media (min-width: 1025px) {\n    footer .location::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 37px;\n      margin-left: 7%;\n      opacity: 0.3; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .location::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 37px;\n      margin-left: 185px;\n      opacity: 0.3; } }\n  footer .newsletter {\n  color: #FFFFFF;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n  footer .newsletter hr {\n    width: 50%;\n    background-color: #dfdfdf;\n    margin-left: 28%;\n    opacity: 0.3; }\n  @media (min-width: 1025px) {\n      footer .newsletter hr {\n        display: none; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .newsletter hr {\n        display: none; } }\n  footer .newsletter .row .col-lg-12 a {\n    margin-left: 3%; }\n  footer .newsletter .row .col-lg-12 h6 {\n    margin-left: 7%; }\n  @media (min-width: 1025px) {\n      footer .newsletter .row .col-lg-12 h6 {\n        margin-top: 32px;\n        font-size: 12px;\n        margin-left: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .newsletter .row .col-lg-12 h6 {\n        margin-top: 32px;\n        font-size: 12px;\n        margin-left: 0; } }\n  footer .newsletter .row .col-lg-12 ul {\n    list-style: none;\n    margin-right: 4%; }\n  footer .newsletter .row .col-lg-12 ul li {\n      color: #c1cbd3;\n      font-size: 75%; }\n  @media (min-width: 1025px) {\n        footer .newsletter .row .col-lg-12 ul li {\n          width: 158px;\n          font-size: 11px;\n          margin-left: 13%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        footer .newsletter .row .col-lg-12 ul li {\n          width: 158px;\n          font-size: 11px;\n          margin-left: 13%; } }\n  footer .newsletter::before {\n  content: \"\"; }\n  @media (min-width: 1025px) {\n    footer .newsletter::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 37px;\n      margin-left: -63px;\n      opacity: 0.3; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .newsletter::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 37px;\n      margin-left: -63px;\n      opacity: 0.3; } }\n  footer .contac {\n  color: #FFFFFF;\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n  footer .contac hr {\n    width: 50%;\n    background-color: #dfdfdf;\n    margin-left: 28%;\n    opacity: 0.3;\n    margin-top: 0; }\n  @media (min-width: 1025px) {\n      footer .contac hr {\n        display: none; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .contac hr {\n        display: none; } }\n  footer .contac .row .col-lg-12 a {\n    color: #c1cbd3; }\n  footer .contac .row .col-lg-12 a:hover {\n    color: #a6cf24; }\n  footer .contac .row .col-lg-12 .icon-social {\n    margin-top: -6px;\n    margin-left: 39%; }\n  @media (min-width: 1025px) {\n      footer .contac .row .col-lg-12 .icon-social {\n        margin-left: 29%;\n        width: 100%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .contac .row .col-lg-12 .icon-social {\n        margin-left: 29%;\n        width: 100%; } }\n  footer .contac .row .col-lg-12 .icon-social .fa-twitter,\n    footer .contac .row .col-lg-12 .icon-social .fa-facebook-f,\n    footer .contac .row .col-lg-12 .icon-social .fa-google-plus-g {\n      margin-left: 19px; }\n  footer .contac .row .col-lg-12 .icon-social ul li {\n      font-size: 24px; }\n  @media (min-width: 1025px) {\n        footer .contac .row .col-lg-12 .icon-social ul li {\n          font-size: 21px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        footer .contac .row .col-lg-12 .icon-social ul li {\n          font-size: 21px; } }\n  footer .contac .row .col-lg-12 .icon:hover {\n    color: #a6cf24; }\n  footer .contac .row .col-lg-12 h6 {\n    margin-left: 7%; }\n  @media (min-width: 1025px) {\n      footer .contac .row .col-lg-12 h6 {\n        font-size: 12px;\n        margin-left: 13px;\n        margin-right: 12px; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .contac .row .col-lg-12 h6 {\n        font-size: 12px;\n        margin-left: 13px;\n        margin-right: 12px; } }\n  footer .contac .row .col-lg-12 .mail {\n    margin-left: 12%; }\n  footer .contac .row .col-lg-12 .mail .fa-li {\n      margin-left: 31%;\n      margin-top: 2px; }\n  @media (min-width: 1025px) {\n        footer .contac .row .col-lg-12 .mail .fa-li {\n          margin-left: 0;\n          margin-top: 0; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n        footer .contac .row .col-lg-12 .mail .fa-li {\n          margin-left: 0;\n          margin-top: 0; } }\n  footer .contac .row .col-lg-12 .mail li {\n      font-size: 75%; }\n  @media (min-width: 1025px) {\n      footer .contac .row .col-lg-12 .mail {\n        margin-left: 31%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .contac .row .col-lg-12 .mail {\n        margin-left: 31%; } }\n  @media (min-width: 1025px) {\n    footer .contac {\n      margin-top: 32px;\n      margin-left: 3%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .contac {\n      margin-top: 32px;\n      margin-left: 3%; } }\n  footer .contac::before {\n  content: \"\"; }\n  @media (min-width: 1025px) {\n    footer .contac::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 6px;\n      margin-left: -65px;\n      opacity: 0.3; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .contac::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 6px;\n      margin-left: -65px;\n      opacity: 0.3; } }\n  footer .logo {\n  text-align: center;\n  z-index: 1;\n  position: relative; }\n  footer .logo .row .col-lg-12 a {\n    margin-left: 3%; }\n  footer .logo .row .col-lg-12 h6 {\n    color: #c1cbd3;\n    margin-left: 8%;\n    font-size: 75%;\n    margin-bottom: 25px; }\n  @media (min-width: 1025px) {\n      footer .logo .row .col-lg-12 h6 {\n        margin-top: 6px;\n        width: 97%;\n        font-size: 11px;\n        margin-left: 14%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .logo .row .col-lg-12 h6 {\n        margin-top: 6px;\n        width: 135px;\n        font-size: 11px;\n        margin-left: 3%; } }\n  footer .logo .row .col-lg-12 img {\n    display: none; }\n  @media (min-width: 1025px) {\n      footer .logo .row .col-lg-12 img {\n        margin-left: 15%;\n        display: block; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      footer .logo .row .col-lg-12 img {\n        display: block; } }\n  @media (min-width: 1025px) {\n    footer .logo {\n      margin-top: 32px;\n      margin-left: 4%;\n      width: 11%; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .logo {\n      margin-top: 32px;\n      margin-left: 7%;\n      width: 11%; } }\n  footer .logo::before {\n  content: \"\"; }\n  @media (min-width: 1025px) {\n    footer .logo::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 6px;\n      margin-left: -71px;\n      opacity: 0.3; } }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    footer .logo::before {\n      border-left: 1px solid #c1cbd3;\n      position: absolute;\n      height: 81px;\n      margin-top: 6px;\n      margin-left: -71px;\n      opacity: 0.3; } }\n"

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

module.exports = "<header>\n    <section class=\"logo\">\n        <div class=\"container-logo\">\n            <a routerLink=\"/home\" class=\"image-url\">\n                <img class=\"image-bits blur-logo\" src=\"assets/images/Logowhite.png\" alt=\"BitsAmericas\">\n            </a>\n        </div>\n    </section>\n    <app-navbar></app-navbar>\n</header>"

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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document) {
        this.document = document;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $('.Botton').on('click', function () {
            $('.blur-logo').attr('src', 'assets/images/Logocolor.png');
        });
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        if ($('.image-bits').offset().top > 50) {
            $('.image-bits').attr('src', 'assets/images/Logocolor.png');
            $('.menu-caret').css({ color: '#002b49' });
        }
        else {
            $('.image-bits').attr('src', 'assets/images/Logowhite.png');
            $('.menu-caret').css({ color: '#fff' });
        }
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
            styles: []
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

module.exports = "<ul class=\"menu-tree-level\">\n    <ng-container *ngFor=\"let child of menus; let idx= index\">\n        <li class=\"menu-item-child\" [class.menu-has-children]=\"child.below\">\n            <a [routerLink]=\"['/'+child.uri]\"\n               class=\"link\"> {{ child.title }} </a>\n            <ng-container *ngIf=\"child.below\">\n                <i class=\"fas fa-caret-right menu-caret\"></i>\n                <app-menu-item [menus]=\"child.below\"></app-menu-item>\n            </ng-container>\n            <ng-container *ngIf=\"padre?.image\">\n                <img [src]=\"padre.image\" class=\"submenu-image\" />\n            </ng-container>\n        </li>\n    </ng-container>\n</ul>"

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

var ItemMenuComponent = /** @class */ (function () {
    function ItemMenuComponent() {
    }
    ItemMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            inputs: ['padre', 'menus'],
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

module.exports = "<header>\n    <nav class=\"navbar-expand-lg flex-column flex-md-row  menu-scroll\">\n        <div class=\"menuToggle menu-scroll \">\n            <input type=\"checkbox\" class=\"Botton \"/>\n            <span class=\"lines\"></span>\n            <span class=\"lines\"></span>\n            <span class=\"lines\"></span>\n            <ul class=\"list-menu\">\n                <ng-container *ngFor=\"let nav of NavbarArray; let i= index \">\n                    <li class=\"items\" [class.menu-has-children]=\"nav.below\">\n                        <a #sub [routerLink]=\"['/'+nav.uri]\" (click)=\"activeClass(sub)\" [routerLinkActive]=\"'active'\"\n                           class=\"link\"> {{ nav.title }} </a>\n                        <ng-container *ngIf=\"nav.below\">\n                            <i class=\"fas fa-caret-down menu-caret\"></i>\n                            <app-menu-item [padre]=\"nav\" [menus]=\"nav.below\" *ngIf=\"nav.below\"></app-menu-item>\n                        </ng-container>\n                    </li>\n                </ng-container>\n            </ul>\n        </div>\n    </nav>\n\n</header>"

/***/ }),

/***/ "./src/app/layout/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .inverse-color {\n  background: #ffffff; }\n\nheader .color-white {\n  background: #ffffff; }\n\nheader nav {\n  width: 100%;\n  padding-top: 6%;\n  border-bottom: 1px solid transparent;\n  position: fixed;\n  float: left;\n  font-weight: bold;\n  background: transparent;\n  text-decoration: none;\n  z-index: 1020; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n    header nav {\n      padding-top: 0%;\n      width: 100%;\n      position: fixed; } }\n\n@media (min-width: 1025px) {\n    header nav {\n      float: right;\n      padding-top: 0%;\n      width: 100%;\n      position: fixed;\n      text-align: right; } }\n\nheader nav .menuToggle {\n    display: block;\n    position: relative;\n    width: 100%;\n    z-index: 1; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n      header nav .menuToggle {\n        top: 38px; } }\n\nheader nav .menuToggle .Botton {\n      display: block;\n      width: 22%;\n      height: auto;\n      position: absolute;\n      left: 75%;\n      cursor: pointer;\n      opacity: 0;\n      z-index: 2; }\n\n@media (min-width: 1025px) {\n        header nav .menuToggle .Botton {\n          display: none; } }\n\nheader nav .menuToggle .Botton:checked ~ .lines {\n      opacity: 1;\n      -webkit-transform: rotate(45deg) translate(1px, 0px);\n              transform: rotate(45deg) translate(1px, 0px);\n      background: #0c7ffb; }\n\nheader nav .menuToggle .Botton:checked ~ .lines:nth-last-child(3) {\n      opacity: 0;\n      -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n              transform: rotate(0deg) scale(0.2, 0.2); }\n\nheader nav .menuToggle .Botton:checked ~ .lines:nth-last-child(2) {\n      opacity: 1;\n      -webkit-transform: rotate(-45deg) translate(1px, 2px);\n              transform: rotate(-45deg) translate(1px, 2px); }\n\nheader nav .menuToggle .Botton:checked ~ .list-menu {\n      display: block;\n      -webkit-transform: none;\n              transform: none; }\n\nheader nav .menuToggle .lines {\n      display: block;\n      width: 26px;\n      height: 2.4px;\n      margin-bottom: 5px;\n      margin-left: 81%;\n      position: relative;\n      background: #ffffff;\n      border-radius: 30%;\n      z-index: 1;\n      -webkit-transform-origin: 4px 0px;\n              transform-origin: 4px 0px;\n      transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        header nav .menuToggle .lines {\n          display: none; } }\n\nheader nav .menuToggle .color-scroll {\n      background: #0c7ffb; }\n\nheader nav .menuToggle .lines:first-child {\n      -webkit-transform-origin: 0% 0%;\n              transform-origin: 0% 0%; }\n\nheader nav .menuToggle .lines:nth-last-child(2) {\n      -webkit-transform-origin: 0% 100%;\n              transform-origin: 0% 100%;\n      margin-bottom: 8%; }\n\nheader nav .menuToggle ul {\n      margin-bottom: 0; }\n\nheader nav .menuToggle .list-menu {\n      padding-left: 0%;\n      width: 100%;\n      position: relative;\n      display: none;\n      -webkit-font-smoothing: antialiased;\n      -webkit-transform: translate(0, -100%);\n              transform: translate(0, -100%);\n      transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n@media (min-width: 1025px) {\n        header nav .menuToggle .list-menu {\n          display: flex;\n          justify-content: flex-end;\n          -webkit-transform: initial;\n                  transform: initial;\n          transition-delay: initial; } }\n\nheader nav .menuToggle .list-menu .items {\n        list-style: none;\n        padding-bottom: 7%;\n        padding-top: 7%;\n        padding-left: 12%;\n        border-bottom: 1px solid #f5fafc; }\n\n@media (min-width: 1025px) {\n          header nav .menuToggle .list-menu .items {\n            width: 9%;\n            text-align: center;\n            padding-top: 2%;\n            padding-bottom: 2%;\n            padding-left: 0%;\n            padding-right: 0%;\n            border-bottom: initial;\n            display: inline-block; } }\n\nheader nav .menuToggle .list-menu .items:nth-child(1) {\n          border-top: 1px solid #cfe3ee; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n            header nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\n@media (min-width: 1025px) {\n            header nav .menuToggle .list-menu .items:nth-child(1) {\n              border-top: initial; } }\n\nheader nav .menuToggle .list-menu .items .link {\n          color: #002b49;\n          width: 100%;\n          text-decoration: none;\n          text-align: left;\n          padding-right: 73%;\n          font-size: 15px;\n          font-family: 'Open Sans light';\n          font-weight: 300; }\n\nheader nav .menuToggle .list-menu .items .link:hover {\n            color: #a6cf24;\n            text-decoration: none; }\n\n@media (min-width: 1025px) {\n            header nav .menuToggle .list-menu .items .link {\n              color: #ffffff;\n              padding-left: 12%;\n              padding-right: 15%;\n              padding-top: 20%; } }\n\nheader nav .menuToggle .list-menu .items .link .arrow {\n            padding-left: 59%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              header nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 6%; } }\n\n@media (min-width: 1025px) {\n              header nav .menuToggle .list-menu .items .link .arrow {\n                padding-left: 0%;\n                padding-right: 0%;\n                padding-top: 0%; } }\n\nheader nav .menuToggle .list-menu .items .link .arrow-service {\n            padding-left: 61.2%; }\n\n@media (min-width: 668px) and (max-width: 1024px) {\n              header nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 7.2%; } }\n\n@media (min-width: 1025px) {\n              header nav .menuToggle .list-menu .items .link .arrow-service {\n                padding-left: 0%; } }\n\n@media (min-width: 1025px) {\n          header nav .menuToggle .list-menu .items .active {\n            border-top: 4px solid #a6cf24; } }\n\nheader nav .menuToggle .list-menu .items .scroll-white {\n          color: #002b49;\n          background: white; }\n\nheader nav .menuToggle .list-menu .items .tigger-menu {\n          background: #ffffff;\n          color: #002b49; }\n\nheader nav .menuToggle .list-menu .language {\n        list-style: none; }\n"

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
        this.NavbarArray = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        $('.Botton, .show-more').on('click', function () {
            $('.menu-scroll, .link').toggleClass('tigger-menu scroll-white color-white');
        });
        $(window).scroll(function () {
            if ($('.menu-scroll, .lines, .link').offset().top > 30) {
                $('.menu-scroll, .lines, .link').addClass('inverse-color color-scroll scroll-white');
            }
            else {
                $('.menu-scroll, .lines, .link').removeClass('inverse-color color-scroll scroll-white');
            }
        });
        this.getNavBarItems();
    };
    NavbarComponent.prototype.getNavBarItems = function () {
        var _this = this;
        return this.navbar.getMenuItems().subscribe(function (items) {
            _this.NavbarArray = items;
        });
    };
    NavbarComponent.prototype.activeClass = function (sub) {
        sub.active = !sub.active;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layout/components/navbar/navbar.component.scss")]
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
/* harmony import */ var _cards_components_generator_of_links_generator_of_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cards/components/generator-of-links/generator-of-links.component */ "./src/app/cards/components/generator-of-links/generator-of-links.component.ts");
/* harmony import */ var _cards_components_footer_footer_block_footer_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/components/footer/footer-block/footer-block */ "./src/app/cards/components/footer/footer-block/footer-block.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
            ],
            declarations: [
                _components_item_menu_item_menu_component__WEBPACK_IMPORTED_MODULE_1__["ItemMenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _cards_components_footer_footer_brand_footer_brand_component__WEBPACK_IMPORTED_MODULE_6__["FooterBrandComponent"],
                _cards_components_footer_footer_contact_footer_contact_component__WEBPACK_IMPORTED_MODULE_7__["FooterContactComponent"],
                _cards_components_generator_of_links_generator_of_links_component__WEBPACK_IMPORTED_MODULE_8__["GeneratorOfLinksComponent"],
                _cards_components_footer_footer_block_footer_block__WEBPACK_IMPORTED_MODULE_9__["FooterBlock"],
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

module.exports = "<app-banner></app-banner>\n<app-title></app-title>\n<app-tabs></app-tabs>\n<br/>\n<br/>\n<!--TODO: SE DEBEN IMPLEMENTAR LOS ESTILOS, VALIDACIONES-->\n<form *ngIf=\"loaded\" [formGroup]=\"formGroup\">\n    <dynamic-basic-form [group]=\"formGroup\" [model]=\"formModel\">\n        <ng-template modelId=\"contact_us--terms_of_service\" let-terms=\"terms\">\n            {{terms}}\n            <!-- TODO: PONER FUNCIONALIDAD PARA MOSTRAR TERMINOS Y CONDICIONES -->\n        </ng-template>\n    </dynamic-basic-form>\n    <button (click)=\"submitForm()\">ENVIAR</button>\n</form>\n<br/>\n<br/>\n<app-locations></app-locations>"

/***/ }),

/***/ "./src/app/main/pages/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/pages/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forms .item-comid {\n  max-width: 100%; }\n  .forms .item-comid .description {\n    display: -ms-grid;\n    display: grid;\n    margin-left: auto;\n    margin-right: auto;\n    width: 92%;\n    margin-top: 19px;\n    color: #bcdb5b; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n      .forms .item-comid .description {\n        margin-left: 44px; } }\n  @media (min-width: 1025px) {\n      .forms .item-comid .description {\n        width: 77%; } }\n  .forms .item-comid .description #style1 {\n      padding: 10px 20px;\n      border: 1px solid #b2c6cd;\n      color: #002b49; }\n  .forms .position {\n  margin-left: auto;\n  margin-right: 17px;\n  width: 92%; }\n  @media (min-width: 1025px) {\n    .forms .position {\n      margin-left: auto;\n      margin-right: auto;\n      width: 80%;\n      margin-top: 25px; } }\n  .forms .contenido {\n  display: -ms-grid;\n  display: grid; }\n  @media (min-width: 1025px) {\n    .forms .contenido {\n      margin-right: 25px;\n      margin-left: 15px; } }\n  .forms .contenido label {\n    color: #c0dc74;\n    margin-top: 20px;\n    margin-bottom: -1px; }\n  .forms .contenido #style {\n    width: 100%;\n    padding: 4px 2px;\n    outline: none;\n    border: none;\n    border-bottom: 1px solid #b2c6cd;\n    color: #002b49; }\n  .forms .name {\n  color: #c0dc74;\n  margin-top: 20px;\n  margin-bottom: -1px; }\n  @media (min-width: 1025px) {\n    .forms .name {\n      margin-left: 15px; } }\n  .forms .document {\n  display: block; }\n  @media (min-width: 1025px) {\n    .forms .document {\n      margin-right: 25px;\n      margin-left: 15px; } }\n  .forms .document #adjunto {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n  .forms .adjun-image {\n  background-image: url(\"/assets/images/adjunto.png\");\n  width: 45px;\n  height: 45px;\n  display: block;\n  background-size: contain;\n  margin-left: 87%;\n  margin-top: -20px;\n  cursor: pointer; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .forms .adjun-image {\n      margin-left: 86%; } }\n  @media (min-width: 1025px) {\n    .forms .adjun-image {\n      margin-left: 90%; } }\n  .forms .contenido-adjunto {\n  margin-top: -26px;\n  display: block;\n  width: 100%;\n  padding: 4px 2px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #b2c6cd;\n  color: #002b49;\n  cursor: pointer; }\n  p {\n  margin-top: 57px;\n  color: #002b49;\n  text-align: center;\n  margin-left: 11px; }\n  @media (min-width: 1025px) {\n    p {\n      margin-left: auto; } }\n  p a {\n    color: #bcdb5b;\n    text-decoration: underline;\n    margin-left: 3px; }\n  .container {\n  display: block;\n  cursor: pointer;\n  max-width: 42%;\n  padding-left: 0px;\n  margin-left: 0px;\n  margin-left: 11px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .container {\n      margin-left: 177px; } }\n  @media (min-width: 1025px) {\n    .container {\n      margin-left: 471px; } }\n  .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n  .checkmark {\n  position: absolute;\n  top: -2px;\n  height: 24px;\n  width: 24px;\n  background-color: #fff;\n  background-image: url(\"/assets/images/check.png\"); }\n  .container input:checked ~ .checkmark {\n  background-image: url(\"/assets/images/check2.png\"); }\n  .container .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid blanck;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n  /* Popup container - can be anything you want */\n  .popup {\n  position: relative;\n  cursor: pointer;\n  background-image: url(\"/assets/images/question.png\");\n  background-size: contain;\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin-left: 93%;\n  margin-top: -31px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .popup {\n      margin-left: 73%; } }\n  @media (min-width: 1025px) {\n    .popup {\n      margin-left: 821px; } }\n  /* The actual popup */\n  .popup .popuptext {\n  visibility: hidden;\n  width: 365px;\n  background-color: #e5e9ec;\n  color: #002b49;\n  text-align: center;\n  border-radius: 6px;\n  padding: 8px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 227%;\n  margin-left: -351px; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .popup .popuptext {\n      width: 781px;\n      margin-left: -535px; } }\n  @media (min-width: 1025px) {\n    .popup .popuptext {\n      width: 1231px;\n      margin-left: -766px;\n      margin-bottom: 5px; } }\n  /* Popup arrow */\n  .popup .popuptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 97.4%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #e5e9ec transparent transparent transparent; }\n  @media (min-width: 668px) and (max-width: 1024px) {\n    .popup .popuptext::after {\n      left: 69.4%; } }\n  @media (min-width: 1025px) {\n    .popup .popuptext::after {\n      left: 62.6%; } }\n  /* Toggle this class - hide and show the popup */\n  .popup .show {\n  visibility: visible;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s; }\n  /* Add animation (fade in the popup) */\n  @-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  .button {\n  padding: 13px 37px;\n  background-color: #a6cf24 !important;\n  border: none;\n  color: white !important;\n  margin: 33px 108px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 48px;\n  width: 137px;\n  text-align: center;\n  -webkit-appearance: none;\n  text-align: center;\n  opacity: 0.8; }\n  .dato-button {\n  text-align: center;\n  color: #002b49;\n  margin-top: 20px; }\n  .dato-button strong {\n    color: #bcdb5b; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
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




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(router, _http, formService, _cd) {
        this.router = router;
        this._http = _http;
        this.formService = formService;
        this._cd = _cd;
        this._subscription = router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true); //En caso de venir un fragmen, hacer scroll al elemento.
                    }
                }
            }
        });
        this._json = [];
        this.loaded = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Obtiene el token apropiado para el contexto actual
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
        //Obtiene la información de los fields del Webform
        this._http.get('webform_rest/contact_us/fields?_format=json').subscribe(function (response) {
            _this.createJson(response);
            _this.formModel = _this.formService.fromJSON(_this._json);
            _this.formGroup = _this.formService.createFormGroup(_this.formModel);
            _this.loaded = true;
            _this._cd.detectChanges(); //Sino, da error de Angular, ver: https://www.sitepoint.com/change-detection-angular/
        });
    };
    ContactUsComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ContactUsComponent.prototype.submitForm = function () {
        if (!this.formGroup.valid)
            return false;
        var json = {
            'webform_id': 'contact_us'
        };
        for (var key in this.formModel) {
            var field = this.formModel[key];
            var field_name = field.id.replace('contact_us--', '');
            json[field_name] = field.value;
        }
        this._http.post('webform_rest/submit?_format=json', json, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        }).subscribe(function (response) {
            //response trae el submission id, o json de error si es el caso
        });
        console.log('SUBMIT: ', json);
        return false;
    };
    /***
     * Convierte el json a un objeto que pueda interpretarse apropiadamente por DynamicForms
     * @param json
     */
    ContactUsComponent.prototype.createJson = function (json) {
        for (var attr in json) {
            if (!attr.startsWith('#')) {
                var item = json[attr];
                if (item['#type'] === 'webform_flexbox') {
                    this.eachFlexBox(item);
                }
                else {
                    this.processField(item);
                }
            }
        }
    };
    /***
     * Recorre un contenedor "flexbox"
     * @param data
     */
    ContactUsComponent.prototype.eachFlexBox = function (data) {
        for (var attr in data) {
            if (!attr.startsWith('#')) {
                var item = data[attr];
                if (item['#type'] !== 'webform-flexbox') {
                    this.processField(item);
                }
            }
        }
    };
    /***
     * Crea un objeto a partir del field
     * @param data
     */
    ContactUsComponent.prototype.processField = function (data) {
        var obj = {
            'type': this.getType(data['#type']),
            'id': data['#webform_id'],
            'label': data['#title'],
            'placeholder': data['#placeholder'] || '',
            'required': data['#required'] || false,
            errorMessages: {
                required: "{{ label }} es obligatorio."
            }
        };
        if (data['#type'] === 'webform_terms_of_service') {
            obj['terms'] = data['#terms_content'];
        }
        if (['SELECT'].indexOf(obj['type']) > -1) {
            obj['options'] = [];
            for (var label in data['#options']) {
                obj['options'].push({ 'label': label, value: data['#options'][label] });
            }
        }
        this._json.push(obj);
    };
    /***
     * Devuelve el tipo apropiado para usar en DynamicForms
     * @param drupalType
     */
    ContactUsComponent.prototype.getType = function (drupalType) {
        switch (drupalType) {
            case 'textarea':
            case 'select':
                return drupalType.toUpperCase();
            case 'webform_autocomplete':
                return 'SELECT';
            case 'webform_terms_of_service':
                return 'CHECKBOX';
            default:
                return 'INPUT';
        }
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/main/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/main/pages/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_2__["DynamicFormService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
                _ng_dynamic_forms_ui_basic__WEBPACK_IMPORTED_MODULE_18__["DynamicFormsBasicUIModule"]
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








var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
            { path: '**', component: _no_page_found_no_page_found_component__WEBPACK_IMPORTED_MODULE_3__["NoPageFoundComponent"] },
        ]
    }
];
var PagesRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(pagesRoutes);


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
    }
    CustomCardService.prototype.getCustomCardInformation = function (idblock) {
        var url = "v1/card/config/" + idblock + "/export?_format=json";
        return this.http.get(url);
    };
    CustomCardService.prototype.getFooterContactItems = function () {
        return this.http.get('v1/card/contact/export/custom?_format=json&bid=contactcard');
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        _this.subscriber = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return _this.errorHandler(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            return _this.errorHandler(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
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
            var error = this.convertObjectError(errorParam);
            this.toastr.error(error.message, error.label, this.toastOptions);
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

module.exports = __webpack_require__(/*! /Users/bits/Sites/webSiteBitsD8/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map