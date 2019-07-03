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
var http_service_1 = require("../../../../services/http/http.service");
var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(_http) {
        this._http = _http;
        this.locations_data = [];
        //Coordenadas de Bogotá
        this.lat = 4.6097102;
        this.lng = -74.081749;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Se conecta direcamente con el módulo adf_location en Drupal
        this._http.get('location-resources').subscribe(function (items) {
            _this.locations_data = items;
        });
    };
    LocationsComponent.prototype.mapReady = function (map) {
        this.map = map;
    };
    /***
     * Al hacer click en una ubicación, la "centra" en el mapa
     * @param lat
     * @param lng
     */
    LocationsComponent.prototype.setCenter = function (lat, lng) {
        var pos = { lat: parseFloat(lat), lng: parseFloat(lng) };
        this.map.setCenter(pos);
        this.map.setZoom(15);
    };
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'app-locations',
            templateUrl: './locations.component.html',
            styleUrls: ['./locations.component.css']
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
//# sourceMappingURL=locations.component.js.map