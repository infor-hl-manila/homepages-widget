/// <reference path="soho-bullet.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoBulletComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isBullet: boolean;
    dataset: SohoDatasetOptions;
    animate: any;
    redrawOnResize: boolean;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private bullet;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
