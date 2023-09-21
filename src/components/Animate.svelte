<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { elasticOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'

	let clazz = ''
	export { clazz as class }
	export let words: string[] = []

	let index = 0
	let roller: any

	onMount(() => {
		roller = setInterval(
			() => {
				inDelay = words[index].length * 100 + 200

				if (index === words.length - 1) index = 0
				else index++
			},
			4000 + currentWord.length * 100
		)
	})

	onDestroy(() => {
		clearInterval(roller)
	})

	$: currentWord = [...words[index]]
	$: inDelay = 0
</script>

<div class="relative">
	<p class="absolute inset-x-0 sm:left-0 word {clazz} text-[#6EC1E4]">
		{#key index}
			{#each currentWord as letter, i (i)}
				<span
					class="inline-block"
					in:fly|global={{ y: 200, delay: i * 100 + inDelay, duration: 1000, easing: elasticOut }}
					out:fly|global={{ y: -200, delay: i * 100, duration: 200 }}
				>
					{#if !!letter.trim()}
						{letter}
					{:else}
						&nbsp;
					{/if}
				</span>
			{/each}
		{/key}
	</p>

	<p class="word {clazz} text-[#6EC1E4] flex invisible">
		{#each currentWord as letter, i (i)}
			<span>
				{letter}
			</span>
		{/each}
	</p>
</div>
<!-- {#each words as word, index (word)}
	{#if index === index}
		<p class="{clazz} inline-block text-[#6EC1E4]" transition:animateWord>
			{word}
		</p>
	{/if}
{/each} -->
