/// <reference path="soho-fileupload-advanced.d.ts" />
/// <reference types="jquery" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoFileUploadAdvancedComponent implements AfterViewInit, OnDestroy {
    private element;
    isFileUploadAdvanced: boolean;
    isDisabled: boolean;
    disabled: boolean;
    isStandalone: boolean;
    allowedTypes: string;
    send: SohoFileUploadAdvancedSendFunction;
    maxFilesInProcess: number;
    maxFileSize: number;
    fileName: string;
    showBrowseButton: boolean;
    textDropArea: string;
    textDropAreaWithBrowse: string;
    textBtnCancel: string;
    textBtnCloseError: string;
    textBtnRemove: string;
    filesdragenter: EventEmitter<JQuery.TriggeredEvent<any, any, any, any>>;
    filesdropped: EventEmitter<File[]>;
    beforecreatestatus: EventEmitter<File[]>;
    aftercreatestatus: EventEmitter<File[]>;
    fileprogress: EventEmitter<File[]>;
    fileaborted: EventEmitter<File[]>;
    filecompleteduploading: EventEmitter<File[]>;
    private options;
    private jQueryElement;
    private fileuploadadvanced;
    destroy(): void;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
