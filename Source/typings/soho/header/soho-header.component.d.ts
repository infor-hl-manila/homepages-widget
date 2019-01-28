/// <reference path="soho-header.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare class SohoHeaderComponent implements AfterViewInit {
    private elementRef;
    readonly isHeader: boolean;
    readonly isPersonalizable: boolean;
    hasToolbar: any;
    hasTabs: any;
    updated: EventEmitter<any>;
    private jQueryElement;
    private header;
    constructor(elementRef: ElementRef);
    removeBackButton(): void;
    ngAfterViewInit(): void;
}
