/// <reference path="soho-locale.d.ts" />
import { PipeTransform } from '@angular/core';
export declare class SohoTranslatePipe implements PipeTransform {
    transform(value: string, locale?: string): string;
}
