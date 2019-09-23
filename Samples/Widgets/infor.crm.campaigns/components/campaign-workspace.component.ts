import {
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {
  SohoBusyIndicatorDirective
} from "@infor/sohoxi-angular";
import {
  DialogService,
  IWidgetContext,
  IWidgetInstance,
  IWidgetSettingsContext2,
  IWidgetSettingsInstance2,
  Log,
  widgetContextInjectionToken,
  WidgetState
} from "lime";
import {
  DateTimePipe
} from "../date.pipe";
import {
  ICampaign,
  ICampaignStage,
  ICampaignStep
} from "../model/campaigns";
import {
  CampaignWorkspaceService,
  ICWorkspaceComponent,
  IWorkspaceOptions
} from "../services/campaign-workspace.service";
import {
  DataService
} from "../services/data.service";

@Component({
  template: `
  <div class="cmpgn-workspace-container"
      soho-busyindicator>

    <div *ngIf="showCampaign">
      <ng-container *ngIf="campaign">
        <div class="header-section">
          <div class="row top-padding bottom-padding workspace-custom-style">
            <div class="twelve columns">
              <h1 class="cmpgn-name">{{ campaign.Name }}</h1>
            </div>

            <div class="workspace-info">
              <div class="two columns col-2">
                <span class="info-title text-small">Start</span>
                <p>{{ campaign.StartDate | dateTimeFormat | date }}</p>
              </div>
              <div class="two columns col-2">
                <span class="info-title text-small">End</span>
                <p>{{ campaign.EndDate | dateTimeFormat | date }}</p>
              </div>
              <div class="two columns col-2">
                <span class="info-title text-small">Launched On</span>
                <ng-container *ngIf="campaign.LaunchedOn; else noLaunchDate">
                  <p>{{ campaign.LaunchedOn | dateTimeFormat | date }}</p>
                </ng-container>
                <ng-template #noLaunchDate>
                  <p></p>
                </ng-template>
              </div>
              <div class="two columns col-2">
                <span class="info-title text-small">Type</span>
                <p>{{ campaign.Type }}</p>
              </div>
              <div class="two columns col-2">
                <span class="info-title text-small">Status</span>
                <p>{{ campaign.Status }}</p>
              </div>
              <div class="two columns col-2">
                <span class="info-title text-small">Owner</span>
                <p>  {{ campaign.Owner }} </p>
              </div>
            </div><!-- .workspace-info -->

          </div><!-- .workspace-custom-style -->
        </div><!-- .header-section -->

        <div class="detail-section">
          <div class="row top-padding">
            <div class="stage-count">
              <div class="twelve columns">
                <ng-container *ngIf="stageCount > 1; else StageLabel">
                  <p class="text-default">Stages ({{ stageCount }})</p>
                </ng-container>
                <ng-template #StageLabel>
                  <p class="text-default">Stage ({{ stageCount }})</p>
                </ng-template>
              </div>
            </div>
            <ng-container *ngFor="let stage of campaign.Stages">
              <div class="stage-info">
                <div class="twelve columns">
                  <p class="stage-desc text-primary"><strong>{{ stage.StageDescription }}</strong></p>
                </div>
                <div class="two columns col-2">
                  <span class="stage-label">Start</span>
                  <p class="ws-stage-startdate">{{ stage.StageStartDate | dateTimeFormat | date }}</p>
                </div>
                <div class="two columns col-2">
                  <span class="stage-label">End</span>
                  <p class="ws-stage-enddate">{{ stage.StageEndDate | dateTimeFormat | date }}</p>
                </div>
                <div class="two columns non-mobile">
                  <p>&nbsp;</p>
                </div>
                <div class="two columns col-2">
                <span class="stage-label">Type</span>
                <p class="ws-stage-type">{{ stage.StageType }}</p>
                </div>
                <div class="two columns col-2">
                <span class="stage-label">Status</span>
                <p class="ws-stage-status">{{ stage.StageStatus }}</p>
                </div>
                <div class="one columns col-2">
                  <ng-container *ngIf="stage.StageDerCampaignTaskCount > 1; else wrkspceStepLabel">
                <span class="stage-label">Steps</span>
                  </ng-container>
                  <ng-template #wrkspceStepLabel>
                    <span class="stage-label">Step</span>
                  </ng-template>
                <p class="ws-stage-status">{{ stage.StageDerCampaignTaskCount }}</p>
                </div>
                <div class="one columns col-2">
                  <button type="button" class="btn-icon" title="{{ stage.StageDescription }}" (click)="showCampaignStage(stage.StageID)">
                    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                        <use xlink:href="#icon-drilldown"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </ng-container>
          </div><!-- .row -->
        </div><!-- .detail-section -->
      </ng-container><!-- ng-container -->
    </div><!-- showCampaign -->

    <div *ngIf="showStage" class="stage-section">
        <ng-container>
        <ng-container *ngIf="stage">
          <div class="header-section">
              <div class="row top-padding bottom-padding workspace-custom-style">
                <div class="twelve columns cmpgn-border-bottom-style">
                  <button type="button" class="btn-icon cmpgn-back-btn" (click)="backBtn()">
                    <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                      <use xlink:href="#icon-left-arrow"></use>
                    </svg>
                  </button>
                  <h1><strong>{{ stage.StageDescription }}</strong></h1>
                </div><!-- .twelve.cmpgn-border-bottom-style -->
                <div class="three columns">
                  <span class="stage-label">Start</span>
                  <p class="ws-stage-startdate">{{ stage.StageStartDate | dateTimeFormat | date }}</p>
                </div>
                <div class="four columns">
                  <span class="stage-label">End</span>
                  <p class="ws-stage-enddate">{{ stage.StageEndDate | dateTimeFormat | date }}</p>
                </div>
                <div class="two columns">
                  <span class="stage-label">Type</span>
                  <p class="ws-stage-type">{{ stage.StageType }}</p>
                </div>
                <div class="three columns">
                  <span class="stage-label">Status</span>
                  <p class="ws-stage-status">{{ stage.StageStatus }}</p>
                </div>
              </div><!-- showStage .row -->
          </div><!-- showStage .header-section -->
          <div class="detail-section">
            <div class="row top-padding">
              <div class="steps-count">
                <div class="twelve columns">
                  <ng-container *ngIf="stepsCount > 1; else StepLabelText">
                    <p>Steps ({{stepsCount}})</p>
                  </ng-container>
                  <ng-template #StepLabelText>
                    <p>Step ({{stepsCount}})</p>
                  </ng-template>
                </div>
              </div><!-- .steps-count -->
              <ng-container *ngFor="let step of stage.Steps">
                <div class="steps-info">
                  <div class="twelve columns step-header-title">
                    <ng-container *ngIf="step.StepPriority === 'Low'; else prioNormal">
                      <p class="text-primary"><strong><span class="round cmpgn-low badge cmpgn-badge">{{ step.StepPriority }}</span>{{ step.StepDescription }}</strong></p>
                    </ng-container>
                    <ng-template #prioNormal>
                      <ng-container *ngIf="step.StepPriority === 'Normal'; else prioHigh">
                        <p class="text-primary"><span class="round cmpgn-normal badge cmpgn-badge">{{ step.StepPriority }}</span><strong>{{ step.StepDescription }}</strong></p>
                      </ng-container>
                    </ng-template>
                    <ng-template #prioHigh>
                      <ng-container *ngIf="step.StepPriority === 'High' else noPrioVal">
                        <p class="text-primary"><span class="round cmpgn-high badge cmpgn-badge">{{ step.StepPriority }}</span><strong>{{ step.StepDescription }}</strong></p>
                      </ng-container>
                    </ng-template>
                    <ng-template #noPrioVal>
                      <p class="text-primary"><strong>{{ step.StepDescription }}</strong></p>
                    </ng-template>
                  </div>
                  <div class="three columns">
                    <span class="step-label">Needed Date</span>
                    <p class="step-neededdate">{{ step.StepsDueDate | dateTimeFormat | date }}</p>
                  </div>
                  <div class="three columns">
                    <span class="step-label">% Complete</span>
                    <soho-progress class="cmpgn-progress" [progressValue]="step.StepPercentComplete"></soho-progress>
                    <span class="step-complete">{{ step.StepPercentComplete }}%</span>
                  </div>
                  <div class="one columns">
                    <p>&nbsp;</p>
                </div>
                  <div class="two columns">
                    <span class="step-label">Type</span>
                    <p class="step-type">{{ step.StepType }}</p>
              </div>
                  <div class="three columns">
                    <span class="step-label">Status</span>
                    <p class="step-status">{{ step.StepStatus }}</p>
            </div>
          </div>
        </ng-container>
            </div><!-- .row -->
          </div><!-- showStage .detail-section -->
        </ng-container>
      </ng-container>
    </div><!-- showStage -->

  </div><!-- .cmpgn-workspace-container -->
  `,
  styles: [`
  .cmpgn-border-bottom-style {
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .cmpgn-workspace-container .row {
    padding-right: 0;
  }
  .cmpgn-workspace-container .detail-section .row.top-padding {
    padding-top: 10px;
  }
  .cmpgn-workspace-container .cmpgn-name {
    font-weight: 600;
    margin-bottom: 15px;
    white-space: normal;
  }
  .cmpgn-workspace-container .workspace-custom-style.row:last-child {
    margin-bottom: 0;
  }
  .cmpgn-workspace-container .workspace-custom-style.row.top-padding {
    padding-top: 20px;
  }
  .cmpgn-workspace-container .header-section {
    border-bottom: none;
  }
  .cmpgn-workspace-container .info-title,
  .cmpgn-workspace-container .stage-label,
  .cmpgn-workspace-container .step-label {
    margin-bottom: 5px;
    display: inline-block;
    color: #999;
  }
  .cmpgn-workspace-container .workspace-custom-style {
    min-height: 120px;
  }
  .cmpgn-workspace-container .stage-count, .cmpgn-workspace-container .steps-count  {
    border-bottom: 1px solid #999;
    display: inline-block;
    padding-bottom: 10px;
    width: 100%;
  }
  .cmpgn-workspace-container .stage-info,
  .cmpgn-workspace-container .steps-info {
    border-bottom: 1px solid #999;
    display: inline-block;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 100%;
  }
  .cmpgn-workspace-container .stage-desc {
    margin-bottom: 10px;
  }
  .cmpgn-back-btn {
    display: inline-block;
    position: relative;
    bottom: 2px;
    margin-right: 0;
  }
  .cmpgn-back-btn svg {
    position: relative;
    right: 8px;
  }
  .cmpgn-workspace-container .stage-section h1 {
    display: inline-block;
  }
  .cmpgn-badge {
    display: inline-block;
    margin-bottom: 1px;
    margin-right: 15px;
    width: 65px !important;
  }
  .step-header-title {
    margin-bottom: 10px;
  }
  .cmpgn-progress {
    display: inline-block !important;
    margin-top: 5px;
    height: 20px;
    border-radius: 0;
    width: 85%;
  }
  :host ::ng-deep .cmpgn-progress.progress .progress-bar {
    height: 20px !important;
    border-radius: 0;
  }
  .step-complete {
    display: inline;
    float: right;
    margin-top: 10px;
    padding-left: 5px;
    text-align: left;
    width: 15%;
  }
  .cmpgn-low {
    background-color: #54a1d3;
    color: #fff;
  }
  .cmpgn-normal {
    background-color: #f6d67b;
  }
  .cmpgn-high {
    background-color: #d26d6d;
    color: #fff;
  }


  /************ Media Queries *************/
  @media (min-width: 767px) {
    .cmpgn-workspace-container {
      min-width: 700px;
      min-height: 300px;
    }
    .cmpgn-workspace-container .columns {
      padding-right: 20px;
    }
  }
  @media (max-width: 766px) {
    .col-2 {
      width: 50%;
      margin-bottom: 10px;
    }
    .non-mobile {
      display: none;
    }
    .cmpgn-workspace-container {
      min-height: 340px;
    }
  }
  `]
})

export class CampaignWorkspaceComponent implements ICWorkspaceComponent, OnInit {
  @Input() widgetContext: IWidgetContext;
  @Input() widgetInstance: IWidgetInstance;
  @Input() widgetSettingsContext: IWidgetSettingsContext2;
  @Input() widgetSettingsInstance: IWidgetSettingsInstance2;
  @ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator: SohoBusyIndicatorDirective;
  campaign: ICampaign;
  stages: ICampaignStage;
  campaignID: string;
  campaignID2: string;
  stageCount: number;
  stepsCount: number;
  stage: any;
  stageID: string;
  title: IWorkspaceOptions<string>;
  campaigns: ICampaign[];
  campaignStages: ICampaignStage[];
  campaignSteps: ICampaignStep[];
  container: any;
  stageContainer: any;
  message: string;
  showCampaign: boolean = true;
  showStage: boolean = false;
  workspaceView: boolean = true;
  itemName: string = "Items"; // Object name of item list
  private dataSet: any;
  private dataSetChildStage: any;
  private dataSetChildStep: any;
  private dataJoin: any;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private campaignWorkspaceService: CampaignWorkspaceService,
    private viewRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.busyIndicator.activated = true;
    this.loadCampaign();
  }

  campaignWebAppClicked(): void {
    const form = encodeURIComponent(`CRMCampaign(FILTER(ID='${this.campaignID}')SETVARVALUES(VarAppliedNamedFilter=My Campaigns,VarShowDetail=1,VarExtLink=1,InitialCommand=Refresh))`);
    const url = `?LogicalId={logicalId}&form=${form}`;

    this.widgetContext.launch({ url: url, resolve: true });
  }

  backBtn(): void {
    (!this.showCampaign) ? (this.showCampaign = true, this.showStage = false) : this.showStage = false;
  }

  showCampaignStage(stageID: string): void {
    //getStage fn
    const campaignContainer = this.container[0].Stages;

    campaignContainer.forEach((e: any) => {
      if (e.StageID === stageID) {
        this.stage = e;
        this.stepsCount = e.Steps.length;
      }
    });

    (!this.showStage) ? (this.showStage = true, this.showCampaign = false) : (this.showCampaign = false, this.showStage = true);
  }

  campaignStageDetail(stageID: string): void {
    const stageDetails = this.dataJoin;
    if (stageDetails) {
      stageDetails.forEach((e: any) => {
        if (e.StageID === stageID) {
          this.stage = e;
          this.stepsCount = e.Steps.length;
        }
      });
    }
  }

  private loadCampaign(): void {
    this.busyIndicator.activated = true;
    this.dataSet = [];
    this.dataService.getCampaign(this.campaignID || this.campaignID2).subscribe(
      (response: any) => {
        this.busyIndicator.activated = true;
        this.campaigns = response.data[this.itemName];

        for (const campaign of this.campaigns) {
            const item = {
              ID: campaign[0].Value,
              Name: campaign[1].Value,
              Status: campaign[2].Value,
              LaunchedOn: campaign[3].Value,
              DerLaunchStatus: campaign[4].Value,
              DerManagerName: campaign[5].Value,
              StartDate: campaign[6].Value,
              EndDate: campaign[7].Value,
              DerTargetCount: campaign[8].Value,
              DerStageCount: campaign[9].Value,
              DerStepCount: campaign[10].Value,
              Owner: campaign[11].Value,
              Description: campaign[12].Value,
              Objectives: campaign[13].Value,
              CallToAction: campaign[14].Value,
              LeadSource: campaign[15].Value,
              Type: campaign[16].Value,
              Code: campaign[17].Value
            };
            const workspaceTitle = `${campaign[17].Value}: ${campaign[1].Value}`;
            this.title = workspaceTitle as any;
            this.dataSet.push(item);
          }
        this.getCampaignStage();
      }, (error) => {/** */}
    );
  }

  private getCampaignStage(): void {
    this.dataService.getCampaignStages().subscribe((response: any) => {
      this.dataSetChildStage = [];
      this.campaignStages = response.data[this.itemName];

      const dataCampaignStage = this.campaignStages;
      if (dataCampaignStage) {
        for (const campaignStage of dataCampaignStage) {

          // Get the task count
          let taskCount = campaignStage[4].Value.replace(/[^0-9]/g, "");

          if (campaignStage[4].Value === "STRINGS(sCRMItemCount)") {
            taskCount = "1";
          }

          const item = {
            StageID: campaignStage[0].Value,
            StageCampaignID: campaignStage[1].Value,
            StageDescription: campaignStage[2].Value,
            StageStatus: campaignStage[3].Value,
            StageDerCampaignTaskCount: taskCount,
            StageStartDate: campaignStage[5].Value,
            StageEndDate: campaignStage[6].Value,
            StageType: campaignStage[7].Value
          };
          this.dataSetChildStage.push(item);
        }
      }
      this.getCampaignStep();
    }, (error) => {/**/});
  }

  private getCampaignStep(): void {
    this.dataService.getCampaignSteps().subscribe((response: any) => {
      this.dataSetChildStep = [];
      this.campaignSteps = response.data[this.itemName];

      const dataCampaignStep = this.campaignSteps;
      if (dataCampaignStep) {
        for (const campaignStep of dataCampaignStep) {
          const item = {
            StepID: campaignStep[0].Value,
            StepCampaignID: campaignStep[1].Value,
            StepDescription: campaignStep[2].Value,
            StepStatus: campaignStep[3].Value,
            StepsDueDate: campaignStep[4].Value,
            StepDateAssigned: campaignStep[5].Value,
            StepCampaignStageID: campaignStep[6].Value,
            StepPercentComplete: Math.trunc(campaignStep[7].Value),
            StepPriority: campaignStep[8].Value,
            StepType: campaignStep[9].Value
          };
          this.dataSetChildStep.push(item);
        }
      }
    }, error => {
      this.logInfo(error);
    }, () => {
      this.dataCollection();
    });
  }

  private dataCollection(): void {
    this.container = [];
    this.dataJoin = [];
    const container: any[] = [];
    const parent = this.dataSet;
    const childStage = this.dataSetChildStage;
    const childStep = this.dataSetChildStep;
    // console.log("parent", parent);
    if (parent) {

      childStage.map((c: any) => {
        const steps = childStep.filter((f: any) => f.StepCampaignStageID === c.StageID);

        this.dataJoin.push({...c, Steps: [...steps]});
      });

      parent.map((p: any) => {
        const stages = this.dataJoin.filter((f: any) => f.StageCampaignID === p.ID);

        this.container.push({...p, Stages: [...stages]});
        this.campaign = this.container[0];
        this.stageCount = this.container[0].Stages.length;
        this.stages = this.container[0].Stages;
      });
    }
    this.campaignStageDetail(this.stageID);
    this.busyIndicator.activated = false;
  }

  private logInfo(message: string, ex?: {}): void {
		Log.info(message, ex);
	}
}
