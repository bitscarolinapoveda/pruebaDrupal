"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var base_service_1 = require("../base/base.service");
var notification_service_1 = require("../shared/notification.service");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(_http, _notificationService) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this._notificationService = _notificationService;
        _this._in = 0;
        _this._out = 0;
        _this.allLoaded = false;
        _this.targetPorcentaje = 100;
        _this.subscriber = new rxjs_1.Subject();
        _this.header = new http_1.HttpHeaders({});
        return _this;
    }
    /***
     * @param url
     * @param header
     * @param options
     */
    HttpService.prototype.get = function (url, header, options) {
        var _this = this;
        var objH = {};
        for (var key in header) {
            objH[key] = header[key].toString();
        }
        var headers = new http_1.HttpHeaders(objH);
        var _options = {
            headers: headers
        };
        for (var key in options) {
            _options[key] = options[key].toString();
        }
        var _get = this._http.get(this.baseUrl + url, _options)
            .pipe(operators_1.map(function (response) {
            return response;
        }), operators_1.catchError(function (err) {
            return _this.errorHandler(err);
        }), operators_1.share());
        this.addIn(_get);
        return _get;
    };
    HttpService.prototype.post = function (url, body, headers) {
        var _this = this;
        var objH = {};
        for (var key in headers) {
            objH[key] = headers[key].toString();
        }
        var _headers = new http_1.HttpHeaders(objH);
        var _post = this._http.post(this.baseUrl + url, body, { headers: _headers })
            .pipe(operators_1.map(function (response) {
            return response;
        }), operators_1.catchError(function (err) {
            return _this.errorHandler(err);
        }), operators_1.share());
        return _post;
    };
    // Para el manejo de errores se debe manejar la estructura {code,message}
    HttpService.prototype.errorHandler = function (err) {
        var error = JSON.parse(JSON.stringify(err));
        var errorParam = {
            code: error.status,
            message: error.message
        };
        this._notificationService.error(errorParam);
        return Observable_1.Observable.throw(err);
    };
    /***
     * Restablece los valores para iniciar una nueva carga
     */
    HttpService.prototype.resetLoader = function () {
        this._in = 0;
        this._out = 0;
        this.allLoaded = false;
    };
    /***
     * Genera una "suscripción" para llamar al método de acumulación de "out's"
     * @param get
     */
    HttpService.prototype.addIn = function (get) {
        var _this = this;
        get.subscribe(function (event) {
            _this.addOut();
        }, function (error) {
            _this.addOut();
        });
        this._in++; //Sumar una petición
    };
    /***
     * Agrega un "out" y llama al método checkLoad()
     */
    HttpService.prototype.addOut = function () {
        this._out++; //Sumar una petición completada
        this.checkLoad(); //Verificar avance
    };
    /***
     * Verifica (comparando los "in's" y "out's") si ya se cumplió el "targetPorcentaje"
     */
    HttpService.prototype.checkLoad = function () {
        if (!this.allLoaded) {
            if (this._in === 0)
                return;
            var porc = (this._out * 100) / this._in;
            console.log(parseInt(porc.toString()) + '% loaded : get requests');
            if (porc >= this.targetPorcentaje) {
                this.allLoaded = true;
                this.subscriber.next(); //Notifica a los "suscriptores"
            }
        }
    };
    HttpService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            notification_service_1.NotificationService])
    ], HttpService);
    return HttpService;
}(base_service_1.BaseService));
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map