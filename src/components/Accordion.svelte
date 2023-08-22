<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let open = false;
	let clazz = '';
	export { clazz as class };

	const handleClick = () => (open = !open);
</script>

<div class={clazz}>
	<button class="w-full flex items-center" on:click={handleClick}>
		{#if open}
			<slot name="open" />
		{:else}
			<slot name="close" />
		{/if}

		<slot name="title" />
	</button>

	{#if open}
		<div transition:slide={{ duration: 600, easing: quintOut }}>
			<slot name="content" />
		</div>
	{/if}
</div>
