/// <reference path="soho-homepage.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoHomePageComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private ngZone;
    resize: EventEmitter<SohoHomePageEvent>;
    homePageOptions: SohoHomePageOptions;
    columns: number;
    gutterSize: number;
    widgetWidth: number;
    widgetHeight: number;
    animate: boolean;
    timeout: number;
    easing: EasingType;
    isHomepage: boolean;
    private jQueryElement;
    private homepage;
    private _homePageOptions;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    refresh(animate?: boolean): void;
    ngAfterViewInit(): void;
    onResize(columns: number, metadata: object): void;
    ngOnDestroy(): void;
}
