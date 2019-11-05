/// <reference path="soho-contextual-action-panel.d.ts" />
import { ComponentRef } from '@angular/core';
export declare class SohoContextualActionPanelRef<T> {
    private componentRef?;
    private jQueryElement;
    private contextualactionpanel;
    private _panelResult;
    private open$;
    private close$;
    private afterClose$;
    private afterOpen$;
    component: ComponentRef<T>;
    readonly componentPanel: T;
    private _options;
    options(options: SohoContextualActionPanelOptions): SohoContextualActionPanelRef<T>;
    title(title: string): SohoContextualActionPanelRef<T>;
    buttons(buttons: SohoContextualActionPanelButton[]): SohoContextualActionPanelRef<T>;
    id(id: string): SohoContextualActionPanelRef<T>;
    initializeContent(initializeContent: boolean): SohoContextualActionPanelRef<T>;
    centerTitle(centerTitle: boolean): SohoContextualActionPanelRef<T>;
    trigger(trigger: SohoContextualActionPanelTriggerType): SohoContextualActionPanelRef<T>;
    content(content: JQuery | string): SohoContextualActionPanelRef<T>;
    apply(fn: (component: T) => void): SohoContextualActionPanelRef<T>;
    panelResult: any;
    constructor();
    open(): SohoContextualActionPanelRef<T>;
    close(panelResult?: any): SohoContextualActionPanelRef<T>;
    opened(eventFn: Function): SohoContextualActionPanelRef<T>;
    afterOpen(eventFn: Function): SohoContextualActionPanelRef<T>;
    closed(eventFn: SohoContextualActionPanelEventFunction<T>): SohoContextualActionPanelRef<T>;
    afterClose(eventFn: SohoContextualActionPanelEventFunction<T>): SohoContextualActionPanelRef<T>;
    private onOpen;
    private onAfterOpen;
    private onClose;
    private onAfterClose;
}
export declare type SohoContextualActionPanelEventFunction<T> = (result: any, panelRef: SohoContextualActionPanelRef<T>, panelComponent: T) => void;
export interface SohoContextualActionPanelComponent<T> {
}
