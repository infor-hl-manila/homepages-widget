import { IWidgetContext, IWidgetInstance } from "lime";
import { CampaignsWidgetComponent, CampaignsWidgetModule, getActions } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    actions: getActions(),
    angularConfig: {
      moduleType: CampaignsWidgetModule,
      componentType: CampaignsWidgetComponent
    }
  };
};
