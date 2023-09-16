<script lang="ts">
	import voypmobiel from '$lib/data/voyp-mobiel.json'

	import Button from '$components/Button.svelte'
	import Display from '$components/Animate.svelte'
	import Table from '$components/Table.svelte'
	import { goto } from '$app/navigation'

	let words: string[] = ['regionummers', 'landelijke nummers', 'servicenummers']
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-20 sm:pt-28 md:pt-32 pb-32
	sm:pb-36 md:pb-44 mt-6"
>
	<div class="text-white md:px-20 lg:px-28">
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">
			Telefoonnummers
		</h1>
		<p>
			Bellen en gebeld worden doe je natuurlijk met een telefoonnummer. Of dit nu een regionaal, een
			landelijk 085/088, een servicenummer (0800/0900/0909) of internationaal telefoonnummer is.
		</p>
	</div>
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem] w-[200%] rounded-b-[100%] bg-gradient-to-b from-primary via-blue-800 to-blue-600"
	/>
</section>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">
			Wat voor nummer je ook wilt, bij Voyp zit je goed
		</h2>

		<div
			class="md:grid grid-cols-2 gap-6 lg:gap-10 text-sm leading-7 lg:text-base lg:leading-8 space-y-10
			md:space-y-0"
		>
			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Regionaal nummer</h3>
					<p>
						De registratie van een regionummer is eenvoudig. Bij Voyp hebben we altijd nummers op
						voorraad. Nieuwe klanten bellen we altijd op om de bestelling door te nemen, zodat we
						weten uit welke regio je een nummer wilt. Mocht je al een nummer hebben, dan kun je het
						nummer meenemen. Wij zorgen er daarna voor dat het nummer actief wordt en jij ermee kunt
						bellen.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			  rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Internationaal nummer</h3>
					<p>
						Ook internationale telefoonnummers kun je eenvoudig bij ons registreren. Wel heb je,
						afhankelijk van het land waarin je het nummer wilt afnemen, een bewijs van inschrijving
						nodig in het land en/of de stad waarvan je het netnummer wilt afnemen. Hou er rekening
						mee dat het verhuizen van internationale nummers helaas vaak (veel) langer kan duren dan
						bij Nederlandse providers.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Landelijk nummer</h3>
					<p>
						Wanneer je als bedrijf meerdere locaties hebt of niet wilt uitstralen dat je uit een
						bepaalde regio afkomstig bent, dan kun je kiezen voor een landelijk nummer. 085 nummers
						zijn per stuk te bestellen. Voor 088 nummers stelt het ACM aanvullende voorwaarden. Je
						moet er minimaal 100 afnemen en je moet ze eerst aanvragen bij het ACM. Nadat de
						registratie is afgerond kan je deze nummers bij Voyp registreren.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Servicenummer</h3>
					<p>
						Een servicenummer kost € 30,- per maand en is bij Voyp eenvoudig te regelen. Wel moet je
						eerst een servicenummer aanvragen bij het ACM. Als de aanvraag is goedgekeurd activeren
						we het nummer. Voor 0800 nummers worden achteraf gesprekskosten in rekening gebracht. De
						opbrengsten van een 0900-nummer worden verrekend met de kosten, het verschil wordt aan
						het eind van elke daaropvolgende maand overgemaakt.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Nummer meenemen</h3>
					<p>
						Heb je al een telefoonnummer? Deze verhuis je eenvoudig naar Voyp. Stuur ons een factuur
						van je huidige aanbieder en wij regelen het voor je. Het verhuizen kost eenmalig € 10,-
						per los nummer of € 30,- / € 50,- per nummerblok. Bij internationale nummers is dit
						afhankelijk van je huidige aanbieder.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">Je nummer is altijd van jou</h3>
					<p>
						Als je bij ons een nieuw nummer registreert, dan wordt dit nummer op jouw naam gezet.
						Dat betekent dat het nummer vanaf dat moment officieel van jou is. Mocht je ooit weg
						willen bij Voyp dan kun je het nummer zonder problemen meenemen. Dit geldt ook voor
						servicenummers en/of 088 nummers.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-24 md:grid grid-cols-2 gap-5
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F] tracking-tight">
				Tarieven <br class="block" />
				<Display class="text-3xl lg:text-5xl" {words} />
			</h2>

			<p class="pb-5">
				Natuurlijk wil je weten wat het allemaal kost. Op de tarievenpagina vindt je alle tarieven
				in een handig overzicht, hiernaast treft je de tarieven aan voor telefoonnummers.
			</p>
			<p>
				Wil je een nummer meenemen? Dan betaal je niet de eenmalige kosten, maar wel de
				verhuiskosten zoals opgenomen in het tarievenoverzicht. Hou er ook rekening mee dat je voor
				een 088 nummer of een service-nummer een toekenningsbesluit van het ACM moet hebben.
			</p>

			<Button
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 lg:w-6 lg:h-6" />
				</div>
			</Button>
		</div>

		<div class="pt-6 md:pt-0">
			<Table data={voypmobiel} columnsWidth={['auto', '8rem', '8rem']} />
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<a href="https://advocatenkantoorjansen.nl/">
				<img src="/logos/advocatenkantoorjansen.png" alt="advocatenkantoorjansen" />
			</a>

			<a href="https://marmerbehandelen.nl/">
				<img src="/logos/marmerbehandelen.png" alt="marmerbehandelen" />
			</a>

			<a href="https://www.guidato.nl/">
				<img src="/logos/guidato.png" alt="guidato" />
			</a>

			<a href="https://www.viwecom.nl/">
				<img src="/logos/viwecom.png" alt="viwecom" />
			</a>

			<a href="https://mediamansion.nl/">
				<img src="/logos/mediamansion.png" alt="mediamansion" />
			</a>

			<a href="https://www.heemlanden.nl/">
				<img src="/logos/collegedeheemlanden.png" alt="collegedeheemlanden" />
			</a>

			<a href="https://www.moventes.nl/">
				<img src="/logos/moventes.png" alt="moventes" />
			</a>

			<a href="https://www.boomkwekerijheijmans.nl/">
				<img src="/logos/boomkwekerij.png" alt="boomkwekerij" />
			</a>

			<a href="https://schimmel-tdi.nl/">
				<img src="/logos/schimmeltechniek.png" alt="schimmeltechniek" />
			</a>

			<a href="https://www.cuentas.nl/" class=" mx-auto col-auto sm:col-span-full md:col-auto">
				<img src="/logos/cuentas.png" alt="cuentas" />
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
