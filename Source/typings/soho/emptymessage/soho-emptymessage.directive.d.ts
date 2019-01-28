/// <reference path="soho-emptymessage.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class SohoEmptyMessageDirective implements AfterViewChecked, AfterViewInit {
    private changeDetector;
    private element;
    emptyMessageOptions: SohoEmptyMessageOptions;
    title: string;
    info: string;
    icon: string;
    button: SohoEmptyMessageButtonOptions;
    color: EmptyMessageColor;
    private _emptyMessageOptions;
    private jQueryElement;
    private emptymessage;
    private updateComponent;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    private markForCheck();
}
