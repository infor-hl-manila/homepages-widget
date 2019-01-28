/// <reference path="soho-homepage.d.ts" />
import { AfterViewInit, ElementRef } from '@angular/core';
export declare class SohoHomePageComponent implements AfterViewInit {
    private elementRef;
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
    private homePage;
    private _homePageOptions;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
