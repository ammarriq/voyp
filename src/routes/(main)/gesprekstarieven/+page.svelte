<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import SearchableTable from './SearchableTable.svelte'
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 sm:pt-16 lg:pt-10 pb-8 md:pb-24 md:flex gap-3 lg:gap-7
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div class="">
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overzicht gesprekstarieven</h2>

			<p class="pb-5">
				Binnen Nederland bel je voor 2,2 cent naar vaste telefoonnummers en voor 7,5 cent naar
				mobiele nummers. Buiten Nederland vind je eenvoudig de geldende gesprekstarieven in de tabel
				hieronder. Je kan zowel op land als op landcode zoeken.
			</p>
			<p>
				Op al onze gesprekken is een starttarief van 5 cent van toepassing. Gesprekken worden
				uiteraard afgerekend per seconde.
			</p>

			<Button
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.73rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
				</div>
			</Button>
		</div>

		<img src=" /hero/tarieven.webp" alt="tarieven" class="mx-auto max-w-xs lg:max-w-[28rem]" />
	</section>
</div>

<div class="bg-secondary">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium">Onze vijf zekerheden</h2>

		<div class="md:flex gap-4 items-center justify-around space-y-7 md:space-y-0 text-sm pt-20">
			<span
				class="flex gap-2 flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/betaalbaar.webp" alt="Betaalbaar" class="w-20 pb-4" />
				<p>Betaalbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/dagelijks.webp" alt="Dagelijks opzegbaar" class="w-20 pb-4" />
				<p>Dagelijks opzegbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/betrouwbaar.webp" alt="Betrouwbaar" class="w-20 pb-4" />
				<p>Betrouwbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/persoonlijke.webp" alt="Persoonlijke service" class="w-20 pb-4" />
				<p>Persoonlijke service</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/flexibel.webp" alt="Flexibel" class="w-20 pb-4" />
				<p>Flexibel</p>
			</span>
		</div>
	</section>
</div>

<div>
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<SearchableTable />
	</section>
</div>
