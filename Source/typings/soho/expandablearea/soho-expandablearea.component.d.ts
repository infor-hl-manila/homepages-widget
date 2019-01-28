/// <reference path="soho-expandablearea.d.ts" />
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
export declare class ExpandableHeaderComponent {
}
export declare class ExpandablePaneComponent {
    fixed: boolean;
}
export declare class ExpandableFooterComponent {
}
export declare class ExpandableAreaComponent implements AfterViewInit, OnDestroy {
    private element;
    private changeDetectorRef;
    private ngZone;
    id: string;
    disabled: boolean;
    closed: boolean;
    toggle: Observable<boolean>;
    registerForEvents: any;
    header: ExpandableHeaderComponent;
    panes: QueryList<ExpandablePaneComponent>;
    footer: ExpandablePaneComponent;
    beforeexpand: EventEmitter<Object>;
    beforecollapse: EventEmitter<Object>;
    expand: EventEmitter<Object>;
    collapse: EventEmitter<Object>;
    afterexpand: EventEmitter<Object>;
    aftercollapse: EventEmitter<Object>;
    private jQueryElement;
    private expandablearea;
    private _disabled;
    private _closed;
    hasFixedPane: boolean;
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    private hookupRegisteredEvents();
    ngOnDestroy(): void;
    disable(): void;
    enable(): void;
    toggleOpen(open: boolean): void;
    private close();
    private open();
    readonly expandableAreaClasses: string;
    readonly headerClasses: string;
    readonly paneClasses: string;
    readonly footerClasses: string;
    readonly visiblePaneClasses: string;
    private onBeforeExpand(event);
    private onBeforeCollapse(event);
    private onExpand(event);
    private onCollapse(event);
    private onAfterExpand(event);
    private onAfterCollapse(event);
}
