import type { LayoutServerLoad } from './$types';
import shopify from '$utils/Shopify';

export const load: LayoutServerLoad = async () => {
	return { shopDetails: await shopify.getShopDetails() };
};
