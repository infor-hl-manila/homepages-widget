/// <reference path="soho-treemap.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoTreemapComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isTreemap: boolean;
    dataset: Object;
    redrawOnResize: boolean;
    margin: Object[];
    colors: Array<any>;
    showLabel: boolean;
    labelFormatter: string;
    showTitle: boolean;
    emptyMessage: object[];
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private treemap;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
