import { NgZone } from '@angular/core';
export declare class SohoRenderLoopService {
    private ngZone;
    private renderLoopCount;
    constructor(ngZone: NgZone);
    start(): void;
    stop(): void;
    getCurrentCount(): number;
}
