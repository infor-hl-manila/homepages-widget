/// <reference path="soho-locale.d.ts" />
import { PipeTransform } from '@angular/core';
export declare class SohoFormatNumberPipe implements PipeTransform {
    transform(value: string | number, attribs?: any): string;
}
