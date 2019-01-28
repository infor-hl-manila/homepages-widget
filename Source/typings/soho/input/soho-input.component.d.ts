import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoInputComponent extends BaseControlValueAccessor<string> implements AfterViewInit, OnDestroy {
    private element;
    change: EventEmitter<SohoInputEvent[]>;
    isDisabled: any;
    private jQueryElement;
    constructor(element: ElementRef);
    onKeyUp(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChange(event: any[]): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    getValue(): string;
    setValue(value: string): void;
    focus(): void;
}
