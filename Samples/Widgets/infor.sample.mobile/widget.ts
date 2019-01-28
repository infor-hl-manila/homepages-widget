import { IWidgetContext2, IWidgetInstance2 } from "lime";
import { MobileWidgetComponent, MobileWidgetModule } from "./main";

export const widgetFactory = (context: IWidgetContext2): IWidgetInstance2 => {
   return {
      angularConfig: {
         moduleType: MobileWidgetModule,
         componentType: MobileWidgetComponent,
      },
   };
};
