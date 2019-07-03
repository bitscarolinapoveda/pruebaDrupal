"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var pages_routes_1 = require("./pages.routes");
var layout_module_1 = require("../../layout/layout.module");
var adf_module_1 = require("../../@adf/adf.module");
var cards_module_1 = require("../../cards/cards.module");
var common_1 = require("@angular/common");
var pages_component_1 = require("./pages.component");
var home_component_1 = require("./home/home.component");
var no_page_found_component_1 = require("./no-page-found/no-page-found.component");
var product_services_component_1 = require("../../cards/components/product-services/product-services.component");
var float_social_component_1 = require("../../cards/components/float-social/float-social.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var projects_component_1 = require("./projects/projects.component");
var products_component_1 = require("./products/products.component");
var services_component_1 = require("./services/services.component");
var http_service_1 = require("../../services/http/http.service");
var core_2 = require("@ng-dynamic-forms/core");
var ui_basic_1 = require("@ng-dynamic-forms/ui-basic");
var forms_1 = require("@angular/forms");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                pages_component_1.PagesComponent,
                home_component_1.HomeComponent,
                contact_us_component_1.ContactUsComponent,
                projects_component_1.ProjectsComponent,
                products_component_1.ProductsComponent,
                services_component_1.ServicesComponent,
                no_page_found_component_1.NoPageFoundComponent,
                product_services_component_1.ProductServicesComponent,
                float_social_component_1.FloatSocialComponent,
            ],
            exports: [
                home_component_1.HomeComponent,
                no_page_found_component_1.NoPageFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                layout_module_1.LayoutModule,
                adf_module_1.AdfModule,
                cards_module_1.CardsModule,
                pages_routes_1.PagesRoutes,
                forms_1.ReactiveFormsModule,
                core_2.DynamicFormsCoreModule,
                ui_basic_1.DynamicFormsBasicUIModule
            ],
            providers: [
                http_service_1.HttpService,
                { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map