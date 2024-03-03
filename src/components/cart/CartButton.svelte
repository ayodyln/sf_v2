<script lang="ts">
	let state: boolean;

	let cart: HTMLDivElement;

	function toggleCart() {
		state = !state;
	}
</script>

<div>
	<button
		type="button"
		class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-800"
		id="user-menu-button"
		aria-expanded="false"
		aria-haspopup="true"
		on:click={toggleCart}
	>
		<span class="absolute -inset-1.5"></span>
		<span class="sr-only">Cart</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5 fill-current">
			<!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.-->
			<path
				class="fa-secondary"
				opacity=".4"
				d="M170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411c2 4.2 3.5 8.8 4.4 13.5L170.7 288z"
			/><path
				class="fa-primary"
				d="M0 24C0 10.7 10.7 0 24 0H69.5c26.9 0 50 19.1 55 45.5l51.6 271c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
			/></svg
		>
	</button>
</div>

<div
	class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
	class:active={state}
	class:in-active={!state}
	class:dropdown-menu-enter-active={state}
	class:dropdown-menu-leave-active={!state}
	role="menu"
	bind:this={cart}
	aria-orientation="vertical"
	aria-labelledby="user-menu-button"
	tabindex="-1"
>
	<!-- Active: "bg-gray-100", Not Active: "" -->
	<a
		href="#"
		class="block px-4 py-2 text-sm text-gray-700"
		role="menuitem"
		tabindex="-1"
		id="user-menu-item-0">Your Profile</a
	>
</div>

<style lang="postcss">
	.active {
		display: initial;
		transition:
			transform ease-out 100ms,
			opacity ease-out 100ms;
		transform: scale(0.95);
		opacity: 0;
	}

	.in-active {
		transition:
			transform ease-in 75ms,
			opacity ease-in 75ms;
		transform: scale(1);
		opacity: 1;
	}

	/* Entering */
	.dropdown-menu-enter-active {
		transform: scale(1);
		opacity: 1;
	}

	/* Leaving */
	.dropdown-menu-leave-active {
		transform: scale(0.95);
		opacity: 0;
	}
</style>
