<script>
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	export let label = '';
	export let href = '';

	export let isOpen = false;
	export let expandable = false;
	$: pathname = $page.url.pathname;
</script>

<div>
	{#if expandable}
		<button
			on:click={() => (isOpen = !isOpen)}
			class="w-full flex justify-between items-center hover:bg-primary/90 hover:text-white
      px-3 py-1.5 transition-colors duration-700"
		>
			{label}
			<span class="icon-[mdi--chevron-down] w-7 h-7 shrink-0" />
		</button>
	{:else}
		<a {href} class="block p-3 hover:bg-primary/90 hover:text-white transition-colors duration-700">
			{label}
		</a>
	{/if}

	{#if expandable && isOpen}
		<nav transition:slide={{ axis: 'y' }} class="w-full flex flex-col justify-between">
			<slot />
		</nav>
	{/if}
</div>
