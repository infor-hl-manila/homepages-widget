/// <reference path="soho-swaplist.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { SohoSwapListService } from './soho-swaplist.service';
export declare type SohoSwapListCardType = 'available' | 'selected' | 'full-access';
export declare class SohoSwapListCardComponent {
    readonly isSwapList: boolean;
    private _type;
    private _title;
    type: SohoSwapListCardType;
    readonly cardClass: string;
    title: string;
}
export declare class SohoSwapListComponent implements AfterViewInit, OnDestroy {
    private element;
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
    btnMoveToSelect: string;
    btnMoveToLeft: string;
    btnMoveToRight: string;
    availableItems: SohoSwapListItem[];
    selectedItems: SohoSwapListItem[];
    additionalItems: SohoSwapListItem[];
    showFullAccessCard: boolean;
    beforeSwapEvent: EventEmitter<SohoSwapListBeforeSwapEvent>;
    updateEvent: EventEmitter<SohoSwapListSwapUpdateEvent>;
    constructor(element: ElementRef, swaplistService: SohoSwapListService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    updated(): void;
    updateDataset(dataset: SohoSwapListOptions): void;
    private ConvertToModel(items);
    private onBeforeSwap(event, moved);
    private onSwapUpdate(event, moved);
}
