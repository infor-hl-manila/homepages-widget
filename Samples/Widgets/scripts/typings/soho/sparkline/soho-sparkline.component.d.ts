/// <reference path="soho-sparkline.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoSparklineComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isSparkline: boolean;
    dataset: Array<any>;
    type: SohoSparklineType;
    colors: Array<any>;
    isDots: boolean;
    isPeakDot: boolean;
    isMinMax: boolean;
    isMedianRange: boolean;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private sparkline;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
