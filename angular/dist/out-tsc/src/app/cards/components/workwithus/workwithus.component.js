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
        core_1.Component({
            selector: 'app-workwithus',
            templateUrl: './workwithus.html',
            styleUrls: ['./workwithus.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], WorkWithUsComponent);
    return WorkWithUsComponent;
}());
exports.WorkWithUsComponent = WorkWithUsComponent;
//# sourceMappingURL=workwithus.component.js.map