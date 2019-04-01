/// <reference path="soho-bar.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoBarComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isBar: boolean;
    dataset: Array<any>;
    type: SohoBarType;
    isStacked: boolean;
    isNormalized: boolean;
    isGrouped: boolean;
    showLegend: boolean;
    animate: boolean;
    redrawOnResize: boolean;
    formatterString: string;
    format: string;
    tooltip: string;
    useLogScale: boolean;
    ticks: object;
    showLines: boolean;
    labelFactor: number;
    wrapWidth: number;
    emptyMessage: SohoEmptyMessageOptions;
    selected: EventEmitter<SohoBarSelectEvent>;
    unselected: EventEmitter<SohoBarSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private bar;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoBarSelected): void;
    toggleSelected(selected: SohoBarSelected): void;
    getSelected(): SohoBarSelected;
}
