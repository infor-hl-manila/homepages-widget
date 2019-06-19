/// <reference path="soho-monthview.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoMonthViewComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    ref: ChangeDetectorRef;
    month: number;
    year: number;
    showMonthYearPicker: boolean;
    selected: EventEmitter<SohoMonthViewSelectedEvent>;
    monthRendered: EventEmitter<SohoMonthViewRenderMonthEvent>;
    private jQueryElement;
    private monthview;
    private options;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    markForRefresh(): void;
    ngOnDestroy(): void;
    onSelectedEvent(event: SohoMonthViewSelectedEvent): void;
    onMonthRenderedEvent(event: SohoMonthViewRenderMonthEvent): void;
    getDayEvents(): any;
    showMonth(month: number, year: number): void;
    selectDay(date: string | object, closePopup?: boolean): void;
    selectToday(): void;
}
