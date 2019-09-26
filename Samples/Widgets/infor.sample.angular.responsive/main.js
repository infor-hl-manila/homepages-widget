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
    var ResponsiveWidgetComponent = /** @class */ (function () {
        function ResponsiveWidgetComponent() {
        }
        ResponsiveWidgetComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.items = ["Customer A", "Customer 2", "Customer 12345", "Lead customer", "Customer prospect"];
            this.widgetInstance.actions[0].execute = function () { return _this.showInfo(); };
        };
        ResponsiveWidgetComponent.prototype.updateChart = function (customer) {
            this.widgetContext.removeWidgetMessage();
            this.selectedCustomer = customer;
            this.chartData = [
                {
                    data: [
                        { name: "2014", value: this.getRandomChartValue() },
                        { name: "2015", value: this.getRandomChartValue() },
                        { name: "2016", value: this.getRandomChartValue() },
                        { name: "2017", value: this.getRandomChartValue() }
                    ]
                }
            ];
        };
        ResponsiveWidgetComponent.prototype.showInfo = function () {
            this.widgetContext.showWidgetMessage({
                type: lime_1.WidgetMessageType.Info,
                message: "Select a customer to show chart"
            });
        };
        ResponsiveWidgetComponent.prototype.getRandomChartValue = function () {
            return Math.floor(Math.random() * 1000000);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ResponsiveWidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], ResponsiveWidgetComponent.prototype, "widgetInstance", void 0);
        ResponsiveWidgetComponent = __decorate([
            core_1.Component({
                template: "\n\t<div class=\"lm-height-full\" [class.item-selected]=\"selectedCustomer\">\n\t\t<button class=\"lm-margin-md-l\"\n\t\t\tsoho-button=\"icon\" icon=\"left-arrow\"\n\t\t\t(click)=\"selectedCustomer = null\"\n\t\t\t*ngIf=\"selectedCustomer\">\n\t\t\t\tGo back\n\t\t</button>\n\t\t<soho-listview class=\"widget-listview lm-scroll-no-x\">\n\t\t\t<li soho-listview-item *ngFor=\"let item of items\" (click)=\"updateChart(item)\">\n\t\t\t\t<p soho-listview-header>{{item}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t\t<div class=\"widget-chartview chart-container\" *ngIf=\"selectedCustomer\">\n\t\t\t<div soho-chart\n\t\t\t\t[dataSet]=\"chartData\"\n\t\t\t\tformatterString=\"$,\"\n\t\t\t\ttype=\"column\">\n\t\t\t</div>\n\t\t</div>\n\t</div>",
                styles: ["\n\t\t/* This host-context selector applies when the widget is set to have single width, or when it is forced to\n\t\tsingle width due to small screen resolution */\n\n\t\t/* Listview is hidden when an item is selected, only the chart will be displayed */\n\n\t\t:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n\t\t.item-selected .widget-listview{display:none;}\n\n\t\t/* Chart occupies full width when visible in single width mode */\n\n\t\t:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n\t\t.widget-chartview{width:100%;}\n\n\t\t/* This host-context selector applies when the widget is set to have double, triple or quad width,\n\t\t\tand not forced to single width due to small screen resolution */\n\n\t\t/* Listview shrinks to 50% and shown side by side with chart */\n\n\t\t:host-context(.double-width, .triple-width, .quad-width, .widget:not(.to-single))\n\t\t.item-selected .widget-listview{width:50%;}\n\n\t\t/* Base rules for the listview and chart views */\n\t\t.widget-listview{width:100%;float:left;height:100%;}\n\n\t\t.widget-chartview{width:50%;height:calc(100% - 36px);float:left;}\n\n\t\t.item-selected .widget-listview{border-right:1px solid #d8d8d8;}\n\t"]
            })
        ], ResponsiveWidgetComponent);
        return ResponsiveWidgetComponent;
    }());
    exports.ResponsiveWidgetComponent = ResponsiveWidgetComponent;
    var ResponsiveWidgetModule = /** @class */ (function () {
        function ResponsiveWidgetModule() {
        }
        ResponsiveWidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoListViewModule,
                    sohoxi_angular_1.SohoChartModule
                ],
                declarations: [ResponsiveWidgetComponent],
                entryComponents: [ResponsiveWidgetComponent]
            })
        ], ResponsiveWidgetModule);
        return ResponsiveWidgetModule;
    }());
    exports.ResponsiveWidgetModule = ResponsiveWidgetModule;
    exports.getActions = function () {
        return [{ isPrimary: true, standardIconName: "#icon-info", text: "Information" }];
    };
});
//# sourceMappingURL=main.js.map