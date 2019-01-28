/// <reference path="soho-wizard.d.ts" />
import { QueryList } from '@angular/core';
import { SohoWizardTickComponent } from './soho-wizard-tick.component';
export declare class SohoWizardHeaderComponent {
    steps: QueryList<SohoWizardTickComponent>;
    isWizardHeader: boolean;
}
