/// <reference path="soho-field-filter.d.ts" />
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoFieldFilterDirective implements AfterViewChecked, AfterViewInit, OnDestroy {
    private ref;
    private element;
    private ngZone;
    fieldSettings: SohoFieldFilterSettings;
    fieldDropdownDataSet: Array<SohoFieldFilterOption>;
    dropdownOpts: SohoDropDownOptions;
    template: string;
    filtered: EventEmitter<SohoFieldFilteredEvent>;
    private _settings;
    private jQueryElement;
    private fieldFilter;
    private runUpdatedOnCheck;
    constructor(ref: ChangeDetectorRef, element: ElementRef, ngZone: NgZone);
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    markForRefresh(): void;
    private onFiltered;
}
