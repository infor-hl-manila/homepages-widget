import { ElementRef, Renderer2 } from '@angular/core';
export declare class SohoIconUseComponent {
    xmlnsXlink: string;
    readonly href: string;
    icon: string;
}
export declare class SohoIconComponent {
    private elementRef;
    private renderer;
    isIcon: boolean;
    ariaHidden: boolean;
    focusable: boolean;
    role: string;
    isEmptyState: boolean;
    alert: boolean;
    icon: string;
    private _alert;
    private _icon;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    private setAlertIcon;
}
