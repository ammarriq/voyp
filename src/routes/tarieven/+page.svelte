<script>
	import { goto } from '$app/navigation'

	import gesprekskosten from '$lib/data/gesprekskosten.json'
	import abonnementen from '$lib/data/abonnementen.json'
	import voypmobiel from '$lib/data/voyp-mobiel.json'
	import voipaccounts from '$lib/data/voip-accounts.json'
	import telefoonnummers from '$lib/data/telefoonnummers.json'
	import configuratie from '$lib/data/configuratie.json'
	import ondersteuning from '$lib/data/ondersteuning.json'

	import Button from '$components/Button.svelte'
	import Table from '$components/Table.svelte'
	import Accordion from './Accordion.svelte'
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 md:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-8 justify-between
		items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base lg:leading-8 text-center
		md:text-start"
	>
		<div class="">
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overzicht tarieven</h2>

			<p>
				Voor een vaste lage prijs van € 12,- per maand ben je professioneel bereikbaar, of je nu op
				kantoor zit of de hele dag onderweg bent.
			</p>
			<p class="py-5">
				Stop met het betalen voor extra modules zoals openingstijden, keuzemenu’s, meldingen of
				wachtmuziek. Bij ons zit dit inbegrepen in het Voyp abonnement. Dagelijks opzegbaar en
				altijd gratis telefonische support. Bellen zoals het hoort. Welkom bij Voyp.
			</p>
			<p>
				Op deze pagina geven we je inzicht in alle tarieven die we voor onze diensten in rekening
				brengen. Bekijk ook onze <a
					href="/meer-informatie/algemenie-informatie/gesprekstarieven"
					class="font-semibold underline hover:no-underline">gesprekstarieven.</a
				>
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
				class="flex gap-2 flex-col items-center justify-center
				grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/betaalbaar.webp" alt="Betaalbaar" class="w-20 pb-4" />
				<p>Betaalbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center
				grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/dagelijks.webp" alt="Dagelijks opzegbaar" class="w-20 pb-4" />
				<p>Dagelijks opzegbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center
				grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/betrouwbaar.webp" alt="Betrouwbaar" class="w-20 pb-4" />
				<p>Betrouwbaar</p>
			</span>

			<span
				class="flex flex-col items-center justify-center
				grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/persoonlijke.webp" alt="Persoonlijke service" class="w-20 pb-4" />
				<p>Persoonlijke service</p>
			</span>

			<span
				class="flex flex-col items-center justify-center
				grayscale hover:grayscale-0 transition duration-700"
			>
				<img src="/certainties/flexibel.webp" alt="Flexibel" class="w-20 pb-4" />
				<p>Flexibel</p>
			</span>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container max-w-4xl mx-auto px-6 pt-24 pb-20 sm:pb-24 space-y-16">
		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Gesprekskosten</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					Binnen Nederland betaal je 2,2 cent per minuut naar vaste nummers en 7,5 cent per minuut
					naar mobiele nummers. Gesprekken worden afgerekend per seconde. Op alle gesprekken geldt
					een starttarief van 5 cent.
					<a
						href="/meer-informatie/algemenie-informatie/gesprekstarieven"
						class="underline hover:no-underline"
					>
						Kijk hier voor alle <span class="font-semibold">gesprekstarieven.</span>
					</a>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={gesprekskosten} columnsWidth={['auto', '8rem', '8rem']} />
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Abonnementen</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bij Voyp sluit je het Voyp-abonnement af, eventueel aangevuld met Voyp Mobiel
						(SIM-kaarten), glasvezel, ADSL, een antwoordservice of een Counterpath Bria Desktop/Mac
						Licentie.
					</p>
					<p class="pt-5">
						Het Voyp-abonnement sluit je niet af wanneer je een SIP-trunk wilt. Je gaat dan immers
						zelf je eigen telefooncentrale inrichten. Bij een SIP-trunk is het wel altijd
						noodzakelijk om minimaal twee kanalen en 1 los telefoonnummer te bestellen.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div id="voypmobiel">
				<Table data={abonnementen} columnsWidth={['auto', '8rem', '8rem']} />
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Voyp Mobiel</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bij Voyp Mobiel sluit je een dagelijks opzegbare SIM-kaart af. Hierbij wordt standaard
						geen data geleverd. Data kost dan € 12,- per GB.
					</p>
					<p class="pt-5">
						Je kunt ook een databundel afsluiten. Dit is goedkoper. Buiten je bundel betaal je dan
						nog steeds € 12,- per extra GB.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={voypmobiel} columnsWidth={['auto', '8rem', '8rem']} />
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">VoIP-accounts</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bellen doe je met een VoIP-account. Per toestel of app heb je een extra account nodig.
						In het Voyp-abonnement zit het eerste account inbegrepen.
					</p>
					<p class="pt-5">
						Je krijgt korting als je meer accounts afneemt. Zo kan je bedrijf groeien zonder dat je
						factuur enorm meegroeit.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={voipaccounts} columnsWidth={['auto', '8rem', '8rem']} />
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Telefoonnummers</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Om gebeld te worden heb je natuurlijk een telefoonnummer nodig. In het Voyp-abonnement
						zit het eerste telefoonnummer inbegrepen.
					</p>
					<p class="pt-5">
						Je krijgt korting als je meer telefoonnummers afneemt. Zo kan je bedrijf groeien zonder
						dat je factuur enorm meegroeit.
					</p>
					<p class="pt-5">
						Je bestaande nummer kun je ook eenvoudig naar Voyp verhuizen. De kosten hiervoor staan
						ook in onderstaande tabel. De eenmalige kosten voor de telefoonnummers komen voor een
						portering te vervallen, je betaalt dus alleen de verhuiskosten!
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={telefoonnummers} columnsWidth={['auto', '8rem', '8rem']} />
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Configuratie & overig</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Voor het instellen van je keuzemenu en/of wachtrij brengen we eenmalig
						configuratiekosten in rekening. Wij brengen geen maandelijkse kosten in rekening voor
						deze functies. Kleine aanpassingen daarna worden niet opnieuw in rekening gebracht.
					</p>
					<p class="pt-5">
						Voor het inschakelen van de stemactrice en/of het configureren van toestellen die je
						niet bij ons hebt aangeschaft brengen we eenmalig kosten in rekening.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={configuratie} columnsWidth={['auto', '8rem', '8rem']} />
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Ondersteuning</span>

				<div slot="content" class="py-5 px-2">
					Support is kosteloos zolang het gaat om je belplan en eventuele hardware die bij ons is
					aangeschaft. Uiteraard kunnen wij je ook ondersteunen bij andere problemen, zoals
					netwerk-, internet- en/of infrastructurele problemen. Deze ondersteuning wordt al dan niet
					op locatie geleverd en apart gefactureerd.
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<Table data={ondersteuning} columnsWidth={['auto', '8rem', '8rem']} />
		</section>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 pb-20 sm:pb-24 text-sm leading-8 md:grid grid-cols-3 gap-10 items-start"
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
