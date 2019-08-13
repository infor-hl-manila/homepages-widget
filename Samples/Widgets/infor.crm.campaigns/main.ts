import {
  CommonModule
} from "@angular/common";
import {
  Component,
  Input,
  NgModule,
  OnInit
} from "@angular/core";
import {
  IWidgetAction,
  IWidgetComponent,
  IWidgetContext,
  IWidgetInstance
} from "lime";
import {
  DataService
} from "./services/data.service";

@Component({
  template: `<p>Hello World</p>`
})

export class CampaignsWidgetComponent implements OnInit {

  // tslint:disable-next-line:no-empty
  constructor(private dataService: DataService) {}
  ngOnInit(): void {/**/}
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CampaignsWidgetComponent
  ],
  entryComponents: [
    CampaignsWidgetComponent
  ]
})

export class CampaignsWidgetModule { }
