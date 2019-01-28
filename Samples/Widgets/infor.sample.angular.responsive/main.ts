import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit } from "@angular/core";
import { SohoButtonModule, SohoChartModule, SohoListViewModule } from "@infor/sohoxi-angular";
import { IWidgetAction, IWidgetComponent, IWidgetContext2, IWidgetInstance2, WidgetMessageType } from "lime";

@Component({
	template: `
	<div class="lm-height-full" [class.item-selected]="selectedCustomer">
		<button class="lm-margin-md-l"
			soho-button="icon" icon="left-arrow"
			(click)="selectedCustomer = null"
			*ngIf="selectedCustomer">
				Go back
		</button>
		<soho-listview class="widget-listview lm-scroll-no-x">
			<li soho-listview-item *ngFor="let item of items" (click)="updateChart(item)">
				<p soho-listview-header>{{item}}</p>
			</li>
		</soho-listview>
		<div class="widget-chartview chart-container" *ngIf="selectedCustomer">
			<div soho-chart
				[dataSet]="chartData"
				formatterString="$,"
				type="column">
			</div>
		</div>
	</div>`,
	styles: [
		`
	/* This host-context selector applies when the widget is set to have single width, or when it is forced to
	single width due to small screen resolution */

	/* Listview is hidden when an item is selected, only the chart will be displayed */

:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
.item-selected .widget-listview{display:none;}

/* Chart occupies full width when visible in single width mode */

:host-context(.to-single, .widget:not(.quad-width):not(.triple-width):not(.double-width))
.widget-chartview{width:100%;}

/* This host-context selector applies when the widget is set to have double, triple or quad width,
	and not forced to single width due to small screen resolution */

/* Listview shrinks to 50% and shown side by side with chart */

:host-context(.double-width, .triple-width, .quad-width, .widget:not(.to-single))
.item-selected .widget-listview{width:50%;}

/* Base rules for the listview and chart views */
.widget-listview{width:100%;float:left;height:100%;}

.widget-chartview{width:50%;height:calc(100% - 36px);float:left;}

.item-selected .widget-listview{border-right:1px solid #d8d8d8;}`
	]
})
export class ResponsiveWidgetComponent implements IWidgetComponent, OnInit {
	@Input()
	widgetContext: IWidgetContext2;
	@Input()
	widgetInstance: IWidgetInstance2;

	chartData: SohoDataSet;
	items: string[];
	selectedCustomer: string;

	ngOnInit(): void {
		this.items = ["Customer A", "Customer 2", "Customer 12345", "Lead customer", "Customer prospect"];
		this.widgetInstance.actions[0].execute = () => this.showInfo();
	}

	updateChart(customer: string): void {
		this.widgetContext.removeWidgetMessage();
		this.selectedCustomer = customer;
		this.chartData = [
			{
				data: [
					{ name: "2014", value: this.getRandomChartValue() },
					{ name: "2015", value: this.getRandomChartValue() },
					{ name: "2016", value: this.getRandomChartValue() },
					{ name: "2017", value: this.getRandomChartValue() }
				]
			}
		];
	}

	private showInfo(): void {
		this.widgetContext.showWidgetMessage({
			type: WidgetMessageType.Info,
			message: "Select a customer to show chart"
		});
	}

	private getRandomChartValue(): number {
		return Math.floor(Math.random() * 1000000);
	}
}

@NgModule({
	imports: [
		CommonModule,
		SohoButtonModule,
		SohoListViewModule,
		SohoChartModule
	],
	declarations: [ResponsiveWidgetComponent],
	entryComponents: [ResponsiveWidgetComponent]
})
export class ResponsiveWidgetModule {
}

export const getActions = (): IWidgetAction[] => {
	return [{ isPrimary: true, standardIconName: "#icon-info", text: "Information" }];
};
