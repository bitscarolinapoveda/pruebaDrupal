"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("../../../node_modules/@angular/common");
var carousel_item_component_1 = require("./components/carousel-item/carousel-item.component");
var carousel_indicators_component_1 = require("./components/carousel-indicators/carousel-indicators.component");
var tecnologies_component_1 = require("./components/tecnologies/tecnologies.component");
var porque_bits_component_1 = require("./components/porque-bits/porque-bits.component");
var carousel_item_2_component_1 = require("./components/carousel-item-2/carousel-item-2.component");
var alliances_component_1 = require("./components/alliances/alliances.component");
var carousel_controls_component_1 = require("./components/carousel-controls/carousel-controls.component");
var workwithus_component_1 = require("./components/workwithus/workwithus.component");
var banner_component_1 = require("./components/banner/banner.component");
var titles_component_1 = require("./components/titles/titles.component");
var tabs_component_1 = require("./components/tabs/tabs.component");
// Servicios
var node_service_1 = require("../services/cards/node.service");
var router_1 = require("@angular/router");
var adf_module_1 = require("../@adf/adf.module");
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = __decorate([
        core_1.NgModule({
            declarations: [
                carousel_item_component_1.CarouselItemComponent,
                carousel_indicators_component_1.CarouselIndicatorsComponent,
                carousel_controls_component_1.CarouselControlsComponent,
                carousel_item_2_component_1.CarouselItem2Component,
                tecnologies_component_1.TecnologiesComponent,
                porque_bits_component_1.PorqueBitsComponent,
                alliances_component_1.AlliancesComponent,
                workwithus_component_1.WorkWithUsComponent,
                banner_component_1.BannerComponent,
                titles_component_1.TitleComponent,
                tabs_component_1.TabsComponent
            ],
            exports: [
                carousel_indicators_component_1.CarouselIndicatorsComponent,
                carousel_controls_component_1.CarouselControlsComponent,
                carousel_item_2_component_1.CarouselItem2Component,
                tecnologies_component_1.TecnologiesComponent,
                porque_bits_component_1.PorqueBitsComponent,
                alliances_component_1.AlliancesComponent,
                workwithus_component_1.WorkWithUsComponent,
                banner_component_1.BannerComponent,
                titles_component_1.TitleComponent,
                tabs_component_1.TabsComponent
            ],
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, ng_bootstrap_1.NgbModule, router_1.RouterModule, adf_module_1.AdfModule],
            providers: [node_service_1.NodeService]
        })
    ], CardsModule);
    return CardsModule;
}());
exports.CardsModule = CardsModule;
//# sourceMappingURL=cards.module.js.map