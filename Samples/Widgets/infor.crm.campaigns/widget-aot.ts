import { IWidgetContext, IWidgetInstance } from "lime";
import { CampaignsWidgetComponent, getActions } from "./main";
import { CampaignsWidgetModuleNgFactory } from "./main.ngfactory";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    actions: getActions(context),
    angularConfig: {
      moduleFactory: CampaignsWidgetModuleNgFactory,
      componentType: CampaignsWidgetComponent
    }
  };
};
