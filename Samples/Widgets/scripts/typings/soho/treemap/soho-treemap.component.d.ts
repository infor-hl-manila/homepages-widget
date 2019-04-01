/// <reference path="soho-treemap.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoTreemapComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isTreemap: boolean;
    dataset: Object;
    redrawOnResize: boolean;
    margin: Object[];
    colors: Array<any>;
    showLabel: boolean;
    labelFormatter: string;
    showTitle: boolean;
    emptyMessage: SohoEmptyMessageOptions;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private treemap;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
