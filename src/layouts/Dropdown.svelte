<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { writable } from 'svelte/store';
	import DropdownItem from '$layouts/DropdownItem.svelte';

	export let label = '';
	export let items: Array<{ label: string; children: Array<string> }> = [];

	const isDropdownOpen = writable(false);
</script>

<button
	class="relative inline-block text-left"
	on:mouseenter={() => ($isDropdownOpen = true)}
	on:mouseleave={() => ($isDropdownOpen = false)}
>
	<button
		class="flex gap-0.5 items-center hover:bg-secondary px-2 py-3"
		on:mouseenter={() => ($isDropdownOpen = true)}
	>
		<span class="uppercase">{label}</span>
		<span class="icon-[mdi--chevron-down]" />
	</button>

	{#if $isDropdownOpen}
		<div
			class="absolute z-10 w-48 bg-white border shadow-lg"
			role="menu"
			tabindex="0"
			on:mouseenter={() => ($isDropdownOpen = true)}
			on:mouseleave={() => ($isDropdownOpen = false)}
			transition:slide={{ duration: 600, easing: quintOut }}
		>
			{#each items as item, i (i)}
				<DropdownItem label={item.label} children={item.children} />
			{/each}
		</div>
	{/if}
</button>
