// ENV: Shopify

class ShopifyStoreFront {
	constructor() {}
}

export default ShopifyStoreFront;

// export async function shopifyFetch({ query, variables }) {
//     const endpoint =
//       import.meta.env.VITE_SHOPIFY_API_ENDPOINT ||
//       'https://next-js-store.myshopify.com/api/2021-10/graphql.json';
//     const key =
//       import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN || 'ef7d41c7bf7e1c214074d0d3047bcd7b';

//     try {
//       const result = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Shopify-Storefront-Access-Token': key
//         },
//         body: { query, variables } && JSON.stringify({ query, variables })
//       });

//       return {
//         status: result.status,
//         body: await result.json()
//       };
//     } catch (error) {
//       console.error('Error:', error);
//       return {
//         status: 500,
//         error: 'Error receiving data'
//       };
//     }
//   }
