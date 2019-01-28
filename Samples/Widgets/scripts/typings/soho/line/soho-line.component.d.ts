/// <reference path="soho-line.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoLineComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isLine: boolean;
    dataset: Array<any>;
    tooltip: string;
    isArea: boolean;
    isBubble: boolean;
    showLegend: boolean;
    xAxis: object;
    yAxis: object;
    hideDots: boolean;
    axisLabels: any;
    animate: boolean;
    redrawOnResize: boolean;
    dots: object;
    formatterString: string;
    emptyMessage: SohoEmptyMessageOptions;
    selected: EventEmitter<SohoLineSelectEvent>;
    unselected: EventEmitter<SohoLineSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private line;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoLineSelected): void;
    toggleSelected(selected: SohoLineSelected): void;
    getSelected(): void;
}
