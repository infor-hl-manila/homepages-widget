var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime", "./data.service", "./sort-filter.service", "./ticket.service", "./ticket-details-workspace.component", "./create-ticket-workspace.component", "./datetime.pipe"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1, data_service_1, sort_filter_service_1, ticket_service_1, ticket_details_workspace_component_1, create_ticket_workspace_component_1, datetime_pipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TicketsComponent = /** @class */ (function () {
        function TicketsComponent(widgetContext, widgetInstance, sohoModalDialogService, ticketService, dataService, sortFilterService, toastService) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.sohoModalDialogService = sohoModalDialogService;
            this.ticketService = ticketService;
            this.dataService = dataService;
            this.sortFilterService = sortFilterService;
            this.toastService = toastService;
            this.ticketDetailsRef = null;
            this.createTicketRef = null;
            this.isMobileView = false;
            this.segregatedTickets = [];
            this.allTickets = [];
            this.unassignedTickets = [];
            this.pastDueTickets = [];
            this.comingDueTickets = [];
            this.openTickets = [];
            this.pendingTickets = [];
            this.solvedTickets = [];
            this.allAssignees = [];
            this.allContacts = [];
            this.allDepartments = [];
            this.sortCode = "default";
            this.sortOrder = "desc";
            this.filterCode = "default";
            this.searchFilter = "";
            this.searchFilterParams = ['DerPrimaryFormattedContactName', 'AccountName', 'PrimaryTicketContactEmail', 'Summary', 'TicketNumber'];
            this.emptySearchMessage = "";
            this.currentUser = {};
            this.widgetId = "";
            this.toolbarSearchfieldClass = "sf-col1";
            this.isShowCover = true;
            this.isShowCompletedState = false;
            this.isShowErrorState = false;
            this.isRefreshAllData = true;
            this.logPrefix = '[infor.crm.tickets]';
        }
        TicketsComponent.prototype.ngOnInit = function () {
            var _this_1 = this;
            var _this = this;
            this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;
            this.isShowCover = true;
            this.widgetContext.setState(lime_1.WidgetState.busy);
            this.widgetId = this.widgetContext.getWidgetInstanceId();
            this.removeOtherPopdowns();
            // Create new ticket
            this.widgetInstance.actions[0].execute = function () {
                _this.createNewTicket();
            };
            // Launch Web Application
            this.widgetInstance.actions[1].execute = function () {
                var url = "?LogicalId={logicalId}";
                _this_1.widgetContext.launch({ url: url });
            };
            this.dataService.init(this.widgetContext);
            this.initCallback = function () {
                _this.widgetContext.setState(lime_1.WidgetState.busy);
                _this.dataService.getTickets().subscribe(function (response) {
                    _this.allTickets = response.data ? _this.dataService.parseTicketData(response.data) : [];
                    if (_this.allTickets.length === 0) {
                        _this.isShowCompletedState = true;
                    }
                    else {
                        _this.isShowCompletedState = false;
                    }
                    _this.applySortAndFilters(_this.filterCode, _this.sortCode);
                    _this.dataService.getAssignees().subscribe(function (response) {
                        _this.allAssignees = response.data ? _this.dataService.parseAssigneeData(response.data) : [];
                        _this.dataService.getContacts().subscribe(function (response) {
                            _this.allContacts = response.data ? _this.dataService.parseContactData(response.data) : [];
                            _this.dataService.getDepartments().subscribe(function (response) {
                                _this.allDepartments = response.data ? _this.dataService.parseDepartmentData(response.data) : [];
                                _this.isRefreshAllData = false;
                                _this.recomputeSize();
                            }, function (error) { _this.handleError(error, 'Unable to get Department Data'); });
                        }, function (error) { _this.handleError(error, 'Unable to get Contacts Data'); });
                    }, function (error) { _this.handleError(error, 'Unable to get Assignee Data'); });
                }, (function (error) { _this.handleError(error, 'Unable to get Ticket Data'); }));
            };
            this.handleError = function (error, message) {
                _this.isShowErrorState = true;
                // this.isShowToolBar = false;
                lime_1.Log.error(_this.logPrefix + " " + message + " " + JSON.stringify(error));
                _this.recomputeSize();
                // Hide loader
                _this.widgetContext.setState(lime_1.WidgetState.running);
                // Hide cover
                _this.isShowCover = false;
            };
            this.dataService.getMongooseConfig(this.initCallback, this.handleError);
        };
        TicketsComponent.prototype.recomputeSize = function () {
            this.isShowCover = true;
            var element = this.widgetContext.getElement();
            var toolbarHeight = 35;
            var tabHeaderHeight = 65;
            var errorStateHeight = 192;
            var completedStateHeight = 192;
            if (element[0].children.length > 0) {
                // Recompute scroll heights and widths
                var elementHeight = element[0].parentElement.className.indexOf('double-height') >= 0 ? 708 : 318;
                var ticketCardContainerHeight = elementHeight - toolbarHeight - tabHeaderHeight;
                var errorState = element[0].children[0].children[1];
                var completedState = element[0].children[0].children[2];
                var ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[1].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[2].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[3].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[4].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[5].children[0];
                ticketCards.setAttribute('style', "height:" + ticketCardContainerHeight + "px;");
                var elementWidth = 360;
                if (element[0].parentElement.className.indexOf('double-width') >= 0) {
                    elementWidth = 740;
                    this.toolbarSearchfieldClass = 'sf-col2';
                }
                else if (element[0].parentElement.className.indexOf('triple-width') >= 0) {
                    elementWidth = 1120;
                    this.toolbarSearchfieldClass = 'sf-col3';
                }
                else {
                    this.toolbarSearchfieldClass = 'sf-col1';
                }
                var toolbarSearchfield = element[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0];
                toolbarSearchfield.setAttribute('style', "width:100%");
                // Hide dropdown icon
                var ticketBtnMore = element[0].getElementsByClassName('hide-dd-btn');
                for (var i = 0; i < ticketBtnMore.length; i++) {
                    var ddIcon = ticketBtnMore[i].children[1];
                    var offsetLeft = ddIcon.parentElement.attributes[2].value === 'sort-down' ? 0 : 70;
                    ddIcon.setAttribute('style', "left: " + offsetLeft + "px; opacity: 0; position: absolute;");
                }
                var ticketEmptyMessages = element[0].getElementsByClassName('ticket-empty-message');
                for (var i = 0; i < ticketEmptyMessages.length; i++) {
                    var ticketEmptyMessage = ticketEmptyMessages[i];
                    ticketEmptyMessage.setAttribute('style', "margin-top:" + (ticketCardContainerHeight - 114) / 2 + "px");
                }
                if (elementHeight > completedStateHeight) {
                    completedState.setAttribute('style', "margin-top:" + (elementHeight - completedStateHeight) / 2 + "px");
                }
                if (elementHeight > errorStateHeight) {
                    errorState.setAttribute('style', "margin-top:" + (elementHeight - errorStateHeight) / 2 + "px");
                }
            }
            this.widgetContext.setState(lime_1.WidgetState.running);
            this.isShowCover = false;
        };
        TicketsComponent.prototype.segregateTickets = function () {
            var _this_1 = this;
            var dateToday = new Date();
            var oneDay = 24 * 60 * 60 * 1000;
            this.unassignedTickets = [];
            this.pastDueTickets = [];
            this.comingDueTickets = [];
            this.openTickets = [];
            this.pendingTickets = [];
            this.solvedTickets = [];
            this.allTickets.map(function (ticket) {
                if (!_this_1.currentUser && ticket.DerIsManagedByCurrentUser == '1') {
                    _this_1.currentUser = {
                        CRMUserID: ticket.AssignedToID,
                        CRMName: ticket.AssignedToName
                    };
                }
                var dateNeeded = ticket.DateNeeded ? new Date(ticket.DateNeeded) : null;
                var daysUntilDue = dateNeeded ? Math.floor((dateToday.getTime() - dateNeeded.getTime()) / oneDay) : null;
                if (!ticket.AssignedToID) {
                    _this_1.unassignedTickets.push(ticket);
                }
                else if (ticket.Status === "Open" && dateNeeded && daysUntilDue >= 0) {
                    _this_1.pastDueTickets.push(ticket);
                }
                else if (ticket.Status === "Open" && dateNeeded && (daysUntilDue < 0 && daysUntilDue >= -2)) {
                    _this_1.comingDueTickets.push(ticket);
                }
                else {
                    switch (ticket.Status) {
                        case "Open":
                            _this_1.openTickets.push(ticket);
                            break;
                        case "Pending":
                            // Flag is ticket is pending but also due
                            ticket.IsDue = dateNeeded && daysUntilDue >= 0;
                            _this_1.pendingTickets.push(ticket);
                            break;
                        case "Solved":
                            _this_1.solvedTickets.push(ticket);
                            break;
                    }
                }
            });
            // this.segregatedTickets.push({ IsShowAssignBtn: false, TabId: "pastdue-view", TicketCategory: "Past Due", Tickets: this.pastDueTickets });
            // this.segregatedTickets.push({ IsShowAssignBtn: false, TabId: "comingdue-view", TicketCategory: "Coming Due", Tickets: this.comingDueTickets });
            // this.segregatedTickets.push({ IsShowAssignBtn: false, TabId: "open-view", TicketCategory: "Open", Tickets: this.openTickets });
            // this.segregatedTickets.push({ IsShowAssignBtn: false, TabId: "pending-view", TicketCategory: "Pending", Tickets: this.pendingTickets });
            // this.segregatedTickets.push({ IsShowAssignBtn: false, TabId: "solved-view", TicketCategory: "Solved", Tickets: this.solvedTickets });
            // this.segregatedTickets.push({ IsShowAssignBtn: true, TabId: "unassigned-view", TicketCategory: "Unassigned", Tickets: this.unassignedTickets });
        };
        TicketsComponent.prototype.openTicketDetails = function (selectedTicket) {
            var _this_1 = this;
            this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;
            this.ticketDetailsRef = this.sohoModalDialogService.contextualactionpanel(ticket_details_workspace_component_1.TicketDetailWorkspaceComponent, this.ticketDetailsPlaceholder);
            this.ticketDetailsRef.options({ centerTitle: true, trigger: "immediate" });
            var ticketDetailsBtn = [{
                    text: "Go to core app",
                    align: "right",
                    click: function () {
                        var form = _this_1.ticketService.buildDrillback("edit", selectedTicket, _this_1.filterCode);
                        var url = "?LogicalId={logicalId}&form=" + form;
                        _this_1.widgetContext.launch({ url: url });
                    },
                    cssClass: "btn-icon",
                    icon: '#icon-launch'
                }];
            if (selectedTicket.Status === 'Solved'
                || (selectedTicket.AssignedToID && selectedTicket.AssignedToID != this.currentUser.CRMUserID)) {
                ticketDetailsBtn.push({
                    text: "Close",
                    align: "left",
                    click: function () {
                        _this_1.ticketDetailsRef.componentPanel.closeWorkspace();
                    },
                    cssClass: "btn-icon",
                    icon: '#icon-close'
                });
            }
            this.ticketDetailsRef.buttons(ticketDetailsBtn);
            this.ticketDetailsRef.title('Existing Ticket');
            this.ticketDetailsRef.apply(function (component) { });
            this.ticketDetailsRef.initializeContent(true).open();
            selectedTicket.AssignedToName = selectedTicket.AssignedToName ? selectedTicket.AssignedToName : selectedTicket.AssignedToID ? this.sortFilterService.findItem(this.allAssignees, 'CRMUserID', selectedTicket.AssignedToID) : null;
            this.ticketDetailsRef.componentPanel.dialog = this.ticketDetailsRef;
            this.ticketDetailsRef.componentPanel.ticket = selectedTicket;
            this.ticketDetailsRef.componentPanel.allAssignees = this.allAssignees;
            this.ticketDetailsRef.componentPanel.currentUser = this.currentUser;
            this.ticketDetailsRef.componentPanel.initCallback = this.initCallback;
            this.ticketDetailsRef.componentPanel.handleError = this.handleError;
            this.ticketDetailsRef.componentPanel.isMobileView = this.isMobileView;
            this.sortFilterService.sortArray(this.allAssignees, "CRMName");
            this.ticketDetailsRef.componentPanel.bringAssigneeToTop();
            this.ticketDetailsRef.componentPanel.setWorkspaceData();
        };
        TicketsComponent.prototype.createNewTicket = function () {
            this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;
            this.createTicketRef = this.sohoModalDialogService.contextualactionpanel(create_ticket_workspace_component_1.CreateTicketWorkspaceComponent, this.ticketDetailsPlaceholder);
            this.createTicketRef.options({ centerTitle: true });
            this.createTicketRef.title("Create New Ticket");
            this.createTicketRef.trigger('immediate');
            this.createTicketRef.apply(function (component) { });
            this.createTicketRef.initializeContent(true).open();
            this.createTicketRef.componentPanel.dialog = this.createTicketRef;
            this.createTicketRef.componentPanel.allAssignees = this.allAssignees;
            this.createTicketRef.componentPanel.allContacts = this.allContacts;
            this.createTicketRef.componentPanel.allDepartments = this.allDepartments;
            this.createTicketRef.componentPanel.currentUser = this.currentUser;
            this.createTicketRef.componentPanel.initCallback = this.initCallback;
            this.createTicketRef.componentPanel.handleError = this.handleError;
            this.createTicketRef.componentPanel.isMobileView = this.isMobileView;
            this.createTicketRef.componentPanel.setWorkspaceData();
        };
        TicketsComponent.prototype.applySortAndFilters = function (filterCode, sortCode) {
            this.searchFilter = "";
            this.flexibleSearch();
            var element = this.widgetContext.getElement();
            $(element[0]).find('.searchfield-wrapper').find('.close').addClass('is-empty');
            this.filterCode = filterCode || this.filterCode;
            this.sortCode = sortCode || this.sortCode;
            var ticketSort = this.ticketService.getSort(this.sortCode, this.sortOrder);
            var ticketFilter = this.ticketService.getFilter(this.filterCode);
            this.sortFilterService.sortArray(this.allTickets, ticketSort.Field, ticketSort.DataType, ticketSort.Order, 'DateNeeded');
            this.sortFilterService.filterArray(this.allTickets, ticketFilter.Field, ticketFilter.Value, 'AssignedToID', null);
            this.segregateTickets();
        };
        TicketsComponent.prototype.applySortOrder = function (sortOrder) {
            this.sortOrder = sortOrder;
            this.applySortAndFilters();
        };
        TicketsComponent.prototype.flexibleSearch = function (ev) {
            // this.searchFilter = searchFilter ? searchFilter : this.searchFilter;
            this.emptySearchMessage = "Your search for \"" + this.searchFilter + "\" didn't return any results.";
            var ticketFilter = this.ticketService.getFilter(this.filterCode);
            this.sortFilterService.filterArray(this.allTickets, ticketFilter.Field, ticketFilter.Value, 'AssignedToID', null);
            this.sortFilterService.flexibleSearch(this.allTickets, this.searchFilter, this.searchFilterParams);
            this.segregateTickets();
        };
        TicketsComponent.prototype.getTicketCount = function (tickets) {
            var count = 0;
            for (var i = 0; i < tickets.length; i++) {
                var tmpTicket = tickets[i];
                if (!tmpTicket.IsHidden && !tmpTicket.IsFiltered) {
                    count++;
                }
            }
            return count;
        };
        TicketsComponent.prototype.isHideEmptySearchState = function (tickets) {
            return (!this.searchFilter && this.getTicketCount(tickets) > 0) || (!this.searchFilter && this.getTicketCount(tickets) === 0) || (this.searchFilter && this.getTicketCount(tickets) > 0);
        };
        TicketsComponent.prototype.updateTicketStatus = function (ticket, status, ev) {
            var _this_1 = this;
            if (ev) {
                ev.stopPropagation();
                ev.preventDefault();
            }
            this.widgetContext.setState(lime_1.WidgetState.busy);
            ticket.Status = status;
            var toastTitle = 'Ticket Status Changed';
            var toastMessage = "Your changes to ticket " + ticket.TicketNumber + " have been saved.";
            if (status === "Open") {
                toastTitle = 'Status Changed';
                toastMessage = "Ticket " + ticket.TicketNumber + " has been reopened.";
            }
            this.dataService.putTicket(ticket, ['Status'])
                .subscribe(function (response) {
                _this_1.toastService.show({
                    title: toastTitle,
                    message: toastMessage,
                    timeout: 4000
                });
                _this_1.initCallback();
            }, function (error) { _this_1.handleError(error, 'Unable to update Ticket Status'); });
        };
        TicketsComponent.prototype.assignTicketToMe = function (ticket, ev) {
            var _this_1 = this;
            if (ev) {
                ev.stopPropagation();
                ev.preventDefault();
            }
            this.widgetContext.setState(lime_1.WidgetState.busy);
            ticket.AssignedToID = this.currentUser.CRMUserID;
            ticket.AssignedToName = this.currentUser.CRMName;
            ticket.DerIsManagedByCurrentUser = '1';
            ticket.Status = 'Open';
            this.dataService.putTicket(ticket, ['AssignedToID', 'AssignedToName', 'DerIsManagedByCurrentUser', 'Status'])
                .subscribe(function (response) {
                _this_1.toastService.show({
                    title: 'Ticket Assigned',
                    message: "Ticket " + ticket.TicketNumber + " has been assigned to you.",
                    timeout: 4000
                });
                _this_1.initCallback();
            }, function (error) { _this_1.handleError(error, 'Unable to assign ticket to me'); });
        };
        TicketsComponent.prototype.getInitials = function (name) {
            var initials = name[0];
            for (var i = name.length - 1; i >= 1; i--) {
                var char1 = name[i];
                var char2 = name[i - 1];
                if (char2 == " ") {
                    initials += char1;
                    break;
                }
            }
            return initials;
        };
        TicketsComponent.prototype.onKeyDown = function (ev) {
            if (ev.code === "Enter" && ev.currentTarget.value === "") {
                this.searchFilter = "";
                this.flexibleSearch();
            }
        };
        TicketsComponent.prototype.removeOtherPopdowns = function () {
            // Destroy function on popdown not yet available in angular
            var filterPopdowns = $(".filterPopdown-" + this.widgetId);
            for (var i = 0; i < filterPopdowns.length - 1; i++) {
                $(filterPopdowns[i]).remove();
            }
        };
        __decorate([
            core_1.ViewChild("ticketDetailsPlaceholder", { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], TicketsComponent.prototype, "ticketDetailsPlaceholder", void 0);
        TicketsComponent = __decorate([
            core_1.Component({
                providers: [datetime_pipe_1.DateTimePipe],
                template: "\n\t\t<div class=\"tickets-widget-content\" [hidden]=\"isShowCompletedState || isShowErrorState\">\n\t\t\t<div class=\"row no-indent\">\n\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t<div class=\"ticket-toolbar row no-indent\">\n\t\t\t\t\t\t<div class=\"toolbar-item searchfield-section\">\n\t\t\t\t\t\t\t<input soho-searchfield\n\t\t\t\t\t\t\tname=\"searchfield\"\n\t\t\t\t\t\t\tclass=\"searchfield ticket-searchfield\"\n\t\t\t\t\t\t\tplaceholder=\"Ticket Number, Account, Contact Name, Summary\"\n\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t[(ngModel)]=\"searchFilter\"\n\t\t\t\t\t\t\t(input)=\"flexibleSearch()\"\n\t\t\t\t\t\t\t(change)=\"flexibleSearch($event)\"\n\t\t\t\t\t\t\t(keydown)=\"onKeyDown($event)\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"toolbar-item filter-toolbar-item \">\n\t\t\t\t\t\t\t<button soho-button=\"tertiary\" soho-popdown #filterPopdown{{widgetId}} (click)=\"removeOtherPopdowns()\">\n\t\t\t\t\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-filter\"></use>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<soho-popdown-contents class=\"filterPopdown-{{widgetId}}\" id=\"filterPopdownContent-{{widgetId}}\">\n\t\t\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t\t\t<div class=\"widget-header\">\n\t\t\t\t\t\t\t\t\t\t<h2 class=\"widget-title\">View</h2>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"widget-content\" style=\"overflow: hidden;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"listview is-selectable\" tabindex=\"-1\" role=\"listbox\">\n\t\t\t\t\t\t\t\t\t\t\t<ul role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li tabindex=\"0\" role=\"option\" aria-posinset=\"1\" aria-setsize=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input soho-radiobutton\n\t\t\t\t\t\t\t\t\t\t\t\t\tsoho-trackdirty\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"optionMyTickets-{{widgetId}}\" type=\"radio\" name=\"ogTicketFilter-{{widgetId}}\" value=\"1\" checked />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label soho-label for=\"optionMyTickets-{{widgetId}}\" [forRadioButton]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"applySortAndFilters('default')\">My Tickets</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input soho-radiobutton\n\t\t\t\t\t\t\t\t\t\t\t\t\tsoho-trackdirty\n\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"optionAllTickets-{{widgetId}}\" type=\"radio\" name=\"ogTicketFilter-{{widgetId}}\" value=\"2\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label soho-label for=\"optionAllTickets-{{widgetId}}\" [forRadioButton]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"applySortAndFilters('all-tickets')\">All Tickets</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<!--<li role=\"option\" aria-posinset=\"2\" aria-setsize=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFILTER\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"option\" aria-posinset=\"2\" aria-setsize=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFILTER\n\t\t\t\t\t\t\t\t\t\t\t\t</li>-->\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</soho-popdown-contents>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"toolbar-item sort-toolbar-item\">\n\t\t\t\t\t\t\t<button soho-menu-button class=\"btn-menu hide-dd-btn\" icon=\"{{ sortOrder == 'desc' ? 'sort-down' : 'sort-up' }}\"></button>\n\t\t\t\t\t\t\t<ul class=\"popupmenu is-selectable\">\n\t\t\t\t\t\t\t\t<li class='is-checked' (click)=\"applySortAndFilters(null, 'default')\">\n\t\t\t\t\t\t\t\t\t<a>Urgency</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortAndFilters(null, 'ticket-number')\">Ticket Number</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortAndFilters(null, 'date-needed')\">Date Needed</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortAndFilters(null, 'severity')\">Severity</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortAndFilters(null, 'days-open')\">Days Open</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortAndFilters(null, 'account')\">Account</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"separator\"></li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortOrder('asc')\">Ascending</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class='is-checked'>\n\t\t\t\t\t\t\t\t\t<a (click)=\"applySortOrder('desc')\">Descending</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row no-indent\">\n\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t<div soho-tabs tabCounts=\"true\">\n\t\t\t\t\t\t<div soho-tab-list-container>\n\t\t\t\t\t\t\t<ul soho-tab-list>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"pastdue-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(pastDueTickets) }}</span> Past Due</a></li>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"comingdue-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(comingDueTickets) }}</span> Coming Due</a></li>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"open-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(openTickets) }}</span> Open</a></li>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"pending-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(pendingTickets) }}</span> Pending</a></li>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"solved-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(solvedTickets) }}</span> Solved</a></li>\n\t\t\t\t\t\t\t\t<li soho-tab-separator></li>\n\t\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"unassigned-view-{{widgetId}}\"><span soho-tab-count>{{ getTicketCount(unassignedTickets) }}</span> Unassigned</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div soho-tab-panel-container>\n\t\t\t\t\t\t<div soho-tab-panel class=\"ticket-cards-container\" tabId=\"pastdue-view-{{widgetId}}\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card\" *ngFor=\"let ticket of pastDueTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"right-section text-muted\" [hidden]=\"ticket.DaysOpen == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? \"days\" : \"day\" }} open\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section align-r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser != '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-menu-button class=\"btn-menu ticket-btn-more hide-dd-btn align-r\" icon=\"more\"></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"popupmenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Pending')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Pending</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Solved')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Solved</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser == '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-assignee-initials\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ getInitials(ticket.AssignedToName) }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(pastDueTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(pastDueTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div soho-tab-panel tabId=\"comingdue-view-{{widgetId}}\" class=\"ticket-cards-container\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card\" *ngFor=\"let ticket of comingDueTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"right-section text-muted\" [hidden]=\"ticket.DaysOpen == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? \"days\" : \"day\" }} open\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section align-r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser != '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-menu-button class=\"btn-menu ticket-btn-more hide-dd-btn align-r\" icon=\"more\"></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"popupmenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Pending')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Pending</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Solved')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Solved</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser == '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-assignee-initials\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ getInitials(ticket.AssignedToName) }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(comingDueTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(comingDueTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div soho-tab-panel tabId=\"open-view-{{widgetId}}\" class=\"ticket-cards-container\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card\" *ngFor=\"let ticket of openTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"right-section text-muted\" [hidden]=\"ticket.DaysOpen == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? \"days\" : \"day\" }} open\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section align-r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser != '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-menu-button class=\"btn-menu ticket-btn-more hide-dd-btn align-r\" icon=\"more\"></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"popupmenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Pending')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Pending</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Solved')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Solved</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser == '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-assignee-initials\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ getInitials(ticket.AssignedToName) }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(openTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(openTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div soho-tab-panel tabId=\"pending-view-{{widgetId}}\" class=\"ticket-cards-container\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card {{ ticket.IsDue ? 'pending-due-ticket' : '' }}\" *ngFor=\"let ticket of pendingTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"right-section text-muted\" [hidden]=\"ticket.DaysOpen == 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? \"days\" : \"day\" }} open\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section align-r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser != '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<button soho-menu-button class=\"btn-menu ticket-btn-more hide-dd-btn align-r\" icon=\"more\"></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"popupmenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li (click)=\"updateTicketStatus(ticket, 'Solved')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>Mark as Solved</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-button=\"primary\" class=\"btn-primary ticket-btn background-transparent\" (click)=\"updateTicketStatus(ticket, 'Solved', $event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMark as Solved\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser == '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-assignee-initials\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ getInitials(ticket.AssignedToName) }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(pendingTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(pendingTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div soho-tab-panel tabId=\"solved-view-{{widgetId}}\" class=\"ticket-cards-container\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card\" *ngFor=\"let ticket of solvedTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser != '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-button=\"primary\" class=\"btn-primary ticket-btn background-transparent\" (click)=\"updateTicketStatus(ticket, 'Open', $event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-reset\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReopen\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"ticket.DerIsManagedByCurrentUser == '1'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-assignee-initials\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ getInitials(ticket.AssignedToName) }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(solvedTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(solvedTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div soho-tab-panel tabId=\"unassigned-view-{{widgetId}}\" class=\"ticket-cards-container\">\n\t\t\t\t\t\t\t<div class=\"row no-indent ticket-cards\">\n\t\t\t\t\t\t\t\t<div class=\"full-width column\">\n\t\t\t\t\t\t\t\t\t<soho-listview>\n\t\t\t\t\t\t\t\t\t\t<li soho-listview-item class=\"ticket-card\" *ngFor=\"let ticket of unassignedTickets\" (click)=\"openTicketDetails(ticket)\" [hidden]=\"ticket.IsHidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-top-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"left-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar-container {{ ticket.UrgencyClass }}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"urgency-bar\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-small urgency-bar-label\">{{ ticket.Urgency }}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-id text-base text-strong\">{{ ticket.TicketNumber }}{{ ticket.Type ? \": \" + ticket.Type : \"\" }}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-indent ticket-bottom-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Summary }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive text-small nowrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.AccountName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"three columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerPrimaryFormattedContactName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-profile\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerPrimaryFormattedContactName }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!ticket.DerFormattedContactPhoneNumber\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg class=\"icon info-icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-phone\"></use>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.DerFormattedContactPhoneNumber }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"six columns info-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block60\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate Needed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\" [hidden]=\"!ticket.DateNeeded\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ (ticket.DateNeeded | dateTimeFormat | date: \"MMM dd, yyyy HH:mma\") || \"NA\" }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-descriptive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeverity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-strong\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ ticket.Severity }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"short-block20 ticket-btn-section\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button soho-button=\"primary\" class=\"btn-primary ticket-btn background-transparent\" (click)=\"assignTicketToMe(ticket, $event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAssign To Me\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"searchFilter || getTicketCount(unassignedTickets) > 0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'All Set'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"'You have resolved your tickets.'\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"twelve columns ticket-empty-message-container\" [hidden]=\"isHideEmptySearchState(unassignedTickets)\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"ticket-empty-message\" soho-emptymessage\n\t\t\t\t\t\t\t\t\t\t[title]=\"'No Results'\"\n\t\t\t\t\t\t\t\t\t\t[info]=\"emptySearchMessage\"\n\t\t\t\t\t\t\t\t\t\t></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row ticket-empty-state\" [hidden]=\"!isShowErrorState\">\n\t\t\t<div class=\"twelve columns\">\n\t\t\t\t<div soho-emptymessage\n\t\t\t\t[title]=\"'Something went wrong'\"\n\t\t\t\t[info]=\"'Check your connection and try again.'\"\n\t\t\t\t[icon]=\"'icon-empty-error-loading'\"\n\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row ticket-empty-state\" [hidden]=\"!isShowCompletedState\">\n\t\t\t<div class=\"twelve columns\">\n\t\t\t\t<div soho-emptymessage\n\t\t\t\t[title]=\"'No tickets yet'\"\n\t\t\t\t[info]=\"'Once you add some, you will see them here'\"\n\t\t\t\t[icon]=\"'icon-empty-generic'\"\n\t\t\t\t[color]=\"'azure'\"\n\t\t\t\t></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"blank-cover\" [hidden]=\"!isShowCover\"></div>\n\t\t<div #ticketDetailsPlaceholder></div>\n\t\t<div #createTicketPlaceholder></div>\n\t",
                styles: ["\n\t\t.ticket-toolbar { background-color: #f0f0f0; border-bottom: 1px solid #bdbdbd; height: 35px; }\n\t\t.ticket-toolbar > .toolbar-item { display: inline-block; }\n\t\t.ticket-toolbar > .searchfield-section { width: calc(100% - 98px); }\n\t\t.toolbar-item > button { min-width: 0; padding: 0; }\n\t\t.filter-toolbar-item { border-left: 1px solid #bdbdbd;;}\n\t\t.filter-toolbar-item > button { width: 43px; }\n\t\t.sort-toolbar-item { border-left: 1px solid #bdbdbd; float: right; padding-right: 4px;}\n\t\t.sort-toolbar-item > button { width: 43px; }\n\t\t.searchfield-section input { border: none; }\n\t\t.ticket-searchfield { width: 100%; }\n\t\t.v-separator { display: inline-block; height: 100%; border-right: 1px solid #bdbdbd; }\n\n\t\t.ticket-cards-container { padding-top: 0 !important; }\n\t\t.ticket-cards { margin: 0; overflow-x: hidden; overflow-y: scroll; }\n\t\t.ticket-cards > .column:first-child, .ticket-bottom-info > .columns:first-child  { padding-left: 0px !important; }\n\t\t.ticket-card { padding: 16px 16px 0 16px; position: relative; }\n\t\t.tickets-widget-content .tab-panel-container { margin-bottom: 0px !important; }\n\t\t.tickets-widget-content > .row:last-child, .ticket-card > .row:last-child, .ticket-toolbar { margin-bottom: 0px !important; }\n\t\t.pending-due-ticket { border: 1px solid #e84f4f; background-color: rgb(232, 79, 79, .1);  }\n\n\t\t.urgency-bar-container > div { display: inline-block; font-size: 11px; }\n\t\t.urgency-bar { background-color: transparent; border: 1px solid #888B94; height: 6px; width: 6px; margin-right: 2px; }\n\t\t.urgency-bar-label { padding-left: 5px; }\n\n\t\t.urgency-bar-container.h > .urgency-bar { background-color: #fb3e47; border: none; }\n\n\t\t.urgency-bar-container.mh > .urgency-bar:nth-child(1),\n\t\t.urgency-bar-container.mh > .urgency-bar:nth-child(2),\n\t\t.urgency-bar-container.mh > .urgency-bar:nth-child(3),\n\t\t.urgency-bar-container.mh > .urgency-bar:nth-child(4) { background-color: #f6600c; border: none; }\n\n\t\t.urgency-bar-container.m > .urgency-bar:nth-child(1),\n\t\t.urgency-bar-container.m > .urgency-bar:nth-child(2),\n\t\t.urgency-bar-container.m > .urgency-bar:nth-child(3) { background-color: #ff8e00; border: none; }\n\n\t\t.urgency-bar-container.ml > .urgency-bar:nth-child(1),\n\t\t.urgency-bar-container.ml > .urgency-bar:nth-child(2) { background-color: #ffd600; border: none; }\n\n\t\t.urgency-bar-container.l > .urgency-bar:first-child { background-color: #54a1d3; border: none; }\n\n\t\t.ticket-assignee-initials { background-color: #f0f0f0; border: 1px solid transparent; border-radius: 50%; color: #999999; display: inline-block; font-size: 1.4rem; height: 3.6rem; line-height: 3.6rem; text-align: center; vertical-align: middle; width: 3.6rem; position: absolute; right: 27px; }\n\n\t\t.ticket-id { margin-top: 16px; margin-bottom: 2px; }\n\t\t.ticket-top-info { position: absolute; top: 16px; width: calc(100% - 21px); }\n\t\t.ticket-top-info > .left-section { float: left; line-height: 15px; }\n\t\t.ticket-top-info > .right-section { float: right; padding-right: 20px; }\n\n\t\t.ticket-bottom-info { margin-top: 8px; }\n\t\t.ticket-bottom-info > .info-block { padding-bottom: 16px; margin-left: 0px !important; }\n\t\t.ticket-bottom-info > .info-block:first-child { min-width: 150px; }\n\t\t.ticket-bottom-info > .info-block:nth-child(2) { min-width: 177px; }\n\t\t.ticket-bottom-info > .info-block:last-child { min-width: 277px; }\n\t\t.info-block > div { line-height: 18px; }\n\t\t.info-block > .short-block60 { display: inline-block; vertical-align: top; width: 40%; }\n\t\t.info-block > .short-block20 { display: inline-block; vertical-align: top; width: 30%; }\n\t\t.info-icon { height: 14px !important; top: 2px; }\n\t\t.ticket-btn { background-color: #368ac0 !important; position: absolute; right: 20px; padding-left: 12px; padding-right: 12px; }\n\t\t.background-transparent { background-color: transparent !important; color: #368ac0 !important; }\n\t\t.ticket-btn-more { position: absolute; right: 20px; }\n\n\t\t.ticket-btn-section > button { min-width: 50px; width: 50px; padding: 0; }\n\n\t\t.ticket-empty-message-container { margin-left: 0px !important; }\n\n\t\t.align-r { text-align: right; }\n\t\t.nowrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n\t\t.blank-cover { height: calc(100% - 50px); width: 100%; background-color: #ffffff; position: absolute; top: 50px; left: 0; }\n\n\t\t#dropdown-list { z-index: 10000 !important; }\n\t"]
            }),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, sohoxi_angular_1.SohoContextualActionPanelService,
                ticket_service_1.TicketService,
                data_service_1.DataService,
                sort_filter_service_1.SortFilterService,
                sohoxi_angular_1.SohoToastService])
        ], TicketsComponent);
        return TicketsComponent;
    }());
    exports.TicketsComponent = TicketsComponent;
    var TicketsModule = /** @class */ (function () {
        function TicketsModule() {
        }
        TicketsModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, sohoxi_angular_1.SohoToolbarModule, sohoxi_angular_1.SohoSearchFieldModule, sohoxi_angular_1.SohoButtonModule, sohoxi_angular_1.SohoMenuButtonModule, sohoxi_angular_1.SohoTabsModule, sohoxi_angular_1.SohoListViewModule, sohoxi_angular_1.SohoPopDownModule, sohoxi_angular_1.SohoDropDownModule, sohoxi_angular_1.SohoRadioButtonModule, sohoxi_angular_1.SohoLabelModule, sohoxi_angular_1.SohoLookupModule, sohoxi_angular_1.SohoMaskModule, sohoxi_angular_1.SohoEmptyMessageModule, sohoxi_angular_1.SohoCheckBoxModule, sohoxi_angular_1.SohoTextAreaModule, sohoxi_angular_1.SohoPopupMenuModule, sohoxi_angular_1.SohoContextMenuModule, sohoxi_angular_1.SohoBusyIndicatorModule],
                declarations: [TicketsComponent, ticket_details_workspace_component_1.TicketDetailWorkspaceComponent, create_ticket_workspace_component_1.CreateTicketWorkspaceComponent, datetime_pipe_1.DateTimePipe],
                entryComponents: [TicketsComponent, ticket_details_workspace_component_1.TicketDetailWorkspaceComponent, create_ticket_workspace_component_1.CreateTicketWorkspaceComponent]
            })
        ], TicketsModule);
        return TicketsModule;
    }());
    exports.TicketsModule = TicketsModule;
    exports.getActions = function (context) {
        var language = context.getLanguage();
        return [{
                isPrimary: true,
                standardIconName: "#icon-add",
                text: "Create New Ticket"
            }, {
                isPrimary: false,
                text: "Launch Web Appication"
            }];
    };
});
//# sourceMappingURL=main.js.map