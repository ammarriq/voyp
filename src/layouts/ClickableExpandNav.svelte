<script>
	import { slide } from 'svelte/transition';

	export let label = '';
	export let href = '';

	export let isOpen = false;
	export let expandable = false;
</script>

<div>
	{#if expandable}
		<button
			on:click={() => (isOpen = !isOpen)}
			class="w-full flex justify-between items-center bg-primary hover:bg-primary/90 text-white
			px-5 py-2.5 transition-colors duration-700"
		>
			{label}
			<span class="icon-[mdi--chevron-down] w-5 h-5 shrink-0" />
		</button>
	{:else}
		<a
			{href}
			class="block p-3 hover:bg-primary/90 hover:text-white
		  transition-colors duration-700"
		>
			{label}
		</a>
	{/if}

	{#if expandable && isOpen}
		<nav
			transition:slide={{ axis: 'y', duration: 50 }}
			class="capitalize w-full flex flex-col justify-between"
		>
			<slot />
		</nav>
	{/if}
</div>
