/// <reference path="soho-popdown.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare class SohoPopDownDirective implements AfterViewInit, OnDestroy {
    private element;
    readonly isPopdown: boolean;
    private jQueryElement;
    private popdown;
    private popdownOptions;
    keepOpen: boolean;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
}
