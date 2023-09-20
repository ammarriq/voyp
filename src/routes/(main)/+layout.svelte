<script>
	export let data
</script>

<slot />

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 py-14 sm:py-16
		text-sm leading-8 md:grid grid-cols-3 gap-4 items-start"
	>
		<div class="col-span-1">
			<h3 class="font-semibold pb-5 text-base">Laatste Voyp updates</h3>
			<div class="space-y-2">
				{#each data.blogs as blog (blog.slug)}
					<div class="flex items-center gap-2">
						<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
						<a href="/updates/{blog.slug}">{blog.title}</a>
					</div>
				{/each}
			</div>
		</div>
		<div class="col-start-2 col-end-4">
			<p class="pb-5 pt-8 md:pt-0">
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
	</section>
</div>
