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
var navbar_service_1 = require("../../../services/layout/navbar.service");
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
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, navbar_service_1.NavbarService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map