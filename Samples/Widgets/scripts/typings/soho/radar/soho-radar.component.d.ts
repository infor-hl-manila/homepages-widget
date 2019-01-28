/// <reference path="soho-radar.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoRadarComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isRadar: boolean;
    dataset: Array<any>;
    redrawOnResize: boolean;
    margin: Object;
    levels: number;
    maxValue: number;
    labelFactor: number;
    wrapWidth: number;
    opacityArea: number;
    dotRadius: number;
    opacityCircles: number;
    strokeWidth: number;
    roundStrokes: boolean;
    showCrosslines: boolean;
    showAxisLabels: boolean;
    colors: any;
    showTooltips: boolean;
    tooltip: SohoRadarTooltipOptions;
    axisFormatter: string;
    showLegend: boolean;
    legendPlacement: string;
    emptyMessage: SohoEmptyMessageOptions;
    selected: EventEmitter<SohoRadarSelectEvent>;
    unselected: EventEmitter<SohoRadarSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private radar;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoRadarSelected): void;
    toggleSelected(selected: SohoRadarSelected): void;
    getSelected(): void;
}
