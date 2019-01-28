/// <reference path="soho-error.d.ts" />
import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SohoErrorDirective implements AfterViewInit {
    private el;
    private _options;
    private jQueryElement;
    constructor(el: ElementRef);
    message: string;
    showTooltip: boolean;
    inline: boolean;
    readonly errorMessage: JQuery<HTMLElement>;
    addInlineError(message: string): void;
    addTooltipError(message: string): void;
    removeError(): void;
    scrollIntoView(alignToTop?: boolean): void;
    ngAfterViewInit(): void;
}
