export declare class ArgumentHelper {
    static checkNotNull(parameterName: string, arg: any): void;
    static checkNotEmpty(parameterName: string, arg: string): void;
    static checkInputNotNull(parentName: string, inputName: string, arg: any): void;
    static checkChildNotNull(parentName: string, childName: string, arg: any): void;
}
