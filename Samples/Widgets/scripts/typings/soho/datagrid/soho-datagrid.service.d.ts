/// <reference path="soho-datagrid.d.ts" />
import { Observable } from 'rxjs';
export declare abstract class SohoDataGridService {
    abstract getColumns(): SohoDataGridColumn[];
    abstract getData(req: SohoDataGridSourceRequest): Observable<any[]>;
}
