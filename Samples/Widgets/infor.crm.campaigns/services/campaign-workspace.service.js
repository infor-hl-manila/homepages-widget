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
    var CampaignWorkspaceService = /** @class */ (function () {
        function CampaignWorkspaceService(capService) {
            this.capService = capService;
        }
        CampaignWorkspaceService.prototype.open = function (options) {
            var _this = this;
            this.capDialog = this.capService.contextualactionpanel(options.component, options.viewRef);
            this.capDialog.options({
                centerTitle: true
            });
            this.capDialog.buttons([
                {
                    align: "left",
                    icon: "#icon-close",
                    cssClass: "btn-icon",
                    click: function () { return _this.capDialog.close(); },
                },
                {
                    icon: "#icon-launch",
                    align: "right",
                    cssClass: "btn-icon",
                    click: function () { return _this.capDialog.close(); },
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
        CampaignWorkspaceService.prototype.close = function (refresh) {
            this.capDialog.close(true);
        };
        CampaignWorkspaceService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoContextualActionPanelService])
        ], CampaignWorkspaceService);
        return CampaignWorkspaceService;
    }());
    exports.CampaignWorkspaceService = CampaignWorkspaceService;
});
//# sourceMappingURL=campaign-workspace.service.js.map