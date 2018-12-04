"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_menu_component_1 = require("./components/item_menu/item_menu.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var common_1 = require("../../../node_modules/@angular/common");
var footer_brand_component_1 = require("../cards/components/footer/footer-brand/footer-brand.component");
var footer_contact_component_1 = require("../cards/components/footer/footer-contact/footer-contact.component");
var generator_of_links_component_1 = require("../cards/components/generator-of-links/generator-of-links.component");
var footer_block_1 = require("../cards/components/footer/footer-block/footer-block");
var router_1 = require("@angular/router");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [
                item_menu_component_1.ItemMenuComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                footer_brand_component_1.FooterBrandComponent,
                footer_contact_component_1.FooterContactComponent,
                generator_of_links_component_1.GeneratorOfLinksComponent,
                footer_block_1.FooterBlock,
            ],
            exports: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map