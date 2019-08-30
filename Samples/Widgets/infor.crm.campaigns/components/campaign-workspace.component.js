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
        };
        CampaignWorkspaceComponent.prototype.launchWebAppClicked = function () {
            var form = encodeURIComponent("CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))");
            var url = "?LogicalId={logicalId}&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
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
                _this.busyIndicator.activated = false;
            });
        };
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], CampaignWorkspaceComponent.prototype, "busyIndicator", void 0);
        CampaignWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n    <div class=\"cmpgn-workspace-container\" soho-busyindicator>\n      <div class=\"header-section\">\n        <div class=\"row top-padding bottom-padding workspace-custom-style\">\n          <div class=\"twelve columns\">\n            <ng-container *ngFor=\"let campaign of dataSet\">\n              <p class=\"test\">{{ campaign.Name }}</p>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n  :host ::ng-deep .modal-content .title > h2 {\n    font-weight: 600;\n  }\n  "]
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