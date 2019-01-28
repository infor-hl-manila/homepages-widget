/// <reference path="soho-field-options.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy, NgZone } from '@angular/core';
export declare class SohoFieldOptionsDirective implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    private _options;
    allFieldOptions: boolean;
    private jQueryElement;
    private fieldOptions;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
