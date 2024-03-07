// See https://kit.svelte.dev/docs/types#app

import type ShopifyStoreFront from '$utils/Shopify';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: string;
			shopify: ShopifyStoreFront;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
