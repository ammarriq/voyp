<script>
	import { slide } from 'svelte/transition';

	export let label = '';
	export let href = '';

	export let isOpen = false;
	export let expandable = false;
</script>

<div class="relative">
	{#if expandable}
		<button
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			class="uppercase flex items-center gap-0.5 py-3 px-2 hover:text-primary hover:bg-secondary"
		>
			{label}
			<span class="icon-[mdi--chevron-down] w-4 h-4 shrink-0" />
		</button>
	{:else}
		<a {href} class="hover:text-primary">{label}</a>
	{/if}

	{#if expandable && isOpen}
		<nav
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			transition:slide={{ axis: 'y' }}
			class="w-[11.8rem] max-w-[15rem] absolute flex flex-col bg-white"
		>
			<slot />
		</nav>
	{/if}
</div>
