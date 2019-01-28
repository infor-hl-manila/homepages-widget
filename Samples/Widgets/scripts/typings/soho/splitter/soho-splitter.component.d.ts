/// <reference path="soho-splitter.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoSplitterComponent implements AfterViewInit, OnDestroy {
    private element;
    private options;
    axis: SohoSplitterOptionsAxis;
    resize: SohoSplitterOptionsResize;
    containment: JQuery;
    collapseButton: boolean;
    save: boolean;
    split: EventEmitter<Object[]>;
    isSplitter: boolean;
    isSplitterRight: any;
    private jQueryElement;
    private splitter;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
