var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@infor/sohoxi-angular", "lime", "../datetime.pipe", "../services/data.service", "../services/reminder-workspace.service"], function (require, exports, common_1, core_1, sohoxi_angular_1, lime_1, datetime_pipe_1, data_service_1, reminder_workspace_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReminderWorkspaceComponent = /** @class */ (function () {
        function ReminderWorkspaceComponent(dateTimePipe, dataService, toastService, datePipe, dialogService, reminderWorkSpaceService) {
            this.dateTimePipe = dateTimePipe;
            this.dataService = dataService;
            this.toastService = toastService;
            this.datePipe = datePipe;
            this.dialogService = dialogService;
            this.reminderWorkSpaceService = reminderWorkSpaceService;
            this.isHidden = true;
            this.options = { showTime: true, timeFormat: "h:mm a", dateFormat: "d MMM yyyy", useCurrentTime: true };
            this.dataModel = { IsCompleted: "", Completed: "", _ItemId: "", EndDate: "", Result: "" };
        }
        ReminderWorkspaceComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.busyIndicator.activated = true;
            this.lang = this.widgetContext.getLanguage();
            this.launchToastMessage = this.lang.get("launchToastMessage");
            this.options = { showTime: true, timeFormat: "h:mm a", dateFormat: "d MMM yyyy", useCurrentTime: true };
            this.dataService.getActivity(this.activityID).subscribe(function (response) {
                _this.activity = response.data;
                var formattedDate = _this.dateTimePipe.transform(_this.activity.EndDate);
                _this.dataModel.EndDate = _this.datePipe.transform(formattedDate, "dd MMM yyyy hh:mm aaa");
                _this.dataModel._ItemId = _this.activity._ItemId;
                // tslint:disable-next-line:no-empty
            }, function () { }, function () {
                _this.getOutcomeList();
            });
            //Get attendees
            this.dataService.getActivity(this.activityID, "attendees").subscribe(function (response) {
                _this.participants = response.data;
            });
        };
        ReminderWorkspaceComponent.prototype.submitData = function (dataModel) {
            var _this = this;
            var dObj = {};
            var dataRequest = Object.assign(dObj, dataModel);
            dataRequest.EndDate = this.datePipe.transform(dataRequest.EndDate, "yyyyMMdd HH:mm:ss.SSS");
            dataRequest.IsCompleted = "1";
            dataRequest.Completed = dataRequest.EndDate;
            this.busyIndicator.activated = true;
            this.dataService.updateActivity(this.activity.ID, dataRequest).subscribe(function (response) {
                var noteObj = { DerContent: _this.notes };
                _this.dataService.createActivityNotes(_this.activity.RowPointer, noteObj).subscribe(function () { });
            }, function (error) {
                _this.showErrorMessage();
                _this.busyIndicator.activated = false;
            }, function () {
                _this.busyIndicator.activated = false;
                _this.toastService.show({
                    title: _this.lang.launchToastTitle,
                    message: _this.activity.Summary,
                    timeout: 4000
                });
                _this.reminderWorkSpaceService.close();
                _this.setBusy(true);
            });
        };
        ReminderWorkspaceComponent.prototype.showErrorMessage = function () {
            this.dialogService.showMessage({
                title: this.lang.get("errorMessageTitle"),
                message: this.lang.get("errorMessage")
            });
        };
        ReminderWorkspaceComponent.prototype.isNumber = function (activity) {
            if (activity) {
                return ((activity.Location != null) && !isNaN(Number(activity.Location.toString())));
            }
        };
        ReminderWorkspaceComponent.prototype.getAllDay = function (activity) {
            if (activity) {
                var currentEndDate = this.datePipe.transform(this.dataModel.EndDate, "HH:mm:ss.SSS");
                return currentEndDate === "23:59:00.000" ? true : false;
            }
        };
        ReminderWorkspaceComponent.prototype.formatDate = function (event) {
            this.dataModel.EndDate = this.datePipe.transform(event, "dd MMM yyyy hh:mm aaa");
        };
        ReminderWorkspaceComponent.prototype.launchWebAppClicked = function () {
            var form = encodeURIComponent("CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Completed Activities,InitialCommand=Refresh))");
            var url = "?LogicalId=lid://infor.crmce&form=" + form;
            this.widgetContext.launch({ url: url, resolve: true });
        };
        ReminderWorkspaceComponent.prototype.getOutcomeList = function () {
            var _this = this;
            this.dataService.getPickLists(this.activity.Type).subscribe(function (response) {
                _this.picklists = response.data;
            }, function () { }, function () {
                _this.busyIndicator.activated = false;
            });
        };
        ReminderWorkspaceComponent.prototype.setBusy = function (isBusy) {
            this.widgetContext.setState(isBusy ? lime_1.WidgetState.busy : lime_1.WidgetState.running);
        };
        __decorate([
            core_1.ViewChild(sohoxi_angular_1.SohoBusyIndicatorDirective, { static: true }),
            __metadata("design:type", sohoxi_angular_1.SohoBusyIndicatorDirective)
        ], ReminderWorkspaceComponent.prototype, "busyIndicator", void 0);
        ReminderWorkspaceComponent = __decorate([
            core_1.Component({
                providers: [datetime_pipe_1.DateTimePipe, common_1.DatePipe],
                template: "\n  <div class=\"rmndr-workspace-container\" soho-busyindicator>\n    <div class=\"header-section\">\n      <div class=\"row top-padding bottom-padding workspace-custom-style\">\n        <div class=\"twelve columns m-bottom20\">\n          <h1 class=\"reminder-title\"><strong>{{activity?.Summary}}</strong></h1>\n          <div *ngIf=\"isNumber(activity) && activity?.Location\">\n            <svg soho-icon icon=\"phone\" title=\"Phone\" class=\"icon-color\"></svg>\n            <p class=\"loc-phone\">{{activity?.Location}}</p>\n          </div>\n          <div *ngIf=\"!isNumber(activity) && activity?.Location\">\n            <svg soho-icon icon=\"map-pin\" title=\"MapPin\" class=\"icon-color\"></svg>\n            <p class=\"loc-phone\">{{activity?.Location}}</p>\n          </div>\n          <span *ngIf=\"!activity?.Location\" title=\"MapPin\" class=\"icon-color\" [hidden]=\"isHidden\"></span>\n        </div>\n\n        <div class=\"six columns\" *ngIf=\"activity && getAllDay(activity); else convertdateTime\">\n          <div class=\"field label-left\">\n            <p>{{lang?.startDateTime}} <span>{{ activity?.StartDate | dateTimeFormat | date: \"dd MMM yyyy hh:mm aaa\" }}</span></p>\n          </div>\n          <div class=\"field label-left\">\n            <p>{{lang?.endDateTime}} <span>{{ activity?.EndDate | dateTimeFormat | date: \"dd MMM yyyy hh:mm aaa\" }}</span></p>\n          </div>\n        </div>\n\n        <ng-template #convertdateTime>\n          <div class=\"six columns\" *ngIf=\"activity\">\n            <div class=\"field label-left\">\n              <p>{{lang?.startDateTime}} <span>{{ activity?.StartDate | dateTimeFormat | date: \"dd MMM yyyy hh:mm aaa\" : \"UTC-8\" }}</span></p>\n            </div>\n            <div class=\"field label-left\">\n              <p>{{lang?.endDateTime}} <span>{{ activity?.EndDate | dateTimeFormat | date: \"dd MMM yyyy hh:mm aaa\" : \"UTC-8\" }}</span></p>\n            </div>\n          </div>\n        </ng-template>\n\n        <div class=\"six columns\" *ngIf=\"activity\">\n          <div class=\"field label-left\">\n            <p>{{lang?.participants}} <span *ngFor=\"let participant of participants; let i = index;\">\n            <span *ngIf=\"i === 0\">{{participant.Name}}</span>\n            <span *ngIf=\"i === 1\">, {{participant.Name}}</span>\n            <span *ngIf=\"i === 2\">...,+ {{participants.length - 2}} more</span>\n            </span></p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"detail-section\">\n      <div class=\"row top-padding reminders-detail workspace-custom-style\">\n        <div class=\"five columns\" *ngIf=\"activity\">\n          <div class=\"field rmndr-field\">\n            <label soho-label\n              class=\"rmndr-lbl\"\n              [required]=\"true\">\n              {{lang?.dateTimeCompleted}}\n            </label>\n            <input *ngIf=\"getAllDay(activity); else dpconvert\" class=\"reminders-datepicker\" soho-datepicker\n              data-validate=\"required\"\n              placeholder=\"MM/dd/yyyy\"\n              [options]=\"options\"\n              [ngModel]=\"dataModel.EndDate\"\n              (ngModelChange)=\"formatDate($event)\"/>\n\n            <ng-template #dpconvert>\n              <input class=\"reminders-datepicker\" soho-datepicker\n                data-validate=\"required\"\n                placeholder=\"MM/dd/yyyy\"\n                [options]=\"options\"\n                [ngModel]=\"dataModel.EndDate | date: 'dd MMM yyyy hh:mm aaa' : 'UTC-8'\"\n                (ngModelChange)=\"formatDate($event)\"/>\n            </ng-template>\n\n          </div>\n          <div class=\"field custom-container\">\n            <label soho-label\n              class=\"rmndr-lbl\"\n              [required]=\"true\"\n            >{{lang?.meetingOutcome}}</label>\n            <select soho-dropdown\n              data-validate=\"required\"\n              placeholder=\"Choose Meeting Outcome\"\n              [(ngModel)]=\"dataModel.Result\">\n              <option *ngFor=\"let picklist of picklists\" [value]=\"picklist.Value\">{{picklist.Display}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"seven columns\" *ngIf=\"activity\">\n          <div class=\"field\">\n            <label soho-label\n              class=\"rmndr-lbl\"\n            >{{lang?.notes}}</label>\n            <textarea soho-textarea\n              class=\"reminders-textarea\"\n              [placeholder]=\"lang.get('enterNotes')\"\n              [(ngModel)]=\"notes\"\n            ></textarea>\n          </div>\n        </div>\n\n        <div class=\"twelve columns right-position\" *ngIf=\"activity\">\n          <div class=\"field\">\n            <button soho-button\n            (click)=\"submitData(dataModel)\"\n            [disabled]=\"!dataModel.Result || !dataModel.EndDate\"\n            soho-button=\"primary\">{{lang?.saveBtnText}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
                styles: ["\n    .m-bottom20 { margin-bottom: 20px; }\n    .custom-container div.dropdown { width: 500px; }\n    .icon-color.icon { margin-right: 2px; top: 3px; right: 3px; }\n    .icon-color.icon, .loc-phone { color: #1a1a1a; }\n    p.loc-phone { display: inline-block; }\n    .reminders-btn-modal { min-width: 60px !important; }\n    .reminders-textarea { height: 111px; }\n    .right-position { text-align: right; }\n    .reminders-detail.row:last-child { margin-bottom: 0; }\n    .rmndr-lbl { margin-bottom: 12px }\n    .modal .field.custom-container:last-child .dropdown.error { margin-bottom: 0 !important; }\n    .rmndr-field { margin-bottom: 16px; }\n    .row.top-padding.workspace-custom-style { padding-top: 20px; }\n    .row.workspace-custom-style:last-child { margin-bottom: 0; }\n    .workspace-custom-style { min-height: 170px }\n    .reminders-datepicker { width: 300px; }\n\n    @media (min-width: 767px) {\n    .reminders-datepicker, .reminders-textarea { width: 100% !important; }\n    .rmndr-workspace-container { min-width: 700px; min-height: 400px; }\n    }\n  "]
            }),
            __metadata("design:paramtypes", [datetime_pipe_1.DateTimePipe,
                data_service_1.DataService,
                sohoxi_angular_1.SohoToastService,
                common_1.DatePipe,
                lime_1.DialogService,
                reminder_workspace_service_1.ReminderWorkspaceService])
        ], ReminderWorkspaceComponent);
        return ReminderWorkspaceComponent;
    }());
    exports.ReminderWorkspaceComponent = ReminderWorkspaceComponent;
});
//# sourceMappingURL=reminder-workspace.component.js.map