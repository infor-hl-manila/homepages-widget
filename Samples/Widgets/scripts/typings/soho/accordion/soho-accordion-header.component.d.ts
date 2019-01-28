/// <reference path="soho-accordion.d.ts" />
import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SohoAccordionHeaderComponent implements AfterViewInit {
    elementRef: ElementRef;
    jQueryElement: JQuery;
    isDisabled: boolean;
    readonly isBlockDisplay: string;
    readonly isAccordionHeader: boolean;
    isExpanded: boolean;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
