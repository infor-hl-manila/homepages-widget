/// <reference path="soho-tabs.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { DeprecatedEventEmitter } from '../utils/deprecated-event-emitter';
export declare class SohoTabTitleComponent {
    readonly hrefAttr: string;
    tabId: string;
}
export declare class SohoTabCountComponent {
    private element;
    constructor(element: ElementRef);
}
export declare class SohoTabSeparatorComponent {
    private element;
    constructor(element: ElementRef);
}
export declare class SohoTabPanelContainerComponent {
    private element;
    constructor(element: ElementRef);
    verticalScrolling: any;
}
export declare class SohoTabPanelComponent {
    private element;
    constructor(element: ElementRef);
    tabId: string;
    contained: string;
}
export declare class SohoTabComponent {
    private element;
    constructor(element: ElementRef);
    dismissible: boolean;
    selected: boolean;
    disabled: boolean;
    hidden: boolean;
    hasPopupMenu: boolean;
}
export declare class SohoTabListComponent {
    private element;
    constructor(element: ElementRef);
}
export declare class SohoTabListContainerComponent {
    private element;
    constructor(element: ElementRef);
    verticalScrolling: any;
}
export declare class SohoTabsComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private changeDetectorRef;
    private element;
    private ngZone;
    readonly isVertical: boolean;
    readonly isModuleTabs: boolean;
    readonly isHeaderTabs: boolean;
    readonly isAlternate: boolean;
    alternate: boolean;
    vertical: boolean;
    moduleTabs: boolean;
    headerTabs: boolean;
    beforeCloseCallback: Function;
    tabsOptions: SohoTabsOptions;
    addTabButton: boolean;
    addTabButtonCallback: Function;
    containerElement: string;
    changeTabOnHashChange: boolean;
    hashChangeCallback: Function;
    tabCounts: boolean;
    verticalResponsive: boolean;
    disableAutoUpdatedCall: boolean;
    registerForEvents: any;
    beforeActivated: EventEmitter<SohoTabsEvent>;
    beforeActivate: DeprecatedEventEmitter<SohoTabsEvent>;
    activated: EventEmitter<SohoTabsEvent>;
    afterActivated: EventEmitter<SohoTabsEvent>;
    beforeClose: EventEmitter<SohoTabsEvent>;
    close: EventEmitter<SohoTabsEvent>;
    afterClose: EventEmitter<SohoTabsEvent>;
    tabAdded: EventEmitter<SohoTabsEvent>;
    private jQueryElement;
    private tabs;
    private _tabsOptions;
    private tabCount;
    private tabIds;
    private tabTitles;
    private updateRequired;
    constructor(changeDetectorRef: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private hookupRegisteredEvents();
    private updateTabInfo();
    private getTabLiList();
    private getTabIds();
    private getTabTitles($liList?);
    updated(): void;
    handleResize(): void;
    add(tabId: string, options: any, atIndex: number): void;
    remove(tabId: string, disableBeforeClose?: boolean): void;
    hide(tabId: string): void;
    show(tabId: string): void;
    disableTab(tabId: number): void;
    enableTab(tabId: number): void;
    rename(tabId: string, name: string): void;
    getTab(event: SohoTabsEvent, tabId: string): any;
    getActiveTab(): JQuery;
    getVisibleTabs(): Array<JQuery>;
    getOverflowTabs(): Array<JQuery>;
    select(href: string): void;
    disable(): void;
    enable(): void;
    private onBeforeActivated(event, tab);
    private onActivated(event, tab);
    private onAfterActivated(event, tab);
    private onBeforeClose(event, tab);
    private onClose(event, tab);
    private onAfterClose(event, tab);
    private onTabAdded(event, tab);
}
