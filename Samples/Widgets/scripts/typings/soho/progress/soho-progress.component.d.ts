/// <reference path="soho-progress.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoProgressComponent implements AfterViewInit, OnDestroy {
    private element;
    value: number;
    progressValue: number;
    change: EventEmitter<Object>;
    progressClass: boolean;
    readonly dispType: string;
    private options;
    private jQueryElement;
    private progress;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    update(value: number): void;
}
