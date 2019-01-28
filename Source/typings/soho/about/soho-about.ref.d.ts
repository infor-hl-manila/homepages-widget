/// <reference path="soho-about.d.ts" />
export declare class SohoAboutRef {
    private jQueryElement;
    private _about;
    private _placeholder;
    private _options;
    options(options: SohoAboutOptions): SohoAboutRef;
    appName(appName: string): SohoAboutRef;
    content(content: string): SohoAboutRef;
    copyrightYear(copyrightYear: string): SohoAboutRef;
    deviceSpecs(deviceSpecs: boolean): SohoAboutRef;
    productName(productName: string): SohoAboutRef;
    useDefaultCopyright(useDefaultCopyright: boolean): SohoAboutRef;
    version(version: string): SohoAboutRef;
    constructor();
    open(): SohoAboutRef;
    close(): SohoAboutRef;
}
