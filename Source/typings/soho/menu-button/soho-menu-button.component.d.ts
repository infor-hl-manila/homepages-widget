/// <reference path="soho-menu-button.d.ts" />
/// <reference types="jquery" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
export declare class SohoMenuButtonComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ref;
    private ngZone;
    readonly isBtnMenu: boolean;
    readonly buttonType: string;
    private jQueryElement;
    private menuButton;
    private button;
    private options;
    private buttonOptions;
    private runUpdatedOnCheck;
    selected: EventEmitter<SohoContextMenuEvent>;
    beforeopen: EventEmitter<SohoContextMenuEvent>;
    open$: EventEmitter<SohoContextMenuEvent>;
    close$: EventEmitter<SohoContextMenuEvent>;
    icon: string;
    autoFocus: boolean;
    mouseFocus: boolean;
    showArrow: boolean;
    returnFocus: boolean;
    trigger: SohoPopupMenuTrigger;
    menu: string | JQuery<HTMLElement>;
    ajaxBeforeOpenFunction: AjaxBeforeOpenFunction;
    hideMenuArrow: boolean;
    attachToBody: boolean;
    removeOnDestroy: boolean;
    constructor(element: ElementRef, ref: ChangeDetectorRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    private onSelected;
    private onBeforeOpen;
    private onClose;
    private onOpen;
    updated(): void;
    teardown(): void;
    close(): void;
    open(event: JQuery.TriggeredEvent, ajaxReturn?: boolean, useDelay?: boolean): void;
    ngOnDestroy(): void;
    markForRefresh(): void;
}
