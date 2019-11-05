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
<<<<<<< HEAD
=======
            this.size$ = this.widgetContext.getSize();
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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
<<<<<<< HEAD
                template: "\n\t<div class=\"lm-height-full\" [class.item-selected]=\"selectedCustomer\">\n\t\t<button class=\"lm-margin-md-l\"\n\t\t\tsoho-button=\"icon\" icon=\"left-arrow\"\n\t\t\t(click)=\"selectedCustomer = null\"\n\t\t\t*ngIf=\"selectedCustomer\">\n\t\t\t\tGo back\n\t\t</button>\n\t\t<soho-listview class=\"widget-listview lm-scroll-no-x\">\n\t\t\t<li soho-listview-item *ngFor=\"let item of items\" (click)=\"updateChart(item)\">\n\t\t\t\t<p soho-listview-header>{{item}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t\t<div class=\"widget-chartview chart-container\" *ngIf=\"selectedCustomer\">\n\t\t\t<div soho-chart\n\t\t\t\t[dataSet]=\"chartData\"\n\t\t\t\tformatterString=\"$,\"\n\t\t\t\ttype=\"column\">\n\t\t\t</div>\n\t\t</div>\n\t</div>",
                styles: [
                    "\n\t/* This host-context selector applies when the widget is set to have single width, or when it is forced to\n\tsingle width due to small screen resolution */\n\n\t/* Listview is hidden when an item is selected, only the chart will be displayed */\n\n:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n.item-selected .widget-listview{display:none;}\n\n/* Chart occupies full width when visible in single width mode */\n\n:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))\n.widget-chartview{width:100%;}\n\n/* This host-context selector applies when the widget is set to have double, triple or quad width,\n\tand not forced to single width due to small screen resolution */\n\n/* Listview shrinks to 50% and shown side by side with chart */\n\n:host-context(.double-width, .triple-width, .quad-width, .widget:not(.to-single))\n.item-selected .widget-listview{width:50%;}\n\n/* Base rules for the listview and chart views */\n.widget-listview{width:100%;float:left;height:100%;}\n\n.widget-chartview{width:50%;height:calc(100% - 36px);float:left;}\n\n.item-selected .widget-listview{border-right:1px solid #d8d8d8;}"
                ]
=======
                template: "\n\t<div class=\"lm-height-full\"\n\t\t  [class.item-selected]=\"selectedCustomer\"\n\t\t  [class.single-width]=\"(size$ | async)?.cols === 1\">\n\t\t<button class=\"lm-margin-md-l\"\n\t\t\t\t  soho-button=\"icon\"\n\t\t\t\t  icon=\"left-arrow\"\n\t\t\t\t  (click)=\"selectedCustomer = null\"\n\t\t\t\t  *ngIf=\"selectedCustomer\">\n\t\t\tGo back\n\t\t</button>\n\t\t<soho-listview class=\"lm-scroll-no-x\" [class.lm-brd]=\"selectedCustomer\">\n\t\t\t<li soho-listview-item\n\t\t\t\t *ngFor=\"let item of items\"\n\t\t\t\t (click)=\"updateChart(item)\">\n\t\t\t\t<p soho-listview-header>{{item}}</p>\n\t\t\t</li>\n\t\t</soho-listview>\n\t\t<div class=\"chart-wrapper\"\n\t\t\t  *ngIf=\"selectedCustomer\">\n\t\t\t<div soho-column\n\t\t\t\t  [dataset]=\"chartData\"\n\t\t\t\t  formatterString=\"$,\"\n\t\t\t\t  type=\"column\">\n\t\t\t</div>\n\t\t</div>\n\t</div>",
                styles: ["\n\t\tsoho-listview {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.item-selected soho-listview {\n\t\t\twidth: 50%;\n\t\t\tborder-right: 1px solid;\n\t\t}\n\n\t\t.item-selected.single-width soho-listview {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.chart-wrapper {\n\t\t\twidth: 50%;\n\t\t\theight: calc(100% - 36px);\n\t\t\tfloat: left;\n\t\t}\n\n\t\t.single-width .chart-wrapper {\n\t\t\twidth: 100%;\n\t\t}\n\t"]
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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
<<<<<<< HEAD
                    sohoxi_angular_1.SohoChartModule
=======
                    sohoxi_angular_1.SohoColumnModule
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
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