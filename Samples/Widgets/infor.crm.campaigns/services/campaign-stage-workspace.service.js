var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@infor/sohoxi-angular"], function (require, exports, core_1, sohoxi_angular_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CampaignStageWorkspaceService = /** @class */ (function () {
        function CampaignStageWorkspaceService(capService) {
            this.capService = capService;
        }
        CampaignStageWorkspaceService.prototype.open = function (options) {
            var _this = this;
            this.capDialog = this.capService.contextualactionpanel(options.component, options.viewRef);
            this.capDialog.options({
                centerTitle: true
            });
            this.capDialog.buttons([
                {
                    align: "left",
                    click: function () { return _this.capDialog.close(); },
                },
                {
                    align: "right",
                    click: function () { return _this.capDialog.componentPanel.campaignWebAppClicked(); },
                }
            ]);
            this.capDialog.apply(function (component) {
                if (options.props) {
                    for (var propertyKey in options.props) {
                        if (options.props.hasOwnProperty(propertyKey)) {
                            component[propertyKey] = options.props[propertyKey];
                        }
                    }
                }
            });
            this.capDialog.title(options.title);
            this.capDialog.trigger("immediate");
            this.capDialog.open();
        };
        CampaignStageWorkspaceService.prototype.close = function (refresh) {
            this.capDialog.close(true);
        };
        CampaignStageWorkspaceService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoContextualActionPanelService])
        ], CampaignStageWorkspaceService);
        return CampaignStageWorkspaceService;
    }());
    exports.CampaignStageWorkspaceService = CampaignStageWorkspaceService;
});
//# sourceMappingURL=campaign-stage-workspace.service.js.map