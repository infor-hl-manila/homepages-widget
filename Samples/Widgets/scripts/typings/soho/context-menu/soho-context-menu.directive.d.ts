/// <reference path="soho-context-menu.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoContextMenuDirective implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    private jQueryElement;
    private contextMenu;
    private options;
    selected: EventEmitter<SohoContextMenuEvent>;
    beforeopen: EventEmitter<SohoContextMenuEvent>;
    open: EventEmitter<SohoContextMenuEvent>;
    close: EventEmitter<SohoContextMenuEvent>;
    trigger: SohoPopupMenuTrigger;
    menu: string;
    beforeOpen: SohoPopupMenuSourceFunction;
    registerForEvents: any;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    private hookupRegisteredEvents();
    updated(): void;
    teardown(): void;
    ngOnDestroy(): void;
}
