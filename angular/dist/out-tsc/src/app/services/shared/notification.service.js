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
var ngx_toastr_1 = require("ngx-toastr");
var notification_messages_1 = require("./notification.messages");
var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
        this.toastOptions = {
            dismiss: 'click',
            showCloseButton: true,
            animate: 'flyRight',
            progressBar: 'true'
        };
    }
    NotificationService.prototype.error = function (errorParam) {
        if (typeof errorParam === 'string') {
            this.toastr.error(errorParam, 'Error', this.toastOptions);
        }
        else {
            var error = this.convertObjectError(errorParam);
            this.toastr.error(error.message, error.label, this.toastOptions);
        }
    };
    NotificationService.prototype.success = function (messageParam) {
        this.toastr.error(messageParam, 'Success', this.toastOptions);
    };
    NotificationService.prototype.warnig = function (messageParam) {
        this.toastr.error(messageParam, 'warning', this.toastOptions);
    };
    NotificationService.prototype.convertObjectError = function (error) {
        return notification_messages_1.statusCodes.find(function (x) { return x.code === error.code; });
    };
    NotificationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map