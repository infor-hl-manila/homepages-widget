/// <reference path="soho-trackdirty.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoTrackDirtyDirective implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    readonly trackDirtyAttr: boolean;
    dirty: EventEmitter<SohoTrackDirtyEvent>;
    pristine: EventEmitter<SohoTrackDirtyEvent>;
    afterResetDirty: EventEmitter<SohoTrackDirtyEvent>;
    private jQueryElement;
    private trackDirty;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    changeDirty(): void;
    resetDirty(): void;
    updated(): void;
}
