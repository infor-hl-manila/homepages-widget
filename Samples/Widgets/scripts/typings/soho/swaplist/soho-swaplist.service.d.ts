/// <reference path="soho-swaplist.d.ts" />
import { Observable } from 'rxjs';
export declare abstract class SohoSwapListService {
    abstract getData(): Observable<SohoSwapListOptions>;
}
