import { ControlValueAccessor } from '@angular/forms';
export declare const NOOP: any;
export declare class BaseControlValueAccessor<T> implements ControlValueAccessor {
    private _value;
    protected _onChangeCallback: (_: T) => void;
    private _onTouchedCallback;
    protected internalValue: T;
    protected touched(): void;
    writeValue(value: T): void;
    registerOnChange(fn: (_: T) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
export declare function provideControlValueAccessor(type: any): any;
