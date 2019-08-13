import { IWidgetContext, IWidgetInstance } from "lime";
import { CampaignsWidgetComponent } from "./main";
import { CampaignsWidgetModuleFactory } from "./main.ngFactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    angularConfig: {
      moduleFactory: CampaignsWidgetModuleFactory,
      componentType: CampaignsWidgetComponent
    }
  };
};
