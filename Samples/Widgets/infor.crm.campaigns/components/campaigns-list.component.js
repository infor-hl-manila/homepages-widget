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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/core", "lime", "../components/campaign-workspace.component", "../date.pipe", "../services/campaign-workspace.service", "../services/data.service"], function (require, exports, core_1, lime_1, campaign_workspace_component_1, date_pipe_1, campaign_workspace_service_1, data_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignsListComponent = /** @class */ (function () {
        function CampaignsListComponent(widgetContext, widgetInstance, campaignWorkspaceService, dataService, dateTimePipe, viewRef) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.campaignWorkspaceService = campaignWorkspaceService;
            this.dataService = dataService;
            this.dateTimePipe = dateTimePipe;
            this.viewRef = viewRef;
            this.itemName = "Items"; // Object name of item list
            this.viewContent = false;
            this.dataService.init(widgetContext);
            this.dataService.getMongooseConfig();
        }
        CampaignsListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setBusy(true);
            this.loadCampaigns();
            this.widgetInstance.actions[0].execute = function () { return _this.test(); };
        };
        CampaignsListComponent.prototype.showDialogWorkspace = function (ID, title) {
            this.campaignWorkspaceService.open({
                component: campaign_workspace_component_1.CampaignWorkspaceComponent,
                viewRef: this.viewRef,
                title: title,
                props: {
                    widgetContext: this.widgetContext,
                    campaignID: ID,
                }
            });
        };
        CampaignsListComponent.prototype.test = function () {
            var url = "https://www.google.com";
            this.widgetContext.launch({ url: url });
        };
        CampaignsListComponent.prototype.dataCollection = function () {
            var _this = this;
            this.container = [];
            var container = [];
            var parent = this.dataSet;
            var childStage = this.dataSetChildStage;
            var childStep = this.dataSetChildStep;
            if (parent && childStage && childStep) {
                parent.map(function (p) {
                    var stages = childStage.filter(function (a) {
                        return a.StageCampaignID === p.ID;
                    });
                    _this.container.push(__assign({}, p, { Stages: stages.slice() }));
                });
            }
            this.setBusy(false);
        };
        CampaignsListComponent.prototype.loadCampaigns = function () {
            var _this = this;
            this.dataSet = [];
            this.dataService.getCampaigns().subscribe(function (response) {
                _this.totalResults = 0;
                _this.campaigns = response.data[_this.itemName];
                _this.viewContent = true;
                var dataCampaign = response.data[_this.itemName];
                if (dataCampaign) {
                    _this.totalResults = dataCampaign.length;
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
                            Code: campaign[17].Value,
                            workspaceTitle: campaign[17].Value + ": " + campaign[1].Value
                        };
                        _this.dataSet.push(item);
                    }
                }
                _this.dataCollection();
            }, function (error) {
                _this.onRequestError(error);
            }, function () {
                _this.setBusy(false);
            });
            //Request for Campaign stage
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
                            StageEndDate: campaignStage[6].Value
                        };
                        _this.dataSetChildStage.push(item);
                    }
                }
                _this.dataCollection();
            }, function (error) {
                _this.onRequestError(error);
            }, function () {
                _this.setBusy(false);
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
                            StepDateAssigned: campaignStep[5].Value,
                            StepCampaignStageID: campaignStep[6].Value
                        };
                        _this.dataSetChildStep.push(item);
                    }
                }
                _this.dataCollection();
            }, function (error) {
                _this.onRequestError(error);
            }, function () {
                _this.setBusy(false);
            });
        };
        CampaignsListComponent.prototype.onRequestError = function (error) {
            this.isErrorState = true;
            this.setBusy(false);
        };
        CampaignsListComponent.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        CampaignsListComponent = __decorate([
            core_1.Component({
                providers: [date_pipe_1.DateTimePipe],
                selector: "campaigns-list",
                template: "\n  <div class=\"card-content\">\n    <div class=\"card-group-action\" [hidden]=\"!viewContent\">\n      <button soho-button=\"icon\" icon=\"filter\">\n      </button>\n      <button soho-button=\"icon\" icon=\"dropdown\"></button>\n    </div>\n    <div class=\"emptystatemessage-container\" [hidden]=\"!isErrorState\">\n      <div soho-emptymessage\n        [title]=\"'Something went wrong'\"\n        [info]=\"'Check your connection and try again.'\"\n        [icon]=\"'icon-empty-error-loading'\"\n        [color]=\"'azure'\"\n      >\n      </div>\n    </div>\n    <div class=\"list-content\">\n      <ng-container *ngFor=\"let campaign of container\">\n        <div class=\"row cmpgns\">\n          <div class=\"cmpgn-container\">\n\n          <soho-accordion [rerouteOnLinkClick]=\"false\" class=\"accordion\">\n            <soho-accordion-header class=\"accordion-header cmpgn-accordion-header\" style=\"height: 50%;\">\n            <a (click)=\"showDialogWorkspace(campaign.ID, campaign.workspaceTitle)\" ng-reflect-href=\"/my-nonworking-link\" href=\"/my-nonworking-link\">\n\n              <div class=\"three columns col-mb-style-left col-cmpgns\">\n                <h1 class=\"cmpgn-name\">{{ campaign.Name }}</h1>\n              </div>\n\n              <div class=\"two columns col-mb-style-right col-cmpgns\">\n                <p class=\"cmpgn-status text-small\">{{ campaign.Status }}</p>\n              </div>\n\n              <div class=\"two columns col-mb-style-left-2 one-col-wdgt\">\n                <div class=\"cmpgn-date-container\">\n                    <p class=\"cmpgn-start-date\"><span class=\"text-small\">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n                    <p class=\"cmpgn-end-date\"><span class=\"text-small\">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n                  </div>\n              </div>\n\n              <div class=\"two columns col-mb-style-left-2 two-col-left\">\n                <div class=\"cmpgn-date-container\">\n                    <p class=\"cmpgn-start-date\"><span class=\"text-small\">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n                    <p class=\"cmpgn-end-date\"><span class=\"text-small\">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n                  </div>\n              </div>\n\n              <div class=\"two columns col-mb-style-right-2\">\n                <div class=\"cmpgn-date-launch-container\">\n                  <div *ngIf=\"campaign.DerLaunchStatus === 'STRINGS(sCampaignIsLaunched)'; else unLaunched\">\n                    <p class=\"cmpgn-launch\"><span class=\"text-small\">Launched</span> {{ campaign.LaunchedOn | dateTimeFormat | date }}</p>\n                  </div>\n                  <ng-template #unLaunched>\n                    <p class=\"cmpgn-unlaunched text-small\">Unlaunched</p>\n                  </ng-template>\n                </div>\n              </div>\n\n              <div class=\"btm-container\">\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-stages\">{{ campaign.DerStageCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <p class=\"cmpgn-lbl-stages text-small\">Stages</p>\n                  </div>\n                </div>\n\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-steps\">{{ campaign.DerStepCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <p class=\"cmpgn-lbl-steps text-small\">Steps</p>\n                  </div>\n                </div>\n\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-targets\">{{ campaign.DerTargetCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <p class=\"cmpgn-lbl-targets text-small\">Targets</p>\n                  </div>\n                </div>\n              </div>\n\n            </a>\n            </soho-accordion-header>\n            <soho-accordion-pane>\n            <div class=\"accordion-content cmpgn-accordion-content padding-right padding-bottom\">\n              <ng-container class=\"test2\" *ngFor=\"let stage of campaign.Stages\">\n                <div class=\"row cmpgns stage\">\n                  <div class=\"three columns col-left\">\n                    <h1>{{ stage.StageDescription }}</h1>\n                  </div>\n                  <div class=\"two columns col-right\">\n                    <p class=\"stage-status text-small\">{{ stage.StageStatus }}</p>\n                  </div>\n\n                  <div class=\"mb-view\">\n                    <div class=\"four columns col-1\">\n                      <p class=\"stage-startdate text-small\">{{ stage.StageStartDate | dateTimeFormat | date }} <span class=\"dash\">-</span> {{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                      <p class=\"stage-stepscount text-small\"><span class=\"divider\">|</span> {{ stage.StageDerCampaignTaskCount }} <span>Steps</span></p>\n                    </div>\n                  </div><!-- .mb-view for mobile view only -->\n\n                  <div class=\"two-col-wdgt-view\">\n                    <div class=\"four columns col-1\">\n                      <p class=\"stage-startdate text-small\"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                      <p class=\"stage-enddate\"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                    <p class=\"stage-stepscount text-small\"><span class=\"divider\">|</span> {{ stage.StageDerCampaignTaskCount }} <span>Steps</span></p>\n                    </div>\n                  </div><!-- .two-col-wdgt-view -->\n\n                  <div class=\"md-view\">\n                  <div class=\"two columns col\">\n                    <p class=\"stage-startdate\"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                  </div>\n                    <div class=\"two columns col\">\n                      <p class=\"stage-enddate\"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                    </div>\n                    <div class=\"three columns text-position col\">\n                      <p class=\"stage-stepscount\">{{ stage.StageDerCampaignTaskCount }} <span>Steps</span></p>\n                    </div>\n                  </div><!-- .md-view -->\n\n                </div>\n              </ng-container><!-- stage -->\n            </div>\n            </soho-accordion-pane>\n          </soho-accordion>\n\n          </div><!-- .cmpgn-container -->\n        </div><!-- .row.cmpgns -->\n      </ng-container>\n    </div>\n  </div>",
                styles: ["\n    :host ::ng-deep .accordion-header.has-chevron > [class^='btn'] {\n      width: 40px;\n      right: 0;\n      position: relative;\n    }\n    .card-content {\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n    .card-group-action {\n      flex: 0 0 auto;\n    }\n    .list-content {\n      overflow: auto;\n    }\n    .list-content h1.cmpgn-name {\n      font-weight: 600;\n      margin-bottom: 5px;\n      white-space: normal;\n    }\n    .cmpgn-status, .cmpgn-lbl-stages, .cmpgn-lbl-steps, .cmpgn-lbl-targets, .cmpgn-end-date span, .cmpgn-start-date span, .stage-status, .stage-startdate span, .stage-enddate span, .stage-stepscount span, .cmpgn-unlaunched, .mb-view .stage-stepscount, .mb-view .stage-startdate {\n      color: #999;\n      font-weight: 200;\n    }\n    .list-content p.cmpgn-launch {\n      display: inline-block;\n    }\n    .cmpgn-icon-container {\n      display: inline-block;\n      margin-right: 5px;\n      vertical-align: top;\n    }\n    .cmpgn-stages, .cmpgn-steps, .cmpgn-targets {\n      font-weight: 600;\n    }\n    .list-content .row.cmpgns {\n      max-width: 100%;\n      padding-right: 0;\n    }\n    .emptystatemessage-container {\n      margin: auto;\n    }\n    .emptystatemessage-btn-container {\n      text-align: center;\n    }\n    .cmpgn-container {\n      display: inline-block;\n      width: 100%;\n      border-bottom: 1px solid #999;\n    }\n    :host ::ng-deep .accordion-header > a > span {\n      width: 100% !important;\n    }\n    .cmpgn-accordion-header {\n      border-bottom-color: transparent;\n    }\n    .text-position {\n      text-align: center;\n    }\n    .cmpgn-start-date span, .stage-startdate span {\n      margin-right: 10px;\n    }\n    .cmpgn-end-date {\n      margin-top: 0;\n    }\n    .mb-view .divider {\n      margin-right: 10px;\n    }\n    .cmpgn-end-date span, .stage-enddate span {\n      margin-right: 15px;\n    }\n    .cmpgns.stage {\n      border-top: 1px solid #999;\n      padding-top: 10px;\n      margin-top: 10px;\n    }\n    .padding-right {\n      padding-right: 50px;\n    }\n    .padding-bottom {\n      padding-bottom: 0;\n    }\n    .stage p {\n      font-size: 12px !important;\n    }\n    .stage h1 {\n      font-size: 14px;\n    }\n    .cmpgn-launch span {\n      color: #999;\n      display: block;\n      margin-bottom: 6px;\n      font-weight: 200;\n    }\n    .mb-view {\n      display: none;\n    }\n    .mb-view .dash {\n      margin: 0 10px;\n    }\n    .two-col-wdgt-view {\n      display: none;\n    }\n\n    /** One Column Widget */\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-startdate {\n      display: inline-block;\n      margin-right: 10px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    ::ng-deep .accordion-header > a {\n      margin-top: 10px;\n      padding: 0 0 0 20px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-stepscount {\n      display: inline-block;\n      margin-top: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 {\n      width: 100%;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-2 {\n      margin-left: 0;\n      width: 25%;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view {\n      display: block !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .two-col-wdgt-view {\n      display: none !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .md-view {\n      display: none;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .accordion-header {\n      margin-top: -14px;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .accordion-header.has-chevron > [class^='btn'] {\n      position: relative;\n      top: 42px !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-left {\n      width: 75%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-right {\n      width: 25%;\n      padding: 0;\n      margin-left: 0;\n      text-align: right;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .padding-right {\n      padding-right: 20px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-4-mb-styles {\n      margin-left: 0;\n      margin-right: 50px;\n      padding: 0;\n      width: 13.33333%;\n\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .btm-container {\n      clear: both;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left {\n      float: left;\n      width: 80%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right {\n      float: right;\n      width: 20%;\n      text-align: right;\n      padding-right: 0;\n      z-index: 1;\n      position: absolute;\n      right: 19px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left-2 {\n      padding: 0 0 10px 0;\n      width: 55%;\n      float: left;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right-2 {\n      float: left;\n      width: 45%;\n      padding: 0 0 10px 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .one-col-wdgt {\n      display: inline-block !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .two-col-left {\n      display: none !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-end-date span,\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-start-date span {\n      display: inline-block !important;\n      padding-bottom: 0 !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-start-date {\n      display: block !important;\n    }\n\n    /**************** Two Column Widget ****************/\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view {\n      display: block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .one-col-wdgt {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-left {\n      display: block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .mb-view {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .col-mb-style-left {\n      float: left;\n      width: 80%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .col-mb-style-right {\n      float: right;\n      width: 20%;\n      text-align: right;\n      padding-right: 0;\n      z-index: 1;\n      position: absolute;\n      right: 19px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-left {\n      padding: 0 0 10px 0;\n      width: 40%;\n      float: left;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .col-mb-style-right-2 {\n      width: 25%;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-start-date {\n      display: inline-block;\n      width: 120px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-end-date {\n      display: inline-block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .cmpgn-end-date span, :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .cmpgn-start-date span  {\n      display: block;\n      padding-bottom: 6px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    ::ng-deep .accordion-header.has-chevron > [class^='btn'] {\n      position: relative;\n      top: 18px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    ::ng-deep .accordion-header > a {\n      margin-top: 10px;\n      padding: 0 0 0 20px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .padding-right {\n      padding-right: 20px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .stage .col-left {\n      width: 75%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .stage .col-right {\n      width: 25%;\n      padding: 0;\n      margin-left: 0;\n      text-align: right;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .md-view {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .col-1 {\n      width: 100%;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-startdate {\n      display: inline-block;\n      width: 120px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-enddate {\n      display: inline-block;\n      margin-top: 0;\n      width: 200px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-stepscount {\n      display: inline-block;\n      margin-top: 0;\n      width: 235px;\n      text-align: right;\n      color: #999;\n      font-weight: 200;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-startdate,\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-enddate {\n      color: #999;\n      font-weight: 200;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .divider {\n      display: none;\n    }\n\n    /**************** Three Column Widget *****************/\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .one-col-wdgt {\n      display: none;\n    }\n\n    /**************** Four Column Widget *****************/\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .one-col-wdgt {\n      display: none;\n    }\n\n    /** Media Queries */\n    @media (max-width: 740px) {\n      .mb-view {\n        display: inline-block;\n      }\n      .mb-view .col-1 {\n        padding: 0;\n      }\n      .btm-container {\n        clear: both;\n      }\n      .col-4-mb-styles {\n        margin-left: 0;\n        width: 33.33333%;\n      }\n      .col-mb-style-left {\n        float: left;\n        width: 80%;\n        padding: 0;\n      }\n      .col-mb-style-right {\n        float: right;\n        width: 20%;\n        text-align: right;\n        padding-right: 0;\n        z-index: 1;\n        position: absolute;\n        right: 19px;\n      }\n      .col-mb-style-left-2 {\n        padding: 0 0 10px 0;\n        width: 55%;\n        float: left;\n      }\n      .col-mb-style-right-2 {\n        float: left;\n        width: 45%;\n        padding: 0 0 10px 0;\n        margin-left: 0;\n      }\n      .stage .col-left {\n        width: 80%;\n        padding: 0;\n      }\n      .stage .col-right {\n        width: 20%;\n        padding: 0;\n      }\n      .col-4-mb-styles {\n        margin-left: 0;\n        margin-right: 25px;\n        padding-left: 0;\n        width: 23.33333%;\n      }\n    }\n    @media (min-width: 741px) and (max-width: 766px) {\n      .btm-container .col-4-mb-styles {\n        width: calc(8.33333333333% - 20px);\n        margin-left: 20px;\n        padding: 0;\n      }\n      .text-position {\n        text-align: center;\n      }\n      .two-col-wdgt-view .col-1 {\n        padding: 0;\n      }\n    }\n    @media (min-width: 741px) and (max-width: 1120px) {\n      .two-col-wdgt-view {\n        display: block;\n      }\n      .one-col-wdgt {\n        display: none;\n      }\n      .two-col-left {\n        display: block;\n      }\n      .mb-view {\n        display: none;\n      }\n      .col-mb-style-left {\n        float: left;\n        width: 80%;\n        padding: 0;\n        margin-left: 0;\n      }\n      .col-mb-style-right {\n        float: right;\n        width: 20%;\n        text-align: right;\n        padding-right: 0;\n        z-index: 1;\n        position: absolute;\n        right: 19px;\n      }\n      .two-col-left {\n        padding: 0 0 10px 0;\n        width: 40%;\n        float: left;\n        margin-left: 0;\n      }\n      .col-mb-style-right-2 {\n        width: 25%;\n      }\n      .cmpgn-start-date {\n        display: inline-block;\n        width: 120px;\n      }\n      .cmpgn-end-date {\n        display: inline-block;\n      }\n      .cmpgn-end-date span,  .cmpgn-start-date span  {\n        display: block;\n        padding-bottom: 6px;\n      }\n      :host ::ng-deep .accordion-header.has-chevron > [class^='btn'] {\n        position: relative;\n        top: 7px;\n      }\n      :host ::ng-deep .is-safari .accordion-header.has-chevron > [class^='btn'] {\n        position: relative !important;\n        top: 20px !important;\n        width: 40px !important;\n      }\n      :host ::ng-deep .accordion-header > a {\n        margin-top: 10px;\n        padding: 0 0 0 20px;\n      }\n      :host ::ng-deep .is-safari .accordion-header > a {\n        margin-top: 10px;\n        padding: 0 0 0 20px;\n      }\n      .padding-right {\n        padding-right: 20px;\n      }\n      .stage .col-left {\n        width: 75%;\n        padding: 0;\n        margin-left: 0;\n      }\n      .stage .col-right {\n        width: 25%;\n        padding: 0;\n        margin-left: 0;\n        text-align: right;\n      }\n      .md-view {\n        display: none;\n      }\n      .two-col-wdgt-view .col-1 {\n        width: 100%;\n        margin-left: 0;\n      }\n      .two-col-wdgt-view .stage-startdate {\n        display: inline-block;\n        width: 120px;\n      }\n      .two-col-wdgt-view .stage-enddate {\n        display: inline-block;\n        margin-top: 0;\n        width: 200px;\n      }\n      .two-col-wdgt-view .stage-stepscount {\n        display: inline-block;\n        margin-top: 0;\n        width: 235px;\n        text-align: right;\n        color: #999;\n        font-weight: 200;\n      }\n      .two-col-wdgt-view .stage-startdate,\n      .two-col-wdgt-view .stage-enddate {\n        color: #999;\n        font-weight: 200;\n      }\n      .two-col-wdgt-view .divider {\n        display: none;\n      }\n\n    }\n    @media (min-width: 993px) and (max-width: 1120px) {\n\n    }\n    @media(min-width: 1121px) and (max-width: 1500px) {\n\n    }\n  "]
            }),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, campaign_workspace_service_1.CampaignWorkspaceService,
                data_service_1.DataService,
                date_pipe_1.DateTimePipe,
                core_1.ViewContainerRef])
        ], CampaignsListComponent);
        return CampaignsListComponent;
    }());
    exports.CampaignsListComponent = CampaignsListComponent;
});
//# sourceMappingURL=campaigns-list.component.js.map