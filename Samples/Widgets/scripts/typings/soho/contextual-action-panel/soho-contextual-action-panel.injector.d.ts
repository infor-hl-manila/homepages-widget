/// <reference path="soho-contextual-action-panel.d.ts" />
import { Injector } from '@angular/core';
import { SohoContextualActionPanelRef } from './soho-contextual-action-panel.ref';
export declare class SohoContextualActionPanelInjector implements Injector {
    private contextualActionPanelRef;
    private baseInjector;
    constructor(contextualActionPanelRef: SohoContextualActionPanelRef<any>, baseInjector: Injector);
    get(token: any, notFoundValue?: any): any;
}
