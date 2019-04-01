/// <reference path="soho-message.d.ts" />
import { SohoMessageRef } from './soho-message.ref';
export declare class SohoMessageService {
    constructor();
    message(options?: SohoMessageOptions): SohoMessageRef;
    error(options?: SohoMessageOptions): SohoMessageRef;
    alert(options?: SohoMessageOptions): SohoMessageRef;
    confirm(options?: SohoMessageOptions): SohoMessageRef;
}
