<script lang="ts">
	import Customers from '$components/Customers.svelte'
	import WatVindenOnzeKlanten from '$components/Wat vinden onze klanten.svelte'	
	import OverstappenZonderGedoe from '$components/Overstappen zonder gedoe.svelte'
	import Vijfzekerhedenblock from '$components/Vijf zekerheden block.svelte'

	import Animate from '$components/Animate.svelte'
	import Button, { btnClasses } from '$components/Button.svelte'


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

<Vijfzekerhedenblock />

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

<OverstappenZonderGedoe />

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-10 lg:gap-20 text-center
		 md:text-start items-center justify-between"
	>
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Echt vast/mobiel <br class="block" />
				<Animate class="block text-3xl lg:text-5xl" words={words[2]} />
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
	<WatVindenOnzeKlanten />
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-10 lg:gap-20 text-center
		 md:text-start items-center justify-between"
	>
		<img src="/hero/voip1.png" alt="voip1" class="w-52 lg:w-80 mx-auto pb-12 md:pb-0" />
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">
				Voice over IP <br />
				<Animate words={words[3]} class="text-3xl lg:text-5xl" />
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

<Customers />


