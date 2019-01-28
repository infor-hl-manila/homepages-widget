export declare type WidgetSize = 'single' | 'double' | 'triple' | 'quad';
export declare class SohoWidgetComponent {
    readonly classList: string;
    isWidget: boolean;
    widgetWidth: WidgetSize;
    widgetHeight: WidgetSize | 'auto';
}
