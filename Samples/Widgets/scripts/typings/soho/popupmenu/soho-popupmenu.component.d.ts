/// <reference path="soho-popupmenu.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoPopupMenuHeadingComponent {
    readonly isHeading: boolean;
}
export declare class SohoPopupMenuSeparatorComponent {
    readonly isSeparator: boolean;
    singleSelectableSection: boolean;
}
export declare class SohoPopupMenuItemLabelComponent {
    readonly hrefAttr: string;
    menuId: string;
    menuUrl: string;
}
export declare class SohoPopupMenuItemComponent {
    isChecked: boolean;
    isSelectable: boolean;
    isDisabled: boolean;
    subMenu: boolean;
}
export declare class SohoPopupMenuComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private ngZone;
    popupmenuOptions: SohoPopupMenuOptions;
    menu: string | JQuery;
    trigger: SohoPopupMenuTrigger;
    autoFocus: boolean;
    mouseFocus: boolean;
    attachToBody: boolean;
    beforeOpen: SohoPopupMenuSourceFunction;
    ariaListbox: boolean;
    useCoordsForClick: boolean;
    eventObj: any;
    placementOpts: SohoPopupmenuPlacementOpts;
    offset: SohoPopupmenuOffset;
    registerForEvents: any;
    selected: EventEmitter<SohoPopupMenuEvent>;
    popupmenuafterplace: EventEmitter<SohoPopupMenuEvent>;
    beforeopen: EventEmitter<SohoPopupMenuEvent>;
    open: EventEmitter<SohoPopupMenuEvent>;
    afteropen: EventEmitter<SohoPopupMenuEvent>;
    closeEvent: EventEmitter<SohoPopupMenuEvent>;
    isPopupmenu: boolean;
    private jQueryElement;
    private popupmenu;
    private _popupMenuOptions;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    private hookupRegisteredEvents();
    getSelected(): any;
    updated(settings: any): void;
    teardown(): void;
    close(isCancelled?: boolean, noFocus?: boolean): void;
    destroy(): void;
    ngOnDestroy(): void;
}
