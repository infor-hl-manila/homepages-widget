/// <reference path="soho-personalize.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare class SohoPersonalizeDirective implements AfterViewInit {
    private el;
    options: SohoPersonalizeOptions;
    colors: string;
    theme: string;
    changetheme: EventEmitter<Object>;
    changecolors: EventEmitter<Object>;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
}
