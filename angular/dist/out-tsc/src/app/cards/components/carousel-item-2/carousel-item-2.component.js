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
        core_1.Component({
            selector: 'app-carousel-item-2',
            templateUrl: './carousel-item-2.component.html',
            styleUrls: ['./carousel-item-2.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            content_type_services_1.ContentType])
    ], CarouselItem2Component);
    return CarouselItem2Component;
}());
exports.CarouselItem2Component = CarouselItem2Component;
//# sourceMappingURL=carousel-item-2.component.js.map