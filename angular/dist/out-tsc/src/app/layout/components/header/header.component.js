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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
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
        core_1.HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styles: []
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map