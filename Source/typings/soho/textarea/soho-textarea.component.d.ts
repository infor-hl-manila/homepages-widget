/// <reference path="soho-textarea.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoTextAreaComponent extends BaseControlValueAccessor<string> implements AfterViewInit, OnDestroy {
    private element;
    private options;
    private isDisabled;
    private isReadOnly;
    disabled: boolean;
    readonly: boolean;
    resizable: boolean;
    maxlength: number;
    characterCounter: boolean;
    printable: boolean;
    charRemainingText: string;
    charMaxText: string;
    updated: EventEmitter<SohoTextAreaEvent>;
    change: EventEmitter<SohoTextAreaEvent[]>;
    private jQueryElement;
    private textarea;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    onChange(event: any[]): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
}
