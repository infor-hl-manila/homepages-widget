/// <reference path="soho-spinbox.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoSpinboxComponent extends BaseControlValueAccessor<number> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    internalIsDisabled: boolean;
    private runUpdatedOnCheck;
    disabled: boolean;
    change: EventEmitter<number>;
    spinboxClass: boolean;
    readonly spinboxType: string;
    id: string;
    name: string;
    min: number;
    max: number;
    value: number;
    step: boolean;
    attrDisabled: boolean;
    private options;
    private jQueryElement;
    private spinbox;
    updateVal(value: string | number): void;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    onChange(event: SohoSpinboxEvent): void;
    writeValue(value: number): void;
    setDisabledState(isDisabled: boolean): void;
}
