/// <reference path="soho-blockgrid.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoBlockGridComponent implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    readonly isBlockGrid: boolean;
    dataset: Array<any>;
    selectable: SohoBlockGridSelectable;
    selected: EventEmitter<Object[]>;
    deselected: EventEmitter<Object[]>;
    activated: EventEmitter<Object[]>;
    deactivated: EventEmitter<Object[]>;
    private options;
    private jQueryElement;
    private blockgrid;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updated(settings: any): SohoBlockGridComponent;
    activateBlock(idx: number): void;
    deactivateBlock(): void;
    selectBlocks(idx: number[]): void;
    private onSelected;
    private onDeselected;
    private onActivated;
    private onDeactivated;
}
