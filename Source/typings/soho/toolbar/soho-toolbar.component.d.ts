/// <reference path="soho-toolbar.d.ts" />
/// <reference path="../searchfield/soho-searchfield.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
export declare class SohoToolbarSearchFieldWrapperComponent {
    readonly isSearchfieldWrapper: boolean;
    readonly isToolbarSearchfieldWrapper: boolean;
}
export declare class SohoToolbarSearchFieldComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private changeDetector;
    private element;
    private ngZone;
    options: SohoToolbarSearchFieldOptions;
    clearable: boolean;
    collapsible: boolean;
    collapsibleOnMobile: boolean;
    source: SohoAutoCompleteSource;
    template: string;
    selected: EventEmitter<Object[]>;
    cleared: EventEmitter<Object[]>;
    readonly isSearchField: boolean;
    private jQueryElement;
    private toolbarsearchfield;
    private searchFieldChanged;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    clear(): void;
    private markForRefresh();
}
export declare class SohoToolbarMoreButtonComponent {
    readonly isMoreButton: boolean;
    isDisabled: boolean;
}
export declare class SohoPageTitleComponent {
    readonly isPageTitle: boolean;
}
export declare class SohoSectionTitleComponent {
    readonly isSectionTitle: boolean;
}
export declare class SohoToolbarNavButtonComponent {
    readonly isIconButton: boolean;
    readonly isAppMenuTrigger: boolean;
    readonly typeAttr: string;
}
export declare class SohoToolbarTitleComponent {
    readonly isTitle: boolean;
}
export declare class SohoToolbarButtonSetComponent {
    readonly isButtonSet: boolean;
}
export declare class SohoToolbarComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private changeDetector;
    private element;
    private ngZone;
    readonly isToolbar: boolean;
    readonly showMoreButton: boolean;
    readonly isBlock: string;
    noActionsButton: boolean;
    hasMoreButton: boolean;
    maxVisibleButtons: number;
    rightAligned: boolean;
    rightAlign: boolean;
    resizeContainers: boolean;
    favorButtonset: boolean;
    moreMenuSettings: SohoPopupMenuOptions;
    registerForEvents: any;
    beforeActivated: EventEmitter<SohoToolbarEvent>;
    activated: EventEmitter<SohoToolbarEvent>;
    afterActivated: EventEmitter<SohoToolbarEvent>;
    selected: EventEmitter<SohoToolbarSelectedEvent>;
    menuItemMouseOver: EventEmitter<HTMLButtonElement>;
    private options;
    private jQueryElement;
    private toolbar;
    private toolbarChanged;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private hookupRegisteredEvents();
    updated(settings?: any): void;
    handleResize(): void;
    private markForRefresh();
}
