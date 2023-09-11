<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte'

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages }
	} = createPagination({
		count: 30,
		perPage: 6,
		defaultPage: 1,
		siblingCount: 1
	})
</script>

<div class="flex items-center gap-2 pt-8" use:melt={$root}>
	<button
		class="grid w-10 h-10 items-center justify-center bg-white text-sm text-magnum-900
		hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
		data-[selected]:text-white border"
		use:melt={$prevButton}
	>
		<span class="icon-[mdi--chevron-left] w-6 h-6" />
	</button>
	{#each $pages as page (page.key)}
		{#if page.type === 'ellipsis'}
			<span>...</span>
		{:else}
			<button
				class="grid w-10 h-10 items-center bg-white text-sm text-magnum-900
				disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
				data-[selected]:text-white data-[selected]:bg-primary border hover:bg-primary
				hover:text-white transition-colors duration-300"
				use:melt={$pageTrigger(page)}>{page.value}</button
			>
		{/if}
	{/each}
	<button
		class="grid w-10 h-10 items-center justify-center bg-white text-sm text-magnum-900
		hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
		data-[selected]:text-white border"
		use:melt={$nextButton}
	>
		<span class="icon-[mdi--chevron-right] w-6 h-6" />
	</button>
</div>
