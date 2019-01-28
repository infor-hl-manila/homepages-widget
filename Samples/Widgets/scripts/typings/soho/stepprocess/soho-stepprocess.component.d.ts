/// <reference path="soho-stepprocess.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoStepListTitleComponent {
    readonly title: boolean;
    readonly titleWide: boolean;
}
export declare class SohoStepListComponent {
    isTree: boolean;
    isJSStepTreeScroll: boolean;
    id: string;
    dataInit: boolean;
}
export declare class SohoSubstepListComponent {
    isFolder: boolean;
    isJSStepFolder: boolean;
}
export declare class SohoStepListItemComponent {
    readonly jsStep: boolean;
    isSelected: boolean;
}
export declare class SohoStepListItemAnchorComponent {
    isJsStepLink: boolean;
    readonly hrefAttr: string;
    stepId: string;
}
export declare class SohoStepListItemTitleComponent {
    treeText: boolean;
}
export declare class SohoStepContentTitleComponent {
    isHeading: boolean;
}
export declare class SohoStepContentComponent {
    readonly isScrollable: boolean;
    readonly iStepContainer: boolean;
    readonly isJsStepPanelsScroll: boolean;
}
export declare class SohoStepContentPanelComponent {
    readonly isJsStepProcessPanel: boolean;
    readonly idAttr: string;
    stepId: string;
}
export declare class SohoStepProcessComponent implements AfterViewInit, OnDestroy {
    private element;
    isStepProcessContainer: boolean;
    isTwoColumn: boolean;
    isFixed: boolean;
    isPageContainer: boolean;
    isNoScroll: boolean;
    main: string;
    linearProgression: boolean;
    nextButtonLabel: string;
    nextButtonEnable: boolean;
    previousButtonEnable: boolean;
    saveCloseButtonEnable: boolean;
    beforeSelectStep: EventEmitter<BeforeSelectStepEvent>;
    saveClose: EventEmitter<SohoStepSaveCloseEvent>;
    private jQueryElement;
    private stepprocess;
    private stepProcessOptions;
    private beforeSelectStepDeferred;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    private beforeSelectStepPromise;
    private beforeSelectStepResponse;
    private fireOnSaveClose();
    ngOnDestroy(): void;
}
