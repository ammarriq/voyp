<script lang="ts">
	import type { Writable } from 'svelte/store'
	import { createPagination } from '@melt-ui/svelte'

	export let count: number

	export let page: Writable<number>

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count,
		perPage: 10,
		defaultPage: 1,
		siblingCount: 1,
		page
	})
</script>

<nav class="flex justify-end" aria-label="pagination" {...$root} use:root>
	<div class="flex items-center gap-2">
		<button
			class="flex items-center justify-center h-8 w-8 bg-white text-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
      data-[selected]:bg-gray-200 border"
			disabled={$page === 1}
			on:click={() => ($page = 1)}
		>
			<i class="icon-[mdi--chevron-left] w-4 h-4 translate-x-1" />
			<i class="icon-[mdi--chevron-left] w-4 h-4 -translate-x-1" />
		</button>
		<button
			class="grid h-8 w-8 place-items-center bg-white text-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
      data-[selected]:bg-gray-200 border"
			{...$prevButton}
			use:prevButton
		>
			<i class="icon-[mdi--chevron-left] w-4 h-4" />
		</button>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<button
					class="grid h-8 w-8 place-items-center bg-white text-sm
          hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
          data-[selected]:bg-gray-200 border"
					{...$pageTrigger(page)}
					use:pageTrigger
				>
					{page.value}
				</button>
			{/if}
		{/each}
		<button
			class="grid h-8 w-8 place-items-center bg-white text-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
      data-[selected]:bg-gray-200 border"
			{...$nextButton}
			use:nextButton
		>
			<i class="icon-[mdi--chevron-right] w-4 h-4" />
		</button>
		<button
			class="flex items-center justify-center h-8 w-8 bg-white text-sm
      hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
      border"
			disabled={$page === Math.ceil(count / 10)}
			on:click={() => ($page = Math.ceil(count / 10))}
		>
			<i class="icon-[mdi--chevron-right] w-4 h-4 translate-x-1" />
			<i class="icon-[mdi--chevron-right] w-4 h-4 -translate-x-1" />
		</button>
	</div>
</nav>
