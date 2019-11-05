/// <reference path="soho-calendar.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoCalendarMonthViewComponent {
    isCalendarMonthView: boolean;
}
export declare class SohoCalendarComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    ref: ChangeDetectorRef;
    isCalendar: boolean;
    calendarOptions: SohoCalendarOptions;
    eventTypes: SohoCalendarEventType[];
    events: SohoCalendarEvent[];
    locale: string;
    month: number;
    year: number;
    showViewChanger: boolean;
    onRenderMonth: Function;
    onSelected: Function;
    template: string;
    upcomingEventDays: number;
    modalTemplate: string;
    menuId: string;
    menuSelected: string;
    newEventDefaults: SohoCalendarEvent;
    selected: EventEmitter<SohoCalendarDateSelectedEvent>;
    monthRendered: EventEmitter<SohoCalendarRenderMonthEvent>;
    eventClick: EventEmitter<SohoCalendarEventClickEvent>;
    eventDblClick: EventEmitter<SohoCalendarEventClickEvent>;
    private jQueryElement;
    private calendar;
    private _calendarOptions;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onSelectedEvent(event: SohoCalendarDateSelectedEvent): void;
    onMonthRenderedEvent(event: SohoCalendarRenderMonthEvent): void;
    onEventClick(event: SohoCalendarEventClickEvent): void;
    onEventDblClick(event: SohoCalendarEventClickEvent): void;
    currentDate(): Date;
    getDayEvents(date: Date): SohoCalendarDayEvents;
    addEvent(event: SohoCalendarEvent): void;
    updateEvent(event: SohoCalendarEvent): void;
    deleteEvent(event: SohoCalendarEvent): void;
    showEventModal(event: SohoCalendarEvent[], done: Function): void;
    modalVisible(): boolean;
    clearEvents(): void;
    updated(settings?: SohoCalendarOptions): void;
    markForRefresh(): void;
    ngOnDestroy(): void;
}
