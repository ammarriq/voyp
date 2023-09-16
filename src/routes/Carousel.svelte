<script lang="ts">
	import Swiper from 'swiper'
	import { Pagination, Autoplay } from 'swiper/modules'
	import { onMount } from 'svelte'
	import feedback from '$lib/data/feedback.json'
	import 'swiper/css'
	import 'swiper/css/pagination'

	let sliderRef: HTMLElement

	onMount(() => {
		new Swiper(sliderRef, {
			modules: [Pagination, Autoplay],
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false
			// },
			spaceBetween: 30,
			pagination: { el: '.swiper-pagination', clickable: true },
			breakpoints: {
				0: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 }
			}
		})
	})

	const cards: Array<{ name: string; company: string; description: string[] }> = feedback
</script>

<div class="swiper mySwiper !overflow-y-visible" bind:this={sliderRef}>
	<div class="swiper-wrapper flex items-stretch !overflow-y-visible">
		{#each cards as card, i (i)}
			<div class="swiper-slide !h-auto !flex flex-col select-none">
				<i class="icon-[mdi--format-quote-open] w-16 h-16 mx-auto" />
				<div
					class="flex flex-col grow justify-between bg-[#284182]
					text-sm leading-8 font-normal text-white p-4 py-6 rounded-3xl mb-8"
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
	<div class="swiper-pagination !top-[calc(100%+1rem)]" />
</div>

<style lang="postcss">
	:global(.swiper-pagination-bullet) {
		@apply w-3.5 h-3.5 rounded-md;
	}

	:global(.swiper-pagination-bullet:hover) {
		@apply !opacity-50;
	}

	:global(.swiper-pagination-bullet-active) {
		@apply bg-primary;
	}

	:global(.swiper-pagination-bullet-active:hover) {
		@apply !opacity-90;
	}
</style>
