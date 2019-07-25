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
define(["require", "exports", "@angular/common", "@angular/core", "lime", "../components/reminder-workspace.component", "../datetime.pipe", "../services/data.service", "../services/reminder-workspace.service", "../services/sort-filter.service"], function (require, exports, common_1, core_1, lime_1, reminder_workspace_component_1, datetime_pipe_1, data_service_1, reminder_workspace_service_1, sort_filter_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RemindersListComponent = /** @class */ (function () {
        function RemindersListComponent(widgetContext, widgetInstance, dataService, datePipe, dateTimePipe, sortFilterService, reminderWorkspaceService, viewRef) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.dataService = dataService;
            this.datePipe = datePipe;
            this.dateTimePipe = dateTimePipe;
            this.sortFilterService = sortFilterService;
            this.reminderWorkspaceService = reminderWorkspaceService;
            this.viewRef = viewRef;
            this.showAppBanner = true;
            this.viewContent = false;
            this.dataService.init(widgetContext);
            this.instanceId = widgetContext.getWidgetInstanceId();
        }
        RemindersListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setBusy(true);
            this.loadActivities();
            this.language = this.widgetContext.getLanguage();
            this.dataService.getMongooseConfig();
            this.widgetInstance.actions[0].execute = function () { return _this.inforCRMiOS(); };
            this.widgetInstance.actions[1].execute = function () { return _this.webAppCRM(); };
        };
        RemindersListComponent.prototype.showDialogWorkspace = function (ID) {
            var _this = this;
            this.reminderWorkspaceService.open({
                component: reminder_workspace_component_1.ReminderWorkspaceComponent,
                viewRef: this.viewRef,
                props: {
                    widgetContext: this.widgetContext,
                    activityID: ID
                }
            });
            this.reminderWorkspaceService.capDialog.closed(function (d) {
                _this.loadActivities();
                _this.setBusy(false);
            });
        };
        //Remove banner section
        RemindersListComponent.prototype.dismissBanner = function () {
            this.showAppBanner = false;
        };
        RemindersListComponent.prototype.inforCRMiOS = function () {
            this.widgetContext.launch({ url: "https://itunes.apple.com/us/app/infor-cloudsuite-crm-mobile/id1401846395?ls=1&mt=8" });
        };
        RemindersListComponent.prototype.loadActivities = function () {
            var _this = this;
            //current date and time
            var now = new Date();
            //convert current date and time to EST
            var dateTimeNow = now.setTime(now.getTime() + now.getTimezoneOffset() / 60 * 1000);
            var startOfToday = new Date().setHours(0, 0, 0, 0);
            var endOfToday = new Date().setHours(23, 59, 0, 0);
            this.dataService.getActivities().subscribe(function (response) {
                _this.activities = response.data;
                _this.activities.sort(function (a, b) {
                    var dateA = _this.dateTimePipe.transform(a.EndDate);
                    var dateB = _this.dateTimePipe.transform(b.EndDate);
                    return dateB - dateA;
                });
                //Filter by past reminders
                _this.pastActivities = _this.sortFilterService
                    .filterByDate(response.data, "EndDate", startOfToday, false);
                //Filter by today
                _this.todayActivities = _this.sortFilterService
                    .filterWithRange(response.data, "EndDate", dateTimeNow, false, startOfToday);
                _this.viewContent = true;
                _this.countReminders = _this.pastActivities.length + _this.todayActivities.length;
                _this.setBusy(false);
                _this.completedStateMessage();
                _this.pastCount = _this.pastActivities.length;
                _this.todayCount = _this.todayActivities.length;
                _this.hasTodaysReminders = _this.todayCount > 0;
                _this.hasThisWeeksReminders = _this.thisWeekCount > 0;
                _this.hasPastReminders = _this.pastCount > 0;
            }, function (error) {
                _this.onRequestError(error);
            });
        };
        RemindersListComponent.prototype.webAppCRM = function () {
            var logicalID = this.widgetContext.getLogicalId();
            var form = encodeURIComponent("CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))");
            var url = "?LogicalId=" + logicalID + "&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
        };
        RemindersListComponent.prototype.onRequestError = function (error) {
            this.isErrorState = true;
            this.setBusy(false);
        };
        RemindersListComponent.prototype.completedStateMessage = function () {
            (!this.countReminders) ? (this.completedState = true, this.viewContent = false) : this.completedState = false;
        };
        RemindersListComponent.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], RemindersListComponent.prototype, "widgetSettingsContext", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], RemindersListComponent.prototype, "widgetSettingsInstance", void 0);
        RemindersListComponent = __decorate([
            core_1.Component({
                providers: [datetime_pipe_1.DateTimePipe, common_1.DatePipe],
                selector: "reminders-list",
                template: "\n      <div class=\"crm-reminder-widget\">\n        <div class=\"card-content\">\n          <div class=\"crm-banner-app\" [hidden]=\"!showAppBanner\">\n            <div class=\"twelve columns\">\n              <p>\n                <a href=\"#\" (click)=\"inforCRMiOS()\">{{language?.crmLinkText}}</a> {{language?.availableText}}\n              </p>\n              <button type=\"text\" class=\"notification-close\" (click)=\"dismissBanner()\">\n                <svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n                  <use xlink:href=\"#icon-close\"></use>\n                </svg>\n                <span class=\"audible\">[Close]</span>\n              </button>\n            </div>\n          </div>\n          <div class=\"count-reminders\" [hidden]=\"!viewContent\">\n            <div class=\"twelve columns\">\n              <p *ngIf=\"countReminders <= 1; else pluralText\">{{ countReminders }} {{ language?.titleHeaderSingular }}</p>\n                <ng-template #pluralText><p>{{ countReminders }} {{ language?.titleHeaderPlural }}</p></ng-template>\n            </div>\n          </div>\n          <div class=\"emptystatemessage-container\" [hidden]=\"!isErrorState\">\n            <div soho-emptymessage\n              [title]=\"language.get('emptyStateTitle')\"\n              [info]=\"language.get('emptyStateInfo')\"\n              [icon]=\"'icon-empty-error-loading'\"\n              [color]=\"'azure'\"\n            >\n            </div>\n          </div>\n          <div class=\"completedstatemessage-container\" [hidden]=\"!completedState\">\n            <div soho-emptymessage\n            [title]=\"language.get('completedStateTitle')\"\n            [info]=\"language.get('completedStateInfo')\"\n            [icon]=\"'icon-empty-no-tasks'\"\n            [color]=\"'azure'\">\n            </div>\n          </div>\n          <!-- START: .card-content-container-->\n          <div class=\"card-content-container\">\n            <!-- Template of Today's Reminders -->\n            <div *ngIf=\"hasTodaysReminders\">\n              <div class=\"card-container-title\">\n                <p class=\"card-header-title\">{{ language?.today | uppercase }} ({{todayCount}})</p>\n              </div>\n              <div class=\"card-container\" [ngClass]=\"{'card-container-border-bottom': hasPastReminders != 'hasPastReminders'}\">\n                <div class=\"reminder-container\" *ngFor=\"let activity of todayActivities\">\n                  <div class=\"col-6 h40\">\n                    <h1 class=\"summary\">{{ activity.Summary }}</h1>\n                  </div>\n                  <div class=\"col-6\">\n                    <p class=\"end-datetime\" *ngIf=\"(activity.EndDate | dateTimeFormat | date: 'HH:mm:ss.SSS') == '23:59:00.000'\">{{activity.StartDate | dateTimeFormat | date: \"shortTime\" }} - {{ activity.EndDate | dateTimeFormat | date: \"shortTime\" }}</p>\n                    <p class=\"end-datetime\" *ngIf=\"(activity.EndDate | dateTimeFormat | date: 'HH:mm:ss.SSS') != '23:59:00.000'\">{{activity.StartDate | dateTimeFormat | date: \"shortTime\" : \"UTC+4\" }} - {{ activity.EndDate | dateTimeFormat | date: \"shortTime\" : \"UTC+4\" }}</p>\n                    <p class=\"participants\"> {{language?.participants}} {{ activity.AttendeeCount }}</p>\n                  </div>\n                  <div class=\"m-bottom-0\">\n                    <button soho-button=\"primary\" id=\"{{instanceId}}-custom-btn\" (click)=\"showDialogWorkspace(activity.ID)\" style=\"height: 45px;\">{{language?.buttonLabel}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Template of Past Reminders -->\n            <div *ngIf=\"hasPastReminders\">\n              <div class=\"card-container-title\">\n                <p class=\"card-header-title\">{{ language?.pastReminders | uppercase }} ({{pastCount}})</p>\n              </div>\n              <div class=\"card-container\">\n                <div class=\"reminder-container\" *ngFor=\"let activity of pastActivities\">\n                  <div class=\"col-6 h40\">\n                    <h1 class=\"summary\">{{ activity?.Summary }}</h1>\n                  </div>\n                  <div class=\"col-6\">\n                      <p class=\"end-datetime\"> {{ activity?.EndDate | dateTimeFormat | date: \"d MMM\" : \"UTC+4\" }}</p>\n                      <p class=\"participants\"> {{language?.participants}} {{ activity?.AttendeeCount }}</p>\n                  </div>\n                  <div class=\"m-bottom-0\">\n                    <button soho-button=\"primary\" id=\"{{instanceId}}-custom-btn\" (click)=\"showDialogWorkspace(activity.ID)\" style=\"height: 45px;\">{{language?.buttonLabel}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div><!--END .card-content-container -->\n        </div>\n      </div>\n    ",
                styles: ["\n      .crm-banner-app, .count-reminders { background: #f0f0f0; border-bottom: 1px solid #bdbdbd; width: 100%; display: inline-block; }\n      .crm-banner-app p, .count-reminders p { margin: 10px 0; display: inline-block; }\n      .crm-banner-app p a { font-weight: 600; text-decoration: underline; color: #1a1a1a; }\n      .h40 { height: 40px; }\n      .m-bottom-0 { margin-bottom: 0; }\n      .crm-banner-app p span a { color: #1a1a1a; }\n      .card-content { display: flex; flex-direction: column; overflow: hidden; }\n      .card-content-container { overflow: auto; flex: 0 1 auto; }\n      .card-container { display: inline-block; padding: 5px 0px 5px 16px; width: 100%; }\n      .card-container-title { display: inline-block; padding: 5px 0px 0px 16px; }\n      .card-container .card-header-title { color: #5c5c5c; margin-bottom: 6px; }\n      .card-header-title { color: #5c5c5c; margin-bottom: 6px; }\n      .card-container-border-bottom { border-bottom: 1px solid #bdbdbd; }\n      .notification-close { float: right; margin-right: 20px; margin-top: 11px; }\n      .emptystatemessage-container, .completedstatemessage-container { margin: auto auto; }\n      .emptystatemessage-container .empty-info { color: #bcbcbc !important; }\n      .reminder-container { border: 1px solid #d8d8d8; padding: 16px; display: inline-block; margin-right: 16px; margin-bottom: 15px; }\n      .reminder-container p.start-datetime, .reminder-container p.end-datetime { line-height: normal; }\n      .reminder-container p { color: #5c5c5c; margin-top: 0; margin-bottom: 0; text-align: right;}\n      .reminder-container h1 { display: -webkit-box; font-size: 13pt; line-height: 2rem; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n      .reminder-container button { width: 100%; margin-top: 12px; }\n      .col-5 { width: 40%; float: left; }\n      .col-6 { width: 50%; float: left; }\n      [hidden] { display: none !important;}\n      :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .reminder-container { width: 100% !important; }\n      :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .reminder-container { width: calc(50% - 16px); }\n      :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(33.3333333% - 16px); }\n      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width)) .reminder-container { width: calc(25% - 16px); }\n      :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .card-container { padding: 5px 16px; }\n\n      @media (min-width: 741px) and (max-width: 992px) {\n        :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(50% - 16px); }\n        :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width)) .reminder-container { width: calc(50% - 16px); }\n      }\n\n      @media (min-width: 993px) and (max-width: 1120px) {\n        :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width)) .reminder-container { width: calc(50% - 16px); }\n        :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(50% - 16px); }\n      }\n\n      @media(min-width: 1121px) and (max-width: 1500px) {\n        :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width)) .reminder-container { width: calc(33.3333333% - 16px); }\n      }\n\n      @media (max-width: 767px) {\n        .notification-close { margin-right: 0; }\n      }\n\n      @media only screen (max-width: 1120px) and (min-width: 756px) {\n        :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(50% - 16px); }\n      }\n    "]
            }),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, data_service_1.DataService,
                common_1.DatePipe,
                datetime_pipe_1.DateTimePipe,
                sort_filter_service_1.SortFilterService,
                reminder_workspace_service_1.ReminderWorkspaceService,
                core_1.ViewContainerRef])
        ], RemindersListComponent);
        return RemindersListComponent;
    }());
    exports.RemindersListComponent = RemindersListComponent;
});
//# sourceMappingURL=reminders-list.component.js.map