/// <reference path="soho-hyperlink.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare type SohoHyperlinkType = 'show-visited' | 'forward-caret' | 'back-caret';
export declare class SohoHyperlinkComponent implements AfterViewInit {
    private element;
    static SHOWVISITED: SohoHyperlinkType;
    static DIRECTIONAL: SohoHyperlinkType;
    static BACK: SohoHyperlinkType;
    sohoHyperlink: SohoHyperlinkType;
    icon: string;
    change: EventEmitter<SohoHyperlinkEvent>;
    hyperLinkClass: boolean;
    readonly showVisitedClass: boolean;
    readonly directionalClass: boolean;
    readonly backClass: boolean;
    href: string;
    disabled: boolean;
    isCaretRight: boolean;
    isCaretLeft: boolean;
    private hyperlinkType;
    private jQueryElement;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
