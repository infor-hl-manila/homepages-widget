/// <reference path="soho-column.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoColumnComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isColumn: boolean;
    dataset: Array<any>;
    type: SohoColumnType;
    isStacked: boolean;
    showLegend: boolean;
    animate: boolean;
    redrawOnResize: boolean;
    format: string;
    formatterString: string;
    ticks: object;
    emptyMessage: SohoEmptyMessageOptions;
    xAxis: object;
    yAxis: object;
    selected: EventEmitter<SohoColumnSelectEvent>;
    unselected: EventEmitter<SohoColumnSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    column: SohoColumn;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoColumnSelected): void;
    toggleSelected(selected: SohoColumnSelected): void;
    getSelected(): any;
}
