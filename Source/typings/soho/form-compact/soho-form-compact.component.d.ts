/// <reference path="soho-form-compact.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
export declare class SohoFormCompactComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isFormCompact: boolean;
    private jQueryElement;
    private formcompact;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
