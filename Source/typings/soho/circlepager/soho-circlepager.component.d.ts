/// <reference path="soho-circlepager.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare class SohoCirclepagerComponent implements AfterViewInit, OnDestroy {
    private element;
    private settings;
    readonly isCirclePager: boolean;
    slidesToShow: number;
    startingSlide: number;
    loop: boolean;
    private jQueryElement;
    private circlepager;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
