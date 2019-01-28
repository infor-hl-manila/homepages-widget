/// <reference path="soho-menu-button.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoMenuButtonComponent implements AfterViewInit, OnDestroy {
    private element;
    readonly isBtnMenu: boolean;
    readonly buttonType: string;
    private jQueryElement;
    private menuButton;
    private options;
    selected: EventEmitter<SohoContextMenuEvent>;
    beforeopen: EventEmitter<SohoContextMenuEvent>;
    open: EventEmitter<SohoContextMenuEvent>;
    close: EventEmitter<SohoContextMenuEvent>;
    icon: string;
    trigger: SohoPopupMenuTrigger;
    menu: string;
    ajaxBeforeOpenFunction: AjaxBeforeOpenFunction;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    updated(): void;
    teardown(): void;
    ngOnDestroy(): void;
}
