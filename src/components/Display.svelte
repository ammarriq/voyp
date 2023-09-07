<script lang="ts">
	import { onMount } from 'svelte'
	import anime from 'animejs/lib/anime.js'

	let clazz = ''
	export { clazz as class }
	export let words: string[] = []

	let currentIndex = 0

	const animateWord = (node: HTMLElement) => {
		anime({
			targets: node,
			opacity: [0, 1],
			translateY: [-20, 0],
			duration: 700,
			easing: 'easeOutQuad',
			complete: () => {
				setTimeout(() => {
					// Hide the word after animation completion
					anime({
						targets: node,
						opacity: [1, 0],
						translateY: [0, -20],
						duration: 700,
						easing: 'easeInQuad',
						complete: () => {
							// Trigger the next word animation
							currentIndex = (currentIndex + 1) % words.length
							animateWord(node)
						}
					})
				}, 1000) // Wait for 1 second before hiding the word
			}
		})
	}

	onMount(() => {
		const wordElement = document.querySelector('.word') as HTMLElement

		if (wordElement) animateWord(wordElement)
	})
</script>

<p class="word {clazz} inline-block text-[#6EC1E4]">
	{words[currentIndex]}
</p>

<!-- {#each words as word, index (word)}
	{#if currentIndex === index}
		<p class="{clazz} inline-block text-[#6EC1E4]" transition:animateWord>
			{word}
		</p>
	{/if}
{/each} -->
