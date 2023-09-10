<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: 30,
		perPage: 6,
		defaultPage: 1,
		siblingCount: 1
	});
</script>

<nav class="flex flex-col items-center gap-4" aria-label="pagination" use:melt={$root}>
	{#each Array(6) as _, i (i)}
		<div class="sm:flex gap-8 border-b first:pt-0 pt-4 sm:pt-10 pb-10 sm:pb-16">
			<div class="flex sm:flex-col gap-4 pb-4 sm:pt-0 sm:gap-1.5">
				<a href="/">
					<span
						class="icon-[mdi--facebook] w-[1.1rem] h-[1.1rem] text-gray-300 transition-colors duration-300
          hover:text-primary"
					/>
				</a>
				<a href="/">
					<span
						class="icon-[mdi--twitter] w-[1.1rem] h-[1.1rem] text-gray-300 transition-colors duration-300
          hover:text-primary"
					/>
				</a>
				<a href="/">
					<span
						class="icon-[mdi--google] w-[1.1rem] h-[1.1rem] text-gray-300 transition-colors duration-300
          hover:text-primary"
					/>
				</a>
				<a href="/">
					<span
						class="icon-[mdi--linkedin] w-[1.1rem] h-[1.1rem] text-gray-300 transition-colors duration-300
          hover:text-primary"
					/>
				</a>
				<a href="/">
					<span
						class="icon-[mdi--pinterest] w-[1.1rem] h-[1.1rem] text-gray-300 transition-colors duration-300
          hover:text-primary"
					/>
				</a>
			</div>
			<div class="text-sm leading-[1.7rem] sm:leading-7">
				<img src="/updates/voyp-weetjes.png" alt="voyp-weetjes" class="w-48 sm:w-52" />
				<h3 class="font-medium text-lg pt-4 pb-3">Voyp gaat samen met BlackGATE</h3>
				<p>
					We hebben geweldig nieuws om met je te delen! Vanaf 1 augustus 2023 gaan Voyp en BlackGATE
					intensiever samenwerken. Voyp zal voortaan een label zijn van BlackGATE, wat betekent dat…
				</p>
			</div>
		</div>
	{/each}

	<div class="flex items-center gap-2 pt-8">
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
</nav>
