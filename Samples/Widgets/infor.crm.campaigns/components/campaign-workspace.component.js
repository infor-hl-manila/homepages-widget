var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular", "lime", "../services/campaign-workspace.service", "../services/data.service"], function (require, exports, core_1, sohoxi_angular_1, lime_1, campaign_workspace_service_1, data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignWorkspaceComponent = /** @class */ (function () {
        function CampaignWorkspaceComponent(dataService, dialogService, campaignWorkspaceService) {
            this.dataService = dataService;
            this.dialogService = dialogService;
            this.campaignWorkspaceService = campaignWorkspaceService;
            this.itemName = "Items"; // Object name of item list
        }
        CampaignWorkspaceComponent.prototype.ngOnInit = function () {
            this.busyIndicator.activated = true;
            this.loadCampaign();
            console.log("this ->", this);
        };
        CampaignWorkspaceComponent.prototype.launchWebAppClicked = function () {
            var form = encodeURIComponent("CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))");
            var url = "?LogicalId={logicalId}&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
        };
        CampaignWorkspaceComponent.prototype.dataCollection = function () {
            var _this = this;
            this.container = [];
            var container = [];
            var parent = this.dataSet;
            var childStage = this.dataSetChildStage;
            var childStep = this.dataSetChildStep;
            // console.log("parent", parent);
            if (parent && childStage && childStep) {
                parent.map(function (p) {
                    var child1 = childStage.filter(function (f) { return f.StageCampaignID === p.ID; });
                    var child2 = childStep.filter(function (f) { return f.StepCampaignID === p.ID; });
                    _this.container.push(__assign({}, p, { Stages: child1.slice(), Steps: child2.slice() }));
                    _this.campaign = _this.container[0];
                    _this.stageCount = _this.container[0].Stages.length;
                });
            }
        };
        CampaignWorkspaceComponent.prototype.loadCampaign = function () {
            var _this = this;
            this.dataSet = [];
            this.dataService.getCampaign(this.campaignID).subscribe(function (response) {
                _this.campaigns = response.data[_this.itemName];
                var dataCampaign = _this.campaigns;
                if (dataCampaign) {
                    for (var _i = 0, _a = _this.campaigns; _i < _a.length; _i++) {
                        var campaign = _a[_i];
                        var item = {
                            ID: campaign[0].Value,
                            Name: campaign[1].Value,
                            Status: campaign[2].Value,
                            LaunchedOn: campaign[3].Value,
                            DerLaunchStatus: campaign[4].Value,
                            DerManagerName: campaign[5].Value,
                            StartDate: campaign[6].Value,
                            EndDate: campaign[7].Value,
                            DerTargetCount: campaign[8].Value,
                            DerStageCount: campaign[9].Value,
                            DerStepCount: campaign[10].Value,
                            Owner: campaign[11].Value,
                            Description: campaign[12].Value,
                            Objectives: campaign[13].Value,
                            CallToAction: campaign[14].Value,
                            LeadSource: campaign[15].Value,
                            Type: campaign[16].Value
                        };
                        _this.title = campaign[1].Value;
                        _this.dataSet.push(item);
                    }
                }
                console.log({ ea: response, this: _this });
                _this.dataCollection();
                _this.busyIndicator.activated = false;
            });
            this.dataService.getCampaignStages().subscribe(function (response) {
                _this.dataSetChildStage = [];
                _this.campaignStages = response.data[_this.itemName];
                var dataCampaignStage = _this.campaignStages;
                if (dataCampaignStage) {
                    for (var _i = 0, dataCampaignStage_1 = dataCampaignStage; _i < dataCampaignStage_1.length; _i++) {
                        var campaignStage = dataCampaignStage_1[_i];
                        // Get the task count
                        var taskCount = campaignStage[4].Value.replace(/[^0-9]/g, "");
                        var item = {
                            StageID: campaignStage[0].Value,
                            StageCampaignID: campaignStage[1].Value,
                            StageDescription: campaignStage[2].Value,
                            StageStatus: campaignStage[3].Value,
                            StageDerCampaignTaskCount: taskCount,
                            StageStartDate: campaignStage[5].Value,
                            StageEndDate: campaignStage[6].Value,
                            StageType: campaignStage[7].Value
                        };
                        _this.dataSetChildStage.push(item);
                    }
                }
                console.log({ ea: response, this: _this });
                _this.dataCollection();
            }, function (error) {
                console.log("Error", error);
            });
            this.dataService.getCampaignSteps().subscribe(function (response) {
                _this.dataSetChildStep = [];
                _this.campaignSteps = response.data[_this.itemName];
                var dataCampaignStep = _this.campaignSteps;
                if (dataCampaignStep) {
                    for (var _i = 0, dataCampaignStep_1 = dataCampaignStep; _i < dataCampaignStep_1.length; _i++) {
                        var campaignStep = dataCampaignStep_1[_i];
                        var item = {
                            StepID: campaignStep[0].Value,
                            StepCampaignID: campaignStep[1].Value,
                            StepDescription: campaignStep[2].Value,
                            StepStatus: campaignStep[3].Value,
                            StepsDueDate: campaignStep[4].Value,
                            StepDateAssigned: campaignStep[5].Value
                        };
                        _this.dataSetChildStep.push(item);
                    }
                }
                _this.dataCollection();
            });
        };
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], CampaignWorkspaceComponent.prototype, "busyIndicator", void 0);
        CampaignWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n    <div class=\"cmpgn-workspace-container\" soho-busyindicator>\n      <ng-container *ngIf=\"campaign\">\n      <div class=\"header-section\">\n        <div class=\"row top-padding bottom-padding workspace-custom-style\">\n\n          <div class=\"twelve columns\">\n            <h1 class=\"cmpgn-name\">{{ campaign.Name }}</h1>\n          </div>\n\n          <div class=\"workspace-info\">\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">Start</span>\n              <p>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">End</span>\n              <p>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">Launched</span>\n              <p>{{ campaign.LaunchedOn | dateTimeFormat | date }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">Type</span>\n              <p>{{ campaign.Type }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">Status</span>\n              <p>{{ campaign.Status }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"info-title text-small\">Owner</span>\n              <p>  {{ campaign.Owner }} </p>\n            </div>\n          </div><!-- .workspace-info -->\n\n        </div><!-- .workspace-custom-style -->\n      </div><!-- .header-section -->\n\n      <div class=\"detail-section\">\n        <div class=\"row top-padding\">\n          <div class=\"stage-count\">\n            <div class=\"twelve columns\">\n              <p>Stages ({{ stageCount }})</p>\n            </div>\n          </div>\n          <ng-container *ngFor=\"let stage of campaign.Stages\">\n          <div class=\"stage-info\">\n            <div class=\"twelve columns\">\n              <p class=\"stage-desc\"><strong>{{ stage.StageDescription }}</strong></p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"stage-label\">Start</span>\n              <p class=\"ws-stage-startdate\">{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n            </div>\n            <div class=\"two columns\">\n              <span class=\"stage-label\">End</span>\n              <p class=\"ws-stage-enddate\">{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n            </div>\n            <div class=\"two columns\">\n              <p>&nbsp;</p>\n            </div>\n            <div class=\"two columns\">\n            <span class=\"stage-label\">Type</span>\n            <p class=\"ws-stage-type\">{{ stage.StageType }}</p>\n            </div>\n            <div class=\"two columns\">\n            <span class=\"stage-label\">Status</span>\n            <p class=\"ws-stage-status\">{{ stage.StageStatus }}</p>\n            </div>\n            <div class=\"one columns\">\n            <span class=\"stage-label\">Steps</span>\n            <p class=\"ws-stage-status\">{{ stage.StageDerCampaignTaskCount }}</p>\n            </div>\n            <div class=\"one columns\">\n              <button type=\"button\" class=\"btn-icon\" title=\"drilldown\">\n                <svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n                    <use xlink:href=\"#icon-drilldown\"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n          </ng-container>\n        </div>\n      </div><!-- .detail-section -->\n      </ng-container><!-- ng-container -->\n    </div><!-- .cmpgn-workspace-container -->\n  ",
                styles: ["\n  :host ::ng-deep .modal-content .title > h2 {\n    font-weight: 600;\n  }\n  .cmpgn-workspace-container .row {\n    padding-right: 0;\n  }\n  .cmpgn-workspace-container .detail-section .row.top-padding {\n    padding-top: 10px;\n  }\n  .cmpgn-workspace-container .cmpgn-name {\n    font-weight: 600;\n    margin-bottom: 15px;\n    white-space: normal;\n  }\n  .cmpgn-workspace-container .workspace-custom-style.row:last-child {\n    margin-bottom: 0;\n  }\n  .cmpgn-workspace-container .workspace-custom-style.row.top-padding {\n    padding-top: 20px;\n  }\n  .cmpgn-workspace-container .header-section {\n    border-bottom: none;\n  }\n  .cmpgn-workspace-container .info-title,\n  .cmpgn-workspace-container .stage-label {\n    margin-bottom: 5px;\n    display: inline-block;\n    color: #999;\n  }\n  .cmpgn-workspace-container .workspace-custom-style {\n    min-height: 120px;\n  }\n  .cmpgn-workspace-container .stage-count {\n    border-bottom: 1px solid #999;\n    display: inline-block;\n    padding-bottom: 10px;\n    width: 100%;\n  }\n  .cmpgn-workspace-container .stage-info {\n    border-bottom: 1px solid #999;\n    display: inline-block;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    width: 100%;\n  }\n  .cmpgn-workspace-container .stage-desc {\n    margin-bottom: 10px;\n  }\n\n  /************ Media Queries *************/\n  @media (min-width: 767px) {\n    .cmpgn-workspace-container {\n      min-width: 700px;\n      min-height: 300px;\n    }\n    .cmpgn-workspace-container .columns {\n      padding-right: 20px;\n    }\n  }\n  "]
            }),
            __metadata("design:paramtypes", [data_service_1.DataService,
                lime_1.DialogService,
                campaign_workspace_service_1.CampaignWorkspaceService])
        ], CampaignWorkspaceComponent);
        return CampaignWorkspaceComponent;
    }());
    exports.CampaignWorkspaceComponent = CampaignWorkspaceComponent;
});
//# sourceMappingURL=campaign-workspace.component.js.map