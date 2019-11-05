/// <reference path="soho-homepage.d.ts" />
import { AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
export declare class SohoHomepageSizerDirective implements AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    private ngZone;
    readonly heightStyle: number;
    private jQueryElement;
    private containerHeight;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
