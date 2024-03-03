import { error } from '@sveltejs/kit';

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
}

export default ShopifyStoreFront;
