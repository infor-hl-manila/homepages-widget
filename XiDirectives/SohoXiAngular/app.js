/// <reference path="sohoxi-angular.d.ts" />
var xi;
(function (xi) {
    var Test;
    (function (Test) {
        var TestDataCtrl = (function () {
            function TestDataCtrl(scope) {
                var _this = this;
                this.scope = scope;
                scope["xiTestTitle"] = "SoHo Xi Angular Directives";
                this.dditems = ["A", "B", "C"];
                this.ddmodel = this.dditems[0];
                // Xi About example
                this.aboutOptions = {
                    appName: "SoHo Xi directives",
                    productName: "Test page for directives",
                    version: "0.0.7",
                    useDefaultCopyright: true,
                    content: "<div><p>Test content</p></div>"
                };
                this.aboutOptions2 = {
                    appName: "Application name",
                    productName: "Product name",
                    version: "1.0.0",
                    useDefaultCopyright: true,
                    content: "<div><p>Another about dialog</p></div>"
                };
                // Xi Autocomplete example
                this.autocompleteOptions = {
                    source: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                };
                this.autocompleteOptionsPersons = {
                    source: [
                        { label: "Alex Mills", email: "alex.mills94@example.com", value: "0" },
                        { label: "Amy Brooks", email: "amy.brooks75@example.com", value: "1" },
                        { label: "Jessica Willis", email: "jessica.willis68@example.com", value: "2" },
                        { label: "Susan Wallace", email: "susan.wallace55@example.com", value: "3" },
                        { label: "John Green", email: "john.green11@example.com", value: "4" }
                    ],
                    template: '<script type="text/html">' +
                        '<li id="{{listItemId}}" {{#hasValue}} data-value="{{value}}" {{/hasValue}} role="listitem">' +
                        '<a href="#" tabindex="-1">' +
                        '<span class="display-value">{{& label}}</span>' +
                        '<small style="font-size: 12px !important; font-style: italic; margin-top: -3px; margin-bottom: 5px; display: block;">{{& email}}</small>' +
                        '</a></li></script>'
                };
                this.autocompleteOptionsPersons2 = {
                    source: [
                        { label: "Alex Mills", email: "alex.mills94@example.com", value: "0" },
                        { label: "Amy Brooks", email: "amy.brooks75@example.com", value: "1" },
                        { label: "Jessica Willis", email: "jessica.willis68@example.com", value: "2" },
                        { label: "Susan Wallace", email: "susan.wallace55@example.com", value: "3" },
                        { label: "John Green", email: "john.green11@example.com", value: "4" }
                    ]
                };
                this.applicationMenuOptions = { triggers: [$("#lm-appmenu-trigger")] };
                // Xi Busy example
                scope["isBusy"] = false;
                scope["isBusy2"] = false;
                // Xi Chart example
                scope["firstChartTitle"] = true;
                scope["chartData1"] = [{ data: [{ name: "A", value: 8 }, { name: "B", value: 10 }, { name: "C", value: 32 }, { name: "D", value: 6 }] }];
                scope["chartData2"] = [{ data: [{ name: "E", value: 15 }, { name: "F", value: 3 }, { name: "G", value: 10 }] }];
                scope["chartTypes"] = [{ name: "Pie", value: "pie" }, { name: "Bar", value: "bar" }, { name: "Donut", value: "donut" }, { name: "Column", value: "column" }];
                this.chartOptions = {
                    type: "pie",
                    dataset: scope["chartData1"]
                };
                // Xi Colorpicker example
                this.colorpickerOptions = { colors: [{ label: "white", value: "ffffff" }, { label: "black", value: "000000" }, { label: "azure", value: "5cc3fe" }] };
                // Xi Datagrid example
                scope["datagrid1"] = {
                    dataset: [
                        { name: "Name #1", age: 12, phone: "12345" },
                        { name: "Name #2", age: 22, phone: "1234567" },
                        { name: "Name #3", age: 32, phone: "1234589" }
                    ]
                };
                scope["datagrid2"] = {
                    dataset: [
                        { name: "OtherName #1", age: 42, phone: "52646" },
                        { name: "OtherName #2", age: 52, phone: "324234" },
                        { name: "OtherName #3", age: 62, phone: "111111" }
                    ]
                };
                this.datagridOptions = scope["datagrid1"];
                // Xi Datepicker example
                this.datepickerOptions = {
                    dateFormat: "YYYY/M/D"
                };
                // Xi Dropdown example
                scope["dropDownOptions"] = ["first", "second", "third", "fourth", "fifth", "sixth"];
                this.dropDownModel = scope["dropDownOptions"][1];
                // Xi Listview example
                scope["listviewData"] = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth"];
                this.listviewOptions = {
                    dataset: scope["listviewData"],
                    selectable: "multiple"
                };
                scope["listviewSearchOptions"] = [
                    "Contact sales representative with the updated purchase order.",
                    "Update pending quotes and send out again to customers.",
                    "Contact sales representative with the updated purchase order.",
                    "Create new order.",
                    "Contact representatives.",
                    "Finish sales order."
                ];
                // Xi Lookup example
                this.lookupOptions = {
                    field: "productId",
                    options: {
                        columns: [
                            { id: 'productId', name: 'Product Id', field: 'productId', width: 140 },
                            { id: 'productName', name: 'Product Name', sortable: false, field: 'productName', width: 250, formatter: window.Formatters.Hyperlink },
                            { id: 'activity', hidden: true, name: 'Activity', field: 'activity', width: 125 }
                        ],
                        dataset: [
                            { id: 1, productId: 2142201, productName: 'Compressor', activity: 'Assemble Paint' },
                            { id: 2, productId: 2241202, productName: 'Different Compressor', activity: 'Inspect and Repair' },
                            { id: 3, productId: 2342203, productName: 'Third Compressor', activity: 'Inspect and Repair' }
                        ],
                        selectable: 'single'
                    }
                };
                // Xi Mask example
                this.maskCurrencyOptions = {
                    mode: "number",
                    showCurrency: "currency",
                    pattern: "###.00"
                };
                this.maskPhoneOptions = {
                    mode: "group",
                    pattern: "(###) ###-####"
                };
                this.maskDateOptions = {
                    mode: "date",
                    pattern: "##/##/####"
                };
                this.maskThousandsOptions = {
                    mode: "number",
                    pattern: "#######",
                    thousands: true
                };
                this.maskMustCompleteOptions = {
                    mode: "number",
                    pattern: "####",
                    mustComplete: true
                };
                this.maskCustDefOptions = {
                    mode: "number",
                    pattern: "####",
                    definitions: {
                        "#": /[0-4]/
                    }
                };
                // Xi Multiselect example
                scope["multiselectFruits"] = ["apple", "banana", "orange"];
                scope["multiselectFruits2"] = ["pear", "pinapple", "mango"];
                scope["multiselectModel"] = ["banana"];
                scope["multiselectModel2"] = ["mango"];
                this.multiselectOptions = { maxSelected: 2 };
                // Xi Popupmenu example 
                this.popupmenuOptions = {
                    trigger: "rightClick",
                    menu: "action-popupmenu2"
                };
                // Xi Searchfield example
                var self = this;
                this.searchfieldOptions = {
                    source: [{ label: "Alex", value: 1, email: "alex@test.com" }, { label: "Adam", value: 2, email: "adam@test.com" }, { label: "Albert", value: 3, email: "albert@test.com" }, { label: "Anne", value: 4, email: "anne@test.com" }],
                    template: '<script type="text/html">' +
                        '<li id="{{listItemId}}" {{#hasValue}} data-value="{{value}}" {{/hasValue}} role="listitem">' +
                        '<a href="#" tabindex="-1">' +
                        '<span class="display-value">{{& label}}</span>' +
                        '<small style="font-size: 12px !important; font-style: italic; margin-top: -3px; margin-bottom: 5px; display: block;">{{& email}}</small>' +
                        '</a></li></script>',
                    allResultsCallback: function (result) { self.testAllResults(result); }
                };
                this.searchfieldOptions2 = {
                    source: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    clearable: true
                };
                this.searchfieldOptions3 = {
                    source: [{ label: "Alex", value: 1, phone: 12345, country: "Sweden" }, { label: "Adam", value: 2, phone: 54321, country: "Sweden" }, { label: "Albert", value: 3, phone: 523525, country: "Sweden" }, { label: "Anne", value: 4, phone: 7232, country: "USA" }]
                };
                // Xi Slider example
                this.sliderOptions = {
                    value: [1],
                    min: 0,
                    max: 2,
                    range: false,
                    step: 1,
                    ticks: [
                        { value: 0, description: "Hidden", color: "#ed1c24" },
                        { value: 1, description: "Read only", color: "#faa719" },
                        { value: 2, description: "Enabled", color: "#157a13" }
                    ],
                    tooltipContent: undefined,
                    persistTooltip: false
                };
                // Xi Textarea example
                this.textareaOptions = {
                    characterCounter: false
                };
                // Xi Timeline example (only uses markup)
                scope["timeline"] = [
                    { heading: "PO Created / Unreleased", subheading: "By: Buying Department | Sallie Langie", date: "January 23, 2015", time: "1:15 pm", status: "done" },
                    { heading: "PO Released", subheading: "By: Buying Department | Sallie Langie", date: "January 23, 2015", time: "1:16 pm", status: "done" },
                    { heading: "PO Accepted", subheading: "By: Buying Department | Sallie Langie", date: "January 23, 2015", time: "1:17 pm", status: "processing" },
                    { heading: "3 Items in Progress" },
                    { heading: "Closed", subheading: "By: Buying Department | Sallie Langie", date: "January 23, 2015", time: "ESTIMATED", dueDate: true }
                ];
                // Xi Timepicker example
                this.timepickerOptions = {
                    minuteInterval: 5,
                    forceHourMode: "24",
                    roundToInterval: true
                };
                // Xi Toolbar example
                scope["toolbarBtnText"] = "Second";
                // Xi Tooltip example
                scope["tooltip"] = "Scope tooltip text";
                // Xi Validate example
                this.validateRequiredOptions = {
                    validation: "required"
                };
                this.validateTimeOptions = {
                    validation: "time",
                    timeFormat: "HH"
                };
                this.validateDateOptions = {
                    validation: "date required"
                };
                // ng-include listeners
                // Since example templates are loaded with ng-include, listener on include content loaded
                // is required to know when the below elements being selected are available in DOM
                scope.$on('$includeContentLoaded', function (event, url) {
                    if (url === "directive-templates/searchfield.html") {
                        $("#searchfield1").on("selected", function (event, target, object) {
                            scope.$apply(function () {
                                scope["searchfieldModel"] = object;
                            });
                        });
                    }
                    else if (url === "directive-templates/popover.html") {
                        _this.popoverOptions = {
                            content: $("#popover-contents"),
                            trigger: "click",
                            placement: "left"
                        };
                    }
                    else if (url === "directive-templates/listview.html") {
                        $("#form-searchfield").on("selected", function (event, target, object) {
                            scope.$apply(function () {
                                scope["searchForm"] = angular.copy(object);
                            });
                        });
                    }
                });
            }
            /* Methods used in examples */
            TestDataCtrl.prototype.firstDropdownChange = function () {
                // UPDATE OPTIONS IN SECOND DROPDOWN BASED ON CHOICE IN FIRST 
                this.ddmodel2 = "";
                this.dditems2 = [this.ddmodel + "-A", this.ddmodel + "-B", this.ddmodel + "-C"];
                this.ddmodel2 = this.dditems2[0];
                this.ddmodel3 = "";
                this.dditems3 = [];
            };
            TestDataCtrl.prototype.secondDropdownChange = function () {
                // UPDATE OPTIONS IN THIRD DROPDOWN BASED ON CHOICE IN SECOND
                this.ddmodel3 = "";
                this.dditems3 = [this.ddmodel2 + "-A", this.ddmodel2 + "-B", this.ddmodel2 + "-C"];
                this.ddmodel3 = this.dditems3[0];
            };
            TestDataCtrl.prototype.ddReset = function () {
                // CLEAR ALL MODELS
                this.ddmodel = "";
                this.ddmodel2 = "";
                this.ddmodel3 = "";
                // CLEAR DROPDOWN OPTIONS FOR SECOND AND THIRD
                this.dditems2 = [];
                this.dditems3 = [];
            };
            // Method to test callback property of xi searchfield options  
            TestDataCtrl.prototype.testAllResults = function (result) {
                $("body")["toast"]({ title: "'Show all results' was clicked", message: "Result sent: " + result, timeout: 3000 });
            };
            TestDataCtrl.prototype.testDatagrid = function (e, args) {
                console.log('link was clicked', args);
            };
            // Switch datagrid options to demonstrate that the directive can act on data update 
            TestDataCtrl.prototype.switchDatagrid = function () {
                if (this.datagridOptions === this.scope["datagrid1"]) {
                    this.datagridOptions = this.scope["datagrid2"];
                }
                else {
                    this.datagridOptions = this.scope["datagrid1"];
                }
            };
            // Switch chart options to demonstrate that the directive can act on data update 
            TestDataCtrl.prototype.switchChartData = function () {
                if (this.chartOptions.dataset === this.scope["chartData1"]) {
                    this.chartOptions.dataset = this.scope["chartData2"];
                    this.scope["firstChartTitle"] = false;
                }
                else {
                    this.chartOptions.dataset = this.scope["chartData1"];
                    this.scope["firstChartTitle"] = true;
                }
            };
            // Demonstrate how to get selected items in xi listview, using the API of the control
            TestDataCtrl.prototype.removeSelected = function () {
                var listviewApi = $("#multiselect-listview").data("listview");
                var selectedItems = listviewApi["selectedItems"];
                var removeIndex;
                for (var i = selectedItems.length - 1; i >= 0; i--) {
                    removeIndex = selectedItems[i].attr("aria-posinset") - 1;
                    if (removeIndex !== -1) {
                        this.scope["listviewData"].splice(removeIndex, 1);
                    }
                }
            };
            // Add an option to dropdown to demonstrate that the directive can act on data update 
            TestDataCtrl.prototype.addToDropDown = function () {
                this.scope["dropDownOptions"].push("seventh");
            };
            TestDataCtrl.prototype.changeDropDownValue = function () {
                this.dropDownModel = this.scope["dropDownOptions"][2];
            };
            // Add an option to multiselect to demonstrate that the directive can act on data update 
            TestDataCtrl.prototype.addToMultiSelect = function () {
                this.scope["multiselectFruits"].push("papaya");
            };
            // Add an option to colorpicker options to demonstrate that the directive can act on data update 
            TestDataCtrl.prototype.addToColorPicker = function () {
                this.colorpickerOptions.colors.push({
                    label: "yellow",
                    value: "ffff00"
                });
            };
            TestDataCtrl.add = function (ngModule) {
                ngModule.controller("xiTestDataCtrl", TestDataCtrl);
            };
            return TestDataCtrl;
        }());
        TestDataCtrl.$inject = ["$scope"];
        var m = angular.module("sohoxitest", ["sohoxi"]);
        TestDataCtrl.add(m);
    })(Test = xi.Test || (xi.Test = {}));
})(xi || (xi = {}));
//# sourceMappingURL=app.js.map