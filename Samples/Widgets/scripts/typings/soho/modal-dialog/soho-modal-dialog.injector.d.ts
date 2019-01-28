/// <reference path="soho-modal-dialog.d.ts" />
import { Injector } from '@angular/core';
import { SohoModalDialogRef } from './soho-modal-dialog.ref';
export declare class SohoModalDialogInjector implements Injector {
    private dialogRef;
    private baseInjector;
    constructor(dialogRef: SohoModalDialogRef<any>, baseInjector: Injector);
    get(token: any, notFoundValue?: any): any;
}
