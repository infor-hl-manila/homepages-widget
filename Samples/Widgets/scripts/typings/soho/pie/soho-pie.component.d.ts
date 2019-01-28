/// <reference path="soho-pie.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class SohoPieComponent implements AfterViewInit, OnDestroy {
    private element;
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
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setSelected(selected: SohoPieSelected): void;
    toggleSelected(selected: SohoPieSelected): void;
    getSelected(): void;
}
