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
define(["require", "exports", "@angular/common", "@angular/core", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SettingKeys = /** @class */ (function () {
        function SettingKeys() {
        }
        SettingKeys.primaryChartType = "primaryChartType";
        SettingKeys.secondaryChartType = "secondaryChartType";
        return SettingKeys;
    }());
    var WidgetComponent = /** @class */ (function () {
        function WidgetComponent(toastService) {
            this.toastService = toastService;
            this.chartData = [
                {
                    data: [
                        { name: "Automotive", value: 7 },
                        { name: "Distribution", value: 10 },
                        { name: "Equipment", value: 20 },
                        { name: "Fashion", value: 20 },
                        { name: "Food & Beverage", value: 15 },
                        { name: "Healthcare", value: 10 },
                        { name: "Other", value: 18 }
                    ]
                }
            ];
            this.logPrefix = "[infor.sample.angular.banner] ";
        }
        WidgetComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.widgetContext.isBanner()) {
                this.showInitialBannerColorToast();
                this.widgetInstance.bannerBackgroundChanged = function (newColor) {
                    _this.showBackgroundColorChangedToast(newColor);
                };
            }
            this.updateCharts();
            this.widgetInstance.settingsSaved = function () { return _this.updateCharts(); };
        };
        WidgetComponent.prototype.showInitialBannerColorToast = function () {
            var bannerColor = this.widgetContext.getBannerBackgroundColor();
            this.toastService.show({
                title: "Banner added",
                message: "The banner widget container is using background color " + bannerColor,
                timeout: 5000,
                position: sohoxi_angular_1.SohoToastService.BOTTOM_RIGHT
            });
        };
        WidgetComponent.prototype.showBackgroundColorChangedToast = function (newColor) {
            this.toastService.show({
                title: "Banner container changed",
                message: "The banner container is now using background color " + newColor,
                timeout: 5000,
                position: sohoxi_angular_1.SohoToastService.BOTTOM_RIGHT
            });
        };
        WidgetComponent.prototype.updateCharts = function () {
            lime_1.Log.debug(this.logPrefix + "updating charts");
            var commonOptions = {
                labels: { hideLabels: true },
                dataset: this.chartData,
                showLegend: false,
            };
            this.primaryChart.chartOptions = __assign({}, commonOptions, { type: this.getChartTypeFromSetting(SettingKeys.primaryChartType) });
            this.secondaryChart.chartOptions = __assign({}, commonOptions, { type: this.getChartTypeFromSetting(SettingKeys.secondaryChartType) });
        };
        WidgetComponent.prototype.getChartTypeFromSetting = function (setting) {
            return this.widgetContext.getSettings().get(setting, "bar");
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], WidgetComponent.prototype, "widgetInstance", void 0);
        __decorate([
            core_1.ViewChild("primaryChart", { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoChartComponent)
        ], WidgetComponent.prototype, "primaryChart", void 0);
        __decorate([
            core_1.ViewChild("secondaryChart", { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoChartComponent)
        ], WidgetComponent.prototype, "secondaryChart", void 0);
        WidgetComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"wrapper\">\n\t\t<div class=\"primary chart-container\">\n\t\t\t<div soho-chart #primaryChart></div>\n\t\t</div>\n\t\t<div class=\"secondary chart-container\">\n\t\t\t<div soho-chart #secondaryChart></div>\n\t\t</div>\n\t</div>\n\t",
                styles: [
                    "\n\t.wrapper{height:100%;width:100%;display:flex;}\n\n\t/* Hides the second chart on smaller screens, or when there are multiple widgets in the banner */\n\t:host-context(.to-single, .to-double, .double-width, .widget:not(.quad-width):not(.triple-width))\n.secondary.chart-container{display:none;}\n\n\t.primary.chart-container{flex:2;}\n\t.secondary.chart-container{flex:1;}\n\n\t.chart-pie{height:100%;}\n\t"
                ]
            }),
            __metadata("design:paramtypes", [sohoxi_angular_1.SohoToastService])
        ], WidgetComponent);
        return WidgetComponent;
    }());
    exports.WidgetComponent = WidgetComponent;
    var WidgetModule = /** @class */ (function () {
        function WidgetModule() {
        }
        WidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    sohoxi_angular_1.SohoChartModule
                ],
                declarations: [
                    WidgetComponent
                ],
                entryComponents: [
                    WidgetComponent
                ]
            })
        ], WidgetModule);
        return WidgetModule;
    }());
    exports.WidgetModule = WidgetModule;
});
//# sourceMappingURL=main.js.map