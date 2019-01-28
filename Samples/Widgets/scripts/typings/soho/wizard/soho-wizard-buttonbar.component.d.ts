/// <reference path="soho-wizard.d.ts" />
import { ChangeDetectorRef } from '@angular/core';
import { SohoWizardComponent } from './soho-wizard.component';
export declare class SohoWizardButtonbarComponent {
    private wizard;
    private changeDetectorRef;
    buttons: ({
        id: string;
        text: string;
        click: () => void;
        disabled: () => boolean;
        position: string;
        isDefault?: undefined;
    } | {
        id: string;
        text: string;
        click: () => void;
        disabled: () => boolean;
        isDefault: boolean;
        position: string;
    })[];
    isButtonBar: boolean;
    constructor(wizard: SohoWizardComponent, changeDetectorRef: ChangeDetectorRef);
}
