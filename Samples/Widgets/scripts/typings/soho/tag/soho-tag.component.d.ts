/// <reference path="soho-tag.d.ts" />
import { ElementRef, AfterViewInit, OnDestroy, NgZone, EventEmitter } from '@angular/core';
export declare type SohoTagType = 'error' | 'good' | 'alert' | 'secondary' | undefined;
export declare class SohoTagListComponent implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    readonly isTagList: boolean;
    afterRemove: EventEmitter<SohoTagAfterRemoveEvent>;
    private jQueryElement;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    private onAfterTagRemove;
    ngOnDestroy(): void;
}
export declare class SohoTagComponent implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    static ALERT: SohoTagType;
    static GOOD: SohoTagType;
    static SECONDARY: SohoTagType;
    static ERROR: SohoTagType;
    static DEFAULT: SohoTagType;
    beforeRemove: EventEmitter<SohoTagBeforeRemoveEvent>;
    click: EventEmitter<SohoTagAfterRemoveEvent>;
    private options;
    readonly isTag: boolean;
    readonly alert: boolean;
    readonly good: boolean;
    readonly secondary: boolean;
    readonly error: boolean;
    isClickable: boolean;
    isDismissible: boolean;
    sohoTag: SohoTagType;
    private tagType;
    private jQueryElement;
    private tag;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    private onBeforeTagRemove;
    private onClick;
    updated(): void;
    ngOnDestroy(): void;
}
