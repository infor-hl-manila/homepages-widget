/// <reference path="soho-datagrid.d.ts" />
import { AfterViewInit, ChangeDetectorRef, AfterViewChecked, ElementRef, EventEmitter, OnInit, OnDestroy, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef, Type, NgZone } from '@angular/core';
import { SohoDataGridService } from './soho-datagrid.service';
export declare type SohoDataGridType = 'auto' | 'content-only';
export interface ExtendedSohoDataGridCellEditor extends SohoDataGridCellEditor {
    component: Type<SohoDataGridCellEditor>;
    args: SohoDataGridEditCellFunctionArgs;
    input: JQuery;
    useValue: boolean;
    className: string;
    init(componentRef: ComponentRef<SohoDataGridCellEditor>): void;
    destroy(): void;
}
export declare class SohoAngularEditorAdapter implements ExtendedSohoDataGridCellEditor {
    component: Type<SohoDataGridCellEditor>;
    args: SohoDataGridEditCellFunctionArgs;
    componentRef: ComponentRef<SohoDataGridCellEditor>;
    input: JQuery;
    useValue: boolean;
    className: string;
    constructor(component: Type<SohoDataGridCellEditor>, args: SohoDataGridEditCellFunctionArgs);
    init(componentRef: ComponentRef<SohoDataGridCellEditor>): void;
    val(value?: any): any;
    focus(): void;
    destroy(): void;
}
export declare class SohoDataGridComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {
    private ngZone;
    private elementRef;
    private changeDetector;
    private resolver;
    private injector;
    private app;
    protected datagridService: SohoDataGridService;
    static AUTO: SohoDataGridType;
    static CONTENT_ONLY: SohoDataGridType;
    gridOptions: SohoDataGridOptions;
    idProperty: string;
    cellNavigation: boolean;
    rowNavigation: boolean;
    alternateRowShading: boolean;
    dataset: Array<any>;
    columnReorder: boolean;
    disableClientSort: boolean;
    disableClientFilter: boolean;
    editable: boolean;
    isList: boolean;
    menuId: any;
    rowHeight: SohoDataGridRowHeight;
    selectable: any;
    clickToSelect: boolean;
    toolbar: SohoToolbarOptions;
    saveUserSettings: SohoDataGridSaveUserSettings;
    paging: boolean;
    pagesize: number;
    pagesizes: Array<number>;
    indeterminate: boolean;
    actionableMode: boolean;
    saveColumns: boolean;
    source: SohoDataGridSourceFunction;
    filterable: boolean;
    treeGrid: boolean;
    uniqueId: string;
    rowReorder: boolean;
    showDirty: boolean;
    disableRowDeactivation: boolean;
    userObject: any;
    groupable: SohoDataGridGroupable;
    data: any[];
    columns: SohoDataGridColumn[];
    stretchColumn: string;
    showPageSizeSelector: boolean;
    columnGroup: SohoDataGridColumnGroup[];
    emptyMessage: SohoEmptyMessageOptions;
    sohoDatagrid: SohoDataGridType;
    selected: EventEmitter<SohoDataGridSelectedEvent>;
    cellchange: EventEmitter<SohoDataGridCellChangeEvent>;
    rowRemove: EventEmitter<SohoDataGridRowRemoveEvent>;
    rowAdd: EventEmitter<SohoDataGridAddRowEvent>;
    filtered: EventEmitter<SohoDataGridFilteredEvent>;
    expandrow: EventEmitter<SohoDataGridToggleRowEvent>;
    collapserow: EventEmitter<SohoDataGridToggleRowEvent>;
    sorted: EventEmitter<SohoDataGridSortedEvent>;
    rowActivated: EventEmitter<SohoDataGridRowActivated>;
    rowDeactivated: EventEmitter<SohoDataGridRowActivated>;
    rowClicked: EventEmitter<SohoDataGridRowClicked>;
    rowDoubleClicked: EventEmitter<SohoDataGridRowClicked>;
    contextMenu: EventEmitter<SohoDataGridRowClicked>;
    rowReordered: EventEmitter<SohoDataGridRowReorderedEvent>;
    openFilterRow: EventEmitter<SohoDataGridOpenFilterRowEvent>;
    closeFilterRow: EventEmitter<SohoDataGridCloseFilterRowEvent>;
    settingsChanged: EventEmitter<SohoDataGridSettingsChangedEvent>;
    rendered: EventEmitter<SohoDataGridRenderedEvent>;
    afterRender: EventEmitter<SohoDataGridAfterRenderEvent>;
    isDisabled: boolean;
    readonly datagridRole: "treegrid" | "datagrid";
    private jQueryElement;
    private datagrid;
    private gridData;
    private datagridType;
    private _gridOptions;
    private refreshHint;
    private changedOptions;
    private cellComponents;
    constructor(ngZone: NgZone, elementRef: ElementRef, changeDetector: ChangeDetectorRef, resolver: ComponentFactoryResolver, injector: Injector, app: ApplicationRef, datagridService: SohoDataGridService);
    getColumnGroup(idx: number): string;
    getColumnById(idx: number): string;
    setSortFunction(sortFunction: SohoDataGridSortFunction): void;
    setSortColumn(columnId: string, ascending?: boolean): void;
    setSortIndicator(columnId: string, ascending: boolean): void;
    pageSize(): number;
    updatePagingInfo(pageInfo: SohoPagerPagingInfo): void;
    enable(): void;
    disable(): void;
    updateRow(idx: number, row: any): void;
    hideColumn(id: any): void;
    showColumn(id: any): void;
    columnById(id: string): Array<any>;
    getColumns(): Array<any>;
    getColumnGroups(): SohoDataGridColumnGroup[];
    getColumnIndex(columnId: string): number;
    getHeaderRowColumn(fld: any): any;
    addRow(data: any, location?: 'top' | 'bottom' | number): void;
    removeRow(data: any): void;
    dirtyRows(): Array<any>;
    rowStatus(idx: number, status: string, tooltip: string): void;
    removeSelected(): void;
    toggleFilterRow(): void;
    applyFilter(conditions?: Array<SohoDataGridFilterCondition>): void;
    setFilterConditions(conditions: Array<SohoDataGridFilterCondition>): void;
    filterConditions(): Array<SohoDataGridFilterCondition>;
    clearFilter(): void;
    getSelectedRows(): SohoDataGridSelectedRow[];
    selectedRows(): SohoDataGridSelectedRow[];
    selectAllRows(): void;
    unSelectAllRows(): void;
    selectRow(idx: number): void;
    unselectRow(idx: number): void;
    selectRange(start: number, end: number): void;
    selectRows(row: number | number[]): void;
    activateRow(idx: number): void;
    deactivateRow(): void;
    activatedRow(): SohoDataGridRowActivated;
    setActiveCell(idx: number, idx2: number): void;
    scrollRowIntoView(idx: number): void;
    findRowsByValue(fieldName: string, value: any): number[];
    triggerSource(pagerType: SohoDataGridTriggerSourcePagerType, callback?: Function): void;
    exportToExcel(fileName: string, worksheetName: string, customDs: Object[]): void;
    exportToCsv(fileName: string, customDs: Object[], separator?: string): void;
    updateColumns(columns: SohoDataGridColumn[], columnGroups: SohoDataGridColumnGroup[]): void;
    columnsFromString(columns: string): Object;
    restoreUserSettings(settings: any): void;
    private onDataRequest;
    private onExpandRow;
    private onCollapseRow;
    private onRowAdd;
    private onCellChange;
    private onRowClicked;
    private onCloseFilterRow;
    private onContextMenu;
    private onDoubleClick;
    private onFiltered;
    private onOpenFilterRow;
    private onRowRemove;
    private onRendered;
    private onAfterRendere;
    private onRowActivated;
    private onRowDeactivated;
    private onRowReordered;
    private onSelected;
    private onSettingsChanged;
    private onSorted;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    private destroyDataGrid;
    private onPostRenderCell;
    private onDestroyCell;
    private onEditCell;
    private buildDataGrid;
    private markForRefresh;
    private updateControl;
    private updateSource;
    private checkForComponentEditors;
}
export declare enum SohoGridColumnFilterTypes {
    Text = "text",
    Checkbox = "checkbox",
    Contents = "contents",
    Date = "date",
    Decimal = "decimal",
    Integer = "integer",
    Lookup = "lookup",
    Percent = "percent",
    Select = "select"
}
export interface SohoDataGridToggleRowEvent extends SohoDataGridRowExpandEvent {
    grid: SohoDataGridComponent;
    args?: any;
}
