<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Clickable from '$components/Clickable.svelte'
	import Customers from '$components/Customers.svelte'
	import Vijfzekerhedenblockveeltext from '$components/Vijf zekerheden block veel text.svelte';
	import VerschillenAppMobielDoorschakelen from '$components/Verschillen App Mobiel Doorschakelen.svelte';
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center bg-opacity-50
	pt-20 pb-32 sm:pt-52 sm:pb-44 mt-6 bg-[url(/hero/voypmobiel.webp)] bg-cover bg-center
	after:absolute after:inset-0 after:bg-gradient-to-r after:from-primary/20 after:to-white/20"
>
	<div class="text-white md:px-20 lg:px-28">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">Voyp Mobiel</h1>
		<p class="text-lg font-semibold">
			Vast mobiel integratie zoals het hoort. Met een SIM-kaart van Voyp in je mobiele telefoon bel
			je overal eenvoudig met je mobiele én zakelijke telefoonnummer.
		</p>
	</div>
	<svg
		class="absolute inset-x-0 bottom-0 overflow-hidden fill-white z-50"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1000 100"
		preserveAspectRatio="none"
	>
		<path
			class="elementor-shape-fill"
			d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
		/>
	</svg>
</section>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">
			Mobiele telefonie met de kwaliteit van Voyp
		</h2>

		<div
			class="md:grid grid-cols-5 gap-6 lg:gap-10 text-sm md:text-[0.734rem] leading-7 lg:text-base
      lg:leading-8 space-y-10 md:space-y-0"
		>
			<div class="relative group col-span-3">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			    rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Hoe werkt het</h3>
					<p class="pb-5">
						Vast-Mobiel integratie: je hoort er vaak over. Het is namelijk ideaal: met je mobiele
						telefoon zakelijk bereikbaar, zoals op kantoor. Alleen is het bij de meeste aanbieders
						niet écht zoals op kantoor. Door middel van een doorschakeling of een app op je mobiel
						ben je weliswaar bereikbaar, maar kun je niet alles wat je op kantoor kunt.
					</p>
					<p>
						Met <span class="font-semibold">Voyp Mobiel</span> komt daar verandering in! Met onze SIM-kaart
						kun je bellen zoals je gewend ben, met volledige integratie in je Voyp belplan. Je collega’s
						kunnen zien of je in gesprek bent of zelfs je gesprek voor je aannemen als je in bespreking
						bent. Je belt makkelijk met je eigen 06 nummer óf het nummer van je bedrijf en schakelt eenvoudig
						intern naar collega’s door.
					</p>
				</div>
			</div>

			<div class="relative group col-span-2">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 text-start bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">De voordelen</h3>
					<p>✓ Uitbellen met mobiel én vast numer</p>
					<p>✓ Eenvoudig je 06 nummer behouden</p>
					<p>✓ Geen doorschakelkosten s</p>
					<p>✓ Niet afhankelijk van data-netwerk</p>
					<p>✓ Geen batterijslurpende app</p>
					<p>✓ Ook in het buitenland geldig</p>
					<p>✓ Via het betrouwbare T-Mobile netwerk</p>
					<p>✓ Bellen zoals op kantoor: intern bellen, in de wacht en doorverbinden</p>
					<p>
						✓ Ook ideaal voor ZZP'ers: zakelijke bereikbaarheid zoals het hoort, mobiele vrijheid
						zoals je bent gewend
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-8 lg:gap-10 text-center
		 md:text-start items-center justify-between"
	>
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Wat moet ik kiezen
			</h2>
			<p class="pb-5">
				Simpel mobiel bereikbaar zijn kun je regelen met een doorschakeling. Wij schakelen dan het
				gesprek door naar je mobiele telefoon. Dit kost 7,5 cent per minuut en je kunt niet
				uitbellen met je vaste nummer. Je kunt ook kiezen voor de app. Je hebt dan geen
				doorschakelkosten en kunt ook uitbellen met je vaste nummer. Hiervoor moet het internet
				stabiel zijn op je mobiele telefoon. Ook moet de app altijd aanstaan, wat een negatieve
				invloed heeft op je batterij.
			</p>
			<p>
				Een SIM-kaart heeft geen afhankelijkheid van je internetverbinding én je hebt geen
				doorschakelkosten. Met Voyp Mobiel heb je dus de optimale integratie van je vaste telefonie
				in je mobiele telefoon.
				<a href="/tarieven#voypmobiel" class="font-semibold underline">
					Dit kan al vanaf € 15,- per maand per simkaart.
				</a>
				Sluit daarnaast nog een databundel (2GB, 6Gb of 10GB) af die in heel Europa geldig is en je ziet
				het: Voyp Mobiel is dé oplossing voor de ondernemer die ook onderweg goed bereikbaar wil zijn.
				Of je nu eenpitter bent of een totaal-oplossing zoekt voor al je medewerkers waarbij vaste telefonie
				en mobiele telefonie gecombineerd worden, bij Voyp zit je goed.
			</p>
		</div>

		<div class="flex flex-col items-center mt-9 md:mt-0">
			<img src="/hero/voypmobiel.png" alt="voypmobiel" class="max-w-[17rem] mx-auto" />

			<Button
				on:click={() => goto('/bestellen')}
				class="bg-primary mt-10 text-white hover:bg-white hover:text-primary border
				border-primary"
			>
				Direct bestellen
			</Button>
		</div>
	</section>
</div>

<VerschillenAppMobielDoorschakelen />

<Vijfzekerhedenblockveeltext />

<Customers />
