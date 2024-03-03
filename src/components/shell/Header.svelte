<script lang="ts">
	import { page } from '$app/stores';
	import HamburgerButton from './HamburgerButton.svelte';
	import MobileHeader from './MobileHeader.svelte';
	import CartButton from '$components/cart/CartButton.svelte';

	export let storefront: any;

	const navlinks = [
		{
			name: 'Dashboard',
			path: '/'
		},
		{
			name: 'Collections',
			path: '/collections'
		},
		{
			name: 'Blog',
			path: '/blog'
		}
	];
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img class="h-8 w-8" src="/favicon.png" alt={storefront.shop.name} />
				</div>

				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						{#each navlinks as r}
							<a
								href={r.path}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								class:active-page={$page.route.id === r.path}
								aria-current={$page.route.id === r.path ? 'page' : undefined}
							>
								{r.name}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<div class="relative ml-3">
						<CartButton />
					</div>
				</div>
			</div>

			<HamburgerButton />
		</div>
	</div>

	<MobileHeader />
</nav>

<style lang="postcss">
	.active-page {
		@apply bg-gray-900 text-white;
	}
</style>
