/// <reference path="soho-wizard.d.ts" />
import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
export declare class SohoWizardPageComponent implements AfterViewInit {
    private el;
    jQueryElement: JQuery;
    isWizardPage: boolean;
    hidden: boolean;
    tickId: string;
    activated: EventEmitter<SohoWizardEvent>;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    fireActivated(e: SohoWizardEvent): void;
}
