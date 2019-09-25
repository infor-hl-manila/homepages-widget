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
        function CampaignWorkspaceComponent(dataService, dialogService, campaignWorkspaceService, viewRef) {
            this.dataService = dataService;
            this.dialogService = dialogService;
            this.campaignWorkspaceService = campaignWorkspaceService;
            this.viewRef = viewRef;
            this.showCampaign = true;
            this.showStage = false;
            this.workspaceView = true;
            this.itemName = "Items"; // Object name of item list
        }
        CampaignWorkspaceComponent.prototype.ngOnInit = function () {
            this.busyIndicator.activated = true;
            this.loadCampaign();
            console.log("This", this);
            console.log("viewref", this.viewRef);
        };
        CampaignWorkspaceComponent.prototype.campaignWebAppClicked = function () {
            var form = encodeURIComponent("CRMCampaign(FILTER(ID='" + this.campaignID + "')SETVARVALUES(VarAppliedNamedFilter=" + this.selectedFilter + ",VarShowDetail=1,VarExtLink=1,InitialCommand=Refresh))");
            var url = "?LogicalId={logicalId}&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
        };
        CampaignWorkspaceComponent.prototype.backBtn = function () {
            (!this.showCampaign) ? (this.showCampaign = true, this.showStage = false) : this.showStage = false;
        };
        CampaignWorkspaceComponent.prototype.showCampaignStage = function (stageID) {
            var _this = this;
            //getStage fn
            var campaignContainer = this.container[0].Stages;
            campaignContainer.forEach(function (e) {
                if (e.StageID === stageID) {
                    _this.stage = e;
                    _this.stepsCount = e.Steps.length;
                }
            });
            (!this.showStage) ? (this.showStage = true, this.showCampaign = false) : (this.showCampaign = false, this.showStage = true);
        };
        CampaignWorkspaceComponent.prototype.campaignStageDetail = function (stageID) {
            var _this = this;
            var stageDetails = this.dataJoin;
            if (stageDetails) {
                stageDetails.forEach(function (e) {
                    if (e.StageID === stageID) {
                        _this.stage = e;
                        _this.stepsCount = e.Steps.length;
                    }
                });
            }
        };
        CampaignWorkspaceComponent.prototype.loadCampaign = function () {
            var _this = this;
            this.busyIndicator.activated = true;
            this.dataSet = [];
            this.dataService.getCampaign(this.campaignID || this.campaignID2).subscribe(function (response) {
                _this.busyIndicator.activated = true;
                _this.campaigns = response.data[_this.itemName];
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
                        Type: campaign[16].Value,
                        Code: campaign[17].Value
                    };
                    var workspaceTitle = campaign[17].Value + ": " + campaign[1].Value;
                    _this.title = workspaceTitle;
                    _this.dataSet.push(item);
                }
                _this.getCampaignStage();
            }, function (error) { });
        };
        CampaignWorkspaceComponent.prototype.getCampaignStage = function () {
            var _this = this;
            this.dataService.getCampaignStages().subscribe(function (response) {
                _this.dataSetChildStage = [];
                _this.campaignStages = response.data[_this.itemName];
                var dataCampaignStage = _this.campaignStages;
                if (dataCampaignStage) {
                    for (var _i = 0, dataCampaignStage_1 = dataCampaignStage; _i < dataCampaignStage_1.length; _i++) {
                        var campaignStage = dataCampaignStage_1[_i];
                        // Get the task count
                        var taskCount = campaignStage[4].Value.replace(/[^0-9]/g, "");
                        if (campaignStage[4].Value === "STRINGS(sCRMItemCount)") {
                            taskCount = "1";
                        }
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
                _this.getCampaignStep();
            }, function (error) { });
        };
        CampaignWorkspaceComponent.prototype.getCampaignStep = function () {
            var _this = this;
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
                            StepDateAssigned: campaignStep[5].Value,
                            StepCampaignStageID: campaignStep[6].Value,
                            StepPercentComplete: Math.trunc(campaignStep[7].Value),
                            StepPriority: campaignStep[8].Value,
                            StepType: campaignStep[9].Value
                        };
                        _this.dataSetChildStep.push(item);
                    }
                }
            }, function (error) {
                _this.logInfo(error);
            }, function () {
                _this.dataCollection();
            });
        };
        CampaignWorkspaceComponent.prototype.dataCollection = function () {
            var _this = this;
            this.container = [];
            this.dataJoin = [];
            var container = [];
            var parent = this.dataSet;
            var childStage = this.dataSetChildStage;
            var childStep = this.dataSetChildStep;
            // console.log("parent", parent);
            if (parent) {
                childStage.map(function (c) {
                    var steps = childStep.filter(function (f) { return f.StepCampaignStageID === c.StageID; });
                    _this.dataJoin.push(__assign({}, c, { Steps: steps.slice() }));
                });
                parent.map(function (p) {
                    var stages = _this.dataJoin.filter(function (f) { return f.StageCampaignID === p.ID; });
                    _this.container.push(__assign({}, p, { Stages: stages.slice() }));
                    _this.campaign = _this.container[0];
                    _this.stageCount = _this.container[0].Stages.length;
                    _this.stages = _this.container[0].Stages;
                });
            }
            this.campaignStageDetail(this.stageID);
            this.busyIndicator.activated = false;
        };
        CampaignWorkspaceComponent.prototype.logInfo = function (message, ex) {
            lime_1.Log.info(message, ex);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignWorkspaceComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignWorkspaceComponent.prototype, "widgetInstance", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignWorkspaceComponent.prototype, "widgetSettingsContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignWorkspaceComponent.prototype, "widgetSettingsInstance", void 0);
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], CampaignWorkspaceComponent.prototype, "busyIndicator", void 0);
        CampaignWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n  <div class=\"cmpgn-workspace-container\"\n      soho-busyindicator>\n\n    <div *ngIf=\"showCampaign\">\n      <ng-container *ngIf=\"campaign\">\n        <div class=\"header-section\">\n          <div class=\"row top-padding bottom-padding workspace-custom-style\">\n            <div class=\"twelve columns\">\n              <h1 class=\"cmpgn-name\">{{ campaign.Name }}</h1>\n            </div>\n\n            <div class=\"workspace-info\">\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">Start</span>\n                <p>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n              </div>\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">End</span>\n                <p>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n              </div>\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">Launched On</span>\n                <ng-container *ngIf=\"campaign.LaunchedOn; else noLaunchDate\">\n                  <p>{{ campaign.LaunchedOn | dateTimeFormat | date }}</p>\n                </ng-container>\n                <ng-template #noLaunchDate>\n                  <p></p>\n                </ng-template>\n              </div>\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">Type</span>\n                <p>{{ campaign.Type }}</p>\n              </div>\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">Status</span>\n                <p>{{ campaign.Status }}</p>\n              </div>\n              <div class=\"two columns col-2\">\n                <span class=\"info-title text-small\">Owner</span>\n                <p>  {{ campaign.Owner }} </p>\n              </div>\n            </div><!-- .workspace-info -->\n\n          </div><!-- .workspace-custom-style -->\n        </div><!-- .header-section -->\n\n        <div class=\"detail-section\">\n          <div class=\"row top-padding\">\n            <div class=\"stage-count\">\n              <div class=\"twelve columns\">\n                <ng-container *ngIf=\"stageCount > 1; else StageLabel\">\n                  <p class=\"text-default\">Stages ({{ stageCount }})</p>\n                </ng-container>\n                <ng-template #StageLabel>\n                  <p class=\"text-default\">Stage ({{ stageCount }})</p>\n                </ng-template>\n              </div>\n            </div>\n            <ng-container *ngFor=\"let stage of campaign.Stages\">\n              <div class=\"stage-info\">\n                <div class=\"twelve columns\">\n                  <p class=\"stage-desc text-primary\"><strong>{{ stage.StageDescription }}</strong></p>\n                </div>\n                <div class=\"two columns col-2\">\n                  <span class=\"stage-label\">Start</span>\n                  <p class=\"ws-stage-startdate\">{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                </div>\n                <div class=\"two columns col-2\">\n                  <span class=\"stage-label\">End</span>\n                  <p class=\"ws-stage-enddate\">{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                </div>\n                <div class=\"two columns non-mobile\">\n                  <p>&nbsp;</p>\n                </div>\n                <div class=\"two columns col-2\">\n                <span class=\"stage-label\">Type</span>\n                <p class=\"ws-stage-type\">{{ stage.StageType }}</p>\n                </div>\n                <div class=\"two columns col-2\">\n                <span class=\"stage-label\">Status</span>\n                <p class=\"ws-stage-status\">{{ stage.StageStatus }}</p>\n                </div>\n                <div class=\"one columns col-2\">\n                  <ng-container *ngIf=\"stage.StageDerCampaignTaskCount > 1; else wrkspceStepLabel\">\n                <span class=\"stage-label\">Steps</span>\n                  </ng-container>\n                  <ng-template #wrkspceStepLabel>\n                    <span class=\"stage-label\">Step</span>\n                  </ng-template>\n                <p class=\"ws-stage-status\">{{ stage.StageDerCampaignTaskCount }}</p>\n                </div>\n                <div class=\"one columns col-2\">\n                  <button type=\"button\" class=\"btn-icon\" title=\"{{ stage.StageDescription }}\" (click)=\"showCampaignStage(stage.StageID)\">\n                    <svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n                        <use xlink:href=\"#icon-drilldown\"></use>\n                    </svg>\n                  </button>\n                </div>\n              </div>\n            </ng-container>\n          </div><!-- .row -->\n        </div><!-- .detail-section -->\n      </ng-container><!-- ng-container -->\n    </div><!-- showCampaign -->\n\n    <div *ngIf=\"showStage\" class=\"stage-section\">\n        <ng-container>\n        <ng-container *ngIf=\"stage\">\n          <div class=\"header-section\">\n              <div class=\"row top-padding bottom-padding workspace-custom-style\">\n                <div class=\"twelve columns cmpgn-border-bottom-style\">\n                  <button type=\"button\" class=\"btn-icon cmpgn-back-btn\" (click)=\"backBtn()\">\n                    <svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n                      <use xlink:href=\"#icon-left-arrow\"></use>\n                    </svg>\n                  </button>\n                  <h1><strong>{{ stage.StageDescription }}</strong></h1>\n                </div><!-- .twelve.cmpgn-border-bottom-style -->\n                <div class=\"three columns\">\n                  <span class=\"stage-label\">Start</span>\n                  <p class=\"ws-stage-startdate\">{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                </div>\n                <div class=\"four columns\">\n                  <span class=\"stage-label\">End</span>\n                  <p class=\"ws-stage-enddate\">{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                </div>\n                <div class=\"two columns\">\n                  <span class=\"stage-label\">Type</span>\n                  <p class=\"ws-stage-type\">{{ stage.StageType }}</p>\n                </div>\n                <div class=\"three columns\">\n                  <span class=\"stage-label\">Status</span>\n                  <p class=\"ws-stage-status\">{{ stage.StageStatus }}</p>\n                </div>\n              </div><!-- showStage .row -->\n          </div><!-- showStage .header-section -->\n          <div class=\"detail-section\">\n            <div class=\"row top-padding\">\n              <div class=\"steps-count\">\n                <div class=\"twelve columns\">\n                  <ng-container *ngIf=\"stepsCount > 1; else StepLabelText\">\n                    <p>Steps ({{stepsCount}})</p>\n                  </ng-container>\n                  <ng-template #StepLabelText>\n                    <p>Step ({{stepsCount}})</p>\n                  </ng-template>\n                </div>\n              </div><!-- .steps-count -->\n              <ng-container *ngFor=\"let step of stage.Steps\">\n                <div class=\"steps-info\">\n                  <div class=\"twelve columns step-header-title\">\n                    <ng-container *ngIf=\"step.StepPriority === 'Low'; else prioNormal\">\n                      <p class=\"text-primary\"><strong><span class=\"round cmpgn-low badge cmpgn-badge\">{{ step.StepPriority }}</span>{{ step.StepDescription }}</strong></p>\n                    </ng-container>\n                    <ng-template #prioNormal>\n                      <ng-container *ngIf=\"step.StepPriority === 'Normal'; else prioHigh\">\n                        <p class=\"text-primary\"><span class=\"round cmpgn-normal badge cmpgn-badge\">{{ step.StepPriority }}</span><strong>{{ step.StepDescription }}</strong></p>\n                      </ng-container>\n                    </ng-template>\n                    <ng-template #prioHigh>\n                      <ng-container *ngIf=\"step.StepPriority === 'High' else noPrioVal\">\n                        <p class=\"text-primary\"><span class=\"round cmpgn-high badge cmpgn-badge\">{{ step.StepPriority }}</span><strong>{{ step.StepDescription }}</strong></p>\n                      </ng-container>\n                    </ng-template>\n                    <ng-template #noPrioVal>\n                      <p class=\"text-primary\"><strong>{{ step.StepDescription }}</strong></p>\n                    </ng-template>\n                  </div>\n                  <div class=\"three columns\">\n                    <span class=\"step-label\">Needed Date</span>\n                    <p class=\"step-neededdate\">{{ step.StepsDueDate | dateTimeFormat | date }}</p>\n                  </div>\n                  <div class=\"three columns\">\n                    <span class=\"step-label\">% Complete</span>\n                    <soho-progress class=\"cmpgn-progress\" [progressValue]=\"step.StepPercentComplete\"></soho-progress>\n                    <span class=\"step-complete\">{{ step.StepPercentComplete }}%</span>\n                  </div>\n                  <div class=\"one columns\">\n                    <p>&nbsp;</p>\n                </div>\n                  <div class=\"two columns\">\n                    <span class=\"step-label\">Type</span>\n                    <p class=\"step-type\">{{ step.StepType }}</p>\n              </div>\n                  <div class=\"three columns\">\n                    <span class=\"step-label\">Status</span>\n                    <p class=\"step-status\">{{ step.StepStatus }}</p>\n            </div>\n          </div>\n        </ng-container>\n            </div><!-- .row -->\n          </div><!-- showStage .detail-section -->\n        </ng-container>\n      </ng-container>\n    </div><!-- showStage -->\n\n  </div><!-- .cmpgn-workspace-container -->\n  ",
                styles: ["\n  .cmpgn-border-bottom-style {\n    border-bottom: 1px solid #999;\n    padding-bottom: 10px;\n    margin-bottom: 15px;\n  }\n  .cmpgn-workspace-container .row {\n    padding-right: 0;\n  }\n  .cmpgn-workspace-container .detail-section .row.top-padding {\n    padding-top: 10px;\n  }\n  .cmpgn-workspace-container .cmpgn-name {\n    font-weight: 600;\n    margin-bottom: 15px;\n    white-space: normal;\n  }\n  .cmpgn-workspace-container .workspace-custom-style.row:last-child {\n    margin-bottom: 0;\n  }\n  .cmpgn-workspace-container .workspace-custom-style.row.top-padding {\n    padding-top: 20px;\n  }\n  .cmpgn-workspace-container .header-section {\n    border-bottom: none;\n  }\n  .cmpgn-workspace-container .info-title,\n  .cmpgn-workspace-container .stage-label,\n  .cmpgn-workspace-container .step-label {\n    margin-bottom: 5px;\n    display: inline-block;\n    color: #999;\n  }\n  .cmpgn-workspace-container .workspace-custom-style {\n    min-height: 120px;\n  }\n  .cmpgn-workspace-container .stage-count, .cmpgn-workspace-container .steps-count  {\n    border-bottom: 1px solid #999;\n    display: inline-block;\n    padding-bottom: 10px;\n    width: 100%;\n  }\n  .cmpgn-workspace-container .stage-info,\n  .cmpgn-workspace-container .steps-info {\n    border-bottom: 1px solid #999;\n    display: inline-block;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    width: 100%;\n  }\n  .cmpgn-workspace-container .stage-desc {\n    margin-bottom: 10px;\n  }\n  .cmpgn-back-btn {\n    display: inline-block;\n    position: relative;\n    bottom: 2px;\n    margin-right: 0;\n  }\n  .cmpgn-back-btn svg {\n    position: relative;\n    right: 8px;\n  }\n  .cmpgn-workspace-container .stage-section h1 {\n    display: inline-block;\n  }\n  .cmpgn-badge {\n    display: inline-block;\n    margin-bottom: 1px;\n    margin-right: 15px;\n    width: 65px !important;\n  }\n  .step-header-title {\n    margin-bottom: 10px;\n  }\n  .cmpgn-progress {\n    display: inline-block !important;\n    margin-top: 5px;\n    height: 20px;\n    border-radius: 0;\n    width: 85%;\n  }\n  :host ::ng-deep .cmpgn-progress.progress .progress-bar {\n    height: 20px !important;\n    border-radius: 0;\n  }\n  .step-complete {\n    display: inline;\n    float: right;\n    margin-top: 10px;\n    padding-left: 5px;\n    text-align: left;\n    width: 15%;\n  }\n  .cmpgn-low {\n    background-color: #54a1d3;\n    color: #fff;\n  }\n  .cmpgn-normal {\n    background-color: #f6d67b;\n  }\n  .cmpgn-high {\n    background-color: #d26d6d;\n    color: #fff;\n  }\n\n\n  /************ Media Queries *************/\n  @media (min-width: 767px) {\n    .cmpgn-workspace-container {\n      min-width: 700px;\n      min-height: 300px;\n    }\n    .cmpgn-workspace-container .columns {\n      padding-right: 20px;\n    }\n  }\n  @media (max-width: 766px) {\n    .col-2 {\n      width: 50%;\n      margin-bottom: 10px;\n    }\n    .non-mobile {\n      display: none;\n    }\n    .cmpgn-workspace-container {\n      min-height: 340px;\n    }\n  }\n  "]
            }),
            __metadata("design:paramtypes", [data_service_1.DataService,
                lime_1.DialogService,
                campaign_workspace_service_1.CampaignWorkspaceService,
                core_1.ViewContainerRef])
        ], CampaignWorkspaceComponent);
        return CampaignWorkspaceComponent;
    }());
    exports.CampaignWorkspaceComponent = CampaignWorkspaceComponent;
});
//# sourceMappingURL=campaign-workspace.component.js.map