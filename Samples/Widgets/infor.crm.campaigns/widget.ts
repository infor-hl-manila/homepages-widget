import { IWidgetContext, IWidgetInstance } from "lime";
import { CampaignsWidgetComponent, CampaignsWidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext): IWidgetInstance => {
  return {
    angularConfig: {
      moduleType: CampaignsWidgetModule,
      componentType: CampaignsWidgetComponent
    }
  };
};
