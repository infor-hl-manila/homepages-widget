/// <reference path="soho-toolbar-flex.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoToolbarFlexSearchFieldComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private changeDetector;
    private element;
    private ngZone;
    options: SohoToolbarFlexSearchFieldOptions;
    clearable: boolean;
    collapsible: boolean;
    collapsibleOnMobile: boolean;
    source: SohoAutoCompleteSource;
    template: string;
    selected: EventEmitter<Object[]>;
    cleared: EventEmitter<Object[]>;
    readonly isSearchField: boolean;
    private jQueryElement;
    private toolbarFlexSearchField;
    private searchFieldChanged;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    clear(): void;
    readonly searchField: SohoToolbarFlexSearchFieldStatic;
    private markForRefresh;
}
export declare class SohoToolbarFlexMoreButtonComponent {
    isMoreButton: boolean;
    isToolbarSection: boolean;
    isDisabled: boolean;
    ajaxBeforeFunction: Function;
    menuId: string;
}
export declare class SohoToolbarFlexPageTitleComponent {
    isPageTitle: boolean;
}
export declare class SohoToolbarFlexSectionTitleComponent {
    isSectionTitle: boolean;
}
export declare class SohoToolbarFlexSectionComponent {
    isToolbarSection: boolean;
    isTitleFavor: boolean;
    isTitle: boolean;
    isButtonSet: boolean;
    isSearch: boolean;
}
export declare class SohoToolbarFlexNavButtonComponent {
    isIconButton: boolean;
    isAppMenuTrigger: boolean;
    typeAttr: string;
}
export declare class SohoToolbarFlexComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    private changeDetector;
    private element;
    private ngZone;
    isToolbar: boolean;
    moreMenuBeforeOpenFunction: AjaxBeforeMoreMenuOpenFunction;
    selected: EventEmitter<SohoToolbarFlexSelectedEvent>;
    private _options;
    private jQueryElement;
    private toolbarFlex;
    private toolbarFlexChanged;
    constructor(changeDetector: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    updated(settings?: any): void;
    readonly options: SohoToolbarFlexOptions;
    private markForRefresh;
}
