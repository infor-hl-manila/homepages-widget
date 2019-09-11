var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignStageWorkspaceComponent = /** @class */ (function () {
        function CampaignStageWorkspaceComponent() {
            // @Input() widgetSettingsContext: IWidgetSettingsContext;
            // @Input() widgetSettingsInstance: IWidgetSettingsInstance;
            this.message = "HOLA";
            console.log("widget", this);
        }
        CampaignStageWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n    <div class=\"cmpgn-stage-workspace-container\">\n      <div class=\"header-section\">\n        <a (click)=\"backBtn()\">Back</a>\n      </div><!-- .header-section -->\n      <div class=\"detail-section\">\n      </div>\n    </div><!-- .cmpgn-stage-workspace-container -->\n  ",
                styles: ["\n  "]
            }),
            __metadata("design:paramtypes", [])
        ], CampaignStageWorkspaceComponent);
        return CampaignStageWorkspaceComponent;
    }());
    exports.CampaignStageWorkspaceComponent = CampaignStageWorkspaceComponent;
});
//# sourceMappingURL=campaign-stage-workspace.component.js.map