/// <reference path="soho-rating.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare class SohoRatingComponent implements AfterViewInit, OnDestroy {
    private element;
    private settings;
    readonly isRating: boolean;
    private jQueryElement;
    private rating;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
