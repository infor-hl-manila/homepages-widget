/// <reference path="soho-line.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoLineComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
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
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoLineSelected): void;
    toggleSelected(selected: SohoLineSelected): void;
    getSelected(): any;
}
