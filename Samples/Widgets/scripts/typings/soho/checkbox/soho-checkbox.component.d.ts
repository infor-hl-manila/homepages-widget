/// <reference path="soho-checkbox.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoCheckBoxComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    partial: boolean;
    readonly isCheckBoxType: string;
    readonly isCheckBox: boolean;
    readonly isPartialCheckBox: boolean;
    readonly isPartialAriaChecked: string;
    checked: boolean;
    changeEvent: EventEmitter<SohoCheckBoxEvent>;
    updateEvent: EventEmitter<SohoCheckBoxEvent>;
    private jQueryElement;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
