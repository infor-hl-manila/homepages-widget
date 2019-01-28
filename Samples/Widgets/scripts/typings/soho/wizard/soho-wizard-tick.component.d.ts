/// <reference path="soho-wizard.d.ts" />
import { ElementRef, AfterViewInit } from '@angular/core';
export declare class SohoWizardTickComponent implements AfterViewInit {
    private elementRef;
    isWizardTick: boolean;
    readonly hrefAttr: string;
    tickId: string;
    current: boolean;
    disabled: boolean;
    jQueryElement: JQuery;
    isCurrentTick(): boolean;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
