/// <reference path="soho-tree.d.ts" />
import { Observable } from 'rxjs';
export declare abstract class SohoTreeService {
    abstract getRootTreeNodes(): Observable<SohoTreeNode[]>;
    abstract getTreeNodes(node: SohoTreeNode): Observable<SohoTreeNode[]>;
}
