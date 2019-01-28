/// <reference path="soho-slider.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoSliderComponent extends BaseControlValueAccessor<number> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    min: number;
    max: number;
    step: number;
    value: number[];
    range: boolean;
    ticks: string;
    persistTooltip: boolean;
    tooltipContent: string[];
    vertical: boolean;
    change: EventEmitter<SohoSliderEvent>;
    updated: EventEmitter<SohoSliderEvent>;
    readonly isSlider: boolean;
    readonly isVerticalSlider: boolean;
    readonly sliderType: string;
    private isDisabled;
    private isReadOnly;
    private isVertical;
    private isVerticalOriginal;
    private jQueryElement;
    private slider;
    private options;
    constructor(element: ElementRef);
    disabled: boolean;
    readonly: boolean;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    onChange(event: SohoSliderEvent): void;
    onUpdated(event: SohoSliderEvent): void;
    setDisabledState(isDisabled: boolean): void;
}
