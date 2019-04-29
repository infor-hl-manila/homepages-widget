import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { SohoChartComponent, SohoChartModule, SohoToastService } from "@infor/sohoxi-angular";
import { IWidgetComponent, IWidgetContext, IWidgetInstance, Log } from "lime";

class SettingKeys {
	static primaryChartType = "primaryChartType";
	static secondaryChartType = "secondaryChartType";
}

@Component({
	template: `
	<div class="wrapper">
		<div class="primary chart-container">
			<div soho-chart #primaryChart></div>
		</div>
		<div class="secondary chart-container">
			<div soho-chart #secondaryChart></div>
		</div>
	</div>
	`,
	styles: [
		`
	.wrapper{height:100%;width:100%;display:flex;}

	/* Hides the second chart on smaller screens, or when there are multiple widgets in the banner */
	:host-context(.to-single, .to-double, .double-width, .widget:not(.quad-width):not(.triple-width))
.secondary.chart-container{display:none;}

	.primary.chart-container{flex:2;}
	.secondary.chart-container{flex:1;}

	.chart-pie{height:100%;}
	`
	]
})
export class WidgetComponent implements IWidgetComponent, OnInit {
	@Input()
	widgetContext: IWidgetContext;
	@Input()
	widgetInstance: IWidgetInstance;

	@ViewChild("primaryChart")
	primaryChart: SohoChartComponent;
	@ViewChild("secondaryChart")
	secondaryChart: SohoChartComponent;

	primaryChartType: ChartTypes;
	secondaryChartType: ChartTypes;
	chartData: SohoDataSet = [
		{
			data: [
				{ name: "Automotive", value: 7 },
				{ name: "Distribution", value: 10 },
				{ name: "Equipment", value: 20 },
				{ name: "Fashion", value: 20 },
				{ name: "Food & Beverage", value: 15 },
				{ name: "Healthcare", value: 10 },
				{ name: "Other", value: 18 }
			]
		}
	];

	private logPrefix = "[infor.sample.angular.banner] ";

	constructor(private toastService: SohoToastService) { }

	ngOnInit(): void {
		if (this.widgetContext.isBanner()) {
			this.showInitialBannerColorToast();
			this.widgetInstance.bannerBackgroundChanged = (newColor: string) => {
				this.showBackgroundColorChangedToast(newColor);
			};
		}
		this.updateCharts();
		this.widgetInstance.settingsSaved = () => this.updateCharts();
	}

	private showInitialBannerColorToast(): void {
		const bannerColor = this.widgetContext.getBannerBackgroundColor();
		this.toastService.show({
			title: "Banner added",
			message: `The banner widget container is using background color ${bannerColor}`,
			timeout: 5000,
			position: SohoToastService.BOTTOM_RIGHT
		});
	}

	private showBackgroundColorChangedToast(newColor: string): void {
		this.toastService.show({
			title: "Banner container changed",
			message: `The banner container is now using background color ${newColor}`,
			timeout: 5000,
			position: SohoToastService.BOTTOM_RIGHT
		});
	}

	private updateCharts(): void {
		Log.debug(this.logPrefix + "updating charts");
		const commonOptions: SohoChartOptions = {
			labels: { hideLabels: true },
			dataset: this.chartData,
			showLegend: false,
		};

		this.primaryChart.chartOptions = {
			...commonOptions,
			type: this.getChartTypeFromSetting(SettingKeys.primaryChartType),
		};

		this.secondaryChart.chartOptions = {
			...commonOptions,
			type: this.getChartTypeFromSetting(SettingKeys.secondaryChartType),
		};
	}

	private getChartTypeFromSetting(setting: string): ChartTypes {
		return this.widgetContext.getSettings().get<ChartTypes>(setting, "bar");
	}
}

@NgModule({
	imports: [
		CommonModule,
		SohoChartModule
	],
	declarations: [
		WidgetComponent
	],
	entryComponents: [
		WidgetComponent
	]
})
export class WidgetModule {
}
