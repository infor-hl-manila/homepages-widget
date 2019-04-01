/// <reference path="soho-personalize.d.ts" />
import { AfterViewInit, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoPersonalizeDirective implements AfterViewInit, OnDestroy {
    private ngZone;
    private personalize;
    private jQueryElement;
    options: SohoPersonalizeOptions;
    colors: string | SohoPersonalizeColors;
    theme: string;
    changetheme: EventEmitter<SohoChangeThemePersonalizeEvent>;
    changecolors: EventEmitter<SohoChangeColorsPersonalizeEvent>;
    constructor(ngZone: NgZone);
    ngAfterViewInit(): void;
    onChangeTheme(e: JQuery.Event, theme: string): void;
    onChangeColors(e: JQuery.Event, colors: any): void;
    ngOnDestroy(): void;
}
