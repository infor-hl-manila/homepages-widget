// Type definitions for the "infor" object which includes infor.companyon.client.js

declare namespace infor {

	export namespace lime {
		var version: string;
		var ResourcesKeys: any;
		var language: string;
		var locale: string;
		var log: any;
		var getWidgetCacheArg: (id: string) => string;
	}

	export namespace companyon {
		export namespace client {

			/**
			 * Send "prepareApplicationDrillback" message to handle the drillback execution
			 */
			var sendPrepareDrillbackMessage: (link: string) => void;

			/**
			 * Send "prepareFavoriteContext" message to handle the shortcut execution
			 */
			var sendPrepareFavoritesMessage: (link: string) => void;

			var sendMessage: (name: string, data: any) => void;

			var registerMessageHandler: (name: string, handler: Function, namespace?: string) => void;

			var unRegisterMessageHandler: (name: string, namespace?: string) => void;
		}
	}
}

declare var pendo: any;
