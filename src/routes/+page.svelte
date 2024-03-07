<script lang="ts">
	import Hero from '$components/content/Hero.svelte';

	export let data;
	$: console.log(data.shopDetails);
</script>

<!-- layout.svelte -->
<svelte:head>
	<title>{data.shopDetails.shop.name}</title>
	<!-- <meta name="description" content={description} /> -->
	<!-- <meta property="og:title" content={ogTitle} /> -->
	<!-- <meta property="og:description" content={ogDescription} /> -->
	<!-- <meta property="og:image" content={ogImage} /> -->
	<!-- Other meta tags -->
</svelte:head>

<!-- Hero -->
<Hero />

<!-- Collections -->
<section class="py-6">

</section>
