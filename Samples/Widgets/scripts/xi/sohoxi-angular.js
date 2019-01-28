var xi;
(function (xi) {
    /**
     * About Directive.
     *
     * Shows a modal dialog which contains information typical for about dialogs
     *
     * Example:
     * scope["options"]: IXiAboutOptions = { appName: "SoHo Xi Test", productName: "Test page for directives", version: "0.0.7", useDefaultCopyright: true,	content: "<div><p>Additional content goes here</p></div>" }
     * <button class="btn about" id="about-dialog" xi-about="options">Open about modal</button>
     */
    var AboutDirective = /** @class */ (function () {
        function AboutDirective() {
        }
        AboutDirective.add = function (m) {
            var name = "xiAbout";
            m.directive(name, ["$compile", function (compile) {
                    return {
                        scope: false,
                        restrict: "A",
                        link: function (scope, element, attributes) {
                            var id = attributes["id"];
                            var options = attributes[name];
                            var unbindWatcher = scope.$watch(options, function (newOptions) {
                                if (newOptions) {
                                    element.about(newOptions);
                                    // Replace the option specified additional content with a compiled angular version
                                    if (newOptions.content) {
                                        xi.XiUtil.getData(element, "about").modal.one("open", function () {
                                            $("body").find("#about-modal" + id).find(".additional-content").html(compile(newOptions.content)(scope));
                                            $("body").find("#about-modal" + id).find(".modal-body").css({ "max-height": "350px", "overflow-y": "auto" });
                                        });
                                    }
                                }
                                else {
                                    element.about();
                                }
                                // Support more than one about modal on the same page
                                xi.XiUtil.getData(element, "about").modal.attr("id", "about-modal" + id);
                                element.attr("data-modal", "about-modal" + id);
                            });
                            // Tear down
                            element.on("$destroy", function () {
                                var modalData = xi.XiUtil.getData(element, "modal");
                                if (modalData) {
                                    modalData.destroy();
                                }
                                unbindWatcher();
                            });
                        }
                    };
                }]);
        };
        return AboutDirective;
    }());
    xi.AboutDirective = AboutDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var AutoCompleteDirective = /** @class */ (function () {
        function AutoCompleteDirective() {
        }
        AutoCompleteDirective.add = function (m) {
            var name = "xiAutocomplete";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watchCollection(options, function (newOptions) {
                            if (newOptions) {
                                // Set the data-autocomplete attribute to source (external in options object)
                                element.attr("data-autocomplete", "source");
                                element.autocomplete(newOptions);
                            }
                            else {
                                element.autocomplete();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var autoCompleteData = xi.XiUtil.getData(element, "autocomplete");
                            if (autoCompleteData) {
                                autoCompleteData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return AutoCompleteDirective;
    }());
    xi.AutoCompleteDirective = AutoCompleteDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var BusyDirective = /** @class */ (function () {
        function BusyDirective() {
        }
        BusyDirective.add = function (m) {
            var name = "xiBusy";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        element.addClass("busy");
                        var options = {};
                        var delay = attributes["busyDelay"];
                        if (delay) {
                            options.delay = delay;
                        }
                        element.busyindicator(options);
                        var expression = attributes[name];
                        var isRunning = false;
                        var unbindWatcher = scope.$watch(expression, function (newValue, oldValue) {
                            if (newValue && !isRunning) {
                                isRunning = true;
                                element.trigger("start.busyindicator");
                            }
                            else if (!newValue && isRunning) {
                                isRunning = false;
                                element.trigger("complete.busyindicator");
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var busyData = xi.XiUtil.getData(element, "busyindicator");
                            if (busyData) {
                                busyData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return BusyDirective;
    }());
    xi.BusyDirective = BusyDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Button Directive.
     *
     * Example:
     * <button xi-button class="btn-primary" type="button">Action</button>
     */
    var ButtonDirective = /** @class */ (function () {
        function ButtonDirective() {
        }
        ButtonDirective.add = function (m) {
            var name = "xiButton";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element) {
                        element.button();
                    }
                };
            });
        };
        return ButtonDirective;
    }());
    xi.ButtonDirective = ButtonDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Chart Directive.
     *
     * Example:
     * scope["options"] = { type: "pie", dataset: [ {data: [{name: "first", value: 10},{name: "second", value: 4}, {name: "third", value: 15 }]}]}
     * <div xi-chart="options"></div>
     */
    var ChartDirective = /** @class */ (function () {
        function ChartDirective() {
        }
        ChartDirective.add = function (m) {
            var name = "xiChart";
            m.directive(name, function () {
                return {
                    scope: false,
                    link: function (scope, element, attributes) {
                        var originalOptions = attributes[name];
                        var unbindWatcher = scope.$watchCollection(originalOptions, function (newOptions) {
                            if (newOptions) {
                                // Since the control add data to the array we must copy before calling the plugin
                                var options = angular.copy(newOptions);
                                // Clean up and re-add classes if chart type is changed to get correct layout 
                                element.removeClass();
                                element.addClass("chart-container");
                                element.parent().children(".chart-legend").remove();
                                element.chart(options);
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return ChartDirective;
    }());
    xi.ChartDirective = ChartDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Colorpicker Directive.
     *
     * Provides a color picker consisting of colors specified by the IColorpickerOptions option, or default colors if not specified.
     * Use the value attribute to set a default color.
     * Example:
     * scope["options"] = { colors: [{label: "white", value: "ffffff" },{label: "black", value: "000000"}] }
     * <input value="#ffffff" xi-colorpicker="colors" />
     */
    var ColorPickerDirective = /** @class */ (function () {
        function ColorPickerDirective() {
        }
        ColorPickerDirective.add = function (m) {
            var name = "xiColorpicker";
            m.directive(name, ["$parse", function ($parse) {
                    return {
                        scope: false,
                        restrict: "A",
                        require: "?ngModel",
                        link: function (scope, element, attributes, ngModel) {
                            // Save selected/default color then trigger change so control updates
                            var selectedColor = element.val();
                            var options = attributes[name];
                            var api;
                            var unbindWatcher = scope.$watch(options, function (newOptions) {
                                if (newOptions) {
                                    element.colorpicker(newOptions);
                                }
                                else {
                                    element.colorpicker();
                                }
                                api = xi.XiUtil.getData(element, "colorpicker");
                                if (ngModel) {
                                    // Watch ng-model and update element value on change
                                    scope.$watch(attributes["ngModel"], function (color) {
                                        // Added additional condition to solve faulty double $watch trigger in Safari
                                        if (color && color.length > 0 && color !== selectedColor && ("#" + color) !== selectedColor) {
                                            element.val(color);
                                            if (api) {
                                                api.setColor(color);
                                            }
                                            selectedColor = color;
                                        }
                                    });
                                    element.on("selected.colorpicker", function (e, item) {
                                        scope.$apply(function () {
                                            $parse(attributes["ngModel"]).assign(scope, "#" + item.data("value"));
                                        });
                                    });
                                }
                            });
                            // Tear down
                            element.on("$destroy", function () {
                                if (api) {
                                    element.off("change");
                                    element.off("selected.colorpicker");
                                    api.destroy();
                                }
                                unbindWatcher();
                            });
                        }
                    };
                }]);
        };
        return ColorPickerDirective;
    }());
    xi.ColorPickerDirective = ColorPickerDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Standard Control Directive.
     *
     * Used to call a standard initialize method for the specified SohoXi Control.
     * Only supports simple options with no watchers.
     */
    var ControlDirective = /** @class */ (function () {
        function ControlDirective() {
        }
        ControlDirective.add = function (m) {
            var name = "xiControl";
            m.directive(name, ["$log", function (log) {
                    return {
                        scope: false,
                        restrict: "A",
                        link: function (scope, element, attributes) {
                            var functionName = attributes[name];
                            if (!functionName) {
                                return;
                            }
                            var optionsAttr = attributes['xiControlOptions'];
                            var options = optionsAttr ? scope.$eval(optionsAttr) : null;
                            try {
                                setTimeout(function () {
                                    if (options) {
                                        $(element)[functionName](options);
                                    }
                                    else {
                                        $(element)[functionName]();
                                    }
                                }, 1);
                            }
                            catch (ex) {
                                log.error(name + " Failed to call " + functionName, ex);
                            }
                            scope.$on("$destroy", function () {
                                var data = xi.XiUtil.getData(element, functionName);
                                if (data && typeof data.destroy === "function") {
                                    try {
                                        data.destroy();
                                    }
                                    catch (exc) {
                                        log.error(name + " Failed to destroy " + functionName, exc);
                                    }
                                }
                            });
                        }
                    };
                }]);
        };
        return ControlDirective;
    }());
    xi.ControlDirective = ControlDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Data Grid Directive
     *
     * Example:
     *
     * scope["options"] = { dataset: [{ name: "Name #1", age: 12, phone: "12345" }, { name: "Name #2", age: 22, phone: "1234567" }, { name: "Name #3", age: 32, phone: "1234589" }]}
     * <div xi-datagrid="ctrl.options"></div>
     */
    var DataGridDirective = /** @class */ (function () {
        function DataGridDirective() {
        }
        DataGridDirective.add = function (m) {
            var name = "xiDatagrid";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = scope.$eval(attributes[name]);
                        if (options.dataset) {
                            if (!options.columns) {
                                // Generate "simple" default columns based on dataset properties, if no columns provided
                                var columns = [];
                                // ReSharper disable once MissingHasOwnPropertyInForeach
                                for (var propertyName in options.dataset[0]) {
                                    var columnName = propertyName[0].toUpperCase() + propertyName.substring(1);
                                    var column = { id: propertyName, name: columnName, field: propertyName, width: 150 };
                                    columns.push(column);
                                }
                                options.columns = columns;
                            }
                            element.datagrid(options);
                            var api_1 = xi.XiUtil.getData(element, "datagrid");
                            if (options.sortFunction) {
                                api_1.sortFunction = options.sortFunction;
                            }
                            var unbindWatcher_1 = scope.$watch(attributes[name], function (newOptions, oldOptions) {
                                if (newOptions.dataset !== oldOptions.dataset) {
                                    api_1.loadData(newOptions.dataset);
                                }
                            }, true);
                            // Tear down
                            element.on("$destroy", function () {
                                if (api_1) {
                                    api_1.destroy();
                                }
                                unbindWatcher_1();
                            });
                        }
                    }
                };
            });
        };
        return DataGridDirective;
    }());
    xi.DataGridDirective = DataGridDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Datepicker directive.
     *
     * Example:
     * scope["options"] = {	dateFormat: "YYYY/M/D" }
     * <input xi-datepicker="options" id="date-field" class="datepicker" type="text"/>
     */
    var DatePickerDirective = /** @class */ (function () {
        function DatePickerDirective() {
        }
        DatePickerDirective.add = function (m) {
            var name = "xiDatepicker";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.datepicker(newOptions);
                            }
                            else {
                                element.datepicker();
                            }
                        });
                        element.on("$destroy", function () {
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return DatePickerDirective;
    }());
    xi.DatePickerDirective = DatePickerDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Dropdown Directive.
     *
     * Example:
     * scope["datas"] = [{ value: 1, label: "first" }, { value: 2, label: "second" }]
     *	<select id="dropdown-1" ng-model="modelVal" ng-options="data.label as data.value for data in datas" class="dropdown" xi-drop-down></select>
     */
    var DropDownDirective = /** @class */ (function () {
        function DropDownDirective() {
        }
        DropDownDirective.add = function (m) {
            var name = "xiDropDown";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var api;
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            setTimeout(function () {
                                if (newOptions) {
                                    element.dropdown(newOptions);
                                }
                                else {
                                    element.dropdown();
                                }
                                api = xi.XiUtil.getData(element, "dropdown");
                                api.setValue();
                            }, 100);
                        }, true);
                        var modelWatcher;
                        var modelAttr = attributes["ngModel"];
                        if (modelAttr) {
                            modelWatcher = scope.$watch(modelAttr, function () {
                                if (api) {
                                    setTimeout(function () {
                                        api.setValue();
                                    }, 100);
                                }
                            });
                        }
                        var disabledWatcher;
                        var disabledAttr = attributes["ngDisabled"];
                        if (disabledAttr) {
                            disabledWatcher = scope.$watch(disabledAttr, function (newValue) {
                                if (api) {
                                    if (newValue === false) {
                                        api.enable();
                                    }
                                    else if (newValue === true) {
                                        api.disable();
                                    }
                                }
                            });
                        }
                        // Tear down
                        element.on("$destroy", function () {
                            if (api) {
                                api.destroy();
                            }
                            unbindWatcher();
                            if (modelWatcher) {
                                modelWatcher();
                            }
                            if (disabledWatcher) {
                                disabledWatcher();
                            }
                        });
                    }
                };
            });
        };
        return DropDownDirective;
    }());
    xi.DropDownDirective = DropDownDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Editor Directive.
     *
     * Example:
     * scope["options"]: IEditorOptions = { anchor: { url: "https://www.example.com, class: "hyperlink", target: "_blank" } };
     * <div class="editor" id="my-editor" role="textbox" aria-multiline="true" aria-label="notes" xi-editor></div>
     */
    var EditorDirective = /** @class */ (function () {
        function EditorDirective() {
        }
        EditorDirective.add = function (m) {
            var name = "xiEditor";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.editor(newOptions);
                            }
                            else {
                                element.editor();
                            }
                        });
                        element.on("$destroy", function () {
                            var editorData = xi.XiUtil.getData(element, "editor");
                            if (editorData) {
                                editorData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return EditorDirective;
    }());
    xi.EditorDirective = EditorDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var FileUploadDirective = /** @class */ (function () {
        function FileUploadDirective() {
        }
        FileUploadDirective.add = function (m) {
            var name = "xiFileupload";
            m.directive(name, ["$parse", function ($parse) {
                    return {
                        scope: false,
                        restrict: "A",
                        link: function (scope, element, attributes) {
                            var expression = attributes[name];
                            var parent = element.parent(".fileupload");
                            if (!expression || parent.length === 0) {
                                // Incorrect setup
                                return;
                            }
                            element.bind("change.fileupload", function () {
                                $parse(expression).assign(scope, element[0]["files"]);
                                scope.$apply();
                            });
                            // Timeout to let the label render
                            window.setTimeout(function () {
                                parent.fileupload();
                            }, 1);
                            parent.on("$destroy", function () {
                                var fileUploadData = xi.XiUtil.getData(parent, "fileupload");
                                if (fileUploadData) {
                                    fileUploadData.destroy();
                                }
                            });
                        }
                    };
                }]);
        };
        return FileUploadDirective;
    }());
    xi.FileUploadDirective = FileUploadDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var ListViewDirective = /** @class */ (function () {
        function ListViewDirective() {
        }
        ListViewDirective.add = function (m) {
            var name = "xiListview";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var toolbar = element.closest(".widget, .card").find(".listview-toolbar");
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.listview(newOptions);
                                var listViewData = xi.XiUtil.getData(element, "listview");
                                listViewData.refresh();
                                toolbar.removeClass("is-visible").one("animateClosedComplete", function (e) {
                                    e.stopPropagation();
                                    toolbar.css("display", "none");
                                })["animateClosed"]();
                                angular.forEach(listViewData.selectedItems, function (selected) {
                                    selected.removeClass();
                                });
                            }
                            else {
                                element.listview();
                            }
                        }, true);
                        // Tear down
                        element.on("$destroy", function () {
                            var listViewData = xi.XiUtil.getData(element, "listview");
                            if (listViewData) {
                                listViewData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return ListViewDirective;
    }());
    xi.ListViewDirective = ListViewDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var LookupDirective = /** @class */ (function () {
        function LookupDirective() {
        }
        LookupDirective.add = function (m) {
            var name = "xiLookup";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.lookup(newOptions);
                            }
                            else {
                                element.lookup();
                            }
                        }, true);
                        element.on("$destroy", function () {
                            var lookupData = xi.XiUtil.getData(element, "lookup");
                            if (lookupData) {
                                lookupData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return LookupDirective;
    }());
    xi.LookupDirective = LookupDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var MaskDirective = /** @class */ (function () {
        function MaskDirective() {
        }
        MaskDirective.add = function (m) {
            var name = "xiMask";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                // Set attributes and initialize control with options object
                                if (newOptions.mode) {
                                    element.attr("data-mask-mode", newOptions.mode);
                                }
                                if (newOptions.thousands) {
                                    element.attr("data-thousands", String(newOptions.thousands));
                                }
                                if (newOptions.mustComplete) {
                                    element.attr("data-must-complete", String(newOptions.mustComplete));
                                }
                                if (newOptions.showCurrency) {
                                    element.attr("data-show-currency", String(newOptions.showCurrency));
                                }
                                element.mask(newOptions);
                            }
                            else {
                                // Initiate control without options object
                                element.mask();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var maskData = xi.XiUtil.getData(element, "mask");
                            if (maskData) {
                                maskData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return MaskDirective;
    }());
    xi.MaskDirective = MaskDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Multiselect Directive
     *
     * Provides multiselection.
     * Note that the element must have an ID.
     */
    var MultiSelectDirective = /** @class */ (function () {
        function MultiSelectDirective() {
        }
        MultiSelectDirective.add = function (m) {
            var name = "xiMultiselect";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        // ID is required
                        if (!attributes["id"]) {
                            return;
                        }
                        var api;
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            // Set selected after binding
                            setTimeout(function () {
                                if (newOptions) {
                                    element.multiselect(newOptions);
                                }
                                else {
                                    element.multiselect();
                                }
                                api = xi.XiUtil.getData(element, "dropdown");
                            }, 100);
                        });
                        var modelWatcher;
                        var modelAttr = attributes["ngModel"];
                        if (modelAttr) {
                            modelWatcher = scope.$watch(modelAttr, function () {
                                if (api) {
                                    setTimeout(function () {
                                        api.setValue();
                                    }, 100);
                                }
                            });
                        }
                        var disabledWatcher;
                        var disabledAttr = attributes["ngDisabled"];
                        if (disabledAttr) {
                            disabledWatcher = scope.$watch(disabledAttr, function (newValue) {
                                if (api) {
                                    if (newValue === false) {
                                        api.enable();
                                    }
                                    else if (newValue === true) {
                                        api.disable();
                                    }
                                }
                            });
                        }
                        // Tear down
                        element.on("$destroy", function () {
                            var multiSelectApi = xi.XiUtil.getData(element, "multiselect");
                            if (multiSelectApi) {
                                multiSelectApi.destroy();
                            }
                            unbindWatcher();
                            if (modelWatcher) {
                                modelWatcher();
                            }
                            if (disabledWatcher) {
                                disabledWatcher();
                            }
                        });
                    }
                };
            });
        };
        return MultiSelectDirective;
    }());
    xi.MultiSelectDirective = MultiSelectDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective() {
        }
        PopoverDirective.add = function (m) {
            var name = "xiPopover";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var unbindWatcher = scope.$watch(attributes[name], function (newValue) {
                            if (newValue) {
                                if (!newValue.placement) {
                                    newValue.placement = "right";
                                }
                                element.popover(newValue);
                            }
                            else {
                                return;
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var tooltipData = xi.XiUtil.getData(element, "tooltip");
                            if (tooltipData) {
                                tooltipData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return PopoverDirective;
    }());
    xi.PopoverDirective = PopoverDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Popup Menu Directive.
     */
    var PopupMenuDirective = /** @class */ (function () {
        function PopupMenuDirective() {
        }
        PopupMenuDirective.add = function (m) {
            var name = "xiPopupmenu";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options;
                        var unbindWatcher = scope.$watch(attributes[name], function (newOptions) {
                            options = newOptions;
                            // Init popup menu plugin. The timeout allows angular bindings to be evaluated
                            window.setTimeout(function () {
                                if (options) {
                                    element.popupmenu(options);
                                }
                                else {
                                    element.popupmenu();
                                }
                            }, 1);
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var popupMenuData = xi.XiUtil.getData(element, "popupmenu");
                            if (popupMenuData) {
                                popupMenuData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return PopupMenuDirective;
    }());
    xi.PopupMenuDirective = PopupMenuDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Searchfield Directive.
     *
     * Suggests values in given data (source) that matches the input.
    *
     * Example:
     * scope["options"]: ISearchfieldOptions = { "source": ["Alpha", "Bravo"], "template": "#template" }
     * <input xi-searchfield="options" />
     */
    var SearchFieldDirective = /** @class */ (function () {
        function SearchFieldDirective() {
        }
        SearchFieldDirective.add = function (m) {
            var name = "xiSearchfield";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                // Set the data-autocomplete attribute to source (external in options object)
                                element.attr("data-autocomplete", "source");
                                element.searchfield(newOptions);
                            }
                            else {
                                element.searchfield();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var searchFieldData = xi.XiUtil.getData(element, "searchfield");
                            if (searchFieldData) {
                                searchFieldData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return SearchFieldDirective;
    }());
    xi.SearchFieldDirective = SearchFieldDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Slider directive.
     *
     * Example:
     * scope["options"] = {	value: [1],	min: 0, max: 2, range: false,	step: 1,	ticks: [{ value: 0, description: "Hidden", color: "#ed1c24" },
     * { value: 1, description: "Read only", color: "#faa719" }, { value: 2, description: "Enabled", color: "#157a13" }] }
     * <input id="slider-example" xi-slider="options"/>
     */
    var SliderDirective = /** @class */ (function () {
        function SliderDirective() {
        }
        SliderDirective.add = function (m) {
            var name = "xiSlider";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.slider(newOptions);
                            }
                            else {
                                element.slider();
                            }
                        });
                        element.on("$destroy", function () {
                            var sliderData = xi.XiUtil.getData(element, "slider");
                            if (sliderData) {
                                sliderData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return SliderDirective;
    }());
    xi.SliderDirective = SliderDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Spinbox Directive.
     *
     * Example:
     * <input xi-spinbox class="spinbox" min="-99" max="99" value="0" step="3" />
     *
     * Attributes: min, max, value (default), step
     * Supports xi-track-dirty
     */
    var SpinBoxDirective = /** @class */ (function () {
        function SpinBoxDirective() {
        }
        SpinBoxDirective.add = function (m) {
            var name = "xiSpinbox";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element) {
                        element.spinbox();
                        // Tear down
                        element.on("$destroy", function () {
                            var spinBoxData = xi.XiUtil.getData(element, "spinbox");
                            if (spinBoxData) {
                                spinBoxData.destroy();
                            }
                        });
                    }
                };
            });
        };
        return SpinBoxDirective;
    }());
    xi.SpinBoxDirective = SpinBoxDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    var TabsDirective = /** @class */ (function () {
        function TabsDirective() {
        }
        TabsDirective.add = function (m) {
            var name = "xiTabs";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                if (newOptions.modalId) {
                                    var tabToFocus_1;
                                    var modalElement_1 = $("#" + newOptions.modalId);
                                    // Force recalculation of modal size
                                    modalElement_1.addClass("hidden");
                                    modalElement_1.one("open", function () {
                                        modalElement_1.removeClass("hidden");
                                        element.tabs(newOptions);
                                        xi.XiUtil.getData(modalElement_1, "modal").resize();
                                        setTimeout(function () {
                                            tabToFocus_1 = modalElement_1.find(":focusable:not(.searchfield):first");
                                            if (tabToFocus_1.length) {
                                                tabToFocus_1.focus();
                                            }
                                            if (newOptions.tabToSelect) {
                                                var tab = modalElement_1.find("li" + newOptions.tabToSelect);
                                                if (tab.length) {
                                                    tab.click();
                                                }
                                            }
                                        }, 10);
                                    });
                                }
                                else {
                                    element.tabs(newOptions);
                                }
                            }
                            else {
                                element.tabs();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var tabData = xi.XiUtil.getData(element, "tabs");
                            if (tabData) {
                                tabData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return TabsDirective;
    }());
    xi.TabsDirective = TabsDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Textarea directive.
     *
     * Example:
     * <textarea xi-textarea type="text" maxlength="100"></textarea>
     */
    var TextAreaDirective = /** @class */ (function () {
        function TextAreaDirective() {
        }
        TextAreaDirective.add = function (m) {
            var name = "xiTextarea";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            window.setTimeout(function () {
                                if (newOptions) {
                                    element.textarea(newOptions);
                                }
                                else {
                                    element.textarea();
                                }
                            }, 1);
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var textAreaData = xi.XiUtil.getData(element, "textarea");
                            if (textAreaData) {
                                textAreaData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return TextAreaDirective;
    }());
    xi.TextAreaDirective = TextAreaDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var TimePickerDirective = /** @class */ (function () {
        function TimePickerDirective() {
        }
        TimePickerDirective.add = function (m) {
            var name = "xiTimepicker";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.timepicker(newOptions);
                            }
                            else {
                                element.timepicker();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var timePickerData = xi.XiUtil.getData(element, "timepicker");
                            if (timePickerData) {
                                timePickerData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return TimePickerDirective;
    }());
    xi.TimePickerDirective = TimePickerDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Toolbar directive.
     *
     * Example:
     * scope["options"] = {rightAligned: false, maxVisibleButtons: 5}
     * <div class="toolbar" xi-toolbar="options"> ... </div>
     */
    var ToolbarDirective = /** @class */ (function () {
        function ToolbarDirective() {
        }
        ToolbarDirective.add = function (m) {
            var name = "xiToolbar";
            m.directive(name, function () {
                return {
                    replace: true,
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            if (newOptions) {
                                element.toolbar(newOptions);
                            }
                            else {
                                element.toolbar();
                            }
                        });
                        element.on("$destroy", function () {
                            var toolbarData = xi.XiUtil.getData(element, "toolbar");
                            if (toolbarData) {
                                toolbarData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return ToolbarDirective;
    }());
    xi.ToolbarDirective = ToolbarDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Tooltip Directive
     */
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective() {
        }
        TooltipDirective.add = function (m) {
            var name = "xiTooltip";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var isInstantiated = false;
                        var unbindWatcher = scope.$watch(attributes[name], function (newValue) {
                            if (typeof newValue === "string") {
                                if (newValue.length === 0) {
                                    // Empty tooltips should not be shown so destroy the plugin
                                    if (isInstantiated) {
                                        xi.XiUtil.getData(element, "tooltip").destroy();
                                        isInstantiated = false;
                                    }
                                    return;
                                }
                                else {
                                    // Instantiate plugin with tooltip value
                                    /* istanbul ignore next */
                                    element.tooltip({
                                        content: function () { return newValue; }
                                    });
                                    isInstantiated = true;
                                }
                            }
                            else if (typeof newValue === "undefined" || newValue === null) {
                                // Empty tooltips should not be shown so destroy the plugin
                                if (isInstantiated) {
                                    xi.XiUtil.getData(element, "tooltip").destroy();
                                    isInstantiated = false;
                                }
                                return;
                            }
                            else {
                                // Instantiate plugin with tooltip value
                                element.tooltip(newValue);
                                isInstantiated = true;
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            var tooltipData = xi.XiUtil.getData(element, "tooltip");
                            if (isInstantiated && tooltipData) {
                                tooltipData.destroy();
                            }
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return TooltipDirective;
    }());
    xi.TooltipDirective = TooltipDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    /**
     * Track Dirty Directive.
     *
     * Indicates if an element is dirty.
     */
    var TrackDirtyDirective = /** @class */ (function () {
        function TrackDirtyDirective() {
        }
        TrackDirtyDirective.add = function (m) {
            var name = "xiTrackDirty";
            m.directive(name, function () {
                return {
                    scope: false,
                    restrict: "A",
                    link: function (scope, element) {
                        element.attr("data-trackdirty", "true");
                        element.trackdirty();
                    }
                };
            });
        };
        return TrackDirtyDirective;
    }());
    xi.TrackDirtyDirective = TrackDirtyDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
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
    var ValidateDirective = /** @class */ (function () {
        function ValidateDirective() {
        }
        ValidateDirective.add = function (m) {
            var name = "xiValidate";
            m.directive(name, function () {
                return {
                    require: "?ngModel",
                    scope: false,
                    restrict: "A",
                    link: function (scope, element, attributes) {
                        var options = attributes[name];
                        var unbindWatcher = scope.$watch(options, function (newOptions) {
                            // Use options object or attributes
                            if (!newOptions) {
                                // Use attributes
                                element.validate();
                            }
                            else {
                                if (newOptions.validation) {
                                    element.attr("data-validate", newOptions.validation);
                                }
                                if (newOptions.timeFormat) {
                                    element.attr("data-time-format", newOptions.timeFormat);
                                }
                                element.validate();
                            }
                        });
                        // Tear down
                        element.on("$destroy", function () {
                            unbindWatcher();
                        });
                    }
                };
            });
        };
        return ValidateDirective;
    }());
    xi.ValidateDirective = ValidateDirective;
})(xi || (xi = {}));
var xi;
(function (xi) {
    var m = angular.module("sohoxi", []);
    // Add directives to module
    xi.AboutDirective.add(m);
    xi.AutoCompleteDirective.add(m);
    xi.BusyDirective.add(m);
    xi.ButtonDirective.add(m);
    xi.ChartDirective.add(m);
    xi.ColorPickerDirective.add(m);
    xi.ControlDirective.add(m);
    xi.DataGridDirective.add(m);
    xi.DatePickerDirective.add(m);
    xi.DropDownDirective.add(m);
    xi.EditorDirective.add(m);
    xi.FileUploadDirective.add(m);
    xi.ListViewDirective.add(m);
    xi.LookupDirective.add(m);
    xi.MaskDirective.add(m);
    xi.MultiSelectDirective.add(m);
    xi.PopoverDirective.add(m);
    xi.PopupMenuDirective.add(m);
    xi.SearchFieldDirective.add(m);
    xi.SliderDirective.add(m);
    xi.SpinBoxDirective.add(m);
    xi.TabsDirective.add(m);
    xi.TextAreaDirective.add(m);
    xi.TimePickerDirective.add(m);
    xi.ToolbarDirective.add(m);
    xi.TooltipDirective.add(m);
    xi.TrackDirtyDirective.add(m);
    xi.ValidateDirective.add(m);
    /**
     * Util class containing convenience methods related to SohoXi Controls.
     */
    var XiUtil = /** @class */ (function () {
        function XiUtil() {
        }
        XiUtil.getData = function (element, key) {
            return element.data(key);
        };
        return XiUtil;
    }());
    xi.XiUtil = XiUtil;
})(xi || (xi = {}));
//# sourceMappingURL=sohoxi-angular.js.map