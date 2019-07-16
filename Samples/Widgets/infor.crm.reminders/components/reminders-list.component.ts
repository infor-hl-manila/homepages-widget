import {
  DatePipe
} from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import {
  Component,
  Inject,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import {
  IWidgetContext,
  IWidgetInstance,
  IWidgetSettingsComponent,
  IWidgetSettingsContext2,
  IWidgetSettingsInstance2,
  widgetContextInjectionToken,
  widgetInstanceInjectionToken,
  WidgetState
} from "lime";
import {
  Observable
} from "rxjs";
import { IActivity } from "../activity";
import { ReminderWorkspaceComponent } from "../components/reminder-workspace.component";
import { DateTimePipe } from "../datetime.pipe";
import { IMyLanguage } from "../mylanguage";
import { DataService } from "../services/data.service";
import { ReminderWorkspaceService } from "../services/reminder-workspace.service";
import { SortFilterService } from "../services/sort-filter.service";

@Component({
    providers: [DateTimePipe, DatePipe],
    selector: "reminders-list",
    template: `
      <div class="crm-reminder-widget">
        <div class="card-content">
          <div class="crm-banner-app" [hidden]="!showAppBanner">
            <div class="twelve columns">
              <p>
                <a href="#" (click)="inforCRMiOS()">{{language?.crmLinkText}}</a> {{language?.availableText}}
              </p>
              <button type="text" class="notification-close" (click)="dismissBanner()">
                <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                  <use xlink:href="#icon-close"></use>
                </svg>
                <span class="audible">[Close]</span>
              </button>
            </div>
          </div>
          <div class="count-reminders" [hidden]="!viewContent">
            <div class="twelve columns">
              <p *ngIf="countReminders <= 1; else pluralText">{{ countReminders }} {{ language?.titleHeaderSingular }}</p>
                <ng-template #pluralText><p>{{ countReminders }} {{ language?.titleHeaderPlural }}</p></ng-template>
            </div>
          </div>
          <div class="emptystatemessage-container" [hidden]="!isErrorState">
            <div soho-emptymessage
              [title]="language.get('emptyStateTitle')"
              [info]="language.get('emptyStateInfo')"
              [icon]="'icon-empty-error-loading'"
              [color]="'azure'"
            >
            </div>
          </div>
          <div class="completedstatemessage-container" [hidden]="!completedState">
            <div soho-emptymessage
            [title]="language.get('completedStateTitle')"
            [info]="language.get('completedStateInfo')"
            [icon]="'icon-empty-no-tasks'"
            [color]="'azure'">
            </div>
          </div>
          <!-- START: .card-content-container-->
          <div class="card-content-container">
            <!-- Template of Today's Reminders -->
            <div *ngIf="hasTodaysReminders">
              <div class="card-container-title">
                <p class="card-header-title">{{ language?.today | uppercase }} ({{todayCount}})</p>
              </div>
              <div class="card-container" [ngClass]="{'card-container-border-bottom': '!hasPastReminders'}">
                <div class="reminder-container" *ngFor="let activity of todayActivities">
                  <div class="col-6 h40">
                    <h1 class="summary">{{ activity.Summary }}</h1>
                  </div>
                  <div class="col-6">
                    <p class="end-datetime" *ngIf="(activity.EndDate | dateTimeFormat | date: 'HH:mm:ss.SSS') == '23:59:00.000'">{{activity.StartDate | dateTimeFormat | date: "shortTime" }} - {{ activity.EndDate | dateTimeFormat | date: "shortTime" }}</p>
                    <p class="end-datetime" *ngIf="(activity.EndDate | dateTimeFormat | date: 'HH:mm:ss.SSS') != '23:59:00.000'">{{activity.StartDate | dateTimeFormat | date: "shortTime" : "UTC+4" }} - {{ activity.EndDate | dateTimeFormat | date: "shortTime" : "UTC+4" }}</p>
                    <p class="participants"> {{language?.participants}} {{ activity.AttendeeCount }}</p>
                  </div>
                  <div class="m-bottom-0">
                    <button soho-button="primary" id="{{instanceId}}-custom-btn" (click)="showDialogWorkspace(activity.ID)" style="height: 45px;">{{language?.buttonLabel}}</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Template of Past Reminders -->
            <div *ngIf="hasPastReminders">
              <div class="card-container-title">
                <p class="card-header-title">{{ language?.pastReminders | uppercase }} ({{pastCount}})</p>
              </div>
              <div class="card-container">
                <div class="reminder-container" *ngFor="let activity of pastActivities">
                  <div class="col-6 h40">
                    <h1 class="summary">{{ activity.Summary }}</h1>
                  </div>
                  <div class="col-6">
                      <p class="end-datetime"> {{ activity.EndDate | dateTimeFormat | date: "d MMM" }}</p>
                      <p class="participants"> {{language?.participants}} {{ activity.AttendeeCount }}</p>
                  </div>
                  <div class="m-bottom-0">
                    <button soho-button="primary" id="{{instanceId}}-custom-btn" (click)="showDialogWorkspace(activity.ID)" style="height: 45px;">{{language?.buttonLabel}}</button>
                  </div>
                </div>
              </div>
            </div>
          </div><!--END .card-content-container -->
        </div>
      </div>
    `,
    styles: [`
      .crm-banner-app, .count-reminders { background: #f0f0f0; border-bottom: 1px solid #bdbdbd; width: 100%; display: inline-block; }
      .crm-banner-app p, .count-reminders p { margin: 10px 0; display: inline-block; }
      .crm-banner-app p a { font-weight: 600; text-decoration: underline; color: #1a1a1a; }
      .h40 { height: 40px; }
      .m-bottom-0 { margin-bottom: 0; }
      .crm-banner-app p span a { color: #1a1a1a; }
      .card-content { display: flex; flex-direction: column; overflow: hidden; }
      .card-content-container { overflow: auto; flex: 0 1 auto; }
      .card-container { display: inline-block; padding: 5px 0px 5px 16px; width: 100%; }
      .card-container-title { display: inline-block; padding: 5px 0px 0px 16px; }
      .card-container .card-header-title { color: #5c5c5c; margin-bottom: 6px; }
      .card-header-title { color: #5c5c5c; margin-bottom: 6px; }
      .card-container-border-bottom { border-bottom: 1px solid #bdbdbd; }
      .notification-close { float: right; margin-right: 20px; margin-top: 11px; }
      .emptystatemessage-container, .completedstatemessage-container { margin: auto auto; }
      .emptystatemessage-container .empty-info { color: #bcbcbc !important; }
      .reminder-container { border: 1px solid #d8d8d8; padding: 16px; display: inline-block; margin-right: 16px; margin-bottom: 15px; }
      .reminder-container p.start-datetime, .reminder-container p.end-datetime { line-height: normal; }
      .reminder-container p { color: #5c5c5c; margin-top: 0; margin-bottom: 0; text-align: right;}
      .reminder-container h1 { display: -webkit-box; font-size: 13pt; line-height: 2rem; width: 150px; overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
      .reminder-container button { width: 100%; margin-top: 12px; }
      .col-5 { width: 40%; float: left; }
      .col-6 { width: 50%; float: left; }
      [hidden] { display: none !important;}
      :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .reminder-container { width: 100% !important; }
      :host-context(.double-width, .widget:not(.to-single):not(.quad-width):not(.triple-width)) .reminder-container { width: calc(50% - 16px); }
      :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(33.3333333% - 16px); }
      :host-context(.quad-width, .widget:not(.to-single):not(.double-width):not(.triple-width)) .reminder-container { width: calc(25% - 16px); }
      :host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width)) .card-container { padding: 5px 16px; }

      @media (max-width: 767px) {
        .notification-close { margin-right: 0; }
      }

      @media only screen (max-width: 1120px) and (min-width: 756px) {
        :host-context(.triple-width, .widget:not(.to-single):not(.quad-width):not(.double-width)) .reminder-container { width: calc(50% - 16px); }
      }
    `]
  })

export class RemindersListComponent implements OnInit, IWidgetSettingsComponent {
  @Input() widgetSettingsContext: IWidgetSettingsContext2;
  @Input() widgetSettingsInstance: IWidgetSettingsInstance2;

  instanceId: string;
  reminder: IActivity;
  activities: IActivity[];
  todayActivities: IActivity[];
  thisWeekActivities: IActivity[];
  pastActivities: IActivity[];
  showAppBanner: boolean = true;
  isErrorState: boolean;
  viewContent: boolean = false;
  countReminders: number;
  completedState: boolean;
  language: IMyLanguage;
  pastCount: number;
  thisWeekCount: number;
  todayCount: number;
  hasTodaysReminders: boolean;
  hasThisWeeksReminders: boolean;
  hasPastReminders: boolean;
  sortedArray: IActivity[];
  sortedArray2: IActivity[];

  constructor(
    @Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
    @Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
    private dataService: DataService,
    private sortFilterService: SortFilterService,
    private reminderWorkspaceService: ReminderWorkspaceService,
    private viewRef: ViewContainerRef,

  ) {
    this.dataService.init(widgetContext);
    this.instanceId = widgetContext.getWidgetInstanceId();
  }

  ngOnInit(): void {
    this.setBusy(true);
    this.loadActivities();
    this.language = this.widgetContext.getLanguage();

    this.dataService.getMongooseConfig();

    this.widgetInstance.actions[0].execute = () => {
      this.inforCRMiOS();
    };
    this.widgetInstance.actions[1].execute = () => {
      this.webAppCRM();
    };
  }

  showDialogWorkspace(ID: string): void {
    this.reminderWorkspaceService.open({
      component: ReminderWorkspaceComponent,
      viewRef: this.viewRef,
      props: {
        widgetContext: this.widgetContext,
        activityID: ID
      }
    });
    this.reminderWorkspaceService.capDialog.closed(d => {
      this.loadActivities();
      this.setBusy(false);
    });
  }

  //Remove banner section
  dismissBanner(): void {
    this.showAppBanner = false;
  }

  inforCRMiOS(): void {
    this.widgetContext.launch( {url: "https://itunes.apple.com/us/app/infor-cloudsuite-crm-mobile/id1401846395?ls=1&mt=8"} );
  }

  private loadActivities(): void {
    const now = Date.now();
    const startOfToday = new Date().setHours(0, 0, 0, 0);
    const endOfToday = new Date().setHours(23, 59, 59);

    this.dataService.getActivities().subscribe(response => {
      this.activities = response.data;

      this.pastActivities = this.sortFilterService
        .filterByDate(response.data, "EndDate", startOfToday, false);
        // this.sortedArray = this.sortFilterService.sortByDate(this.pastActivities, "EndDate", false);

      this.todayActivities = this.sortFilterService
        .filterWithRange(response.data, "EndDate", endOfToday, false, startOfToday);
      // this.sortedArray2 = this.sortFilterService.sortByDate(this.todayActivities, "EndDate", false);

      this.viewContent = true;
      this.countReminders = this.pastActivities.length + this.todayActivities.length;
      this.setBusy(false);
      this.completedStateMessage();
      this.pastCount = this.pastActivities.length;
      this.todayCount = this.todayActivities.length;
      this.hasTodaysReminders = this.todayCount > 0;
      this.hasThisWeeksReminders = this.thisWeekCount > 0;
      this.hasPastReminders = this.pastCount > 0;
    }, (error: HttpErrorResponse) => {
      this.onRequestError(error);
    });
  }

  private webAppCRM(): void {
    const form = encodeURIComponent(`CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))`);
    const url = `?LogicalId=lid://infor.crmce&form=${form}`;

    this.widgetContext.launch({ url: url, resolve: true });
  }

  private onRequestError(error: HttpErrorResponse): void {
    this.isErrorState = true;
    this.setBusy(false);
  }

  private completedStateMessage(): void {
    (!this.countReminders) ? (this.completedState = true, this.viewContent = false) : this.completedState = false;
  }

  private setBusy(isBusy: boolean): void {
    this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
  }

}
