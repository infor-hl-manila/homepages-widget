var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TicketService = /** @class */ (function () {
        function TicketService() {
        }
        TicketService.prototype.getUrgency = function (urgency) {
            var newUrgency = urgency;
            if (newUrgency === 'Medium - High'
                || newUrgency === 'MediumHigh') {
                newUrgency = 'Medium-High';
            }
            if (newUrgency === 'Medium - Low'
                || newUrgency === 'MediumLow') {
                newUrgency = 'Medium-Low';
            }
            return newUrgency;
        };
        TicketService.prototype.getUrgencyClass = function (urgency) {
            switch (urgency) {
                case 'High':
                    return 'h';
                case 'Medium - High':
                case 'MediumHigh':
                    return 'mh';
                case 'Medium':
                    return 'm';
                case 'Medium - Low':
                case 'MediumLow':
                    return 'ml';
                case 'Low':
                    return 'l';
            }
        };
        TicketService.prototype.getUrgencyLevel = function (urgency) {
            switch (urgency) {
                case 'High':
                    return 5;
                case 'Medium - High':
                case 'MediumHigh':
                    return 4;
                case 'Medium':
                    return 3;
                case 'Medium - Low':
                case 'MediumLow':
                    return 2;
                case 'Low':
                    return 1;
            }
        };
        TicketService.prototype.getSeverityLevel = function (severity) {
            switch (severity) {
                case 'Blocker':
                    return 4;
                case 'Critical':
                    return 3;
                case 'Major':
                    return 2;
                case 'Minor':
                    return 1;
                default:
                    return 0;
            }
        };
        TicketService.prototype.getSort = function (sortCode, order) {
            switch (sortCode) {
                case 'default':
                    return { DataType: 'default', Field: 'UrgencyLevel', Order: order };
                case 'ticket-number':
                    return { DataType: 'number', Field: 'TicketNumber', Order: order };
                case 'date-needed':
                    return { DataType: 'datetime', Field: 'DateNeeded', Order: order };
                case 'severity':
                    return { DataType: 'number', Field: 'SeverityLevel', Order: order };
                case 'days-open':
                    return { DataType: 'number', Field: 'DaysOpen', Order: order };
                case 'account':
                    return { DataType: 'string', Field: 'AccountName', Order: order };
            }
        };
        TicketService.prototype.getFilter = function (filterCode) {
            switch (filterCode) {
                case 'default':
                    return { Field: 'DerIsManagedByCurrentUser', Value: '1' };
                case 'all-tickets':
                    return { Field: null, Value: null };
            }
        };
        TicketService.prototype.buildDrillback = function (type, ticket, filterCode) {
            var dateToday = new Date();
            var oneDay = 24 * 60 * 60 * 1000;
            var dateNeeded = ticket.DateNeeded ? new Date(ticket.DateNeeded) : null;
            var daysUntilDue = dateNeeded ? Math.floor((dateToday.getTime() - dateNeeded.getTime()) / oneDay) : null;
            var appliedNamedFilter = 'All Tickets';
            if (filterCode === 'default') {
                if (!ticket.AssignedToID) {
                    appliedNamedFilter = 'All Unassigned Tickets';
                }
                else if (ticket.Status === "Open" && dateNeeded && (daysUntilDue < 0 && daysUntilDue >= -2)) {
                    appliedNamedFilter = 'My Coming Due Tickets';
                }
                else {
                    switch (ticket.Status) {
                        case "Open":
                            appliedNamedFilter = 'My Open Tickets';
                            break;
                        case "Pending":
                        case "Solved":
                            appliedNamedFilter = 'My Tickets';
                            break;
                    }
                }
            }
            else if (filterCode === 'all-tickets') {
                if (!ticket.AssignedToID) {
                    appliedNamedFilter = 'All Unassigned Tickets';
                }
                else if (ticket.Status === "Open" && dateNeeded && daysUntilDue >= 0) {
                    appliedNamedFilter = 'All Past Date Needed Tickets';
                }
                else {
                    switch (ticket.Status) {
                        case "Open":
                            appliedNamedFilter = 'All Tickets';
                            break;
                        case "Pending":
                            appliedNamedFilter = 'All Pending Tickets';
                            break;
                        case "Solved":
                            appliedNamedFilter = 'All Solved Tickets';
                            break;
                    }
                }
            }
            switch (type) {
                case "edit":
                    return encodeURIComponent("CRMTicket(FILTER(ID='" + ticket.ID + "')SETVARVALUES(VarAppliedNamedFilter=" + appliedNamedFilter + ",VarShowDetail=1,VarExtLink=1,InitialCommand=Refresh))");
            }
        };
        TicketService = __decorate([
            core_1.Injectable({
                providedIn: "root"
            })
        ], TicketService);
        return TicketService;
    }());
    exports.TicketService = TicketService;
});
//# sourceMappingURL=ticket.service.js.map