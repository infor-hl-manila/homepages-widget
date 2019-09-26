/// <reference path="soho-notification.d.ts" />
export declare class SohoNotificationService {
    static ERROR: SohoNotificationType;
    static ALERT: SohoNotificationType;
    static INFO: SohoNotificationType;
    static SUCCESS: SohoNotificationType;
    show(options: SohoNotificationOptions): void;
}
