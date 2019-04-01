/// <reference path="soho-editor.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoEditorComponent extends BaseControlValueAccessor<any> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private ref;
    private options;
    private runUpdatedOnCheck;
    private isDisabled;
    private isReadOnly;
    readonly isEditor: boolean;
    disabled: boolean;
    readonly: boolean;
    delay: number;
    firstHeader: string;
    secondHeader: string;
    placeholder: string;
    anchor: SohoEditorAnchor;
    image: SohoEditorOptionsImage;
    buttons: SohoEditorButtons;
    onLinkClick: (e: JQuery.Event, elem: any) => void;
    change: EventEmitter<SohoEditorEvent>;
    updated: EventEmitter<SohoEditorEvent>;
    private jQueryElement;
    private editor;
    constructor(element: ElementRef, ngZone: NgZone, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onChange(event: SohoEditorEvent): void;
    onUpdated(event: SohoEditorEvent): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
    markForRefresh(): void;
}
