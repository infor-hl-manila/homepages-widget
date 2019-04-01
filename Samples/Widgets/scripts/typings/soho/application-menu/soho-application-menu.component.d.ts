/// <reference path="soho-application-menu.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
export declare class SohoApplicationMenuComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private elementRef;
    private ngZone;
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
    private updateRequired;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    closeMenu(): void;
    openMenu(noFocus?: boolean, userOpened?: boolean, openedByClass?: boolean): void;
    isOpen(): boolean;
    updated(): void;
    updateLazy(applicationMenu: SohoApplicationMenuComponent, target: any): void;
    toggleAndSelectHeader(applicationMenu: SohoApplicationMenuComponent, header: any): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
