import ShopifyStoreFront from '$utils/Shopify';
import { SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN } from '$env/static/private';

export async function handle({ event, resolve }) {
	// this cookie would be set inside a login route
	// const session = event.cookies.get('session')

	// you can get the user data from a database
	// const user = await getUser(session)

	// this is passed to `event` inside server `load` functions
	// and passed to handlers inside `+page.ts`

	//* Shopify Client
	const shopify = new ShopifyStoreFront(SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN);
	event.locals.storefront = await shopify.getShopDetails();

	return resolve(event);
}
