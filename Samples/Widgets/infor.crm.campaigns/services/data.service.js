var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular", "lime"], function (require, exports, core_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService(messageService) {
            this.messageService = messageService;
            this.tenant = "CRMCE";
            this.mongooseConfigUrl = "/CRMCE/IDORequestService/MGRestService.svc/json/configurations?configgroup";
        }
        DataService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        DataService.prototype.getMongooseConfig = function () {
            var _this = this;
            var configGroup = null;
            var tenantId = this.widgetContext.getTenantId();
            if (typeof tenantId === "string" && tenantId.length > 0 && tenantId.indexOf("_") >= 0) {
                var split = tenantId.split("_");
                var customerId = split[0];
                var env = split[1];
                configGroup = customerId + "_CRM_" + env;
            }
            var request = this.createRequest(this.mongooseConfigUrl + "=" + configGroup);
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                _this.mongooseConfig = response.data;
            }, function (error) { return _this.showErrorResponse(error); });
        };
        DataService.prototype.showErrorResponse = function (error) {
            lime_1.Log.error("ION API Error: " + JSON.stringify(error));
            this.messageService.error({
                title: "Error " + error.status,
                message: "Failed to call ION API",
                buttons: [{
                        text: "Close",
                        isDefault: true
                    }]
            }).open();
        };
        DataService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "X-Infor-MongooseConfig": this.mongooseConfig
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "GET",
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        DataService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoMessageService])
        ], DataService);
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=data.service.js.map