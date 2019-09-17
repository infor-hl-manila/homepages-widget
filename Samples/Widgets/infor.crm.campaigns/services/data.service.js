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
            this.dataCampaignReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code";
            this.dataCampaignStageReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStage";
            this.dataCampaignStepReqUrl = "IDORequestService/MGRestService.svc/json/CRMCampaignStep";
        }
        DataService.prototype.init = function (widgetContext) {
            this.widgetContext = widgetContext;
        };
        DataService.prototype.getMongooseConfig = function () {
            var _this = this;
            // let configGroup: string = null;
            var tenantId = "CRMCEQA30_AX1"; //will change to dynamic once we deploy to ADE this.widgetContext.getTenantId();
            // const tenantID = this.widgetContext.getTenantId();
            if (typeof tenantId === "string" && tenantId.length > 0 && tenantId.indexOf("_") >= 0) {
                var split = tenantId.split("_");
                var customerId = split[0];
                var env = split[1];
                this.configGroup = customerId + "_CRM_" + env + "_DEFAULT";
            }
            var mongooseConfigUrl = "IDORequestService/MGRestService.svc/json/configurations?configgroup=" + tenantId;
            var request = this.createRequest(encodeURI(mongooseConfigUrl));
            this.widgetContext.executeIonApiAsync(request).subscribe(function (response) {
                _this.mongooseConfig = response.data[0];
            }, function (error) {
                // this.showErrorResponse(error);
            });
        };
        DataService.prototype.getCampaigns = function (dataUrl) {
            var request = this.createRequest(encodeURI(this.dataCampaignReqUrl) + "&filter=DerIsManagedByCurrentUser = N'1'&orderby=StartDate DESC");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getCampaign = function (ID) {
            var request = this.createRequest(encodeURI(this.dataCampaignReqUrl) + "&filter=ID='" + ID + "'");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getCampaignStages = function () {
            var request = this.createRequest(encodeURI(this.dataCampaignStageReqUrl) + "/adv?props=ID,CampaignID,Description,Status,DerCampaignTaskCount,StartDate,EndDate,Type");
            return this.widgetContext.executeIonApiAsync(request);
        };
        DataService.prototype.getCampaignSteps = function () {
            var request = this.createRequest(encodeURI(this.dataCampaignStepReqUrl) + "/adv?props=ID,CampaignID,Description,Status,DueDate,DateAssigned,CampaignStageID,PercentComplete,Priority,StepType");
            return this.widgetContext.executeIonApiAsync(request);
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
                    "X-Infor-MongooseConfig": this.configGroup,
                    "X-Infor-MongooseSessionType": "CustomUser"
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