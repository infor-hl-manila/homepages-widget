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
    extraIconClass: string;
    alert: boolean;
    icon: string;
    private _alert;
    private _icon;
    private _extraIconClass;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    private setAlertIcon;
    private setExtraIconsClass;
}
