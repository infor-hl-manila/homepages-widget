import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit, Inject, ViewChild, ViewContainerRef } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SohoToolbarModule, SohoSearchFieldModule, SohoMenuButtonModule, SohoButtonModule, SohoTabsModule, SohoListViewModule, SohoContextualActionPanelRef, SohoContextualActionPanelService, SohoPopDownModule, SohoDropDownModule, SohoRadioButtonModule, SohoLabelModule, SohoLookupModule, SohoMaskModule, SohoEmptyMessageModule, SohoCheckBoxModule, SohoTextAreaModule, SohoPopupMenuModule, SohoContextMenuModule, SohoToastService, SohoBusyIndicatorModule } from "@infor/sohoxi-angular";
import { IWidgetContext, IWidgetInstance, IWidgetAction, widgetContextInjectionToken, widgetInstanceInjectionToken, WidgetState, Log } from "lime";

import { DataService } from "./data.service";
import { SortFilterService } from "./sort-filter.service";
import { TicketService } from "./ticket.service";

import { TicketDetailWorkspaceComponent } from "./ticket-details-workspace.component";
import { CreateTicketWorkspaceComponent } from "./create-ticket-workspace.component";
import { ITicket } from "./ticket";
import { IAssignee } from "./assignee";
import { IContact } from "./contact";
import { IDepartment } from "./department";

import { DateTimePipe } from "./datetime.pipe";
import { ITicketData } from "./ticketdata";

@Component({
	providers: [DateTimePipe],
	template: `
		<div class="tickets-widget-content" [hidden]="isShowCompletedState || isShowErrorState">
			<div class="row no-indent">
				<div class="full-width column">
					<div class="ticket-toolbar row no-indent">
						<div class="toolbar-item searchfield-section">
							<input soho-searchfield
							name="searchfield"
							class="searchfield ticket-searchfield"
							placeholder="Ticket Number, Account, Contact Name, Summary"
							[clearable]="true"
							[(ngModel)]="searchFilter"
							(input)="flexibleSearch()"
							(change)="flexibleSearch($event)"
							(keydown)="onKeyDown($event)" />
						</div>
						<div class="toolbar-item filter-toolbar-item ">
							<button soho-button="tertiary" soho-popdown #filterPopdown{{widgetId}} (click)="removeOtherPopdowns()">
								<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
									<use xlink:href="#icon-filter"></use>
								</svg>
							</button>
							<soho-popdown-contents class="filterPopdown-{{widgetId}}" id="filterPopdownContent-{{widgetId}}">
								<div class="widget">
									<div class="widget-header">
										<h2 class="widget-title">View</h2>
									</div>
									<div class="widget-content" style="overflow: hidden;">
										<div class="listview is-selectable" tabindex="-1" role="listbox">
											<ul role="presentation">
												<li tabindex="0" role="option" aria-posinset="1" aria-setsize="8">
													<input soho-radiobutton
													soho-trackdirty
													id="optionMyTickets-{{widgetId}}" type="radio" name="ogTicketFilter-{{widgetId}}" value="1" checked />
													<label soho-label for="optionMyTickets-{{widgetId}}" [forRadioButton]="true"
													(click)="applySortAndFilters('default')">My Tickets</label>

													<br>

													<input soho-radiobutton
													soho-trackdirty
													id="optionAllTickets-{{widgetId}}" type="radio" name="ogTicketFilter-{{widgetId}}" value="2" />
													<label soho-label for="optionAllTickets-{{widgetId}}" [forRadioButton]="true"
													(click)="applySortAndFilters('all-tickets')">All Tickets</label>
												</li>
												<!--<li role="option" aria-posinset="2" aria-setsize="8">
													FILTER
												</li>
												<li role="option" aria-posinset="2" aria-setsize="8">
													FILTER
												</li>-->
											</ul>
										</div>
									</div>
								</div>
							</soho-popdown-contents>
						</div>
						<div class="toolbar-item sort-toolbar-item">
							<button soho-menu-button class="btn-menu hide-dd-btn" icon="{{ sortOrder == 'desc' ? 'sort-down' : 'sort-up' }}"></button>
							<ul class="popupmenu is-selectable">
								<li class='is-checked' (click)="applySortAndFilters(null, 'default')">
									<a>Urgency</a>
								</li>
								<li>
									<a (click)="applySortAndFilters(null, 'ticket-number')">Ticket Number</a>
								</li>
								<li>
									<a (click)="applySortAndFilters(null, 'date-needed')">Date Needed</a>
								</li>
								<li>
									<a (click)="applySortAndFilters(null, 'severity')">Severity</a>
								</li>
								<li>
									<a (click)="applySortAndFilters(null, 'days-open')">Days Open</a>
								</li>
								<li>
									<a (click)="applySortAndFilters(null, 'account')">Account</a>
								</li>
								<li class="separator"></li>
								<li>
									<a (click)="applySortOrder('asc')">Ascending</a>
								</li>
								<li class='is-checked'>
									<a (click)="applySortOrder('desc')">Descending</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row no-indent">
				<div class="full-width column">
					<div soho-tabs tabCounts="true">
						<div soho-tab-list-container>
							<ul soho-tab-list>
								<li soho-tab><a soho-tab-title tabId="pastdue-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(pastDueTickets) }}</span> Past Due</a></li>
								<li soho-tab><a soho-tab-title tabId="comingdue-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(comingDueTickets) }}</span> Coming Due</a></li>
								<li soho-tab><a soho-tab-title tabId="open-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(openTickets) }}</span> Open</a></li>
								<li soho-tab><a soho-tab-title tabId="pending-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(pendingTickets) }}</span> Pending</a></li>
								<li soho-tab><a soho-tab-title tabId="solved-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(solvedTickets) }}</span> Solved</a></li>
								<li soho-tab-separator></li>
								<li soho-tab><a soho-tab-title tabId="unassigned-view-{{widgetId}}"><span soho-tab-count>{{ getTicketCount(unassignedTickets) }}</span> Unassigned</a></li>
							</ul>
						</div>
					</div>
					<div soho-tab-panel-container>
						<div soho-tab-panel class="ticket-cards-container" tabId="pastdue-view-{{widgetId}}">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card" *ngFor="let ticket of pastDueTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
												<div class="right-section text-muted" [hidden]="ticket.DaysOpen == 0">
													{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? "days" : "day" }} open
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section align-r">
														<div [hidden]="ticket.DerIsManagedByCurrentUser != '1'">
															<button soho-menu-button class="btn-menu ticket-btn-more hide-dd-btn align-r" icon="more"></button>
															<ul class="popupmenu">
																<li (click)="updateTicketStatus(ticket, 'Pending')">
																	<a>Mark as Pending</a>
																</li>
																<li (click)="updateTicketStatus(ticket, 'Solved')">
																	<a>Mark as Solved</a>
																</li>
															</ul>
														</div>
														<div [hidden]="ticket.DerIsManagedByCurrentUser == '1'">
															<div class="ticket-assignee-initials">
																{{ getInitials(ticket.AssignedToName) }}
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(pastDueTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(pastDueTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div soho-tab-panel tabId="comingdue-view-{{widgetId}}" class="ticket-cards-container">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card" *ngFor="let ticket of comingDueTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
												<div class="right-section text-muted" [hidden]="ticket.DaysOpen == 0">
													{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? "days" : "day" }} open
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section">
														<div class="short-block20 ticket-btn-section align-r">
															<div [hidden]="ticket.DerIsManagedByCurrentUser != '1'">
																<button soho-menu-button class="btn-menu ticket-btn-more hide-dd-btn align-r" icon="more"></button>
																<ul class="popupmenu">
																	<li (click)="updateTicketStatus(ticket, 'Pending')">
																		<a>Mark as Pending</a>
																	</li>
																	<li (click)="updateTicketStatus(ticket, 'Solved')">
																		<a>Mark as Solved</a>
																	</li>
																</ul>
															</div>
															<div [hidden]="ticket.DerIsManagedByCurrentUser == '1'">
																<div class="ticket-assignee-initials">
																	{{ getInitials(ticket.AssignedToName) }}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(comingDueTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(comingDueTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div soho-tab-panel tabId="open-view-{{widgetId}}" class="ticket-cards-container">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card" *ngFor="let ticket of openTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
												<div class="right-section text-muted" [hidden]="ticket.DaysOpen == 0">
													{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? "days" : "day" }} open
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section align-r">
														<div [hidden]="ticket.DerIsManagedByCurrentUser != '1'">
															<button soho-menu-button class="btn-menu ticket-btn-more hide-dd-btn align-r" icon="more"></button>
															<ul class="popupmenu">
																<li (click)="updateTicketStatus(ticket, 'Pending')">
																	<a>Mark as Pending</a>
																</li>
																<li (click)="updateTicketStatus(ticket, 'Solved')">
																	<a>Mark as Solved</a>
																</li>
															</ul>
														</div>
														<div [hidden]="ticket.DerIsManagedByCurrentUser == '1'">
															<div class="ticket-assignee-initials">
																{{ getInitials(ticket.AssignedToName) }}
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(openTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(openTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div soho-tab-panel tabId="pending-view-{{widgetId}}" class="ticket-cards-container">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card {{ ticket.IsDue ? 'pending-due-ticket' : '' }}" *ngFor="let ticket of pendingTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
												<div class="right-section text-muted" [hidden]="ticket.DaysOpen == 0">
													{{ ticket.DaysOpen }} {{ ticket.DaysOpen > 1 ? "days" : "day" }} open
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section align-r">
														<div [hidden]="ticket.DerIsManagedByCurrentUser != '1'">
															<!--<button soho-menu-button class="btn-menu ticket-btn-more hide-dd-btn align-r" icon="more"></button>
															<ul class="popupmenu">
																<li (click)="updateTicketStatus(ticket, 'Solved')">
																	<a>Mark as Solved</a>
																</li>
															</ul>-->
															<button soho-button="primary" class="btn-primary ticket-btn background-transparent" (click)="updateTicketStatus(ticket, 'Solved', $event)">
																Mark as Solved
															</button>
														</div>
														<div [hidden]="ticket.DerIsManagedByCurrentUser == '1'">
															<div class="ticket-assignee-initials">
																{{ getInitials(ticket.AssignedToName) }}
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(pendingTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(pendingTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div soho-tab-panel tabId="solved-view-{{widgetId}}" class="ticket-cards-container">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card" *ngFor="let ticket of solvedTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section">
														<div [hidden]="ticket.DerIsManagedByCurrentUser != '1'">
															<button soho-button="primary" class="btn-primary ticket-btn background-transparent" (click)="updateTicketStatus(ticket, 'Open', $event)">
																<!--<svg class="icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-reset"></use>
																</svg>-->
																Reopen
															</button>
														</div>
														<div [hidden]="ticket.DerIsManagedByCurrentUser == '1'">
															<div class="ticket-assignee-initials">
																{{ getInitials(ticket.AssignedToName) }}
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(solvedTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(solvedTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div soho-tab-panel tabId="unassigned-view-{{widgetId}}" class="ticket-cards-container">
							<div class="row no-indent ticket-cards">
								<div class="full-width column">
									<soho-listview>
										<li soho-listview-item class="ticket-card" *ngFor="let ticket of unassignedTickets" (click)="openTicketDetails(ticket)" [hidden]="ticket.IsHidden">
											<div class="ticket-top-info">
												<div class="left-section">
													<div class="urgency-bar-container {{ ticket.UrgencyClass }}">
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="urgency-bar"></div>
														<div class="text-small urgency-bar-label">{{ ticket.Urgency }}</div>
													</div>
												</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="twelve columns ticket-id text-base text-strong">{{ ticket.TicketNumber }}{{ ticket.Type ? ": " + ticket.Type : "" }}</div>
											</div>
											<div class="row no-indent ticket-bottom-info">
												<div class="three columns info-block">
													<div class="text-strong text-small nowrap">
														{{ ticket.Summary }}
													</div>
													<div class="text-descriptive text-small nowrap">
														{{ ticket.AccountName }}
													</div>
												</div>
												<div class="three columns info-block">
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerPrimaryFormattedContactName">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-profile"></use>
															</svg>
															{{ ticket.DerPrimaryFormattedContactName }}
														</div>
													</div>
													<div class="text-descriptive">
														<div [hidden]="!ticket.DerFormattedContactPhoneNumber">
															<svg class="icon info-icon" focusable="false" aria-hidden="true" role="presentation">
																<use xlink:href="#icon-phone"></use>
															</svg>
															{{ ticket.DerFormattedContactPhoneNumber }}
														</div>
													</div>
												</div>
												<div class="six columns info-block">
													<div class="short-block60">
														<div>
															<div class="text-descriptive">
																Date Needed
															</div>
															<div class="text-strong" [hidden]="!ticket.DateNeeded">
																{{ (ticket.DateNeeded | dateTimeFormat | date: "MMM dd, yyyy HH:mma") || "NA" }}
															</div>
														</div>
													</div>
													<div class="short-block20">
														<div class="text-descriptive">
															Severity
														</div>
														<div class="text-strong">
															{{ ticket.Severity }}
														</div>
													</div>
													<div class="short-block20 ticket-btn-section">
														<div>
															<button soho-button="primary" class="btn-primary ticket-btn background-transparent" (click)="assignTicketToMe(ticket, $event)">
																Assign To Me
															</button>
														</div>
													</div>
												</div>
											</div>
										</li>
									</soho-listview>
									<div class="twelve columns ticket-empty-message-container" [hidden]="searchFilter || getTicketCount(unassignedTickets) > 0">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'All Set'"
										[info]="'You have resolved your tickets.'"
										></div>
									</div>
									<div class="twelve columns ticket-empty-message-container" [hidden]="isHideEmptySearchState(unassignedTickets)">
										<div class="ticket-empty-message" soho-emptymessage
										[title]="'No Results'"
										[info]="emptySearchMessage"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row ticket-empty-state" [hidden]="!isShowErrorState">
			<div class="twelve columns">
				<div soho-emptymessage
				[title]="'Something went wrong'"
				[info]="'Check your connection and try again.'"
				[icon]="'icon-empty-error-loading'"
				[color]="'azure'"
				></div>
			</div>
		</div>
		<div class="row ticket-empty-state" [hidden]="!isShowCompletedState">
			<div class="twelve columns">
				<div soho-emptymessage
				[title]="'No tickets yet'"
				[info]="'Once you add some, you will see them here'"
				[icon]="'icon-empty-generic'"
				[color]="'azure'"
				></div>
			</div>
		</div>
		<div class="blank-cover" [hidden]="!isShowCover"></div>
		<div #ticketDetailsPlaceholder></div>
		<div #createTicketPlaceholder></div>
	`,
	styles: [`
		.ticket-toolbar { background-color: #f0f0f0; border-bottom: 1px solid #bdbdbd; height: 35px; }
		.ticket-toolbar > .toolbar-item { display: inline-block; }
		.ticket-toolbar > .searchfield-section { width: calc(100% - 98px); }
		.toolbar-item > button { min-width: 0; padding: 0; }
		.filter-toolbar-item { border-left: 1px solid #bdbdbd;;}
		.filter-toolbar-item > button { width: 43px; }
		.sort-toolbar-item { border-left: 1px solid #bdbdbd; float: right; padding-right: 4px;}
		.sort-toolbar-item > button { width: 43px; }
		.searchfield-section input { border: none; }
		.ticket-searchfield { width: 100%; }
		.v-separator { display: inline-block; height: 100%; border-right: 1px solid #bdbdbd; }

		.ticket-cards-container { padding-top: 0 !important; }
		.ticket-cards { margin: 0; overflow-x: hidden; overflow-y: scroll; }
		.ticket-cards > .column:first-child, .ticket-bottom-info > .columns:first-child  { padding-left: 0px !important; }
		.ticket-card { padding: 16px 16px 0 16px; position: relative; }
		.tickets-widget-content .tab-panel-container { margin-bottom: 0px !important; }
		.tickets-widget-content > .row:last-child, .ticket-card > .row:last-child, .ticket-toolbar { margin-bottom: 0px !important; }
		.pending-due-ticket { border: 1px solid #e84f4f; background-color: rgb(232, 79, 79, .1);  }

		.urgency-bar-container > div { display: inline-block; font-size: 11px; }
		.urgency-bar { background-color: transparent; border: 1px solid #888B94; height: 6px; width: 6px; margin-right: 2px; }
		.urgency-bar-label { padding-left: 5px; }

		.urgency-bar-container.h > .urgency-bar { background-color: #fb3e47; border: none; }

		.urgency-bar-container.mh > .urgency-bar:nth-child(1),
		.urgency-bar-container.mh > .urgency-bar:nth-child(2),
		.urgency-bar-container.mh > .urgency-bar:nth-child(3),
		.urgency-bar-container.mh > .urgency-bar:nth-child(4) { background-color: #f6600c; border: none; }

		.urgency-bar-container.m > .urgency-bar:nth-child(1),
		.urgency-bar-container.m > .urgency-bar:nth-child(2),
		.urgency-bar-container.m > .urgency-bar:nth-child(3) { background-color: #ff8e00; border: none; }

		.urgency-bar-container.ml > .urgency-bar:nth-child(1),
		.urgency-bar-container.ml > .urgency-bar:nth-child(2) { background-color: #ffd600; border: none; }

		.urgency-bar-container.l > .urgency-bar:first-child { background-color: #54a1d3; border: none; }

		.ticket-assignee-initials { background-color: #f0f0f0; border: 1px solid transparent; border-radius: 50%; color: #999999; display: inline-block; font-size: 1.4rem; height: 3.6rem; line-height: 3.6rem; text-align: center; vertical-align: middle; width: 3.6rem; position: absolute; right: 27px; }

		.ticket-id { margin-top: 16px; margin-bottom: 2px; }
		.ticket-top-info { position: absolute; top: 16px; width: calc(100% - 21px); }
		.ticket-top-info > .left-section { float: left; line-height: 15px; }
		.ticket-top-info > .right-section { float: right; padding-right: 20px; }

		.ticket-bottom-info { margin-top: 8px; }
		.ticket-bottom-info > .info-block { padding-bottom: 16px; margin-left: 0px !important; }
		.ticket-bottom-info > .info-block:first-child { min-width: 150px; }
		.ticket-bottom-info > .info-block:nth-child(2) { min-width: 177px; }
		.ticket-bottom-info > .info-block:last-child { min-width: 277px; }
		.info-block > div { line-height: 18px; }
		.info-block > .short-block60 { display: inline-block; vertical-align: top; width: 40%; }
		.info-block > .short-block20 { display: inline-block; vertical-align: top; width: 30%; }
		.info-icon { height: 14px !important; top: 2px; }
		.ticket-btn { background-color: #368ac0 !important; position: absolute; right: 20px; padding-left: 12px; padding-right: 12px; }
		.background-transparent { background-color: transparent !important; color: #368ac0 !important; }
		.ticket-btn-more { position: absolute; right: 20px; }

		.ticket-btn-section > button { min-width: 50px; width: 50px; padding: 0; }

		.ticket-empty-message-container { margin-left: 0px !important; }

		.align-r { text-align: right; }
		.nowrap { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

		.blank-cover { height: calc(100% - 50px); width: 100%; background-color: #ffffff; position: absolute; top: 50px; left: 0; }

		#dropdown-list { z-index: 10000 !important; }
	`]
})
export class TicketsComponent implements OnInit {
	@ViewChild(`ticketDetailsPlaceholder`, { read: ViewContainerRef })
	ticketDetailsPlaceholder: ViewContainerRef;
	createTicketPlaceholder: ViewContainerRef;

	ticketDetailsRef: SohoContextualActionPanelRef<TicketDetailWorkspaceComponent> = null;
	createTicketRef: SohoContextualActionPanelRef<CreateTicketWorkspaceComponent> = null;

	isMobileView: boolean = false;

	segregatedTickets: ITicketData[] = [];
	allTickets: ITicket[] = [];
	unassignedTickets: ITicket[] = [];
	pastDueTickets: ITicket[] = [];
	comingDueTickets: ITicket[] = [];
	openTickets: ITicket[] = [];
	pendingTickets: ITicket[] = [];
	solvedTickets: ITicket[] = [];

	allAssignees: IAssignee[] = [];
	allContacts: IContact[] = [];
	allDepartments: IDepartment[] = [];

	sortCode: string = "default";
	sortOrder: string = "desc";
	filterCode: string = "default";
	searchFilter: string = "";
	searchFilterParams: string[] = ['DerPrimaryFormattedContactName', 'AccountName', 'PrimaryTicketContactEmail', 'Summary', 'TicketNumber'];
	emptySearchMessage: string = "";

	currentUser: IAssignee = {} as IAssignee;

	widgetId: string = "";
	toolbarSearchfieldClass: string = "sf-col1";

	isShowCover: boolean = true;
	isShowCompletedState: boolean = false;
	isShowErrorState: boolean = false;
	isRefreshAllData: boolean = true;

	initCallback: any;
	handleError: any;

	logPrefix: string = '[infor.crm.tickets]';

	constructor(
		@Inject(widgetContextInjectionToken) private readonly widgetContext: IWidgetContext,
		@Inject(widgetInstanceInjectionToken) private readonly widgetInstance: IWidgetInstance,
		private sohoModalDialogService: SohoContextualActionPanelService,
		private ticketService: TicketService,
		private dataService: DataService,
		private sortFilterService: SortFilterService,
		private toastService: SohoToastService) {
		}

	ngOnInit() {
		const _this = this;

		this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;

		this.isShowCover = true;

		this.widgetContext.setState(WidgetState.busy);

		this.widgetId = this.widgetContext.getWidgetInstanceId();

		this.removeOtherPopdowns();

		// Create new ticket
		this.widgetInstance.actions[0].execute = () => {
			_this.createNewTicket();
		};

		// Launch Web Application
		this.widgetInstance.actions[1].execute = () => {
			const url = `?LogicalId={logicalId}`;

			this.widgetContext.launch({url: url});
		};

		this.dataService.init(this.widgetContext);

		this.initCallback = function() {
			_this.widgetContext.setState(WidgetState.busy);
			_this.dataService.getTickets().subscribe((response: any) => {
				_this.allTickets = response.data ? _this.dataService.parseTicketData(response.data) : [];

				if (_this.allTickets.length === 0) {
					_this.isShowCompletedState = true;
				} else {
					_this.isShowCompletedState = false;
				}

				_this.applySortAndFilters(_this.filterCode, _this.sortCode);

				_this.dataService.getAssignees().subscribe((response: any) => {
					_this.allAssignees = response.data ? _this.dataService.parseAssigneeData(response.data) : [];

					_this.dataService.getContacts().subscribe((response: any) => {
						_this.allContacts = response.data ? _this.dataService.parseContactData(response.data) : [];

						_this.dataService.getDepartments().subscribe((response: any) => {
							_this.allDepartments = response.data ? _this.dataService.parseDepartmentData(response.data) : [];

							_this.isRefreshAllData = false;

							_this.recomputeSize();
						}, (error) => { _this.handleError(error, 'Unable to get Department Data'); });
					}, (error) => { _this.handleError(error, 'Unable to get Contacts Data'); });
				}, (error) => { _this.handleError(error, 'Unable to get Assignee Data'); });
			}, (error => { _this.handleError(error, 'Unable to get Ticket Data'); }));
		}

		this.handleError = function (error: any, message: string) {
			_this.isShowErrorState = true;
			// this.isShowToolBar = false;

			Log.error(`${_this.logPrefix} ${message} ${JSON.stringify(error)}`);

			_this.recomputeSize();

			// Hide loader
			_this.widgetContext.setState(WidgetState.running);

			// Hide cover
			_this.isShowCover = false;
		}

		this.dataService.getMongooseConfig(this.initCallback, this.handleError);
	}

	private recomputeSize() {
		this.isShowCover = true;

		const element = this.widgetContext.getElement();
		const toolbarHeight = 35;
		const tabHeaderHeight = 65;
		const errorStateHeight = 192;
		const completedStateHeight = 192;

		if (element[0].children.length > 0) {
			// Recompute scroll heights and widths
			const elementHeight = element[0].parentElement.className.indexOf('double-height') >= 0 ? 708 : 318;
			const ticketCardContainerHeight = elementHeight - toolbarHeight - tabHeaderHeight;
			const errorState = element[0].children[0].children[1];
			const completedState = element[0].children[0].children[2];

			let ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[1].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[2].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[3].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[4].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			ticketCards = element[0].children[0].children[0].children[1].children[0].children[1].children[5].children[0];
			ticketCards.setAttribute('style', `height:${ticketCardContainerHeight}px;`);

			let elementWidth = 360;

			if (element[0].parentElement.className.indexOf('double-width') >= 0) {
				elementWidth = 740;
				this.toolbarSearchfieldClass = 'sf-col2';
			} else if (element[0].parentElement.className.indexOf('triple-width') >= 0) {
				elementWidth = 1120;
				this.toolbarSearchfieldClass = 'sf-col3';
			} else {
				this.toolbarSearchfieldClass = 'sf-col1';
			}

			const toolbarSearchfield = element[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0];
			toolbarSearchfield.setAttribute('style', `width:100%`);

			// Hide dropdown icon
			const ticketBtnMore = element[0].getElementsByClassName('hide-dd-btn');
			for (let i = 0; i < ticketBtnMore.length; i++) {
				const ddIcon = ticketBtnMore[i].children[1];

				const offsetLeft = ddIcon.parentElement.attributes[2].value === 'sort-down' ? 0 : 70;

				ddIcon.setAttribute('style', `left: ${offsetLeft}px; opacity: 0; position: absolute;`);
			}

			const ticketEmptyMessages = element[0].getElementsByClassName('ticket-empty-message');
			for (let i = 0; i < ticketEmptyMessages.length; i++) {
				const ticketEmptyMessage = ticketEmptyMessages[i];

				ticketEmptyMessage.setAttribute('style', `margin-top:${(ticketCardContainerHeight - 114)/2}px`);
			}

			if (elementHeight > completedStateHeight) {
				completedState.setAttribute('style', `margin-top:${(elementHeight - completedStateHeight)/2}px`);
			}

			if (elementHeight > errorStateHeight) {
				errorState.setAttribute('style', `margin-top:${(elementHeight - errorStateHeight)/2}px`);
			}
		}

		this.widgetContext.setState(WidgetState.running);
		this.isShowCover = false;
	}

	private segregateTickets() {
		const dateToday = new Date();
		const oneDay = 24 * 60 * 60 * 1000;

		this.unassignedTickets = [];
		this.pastDueTickets = [];
		this.comingDueTickets = [];
		this.openTickets = [];
		this.pendingTickets = [];
		this.solvedTickets = [];

		this.allTickets.map((ticket) => {
			if (!this.currentUser && ticket.DerIsManagedByCurrentUser == '1') {
				this.currentUser = {
					CRMUserID: ticket.AssignedToID,
					CRMName: ticket.AssignedToName
				};
			}

			const dateNeeded = ticket.DateNeeded ? new Date(ticket.DateNeeded) : null;
			const daysUntilDue = dateNeeded ? Math.floor((dateToday.getTime() - dateNeeded.getTime())/oneDay) : null;

			if (!ticket.AssignedToID) {
				this.unassignedTickets.push(ticket);
			} else if (ticket.Status === "Open" && dateNeeded && daysUntilDue >= 0) {
				this.pastDueTickets.push(ticket);
			} else if (ticket.Status === "Open" && dateNeeded && (daysUntilDue < 0 && daysUntilDue >= -2)) {
				this.comingDueTickets.push(ticket);
			} else {
				switch (ticket.Status) {
					case "Open":
						this.openTickets.push(ticket);
						break;

					case "Pending":
						// Flag is ticket is pending but also due
						ticket.IsDue = dateNeeded && daysUntilDue >= 0;

						this.pendingTickets.push(ticket);
						break;

					case "Solved":
						this.solvedTickets.push(ticket);
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
	}

	openTicketDetails(selectedTicket: ITicket) {
		this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;

		this.ticketDetailsRef = this.sohoModalDialogService.contextualactionpanel(TicketDetailWorkspaceComponent, this.ticketDetailsPlaceholder);
		this.ticketDetailsRef.options({ centerTitle: true, trigger: "immediate" });

		const ticketDetailsBtn = [{
			text: "Go to core app",
			align: "right",
			click: () => {
				const form = this.ticketService.buildDrillback("edit", selectedTicket, this.filterCode);
				const url = `?LogicalId={logicalId}&form=${form}`;

				this.widgetContext.launch({url: url});
			},
			cssClass: "btn-icon",
			icon: '#icon-launch'
		} as SohoContextualActionPanelButton];

		if (selectedTicket.Status === 'Solved'
				|| (selectedTicket.AssignedToID && selectedTicket.AssignedToID != this.currentUser.CRMUserID)) {
			ticketDetailsBtn.push({
				text: "Close",
				align: "left",
				click: () => {
					this.ticketDetailsRef.componentPanel.closeWorkspace();
				},
				cssClass: "btn-icon",
				icon: '#icon-close'
			} as SohoContextualActionPanelButton);
		}

		this.ticketDetailsRef.buttons(ticketDetailsBtn);

		this.ticketDetailsRef.title('Existing Ticket');
		this.ticketDetailsRef.apply(component => {});
		this.ticketDetailsRef.initializeContent(true).open();

		selectedTicket.AssignedToName = selectedTicket.AssignedToName ? selectedTicket.AssignedToName : selectedTicket.AssignedToID ? this.sortFilterService.findItem(this.allAssignees, 'CRMUserID', selectedTicket.AssignedToID) : null;
		this.ticketDetailsRef.componentPanel.dialog = this.ticketDetailsRef;
		this.ticketDetailsRef.componentPanel.ticket = selectedTicket;
		this.ticketDetailsRef.componentPanel.allAssignees = this.allAssignees;
		this.ticketDetailsRef.componentPanel.currentUser = this.currentUser;
		this.ticketDetailsRef.componentPanel.initCallback = this.initCallback;
		this.ticketDetailsRef.componentPanel.handleError = this.handleError;
		this.ticketDetailsRef.componentPanel.isMobileView = this.isMobileView;
		this.sortFilterService.sortArray(this.allAssignees, "CRMName")

		this.ticketDetailsRef.componentPanel.bringAssigneeToTop();
		this.ticketDetailsRef.componentPanel.setWorkspaceData();
	}

	createNewTicket() {
		this.isMobileView = document.getElementsByTagName("body")[0].offsetWidth <= 500;

		this.createTicketRef = this.sohoModalDialogService.contextualactionpanel(CreateTicketWorkspaceComponent, this.ticketDetailsPlaceholder);
		this.createTicketRef.options({ centerTitle: true });

		this.createTicketRef.title("Create New Ticket");
		this.createTicketRef.trigger('immediate');
		this.createTicketRef.apply(component => {});
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
	}

	applySortAndFilters(filterCode?: string, sortCode?: string) {
		this.searchFilter = "";
		this.flexibleSearch();

		const element = this.widgetContext.getElement();
		$(element[0]).find('.searchfield-wrapper').find('.close').addClass('is-empty');

		this.filterCode = filterCode || this.filterCode;
		this.sortCode = sortCode || this.sortCode;

		const ticketSort = this.ticketService.getSort(this.sortCode, this.sortOrder);
		const ticketFilter = this.ticketService.getFilter(this.filterCode);
		this.sortFilterService.sortArray(this.allTickets, ticketSort.Field, ticketSort.DataType, ticketSort.Order, 'DateNeeded');
		this.sortFilterService.filterArray(this.allTickets, ticketFilter.Field, ticketFilter.Value, 'AssignedToID', null);
		this.segregateTickets();
	}

	applySortOrder(sortOrder: string) {
		this.sortOrder = sortOrder;

		this.applySortAndFilters();
	}

	flexibleSearch(ev?: any) {
		// this.searchFilter = searchFilter ? searchFilter : this.searchFilter;

		this.emptySearchMessage = `Your search for "${this.searchFilter}" didn't return any results.`;

		const ticketFilter = this.ticketService.getFilter(this.filterCode);
		this.sortFilterService.filterArray(this.allTickets, ticketFilter.Field, ticketFilter.Value, 'AssignedToID', null);
		this.sortFilterService.flexibleSearch(this.allTickets, this.searchFilter, this.searchFilterParams);
		this.segregateTickets();
	}

	getTicketCount(tickets: ITicket[]): number {
		let count = 0;

		for (let i = 0; i < tickets.length; i++) {
			const tmpTicket = tickets[i];

			if (!tmpTicket.IsHidden && !tmpTicket.IsFiltered) {
				count++;
			}
		}

		return count;
	}

	isHideEmptySearchState(tickets: ITicket[]): boolean {
		return (!this.searchFilter && this.getTicketCount(tickets) > 0) || (!this.searchFilter && this.getTicketCount(tickets) === 0) || (this.searchFilter && this.getTicketCount(tickets) > 0)
	}

	updateTicketStatus(ticket: ITicket, status: string, ev?: any) {
		if (ev) {
			ev.stopPropagation();
			ev.preventDefault();
		}

		this.widgetContext.setState(WidgetState.busy);

		ticket.Status = status;

		let toastTitle = 'Ticket Status Changed';
		let toastMessage = `Your changes to ticket ${ticket.TicketNumber} have been saved.`;

		if (status === "Open") {
			toastTitle = 'Status Changed';
			toastMessage = `Ticket ${ticket.TicketNumber} has been reopened.`;
		}

		this.dataService.putTicket(ticket, ['Status'])
        .subscribe((response) => {
            this.toastService.show({
                title: toastTitle,
                message: toastMessage,
                timeout: 4000
            });

            this.initCallback();
        }, (error) => { this.handleError(error, 'Unable to update Ticket Status'); });
	}

	assignTicketToMe(ticket: ITicket, ev?: any) {
		if (ev) {
			ev.stopPropagation();
			ev.preventDefault();
		}

		this.widgetContext.setState(WidgetState.busy);

		ticket.AssignedToID = this.currentUser.CRMUserID;
		ticket.AssignedToName = this.currentUser.CRMName;
		ticket.DerIsManagedByCurrentUser = '1';
		ticket.Status = 'Open';

		this.dataService.putTicket(ticket, ['AssignedToID', 'AssignedToName', 'DerIsManagedByCurrentUser', 'Status'])
        .subscribe((response) => {
            this.toastService.show({
                title: 'Ticket Assigned',
                message: `Ticket ${ticket.TicketNumber} has been assigned to you.`,
                timeout: 4000
            });

            this.initCallback();
        }, (error) => { this.handleError(error, 'Unable to assign ticket to me'); });
	}

	getInitials(name: string) {
		let initials = name[0];

		for (let i = name.length - 1; i >= 1; i--) {
			let char1 = name[i];
			let char2 = name[i - 1];

			if(char2 == " ") {
				initials += char1;
				break;
			}
		}

		return initials;
	}

	onKeyDown(ev: any) {
		if (ev.code === "Enter" && ev.currentTarget.value === "") {
			this.searchFilter = "";

			this.flexibleSearch();
		}
	}

	removeOtherPopdowns() {
		// Destroy function on popdown not yet available in angular
		const filterPopdowns = $(`.filterPopdown-${this.widgetId}`);
		for (let i = 0; i < filterPopdowns.length - 1; i++) {
			$(filterPopdowns[i]).remove();
		}
	}
}

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, SohoToolbarModule, SohoSearchFieldModule, SohoButtonModule,SohoMenuButtonModule, SohoTabsModule, SohoListViewModule, SohoPopDownModule, SohoDropDownModule, SohoRadioButtonModule, SohoLabelModule, SohoLookupModule, SohoMaskModule, SohoEmptyMessageModule, SohoCheckBoxModule, SohoTextAreaModule, SohoPopupMenuModule, SohoContextMenuModule, SohoBusyIndicatorModule],
	declarations: [TicketsComponent, TicketDetailWorkspaceComponent, CreateTicketWorkspaceComponent, DateTimePipe],
	entryComponents: [TicketsComponent, TicketDetailWorkspaceComponent, CreateTicketWorkspaceComponent]
})
export class TicketsModule {
}

export const getActions = (context: IWidgetContext): IWidgetAction[] => {
	const language = context.getLanguage();
	return [{
		isPrimary: true,
		standardIconName: "#icon-add",
		text: "Create New Ticket"
	}, {
		isPrimary: false,
		text: "Launch Web Appication"
	}];
};
