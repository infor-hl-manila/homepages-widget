/// <reference path="soho-message.d.ts" />
export declare class SohoMessageRef {
    private eventGuard;
    private jQueryElement;
    private _message;
    private _dialogResult;
    private _placeholder;
    private open$;
    private _options;
    options(options: SohoMessageOptions): SohoMessageRef;
    frameHeight(width: number): SohoMessageRef;
    title(title: string): SohoMessageRef;
    buttons(buttons: SohoModalButton[]): SohoMessageRef;
    isError(isError: boolean): SohoMessageRef;
    message(message: string): SohoMessageRef;
    cssClass(cssClass: string): SohoMessageRef;
    returnFocus(returnFocus: JQuery): SohoMessageRef;
    dialogResult: any;
    constructor();
    open(): SohoMessageRef;
    close(dialogResult?: any): SohoMessageRef;
    beforeOpen(eventFn: () => boolean): SohoMessageRef;
    opened(eventFn: Function): SohoMessageRef;
    beforeClose(eventFn: () => boolean): SohoMessageRef;
    private onBeforeOpen(event);
    private onBeforeClose(event);
    private onOpen(event);
}
