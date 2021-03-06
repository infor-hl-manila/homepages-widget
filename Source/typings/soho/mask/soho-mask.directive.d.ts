/// <reference path="soho-mask.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoMaskDirective implements AfterViewInit, OnDestroy {
    private element;
    private _options;
    private _patternOptions;
    private _symbols;
    options: SohoMaskOptions | string;
    definitions: {
        [key: string]: RegExp;
    };
    guide: boolean;
    keepCharacterPositions: boolean;
    maskAPI: Function;
    sohoPattern: SohoMaskPattern;
    pipe: Function;
    placeholder: string;
    process: SohoMaskProcess;
    processOnBlur: boolean;
    processOnInitialize: boolean;
    patternOptions: SohoMaskPatternOptions | string;
    allowDecimal: boolean;
    allowLeadingZeros: boolean;
    allowNegative: boolean;
    allowThousandsSeparator: boolean;
    decimalLimit: number;
    integerLimit: number;
    prefix: string;
    requireDecimal: boolean;
    suffix: string;
    symbols: SohoMaskPatternSymbols | string;
    locale: string;
    currencySymbol: string;
    decimalSymbol: string;
    negativeSymbol: string;
    thousandsSymbol: string;
    groupComplete: boolean;
    mode: SohoMaskMode;
    mustComplete: boolean;
    negative: boolean;
    number: boolean;
    thousandsSeparator: boolean;
    showSymbol: SohoMaskShowSymbol;
    write: EventEmitter<SohoMaskEvent>;
    private jQueryElement;
    private mask;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
