<script>
	import Brand from '$components/Brand.svelte';
	import Accordion2 from '$components/Accordion.svelte';
	import elements from '$lib/data/veelgestelde-vragen.json';
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-16 md:pt-24 pb-14 md:pb-24 mt-6"
>
	<Brand class="w-80 md:w-[33rem] lg:w-[42rem] mx-auto" />
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem]
    w-[200%] rounded-b-[100%] bg-gradient-to-r from-[#A6B1CB] from-10% via-[#B5BFD5] via-30%
    to-[#fff] to-90%"
	/>
</section>

<div class="bg-white">
	<section
		class="container mx-auto text-center px-6 pt-16 md:pt-24 pb-14 md:pb-24 grid lg:grid-cols-2
		gap-y-12 sm:gap-y-16 items-center justify-center lg:justify-between"
	>
		<div>
			<h3 class="text-lg font-semibold pb-8">Klant worden</h3>
			<Accordion2 elements={elements[0]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">App op mobiel</h3>
			<Accordion2 elements={elements[1]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Bestaande klanten</h3>
			<Accordion2 elements={elements[2]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Functies</h3>
			<Accordion2 elements={elements[3]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Administratie</h3>
			<Accordion2 elements={elements[4]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Opzeggen</h3>
			<Accordion2 elements={elements[5]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 pb-20 sm:pb-24 text-sm leading-8 md:grid grid-cols-3 gap-10
     items-start"
	>
		<div class="col-span-2">
			<p class="pb-5">
				Bij Voyp houden we van simpel én toegankelijk. We houden niet van verborgen kosten. Niet
				zoals bij andere aanbieders maandelijks betalen voor functionaliteiten zoals openingstijden
				en een keuzemenu, niet meteen een factuur wanneer je ondersteuning nodig hebt en wél meteen
				geholpen worden zonder uren in de wachtrij te staan.
			</p>
			<p>
				Vanaf € 12,- per maand ben je flexibel en betrouwbaar telefonisch bereikbaar en ben je
				verzekerd van een professionele uitstraling en uitstekende persoonlijke service. Onze
				diensten zijn uiteraard dagelijks opzegbaar. <span class="font-semibold">Meer weten?</span> Chat,
				mail of bel met ons! Wij staan je op werkdagen tussen negen en vijf graag te woord.
			</p>
		</div>

		<div class="col-start-3 col-span-1 pt-8 md:pt-0">
			<h3 class="font-semibold pb-5 text-base">Laatste Voyp updates</h3>
			<div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Voyp gaat samen met BlackGATE</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/">De eerste indruk</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Telefonische drukte opvangen</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Lokaal telefoonnummer vergroot je markt</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Hoe richt ik mijn telefonie in</a>
				</div>
			</div>
		</div>
	</section>
</div>
