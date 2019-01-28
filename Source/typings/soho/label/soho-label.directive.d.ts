import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SohoLabelDirective implements AfterViewInit {
    private element;
    audible: boolean;
    required: boolean;
    forCheckBox: boolean;
    forRadioButton: boolean;
    readonly isLabel: boolean;
    readonly isCheckBoxLabel: boolean;
    readonly isRadioButtonLabel: boolean;
    readonly isAudible: boolean;
    readonly isRequired: boolean;
    private jQueryElement;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
