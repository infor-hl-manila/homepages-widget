import { ITicket } from "./ticket";

export interface ITicketData {
    IsShowAssignBtn: boolean,
    TabId: string,
    TicketCategory: string,
    Tickets: ITicket[]
}
