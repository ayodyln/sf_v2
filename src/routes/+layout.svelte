<script lang="ts">
	import '../style.css';
	import type { LayoutData } from './$types';
	import Footer from '$components/shell/Footer.svelte';
	import Header from '$components/shell/Header.svelte';
	export let data: LayoutData;
</script>

<Header storefront={''} />

<div class="mx-auto max-w-7xl sm:px-6 lg:px-8 flex-1 w-full">
	<slot />
</div>

<Footer />
