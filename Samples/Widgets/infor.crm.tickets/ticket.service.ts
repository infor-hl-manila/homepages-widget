import { Injectable } from "@angular/core";

import { ITicketFilter } from "./ticketfilter";
import { ITicketSort } from "./ticketsort";
import { ITicket } from "./ticket";

@Injectable({
	providedIn: "root"
})
export class TicketService {
	getUrgency (urgency: string): string {
		let newUrgency = urgency;

		if (newUrgency === 'Medium - High'
			|| newUrgency === 'MediumHigh') {
			newUrgency = 'Medium-High';
		}

		if (newUrgency === 'Medium - Low'
			|| newUrgency === 'MediumLow') {
			newUrgency = 'Medium-Low';
		}

		return newUrgency;
	}

	getUrgencyClass (urgency: string): string {
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
	}

	getUrgencyLevel (urgency: string): number {
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
	}

	getSeverityLevel(severity: string): number {
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
	}

	getSort(sortCode: string, order: string): ITicketSort {
		switch(sortCode) {
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
	}

	getFilter(filterCode: string): ITicketFilter {
		switch(filterCode) {
			case 'default':
				return { Field: 'DerIsManagedByCurrentUser', Value: '1' };

			case 'all-tickets':
				return { Field: null, Value: null };
		}
	}

	buildDrillback(type: string, ticket: ITicket, filterCode: string) {
		const dateToday = new Date();
		const oneDay = 24 * 60 * 60 * 1000;
		const dateNeeded = ticket.DateNeeded ? new Date(ticket.DateNeeded) : null;
		const daysUntilDue = dateNeeded ? Math.floor((dateToday.getTime() - dateNeeded.getTime())/oneDay) : null;

		let appliedNamedFilter = 'All Tickets';
		if (filterCode === 'default') {
			if (!ticket.AssignedToID) {
				appliedNamedFilter = 'All Unassigned Tickets';
			} else if (ticket.Status === "Open" && dateNeeded && (daysUntilDue < 0 && daysUntilDue >= -2)) {
				appliedNamedFilter = 'My Coming Due Tickets';
			} else {
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
		} else if (filterCode === 'all-tickets') {
			if (!ticket.AssignedToID) {
				appliedNamedFilter = 'All Unassigned Tickets';
			} else if (ticket.Status === "Open" && dateNeeded && daysUntilDue >= 0) {
				appliedNamedFilter = 'All Past Date Needed Tickets';
			} else {
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

		switch(type) {
			case "edit":
				return encodeURIComponent(`CRMTicket(FILTER(ID='${ticket.ID}')SETVARVALUES(VarAppliedNamedFilter=${appliedNamedFilter},VarShowDetail=1,VarExtLink=1,InitialCommand=Refresh))`);
		}
	}
}
