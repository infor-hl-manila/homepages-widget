/// <reference path="soho-radiobutton.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare class SohoRadioButtonComponent implements AfterViewInit {
    private element;
    value: any;
    change: EventEmitter<SohoRadioButtonEvent>;
    readonly isRadioType: string;
    readonly isRadioButton: boolean;
    disabled: boolean;
    checked: boolean;
    private jQueryElement;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    onChange(event: SohoRadioButtonEvent): void;
}
