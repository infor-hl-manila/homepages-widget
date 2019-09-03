import {
  Component,
  OnInit,
  ViewChild
} from "@angular/core";
import {
  SohoBusyIndicatorDirective
} from "@infor/sohoxi-angular";
import {
  DialogService,
  IWidgetContext,
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
      soho-busyindicator
      text="Loading..."
      blockUI="true"
      displayDelay="0">
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
                <p>N/A</p>
              </ng-template>
            </div>
            <div class="two columns col-2">
              <span class="info-title text-small">Type</span>
              <p>{{ campaign.Type || "N/A" }}</p>
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
              <p>Stages ({{ stageCount }})</p>
            </div>
          </div>
          <ng-container *ngFor="let stage of campaign.Stages">
          <div class="stage-info">
            <div class="twelve columns">
              <p class="stage-desc"><strong>{{ stage.StageDescription }}</strong></p>
            </div>
            <div class="two columns col-2">
              <span class="stage-label">Start</span>
              <p class="ws-stage-startdate">{{ stage.StageStartDate | dateTimeFormat | date }}</p>
            </div>
            <div class="two columns col-2">
              <span class="stage-label">End</span>
              <p class="ws-stage-enddate">{{ stage.StageStartDate | dateTimeFormat | date }}</p>
            </div>
            <div class="two columns non-mobile">
              <p>&nbsp;</p>
            </div>
            <div class="two columns col-2">
            <span class="stage-label">Type</span>
            <p class="ws-stage-type">{{ stage.StageType || "N/A" }}</p>
            </div>
            <div class="two columns col-2">
            <span class="stage-label">Status</span>
            <p class="ws-stage-status">{{ stage.StageStatus }}</p>
            </div>
            <div class="one columns col-2">
            <span class="stage-label">Steps</span>
            <p class="ws-stage-status">{{ stage.StageDerCampaignTaskCount || "N/A" }}</p>
            </div>
            <div class="one columns col-2">
              <button type="button" class="btn-icon" title="{{ stage.StageDescription }}">
                <svg class="icon" focusable="false" aria-hidden="true" role="presentation">
                    <use xlink:href="#icon-drilldown"></use>
                </svg>
              </button>
            </div>
          </div>
          </ng-container>
        </div>
      </div><!-- .detail-section -->
      </ng-container><!-- ng-container -->
    </div><!-- .cmpgn-workspace-container -->
  `,
  styles: [`
  :host ::ng-deep .modal-content .title > h2 {
    font-weight: 600;
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
  .cmpgn-workspace-container .stage-label {
    margin-bottom: 5px;
    display: inline-block;
    color: #999;
  }
  .cmpgn-workspace-container .workspace-custom-style {
    min-height: 120px;
  }
  .cmpgn-workspace-container .stage-count {
    border-bottom: 1px solid #999;
    display: inline-block;
    padding-bottom: 10px;
    width: 100%;
  }
  .cmpgn-workspace-container .stage-info {
    border-bottom: 1px solid #999;
    display: inline-block;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 100%;
  }
  .cmpgn-workspace-container .stage-desc {
    margin-bottom: 10px;
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
  widgetContext: IWidgetContext;
  @ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator: SohoBusyIndicatorDirective;
  campaign: ICampaign;
  campaign2: ICampaign;
  campaignID: string;
  stageCount: number;
  title: IWorkspaceOptions<string>;
  campaigns: ICampaign[];
  campaignStages: ICampaignStage[];
  campaignSteps: ICampaignStep[];
  container: any;
  itemName: string = "Items"; // Object name of item list
  private dataSet: any;
  private dataSetChildStage: any;
  private dataSetChildStep: any;
  private dataJoin: any;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private campaignWorkspaceService: CampaignWorkspaceService
  ) {}

  ngOnInit(): void {
    this.busyIndicator.activated = true;
    this.loadCampaign();
  }

  campaignWebAppClicked(): void {
    const form = encodeURIComponent(`CRMCampaign(FILTER(ID=${this.campaignID})SETVARVALUES(VarAppliedNamedFilter=My Campaigns,InitialCommand=Refresh))`);
    const url = `?LogicalId={logicalId}&form=${form}`;

    this.widgetContext.launch({ url: url, resolve: true });
  }

  private loadCampaign(): void {
    this.dataSet = [];
    this.dataService.getCampaign(this.campaignID).subscribe(
      (response: any) => {
        this.campaigns = response.data[this.itemName];

        const dataCampaign = this.campaigns;

        if (dataCampaign) {
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
        }
        this.dataCollection();
      }, (error) => {
        console.log(error);
      }, () => {
        this.busyIndicator.activated = false;
      }
    );

    this.dataService.getCampaignStages().subscribe((response: any) => {
      this.dataSetChildStage = [];
      this.campaignStages = response.data[this.itemName];

      const dataCampaignStage = this.campaignStages;
      if (dataCampaignStage) {
        for (const campaignStage of dataCampaignStage) {

          // Get the task count
          const taskCount = campaignStage[4].Value.replace(/[^0-9]/g, "");

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
      this.dataCollection();
    }, (error) => {
        this.busyIndicator.activated = false;
    }, () => {
      this.busyIndicator.activated = false;
    });

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
            StepCampaignStageID: campaignStep[6].Value
          };
          this.dataSetChildStep.push(item);
        }
      }
      this.dataCollection();
    }, error => {
      console.log(error);
      this.busyIndicator.activated = false;
    }, () => {
      this.busyIndicator.activated = false;
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
    this.busyIndicator.activated = true;
    if (parent && childStage && childStep) {
      this.busyIndicator.activated = true;

      childStage.map((c: any) => {
        const steps = childStep.filter((f: any) => f.StepCampaignStageID === c.StageID);

        this.dataJoin.push({...c, Steps: [...steps]});
      });

      parent.map((p: any) => {
        const stages = this.dataJoin.filter((f: any) => f.StageCampaignID === p.ID);

        this.container.push({...p, Stages: [...stages]});
        this.campaign = this.container[0];
        this.stageCount = this.container[0].Stages.length;
      });
    }
    console.log("this", this);
  }
}
