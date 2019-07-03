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
var content_type_services_1 = require("../../../services/cards/content-type.services");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
        core_1.Component({
            selector: 'app-product-services',
            templateUrl: './product-services.component.html',
            styleUrls: ['./product-services.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            content_type_services_1.ContentType])
    ], ProductServicesComponent);
    return ProductServicesComponent;
}());
exports.ProductServicesComponent = ProductServicesComponent;
//# sourceMappingURL=product-services.component.js.map