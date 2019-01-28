/// <reference path="soho-bar.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoBarComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    readonly isBar: boolean;
    dataset: Array<any>;
    type: string;
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
    ticks: object[];
    showLines: boolean;
    labelFactor: number;
    wrapWidth: number;
    emptyMessage: object[];
    selected: EventEmitter<SohoBarSelectEvent>;
    unselected: EventEmitter<SohoBarSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private bar;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoBarSelected): void;
    toggleSelected(selected: SohoBarSelected): void;
    getSelected(): SohoBarSelected;
}
