/// <reference path="soho-bullet.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoBulletComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isBullet: boolean;
    dataset: SohoDatasetOptions;
    animate: any;
    redrawOnResize: boolean;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private bullet;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
