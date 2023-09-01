<script lang="ts">
	import { onMount } from 'svelte';
	import feedback from '$lib/data/feedback.json';

	import { slide } from 'svelte/transition';

	let currentIndex = 1;

	let cards: Array<{ name: string; company: string; description: string[] }> = feedback;

	let cardsPerPage: number;

	onMount(() => {
		updatecardsPerPage();

		window.addEventListener('resize', updatecardsPerPage);
		return () => window.removeEventListener('resize', updatecardsPerPage);
	});

	function updatecardsPerPage(): void {
		if (window.innerWidth < 768) {
			cardsPerPage = 1; // For mobile
		} else if (window.innerWidth < 1024) {
			cardsPerPage = 2; // For tablets
		} else {
			cardsPerPage = 3; // Default for larger screens
		}
	}

	// function nextCard() {
	// 	currentIndex = currentIndex + 1;
	// }

	// function prevCard() {
	// 	currentIndex = (currentIndex - 1 + cards.length) % cards.length;
	// }

	function goToSlide(index: number) {
		currentIndex = index;
	}

	// let responsivecardsPerPage = 3; // Default for larger screens
</script>

<!-- hidden lg:block -->

<div
	class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
	transition:slide={{ axis: 'x', duration: 700 }}
>
	{#each cards.slice(currentIndex, currentIndex + cardsPerPage) as card, i (i)}
		<div class="flex flex-col select-none">
			<div
				class="flex flex-col grow justify-between bg-[#284182] text-sm leading-8 font-normal
					text-white p-4 py-6 rounded-3xl mb-8"
			>
				<p>{card.description[0]}</p>
				<p>{card.description[1]}</p>
				<p>{card.description[2]}</p>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
				<h4 class="text-sm">{card.company}</h4>
			</div>
		</div>
	{/each}
</div>
<!-- <div class="flex gap-6 justify-center mt-10">
	<button
		class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
		on:click={prevCard}
	>
		<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
	</button>
	<button
		class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
		on:click={nextCard}
	>
		<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
	</button>
</div> -->

<!-- <div class="relative hidden md:block lg:hidden">
	<div class="grid gap-10 grid-cols-2">
		{#each cards.slice(currentIndex, currentIndex + cardsPerPage[1]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex flex-col grow justify-between bg-[#284182] text-sm leading-8 font-normal
					text-white p-4 py-6 rounded-3xl mb-8"
				>
					<p>{card.description[0]}</p>
					<p>{card.description[1]}</p>
					<p>{card.description[2]}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.company}</h4>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex gap-6 justify-center mt-10">
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={prevCard}
		>
			<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
		</button>
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={nextCard}
		>
			<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
		</button>
	</div>
</div>

<div class="relative block md:hidden">
	<div class="grid gap-6 grid-cols-1 sm:px-10">
		{#each cards.slice(currentIndex, currentIndex + cardsPerPage[2]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex flex-col grow justify-between bg-[#284182] text-white text-sm leading-8
					font-normal px-4 py-6 rounded-3xl mb-8 sm:px-10"
				>
					<p>{card.description[0]}</p>
					<p>{card.description[1]}</p>
					<p>{card.description[2]}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.company}</h4>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex gap-6 justify-center mt-10">
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={prevCard}
		>
			<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
		</button>
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={nextCard}
		>
			<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
		</button>
	</div>
</div> -->

<div class="flex justify-center mt-8">
	{#each cards.slice(0, cards.length) as _, index (index)}
		<button
			class="w-4 h-4 mx-1 bg-gray-400 rounded-full cursor-pointer"
			class:bg-blue-500={index === currentIndex}
			on:click={() => goToSlide(index)}
		/>
	{/each}
</div>
