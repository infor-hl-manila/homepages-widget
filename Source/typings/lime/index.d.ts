declare module 'lime' {
/// <reference path="../../../../scripts/typings/sohoxi/sohoxi.d.ts" />
/// <reference types="angular" />
import { Observable } from "rxjs";
import { InjectionToken, ViewContainerRef } from "@angular/core";
export interface IApplication {
    isDefault: boolean;
    version: string;
    productName: string;
    tenantId: string;
    logicalIdPrefix: string;
    logicalId: string;
    hostname: string;
    context: string;
    port: number;
    useHttps: boolean;
    customProperties: ICustomProperties;
}
export interface ICustomProperties {
    [key: string]: any;
}
export interface ILanguage {
    get(id: string): string;
    format(text: string, value: string): string;
    ok: string;
    cancel: string;
    yes: string;
    no: string;
    refresh: string;
    add: string;
    save: string;
    delete: string;
    name: string;
    url: string;
    edit: string;
    translations: string;
}
export interface IWidgetModule {
    widgetFactory(context: IWidgetContext): IWidgetInstance;
}
export interface IWidgetModule2 {
    widgetFactory(context: IWidgetContext2): IWidgetInstance2;
}
export class WidgetState {
    static running: string;
    static busy: string;
    static error: string;
}
export interface IWidgetActivationArg {
    type: string;
    isNew?: boolean;
}
export interface IWidgetDestroyArg {
}
export interface IWidgetSettingsCloseArg {
    isSave: boolean;
}
export class WidgetActivationType {
    static visibility: string;
    static close: string;
    static settings: string;
    static edit: string;
}
export interface IAngularScopeValue {
    name: string;
    value: any;
}
export interface IAngularTemplateInfo {
    key: string;
    value: string;
}
export interface IAngularWidgetConfig {
    template?: string;
    templates?: IAngularTemplateInfo[];
    cachedTemplateUrl?: string;
    relativeTemplateUrl?: string;
    scopeValue?: IAngularScopeValue;
}
export interface IAngularWidgetConfig2 {
    moduleType?: any;
    moduleFactory?: any;
    componentType?: any;
}
export interface IAngularContext {
    module: ng.IModule;
    scope: ng.IScope;
    compile: ng.ICompileService;
    q: ng.IQService;
    getTemplateUrl(relativeUrl: string): string;
}
export interface IWidgetAction {
    text?: string;
    execute?: Function;
    isEnabled?: boolean;
    isVisible?: boolean;
    isSeparator?: boolean;
    isSubmenu?: boolean;
    isPrimary?: boolean;
    standardIconName?: string;
    customIconName?: string;
    submenuItems?: IWidgetAction[];
}
export interface IWidgetMessage {
    message: string;
    type: WidgetMessageType;
    onClose?: Function;
}
export enum WidgetMessageType {
    Info = 0,
    Alert = 1,
    Error = 2,
}
export interface IWidgetInstance2 {
    activated?: (arg: IWidgetActivationArg) => void;
    deactivated?: (arg: IWidgetActivationArg) => void;
    destroy?: (arg: IWidgetDestroyArg) => void;
    settingsOpening?: (arg: IWidgetSettingsArg) => void;
    settingsSaved?: (arg: IWidgetSettingsArg) => void;
    restored?: (arg: IWidgetRestoreArg) => void;
    refreshed?: (arg: IWidgetRefreshArg) => void;
    bannerBackgroundChanged?: (newBackgroundColor: string) => void;
    getMetadata?: () => IWidgetSettingMetadata[];
    getMetadataAsync?: () => Observable<IWidgetSettingMetadata[]>;
    isConfigured?: (settings: IWidgetSettings) => boolean;
    editing?: () => void;
    edited?: () => void;
    publishing?: () => void;
    angularConfig?: IAngularWidgetConfig2;
    widgetSettingsFactory?: (context: IWidgetSettingsContext2) => IWidgetSettingsInstance2;
    actions?: IWidgetAction[];
}
export interface IWidgetInstance {
    activated?: (arg: IWidgetActivationArg) => void;
    deactivated?: (arg: IWidgetActivationArg) => void;
    destroy?: (arg: IWidgetDestroyArg) => void;
    settingsOpening?: (arg: IWidgetSettingsArg) => void;
    settingsSaved?: (arg: IWidgetSettingsArg) => void;
    restored?: (arg: IWidgetRestoreArg) => void;
    refreshed?: (arg: IWidgetRefreshArg) => void;
    bannerBackgroundChanged?: (newBackgroundColor: string) => void;
    getMetadata?: () => IWidgetSettingMetadata[];
    getMetadataAsync?: () => ng.IPromise<IWidgetSettingMetadata[]>;
    isConfigured?: (settings: IWidgetSettings) => boolean;
    editing?: () => void;
    edited?: () => void;
    publishing?: () => void;
    angularConfig?: IAngularWidgetConfig;
    widgetSettingsFactory?: (context: IWidgetSettingsContext) => IWidgetSettingsInstance;
    actions?: IWidgetAction[];
}
export interface IWidgetRestoreArg {
    userSettings?: boolean;
    settings?: boolean;
}
export interface IWidgetRefreshArg {
    lastRefresh: number;
}
export interface IWidgetSettingsArg {
    settings: IWidgetSettings;
    data?: any;
    cancel?: boolean;
}
export interface IWidgetSettingMetadata {
    name: string;
    type?: string;
    defaultValue?: string;
    labelId?: string;
    isVisible?: boolean;
    isHidden?: boolean;
    isEnabled?: boolean;
    isEnabledWhenPublished?: boolean;
    isMandatory?: boolean;
    maxLength?: number;
    values?: IValueItem[];
}
export class WidgetSettingsType {
    static stringType: string;
    static numberType: string;
    static booleanType: string;
    static selectorType: string;
    static radioType: string;
    static objectType: string;
}
export interface IAutocompleteEntity {
    label: string;
    value?: any;
    info?: string;
    type?: any;
}
export interface IValueItem {
    textId?: string;
    text?: string;
    value: string;
}
export interface IShowSettingsOptions {
    data?: any;
}
export interface IViewUrlOptions {
    viewId: string;
    logicalId?: string;
    resolve?: boolean;
}
export class IonApiConstants {
    static platformHeaderName: string;
    static platformHeaderValue: string;
    static sourceHeaderName: string;
}
export interface IIonApiOptions {
    refresh?: boolean;
}
export interface IIonApiRequestOptions {
    method: string;
    url: string;
    params?: any;
    data?: any;
    responseType?: string;
    headers?: {
        [requestType: string]: any;
    };
    cache?: boolean;
    ionApiRetry?: boolean;
    enableWorker?: boolean;
}
export interface IIonApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}
export interface IIonApiContext {
    getUrl(): string;
    getToken(): string;
    getHeaderName(): string;
    getHeaderValue(): string;
    getCustomerContext(): string;
}
export interface IWidgetContext {
    getId(): string;
    getSettings(): IWidgetSettings;
    getLanguage(): ILanguage;
    getElement(): JQuery;
    getUrl(path?: string): string;
    getAngularContext(): IAngularContext;
    isActive(): boolean;
    isVisible(): boolean;
    isPublished(): boolean;
    isDev(): boolean;
    isBanner(): boolean;
    save(): void;
    setState(state: string): void;
    getState(): string;
    getTitle(): string;
    getStandardTitle(): string;
    getResolvedTitle(isTitleLocked: boolean): string;
    setTitle(title: string): void;
    setStandardTitle(): void;
    enableTitleEdit(isEnabled: boolean): void;
    isTitleEditEnabled(): boolean;
    isTitleLocked(): boolean;
    isTitleUnlockable(): boolean;
    setTitleLocked(isLocked: boolean): void;
    resolve(key: string): string;
    resolveAndReplace(template: string): string;
    getApplication(): IApplication;
    getApplications(): IApplication[];
    getLogicalId(): string;
    setLogicalId(logicalId: string): void;
    getApplicationAsync(logicalId: string): ng.IPromise<IApplication>;
    getApplicationsAsync(logicalId: string): ng.IPromise<IApplication[]>;
    resolveAndReplaceAsync(template: string, logicalId?: string): ng.IPromise<string>;
    getViewUrlAsync(options: IViewUrlOptions): ng.IPromise<string>;
    getIonApiCustomerContext(): string;
    getIonApiContextAsync(options?: IIonApiOptions): ng.IPromise<IIonApiContext>;
    executeIonApiAsync<T>(options: IIonApiRequestOptions): ng.IPromise<ng.IHttpPromiseCallbackArg<T>>;
    getService<T>(name: string): T;
    launch(launchOptions: ILaunchOptions): void;
    showWidgetMessage(message: IWidgetMessage): void;
    removeWidgetMessage(): void;
    getPageId(): string;
    getStandardWidgetId(): string;
    getWidgetInstanceId(): string;
    getContainerUrl(): string;
    isCloud(): boolean;
    isSingleTenantCloud(): boolean;
    getTenantId(): string;
    getUserId(): string;
    findWidgetsOnPage(options?: IFindWidgetOptions): IWidgetInstanceInfo[];
    isWidgetOnPage(options: IFindWidgetOptions): boolean;
    getInforTimeZoneRaw(): string;
    getInforTimeZone(): string;
    getInforCurrentLanguage(): string;
    getInforCurrentLocale(): string;
    getInforThemeName(): string;
    getBannerBackgroundColor(): string;
    getContextParameter(parameter: string): string;
}
export interface IWidgetContext2 {
    getId(): string;
    getSettings(): IWidgetSettings;
    getLanguage(): ILanguage;
    getElement(): JQuery;
    getUrl(path?: string): string;
    getDevice(): Observable<IDevice>;
    isActive(): boolean;
    isVisible(): boolean;
    isPublished(): boolean;
    isDev(): boolean;
    isBanner(): boolean;
    save(): void;
    setState(state: string): void;
    getState(): string;
    getTitle(): string;
    getStandardTitle(): string;
    getResolvedTitle(isTitleLocked: boolean): string;
    setTitle(title: string): void;
    setStandardTitle(): void;
    enableTitleEdit(isEnabled: boolean): void;
    isTitleEditEnabled(): boolean;
    isTitleLocked(): boolean;
    isTitleUnlockable(): boolean;
    setTitleLocked(isLocked: boolean): void;
    resolve(key: string): string;
    resolveAndReplace(template: string): string;
    getApplication(): IApplication;
    getApplications(): IApplication[];
    getLogicalId(): string;
    setLogicalId(logicalId: string): void;
    getApplicationAsync(logicalId: string): Observable<IApplication>;
    getApplicationsAsync(logicalId: string): Observable<IApplication[]>;
    resolveAndReplaceAsync(template: string, logicalId?: string): Observable<string>;
    getViewUrlAsync(options: IViewUrlOptions): Observable<string>;
    getIonApiCustomerContext(): string;
    getIonApiContextAsync(options?: IIonApiOptions): Observable<IIonApiContext>;
    executeIonApiAsync<T>(options: IIonApiRequestOptions): Observable<IIonApiResponse<T>>;
    getService<T>(serviceType: {
        new (...args: any[]): T;
    }): T;
    launch(launchOptions: ILaunchOptions): void;
    showWidgetMessage(message: IWidgetMessage): void;
    removeWidgetMessage(): void;
    getPageId(): string;
    getStandardWidgetId(): string;
    getWidgetInstanceId(): string;
    getContainerUrl(): string;
    isCloud(): boolean;
    isSingleTenantCloud(): boolean;
    getTenantId(): string;
    getUserId(): string;
    findWidgetsOnPage(options?: IFindWidgetOptions): IWidgetInstanceInfo[];
    isWidgetOnPage(options: IFindWidgetOptions): boolean;
    getInforTimeZoneRaw(): string;
    getInforTimeZone(): string;
    getInforCurrentLanguage(): string;
    getInforCurrentLocale(): string;
    getInforThemeName(): string;
    getBannerBackgroundColor(): string;
    getContextParameter(parameter: string): string;
    updatePrimaryAction(): void;
}
export interface IWidgetInstanceInfo {
    instanceId: string;
    id: string;
    standardWidgetId: string;
    title: string;
}
export interface IFindWidgetOptions {
    includeSelf?: boolean;
    instanceId?: string;
    id?: string;
    standardWidgetId?: string;
}
export interface ILaunchOptions {
    url: string;
    resolve?: boolean;
}
export interface IWidgetSettings {
    getValues(): any;
    setValues(values: any): void;
    getMetadata(): IWidgetSettingMetadata[];
    setMetadata(metadata: IWidgetSettingMetadata[]): any;
    get<T>(name: string, defaultValue?: T): T;
    set(name: string, value: any): void;
    getString(name: string, defaultValue?: string): string;
    showSettings(options?: IShowSettingsOptions): void;
    isSettingsEnabled(): boolean;
    isSettingEnabled(name: string): boolean;
    isSettingVisible(name: string): boolean;
    enableSettingsMenu(enabled: boolean): void;
    hasMandatory(): boolean;
    isMandatory(name: string): boolean;
}
export interface IWidgetSettingsInstance {
    closing?: (arg: IWidgetSettingsCloseArg) => void;
    angularConfig?: IAngularWidgetConfig;
}
export interface IWidgetSettingsInstance2 {
    closing?: (arg: IWidgetSettingsCloseArg) => void;
    angularConfig?: IAngularWidgetConfig2;
}
export interface IWidgetSettingsContext {
    getWidgetContext(): IWidgetContext;
    enableSave(isEnabled: boolean): void;
    isSaveEnabled(): boolean;
    getElement(): JQuery;
    close(isSave?: boolean): void;
}
export interface IWidgetSettingsContext2 {
    getWidgetContext(): IWidgetContext2;
    enableSave(isEnabled: boolean): void;
    isSaveEnabled(): boolean;
    getElement(): JQuery;
    close(isSave?: boolean): void;
}
export class WidgetConstants {
    static widgetInstanceKey: string;
    static widgetContextKey: string;
    static widgetTitle: string;
    static widgetDescription: string;
}
export interface IWidgetComponent {
    widgetContext: IWidgetContext2;
    widgetInstance: IWidgetInstance2;
}
export interface IWidgetSettingsComponent {
    widgetSettingsContext: IWidgetSettingsContext2;
    widgetSettingsInstance: IWidgetSettingsInstance2;
}
export interface ILogAppender {
    (level: number, text: string, ex?: any): any;
}
export interface INumberFormatOptions {
    separator?: string;
}
export interface ISortOptions {
    ignoreCase?: boolean;
    localeOptions?: ILocaleSortOptions;
}
export interface ILocaleSortOptions {
    locale?: string;
    localeMatcher?: string;
    usage?: string;
    sensitivity?: string;
    ignorePunctuation?: boolean;
    numeric?: boolean;
    caseFirst?: string;
}
export interface IDevice {
    getLocation(options?: IGetLocationOptions): Observable<IGetLocationResult>;
    getImage(options?: IGetImageOptions): Observable<IGetImageResult>;
    getVideo(options?: IGetVideoOptions): Observable<IGetVideoResult>;
    getAudio(options?: IGetAudioOptions): Observable<IGetAudioResult>;
    getSensors(options?: IGetSensorsOptions): Observable<IGetSensorsResult>;
    getNetwork(options?: IGetNetworkOptions): Observable<IGetNetworkResult>;
    readQRCode(options?: IReadQRCodeOptions): Observable<IReadQRCodeResult>;
    showMap(options?: IShowMapOptions): Observable<IShowMapResult>;
    openExternalLink(options: IOpenLinkOptions): Observable<IOpenLinkResult>;
}
export interface IWatchOption {
    watch?: boolean;
}
export interface IGetLocationResult {
    readonly latitude: number;
    readonly longitude: number;
}
export interface IGetMediaResult {
    readonly data: string;
}
export interface IGetImageResult extends IGetMediaResult {
}
export interface IGetVideoResult extends IGetMediaResult {
}
export interface IGetAudioResult extends IGetMediaResult {
}
export interface IGetLocationOptions extends IWatchOption {
}
export type IMediaSource = "camera" | "library" | "all";
export interface IGetImageOptions {
    source: IMediaSource;
}
export interface IGetVideoOptions {
    source: IMediaSource;
}
export interface IGetAudioOptions {
}
export interface IMapCoordinates {
    longitude: number;
    latitude: number;
}
export interface IMarker {
    coordinates: IMapCoordinates;
    label: string;
}
export interface IMapNavigationOptions {
    mapType: "navigation";
    start?: IMapCoordinates;
    destination: IMapCoordinates;
}
export interface IMapMarkerOptions {
    mapType: "marker";
    markers: IMarker[];
}
export interface IMapLocationOptions {
    mapType: "location";
    coordinates: IMapCoordinates;
}
export type IShowMapOptions = IMapNavigationOptions | IMapMarkerOptions | IMapLocationOptions;
export interface IShowMapResult {
}
export interface IReadQRCodeOptions {
}
export interface IGetNetworkOptions extends IWatchOption {
}
export type NetworkConnectionType = "unknown" | "wifi" | "mobile";
export type NetworkConnectionState = "online" | "offline";
export interface IGetNetworkResult {
    readonly connectionState: NetworkConnectionState;
    readonly connectionType: NetworkConnectionType;
}
export interface IGetSensorsOptions extends IWatchOption {
}
export interface IGetSensorsResult {
    readonly acceleration: string;
    readonly gyroscope: string;
}
export interface IReadQRCodeResult {
    readonly text: string;
}
export interface IOpenLinkOptions {
    url: string;
}
export interface IOpenLinkResult {
}
export class ArrayUtil {
    static contains(array: any[], value: any): boolean;
    static indexOf(array: any[], value: any): number;
    static sortByProperty(array: any[], property: string, options?: ISortOptions): any[];
    static remove(array: any[], item: any): void;
    static removeByProperty(array: any[], name: string, value: any): any;
    static removeByPredicate<T>(array: T[], predicate: (item: T) => boolean): T;
    static indexByPredicate<T>(array: T[], predicate: (item: T) => boolean): number;
    static indexByProperty(array: any[], name: string, value: any): number;
    static itemByProperty(array: any[], name: string, value: any): any;
    static itemByPredicate<T>(array: T[], predicate: (item: T) => Object): T;
    static filterByPredicate<T>(array: T[], predicate: (item: T) => Object): T[];
    static containsByProperty(array: any[], name: string, value: any): boolean;
    static last(array: any[]): any;
    static find<T>(array: T[], predicate: (item: T) => boolean): T;
    static findAll<T>(array: T[], predicate: (item: T) => boolean): T[];
    static array<T>(n: number, defaultValue?: T): T[];
    static matrix<T>(rows: number, columns: number, defaultValue?: T): T[][];
    static move(array: any[], index: number, newIndex: number): void;
    static swap(items: any[], index1: number, index2: number): void;
    static concat<T>(items: T[], items2: T[]): T[];
}
export class NumUtil {
    private static getLocaleSeparator();
    private static defaultSeparator;
    private static defaultOptions;
    static getDefaultOptions(): INumberFormatOptions;
    static setDefaultOptions(options: INumberFormatOptions): void;
    static isNumber(n: any): boolean;
    static getInt(s: string, defaultValue?: number): number;
    static format(value: any, options?: INumberFormatOptions): string;
    static pad(num: number, length: number): string;
    static hasOnlyIntegers(s: string): boolean;
    static tryGetInt(input: any, defaultValue?: number): number;
}
export class CommonUtil {
    static copyJson<T>(value: T): T;
    static getLocaleDateString(dateString: string, options?: any): string;
    static deleteProperty(object: any, property: string): void;
    private static chars;
    static getBoolean(s: string, defaultValue?: boolean): boolean;
    static getUuid(prefix: string): string;
    static hasValue(anyObject: any): boolean;
    static isUndefined(anyObject: any): boolean;
    static isBoolean(anyObject: any): boolean;
    static hasFunction(anyObject: any, functionName: string): boolean;
    static random(stringLength?: number): string;
    static isIframe(): boolean;
    static getClientDate(): string;
    static detectBrowser(): void;
}
export class StringUtil {
    static isNullOrWhitespace(value: string): boolean;
    static isString(value: any): boolean;
    static startsWith(value: string, prefix: string): boolean;
    static replaceParameters(template: string, resolveFunction: Function): string;
    static endsWith(value: string, suffix: string): boolean;
    static trimEnd(value: string): string;
    static replaceAll(value: string, find: string, replace: string): string;
    static format(...args: any[]): string;
    static splitTagString(value: string): string;
    static splitAndInsert(value: string, splitChar: string, insertChar: string): string;
    static join<T>(array: T[], predicate: (item: T) => string, splitChar?: string): string;
}
export class HtmlUtil {
    static iframe(url?: string, name?: string): JQuery;
    static destroyIFrame(iframe: JQuery): void;
    static escapeStringForHtml(content: string): string;
    static escapeObjectStringsForHtml(obj: Object): Object;
}
export class Log {
    static levelFatal: number;
    static levelError: number;
    static levelWarning: number;
    static levelInfo: number;
    static levelDebug: number;
    static levelTrace: number;
    static level: number;
    static isConsoleLogEnabled: boolean;
    private static prefixes;
    private static appenders;
    static addAppender(appender: ILogAppender): void;
    static removeAppender(appender: ILogAppender): void;
    private static getTime();
    static getLogEntry(level: number, text: string, ex?: any): string;
    private static log(currentLevel, level, text, ex?);
    static setDefault(): void;
    static fatal(text: string, ex?: any): void;
    static error(text: string, ex?: any): void;
    static warning(text: string, ex?: any): void;
    static info(text: string, ex?: any): void;
    static isDebug(): boolean;
    static setDebug(): void;
    static debug(text: string, ex?: any): void;
    static isTrace(): boolean;
    static setTrace(): void;
    static trace(text: string, ex?: any): void;
}
export enum StandardDialogButtons {
    Ok = 1,
    OkCancel = 2,
    YesNo = 3,
    YesNoCancel = 4,
}
export enum DialogButtonType {
    None = 1,
    Ok = 2,
    Cancel = 3,
    Yes = 4,
    No = 5,
    Custom = 6,
}
export interface IDialogResult {
    button?: DialogButtonType;
    value?: any;
}
export interface IMessageDialogOptions {
    title: string;
    message: string;
    buttons?: IDialogButton[];
    standardButtons?: StandardDialogButtons;
    isError?: boolean;
    cssClass?: string;
    hasPrimaryButton?: boolean;
}
export interface IDialogButton {
    text: string;
    type?: any;
    value?: any;
    id?: string;
    isLink?: boolean;
    isDefault?: boolean;
    icon?: string;
    cssClass?: string;
}
export interface IToastOptions {
    title: string;
    message: string;
    position?: string;
    audibleOnly?: boolean;
    progressBar?: boolean;
    timeout?: number;
}
export interface IDialogOptions {
    title: string;
    parameter?: any;
    scope?: ng.IScope;
    template?: string;
    templateUrl?: string;
    buttons?: IDialogButton[];
    style?: string;
    cssClass?: string;
    id?: string;
    actionPanel?: boolean;
}
export interface IDialogEvent {
    dialog: IDialog;
    cancel?: boolean;
}
export interface IDialog {
    close(result?: IDialogResult): void;
    closing: (e: IDialogEvent) => void;
    closed: (e: IDialogEvent) => void;
    opened: (e: IDialogEvent) => void;
    parameter?: any;
    result?: IDialogResult;
}
export interface ICopyToClipboardOptions {
    copyData: string;
    forceDialog?: boolean;
}
export interface IDialogService {
    showContextualActionPanel(template: string, parameter?: any): ng.IPromise<IDialogResult>;
    show(options?: IDialogOptions): ng.IPromise<IDialogResult>;
    showMessage(options: IMessageDialogOptions, isTrustedContent?: boolean): ng.IPromise<IDialogResult>;
    showToast(options: IToastOptions): void;
    copyToClipboard(options: ICopyToClipboardOptions, forceDialog?: boolean): void;
}
export class DialogService {
    private language;
    private messageFunction;
    showMessage(options: IMessageDialogOptions): Observable<IDialogResult>;
    copyToClipboard(options: ICopyToClipboardOptions): void;
    showToast(options: IToastOptions): void;
}
export const widgetContextInjectionToken: InjectionToken<IWidgetContext2>;
export const widgetInstanceInjectionToken: InjectionToken<IWidgetInstance2>;
export interface ITranslationItem {
    label: string;
    name: string;
    maxLength: number;
    isTextArea?: boolean;
    defaultValue?: string;
    labelId?: string;
    valueId?: string;
}
export interface ITranslationOptions {
    view?: ViewContainerRef;
    item?: ITranslationItem;
    items?: ITranslationItem[];
    data?: any;
}
export interface ITranslationResult {
    data?: any;
}
export interface ITranslationService {
    isEnabled(): boolean;
    translate(options: ITranslationOptions): Observable<ITranslationResult>;
    getLanguage(): string;
}
export class TranslationService implements ITranslationService {
    private instance;
    initialize(instance: ITranslationService): void;
    isEnabled(): boolean;
    translate(options: ITranslationOptions): Observable<ITranslationResult>;
    getLanguage(): string;
    private getInstance();
}

}