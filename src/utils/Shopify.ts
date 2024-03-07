import { error } from '@sveltejs/kit';
import { SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN } from '$env/static/private';

type IO = { query: string; variables: string };

class ShopifyStoreFront {
	private _endpoint: string;
	private _key: string;

	constructor(_endpoint: string, _key: string) {
		this._endpoint = _endpoint;
		this._key = _key;
	}

	private async _apiRequest({ query, variables }: IO) {
		const shopifyRequest = await fetch(this._endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': this._key
			},
			body: JSON.stringify({ query, variables })
		});

		if (shopifyRequest.status !== 200) {
			error(404, 'Error fetching data from Shopify');
		}

		const response = await shopifyRequest.json();

		return response.data;
	}

	// GraphQL Queries
	getShopDetails() {
		return this._apiRequest({
			query: `
		        query getShopDetails{
		            shop {
		                name
		                primaryDomain{
		                    host
		                    url
		                }
		                paymentSettings{
		                    currencyCode
		                    acceptedCardBrands
		                    enabledPresentmentCurrencies
		                }
		            }
		        }
		    `,
			variables: ''
		});
	}

	getCollections() {
		return this._apiRequest({
			query: `{
				collections(first: 100) {
					 edges {
						node {
							handle
							products(
								first: 100,
								sortKey: TITLE
		
							) {
								edges{
									node {
										id
										handle
										availableForSale
										title
										description
										descriptionHtml
										options {
											id
											name
											values
										}
										priceRange {
											maxVariantPrice {
												amount
												currencyCode
											}
											minVariantPrice {
												amount
												currencyCode
											}
										}
										variants(first: 250) {
											pageInfo {
												hasNextPage
												hasPreviousPage
											}
											edges {
												node {
													id
													title
													sku
													availableForSale
													requiresShipping
													selectedOptions {
														name
														value
													}
													priceV2 {
														amount
														currencyCode
													}
													compareAtPriceV2 {
														amount
														currencyCode
													}
												}
											}
										}
										images(first: 20) {
											pageInfo {
												hasNextPage
												hasPreviousPage
											}
											edges {
												node {
													originalSrc
													altText
													width
													height
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}`,
			variables: ''
		});
	}

	// Assertions
	helloWorld() {
		return 'Hello World';
	}
}

const shopify = new ShopifyStoreFront(SHOPIFY_API_ENDPOINT, SHOPIFY_STOREFONT_API_TOKEN);

export default shopify;
