/// <reference path="soho-chart.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
export declare class SohoChartComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    chartOptions: SohoChartOptions;
    selectedIndex: number;
    dataSet: SohoDataSet;
    type: ChartTypes;
    axisLabels: AxisLabels;
    showLegend: boolean;
    hideLabels: boolean;
    formatterString: string;
    legendFormatter: string;
    chartLabel: ChartLabel;
    chartredrawOnResizeLabel: boolean;
    chartAnimate: boolean;
    selected: EventEmitter<ChartEvent>;
    unselected: EventEmitter<ChartEvent>;
    rendered: EventEmitter<ChartEvent>;
    contextmenu: EventEmitter<ChartEvent>;
    private _chartOptions;
    private jQueryElement;
    private chart;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getChartOptions(): SohoChartOptions;
    updated(): void;
    getSelected(): any;
    setSelectRef(ref: any): void;
    setSelectDataIndex(selectIndex: number): void;
}
