/// <reference path="soho-searchfield.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoSearchFieldWrapperComponent {
    readonly isSearchfieldWrapper: boolean;
}
export declare class SohoSearchFieldComponent implements AfterViewInit, OnDestroy {
    private element;
    options: SohoSearchFieldOptions;
    allResultsCallback: (searchTerm: string) => void;
    categories: Object[];
    categoryMultiselect: boolean;
    clearable: boolean;
    showAllResults: boolean;
    showCategoryText: boolean;
    source: SohoAutoCompleteSource;
    template: string;
    selected: EventEmitter<Object[]>;
    readonly isSearchField: boolean;
    private jQueryElement;
    private searchfield;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clear(): void;
}
