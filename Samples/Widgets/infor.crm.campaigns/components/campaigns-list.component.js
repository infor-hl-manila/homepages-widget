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
            this.container = [];
            this.itemName = "Items"; // Object name of item list
            this.viewContent = false;
            this.opts = ["Start Date", "End Date"];
            this.sortByOpts = ["Latest to Oldest", "Oldest to Latest"];
            this.dataService.init(widgetContext);
            this.dataService.getMongooseConfig();
        }
        CampaignsListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.op = "Start Date";
            this.sortBy = "Latest to Oldest";
            this.removeDropdownIcon();
            this.setBusy(true);
            this.setContent();
            this.widgetInstance.actions[0].execute = function () { return _this.webbAppLink(); };
            console.log("this -->", this);
        };
        CampaignsListComponent.prototype.removeDropdownIcon = function () {
            var el = this.widgetContext.getElement();
            var dropdownEl = el[0].getElementsByClassName("custom-cmpgn-icon");
            for (var _i = 0, dropdownEl_1 = dropdownEl; _i < dropdownEl_1.length; _i++) {
                var i = dropdownEl_1[_i];
                i.innerHTML = "<svg soho-icon=\"\" class=\"icon\" aria-hidden=\"true\" focusable=\"false\" role=\"presentation\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-filter\"></use></svg>";
            }
        };
        CampaignsListComponent.prototype.showDialogWorkspace = function (ID, title, showCampaign, showStage, StageID, StageCampaignID, selectedFilter) {
            this.campaignWorkspaceService.open({
                component: campaign_workspace_component_1.CampaignWorkspaceComponent,
                viewRef: this.viewRef,
                title: title,
                props: {
                    widgetContext: this.widgetContext,
                    campaignID: ID,
                    showCampaign: showCampaign,
                    showStage: showStage,
                    stageID: StageID,
                    campaignID2: StageCampaignID,
                    selectedFilter: selectedFilter
                }
            });
        };
        CampaignsListComponent.prototype.webbAppLink = function () {
            var form = encodeURIComponent("CRMCampaign(SETVARVALUES(VarAppliedNamedFilter=" + this.selectedFilter + ",InitialCommand=Refresh))");
            var url = "?LogicalId={logicalId}&form=" + form;
            this.widgetContext.launch({ url: url });
        };
        CampaignsListComponent.prototype.toggle = function (ob) {
            console.log(ob);
            this.sort(ob, this.sortBy);
        };
        CampaignsListComponent.prototype.sort = function (ob, sortBy, reverse) {
            var _this = this;
            this.container.sort(function (c1, c2) {
                var dateA;
                var dateB;
                switch (ob) {
                    case "Start Date": {
                        _this.op = "Start Date";
                        dateA = new Date(_this.dateTimePipe.transform(c1.StartDate));
                        dateB = new Date(_this.dateTimePipe.transform(c2.StartDate));
                        break;
                    }
                    case "End Date": {
                        _this.op = "End Date";
                        dateA = new Date(_this.dateTimePipe.transform(c1.EndDate));
                        dateB = new Date(_this.dateTimePipe.transform(c2.EndDate));
                        break;
                    }
                }
                switch (sortBy) {
                    case "Oldest to Latest": {
                        _this.sortBy = "Oldest to Latest";
                        return !reverse ? +dateA.getTime() - +dateB.getTime() : 1;
                    }
                    case "Latest to Oldest": {
                        _this.sortBy = "Latest to Oldest";
                        return !reverse ? +dateB.getTime() - +dateA.getTime() : 1;
                    }
                }
                return 0;
            });
            console.log({ ob: ob, sortBy: sortBy });
        };
        CampaignsListComponent.prototype.toggleSort = function (sortBy, reverse) {
            console.log(sortBy);
            this.sort(this.op, sortBy, reverse);
        };
        CampaignsListComponent.prototype.setContent = function () {
            this.onSelectFilter("My Campaigns");
        };
        CampaignsListComponent.prototype.onSelectFilter = function (filter) {
            this.selectedFilter = filter;
            var dataUrl = "";
            if (filter === "My Campaigns") {
                dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&filter=DerIsManagedByCurrentUser = N'1'&orderby=StartDate DESC";
            }
            else if (filter === "All Campaigns") {
                dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&orderby=StartDate DESC";
            }
            else if (filter === "Open Campaigns") {
                dataUrl = "IDORequestService/MGRestService.svc/json/CRMCampaign/adv?props=ID,Name,Status,LaunchedOn,DerLaunchStatus,DerManagerName,StartDate,EndDate,DerTargetCount,DerStageCount,DerStepCount,Owner,Description,Objectives,CallToAction,LeadSource,Type,Code&filter=Status <> N'Inactive'&orderby=StartDate DESC";
            }
            this.setBusy(true);
            this.dataService.selectCampaigns(dataUrl);
            this.loadCampaigns(dataUrl);
        };
        CampaignsListComponent.prototype.dataCollection = function () {
            var _this = this;
            this.container = [];
            this.dataJoin = [];
            var container = [];
            var parent = this.dataSet;
            var childStage = this.dataSetChildStage;
            var childStep = this.dataSetChildStep;
            if (parent && childStage && childStep) {
                childStage.map(function (c) {
                    var steps = childStep.filter(function (f) { return f.StepCampaignStageID === c.StageID; });
                    _this.dataJoin.push(__assign({}, c, { Steps: steps.slice() }));
                });
                parent.map(function (p) {
                    var stages = _this.dataJoin.filter(function (f) { return f.StageCampaignID === p.ID; });
                    _this.container.push(__assign({}, p, { Stages: stages.slice() }));
                });
            }
            this.setBusy(false);
            this.completedStateMessage();
        };
        CampaignsListComponent.prototype.loadCampaigns = function (campaignUrl) {
            var _this = this;
            this.dataSet = [];
            this.dataService.selectCampaigns(campaignUrl).subscribe(function (response) {
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
                _this.getCampaignStages();
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        CampaignsListComponent.prototype.getCampaignStages = function () {
            var _this = this;
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
                            StageEndDate: campaignStage[6].Value
                        };
                        _this.dataSetChildStage.push(item);
                    }
                }
                _this.getCampaignSteps();
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        CampaignsListComponent.prototype.getCampaignSteps = function () {
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
                            StepPercentComplete: campaignStep[7].Value,
                            StepPriority: campaignStep[8].Value,
                            StepType: campaignStep[9].Value
                        };
                        _this.dataSetChildStep.push(item);
                    }
                }
                _this.dataCollection();
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        CampaignsListComponent.prototype.onRequestError = function (error) {
            this.isErrorState = true;
            this.setBusy(false);
        };
        CampaignsListComponent.prototype.completedStateMessage = function () {
            (this.container === undefined || this.container.length === 0) ?
                (this.completedState = true, this.viewContent = false, this.setBusy(false))
                : this.completedState = false;
        };
        CampaignsListComponent.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        CampaignsListComponent = __decorate([
            core_1.Component({
                providers: [date_pipe_1.DateTimePipe],
                selector: "campaigns-list",
                template: "\n  <div class=\"card-content\">\n    <div class=\"card-group-action cmpgn-sort-filter-container\" [hidden]=\"!viewContent\">\n      <soho-toolbar-flex>\n        <soho-toolbar-flex-section [isButtonSet]=\"true\" style=\"text-align: right; padding: 0 4px;\">\n          <div class=\"cmpgn-filterby-container\">\n            <span>Filtered By</span>\n            <button soho-menu-button class=\"btn-menu custom-cmpgn-icon\" icon=\"filter\"></button>\n            <ul class=\"popupmenu\">\n              <li soho-popupmenu-item class=\"heading\">Category</li>\n              <li soho-popupmenu-item isSelectable=\"true\"\n                [isChecked] = \"selectedFilter === 'My Campaigns'\"\n                (click)=\"onSelectFilter('My Campaigns')\"><a href=\"#\">My Campaigns</a></li>\n              <li soho-popupmenu-item isSelectable=\"true\"\n                [isChecked] = \"selectedFilter === 'Open Campaigns'\"\n                (click)=\"onSelectFilter('Open Campaigns')\"><a href=\"#\">Open Campaigns</a></li>\n              <li soho-popupmenu-item isSelectable=\"true\"\n                [isChecked] = \"selectedFilter === 'All Campaigns'\"\n                (click)=\"onSelectFilter('All Campaigns')\"><a href=\"#\">All Campaigns</a></li>\n            </ul>\n          </div>\n          <div class=\"cmpgn-sortby-container\">\n            <span>Sort By</span>\n            <button soho-button=\"icon\" icon=\"sort-down\" (click)=\"toggleSort(sortBy, true)\"> Sort Down </button>\n          </div>\n          <div class=\"cmpgn-dropdownmenu-container\">\n          <button soho-menu-button class=\"btn-menu cmpgn-btn-style\"></button>\n          <ul class=\"popupmenu is-selectable\">\n            <li class=\"heading\">Organize By</li>\n            <li *ngFor=\"let op of opts\" [ngClass]=\"{'is-checked': op === 'Start Date'}\" ><a (click)=\"toggle(op)\">{{op}}</a></li>\n            <li class=\"separator\"></li>\n            <li class=\"heading\">Sort By</li>\n            <li *ngFor=\"let sortBy of sortByOpts\" [ngClass]=\"{'is-checked': sortBy==='Latest to Oldest'}\" ><a (click)=\"toggleSort(sortBy)\">{{sortBy}}</a></li>\n          </ul>\n          </div>\n        </soho-toolbar-flex-section>\n      </soho-toolbar-flex>\n    </div>\n    <div class=\"emptystatemessage-container\" [hidden]=\"!isErrorState\">\n      <div soho-emptymessage\n        [title]=\"'Something went wrong'\"\n        [info]=\"'Check your connection and try again.'\"\n        [icon]=\"'icon-empty-error-loading'\"\n        [color]=\"'azure'\"\n      >\n      </div>\n    </div>\n    <div class=\"completedstatemessage-container\" [hidden]=\"!completedState\">\n      <div soho-emptymessage\n        [title]=\"'No campaigns yet'\"\n        [info]=\"'Once you add some, you will see them here.'\"\n        [icon]=\"'icon-empty-no-events'\"\n        [color]=\"'azure'\"\n      >\n      </div>\n    </div>\n    <div class=\"list-content\">\n      <ng-container *ngFor=\"let campaign of container\">\n        <div class=\"row cmpgns\">\n          <div class=\"cmpgn-container\">\n\n          <soho-accordion [rerouteOnLinkClick]=\"false\" class=\"accordion\">\n            <soho-accordion-header class=\"accordion-header cmpgn-accordion-header\" style=\"height: 50%;\">\n\n            <a (click)=\"showDialogWorkspace(campaign.ID, campaign.workspaceTitle, true, false, '', '', selectedFilter)\" ng-reflect-href=\"/my-nonworking-link\" href=\"/my-nonworking-link\">\n\n              <div class=\"three columns col-mb-style-left col-cmpgns\">\n                <h1 class=\"cmpgn-name\">{{ campaign.Name }}</h1>\n              </div>\n\n              <div class=\"two columns col-mb-style-right col-cmpgns\">\n                <p class=\"cmpgn-status text-small\">{{ campaign.Status }}</p>\n              </div>\n\n              <div class=\"two columns col-mb-style-left-2 one-col-wdgt\">\n                <div class=\"cmpgn-date-container\">\n                    <p class=\"cmpgn-start-date\"><span class=\"text-small\">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n                    <p class=\"cmpgn-end-date\"><span class=\"text-small\">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n                  </div>\n              </div>\n\n              <div class=\"two columns col-mb-style-left-2 two-col-left\">\n                <div class=\"cmpgn-date-container\">\n                    <p class=\"cmpgn-start-date\"><span class=\"text-small\">Start</span>{{ campaign.StartDate | dateTimeFormat | date }}</p>\n                    <p class=\"cmpgn-end-date\"><span class=\"text-small\">End</span>{{ campaign.EndDate | dateTimeFormat | date }}</p>\n                  </div>\n              </div>\n\n              <div class=\"two columns col-mb-style-right-2\">\n                <div class=\"cmpgn-date-launch-container\">\n                  <div *ngIf=\"campaign.DerLaunchStatus === 'STRINGS(sCampaignIsLaunched)'; else unLaunched\">\n                    <p class=\"cmpgn-launch\"><span class=\"text-small\">Launched</span> {{ campaign.LaunchedOn | dateTimeFormat | date }}</p>\n                  </div>\n                  <ng-template #unLaunched>\n                    <p class=\"cmpgn-unlaunched text-small\">Unlaunched</p>\n                  </ng-template>\n                </div>\n              </div>\n\n              <div class=\"btm-container\">\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-stages\">{{ campaign.DerStageCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <ng-container *ngIf=\"campaign.DerStageCount > 1; else StageText\">\n                      <p class=\"cmpgn-lbl-stages text-small\">Stages</p>\n                    </ng-container>\n                    <ng-template #StageText>\n                    <p class=\"cmpgn-lbl-stages text-small\">Stage</p>\n                    </ng-template>\n                  </div>\n                </div>\n\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-steps\">{{ campaign.DerStepCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <ng-container *ngIf=\"campaign.DerStepCount > 1; else StepLabel\">\n                      <p class=\"cmpgn-lbl-steps text-small\">Steps</p>\n                    </ng-container>\n                    <ng-template #StepLabel>\n                      <p class=\"cmpgn-lbl-steps text-small\">Step</p>\n                    </ng-template>\n                  </div>\n                </div>\n\n                <div class=\"one columns text-position col-4-mb-styles\">\n                  <p class=\"cmpgn-targets\">{{ campaign.DerTargetCount }}</p>\n                  <div class=\"cmpgn-lbl-container\">\n                    <ng-container *ngIf=\"campaign.DerTargetCount > 1; else TargetText\">\n                      <p class=\"cmpgn-lbl-targets text-small\">Targets</p>\n                    </ng-container>\n                    <ng-template #TargetText>\n                      <p class=\"cmpgn-lbl-targets text-small\">Target</p>\n                    </ng-template>\n                  </div>\n                </div>\n              </div>\n\n            </a>\n            </soho-accordion-header>\n            <soho-accordion-pane>\n            <div class=\"accordion-content cmpgn-accordion-content padding-right padding-bottom padding-top\">\n              <ng-container *ngFor=\"let stage of campaign.Stages\">\n                <div class=\"row cmpgns stage\">\n                  <a href=\"#\" (click)=\"showDialogWorkspace(campaignID, campaign.workspaceTitle, false, true, stage.StageID, stage.StageCampaignID, selectedFilter)\">\n                    <div class=\"three columns col-left cmpgn-custom-style\">\n                      <h1>{{ stage.StageDescription }}</h1>\n                    </div>\n                    <div class=\"two columns col-right cmpgn-margin\">\n                      <p class=\"stage-status text-small\">{{ stage.StageStatus }}</p>\n                    </div>\n\n                    <div class=\"mb-view\">\n                      <div class=\"four columns col-1\">\n                        <p class=\"stage-startdate text-small\">{{ stage.StageStartDate | dateTimeFormat | date }} <span class=\"dash\">-</span> {{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                        <p class=\"stage-stepscount text-small\">\n                          <span class=\"divider\">|</span> {{ stage.StageDerCampaignTaskCount }}\n                          <ng-container *ngIf=\"stage.StageDerCampaignTaskCount > 1; else StepText\">\n                            <span>Steps</span>\n                          </ng-container>\n                          <ng-template #StepText>\n                            <span>Step</span>\n                          </ng-template>\n                        </p>\n                      </div>\n                    </div><!-- .mb-view for mobile view only -->\n\n                    <div class=\"two-col-wdgt-view\">\n                      <div class=\"four columns col-1\">\n                        <p class=\"stage-startdate text-small\"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                        <p class=\"stage-enddate\"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                        <p class=\"stage-stepscount text-small\"><span class=\"divider\">|</span> {{ stage.StageDerCampaignTaskCount }}\n                          <ng-container *ngIf=\"stage.StageDerCampaignTaskCount > 1; else StepTextWdgt\">\n                            <span> Steps</span>\n                          </ng-container>\n                          <ng-template #StepTextWdgt>\n                            <span> Step</span>\n                          </ng-template>\n                        </p>\n                      </div>\n                    </div><!-- .two-col-wdgt-view -->\n\n                    <div class=\"md-view\">\n                      <div class=\"two columns col\">\n                        <p class=\"stage-startdate\"><span>Start</span>{{ stage.StageStartDate | dateTimeFormat | date }}</p>\n                      </div>\n                      <div class=\"two columns col cmpgn-cstm-mrgn\">\n                        <p class=\"stage-enddate\"><span>End</span>{{ stage.StageEndDate | dateTimeFormat | date }}</p>\n                      </div>\n                      <div class=\"three columns text-position col\">\n                        <p class=\"stage-stepscount\">{{ stage.StageDerCampaignTaskCount }}\n                          <ng-container *ngIf=\"stage.StageDerCampaignTaskCount > 1; else StepTextMd\">\n                            <span> Steps</span>\n                          </ng-container>\n                          <ng-template #StepTextMd>\n                            <span> Step</span>\n                          </ng-template>\n                        </p>\n                      </div>\n                    </div><!-- .md-view -->\n                  </a>\n                </div>\n              </ng-container><!-- stage -->\n            </div>\n            </soho-accordion-pane>\n          </soho-accordion>\n\n          </div><!-- .cmpgn-container -->\n        </div><!-- .row.cmpgns -->\n      </ng-container>\n    </div>\n  </div>",
                styles: ["\n    :host ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {\n      width: 40px;\n      right: 0;\n      position: relative;\n    }\n    .card-content {\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n    .card-group-action {\n      flex: 0 0 auto;\n    }\n    .list-content {\n      overflow: auto;\n      z-index: 1;\n    }\n    .list-content h1.cmpgn-name {\n      font-weight: 600;\n      margin-bottom: 5px;\n      white-space: normal;\n    }\n    .cmpgn-status, .cmpgn-lbl-stages, .cmpgn-lbl-steps, .cmpgn-lbl-targets, .cmpgn-end-date span,\n    .cmpgn-start-date span, .stage-status, .stage-startdate span, .stage-enddate span,\n    .stage-stepscount span, .cmpgn-unlaunched, .mb-view .stage-stepscount,\n    .mb-view .stage-startdate {\n      color: #999;\n      font-weight: 200;\n    }\n    .list-content p.cmpgn-launch {\n      display: inline-block;\n    }\n    .cmpgn-icon-container {\n      display: inline-block;\n      margin-right: 5px;\n      vertical-align: top;\n    }\n    .cmpgn-stages, .cmpgn-steps, .cmpgn-targets {\n      font-weight: 600;\n    }\n    .list-content .row.cmpgns {\n      max-width: 100%;\n      padding-right: 0;\n    }\n    .emptystatemessage-container,\n    .completedstatemessage-container {\n      margin: auto;\n    }\n    .emptystatemessage-btn-container {\n      text-align: center;\n    }\n    .cmpgn-container {\n      display: inline-block;\n      width: 100%;\n      border-bottom: 1px solid #999;\n    }\n    :host ::ng-deep .accordion-header > a > span {\n      width: 100% !important;\n    }\n    .cmpgn-accordion-header {\n      border-bottom-color: transparent;\n    }\n    .text-position {\n      text-align: center;\n    }\n    .cmpgn-sort-filter-container button.btn-menu {\n      min-width: auto;\n    }\n    .cmpgn-start-date span, .stage-startdate span {\n      margin-right: 10px;\n    }\n    .cmpgn-end-date {\n      margin-top: 0;\n    }\n    .mb-view .divider {\n      margin-right: 10px;\n    }\n    .cmpgn-end-date span, .stage-enddate span {\n      margin-right: 15px;\n    }\n    .cmpgns.stage {\n      border-top: 1px solid #999;\n      padding-top: 10px;\n      margin-top: 10px;\n    }\n    .padding-right {\n      padding-right: 20px;\n    }\n    .padding-bottom {\n      padding-bottom: 0;\n    }\n    .stage p {\n      font-size: 12px !important;\n    }\n    .stage h1 {\n      font-size: 14px;\n    }\n    .cmpgn-launch span {\n      color: #999;\n      display: block;\n      margin-bottom: 6px;\n      font-weight: 200;\n    }\n    .mb-view {\n      display: none;\n    }\n    .mb-view .dash {\n      margin: 0 10px;\n    }\n    .two-col-wdgt-view {\n      display: none;\n    }\n    .cmpgn-sort-filter-container .heading {\n      font-weight: 200;\n    }\n    :host ::ng-deep .cmpgn-sort-filter-container .btn-menu:focus:not(.hide-focus) {\n      box-shadow: none;\n    }\n    .cmpgn-sort-filter-container .cmpgn-icon-dropdown {\n      padding: 0;\n      margin-right: 0;\n      position: relative;\n      top: 2px;\n    }\n    .cmpgn-sortby-container,\n    .cmpgn-dropdownmenu-container,\n    .cmpgn-filterby-container {\n      display: inline-block;\n    }\n    .cmpgn-dropdownmenu-container {\n      border-left: 1px solid #5c5c5c;\n      height: 20px;\n      overflow-y: hidden;\n      position: relative;\n      top: 6px;\n      padding-left: 5px;\n      margin-left: 5px;\n    }\n    .cmpgn-sort-filter-container\n    .cmpgn-btn-style.btn-menu {\n      bottom: 7px;\n      position: relative;\n    }\n    .cmpgn-btn-style {\n      padding-right: 0;\n    }\n    .cmpgn-icon-filter {\n      position: relative;\n      top: 4px;\n      padding-left: 5px;\n    }\n    .cmpgn-sortby-container span,\n    .cmpgn-filterby-container span {\n      font-size: 12px;\n      color: #5c5c5c;\n      font-weight: 200;\n    }\n    :host ::ng-deep .cmpgn-icon-filter svg.icon:not(.cmpgn-icon) {\n      display: none;\n    }\n    .cmpgn-accordion-content .row.cmpgns.stage:last-child {\n      margin-bottom: 0;\n    }\n    :host ::ng-deep .accordion-header.is-focused:not(.hide-focus),\n    :host ::ng-deep .accordion-header > [class^=\"btn\"]:focus:not(.hide-focus) {\n      border-color: transparent;\n      box-shadow: none;\n    }\n    :host-context ::ng-deep .modal-content .modal-body-wrapper {\n      overflow-x: hidden !important;\n    }\n\n    /** One Column Widget */\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-startdate {\n      display: inline-block;\n      margin-right: 10px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    ::ng-deep .accordion-header > a {\n      margin-top: 10px;\n      padding: 0 0 0 20px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 .stage-stepscount {\n      display: inline-block;\n      margin-top: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-1 {\n      width: 100%;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view .col-2 {\n      margin-left: 0;\n      width: 25%;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .mb-view {\n      display: block !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .two-col-wdgt-view {\n      display: none !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .md-view {\n      display: none;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .accordion-header {\n      margin-top: -14px;\n    }\n\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {\n      position: relative;\n      top: 42px !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-left {\n      width: 75%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .stage .col-right {\n      width: 25%;\n      padding: 0;\n      margin-left: 0;\n      text-align: right;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .padding-right {\n      padding-right: 20px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-4-mb-styles {\n      margin-left: 0;\n      margin-right: 50px;\n      padding: 0;\n      width: 13.33333%;\n\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .btm-container {\n      clear: both;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left {\n      float: left;\n      width: 80%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right {\n      float: right;\n      width: 20%;\n      text-align: right;\n      padding-right: 0;\n      z-index: 1;\n      position: absolute;\n      right: 19px;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-left-2 {\n      padding: 0 0 10px 0;\n      width: 55%;\n      float: left;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .col-mb-style-right-2 {\n      float: left;\n      width: 45%;\n      padding: 0 0 10px 0;\n      margin-left: 0;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .one-col-wdgt {\n      display: inline-block !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .two-col-left {\n      display: none !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-end-date span,\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-start-date span {\n      display: inline-block !important;\n      padding-bottom: 0 !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-start-date {\n      display: block !important;\n    }\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-custom-style,\n    :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n    .cmpgn-margin {\n      margin-right: 0 !important;\n    }\n\n    /**************** Two Column Widget ****************/\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view {\n      display: block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .one-col-wdgt {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-left {\n      display: block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .mb-view {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .col-mb-style-left {\n      float: left;\n      width: 80%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .col-mb-style-right {\n      float: right;\n      width: 20%;\n      text-align: right;\n      padding-right: 0;\n      z-index: 1;\n      position: absolute;\n      right: 19px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-left {\n      padding: 0 0 10px 0;\n      width: 40%;\n      float: left;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .col-mb-style-right-2 {\n      width: 25%;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-start-date {\n      display: inline-block;\n      width: 120px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-end-date {\n      display: inline-block;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-end-date span,\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-start-date span  {\n      display: block;\n      padding-bottom: 6px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {\n      position: relative;\n      top: 18px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    ::ng-deep .accordion-header > a {\n      margin-top: 10px;\n      padding: 0 0 0 20px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .padding-right {\n      padding-right: 20px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .stage .col-left {\n      width: 75%;\n      padding: 0;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .stage .col-right {\n      width: 25%;\n      padding: 0;\n      margin-left: 0;\n      text-align: right;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .md-view {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .col-1 {\n      width: 100%;\n      margin-left: 0;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-startdate {\n      display: inline-block;\n      width: 120px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-enddate {\n      display: inline-block;\n      margin-top: 0;\n      width: 200px;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-stepscount {\n      display: inline-block;\n      margin-top: 0;\n      width: 235px;\n      text-align: right;\n      color: #999;\n      font-weight: 200;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-startdate,\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .stage-enddate {\n      color: #999;\n      font-weight: 200;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .two-col-wdgt-view .divider {\n      display: none;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .col-cmpgns.columns {\n      margin-right: 0 !important;\n    }\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-style,\n    :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width))\n    .cmpgn-margin {\n      margin-right: 0 !important;\n    }\n\n    /**************** Three Column Widget *****************/\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .one-col-wdgt {\n      display: none;\n    }\n\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .col-cmpgns.columns {\n      margin-left: 0;\n      margin-right: 20px;\n    }\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .cmpgn-custom-style {\n      margin-left: 0;\n      margin-right: 10px;\n    }\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .cmpgn-margin {\n      margin-right: 15px;\n      margin-left: 0;\n    }\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .cmpgn-cstm-mrgn {\n      margin-left: 15px;\n    }\n    :host-context(.triple-width, .widget:not(.to-single):not(.double-width):not(.quad-width))\n    .cmpgn-accordion-content.padding-top {\n      padding-top: 0;\n    }\n\n    /**************** Four Column Widget *****************/\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .one-col-wdgt {\n      display: none;\n    }\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .col-cmpgns.columns {\n      margin-left: 0;\n      margin-right: 20px;\n    }\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .cmpgn-custom-style {\n      margin-right: 10px;\n      margin-left: 0;\n    }\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .cmpgn-margin {\n      margin-right: 15px;\n      margin-left: 0;\n    }\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .cmpgn-cstm-mrgn {\n      margin-left: 15px;\n    }\n    :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n    .cmpgn-accordion-content.padding-top {\n      padding-top: 0;\n    }\n\n    /** Media Queries */\n    @media (max-width: 740px) {\n      .mb-view {\n        display: inline-block;\n      }\n      .mb-view .col-1 {\n        padding: 0;\n      }\n      .btm-container {\n        clear: both;\n      }\n      .col-4-mb-styles {\n        margin-left: 0;\n        width: 33.33333%;\n      }\n      .col-mb-style-left {\n        float: left;\n        width: 80%;\n        padding: 0;\n      }\n      .col-mb-style-right {\n        float: right;\n        width: 20%;\n        text-align: right;\n        padding-right: 0;\n        z-index: 1;\n        position: absolute;\n        right: 19px;\n      }\n      .col-mb-style-left-2 {\n        padding: 0 0 10px 0;\n        width: 55%;\n        float: left;\n      }\n      .col-mb-style-right-2 {\n        float: left;\n        width: 45%;\n        padding: 0 0 10px 0;\n        margin-left: 0;\n      }\n      .stage .col-left {\n        width: 80%;\n        padding: 0;\n      }\n      .stage .col-right {\n        width: 20%;\n        padding: 0;\n      }\n      .col-4-mb-styles {\n        margin-left: 0;\n        margin-right: 25px;\n        padding-left: 0;\n        width: 23.33333%;\n      }\n      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n      .col-cmpgns.columns {\n        margin-right: 0;\n      }\n    }\n    @media (min-width: 741px) and (max-width: 766px) {\n      .btm-container .col-4-mb-styles {\n        width: calc(8.33333333333% - 20px);\n        margin-left: 20px;\n        padding: 0;\n      }\n      .text-position {\n        text-align: center;\n      }\n      .two-col-wdgt-view .col-1 {\n        padding: 0;\n      }\n    }\n    @media (min-width: 741px) and (max-width: 1120px) {\n      .two-col-wdgt-view {\n        display: block;\n      }\n      .one-col-wdgt {\n        display: none;\n      }\n      .two-col-left {\n        display: block;\n      }\n      .mb-view {\n        display: none;\n      }\n      .col-mb-style-left {\n        float: left;\n        width: 80%;\n        padding: 0;\n        margin-left: 0;\n      }\n      .col-mb-style-right {\n        float: right;\n        width: 20%;\n        text-align: right;\n        padding-right: 0;\n        z-index: 1;\n        position: absolute;\n        right: 19px;\n      }\n      .two-col-left {\n        padding: 0 0 10px 0;\n        width: 40%;\n        float: left;\n        margin-left: 0;\n      }\n      .col-mb-style-right-2 {\n        width: 25%;\n      }\n      .cmpgn-start-date {\n        display: inline-block;\n        width: 120px;\n      }\n      .cmpgn-end-date {\n        display: inline-block;\n      }\n      .cmpgn-end-date span,  .cmpgn-start-date span  {\n        display: block;\n        padding-bottom: 6px;\n      }\n      :host ::ng-deep .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {\n        position: relative;\n        top: 7px;\n      }\n      :host ::ng-deep .is-safari .cmpgn-accordion-header.accordion-header.has-chevron > [class^='btn'] {\n        position: relative !important;\n        top: 20px !important;\n        width: 40px !important;\n      }\n      :host ::ng-deep .accordion-header > a {\n        margin-top: 10px;\n        padding: 0 0 0 20px;\n      }\n      :host ::ng-deep .is-safari .accordion-header > a {\n        margin-top: 10px;\n        padding: 0 0 0 20px;\n      }\n      .padding-right {\n        padding-right: 20px;\n      }\n      .stage .col-left {\n        width: 75%;\n        padding: 0;\n        margin-left: 0;\n      }\n      .stage .col-right {\n        width: 25%;\n        padding: 0;\n        margin-left: 0;\n        text-align: right;\n      }\n      .md-view {\n        display: none;\n      }\n      .two-col-wdgt-view .col-1 {\n        width: 100%;\n        margin-left: 0;\n      }\n      .two-col-wdgt-view .stage-startdate {\n        display: inline-block;\n        width: 120px;\n      }\n      .two-col-wdgt-view .stage-enddate {\n        display: inline-block;\n        margin-top: 0;\n        width: 200px;\n      }\n      .two-col-wdgt-view .stage-stepscount {\n        display: inline-block;\n        margin-top: 0;\n        width: 235px;\n        text-align: right;\n        color: #999;\n        font-weight: 200;\n      }\n      .two-col-wdgt-view .stage-startdate,\n      .two-col-wdgt-view .stage-enddate {\n        color: #999;\n        font-weight: 200;\n      }\n      .two-col-wdgt-view .divider {\n        display: none;\n      }\n      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n      .col-cmpgns.columns,\n      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n      .cmpgn-margin,\n      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width))\n      .cmpgn-custom-style {\n        margin-right: 0;\n      }\n\n    }\n    @media (min-width: 993px) and (max-width: 1120px) {\n\n    }\n    @media(min-width: 1121px) and (max-width: 1500px) {\n      .col-cmpgns.columns {\n        margin-left: 0;\n        margin-right: 20px;\n      }\n    }\n  "]
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