/// <reference path="soho-listview.d.ts" />
import { AfterViewInit, AfterViewChecked, ElementRef, EventEmitter, OnDestroy, QueryList, NgZone } from '@angular/core';
import { SohoSearchFieldComponent } from '../searchfield/soho-searchfield.component';
export declare class SohoListViewSearchComponent {
    buildSearch: boolean;
    readonly isListviewSearch: boolean;
}
export declare class SohoListViewItemComponent implements AfterViewInit {
    element: ElementRef;
    private listItem;
    disabled: boolean;
    selected: boolean;
    constructor(element: ElementRef);
    readonly index: number;
    readonly selector: JQuery<HTMLElement>;
    ngAfterViewInit(): void;
}
export declare class SohoListViewHeaderComponent {
    readonly isHeading: boolean;
}
export declare class SohoListViewSubHeaderComponent {
    readonly isSubHeading: boolean;
}
export declare class SohoListViewMicroComponent {
    readonly isMicro: boolean;
}
export declare class SohoListViewComponent implements AfterViewInit, OnDestroy, AfterViewChecked {
    private ngZone;
    private element;
    items: QueryList<SohoListViewItemComponent>;
    class: string;
    sohoListviewElementId: string;
    updateRequired: boolean;
    dataset: Object[];
    readonly dateset: Object[];
    description: string;
    pagesize: number;
    paging: boolean;
    searchable: boolean;
    selectable: SohoListViewSelectable;
    selectOnFocus: boolean;
    emptyMessage: SohoEmptyMessageOptions;
    source: SohoListViewSourceFunction | string;
    template: string;
    disableItemDeactivation: boolean;
    selectedItems: SohoListViewItemReference[];
    readonly getSelectedItems: SohoListViewItemReference[];
    rendered: EventEmitter<Object[]>;
    selected: EventEmitter<Object>;
    unselected: EventEmitter<Object>;
    deselected: EventEmitter<Object>;
    itemactivated: EventEmitter<Object>;
    itemdeactivated: EventEmitter<Object>;
    click: EventEmitter<Object>;
    dblclick: EventEmitter<Object>;
    contextmenu: EventEmitter<Object>;
    sorted: EventEmitter<Object[]>;
    listViewRef: ElementRef;
    searchfieldRef: SohoSearchFieldComponent;
    private jQueryElement;
    private listview;
    private options;
    constructor(ngZone: NgZone, element: ElementRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    readonly listClass: string;
    clearAllSelected(): void;
    toggleAll(): void;
    remove(index: SohoListViewItemReference | SohoListViewItemReference[]): void;
    unselect(index: SohoListViewItemReference | SohoListViewItemReference[]): void;
    select(index: SohoListViewItemReference | SohoListViewItemReference[]): void;
    activateItem(item: SohoListViewItemReference): void;
    activatedItem(): any;
    deactivateItem(item?: SohoListViewItemReference): void;
    toggleItemActivation(item: SohoListViewItemReference): void;
    private apply;
    private boundsCheck;
    private readonly itemCount;
}
