"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loading_component_1 = require("src/app/@adf/components/shared/loading/loading.component");
var locations_component_1 = require("./components/shared/locations/locations.component");
var common_1 = require("@angular/common");
var core_2 = require("@agm/core");
var AdfModule = /** @class */ (function () {
    function AdfModule() {
    }
    AdfModule = __decorate([
        core_1.NgModule({
            declarations: [
                loading_component_1.LoadingComponent,
                locations_component_1.LocationsComponent
            ],
            exports: [
                loading_component_1.LoadingComponent,
                locations_component_1.LocationsComponent
            ],
            imports: [
                common_1.CommonModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDw-dMpMZremi-1F3rIlzEuzrPgX9bojjM'
                })
            ]
        })
    ], AdfModule);
    return AdfModule;
}());
exports.AdfModule = AdfModule;
//# sourceMappingURL=adf.module.js.map