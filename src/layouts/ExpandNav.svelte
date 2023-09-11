<script>
	import { fly } from 'svelte/transition'

	export let label = ''
	export let href = ''

	export let isOpen = false
	export let expandable = false
</script>

<div class="relative">
	{#if expandable}
		<button
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			class="w-full z-20 flex justify-between gap-0.5 hover:text-primary p-3 hover:bg-secondary"
		>
			{label}
			<span class="icon-[mdi--chevron-right] w-4 h-4 shrink-0" />
		</button>
	{:else}
		<a {href} class="hover:text-primary">{label}</a>
	{/if}

	{#if expandable && isOpen}
		<nav
			on:mouseenter={() => (isOpen = true)}
			on:mouseleave={() => (isOpen = false)}
			transition:fly={{ x: '20px' }}
			class="capitalize w-52 max-w-[15rem] z-30 flex flex-col
			absolute -top-[0.05rem] left-[10.8rem] bg-white ml-3 shadow-lg"
		>
			<slot />
		</nav>
	{/if}
</div>
