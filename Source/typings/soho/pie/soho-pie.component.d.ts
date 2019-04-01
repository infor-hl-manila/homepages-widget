/// <reference path="soho-pie.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoPieComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    private options;
    readonly isPie: boolean;
    dataset: Array<any>;
    isDonut: boolean;
    animationSpeed: number;
    animate: any;
    redrawOnResize: boolean;
    hideCenterLabel: boolean;
    showLines: boolean;
    showLinesMobile: boolean;
    lines: SohoPieLinesOptions;
    showLegend: boolean;
    legendPlacement: string;
    legend: SohoPieLegendOptions;
    showTooltips: boolean;
    tooltip: SohoPieTooltipOptions;
    selected: EventEmitter<SohoPieSelectEvent>;
    unselected: EventEmitter<SohoPieSelectEvent>;
    rendered: EventEmitter<Object>;
    private jQueryElement;
    private pie;
    private updateRequired;
    constructor(element: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoPieSelected): void;
    toggleSelected(selected: SohoPieSelected): void;
    getSelected(): any;
}
