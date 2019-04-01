/// <reference path="soho-circlepager.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
export declare class SohoCirclepagerComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private settings;
    readonly isCirclePager: boolean;
    slidesToShow: number;
    startingSlide: number;
    loop: boolean;
    private jQueryElement;
    private circlepager;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
