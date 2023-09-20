<script lang="ts">
	import { writable } from 'svelte/store'
	import { createPagination, melt } from '@melt-ui/svelte'
	import { page } from '$app/stores'

	export let count: number

	let currPage = writable(1)

	const {
		elements: { root, pageTrigger },
		states: { pages }
	} = createPagination({
		count,
		perPage: 6,
		defaultPage: 1,
		siblingCount: 1,
		page: currPage
	})

	$: $currPage = +($page.url.searchParams.get('page') ?? 1)
</script>

<nav class="flex mt-8" aria-label="pagination" use:melt={$root}>
	<div class="flex items-center gap-2">
		{#if $currPage !== 1}
			<a
				href="?page={$currPage - 1}"
				class="flex items-center justify-center mr-2
				bg-white text-xs font-semibold cursor-pointer"
			>
				<i class="icon-[mdi--chevron-left] w-4 h-4" />
				<span class="uppercase text-medium">prev</span>
			</a>
		{/if}
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<a
					href="?page={page.value}"
					class="grid h-10 w-10 place-items-center bg-white text-sm
          hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50
          data-[selected]:bg-primary data-[selected]:text-white border"
					use:melt={$pageTrigger(page)}
				>
					{page.value}
				</a>
			{/if}
		{/each}
		{#if $currPage !== Math.ceil(count / 6)}
			<a
				href="?page={$currPage + 1}"
				class="flex items-center justify-center ml-2
				bg-white text-xs font-semibold cursor-pointer"
			>
				<span class="uppercase text-medium">next</span>
				<i class="icon-[mdi--chevron-right] w-4 h-4" />
			</a>
		{/if}
	</div>
</nav>
