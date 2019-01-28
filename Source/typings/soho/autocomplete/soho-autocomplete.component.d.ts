/// <reference path="soho-autocomplete.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoAutoCompleteComponent extends BaseControlValueAccessor<string> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private options;
    source: SohoAutoCompleteSource;
    sourceArguments: string;
    template: string;
    filterMode: SohoAutoCompleteFilterMode;
    delay: number;
    width: SohoAutoCompleteWidth;
    offset: SohoAutoCompleteOffset;
    autoSelectFirstItem: boolean;
    change: EventEmitter<SohoInputEvent[]>;
    selected: EventEmitter<Object[]>;
    readonly isAutoComplete: boolean;
    disabled: boolean;
    readonly: boolean;
    private isDisabled;
    private isReadOnly;
    private jQueryElement;
    private autocomplete;
    constructor(element: ElementRef);
    onKeyUp(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    onChange(event: any[]): void;
    writeValue(value: any): void;
    getValue(): string;
    setValue(value: string): void;
    updated(): SohoAutoCompleteComponent;
    setDisabledState(isDisabled: boolean): void;
}
