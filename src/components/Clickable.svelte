<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let clazz = '';

	export let open = false;
	export { clazz as class };

	const handleClick = () => (open = !open);
</script>

<div class="relative text-sm leading-6">
	<button class="cursor-pointer inline {clazz}" on:click={handleClick}>
		<slot name="label" />
	</button>
	{#if open}
		<div
			transition:slide={{ duration: 600, easing: quintOut }}
			class="w-[17rem] absolute top-8 z-20 bg-[#f7f7fb] rounded-md drop-shadow-lg px-4 py-3"
		>
			<slot name="content" />
		</div>
	{/if}
</div>
