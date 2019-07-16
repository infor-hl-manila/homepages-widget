import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { SohoBusyIndicatorDirective, SohoToastService } from "@infor/sohoxi-angular";
import { DialogService, IWidgetContext, WidgetState } from "lime";
import { IActivity } from "../activity";
import { DateTimePipe } from "../datetime.pipe";
import { IMyLanguage } from "../mylanguage";
import { DataService } from "../services/data.service";
import { IRWorkspaceComponent, ReminderWorkspaceService } from "../services/reminder-workspace.service";

@Component({
  providers: [DateTimePipe, DatePipe],
  template: `
  <div soho-busyindicator>
    <div class="header-section">
      <div class="row top-padding bottom-padding workspace-custom-style">
        <div class="twelve columns m-bottom20">
          <h1 class="reminder-title"><strong>{{activity?.Summary}}</strong></h1>
          <div *ngIf="getType(activity) && activity?.Location">
            <svg soho-icon icon="phone" title="Phone" class="icon-color"></svg>
            <p class="loc-phone">{{activity?.Location}}</p>
          </div>
          <div *ngIf="!getType(activity) && activity?.Location">
            <svg soho-icon icon="map-pin" title="MapPin" class="icon-color"></svg>
            <p class="loc-phone">{{activity?.Location}}</p>
          </div>
          <span *ngIf="!activity?.Location" title="MapPin" class="icon-color" [hidden]="isHidden"></span>
        </div>

        <div class="six columns" *ngIf="activity && getAllDay(activity); else convertdateTime">
          <div class="field label-left">
            <p>{{lang?.startDateTime}} <span>{{ activity?.StartDate | dateTimeFormat | date: "dd MMM yyyy hh:mm aaa" }}</span></p>
          </div>
          <div class="field label-left">
            <p>{{lang?.endDateTime}} <span>{{ activity?.EndDate | dateTimeFormat | date: "dd MMM yyyy hh:mm aaa" }}</span></p>
          </div>
        </div>

        <ng-template #convertdateTime>
          <div class="six columns" *ngIf="activity">
            <div class="field label-left">
              <p>{{lang?.startDateTime}} <span>{{ activity?.StartDate | dateTimeFormat | date: "dd MMM yyyy hh:mm aaa" : "UTC+4" }}</span></p>
            </div>
            <div class="field label-left">
              <p>{{lang?.endDateTime}} <span>{{ activity?.EndDate | dateTimeFormat | date: "dd MMM yyyy hh:mm aaa" : "UTC+4" }}</span></p>
            </div>
          </div>
        </ng-template>

        <div class="six columns" *ngIf="activity">
          <div class="field label-left">
            <p>{{lang?.participants}} <span *ngFor="let participant of participants; let i = index;">
            <span *ngIf="i === 0">{{participant.Name}}</span>
            <span *ngIf="i === 1">, {{participant.Name}}</span>
            <span *ngIf="i === 2">...,+ {{participants.length - 2}} more</span>
            </span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <div class="row top-padding reminders-detail workspace-custom-style">
        <div class="five columns" *ngIf="activity">
          <div class="field rmndr-field">
            <label soho-label
              class="rmndr-lbl"
              [required]="true">
              {{lang?.dateTimeCompleted}}
            </label>
            <input *ngIf="getAllDay(activity); else dpconvert" class="reminders-datepicker" soho-datepicker
              data-validate="required"
              placeholder="MM/dd/yyyy"
              [options]="options"
              [ngModel]="dataModel.EndDate"
              (ngModelChange)="formatDate($event)"/>

            <ng-template #dpconvert>
              <input class="reminders-datepicker" soho-datepicker
                data-validate="required"
                placeholder="MM/dd/yyyy"
                [options]="options"
                [ngModel]="dataModel.EndDate | date: 'dd MMM yyyy hh:mm aaa' : 'UTC+4'"
                (ngModelChange)="formatDate($event)"/>
            </ng-template>

          </div>
          <div class="field custom-container">
            <label soho-label
              class="rmndr-lbl"
              [required]="true"
            >{{lang?.meetingOutcome}}</label>
            <select soho-dropdown
              data-validate="required"
              placeholder="Choose Meeting Outcome"
              [(ngModel)]="dataModel.Result">
              <option *ngFor="let picklist of picklists" [value]="picklist.Value">{{picklist.Display}}</option>
            </select>
          </div>
        </div>
        <div class="seven columns" *ngIf="activity">
          <div class="field">
            <label soho-label
              class="rmndr-lbl"
            >{{lang?.notes}}</label>
            <textarea soho-textarea
              class="reminders-textarea"
              [placeholder]="lang.get('enterNotes')"
              [(ngModel)]="notes"
            ></textarea>
          </div>
        </div>

        <div class="twelve columns right-position" *ngIf="activity">
          <div class="field">
            <button soho-button
            (click)="submitData(dataModel)"
            [disabled]="!dataModel.Result || !dataModel.EndDate"
            soho-button="primary">{{lang?.saveBtnText}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .m-bottom20 { margin-bottom: 20px; }
    .custom-container div.dropdown { width: 500px; }
    .icon-color.icon { margin-right: 2px; top: 3px; right: 3px; }
    .icon-color.icon, .loc-phone { color: #1a1a1a; }
    p.loc-phone { display: inline-block; }
    .reminders-btn-modal { min-width: 60px !important; }
    .reminders-textarea { height: 111px; }
    .right-position { text-align: right; }
    .reminders-detail.row:last-child { margin-bottom: 0; }
    .rmndr-lbl { margin-bottom: 12px }
    .modal .field.custom-container:last-child .dropdown.error { margin-bottom: 0 !important; }
    .rmndr-field { margin-bottom: 16px; }
    .row.top-padding.workspace-custom-style { padding-top: 20px; }
    .row.workspace-custom-style:last-child { margin-bottom: 0; }
    .workspace-custom-style { min-height: 170px }
    .reminders-datepicker { width: 300px; }

    @media (min-width: 767px) {
    .reminders-datepicker, .reminders-textarea { width: 100% !important; }
    .workspace-custom-style { min-width: 700px !important; min-height: 170px; }
    }
  `]
})

export class ReminderWorkspaceComponent implements IRWorkspaceComponent, OnInit {
  widgetContext: IWidgetContext;
  @ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator: SohoBusyIndicatorDirective;
  lang?: IMyLanguage;
  activity: IActivity;
  activityID: string;
  participants: any;
  picklists: any;
  dataModel: { IsCompleted: string, Completed: string, _ItemId: string, EndDate: string, Result: string };
  notes: string;
  options: any;
  isHidden: boolean = true;
  launchToastMessage: string;

  constructor(
    private dateTimePipe: DateTimePipe,
    private dataService: DataService,
    private toastService: SohoToastService,
    private datePipe: DatePipe,
    private dialogService: DialogService,
    private reminderWorkSpaceService: ReminderWorkspaceService
  ) {
    this.options = { showTime: true, timeFormat: "h:mm a", dateFormat: "d MMM yyyy", useCurrentTime: true };
    this.dataModel = {IsCompleted: "", Completed: "", _ItemId: "", EndDate: "", Result: "" };
  }

  ngOnInit(): void {
    this.busyIndicator.activated = true;
    this.lang = this.widgetContext.getLanguage<IMyLanguage>();
    this.launchToastMessage = this.lang.get("launchToastMessage");
    this.options = { showTime: true, timeFormat: "h:mm a", dateFormat: "d MMM yyyy", useCurrentTime: true };

    this.dataService.getActivity(this.activityID).subscribe(
      response => {
        this.activity = response.data as IActivity;
        const formattedDate = this.dateTimePipe.transform(this.activity.EndDate);
        this.dataModel.EndDate = this.datePipe.transform(formattedDate, "dd MMM yyyy hh:mm aaa");
        this.dataModel._ItemId = this.activity._ItemId;
      }, () => {/**/},
      () => {
        this.getOutcomeList();
      }
    );

    //Get attendees
    this.dataService.getActivity(this.activityID, "attendees").subscribe(
      response => {
        this.participants = response.data;
      }
    );
  }

  submitData(dataModel: any): void {
    const dObj = {};
    const dataRequest = Object.assign(dObj, dataModel);
    dataRequest.EndDate = this.datePipe.transform(dataRequest.EndDate, "yyyyMMdd HH:mm:ss.SSS");
    dataRequest.IsCompleted = "1";
    dataRequest.Completed = dataRequest.EndDate;
    this.busyIndicator.activated = true;
    this.dataService.updateActivity(this.activity.ID, dataRequest).subscribe(
      response => {
        const noteObj = { DerContent: this.notes };
        this.dataService.createActivityNotes(this.activity.RowPointer, noteObj).subscribe(
          () => {/**/}
        );
      }, (error) => {
        this.showErrorMessage();
        this.busyIndicator.activated = false;
       },
      () => {
        this.busyIndicator.activated = false;
        this.toastService.show({
          title: this.lang.launchToastTitle,
          message: this.activity.Summary,
          timeout: 4000
        });
        this.reminderWorkSpaceService.close();
        this.setBusy(true);
      }
    );
  }

  showErrorMessage(): void {
    this.dialogService.showMessage({
      title: this.lang.get("errorMessageTitle"),
      message: this.lang.get("errorMessage")
    });
  }

  getType(activity: IActivity): boolean {
    if (activity) {
      return activity.Type === "vPhoneCall" ? true : false;
    }
  }

  getAllDay(activity: IActivity): boolean {
    if (activity) {
      const currentEndDate = this.datePipe.transform(this.dataModel.EndDate, "HH:mm:ss.SSS");
      return currentEndDate === "23:59:00.000" ? true : false;
    }
  }

  formatDate(event: any): void {
    this.dataModel.EndDate = this.datePipe.transform(event, "dd MMM yyyy hh:mm aaa");
  }

  launchWebAppClicked(): void {
    const form = encodeURIComponent(`CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Completed Activities,InitialCommand=Refresh))`);
    const url = `?LogicalId=lid://infor.crmce&form=${form}`;

    this.widgetContext.launch({ url: url, resolve: true });
  }

  private getOutcomeList(): void {
    this.dataService.getPickLists(this.activity.Type).subscribe(
      response => {
        this.picklists = response.data;
      }, () => {/**/},
      () => {
        this.busyIndicator.activated = false;
      }
    );
  }

  private setBusy(isBusy: boolean): void {
    this.widgetContext.setState(isBusy ? WidgetState.busy : WidgetState.running);
  }

}
