/// <reference path="soho-busyindicator.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoBusyIndicatorDirective implements AfterViewInit, AfterViewChecked, OnDestroy {
    private elementRef;
    private ngZone;
    private options;
    private jQueryElement;
    private initiallyActive;
    private busyindicator;
    private updateBusyIndicator;
    afterstart: EventEmitter<SohoBusyIndicatorEvent>;
    complete: EventEmitter<SohoBusyIndicatorEvent>;
    blockUI: boolean;
    displayDelay: number;
    timeToComplete: number;
    text: string;
    activated: boolean;
    transparentOverlay: boolean;
    overlayOnly: boolean;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    close(fromEvent: boolean): void;
    open(): void;
    isActive(): boolean;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private onAfterStart;
    private onComplete;
}
export interface SohoBusyIndicatorEvent {
    type: 'afterstart' | 'complete';
    component: SohoBusyIndicatorDirective;
    event: JQuery.Event;
}
