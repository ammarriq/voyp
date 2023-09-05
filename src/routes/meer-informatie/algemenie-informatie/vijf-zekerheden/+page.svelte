<script>
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Onze vijf zekerheden</h2>

			<p>
				Je telefonie moet het doen. Het liefste altijd. Daarom hanteren we bij Voyp de vijf
				zekerheden waar je ons altijd aan kunt houden.
			</p>
			<p class="py-5">
				Zo ben je bij ons contractvrij. Wij geloven er namelijk niet in om mensen gedwongen klant te
				laten zijn. Daarom zijn je vaste telefonie diensten dagelijks opzegbaar.
			</p>
			<p>
				Wij geloven in betrouwbare, heldere en open communicatie. Zo vertellen wij je eerlijk over
				storingen en melden we je precies wat je kan verwachten. Met onze persoonlijke service
				zorgen wij ervoor dat je flexibel en betaalbaar optimaal bereikbaar bent. Bellen zoals het
				hoort.
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

		<img
			src="/hero/vijf-zekerheden.png"
			alt="Vijf-zekerheden"
			class="mx-auto max-w-xs lg:max-w-[28rem] py-14"
		/>
	</section>
</div>

<div class="bg-secondary">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium">Onze vijf zekerheden</h2>

		<div class="md:flex gap-4 items-center justify-around space-y-7 md:space-y-0 text-sm pt-20">
			<span
				class="flex gap-2 flex-col items-center justify-center grayscale hover:grayscale-0 transition
				 duration-700"
			>
				<img src="/certainties/betaalbaar.webp" alt="Betaalbaar" class="w-20 pb-4" />
				<p>Betaalbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition
				 duration-700"
			>
				<img src="/certainties/dagelijks.webp" alt="Dagelijks opzegbaar" class="w-20 pb-4" />
				<p>Dagelijks opzegbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition
				 duration-700"
			>
				<img src="/certainties/betrouwbaar.webp" alt="Betrouwbaar" class="w-20 pb-4" />
				<p>Betrouwbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition
				 duration-700"
			>
				<img src="/certainties/persoonlijke.webp" alt="Persoonlijke service" class="w-20 pb-4" />
				<p>Persoonlijke service</p>
			</span>

			<span
				class="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition
				 duration-700"
			>
				<img src="/certainties/flexibel.webp" alt="Flexibel" class="w-20 pb-4" />
				<p>Flexibel</p>
			</span>
		</div>
	</section>
</div>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center md:grid grid-cols-4 lg:grid-cols-6
		gap-6 lg:gap-8 text-sm leading-7 lg:text-base lg:leading-8 space-y-10 md:space-y-0"
	>
		<div class="relative group col-span-2">
			<div
				class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
			/>
			<div
				class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
			>
				<img
					src="/certainties/betaalbaar.webp"
					alt="Betaalbaar"
					class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
				/>
				<p class="font-semibold text-lg">Betaalbaar</p>
				<p class="pt-2 pb-3.5 lg:pb-5">
					In ons standaard Voyp abonnement krijg je alle mogelijkheden die je nodig hebt. Zo hoef je
					bij ons niet maandelijks extra te betalen als je je telefonie wilt uitbreiden.
				</p>
				<p>
					Voor extra telefoonnummers en extra VoIP-accounts hanteren we eerlijke en scherpe
					tarieven. Daarnaast krijg je extra korting als je meer afneemt.
				</p>
			</div>
		</div>

		<div class="relative group col-span-2">
			<div
				class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
			/>
			<div
				class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
			>
				<img
					src="/certainties/dagelijks.webp"
					alt="dagelijks"
					class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
				/>
				<p class="font-semibold text-lg">Dagelijks opzegbaar</p>
				<p class="pt-2 pb-3.5 lg:pb-5">
					Bij Voyp houden we niet van wurgcontracten. Daarom kun je iedere dag je accounts,
					SIP-trunks, telefoonnummers, of het Voyp-abonnement bij ons opzeggen.
				</p>
				<p>
					Dit betekent dat je iedere dag je accounts, telefoonnummers of het hele abonnement kunt
					opzeggen. Voor ADSL geldt een contractduur van een jaar.
				</p>
			</div>
		</div>

		<div class="relative group col-span-2">
			<div
				class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
			/>
			<div
				class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
			>
				<img
					src="/certainties/betrouwbaar.webp"
					alt="Betrouwbaar"
					class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
				/>
				<p class="font-semibold text-lg">Betrouwbaar</p>
				<p class="pt-2 pb-3.5 lg:pb-5">
					Van addertjes gaan onze haren recht overeind staan. Je weet vooraf duidelijk wat je moet
					betalen en kunt gesprekskosten altijd inzien. Geen verrassingen achteraf.
				</p>
				<p>
					Uiteraard monitoren we onze diensten en servers, informeren we je pro-actief bij storingen
					en zorgen we er elke dag voor dat jij optimaal bereikbaar bent.
				</p>
			</div>
		</div>

		<div class="relative group lg:col-start-2 col-span-2">
			<div
				class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
			/>
			<div
				class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
			>
				<img
					src="/certainties/persoonlijke.webp"
					alt="Persoonlijke service"
					class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
				/>
				<p class="font-semibold text-lg">Persoonlijke service</p>
				<p class="pt-2 pb-3.5 lg:pb-5">
					Wij zijn dagelijks bereikbaar van negen tot vijf. Bij Voyp geven we je onbeperkte support
					op je telefonie. Dus heb je problemen of vragen? Bel, mail of chat met ons.
				</p>
				<p>
					Wij zorgen ervoor dat we onze klanten én hun telefonie behoeften kennen. Zo hoef je niet
					elke keer alles opnieuw uit te leggen en word je snel geholpen.
				</p>
			</div>
		</div>

		<div class="relative group col-start-2 col-span-2 lg:col-span-2">
			<div
				class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
			/>
			<div
				class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
			>
				<img
					src="/certainties/flexibel.webp"
					alt="Flexibel"
					class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
				/>
				<p class="font-semibold text-lg">Flexibel</p>
				<p class="pt-2 pb-3.5 lg:pb-5">
					Wat voor een multinational ideaal is heb je als ZZP’er niet nodig en andersom. Stel daarom
					eenvoudig je belplan in met functies die jij nodig hebt.
				</p>
				<p>
					Voor deze functies worden geen extra maandelijkse kosten in rekening gebracht. Zo zorgen
					wij er samen voor dat je optimaal bereikbaar bent én blijft.
				</p>
			</div>
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
