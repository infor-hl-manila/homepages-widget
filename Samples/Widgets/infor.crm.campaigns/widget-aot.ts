import { IWidgetContext, IWidgetInstance } from "lime";
import { CampaignsWidgetComponent, getActions } from "./main";
import { CampaignsWidgetModuleFactory } from "./main.ngFactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    actions: getActions(),
    angularConfig: {
      moduleFactory: CampaignsWidgetModuleFactory,
      componentType: CampaignsWidgetComponent
    }
  };
};
