/// <reference path="soho-blockgrid.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoBlockGridComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isBlockGrid: boolean;
    dataset: Array<any>;
    selectable: any;
    selected: EventEmitter<Object[]>;
    deselected: EventEmitter<Object[]>;
    activated: EventEmitter<Object[]>;
    deactivated: EventEmitter<Object[]>;
    private jQueryElement;
    private blockgrid;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updated(settings: any): SohoBlockGridComponent;
}
