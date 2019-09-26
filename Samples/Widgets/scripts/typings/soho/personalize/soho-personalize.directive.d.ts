/// <reference path="soho-personalize.d.ts" />
/// <reference types="jquery" />
import { AfterViewInit, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoPersonalizeDirective implements AfterViewInit, OnDestroy {
    private ngZone;
    options: SohoPersonalizeOptions;
    colors: string | SohoPersonalizeColors;
    theme: string;
    changetheme: EventEmitter<SohoChangeThemePersonalizeEvent>;
    changecolors: EventEmitter<SohoChangeColorsPersonalizeEvent>;
    private personalize;
    private jQueryElement;
    constructor(ngZone: NgZone);
    ngAfterViewInit(): void;
    readonly currentTheme: SohoTheme;
    themes(): SohoTheme[];
    personalizationColors(): SohoPersonalizationColors;
    onChangeTheme(e: JQuery.TriggeredEvent, theme: string): void;
    onChangeColors(e: JQuery.TriggeredEvent, colors: any): void;
    ngOnDestroy(): void;
}
