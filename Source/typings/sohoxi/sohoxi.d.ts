// Type definitions for Soho XI Controls v4.0.0
// Project: http://git.infor.com/projects/SOHO/repos/controls/browse

declare var sohoxi: any;

declare module "sohoxi" {
	export = sohoxi;
}

interface ILocale {

	/**
	* Set the current Locale
	*/
	set(locale: string): ng.IPromise<string>;

	/**
	* Format a Date Object and return it parsed in the current locale.
	* attrs could be either of type: { date: "short" } or { pattern: "yyyy-MM-dd HH:mm" }
	*/
	formatDate(value: Date, attrs?: any): string;

	/**
	* Take a date string written in the current locale and parse it into a Date Object.
	*/
	parseDate(dateString: string, dateFormat?: string): Date;
}

//declare var Locale: ILocale;

//declare  var Formatters: xi.IFormatters;