/// <reference path="soho-application-menu.d.ts" />
import { AfterViewInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class SohoApplicationMenuComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    breakpoint: SohoApplicationMenuBreakPoint;
    openOnLarge: boolean;
    dismissOnClickMobile: boolean;
    triggers: string[];
    filterable: boolean;
    readonly classes: string;
    readonly menuId: string;
    private jQueryElement;
    private applicationmenu;
    private _triggers;
    private _openOnLarge;
    private _dismissOnClickMobile;
    visibility: EventEmitter<boolean>;
    menuVisibility: EventEmitter<boolean>;
    filtered: EventEmitter<any[]>;
    constructor(elementRef: ElementRef);
    closeMenu(): void;
    openMenu(): void;
    isOpen(): boolean;
    updated(): void;
    updateLazy(applicationMenu: SohoApplicationMenuComponent, target: any): void;
    toggleAndSelectHeader(applicationMenu: SohoApplicationMenuComponent, header: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
