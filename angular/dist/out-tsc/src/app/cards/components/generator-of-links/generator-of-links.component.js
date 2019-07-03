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
var v1_card_services_1 = require("../../../services/cards/v1-card.services");
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
        core_1.Component({
            selector: 'app-generator-link',
            templateUrl: './generator-of-links.component.html',
            styleUrls: ['./generator-of-links.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], GeneratorOfLinksComponent);
    return GeneratorOfLinksComponent;
}());
exports.GeneratorOfLinksComponent = GeneratorOfLinksComponent;
//# sourceMappingURL=generator-of-links.component.js.map