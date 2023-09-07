<script lang="ts">
	const scripts = [
		'https://bestellen.voyp.nl/assets/jquery-3.3.1.min.js',
		'https://bestellen.voyp.nl/assets/main-0ddcaf73c9c2e5b56c1842fac8f3b85a.js',
		'https://bestellen.voyp.nl/assets/render-template-fd3e8e164cc2925333578d706af7bd25.js',
		'https://bestellen.voyp.nl/assets/steps-nav-073b837e39919c4aea7173ffda575432.js',
		'https://bestellen.voyp.nl/assets/arrow-buttons-9e8a36fc1fd590a020261d4f0d6d1d4a.js'
	]

	const getPage = async () => {
		const res = await fetch('https://bestellen.voyp.nl/')
		const page = await res.text()

		scripts.map((s) => {
			const script = document.createElement('script')
			script.src = s

			setTimeout(() => document.body.append(script), 300)
		})

		return page
	}
</script>

<div class="hidden xl:block">
	{#await getPage()}
		<div class="text-center">
			<i class="icon-[mdi--loading] animate-spin w-16 h-16 my-12" />
		</div>
	{:then page}
		{@html page}
	{/await}
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
