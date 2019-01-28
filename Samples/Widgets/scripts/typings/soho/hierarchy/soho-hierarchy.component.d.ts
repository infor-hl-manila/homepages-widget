/// <reference path="soho-hierarchy.d.ts" />
import { AfterViewInit, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
export declare class SohoHierarchyLeafTemplateComponent {
}
export declare class SohoHierarchyComponent implements OnDestroy, AfterViewInit {
    private elementRef;
    private hierarchy;
    private jQueryElement;
    private options;
    hostClass: string;
    dataset: Array<any>;
    legend: Array<SohoHierarchyLegend>;
    legendKey: string;
    templateId: string;
    readonly leafTemplateId: string;
    paging: boolean;
    selected: EventEmitter<SohoHierarchyEvent>;
    doubleClick: EventEmitter<SohoHierarchyDoubleClickEvent>;
    constructor(elementRef: ElementRef);
    add(id: string, dataset: Array<any>, newData: Array<any>): void;
    reloadDataSet(dataSet: Array<any>): void;
    updateActions(eventInfo: SohoHierarchyEvent, updatedActions: Array<SohoHierarchyAction>): void;
    selectLeaf(leafId: string): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
