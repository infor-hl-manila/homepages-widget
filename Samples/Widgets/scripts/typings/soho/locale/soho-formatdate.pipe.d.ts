/// <reference path="soho-locale.d.ts" />
import { PipeTransform } from '@angular/core';
export declare class SohoFormatDatePipe implements PipeTransform {
    transform(value: string | Date, attribs?: any): string;
}
