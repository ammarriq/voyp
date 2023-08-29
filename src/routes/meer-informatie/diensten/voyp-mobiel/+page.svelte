<script>
	import Button from '$components/Button.svelte';
	import Clickable from '$components/Clickable.svelte';
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-20 sm:pt-28 md:pt-32 pb-32
	sm:pb-36 md:pb-44 mt-6"
>
	<div class="text-white md:px-20 lg:px-28">
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">
			Voyp Mobiel
		</h1>
		<p>
			Vast mobiel integratie zoals het hoort. Met een SIM-kaart van Voyp in je mobiele telefoon bel
			je overal eenvoudig met je mobiele én zakelijke telefoonnummer.
		</p>
	</div>
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem] w-[200%] rounded-b-[100%] bg-gradient-to-b from-primary via-blue-800 to-blue-600"
	/>
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
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-3xl"
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
				<a href="/" class="font-semibold underline">
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
				class="bg-primary mt-10 text-white hover:bg-white hover:text-primary border
				border-primary"
			>
				Direct bestellen
			</Button>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Wat zijn de verschillen</h2>

		<div class="lg:grid grid-cols-3 text-sm leading-7 lg:leading-8">
			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Doorschakelen</h3>
					<Clickable>
						<span slot="label">✗ Gebeld worden kost 7,5 ct p.m.</span>
						<span slot="content">
							Je betaat 7,5 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen extra account nodig </span>
						<span slot="content">
							Een doorschakeling naar een of meerdere mobiele nummers is inbegrepen in het
							Voyp-abonnement
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen app nodig </span>
						<span slot="content"> JJe hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen invloed op accu </span>
						<span slot="content">
							Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling
							naar je mobiel geen invloed op je accugebruik.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Niet afhankelijk van internet </span>
						<span slot="content">
							We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking
							van je mobiele provider.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Niet bellen met vast nummer </span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen interne gesprekken </span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen gespreksopname </span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen doorverbinding mogelijk </span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen BLF status mogelijk </span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
					<span class="cursor-pointer">✓ Dagelijks opzegbaar</span>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Voyp Mobiel</h3>
					<Clickable>
						<span slot="label">✓ Gebeld worden is gratis</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen extra account nodig</span>
						<span slot="content">
							Een doorschakeling naar een of meerdere mobiele nummers is inbegrepen in het
							Voyp-abonnement
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen app nodig</span>
						<span slot="content"> Je hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen invloed op accu</span>
						<span slot="content">
							Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling
							naar je mobiel geen invloed op je accugebruik.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Niet afhankelijk van internet</span>
						<span slot="content">
							We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking
							van je mobiele provider.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Bellen met vast nummer</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Intern bellen mogelijk</span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Gespreksopname mogelijk</span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Doorverbinden mogelijk</span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ BLF status mogelijk</span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
					<p class="cursor-pointer">✓ Dagelijks opzegbaar</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">App op mobiel</h3>
					<Clickable>
						<span slot="label">✓ Gebeld worden is gratis</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Extra account nodig</span>
						<span slot="content">
							Een doorschakeling naar een of meerdere mobiele nummers is inbegrepen in het
							Voyp-abonnement
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ App nodig</span>
						<span slot="content"> Je hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Negatieve invloed op accu</span>
						<span slot="content">
							De app draait op de achtergrond. Afhankelijk van je toestel kan dit een (sterke)
							invloed op je accuduur hebben.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Afhankelijk van internet</span>
						<span slot="content">
							We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking
							van je mobiele provider.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Bellen met vast nummer</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Intern bellen mogelijks</span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Gespreksopname mogelijk</span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Doorverbinding mogelijk</span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ BLF status mogelijk</span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
					<p class="cursor-pointer">✓ Dagelijks opzegbaar</p>
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
		<div class="flex flex-col items-center">
			<img
				src="/hero/vijf-zekerheden.png"
				alt=""
				class="max-w-xs md:max-w-[18.63rem] lg:max-w-sm mx-auto"
			/>

			<Button
				class="bg-primary mt-10 text-white hover:bg-white hover:text-primary border
				border-primary mb-9 md:mb-0"
			>
				Kosten berekenen
			</Button>
		</div>

		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Onze vijf zekerheden
			</h2>
			<p class="pb-5">
				Je telefonie moet het doen. Het liefste altijd. Daarom hanteren we bij Voyp de vijf
				zekerheden waar je ons altijd aan kunt houden. We doen niet aan verborgen kosten of aan
				addertjes onder het gras. Wij geloven in betrouwbare, heldere en open communicatie. Zo
				vertellen wij je eerlijk over storingen en melden we je precies wat je kan verwachten.
			</p>
			<p>
				Met onze persoonlijke service zorgen wij ervoor dat je flexibel en betaalbaar optimaal
				bereikbaar bent. Dit doen we inmiddels ruim 4 jaar naar volle tevredenheid van onze klanten.
				<a href="/" class="font-semibold">Don’t take our word for it, take theirs</a> en ga ook bellen
				zonder gedoe!
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-3.5">Een greep uit onze tevreden klanten</h2>

		<div class="flex items-center justify-center gap-3 pb-14">
			<span>9.4</span>
			<span class="flex">
				{#each Array(4) as _, i (i)}
					<span class="icon-[mdi--star] text-yellow-400 w-7 h-7 space-x-0" />
				{/each}
				<span class="icon-[mdi--star-half] text-yellow-400 w-7 h-7" />
			</span>

			<span>65 reviews</span>
			<span class="icon-[mdi--comment-multiple-outline] text-cyan-500 w-6 h-6" />
		</div>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<a href="https://sieboldnijenhuisarchitect.nl/">
				<img src="/logos/sieboldnijenhuis.png" alt="sieboldnijenhuis" />
			</a>

			<a href="https://www.bts-bv.nl/">
				<img src="/logos/BTS.png" alt="BTS" />
			</a>

			<a href="https://www.misterb.com.nl/">
				<img src="/logos/misterb.png" alt="misterb" />
			</a>

			<a href="https://www.raket.online/">
				<img src="/logos/raket.png" alt="raket" />
			</a>

			<a href="https://dentalsupplies.nl/">
				<img src="/logos/mrdental.png" alt="mrdental" />
			</a>

			<a href="https://www.vankleeftechniek.nl/">
				<img src="/logos/vankleeftechniek.png" alt="vankleeftechniek" />
			</a>

			<a href="https://www.eldecollege.nl/">
				<img src="/logos/eldecollege.png" alt="eldecollege" />
			</a>

			<a href="https://www.bladewp.com/">
				<img src="/logos/bladewp.png" alt="bladewp" />
			</a>

			<a href="https://marmerbehandelen.nl/">
				<img src="/logos/marmerbehandelen.png" alt="marmerbehandelen" />
			</a>

			<a href="https://www.econe.nl/" class="mx-auto col-auto sm:col-span-full md:col-auto">
				<img src="/logos/econe.png" alt="econe" />
			</a>
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
