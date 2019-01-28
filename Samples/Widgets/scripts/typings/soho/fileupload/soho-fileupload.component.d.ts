/// <reference path="soho-fileupload.d.ts" />
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoFileUploadComponent implements AfterViewInit, OnDestroy {
    private element;
    private changeDetectorRef;
    readonly isFileUpload: boolean;
    readonly isFileUploadType: string;
    isDisabled: boolean;
    isReadOnly: boolean;
    disabled: boolean;
    readonly: boolean;
    change: EventEmitter<SohoFileUploadEvent>;
    private jQueryElement;
    private fileUpload;
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clearUploadFile(): void;
}
