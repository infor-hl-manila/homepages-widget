/// <reference path="soho-swaplist.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { SohoSwapListService } from './soho-swaplist.service';
export declare type SohoSwapListCardType = 'available' | 'selected' | 'full-access';
export declare class SohoSwapListCardComponent {
    readonly isSwapList: boolean;
    private cardtype;
    private cardtitle;
    private showsearchable;
    private searchtitle;
    type: SohoSwapListCardType;
    showSearchable: boolean;
    searchTitle: string;
    readonly cardClass: string;
    readonly cardType: string;
    title: string;
}
export declare class SohoSwapListComponent implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    private swaplistService;
    private static counter;
    private jQueryElement;
    private swaplist;
    private _options;
    private _showFullAccessCard;
    readonly id: string;
    readonly isSwapList: boolean;
    readonly isOneThird: boolean;
    private _availableCard;
    private _selectedCard;
    private _additionalCard;
    name: string;
    availableCardTitle: string;
    selectedCardTitle: string;
    fullAccessCardTitle: string;
    availableCardSearchTitle: string;
    selectedCardSearchTitle: string;
    fullAccessCardSearchTitle: string;
    btnMoveToSelect: string;
    btnMoveToLeft: string;
    btnMoveToRight: string;
    searchable: boolean;
    availableItems: SohoSwapListItem[];
    selectedItems: SohoSwapListItem[];
    additionalItems: SohoSwapListItem[];
    showFullAccessCard: boolean;
    beforeSwapEvent: EventEmitter<SohoSwapListBeforeSwapEvent>;
    updateEvent: EventEmitter<SohoSwapListSwapUpdateEvent>;
    constructor(element: ElementRef, ngZone: NgZone, swaplistService: SohoSwapListService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updated(): void;
    updateDataset(dataset: SohoSwapListOptions): void;
    private ConvertToModel;
    private onBeforeSwap;
    private onSwapUpdate;
}
