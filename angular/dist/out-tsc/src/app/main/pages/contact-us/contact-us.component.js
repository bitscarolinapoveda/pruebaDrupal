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
var core_2 = require("@ng-dynamic-forms/core");
var http_service_1 = require("../../../services/http/http.service");
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(router, _http, formService, _cd) {
        this.router = router;
        this._http = _http;
        this.formService = formService;
        this._cd = _cd;
        this._subscription = router.events.subscribe(function (s) {
            if (s instanceof router_1.NavigationEnd) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true); //En caso de venir un fragmen, hacer scroll al elemento.
                    }
                }
            }
        });
        this._json = [];
        this.loaded = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Obtiene el token apropiado para el contexto actual
        this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe(function (response) {
            _this._token = response;
        });
        //Obtiene la información de los fields del Webform
        this._http.get('webform_rest/contact_us/fields?_format=json').subscribe(function (response) {
            _this.createJson(response);
            _this.formModel = _this.formService.fromJSON(_this._json);
            _this.formGroup = _this.formService.createFormGroup(_this.formModel);
            _this.loaded = true;
            _this._cd.detectChanges(); //Sino, da error de Angular, ver: https://www.sitepoint.com/change-detection-angular/
        });
    };
    ContactUsComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ContactUsComponent.prototype.submitForm = function () {
        if (!this.formGroup.valid)
            return false;
        var json = {
            'webform_id': 'contact_us'
        };
        for (var key in this.formModel) {
            var field = this.formModel[key];
            var field_name = field.id.replace('contact_us--', '');
            json[field_name] = field.value;
        }
        this._http.post('webform_rest/submit?_format=json', json, {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this._token
        }).subscribe(function (response) {
            //response trae el submission id, o json de error si es el caso
        });
        console.log('SUBMIT: ', json);
        return false;
    };
    /***
     * Convierte el json a un objeto que pueda interpretarse apropiadamente por DynamicForms
     * @param json
     */
    ContactUsComponent.prototype.createJson = function (json) {
        for (var attr in json) {
            if (!attr.startsWith('#')) {
                var item = json[attr];
                if (item['#type'] === 'webform_flexbox') {
                    this.eachFlexBox(item);
                }
                else {
                    this.processField(item);
                }
            }
        }
    };
    /***
     * Recorre un contenedor "flexbox"
     * @param data
     */
    ContactUsComponent.prototype.eachFlexBox = function (data) {
        for (var attr in data) {
            if (!attr.startsWith('#')) {
                var item = data[attr];
                if (item['#type'] !== 'webform-flexbox') {
                    this.processField(item);
                }
            }
        }
    };
    /***
     * Crea un objeto a partir del field
     * @param data
     */
    ContactUsComponent.prototype.processField = function (data) {
        var obj = {
            'type': this.getType(data['#type']),
            'id': data['#webform_id'],
            'label': data['#title'],
            'placeholder': data['#placeholder'] || '',
            'required': data['#required'] || false,
            errorMessages: {
                required: "{{ label }} es obligatorio."
            }
        };
        if (data['#type'] === 'webform_terms_of_service') {
            obj['terms'] = data['#terms_content'];
        }
        if (['SELECT'].indexOf(obj['type']) > -1) {
            obj['options'] = [];
            for (var label in data['#options']) {
                obj['options'].push({ 'label': label, value: data['#options'][label] });
            }
        }
        this._json.push(obj);
    };
    /***
     * Devuelve el tipo apropiado para usar en DynamicForms
     * @param drupalType
     */
    ContactUsComponent.prototype.getType = function (drupalType) {
        switch (drupalType) {
            case 'textarea':
            case 'select':
                return drupalType.toUpperCase();
            case 'webform_autocomplete':
                return 'SELECT';
            case 'webform_terms_of_service':
                return 'CHECKBOX';
            default:
                return 'INPUT';
        }
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            http_service_1.HttpService,
            core_2.DynamicFormService,
            core_1.ChangeDetectorRef])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map