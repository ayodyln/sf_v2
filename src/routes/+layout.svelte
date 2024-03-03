<script>
	import Footer from '$components/shell/Footer.svelte';
	import Header from '$components/shell/Header.svelte';
	import PageHeader from '$components/shell/PageHeader.svelte';
	import '../style.css';
</script>

<Header />

<PageHeader />

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex-1 w-full">
	<slot />
</div>

<Footer />
