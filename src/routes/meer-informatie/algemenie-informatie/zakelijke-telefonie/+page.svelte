<script>
	import Button from '$components/Button.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Zakelijke telefonie</h2>

			<p class="pb-5">
				Bellen zonder gedoe, dat is onze missie. Zakelijke telefonie voor iedereen, zonder addertjes
				onder het gras. Van ZZP en MKB tot multinational, bij Voyp zit je goed, voor zowel je vaste
				telefoon als je mobiele telefonie.
			</p>
			<p>
				Bij Voyp houden we van simpel én toegankelijk. Verborgen kosten of wurgcontracten houden we
				niet van. Bij ons zit je dus niet aan een abonnement vast. Flexibele en dagelijks aanpasbare
				telefonie zonder meteen een factuur te ontvangen als je ondersteuning nodig hebt en wél
				meteen geholpen worden zonder uren in de wacht te hoeven staan. Voordelig zakelijk bellen
				met zakelijke telefonie van Voyp. Zoals het hoort. Welkom bij Voyp!
			</p>

			<Button
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.65rem] md:text-[0.75rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-6 h-6" />
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

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center md:grid grid-cols-6
		gap-6 lg:gap-8 text-sm leading-7 lg:text-base lg:leading-8 space-y-10 md:space-y-0"
	>
		<div
			class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl col-span-2 shadow-md"
		>
			<img
				src="/certainties/betaalbaar.webp"
				alt="Betaalbaar"
				class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
			/>
			<p class="font-semibold text-lg">Betaalbaar</p>
			<p class="pt-2 pb-3.5 lg:pb-5">
				Geen hoge maandelijkse kosten en bijbetalen voor extra functies. In ons standaard Voyp
				abonnement krijg je alle mogelijkheden die je nodig hebt. Ook support is inbegrepen.
			</p>
			<p>
				Voor extra telefoonnummers, extra VoIP-accounts, internet en Voyp Mobiel hanteren we
				eerlijke en scherpe <a href="/" class="underline">tarieven</a>. Ook krijg je korting als je
				meer afneemt.
			</p>
		</div>

		<div
			class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl col-span-2 shadow-md"
		>
			<img
				src="/certainties/dagelijks.webp"
				alt="dagelijks"
				class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
			/>
			<p class="font-semibold text-lg">Dagelijks opzegbaar</p>
			<p class="pt-2 pb-3.5 lg:pb-5">
				Als je niet tevreden bent, wie zijn wij dan om je aan een wurgcontract vast te houden.
				Daarom zijn bij ons, met uitzondering van ADSL, de diensten dagelijks opzegbaar.
			</p>
			<p>
				Voor ADSL hanteren we bij het afsluiten van het contract een opzegtermijn van 1 jaar. Na dit
				jaar kun je je ADSL abonnement maandelijks opzeggen.
			</p>
		</div>

		<div
			class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl col-span-2 shadow-md"
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

		<div
			class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl col-start-2 col-end-4
			shadow-md"
		>
			<img
				src="/certainties/persoonlijke.webp"
				alt="Persoonlijke service"
				class="w-32 lg:w-[9.3rem] pb-3 mx-auto"
			/>
			<p class="font-semibold text-lg">Persoonlijke service</p>
			<p class="pt-2 pb-3.5 lg:pb-5">
				Wij zijn dagelijks bereikbaar van negen tot vijf. Bij Voyp geven we je onbeperkte support op
				je telefonie. Dus heb je problemen of vragen? Bel, mail of chat met ons.
			</p>
			<p>
				Wij zorgen ervoor dat we onze klanten én hun telefonie behoeften kennen. Zo hoef je niet
				elke keer alles opnieuw uit te leggen en word je snel geholpen.
			</p>
		</div>

		<div
			class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl col-span-2 shadow-md"
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
				Je belplan kun je zelf eenvoudig (laten) aanpassen en uitbreiden. Zo zorgen wij er samen
				voor dat je optimaal bereikbaar bent én blijft. Bellen zonder gedoe.
			</p>
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
