/// <reference path="soho-sparkline.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoSparklineComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isSparkline: boolean;
    dataset: Array<any>;
    type: string;
    colors: Array<any>;
    isDots: boolean;
    isPeakDot: boolean;
    isMinMax: boolean;
    isMedianRange: boolean;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private sparkline;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
