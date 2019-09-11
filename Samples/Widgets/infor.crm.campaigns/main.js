var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@infor/sohoxi-angular", "./components/campaign-workspace.component", "./components/campaigns-list.component", "./date.pipe"], function (require, exports, common_1, core_1, sohoxi_angular_1, campaign_workspace_component_1, campaigns_list_component_1, date_pipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignsWidgetComponent = /** @class */ (function () {
        // tslint:disable-next-line:no-empty
        function CampaignsWidgetComponent() {
        }
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignsWidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], CampaignsWidgetComponent.prototype, "widgetInstance", void 0);
        CampaignsWidgetComponent = __decorate([
            core_1.Component({
                template: "\n    <campaigns-list></campaigns-list>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], CampaignsWidgetComponent);
        return CampaignsWidgetComponent;
    }());
    exports.CampaignsWidgetComponent = CampaignsWidgetComponent;
    var CampaignsWidgetModule = /** @class */ (function () {
        function CampaignsWidgetModule() {
        }
        CampaignsWidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoBusyIndicatorModule,
                    sohoxi_angular_1.SohoComponentsModule
                ],
                declarations: [
                    date_pipe_1.DateTimePipe,
                    campaigns_list_component_1.CampaignsListComponent,
                    CampaignsWidgetComponent,
                    campaign_workspace_component_1.CampaignWorkspaceComponent
                ],
                entryComponents: [
                    CampaignsWidgetComponent,
                    campaign_workspace_component_1.CampaignWorkspaceComponent
                ]
            })
        ], CampaignsWidgetModule);
        return CampaignsWidgetModule;
    }());
    exports.CampaignsWidgetModule = CampaignsWidgetModule;
    exports.getActions = function (context) {
        return [
            {
                isPrimary: true,
                standardIconName: "#icon-launch",
                text: "Launch Web Application"
            }
        ];
    };
});
//# sourceMappingURL=main.js.map