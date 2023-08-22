<script lang="ts">
	import anime from 'animejs/lib/anime.js';

	import { onMount } from 'svelte';

	export let words: string[] = [];

	let clazz = '';

	export { clazz as class };
	let currentIndex = 0;
	// let currentWord = '';

	// const showNextWord = () => {
	// 	currentWord = words[currentIndex];
	// 	currentIndex = (currentIndex + 1) % words.length;

	// 	setTimeout(() => {
	// 		currentWord = '';
	// 		showNextWord();
	// 	}, 2000); // Delay before hiding and showing the next word
	// };

	// function animateWord(node: HTMLElement): () => void {
	// 	anime
	// 		.timeline({ loop: true })
	// 		.add({
	// 			targets: node,
	// 			translateY: [100, 0],
	// 			translateZ: 0,
	// 			opacity: [0, 1],
	// 			easing: 'easeOutExpo',
	// 			duration: 1400
	// 			// delay: (el, i) => 300 + 30 * i
	// 		})
	// 		.add({
	// 			targets: node,
	// 			translateY: [0, -100],
	// 			opacity: [1, 0],
	// 			easing: 'easeInExpo',
	// 			duration: 1200
	// 			// delay: (el, i) => 100 + 30 * i
	// 		});

	// 	return () => {};
	// }

	// Start showing words when the component mounts
	// onMount(() => {
	// 	const interval = setInterval(() => {
	// 		currentIndex = (currentIndex + 1) % words.length;
	// 	}, 2000);

	// 	return () => clearInterval(interval);
	// });

	// onMount(() => {
	//
	// });

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
							currentIndex = (currentIndex + 1) % words.length;
							animateWord(node);
						}
					});
				}, 1000); // Wait for 1 second before hiding the word
			}
		});
	};

	onMount(() => {
		const wordElement = document.querySelector('.word') as HTMLElement;
		if (wordElement) {
			animateWord(wordElement);
		}
	});
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
