/// <reference path="soho-checkbox.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoCheckBoxComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private ngZone;
    partial: boolean;
    switch: boolean;
    readonly isCheckBoxType: string;
    readonly isCheckBox: boolean;
    readonly isPartialCheckBox: boolean;
    readonly isPartialAriaChecked: string;
    readonly isSwitch: boolean;
    checked: boolean;
    changeEvent: EventEmitter<SohoCheckBoxEvent>;
    updateEvent: EventEmitter<SohoCheckBoxEvent>;
    private jQueryElement;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
