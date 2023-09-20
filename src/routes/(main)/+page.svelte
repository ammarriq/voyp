<script lang="ts">
	import { goto } from '$app/navigation'

	import Animate from '$components/Animate.svelte'
	import Button, { btnClasses } from '$components/Button.svelte'
	import Link from '$components/Link.svelte'
	import Carousel from './Carousel.svelte'
	import FeedbackHover from './FeedbackHover.svelte'

	let words: string[][] = [
		['het hoort', 'jij wilt', 'het kan'],
		['zonder gedoe', 'zonder addertjes', 'zonder bijbetalen'],
		['hoe werkt het', 'wat is het'],
		['wat is dat', 'wat heb ik nodig']
	]
</script>

<div class="bg-primary">
	<section
		class="container text-white px-6 pt-16 lg:pt-24 pb-16 sm:pb-20 lg:flex lg:justify-between
		text-center lg:text-start items-center gap-14"
	>
		<div>
			<h1 class="inline-block text-5xl lg:text-7xl sm:px-0 pb-8">
				Bellen zoals <br class="block sm:hidden" />
				<Animate class="text-5xl lg:text-7xl" words={words[0]} />
			</h1>
			<p class="pb-5">
				Bellen zonder gedoe, dat is onze missie. Welkom bij Voyp. Geen addertjes onder het gras,
				geen extra maandelijkse kosten voor extra functies en wél onbeperkte en kosteloze support.
				Zakelijke telefonie voor iedereen. Hoe wij dit doen? Met een passie voor telefonie, techniek
				en service.
			</p>
			<p class="pb-10">
				Telefonie hoeft niet moeilijk te zijn en al helemaal niet duur. Vanaf € 12,- per maand ben
				je flexibel en betrouwbaar overal telefonisch bereikbaar.
			</p>
			<div class="flex gap-8 flex-col md:flex-row items-center mb-12">
				<a
					href="/tarieven"
					class="{btnClasses} px-10 py-5 w-max font-semibold bg-white hover:bg-blue-100"
				>
					Bekijk ons aanbod
				</a>
				<a
					href="/bestellen"
					class="{btnClasses} px-10 py-5 w-max font-semibold bg-white hover:bg-blue-100"
				>
					Bereken je kosten
				</a>
			</div>
		</div>
		<img src="/hero/vlogo.png" alt="vlogo" class="mx-auto lg:mx-0 w-60 lg:w-80" />
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-9">Onze vijf zekerheden</h2>
		<p>
			Bij Voyp houden we van simpel én toegankelijk. We houden niet van verborgen kosten. Niet zoals
			bij andere aanbieders maandelijks betalen voor functionaliteiten zoals openingstijden en een
			keuzemenu, niet meteen een factuur wanneer je ondersteuning nodig hebt en wél meteen geholpen
			worden zonder uren in de rij te hoeven staan. Dit zijn onze vijf zekerheden.
		</p>
		<div class="md:flex gap-4 items-center justify-around space-y-7 md:space-y-0 text-sm pt-16">
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

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-10 lg:gap-20 text-center
		 md:text-start items-center justify-between"
	>
		<img
			src="/hero/voyptotaalpakket.png"
			alt="voyptotaalpakket"
			class="w-52 lg:w-80 mx-auto pb-12 md:pb-0"
		/>
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Totaalpakket <br />
				<Animate words={words[1]} class="text-3xl lg:text-5xl" />
			</h2>
			<p class="pb-5">
				Of je nu een eenpitter bent die alleen mobiel bereikbaar wilt zijn of een multinational met
				honderden toestellen en verschillende locaties: bij Voyp zit je goed. Wij snappen namelijk
				dat je telefonie precies moet doen wat jij wilt. Buiten openingstijden een melding dat je
				gesloten bent, toestellen van directe collega’s kunnen opnemen en zien welke collega’s in
				gesprek zijn bijvoorbeeld. Of klanten met een wachtrij en een keuzemenu direct naar de
				juiste afdeling doorverbinden.
			</p>
			<p>
				Bij <a href="/" class="underline hover:no-underline">andere aanbieders</a> betaal je al snel
				tientallen euro’s per maand voor openingstijden, meldingen, keuzemenu’s, wachtrijen, faxen
				of gespreksopnames.
				<a href="/" class="font-semibold underline hover:no-underline">Niet bij ons</a>. Bij ons
				betaal je alleen voor nummers en toestellen. Voor € 12,- per maand krijg je in ons Voyp
				totaalpakket alle mogelijkheden inclusief kosteloze support. Eenvoudig, eerlijk en
				transparant, zoals het hoort.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Overstappen zonder gedoe</h2>
		<div class="grid md:grid-cols-3 gap-5">
			<div class="flex flex-col items-center">
				<h3 class="text-[1.35rem] font-semibold pb-3">Advies</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					In ons eerste contact nemen wij de tijd voor onze klant. We bespreken uitgebreid de wensen
					en mogelijkheden. We denken graag met je mee over een goede invulling van jullie telefonie
					wensen.
				</p>
				<img
					src="/overstappen/overstappenstap1.webp"
					alt="overstappenstap1"
					class="max-w-[12rem]"
				/>
			</div>

			<div class="flex flex-col items-center">
				<img
					src="/overstappen/overstappenstap2.webp"
					alt="overstappenstap2"
					class="hidden md:block max-w-[12rem]"
				/>
				<h3 class="text-[1.35rem] font-semibold pb-3">Aanvraag</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					Welkom bij Voyp. Het nummerbehoud gaan we voor je aanvragen en aansluitend nemen we nog
					even contact met je op om de inhoudelijke wensen te bespreken en te implementeren op ons
					platform.
				</p>
				<img
					src="/overstappen/overstappenstap2.webp"
					alt="overstappenstap2"
					class="block md:hidden max-w-[12rem]"
				/>
			</div>

			<div class="flex flex-col items-center">
				<h3 class="text-[1.35rem] font-semibold pb-3">Oplevering</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					Met onze naadloze overstapservice merk je eigenlijk weinig van de portering. Op het
					afgesproken porteermoment gaan je nieuwe toestelen over en start ook jij met bellen zonder
					gedoe.
				</p>
				<img
					src="/overstappen/overstappenstap3.webp"
					alt="overstappenstap3"
					class="max-w-[12rem]"
				/>
			</div>
		</div>
		<Button
			on:click={() => goto('/bestellen')}
			class="bg-primary mt-5 md:mt-10 text-white hover:bg-white hover:text-primary border border-primary"
		>
			Overstappen naar voyp
		</Button>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-10 lg:gap-20 text-center
		 md:text-start items-center justify-between"
	>
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Echt vast/mobiel <br class="block" />
				<Animate class="text-3xl lg:text-5xl" words={words[2]} />
			</h2>
			<p class="pb-5">
				Vast-Mobiel integratie: je hoort er vaak over. Het is namelijk ideaal: met je mobiele
				telefoon zakelijk bereikbaar, zoals op kantoor. Alleen is het bij de meeste aanbieders niet
				écht zoals op kantoor. Bij veel aanbieders krijg je namelijk een app op je mobiele telefoon.
				Of er wordt doorgeschakeld naar je mobiele nummer, waarvoor je dan gesprekskosten betaald.
			</p>
			<p>
				Met <span class="font-semibold">Voyp Mobiel</span> komt daar verandering in! Met onze SIM-kaart
				kun je bellen zoals je gewend ben, met volledige integratie in je Voyp belplan. Je collega’s
				kunnen zien of je in gesprek bent of zelfs je gesprek voor je aannemen als je in bespreking bent.
				Je belt makkelijk met je eigen 06 nummer óf het nummer van je bedrijf en schakelt eenvoudig intern
				naar collega’s door. Voyp Mobiel is dé oplossing voor de ondernemer die ook onderweg goed bereikbaar
				wil zijn.
			</p>
		</div>
		<img src="./hero/voypmobiel.png" alt="voypmobiel" class="w-52 lg:w-80 mx-auto pt-12 md:pt-0" />
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-10">Wat vinden onze klanten</h2>
		<div class="flex items-center justify-center gap-3">
			<span>9.4</span>
			<span class="flex">
				{#each Array(4) as _, i (i)}
					<i class="icon-[mdi--star] text-yellow-400 w-7 h-7 space-x-0" />
				{/each}
				<i class="icon-[mdi--star-half] text-yellow-400 w-7 h-7" />
			</span>

			<span>65 reviews</span>
			<FeedbackHover />
		</div>

		<p class="py-5">
			Uiteraard vertellen wij je graag dat wij het goed doen. Dat het slim is om te gaan bellen via
			Voyp.<br /> En dat je er goed aan doet om zo snel mogelijk over te stappen. Iedereen wil immers
			bellen zonder gedoe.
		</p>
		<p class="pb-3">
			Nog niet helemaal overtuigd? Onze klanten zijn dat gelukkig wel! Lees hier waarom.
		</p>

		<div class="border border-primary" />

		<div class="pt-5">
			<Carousel />
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-10 lg:gap-20 text-center
		 md:text-start items-center justify-between"
	>
		<img src="/hero/voip1.png" alt="voip1" class="w-52 lg:w-80 mx-auto pb-12 md:pb-0" />
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Voice over IP <br class="block" /><Animate class="text-3xl lg:text-5xl" words={words[3]} />
			</h2>
			<p>
				Vroeger had je een analoge lijn of een ISDN centrale. Simpel gezegd gaat er dan een koper
				draadje van de wijkcentrale je telefoontoestel in (of je eigen ISDN centrale). Daardoor gaat
				je toestel over als je wordt gebeld. Verhuizen of even op een andere plek met je toestel
				bereikbaar zijn? Dat kon niet zomaar, omdat je gebonden was aan de fysieke locatie van je
				toestel.
			</p>
			<p class="py-5">
				VoIP staat voor Voice over IP, oftewel ‘internetbellen’. Je toestel maakt verbinding met het
				internet en meldt zich aan op je eigen telefooncentrale in de cloud. In deze centrale stel
				je alles in, van toestel tot wachtmuziek, van keuzemenu’s tot openingstijden en belplan.
			</p>
			<p>
				Je kunt je toestel dus overal ter wereld aansluiten en bellen en gebeld worden – gewoon met
				je eigen telefoonnummer. Overal goed en betrouwbaar bereikbaar. Bellen anno nu met VoIP in
				een notendop.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<Link href="https://www.vankleeftechniek.nl/">
				<img slot="trigger" src="logos/vankleeftechniek.webp" alt="vankleeftechniek" />
				<p>Van Kleef Techniek</p>
			</Link>
			<Link href="https://www.econe.nl/">
				<img slot="trigger" src="logos/econe.webp" alt="econe" />
				<p>Econe</p>
			</Link>
			<Link href="https://www.renefriso.nl/">
				<img slot="trigger" src="logos/renefriso.webp" alt="renefriso" />
				<p>René Friso</p>
			</Link>
			<Link href="https://www.raket.online/">
				<img slot="trigger" src="logos/raket.webp" alt="raket" />
				<p>Raket</p>
			</Link>
			<Link href="https://www.toprow.com/">
				<img slot="trigger" src="logos/toprow.webp" alt="toprow" />
				<p>Toprow</p>
			</Link>
			<Link href="https://www.viwecom.nl/">
				<img slot="trigger" src="logos/viwecom.webp" alt="viwecom" />
				<p>Viwecom</p>
			</Link>
			<Link href="https://www.schimmel-tdi.nl/">
				<img slot="trigger" src="logos/schimmeltechniek.webp" alt="schimmeltechniek" />
				<p>Schimmel Techniek</p>
			</Link>
			<Link href="https://www.arbec.nl/">
				<img slot="trigger" src="logos/arbec.webp" alt="arbec" />
				<p>Arbec</p>
			</Link>
			<Link href="https://www.heemlanden.nl/">
				<img slot="trigger" src="logos/collegedeheemlanden.webp" alt="collegedeheemlanden" />
				<p>College de Heemlanden</p>
			</Link>
			<Link href="https://www.eldecollege.nl/">
				<img slot="trigger" src="logos/eldecollege.webp" alt="eldecollege" />
				<p>Elde</p>
			</Link>
		</div>
	</section>
</div>