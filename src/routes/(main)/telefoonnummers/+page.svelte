<script lang="ts">
	import telefoonnummers from '$lib/data/telefoonnummers.json'

	import Button from '$components/Button.svelte'
	import Display from '$components/Animate.svelte'
	import Table from '$components/Table.svelte'
	import { goto } from '$app/navigation'
	import Customers from '$components/Customers.svelte'

	let words: string[] = ['regionummers', 'landelijke nummers', 'servicenummers']
</script>

<section class="relative overflow-x-hidden container mx-auto text-center bg-opacity-50">
	<div class="absolute inset-0 bg-[url(/hero/telefoonnummers_world.webp)] bg-top bg-cover m-4" />
	<div
		class="relative text-white z-10
		sm:pt-52 sm:pb-44 md:px-20 lg:px-28 pt-20 pb-32
		after:absolute after:inset-0 after:top-0 after:-z-10 after:py-44
		after:bg-gradient-to-tr after:from-primary/40 from-90% after:to-white/20"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">Telefoonnummers</h1>
		<p class="text-lg font-medium">
			Bellen en gebeld worden doe je natuurlijk met een telefoonnummer. Of dit nu een regionaal, een
			landelijk 085/088, een servicenummer (0800/0900/0909) of internationaal telefoonnummer is.
		</p>

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
	</div>
</section>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">
			Wat voor nummer je ook wilt, bij Voyp zit je goed
		</h2>

		<div
			class="md:grid grid-cols-2 gap-6 lg:gap-10 text-sm
			leading-7 lg:text-base lg:leading-8 space-y-10 md:space-y-0"
		>
			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur acity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
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
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
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
				class="mt-8 md:mt-10 border border-primary text-white
				bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 lg:w-6 lg:h-6" />
				</div>
			</Button>
		</div>

		<div class="pt-6 md:pt-0">
			<Table data={telefoonnummers} columnsWidth={['auto', '8rem', '8rem']} class="bg-white" />
		</div>
	</section>
</div>

<Customers />
