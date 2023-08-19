<script lang="ts">
	import { onMount } from 'svelte';

	export let words: string[] = [];

	let clazz = '';

	export { clazz as class };
	let currentIndex = 0;
	let currentWord = '';

	const showNextWord = () => {
		currentWord = words[currentIndex];
		currentIndex = (currentIndex + 1) % words.length;

		setTimeout(() => {
			currentWord = '';
			showNextWord();
		}, 2000); // Delay before hiding and showing the next word
	};

	// Start showing words when the component mounts
	onMount(() => {
		showNextWord();
	});
</script>

<p class="{clazz} inline-block text-[#6EC1E4]">
	{currentWord}
</p>
