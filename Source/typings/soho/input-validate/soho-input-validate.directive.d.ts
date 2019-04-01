/// <reference path="soho-input-validate.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone } from '@angular/core';
export declare class SohoInputValidateDirective implements AfterViewInit {
    private el;
    private ngZone;
    private jQueryElement;
    private validator;
    dataValidate: string;
    error: EventEmitter<SohoInputValidateEvent>;
    alert: EventEmitter<SohoInputValidateEvent>;
    confirm: EventEmitter<SohoInputValidateEvent>;
    icon: EventEmitter<SohoInputValidateEvent>;
    info: EventEmitter<SohoInputValidateEvent>;
    valid: EventEmitter<SohoInputValidateEvent>;
    constructor(el: ElementRef, dataValidateAttr: any, ngZone: NgZone);
    ngAfterViewInit(): void;
    removeMessage(type: any): void;
    validate(event: any): void;
}
