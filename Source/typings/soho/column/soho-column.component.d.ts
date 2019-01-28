/// <reference path="soho-column.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoColumnComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isColumn: boolean;
    dataset: Array<any>;
    type: string;
    isStacked: boolean;
    showLegend: boolean;
    animate: boolean;
    redrawOnResize: boolean;
    format: string;
    formatterString: string;
    ticks: object[];
    emptyMessage: object[];
    xAxis: object;
    selected: EventEmitter<SohoColumnSelectEvent>;
    unselected: EventEmitter<SohoColumnSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private column;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoColumnSelected): void;
    toggleSelected(selected: SohoColumnSelected): void;
    getSelected(): void;
}
