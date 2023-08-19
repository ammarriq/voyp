<script lang="ts">
	export let cards: Array<{ name: string; desc: string; content: string }>;

	let currentCard = 0;
	let cardsPerPage = [3, 2, 1];

	function nextCard() {
		currentCard = (currentCard + 1) % (cards.length - cardsPerPage[0] + 1);
	}

	function prevCard() {
		currentCard =
			(currentCard - 1 + cards.length - cardsPerPage[0] + 1) % (cards.length - cardsPerPage[0] + 1);
	}
</script>

<div class="relative hidden lg:block">
	<div class="grid gap-6 grid-cols-3 mt-8">
		{#each cards.slice(currentCard, currentCard + cardsPerPage[0]) as card, i (i)}
			<div class="flex flex-col justify-between">
				<div
					class="flex grow items-center bg-[#284182] text-sm leading-8 font-normal text-white
           p-4 py-6 rounded-3xl mb-8"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
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

<div class="relative hidden md:block lg:hidden">
	<div class="grid gap-10 grid-cols-2">
		{#each cards.slice(currentCard, currentCard + cardsPerPage[1]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex grow items-center bg-[#284182] text-sm leading-8 font-normal text-white
           p-4 py-6 rounded-3xl mb-8"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
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
		{#each cards.slice(currentCard, currentCard + cardsPerPage[2]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex grow items-center bg-[#284182] text-white text-sm leading-8 font-normal
           px-4 py-6 rounded-3xl mb-8 sm:px-10"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
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
