/// <reference path="soho-alert.d.ts" />
import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
export declare class SohoAlertDirective implements AfterViewInit {
    elementRef: ElementRef;
    private ngZone;
    private _options;
    private jQueryElement;
    message: string;
    type: SohoAlertType;
    isAlert: boolean;
    triggerEvents: boolean;
    icon: string;
    readonly errorMessage: string;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    addInlineError(message: string): void;
    addInlineMessage(message: string, type?: SohoAlertType, isAlert?: boolean, triggerEvents?: boolean, icon?: string): void;
    getMessage(type?: SohoAlertType): string;
    removeError(): void;
    removeMessage(type?: SohoAlertType, triggerEvents?: boolean): void;
    removeAllMessages(triggerEvents?: boolean): void;
    scrollIntoView(alignToTop?: boolean): void;
}
