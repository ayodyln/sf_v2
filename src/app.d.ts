// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: string;
			storefront: {
				shop: {
					name: string;
					primaryDomain: {
						host: string;
						url: string;
					};
					paymentSettings: {
						currencyCode: string;
						acceptedCardBrands: string[];
						enabledPresentmentCurrencies: string[];
					};
				};
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
