<script lang="ts">
	import { createAccordion } from '@melt-ui/svelte'
	import { slide } from 'svelte/transition'

	export let elements

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: ''
	})

	let items: Array<{
		id: string
		question: string
		answer: Array<string>
	}> = elements

	let className = ''
	export { className as class }
</script>

<div class="mx-auto max-w-2xl rounded-xl bg-white lg:w-[27rem]" {...$root}>
	{#each items as { id, question, answer }, i}
		<div
			{...$item(id)}
			use:item
			class="overflow-hidden transition-colors first:rounded-t-xl
      last:rounded-b-xl"
		>
			<h2 class="flex">
				<button
					{...$trigger(id)}
					use:trigger
					class="flex flex-1 cursor-pointer gap-3 items-center justify-start
					px-3.5 sm:px-5 py-4 text-xs sm:text-sm font-normal
					transition-colors focus:!ring-0
					focus-visible:text-magnum-800 {className}
					{i !== 0 && 'border-t border-t-white'}"
				>
					{#if $isSelected(id)}
						<span class="icon-[mdi--chevron-up] w-6 h-6 shrink-0" />
					{:else}
						<span class="icon-[mdi--chevron-down] w-6 h-6 shrink-0" />
					{/if}

					<span class="text-start">{question}</span>
				</button>
			</h2>
			{#if $isSelected(id)}
				<div
					class="content overflow-hidden bg-secondary text-sm text-primary"
					{...$content(id)}
					use:content
					transition:slide
				>
					<div class="text-start px-5 py-4 space-y-3">
						<span>{answer[0]}</span>
						{#if answer.length > 1}
							<span class="block">{answer[1]}</span>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.content {
		box-shadow: inset 0px 1px 0px theme('colors.white');
	}
</style>
