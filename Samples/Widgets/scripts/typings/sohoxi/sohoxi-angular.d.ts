
declare module xi {
    interface IModalData extends JQuery {
        close(): void;
        destroy(): void;
    }
    /**
     * Represents the options for the About directive.
     * Note* Unique id for the xi-about element is recommended, if two or more about dialogs are used
     */
    interface IAboutOptions {
        /**
         * The header name
         * Default value: "Infor Application Name"
         */
        appName?: string;
        /**
         * Optional additional content to be included between productName and deviceSpecs
         */
        content?: string;
        /**
         * If not provided, default is current year
         * Default value: new Date.getFullYear()
         */
        copyrightYear?: Date;
        /**
         * Flag for including device specifications or not
         * Default value: true
         */
        deviceSpecs?: boolean;
        /**
         * Sub-heading
         */
        productName?: string;
        /**
         * Flag for using the default copyright text or not
         * Default value: true
         */
        useDefaultCopyright?: boolean;
        /**
         * Application version
         */
        version?: string;
    }
    /**
     * About Directive.
     *
     * Shows a modal dialog which contains information typical for about dialogs
     *
     * Example:
     * scope["options"]: IXiAboutOptions = { appName: "SoHo Xi Test", productName: "Test page for directives", version: "0.0.7", useDefaultCopyright: true,	content: "<div><p>Additional content goes here</p></div>" }
     * <button class="btn about" id="about-dialog" xi-about="options">Open about modal</button>
     */
    class AboutDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Autocomplete directive.
     */
    interface IAutoCompleteOptions {
        /**
         * The data source, can be a url, function or an array.
         * Default value: []
         */
        source?: any;
        /**
         * Allows tags to be shown/generated
         * Default value: false
         */
        tags?: boolean;
        /**
         * Template as selector or full element. Use this to draw the contents of each
         * search result instead of the default draw routine.
         * Default template:
         * <li id="{{listItemId}}" {{#hasValue}}data-value="{{value}}"{{/hasValue}} role="listitem">
       *		<a href="#" tabindex="-1">
       *			<span>{{{label}}}</span>
       *		</a>
       * </li>
         */
        template?: string;
        /**
         * Filter type, supports "startsWith" and "contains"
         * Default value: "startsWith"
         */
        filterMode?: string;
        /**
         * The ms delay between key strokes on the keypad before it thinks you stopped typing
         * Default value: 300
         */
        delay?: number;
    }
    /**
     * Autocomplete Directive.
     *
     * Suggests values in given data (source) that matches the input.
     * Instead of providing av options object, the following attributes can be used as an alternative:
     * data-autocomplete (string url value only, instead of options.source)
     * data-tmpl (instead of options.template)
     *
     * Example:
     * scope["options"]: IXiAutoCompleteOptions = { source: ["Alpha", "Bravo"], template: "#template", filterMode: "contains" }
     * <input xi-autocomplete="options" />
     */
    class AutoCompleteDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Busyindicator directive.
     */
    interface IBusyOptions {
        /**
         * Text to show on indicator
         * Default value: "Loading" (Localized)
         */
        text?: string;
        /**
         * Block the UI covered by the overlay
         * Default value: true
         */
        blockUI?: boolean;
        /**
         * Delay (ms) until loading indicator is shown
         * Default value: 1000
         */
        delay?: number;
        /**
         * Fire the 'complete' trigger at a certain timing interval (0 = indefinitely)
         * Default value: 0
         */
        timeToComplete?: number;
        /**
     * Fire the 'close' trigger at a certain timing interval (0 = indefinitely)
     * Default value: 0
     */
        timeToClose?: number;
    }
    /**
     * Busy Directive.
     *
     * Shows a busy indicator, covering the area spanned by the element
     *
     * Example:
     * scope["isAppBusy"]: boolean = true
     * <div xi-busy="isAppBusy">This area is busy until variable isAppBusy is set to false. Indicator shown after 3000 ms when triggered</div>
     *
     * Default delay until the loading indicator shows up, after triggered, is 3000 ms.
     * To set another delay, use the attribute busy-delay
     * Example:
     * scope["isAnotherAppBusy"]: boolean = true
     * <div xi-busy="isAnotherAppBusy" busy-delay="0">This area is busy until variable isAnotherAppBusy is set to false. Indicator shown immediately when triggered</div>
     *
     */
    class BusyDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Button Directive.
     *
     * Example:
     * <button xi-button class="btn-primary" type="button">Action</button>
     */
    class ButtonDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Chart directive.
     */
    interface IChartOptions {
        /**
         * Type of chart.
         */
        type: string;
        /**
         * Dataset to show in chart
         */
        dataset: IChartData[];
        /**
         * Formatter string
         */
        formatterString?: string;
        /**
         * Labels object
         */
        labels?: Object;
        /**
         * Show legend
         */
        legendshow?: boolean;
    }
    interface IChartData {
        /**
         * Data in dataset
         */
        data: IChartDataItem[];
        /**
         * Optional name of dataset
         */
        name?: string;
        /**
         * Selected
         */
        selected?: boolean;
        /**
         * Optional center label when using Donut chart
         */
        centerLabel?: string;
    }
    interface IChartDataItem {
        /**
         * Name (label) of data entry
         */
        name: string;
        /**
         * Value of data entry
         */
        value: number;
        /**
         * Optional url string
         */
        url?: string;
        /**
         * Optional custom tooltip text
         */
        tooltip?: string;
        /**
         * Optional custom color
         */
        color?: string;
        /**
         * ID
         */
        id?: string;
        /**
         * Depth
         */
        depth?: number;
        /**
         * Optional short name
         */
        shortName?: string;
        /**
         * Pattern (ex. 'hatch', 'crosshatch')
         */
        pattern?: string;
        /**
         * Optional abbreviation name
         */
        abbrName?: string;
    }
    /**
     * Chart Directive.
     *
     * Example:
     * scope["options"] = { type: "pie", dataset: [ {data: [{name: "first", value: 10},{name: "second", value: 4}, {name: "third", value: 15 }]}]}
     * <div xi-chart="options"></div>
     */
    class ChartDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Colorpicker directive.
     */
    interface IColorPickerOptions {
        /**
         * Colors available from the picker
         * Default value: [{label: 'Azure', value: '368AC0'},
                   {label: 'Amber', value: 'EFA836'},
                   {label: 'Amethyst', value: '9279A6'},
                   {label: 'Turquoise', value: '579E95'},
                   {label: 'Ruby', value: 'B94E4E'},
                   {label: 'Emerald', value: '76B051'},
                   {label: 'Graphite', value: '5C5C5C'},
                   {label: 'Slate', value: '50535A'}]
         */
        colors: IColorPickerColor[];
    }
    interface IColorPickerColor {
        /**
         * label of color option
         */
        label: string;
        /**
         * Color code (hex) of color option
         */
        value: string;
    }
    /**
     * Colorpicker Directive.
     *
     * Provides a color picker consisting of colors specified by the IColorpickerOptions option, or default colors if not specified.
     * Use the value attribute to set a default color.
     * Example:
     * scope["options"] = { colors: [{label: "white", value: "ffffff" },{label: "black", value: "000000"}] }
     * <input value="#ffffff" xi-colorpicker="colors" />
     */
    class ColorPickerDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Standard Control Directive.
     *
     * Used to call a standard initialize method for the specified SohoXi Control.
     * Only supports simple options with no watchers.
     */
    class ControlDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    interface IFormatterFunction {
        (row: number, cell: number, value: string, col: IDataGridColumn, item: any, datagrid: any): string;
    }
    interface IFormatters {
        [index: string]: IFormatterFunction;
        Text: IFormatterFunction;
        Ellipsis: IFormatterFunction;
        Expander: IFormatterFunction;
        Password: IFormatterFunction;
        Readonly: IFormatterFunction;
        Date: IFormatterFunction;
        Autocomplete: IFormatterFunction;
        Lookup: IFormatterFunction;
        Decimal: IFormatterFunction;
        Integer: IFormatterFunction;
        Hyperlink: IFormatterFunction;
        Template: IFormatterFunction;
        Drilldown: IFormatterFunction;
        Checkbox: IFormatterFunction;
        SelectionCheckbox: IFormatterFunction;
        Actions: IFormatterFunction;
        Textarea: IFormatterFunction;
        GroupRow: IFormatterFunction;
        GroupFooterRow: IFormatterFunction;
        SummaryRow: IFormatterFunction;
        Tree: IFormatterFunction;
        ClassRange: IFormatterFunction;
        Badge: IFormatterFunction;
        Tag: IFormatterFunction;
        Alert: IFormatterFunction;
        Image: IFormatterFunction;
        Color: IFormatterFunction;
        Button: IFormatterFunction;
        Dropdown: IFormatterFunction;
        Favorite: IFormatterFunction;
        Status: IFormatterFunction;
    }
    /**
     * Interface for the Data Grid Directive
     */
    interface IDataGridOptions {
        /**
         * If actionableMode is "true”, tab and shift tab behave like left and right arrow key,
        */
        actionableMode?: boolean;
        /**
         * If "false”, will NOT show border around the row
         */
        rowNavigation?: boolean;
        /**
         * Allow Column reorder
         */
        columnReorder?: boolean;
        /**
         * Save Column Reorder and resize
         */
        saveColumns?: boolean;
        /**
         * Enable cell navigation
         * Default value: true
         */
        cellNavigation?: boolean;
        /**
         * Enable shading for readonly grids
         * Default value: false
         */
        alternateRowShading?: boolean;
        /**
         * Data set to populate the grid
         */
        dataset: Object[];
        /**
         * Column properties
         */
        columns?: IDataGridColumn[];
        /**
         * Enable cell editing
         * Default value: false
         */
        editable?: boolean;
        /**
         * Template used to render rows
         */
        rowTemplate?: string;
        /**
         * Make a readonly "list"
         * Default value: false
         */
        isList?: boolean;
        /**
         * Menu id to the right click context menu
         */
        menuId?: string;
        /**
         * Row height, possbile values: "short", "medium" or "tall"
         * Default value: "medium"
         */
        rowHeight?: string;
        /**
         * Selectable rows, possbile values: "single" or "multiple"
         * Default value: false
         */
        selectable?: string;
        /**
         * Use mouse click to select
         * Default value: true
         */
        clickToSelect?: boolean;
        /**
         * Show toolbar. False or toolbar object
         * Default value: false
         */
        toolbar?: any;
        /**
         * Enable paging
         * Default value: false
         */
        paging?: boolean;
        /**
         * Page size
         * Default value: 25
         */
        pagesize?: number;
        /**
         * Page sizes for paging
         * Default value: [10, 25, 50, 75]
         */
        pagesizes?: number[];
        /**
         * Remove ability to go to a specific page.
         * Default value: false
         */
        indeterminate?: boolean;
        /**
         * Callback function for paging
         */
        source?: Function;
        /**
         * Override sort function
         */
        sortFunction?: Function;
        /**
         * Can provide a custom function to adjust results text
         */
        resultsText?: Function;
    }
    interface IDataGridColumn {
        /**
         * ID of column
         */
        id: string;
        /**
         * Name displayed in the column header
         */
        name: string;
        /**
         * Property in dataset to show in the column field
         */
        field: string;
        /**
         * Show\hide
         */
        hidden?: boolean;
        /**
         * Alignment
         */
        align?: string;
        /**
         * Width of column
         */
        width?: any;
        /**
          * Minimum width of the column
          */
        minWidth?: number;
        /**
         * Maximum width of the column
         */
        maxWidth?: number;
        /**
         * Formatter
         */
        formatter?: IFormatterFunction;
        /**
         * Editor
         */
        editor?: any;
        /**
         * On click method (hyperlink)
         */
        click?: Function;
        /**
         * Date format
         */
        dateFormat?: string;
        /**
         * Number format
         */
        numberFormat?: string;
        /**
         * Sortable
         */
        sortable?: boolean;
        /**
         * Resizeable
         */
        resizable?: boolean;
        /**
         * Text overflow
         * Can be set to 'ellipsis'.
         */
        textOverflow?: string;
    }
    /**
     * Data Grid Directive
     *
     * Example:
     *
     * scope["options"] = { dataset: [{ name: "Name #1", age: 12, phone: "12345" }, { name: "Name #2", age: 22, phone: "1234567" }, { name: "Name #3", age: 32, phone: "1234589" }]}
     * <div xi-datagrid="ctrl.options"></div>
     */
    class DataGridDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Datepicker directive.
     */
    interface IDatePickerOptions {
        /**
         * Date format. Will be overridden by Locale setting if present.
         * Default value: "M/d/yyyy"
         */
        dateFormat?: string;
        /**
         * Disable options.
           dates: 'M/d/yyyy' or ['M/d/yyyy'] or ['M/d/yyyy', new Date('M/d/yyyy')] or ['M/d/yyyy', new Date('M/d/yyyy'), new Date(yyyy,(M-0),d)]
         minDate: 'M/d/yyyy'
         maxDate: 'M/d/yyyy'
         dayOfWeek: [2] or [0,6] - {0-sun, 1-mon, 2-tue, 3-wed, 4-thu, 5-fri, 6-sat}
         isEnable: false or true
         */
        disable?: {
            dates: any;
            minDate: string;
            maxDate: string;
            dayOfWeek: number[];
            isEnable: boolean;
        };
    }
    /**
     * Datepicker directive.
     *
     * Example:
     * scope["options"] = {	dateFormat: "YYYY/M/D" }
     * <input xi-datepicker="options" id="date-field" class="datepicker" type="text"/>
     */
    class DatePickerDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
    * Represents the options for the Dropdown directive
    */
    interface IDropDownOptions {
        /**
         * Enable close on select
         * Default value: true
         */
        closeOnSelect?: boolean;
        /**
         * If in multiple mode, sets a limit on the number of items that can be selected
         */
        maxSelected?: number;
        /**
         * Append a css class to dropdown-list
         */
        cssClass?: string;
        /**
         * Display all selected options at the top of the list
         * Defaul value: false
         */
        moveSelectedToTop?: boolean;
        /**
         * Turn the dropdown into a multiple selection box
         * Default value: false
         */
        multiple?: boolean;
        /**
         * Disable the ability of the user to enter text in the Search Input field in the open combo box
         * Default value: false
         */
        noSearch?: boolean;
        /**
         * A function that can do an ajax call.
         */
        source?: Function;
        /**
         * Buffer delay for typing
         * Default value: 300
         */
        delay?: number;
        /**
         * Initialize Empty Value
         * Default value: false
         */
        empty?: boolean;
    }
    /**
     * Dropdown Directive.
     *
     * Example:
     * scope["datas"] = [{ value: 1, label: "first" }, { value: 2, label: "second" }]
     *	<select id="dropdown-1" ng-model="modelVal" ng-options="data.label as data.value for data in datas" class="dropdown" xi-drop-down></select>
     */
    class DropDownDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Editor directive.
     */
    interface IEditorOptions {
        /**
         * Can specify which editor & source buttons to use, ex. { editor: ["header1", "bold", "italic"], source: ["bold, "italic"] }.
       * See xi source for defaults
         */
        buttons?: {
            editor: string[];
            source: string[];
        };
        /**
         * Optional delay (ms)
         * Default value: 200
         */
        delay?: number;
        /**
         * Template as selector or full element. Use this to draw the contents of each
         * Default value: 0
        */
        diffLeft?: number;
        /**
        * Template as selector or full element. Use this to draw the contents of each
         * Default value: -10
         */
        diffTop?: number;
        /**
         * i.e "h1", "h2", "h3" or "h4"
         * Default value: "h3"
         */
        firstHeader?: string;
        /**
         * i.e "h1", "h2", "h3" or "h4"
         * Default value: "h4"
        */
        secondHeader?: string;
        /**
         * Placeholder
         */
        placeholder?: any;
        /**
         * Default url options to show in Edit hyperlink dialog
         * Default value: {url: 'http://www.example.com', class: 'hyperlink', target: ''},
         */
        anchor?: {
            url: string;
            class: string;
            target: string;
        };
        /**
         * Default image options to show in Insert image dialog
         * Default value: {url: 'http://lorempixel.com/output/cats-q-c-300-200-3.jpg'}
         */
        image?: {
            url: string;
        };
    }
    /**
     * Editor Directive.
     *
     * Example:
     * scope["options"]: IEditorOptions = { anchor: { url: "https://www.example.com, class: "hyperlink", target: "_blank" } };
     * <div class="editor" id="my-editor" role="textbox" aria-multiline="true" aria-label="notes" xi-editor></div>
     */
    class EditorDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * File Upload Directive.
     * Used for binding a scope variable to selected file(s)
     * The name of the scope variable is specified as xi-fileupload="scopeVariableName"
     *
     * Example:
     * scope["files"]
     * <label class="fileupload">
            <span class="audible">Choose File</span>
            <input type="file" name="file-input" xi-fileupload="chosenFile" />
        </label>
     */
    class FileUploadDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Listview directive.
     */
    interface IListViewOptions {
        /**
         * Dataset (object, array, url) for the list
         */
        dataset?: any;
        /**
         * Html template string
         */
        template?: string;
        /**
         * Audible Label (or use parent title)
         * Default value: use parent title
         */
        description?: string;
        /**
         * false, "single" or "multiple"
         * Default value: "single"
         */
        selectable?: any;
        /**
         * Enable select on focus
         * Default value: true
         */
        selectOnFocus?: boolean;
    }
    /**
     * Listview Directive.
     *
     * Example:
     * scope["options"] = { dataset: items, selectable: "multiple" };
     * scope["items"] = ["first", "second", "third"];
       <div class="card">
         <div class="card-header"></div>
            <div class="card-content">
                <div class="listview-toolbar toolbar is-hidden">
                    <div class="buttonset">
                        <button class="btn-tertiary" title="remove" type="button" ng-click="ctrl.removeSelected()">Remove</button>
                    </div>
                </div>
                <div class="listview is-muliselect" id="multiselect-listview" xi-listview="options">
                    <ul>
                        <li ng-repeat="item in items track by $id($index)">
                            <p>{{item}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     */
    class ListViewDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Lookup directive.
     */
    interface ILookupOptions {
        /**
         * Callback function when lookup icon is clicked
         */
        click?: Function;
        /**
         * Field to return from the array or can be a function
         * Default value: "id"
         */
        field?: any;
        /**
         * Dialog title
         * Default value: label + "Lookup"
         */
        title?: string;
        /**
         * Pass dialog buttons or
         * Default value: Cancel/Apply or only Cancel
         */
        buttons?: any[];
        /**
         * Options to pass to the data grid
         */
        options: IDataGridOptions;
        /**
         * Callback before the lookup is opened
         */
        beforeShow?: Function;
        /**
         * Future Xi TODO
         */
        source?: any;
        /**
         * Custom modal markup
         */
        modalContent?: string;
        /**
         * Can the user type random text in the field
         * Default value: true
         */
        editable?: boolean;
        /**
         * Future Xi TODO
         * Default value: false
         */
        typeahead?: boolean;
        /**
         * Default value: true
         */
        autoApply?: boolean;
        /**
         * A function that fires to let you validate form items on open and select
         */
        validator?: Function;
    }
    /**
     * Lookup Directive.
     *
     * Example:
     * scope["options"]: ILookupOptions =
     {
        field: "productId",
        options: {
            columns: [
                { id: 'productId', name: 'Product Id', field: 'productId', width: 140 },
                { id: 'productName', name: 'Product Name', sortable: false, field: 'productName', width: 250, formatter: (<any>window).Formatters.Hyperlink },
                { id: 'activity', hidden: true, name: 'Activity', field: 'activity', width: 125 }
            ],
            dataset: [
                { id: 1, productId: 2142201, productName: 'Compressor', activity: 'Assemble Paint' },
                { id: 2, productId: 2241202, productName: 'Different Compressor', activity: 'Inspect and Repair' },
                { id: 3, productId: 2342203, productName: 'Third Compressor', activity: 'Inspect and Repair' }],
            selectable: 'single'
        }
     }
     *	<input id="lookup-example" data-init="false" class="lookup" type="text" xi-lookup="options"/>
     */
    class LookupDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Mask directive .
     */
    interface IMaskOptions {
        /**
         * Mask pattern to match, ex. "##.##".
         * Attribute name: data-mask
         */
        pattern?: string;
        /**
         * Placeholder
         * Default value: "_"
         */
        placeholder?: string;
        /**
         * Pattern definitions
         * Default value: {
            '#': /[0-9]/,
            '0': /[0-9]/,
            'x': /[\u00C0-\u017Fa-zA-Z]/,
            '*': /[\u00C0-\u017Fa-zA-Z0-9]/,
            '~': /[-0-9]/,
            'a': /[APap]/,
            'm': /[Mm]/
          }
         */
        definitions?: Object;
        /**
         * Is number mode
         * Default value: false
         */
        number?: boolean;
        /**
         * Mode for special formatting rules, ex. "number" or "time"
         * Attribute name: data-mask-mode
         */
        mode?: string;
        /**
         * Indicates if the thousands separator (comma or decimal) shall
         * be inserted during typing (mode must also be set to "number").
         * Attribute name: data-thousands
         */
        thousands?: boolean;
        /**
         * Indicates if the mask must be completed. If true and mask is not completed,
         * the field will be reverted to blank when blurred.
         * Attribute name: data-must-complete
         */
        mustComplete?: boolean;
        /**
         * Indicates if the currency should be shown. If set, mode must be set to number.
         * Possible values: "none", "currency", "percent"
         * Attribute name: data-show-currency
         * Default value: "none"
         */
        showCurrency?: string;
    }
    /**
     * Mask Directive.
     *
     * Sets masking properties on an input.
     * Instead of providing av options object, the following attributes can be used:
     * data-mask-mode
     * data-mask (corresponds to 'pattern' in IMaskOptions)
     * data-thousands
     * data-must-complete
     * data-show-currency
     *
     * Example:
     * scope["options"]: IXiMaskOptions = {"pattern": "##:##", }
     * <input xi-mask="options" />
     *
     * <input xi-mask data-mask-mode="number" data-mask="####" data-thousands="true" />
     */
    class MaskDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Multiselect directive
     */
    interface IMultiSelectOptions {
        /**
         * Limit of selected items
         */
        maxSelected?: number;
        /**
         * A function that can do an ajax call.
         */
        source?: boolean;
    }
    /**
     * Multiselect Directive
     *
     * Provides multiselection.
     * Note that the element must have an ID.
     */
    class MultiSelectDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Popover Directive
     *
     * Same control as tooltip.
     *
     * Example:
     * scope["options"]: IXiTooltipOptions =
        {
            content: $("#popover-contents"),
            trigger: "click",
            placement: "left"
        }
      
     * <button class="btn-primary" type="button" xi-popover="options">Click Activated</button>
     * <div id="popover-contents">
            <p>This is the popover content</p>
        </div>
     */
    class PopoverDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Popup Menu directive.
     */
    interface IPopupMenuOptions {
        /**
         * Menu's ID Selector, or a jQuery object representing a menu.
         */
        menu?: string;
        /**
         * Trigger. Options: "click", "rightClick", "immediate".
         * Default value: "click"
         */
        trigger?: string;
        /**
         * Auto focus.
         * Default value: true
         */
        autofocus?: boolean;
        /**
         * Callback for open event
         */
        beforeOpen?: Function;
        /**
         * Mouse focus.
         * Default value: true
         */
        mouseFocus?: boolean;
        /**
         * Switches aria to use listbox construct instead of menu construct (internal)
         * Default value: false
         */
        ariaListbox?: boolean;
        /**
         * Can pass in the event object so you can do a right click with immediate
         */
        eventObj?: Object;
    }
    /**
     * Popup Menu Directive.
     */
    class PopupMenuDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Searchfield directive.
     */
    interface ISearchFieldOptions {
        /**
         * The data source, can be a url or an array.
         */
        source?: any;
        /**
         * Template as selector or full element. Use this to draw the contents of each
         * search result instead of the default draw routine.
         * Default template:
         * <li id="{{listItemId}}" {{#hasValue}}data-value="{{value}}"{{/hasValue}} role="listitem">
       *		<a href="#" tabindex="-1">
       *			<span>{{{label}}}</span>
       *		</a>
       * </li>
         */
        template?: string;
        /**
         *Callback function to use for handling all results
         */
        allResultsCallback?(result: any): void;
        /**
         * If true, the search input field will have an X icon to clear input
         * Default value: false
         */
        clearable?: boolean;
    }
    /**
     * Searchfield Directive.
     *
     * Suggests values in given data (source) that matches the input.
    *
     * Example:
     * scope["options"]: ISearchfieldOptions = { "source": ["Alpha", "Bravo"], "template": "#template" }
     * <input xi-searchfield="options" />
     */
    class SearchFieldDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
    * Represents the options for the Slider directive.
    */
    interface ISliderOptions {
        /**
         * Default slider position
         * Default value: [50]
         */
        value?: number[];
        /**
         * Minumum value of slider
         * Default value: 0
         */
        min?: number;
        /**
         * Maximum value of slider
         * Default value: 100
         */
        max?: number;
        /**
         * Use range
         * Default value: false
         */
        range?: boolean;
        /**
         * Slider moves in steps
         */
        step?: number;
        /**
         * "Sticky" tick positions of slider
         */
        ticks?: any[];
        /**
         * Content of tooltip for slider
         */
        tooltipContent?: string;
        /**
         * Persist the tooltip
         * Default value: false
         */
        persistTooltip?: boolean;
    }
    /**
     * Slider directive.
     *
     * Example:
     * scope["options"] = {	value: [1],	min: 0, max: 2, range: false,	step: 1,	ticks: [{ value: 0, description: "Hidden", color: "#ed1c24" },
     * { value: 1, description: "Read only", color: "#faa719" }, { value: 2, description: "Enabled", color: "#157a13" }] }
     * <input id="slider-example" xi-slider="options"/>
     */
    class SliderDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Spinbox Directive.
     *
     * Example:
     * <input xi-spinbox class="spinbox" min="-99" max="99" value="0" step="3" />
     *
     * Attributes: min, max, value (default), step
     * Supports xi-track-dirty
     */
    class SpinBoxDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Tabs directive.
     */
    interface ITabsOptions {
        /**
         * Tab Counts, set to true for counter in tab header.
         */
        tabCounts?: boolean;
        /**
         * Modal ID, if using the tabs directive within an xi-modal the ID of the modal must be provided.
         */
        modalId?: string;
        /**
         * Container element for the tabs
         */
        containerElement?: string;
        /**
         * To select other tab than the first as default (id of <li> tab element to be clicked initially)
         */
        tabToSelect?: string;
    }
    class TabsDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Textarea directive.
     */
    interface ITextAreaOptions {
        /**
         * Character counter (needs maxlength attribute set)
         * Default value: true
         */
        characterCounter?: boolean;
        /**
         * If the text area can be printed
         * Default value: true
         */
        printable?: boolean;
        /**
         * Text to append on remaining chars text
         */
        charRemainingText?: string;
        /**
         * Text to append on maximum chars text
        */
        charMaxText?: string;
    }
    /**
     * Textarea directive.
     *
     * Example:
     * <textarea xi-textarea type="text" maxlength="100"></textarea>
     */
    class TextAreaDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Time Picker directive.
     */
    interface ITimePickerOptions {
        /**
         * Minute Interval. Integer from 1 to 60.  Multiples of this value are
         * displayed as options in the minutes dropdown.
         * Default value: 5
         */
        minuteInterval?: number;
        /**
         * Mode. Options: "standard" or "range"
         * Default value: "standard"
         */
        mode?: string;
        /**
         * Round To Interval. If a non-matching minutes value is entered, rounds the
         * minutes value to the nearest interval when the field is blurred.
         * Default value: false
         */
        roundToInterval?: boolean;
        /**
         * Force Hour Mode. Can be used to force timepicker to use only 12-hour or 24-hour
         * display modes. Defaults to whatever the current Globalize locale requires if left undefined.
         * Options: "12" or "24".
         */
        forceHourMode?: string;
    }
    /**
     * Timepicker Directive.
     *
     * Provides a time picker.
     * Instead of providing av options object, the following attributes can be used:
     * data-minute-interval
     * data-force-hour-mode
     * data-round-to-interval
     *
     * Example:
     * scope["options"]: ITimepickerOptions = {
     *		minuteInterval: 5,
     *		forceHourMode: "24",
     *		roundToInterval: true
     *	};
     * <input xi-timepicker="options" class="timepicker">
     */
    class TimePickerDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the toolbar directive.
     */
    interface IToolbarOptions {
        /**
         * Always attemp to right align the toolbar
         */
        rightAligned?: boolean;
        /**
         * Total amount of buttons that can be present, not including the More button
         */
        maxVisibleButtons?: number;
    }
    /**
     * Toolbar directive.
     *
     * Example:
     * scope["options"] = {rightAligned: false, maxVisibleButtons: 5}
     * <div class="toolbar" xi-toolbar="options"> ... </div>
     */
    class ToolbarDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    interface ITooltipData extends JQuery {
        destroy(): void;
    }
    /**
    * Represents the options for the Tooltip & Popover directive.
    * Note* Unique id for the xi-about element is recommended, if two or more about dialogs are used
    */
    interface ITooltipOptions {
        /**
         * Can be a function or jQuery markup. Use for static content.
         */
        content?: any;
        /**
         * Supported: "click", "immediate", "hover"
         * Default value: "hover"
         */
        trigger?: string;
        /**
         * Placement has to be set to "right" for popovers. Can be "top", "left", "bottom", "right", "offset"
         * Default value: "top"
         */
        placement?: string;
        /**
         * How much room to leave
         * Default value: {top: 15, left: 0}
         */
        offset?: {
            top: number;
            left: number;
        };
        /**
         * Title for Infor Tips
         */
        title?: string;
        /**
         * Callback before showing the tooltip
         */
        beforeShow?: Function;
        /**
         * Force it to be a popover (no content)
         */
        popover?: any;
        /**
         * Add error classes
         * Default value: false
         */
        isError?: boolean;
        /**
         * ID selector for an alternate element to use to contain the tooltip classes
         */
        tooltipElement?: string;
        /**
         * Forces the tooltip to stay open in situations where it would normally close
         * Default value: false
         */
        keepOpen?: boolean;
    }
    /**
     * Tooltip Directive
     */
    class TooltipDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Track Dirty Directive.
     *
     * Indicates if an element is dirty.
     */
    class TrackDirtyDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Represents the options for the Validate directive.
     */
    interface IValidateOptions {
        /**
         * Validation type.
         */
        validation?: string;
        /**
         * Time format (set if validaton is "time"),
         * set to "HH" for 1-24 hours, leave out for 1-12 hours (AM/PM).
         */
        timeFormat?: string;
    }
    /**
     * Validation Directive.
     *
     * Validates input based on the options. Possible validations are "required", "date" and "time".
     * If validation is "time", the "timeFormat" option can be set.
     * Instead of providing av options object, the following attributes can be used:
     * data-validate
     * data-time-format
     *
     * Examples:
     * <input xi-validate="time" xi-time-format="HH"/>
     */
    class ValidateDirective {
        static add(m: ng.IModule): void;
    }
}
declare module xi {
    /**
     * Util class containing convenience methods related to SohoXi Controls.
     */
    class XiUtil {
        static getData<T extends JQuery>(element: JQuery, key: string): T;
    }
}
