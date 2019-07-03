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
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
// Modulos
var adf_module_1 = require("./@adf/adf.module");
var pages_module_1 = require("./main/pages/pages.module");
// Rutas
var app_routes_1 = require("./app.routes");
// Componentes
var app_component_1 = require("./app.component");
// Material
var animations_1 = require("@angular/platform-browser/animations");
// Notificaciones
var ngx_toastr_1 = require("ngx-toastr");
var notification_service_1 = require("./services/shared/notification.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule,
                adf_module_1.AdfModule,
                pages_module_1.PagesModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                app_routes_1.APP_ROUTES
            ],
            providers: [
                notification_service_1.NotificationService,
                { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map