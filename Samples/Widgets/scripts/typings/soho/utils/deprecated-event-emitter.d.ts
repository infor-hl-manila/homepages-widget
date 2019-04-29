import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class DeprecatedEventEmitter<T> extends EventEmitter<T> {
    private deprecatedName;
    private newName;
    constructor(deprecatedName: string, newName: string);
    subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription;
}
