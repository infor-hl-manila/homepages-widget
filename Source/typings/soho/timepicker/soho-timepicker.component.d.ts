/// <reference path="soho-timepicker.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoTimePickerComponent extends BaseControlValueAccessor<any> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    ref: ChangeDetectorRef;
    private runUpdatedOnCheck;
    private jQueryElement;
    private timepicker;
    private isDisabled;
    private isReadOnly;
    private options;
    mode: SohoTimePickerMode;
    timeFormat: string;
    minuteInterval: number;
    roundToInterval: boolean;
    disabled: boolean;
    readonly: boolean;
    change: EventEmitter<SohoTimePickerEvent>;
    setValue(time: string): void;
    readonly isTimepicker: boolean;
    constructor(element: ElementRef, ngZone: NgZone, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    onChange(event: SohoTimePickerEvent): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    markForRefresh(): void;
}
