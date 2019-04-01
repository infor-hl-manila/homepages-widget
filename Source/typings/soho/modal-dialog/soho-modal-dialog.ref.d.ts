/// <reference path="soho-modal-dialog.d.ts" />
import { ComponentRef } from '@angular/core';
export declare class SohoModalDialogRef<T> {
    private componentRef?;
    private eventGuard;
    private jQueryElement;
    private modal;
    private _dialogResult;
    private open$;
    private close$;
    private afterClose$;
    private afterOpen$;
    component: ComponentRef<T>;
    readonly componentDialog: T;
    private _options;
    options(options: SohoModalOptions): SohoModalDialogRef<T>;
    frameHeight(frameHeight: number): SohoModalDialogRef<T>;
    title(title: string): SohoModalDialogRef<T>;
    buttons(buttons: SohoModalButton[]): SohoModalDialogRef<T>;
    id(id: string): SohoModalDialogRef<T>;
    trigger(trigger: SohoModalTriggerType): SohoModalDialogRef<T>;
    isAlert(isAlert: boolean): SohoModalDialogRef<T>;
    content(content: JQuery | string): SohoModalDialogRef<T>;
    cssClass(cssClass: string): SohoModalDialogRef<T>;
    autoFocus(autoFocus: boolean): SohoModalDialogRef<T>;
    apply(fn: (component: T) => void): SohoModalDialogRef<T>;
    dialogResult: any;
    constructor();
    open(): SohoModalDialogRef<T>;
    close(dialogResult?: any): SohoModalDialogRef<T>;
    beforeOpen(eventFn: () => boolean): SohoModalDialogRef<T>;
    opened(eventFn: Function): SohoModalDialogRef<T>;
    afterOpen(eventFn: Function): SohoModalDialogRef<T>;
    beforeClose(eventFn: SohoModalDialogEventVetoFunction<T>): SohoModalDialogRef<T>;
    closed(eventFn: SohoModalDialogEventFunction<T>): SohoModalDialogRef<T>;
    afterClose(eventFn: SohoModalDialogEventFunction<T>): SohoModalDialogRef<T>;
    beforeDestroy(eventFn: () => boolean): SohoModalDialogRef<T>;
    private onAfterOpen;
    private onBeforeOpen;
    private onBeforeClose;
    private onBeforeDestroy;
    private onOpen;
    private onClose;
    private onAfterClose;
}
export declare type SohoModalDialogEventFunction<T> = (result: any, dialogRef: SohoModalDialogRef<T>, dialogComponent: T) => void;
export declare type SohoModalDialogEventVetoFunction<T> = (dialogRef: SohoModalDialogRef<T>) => boolean;
export interface SohoModalComponent<T> {
}
export interface SohoModalDialogVetoableEventGuard<T> {
    isCancelled?: boolean;
    beforeOpen?(): boolean;
    beforeClose?(result: any, dialogRef: SohoModalDialogRef<T>, dialogComponent: T): boolean;
    beforeDestroy?(): boolean;
}
