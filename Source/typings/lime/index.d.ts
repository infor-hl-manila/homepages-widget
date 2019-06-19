declare module 'lime' {
/// <reference path="../../../../scripts/typings/sohoxi/sohoxi.d.ts" />
import { InjectionToken, ViewContainerRef } from "@angular/core";
import { SohoMessageService } from "@infor/sohoxi-angular";
import { Observable } from "rxjs";
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
export interface ILanguage<T = null> extends ISharedLanguage {
    get(id: T extends null ? string : keyof (T & ISharedLanguage)): string;
    format(text: string, value: string): string;
}
interface ISharedLanguage {
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
export interface IWidgetModule2 extends IWidgetModule {
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
export interface IAngularWidgetConfig {
    moduleType?: any;
    moduleFactory?: any;
    componentType?: any;
}
export interface IAngularWidgetConfig2 extends IAngularWidgetConfig {
}
export interface IWidgetAction {
    text?: string;
    execute?: Function;
    isEnabled?: boolean;
    isEnabledNotConfigured?: boolean;
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
    Error = 2
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
    getMetadataAsync?: () => Observable<IWidgetSettingMetadata[]>;
    isConfigured?: (settings: IWidgetSettings) => boolean;
    emptyConfigClicked?: () => void;
    editing?: () => void;
    edited?: () => void;
    publishing?: () => void;
    angularConfig?: IAngularWidgetConfig;
    widgetSettingsFactory?: (context: IWidgetSettingsContext) => IWidgetSettingsInstance;
    actions?: IWidgetAction[];
}
export interface IWidgetInstance2 extends IWidgetInstance {
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
    getSettings<T>(): IWidgetSettings<T>;
    getLanguage(): ILanguage;
    getLanguage<T extends ILanguage<T>>(): T;
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
    getService<T>(serviceType: new (...args: any[]) => T): T;
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
    getInforStdTimeZone(): string;
    getInforCurrentLanguage(): string;
    getInforCurrentLocale(): string;
    getInforThemeName(): string;
    getBannerBackgroundColor(): string;
    getContextParameter(parameter: string): string;
    updatePrimaryAction(): void;
    getMode(): Mode;
    getSubMode(): SubMode;
    send(name: string, data: unknown): void;
    receive(name: string): Observable<unknown>;
}
export interface IWidgetContext2 extends IWidgetContext {
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
declare type Nullable<A, B = any, C = A> = A extends null ? B : C;
export interface IWidgetSettings<T = null> {
    getValues(): Nullable<T>;
    setValues(values: Nullable<T>): void;
    getMetadata(): IWidgetSettingMetadata[];
    setMetadata(metadata: IWidgetSettingMetadata[]): any;
    get<V extends NonNullable<T>, N extends keyof V & string>(name: N, defaultValue?: V[N]): V[N];
    get<RT>(name: Nullable<T, string, never>, defaultValue?: RT): RT;
    set<N extends keyof Nullable<T>>(name: Nullable<T, string, N>, value: Nullable<T>[N]): void;
    getString<N extends keyof Nullable<T>>(name: Nullable<T, string, N>, defaultValue?: string): string;
    showSettings(options?: IShowSettingsOptions): void;
    isSettingsEnabled(): boolean;
    isSettingEnabled<N extends keyof Nullable<T>>(name: Nullable<T, string, N>): boolean;
    isSettingVisible<N extends keyof Nullable<T>>(name: Nullable<T, string, N>): boolean;
    enableSettingsMenu(enabled: boolean): void;
    hasMandatory(): boolean;
    isMandatory<N extends keyof Nullable<T>>(name: Nullable<T, string, N>): boolean;
}
export interface IWidgetSettingsInstance {
    closing?: (arg: IWidgetSettingsCloseArg) => void;
    angularConfig?: IAngularWidgetConfig;
}
export interface IWidgetSettingsInstance2 extends IWidgetSettingsInstance {
}
export interface IWidgetSettingsContext {
    getWidgetContext(): IWidgetContext;
    enableSave(isEnabled: boolean): void;
    isSaveEnabled(): boolean;
    getElement(): JQuery;
    close(isSave?: boolean): void;
}
export interface IWidgetSettingsContext2 extends IWidgetSettingsContext {
}
export class WidgetConstants {
    static widgetInstanceKey: string;
    static widgetContextKey: string;
    static widgetTitle: string;
    static widgetDescription: string;
}
export interface IWidgetComponent {
    widgetContext: IWidgetContext;
    widgetInstance: IWidgetInstance;
}
export interface IWidgetSettingsComponent {
    widgetSettingsContext: IWidgetSettingsContext;
    widgetSettingsInstance: IWidgetSettingsInstance;
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
export interface IAccelerationData {
    x: number;
    y: number;
    z: number;
}
export interface IGyroscopeData {
    x: number;
    y: number;
    z: number;
}
export interface IGetSensorsResult {
    readonly acceleration: IAccelerationData;
    readonly gyroscope: IGyroscopeData;
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
    static itemByProperty<T = any>(array: any[], name: string, value: any): T;
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
    static rotateLeft<T>(array: T[], clicks: number): T[];
}
export class NumUtil {
    private static defaultSeparator;
    private static defaultOptions;
    static getDefaultOptions(): INumberFormatOptions;
    static setDefaultOptions(options: INumberFormatOptions): void;
    static isNumber(n: any): boolean;
    static getInt(s: string, defaultValue?: number): number;
    static format(value: any, options?: INumberFormatOptions): string;
    static pad(num: number, length: number): string;
    static hasOnlyIntegers(s: string): boolean;
    static mod(dividend: number, divisor: number): number;
    static randomInt(min: number, max: number): number;
    private static getLocaleSeparator;
}
export class CommonUtil {
    private static chars;
    static copyJson<T>(value: T): T;
    static getLocaleDateString(dateString: string, options?: any): string;
    static deleteProperty(object: any, property: string): void;
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
    static getLogEntry(level: number, text: string, ex?: any): string;
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
    private static getTime;
    private static log;
}
export enum StandardDialogButtons {
    Ok = 1,
    OkCancel = 2,
    YesNo = 3,
    YesNoCancel = 4
}
export enum DialogButtonType {
    None = 1,
    Ok = 2,
    Cancel = 3,
    Yes = 4,
    No = 5,
    Custom = 6
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
    closing: (e: IDialogEvent) => void;
    closed: (e: IDialogEvent) => void;
    opened: (e: IDialogEvent) => void;
    parameter?: any;
    result?: IDialogResult;
    close(result?: IDialogResult): void;
}
export interface ICopyToClipboardOptions {
    copyData: string;
    forceDialog?: boolean;
}
export class DialogService {
    protected readonly messageService: SohoMessageService;
    private language;
    private messageFunction;
    constructor(messageService: SohoMessageService);
    showMessage(options: IMessageDialogOptions): Observable<IDialogResult>;
    copyToClipboard(options: ICopyToClipboardOptions): void;
    showToast(options: IToastOptions): void;
    private setDefaultButtons;
    private setSpecificButtons;
    private resolveMessageDialog;
}
export const widgetContextInjectionToken: InjectionToken<IWidgetContext>;
export const widgetInstanceInjectionToken: InjectionToken<IWidgetInstance>;
export interface ITranslationItem {
    label: string;
    name: string;
    maxLength: number;
    isTextArea?: boolean;
    defaultValue?: string;
    labelId?: string;
    valueId?: string;
    isRequired?: boolean;
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
    private getInstance;
}
export enum Mode {
    Default = 0,
    Mobile = 1,
    ContextApp = 2
}
export enum SubMode {
    Default = 0,
    MobilePage = 1,
    MobileSingle = 2
}
export {};

}