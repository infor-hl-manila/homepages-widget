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
    <div class="cmpgn-workspace-container" soho-busyindicator>
      <div class="header-section">
        <div class="row top-padding bottom-padding workspace-custom-style">
          <div class="twelve columns">
            <ng-container *ngFor="let campaign of dataSet">
              <p class="test">{{ campaign.Name }}</p>
            </ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  :host ::ng-deep .modal-content .title > h2 {
    font-weight: 600;
  }
  `]
})

export class CampaignWorkspaceComponent implements ICWorkspaceComponent, OnInit {
  widgetContext: IWidgetContext;
  @ViewChild(SohoBusyIndicatorDirective, { static: true }) busyIndicator: SohoBusyIndicatorDirective;
  campaign?: ICampaign;
  campaignID: string;
  title: IWorkspaceOptions<string>;
  campaigns: ICampaign[];
  campaignStages: ICampaignStage[];
  campaignSteps: ICampaignStep[];
  container: any;
  itemName: string = "Items"; // Object name of item list
  private dataSet: any;
  private dataSetChildStage: any;
  private dataSetChildStep: any;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private campaignWorkspaceService: CampaignWorkspaceService
  ) {}

  ngOnInit(): void {
    this.busyIndicator.activated = true;
    this.loadCampaign();
  }

  launchWebAppClicked(): void {
    const form = encodeURIComponent(`CRMActivities(SETVARVALUES(VarAppliedNamedFilter=My Activities,InitialCommand=Refresh))`);
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
              Type: campaign[16].Value
            };
            this.title = campaign[1].Value;
            this.dataSet.push(item);
          }
        }
        console.log({ea: response, this: this});
        this.busyIndicator.activated = false;
      }
    );
  }
}
