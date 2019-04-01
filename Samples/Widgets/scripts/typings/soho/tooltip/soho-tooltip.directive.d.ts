/// <reference path="soho-tooltip.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
export declare class SohoTooltipDirective implements AfterViewInit, OnDestroy, OnChanges {
    private element;
    private options;
    content: string;
    offset: number;
    placement: SohoTooltipOffset;
    trigger: string;
    title: string;
    beforeShow: any;
    popover: boolean;
    closebutton: boolean;
    isError: boolean;
    isErrorColor: boolean;
    tooltipElement: any;
    keepOpen: boolean;
    extraClass: string;
    maxWidth: number;
    changeEvent: EventEmitter<SohoTooltipEvent>;
    updateEvent: EventEmitter<SohoTooltipEvent>;
    private jQueryElement;
    private tooltip;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    private createControl;
    show(): void;
    hide(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
}
