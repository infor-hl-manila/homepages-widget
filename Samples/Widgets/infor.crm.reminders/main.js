var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "./components/reminder-workspace.component", "./components/reminders-list.component", "./datetime.pipe", "./services/sort-filter.service"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, reminder_workspace_component_1, reminders_list_component_1, datetime_pipe_1, sort_filter_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RemindersWidgetComponent = /** @class */ (function () {
        function RemindersWidgetComponent() {
        }
        RemindersWidgetComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.widgetInstance.actions[0].execute = function () { return _this.inforCRMiOS(); };
            this.widgetInstance.actions[1].execute = function () { return _this.webAppCRM(); };
        };
        RemindersWidgetComponent.prototype.inforCRMiOS = function () {
            this.widgetContext.launch({ url: "https://itunes.apple.com/us/app/infor-cloudsuite-crm-mobile/id1401846395?ls=1&mt=8" });
        };
        RemindersWidgetComponent.prototype.webAppCRM = function () {
            var logicalID = this.widgetContext.getLogicalId();
            var form = encodeURIComponent("CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))");
            var url = "?LogicalId=" + logicalID + "&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], RemindersWidgetComponent.prototype, "widgetContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], RemindersWidgetComponent.prototype, "widgetInstance", void 0);
        RemindersWidgetComponent = __decorate([
            core_1.Component({
                template: "\n  <reminders-list></reminders-list>\n  "
            }),
            __metadata("design:paramtypes", [])
        ], RemindersWidgetComponent);
        return RemindersWidgetComponent;
    }());
    exports.RemindersWidgetComponent = RemindersWidgetComponent;
    var RemindersWidgetModule = /** @class */ (function () {
        function RemindersWidgetModule() {
        }
        RemindersWidgetModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    sohoxi_angular_1.SohoBusyIndicatorModule,
                    forms_1.FormsModule,
                    sohoxi_angular_1.SohoButtonModule,
                    sohoxi_angular_1.SohoComponentsModule,
                    sohoxi_angular_1.SohoIconModule,
                ],
                declarations: [
                    datetime_pipe_1.DateTimePipe,
                    RemindersWidgetComponent,
                    reminders_list_component_1.RemindersListComponent,
                    reminder_workspace_component_1.ReminderWorkspaceComponent
                ],
                entryComponents: [
                    RemindersWidgetComponent,
                    reminder_workspace_component_1.ReminderWorkspaceComponent
                ],
                providers: [
                    sort_filter_service_1.SortFilterService
                ]
            })
        ], RemindersWidgetModule);
        return RemindersWidgetModule;
    }());
    exports.RemindersWidgetModule = RemindersWidgetModule;
    exports.getActions = function (context) {
        var language = context.getLanguage();
        return [{
                text: language.get("inforCRMiOS")
            },
            {
                text: language.get("launchWebApp")
            }];
    };
});
//# sourceMappingURL=main.js.map