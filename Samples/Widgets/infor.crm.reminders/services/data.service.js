var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataService = /** @class */ (function () {
        function DataService() {
            this.endpointUrl = "v1/activities";
            this.picklistEndpoint = "v1/picklists";
            this.mongooseConfigUrl = "v1/mongoose/configurations";
            this.activityResultsCode = "Activity Result Codes";
            this.tenant = "CRMCE";
        }
        DataService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        DataService.prototype.getActivities = function () {
            var request = this.createRequest(this.endpointUrl + "?filter=Result=null");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getActivity = function (ID, resource) {
            var requestUrl = resource ? this.endpointUrl + "/" + ID + "/" + resource : this.endpointUrl + "/" + ID;
            var request = this.createRequest(requestUrl);
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getPickLists = function (Type) {
            var request = this.createRequest(this.picklistEndpoint + "/" + this.activityResultsCode + "?filter=Category='" + Type + "'&fields=Display,Value");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.createActivityNotes = function (RowPointer, newActivityNotes) {
            var request = this.postRequest(this.endpointUrl + "/" + RowPointer + "/notes", newActivityNotes);
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getMongooseConfig = function () {
            var _this = this;
            var request = this.createRequest("" + this.mongooseConfigUrl);
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                _this.mongooseConfig = response.data;
            });
        };
        DataService.prototype.updateActivity = function (ID, data) {
            var request = this.updateRequest(this.endpointUrl + "/" + ID, data);
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.updateRequest = function (relativeUrl, data, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Infor-MongooseConfig": this.mongooseConfig[0]
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "PUT",
                data: data,
                url: url,
                cache: false,
                headers: headers
            };
            return request;
        };
        DataService.prototype.postRequest = function (relativeUrl, data, headers) {
            if (!headers) {
                headers = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Infor-MongooseConfig": "CRMCEQA10_CRM_DEM_DEFAULT"
                };
            }
            var url = this.tenant + "/" + relativeUrl;
            var request = {
                method: "POST",
                url: url,
                cache: false,
                headers: headers,
                data: data
            };
            return request;
        };
        DataService.prototype.createRequest = function (relativeUrl, headers) {
            if (!headers) {
                headers = { Accept: "application/json" };
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
            })
        ], DataService);
        return DataService;
    }());
    exports.DataService = DataService;
});
//# sourceMappingURL=data.service.js.map