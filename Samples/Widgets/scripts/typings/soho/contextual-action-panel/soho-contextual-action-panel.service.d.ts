/// <reference path="soho-contextual-action-panel.d.ts" />
import { ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { SohoContextualActionPanelRef } from './soho-contextual-action-panel.ref';
export declare class SohoContextualActionPanelService {
    private componentFactoryResolver;
    private injector;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    contextualactionpanel<T>(component: PanelComponentType<T>, parent: ViewContainerRef, options?: any): SohoContextualActionPanelRef<T>;
}
export interface PanelComponentType<T> {
    new (...args: any[]): T;
}
