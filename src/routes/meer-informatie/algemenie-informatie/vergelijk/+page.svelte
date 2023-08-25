<script>
	import Button from '$components/Button.svelte';
	import Carousel from '$components/Carousel.svelte';
	import Hoverable from '$components/Hoverable.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overstappen loont</h2>

			<p class="pb-5">
				Bij Voyp houden we van simpel én toegankelijk. Verborgen kosten of wurgcontracten houden we
				niet van. Flexibele, betrouwbare en dagelijks aanpasbare telefonie zonder meteen een factuur
				te ontvangen als je ondersteuning nodig hebt en wél meteen geholpen worden zonder uren in de
				rij te hoeven staan.
			</p>
			<p>
				Bellen zonder gedoe dus. Onze klanten beoordelen ons niet voor niets met een gemiddelde van
				een 9,4. <a href="/" class="font-semibold">Huiverig om over te stappen?</a> Nergens voor nodig.
				In 3 eenvoudige stappen stap je over naar Voyp en ga je bellen zoals het hoort.
			</p>

			<Button
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.65rem] md:text-[0.75rem] lg:text-sm">
					<span class="shrink-0">Direct berekenen of overstappen</span>
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
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-10">Wat vinden onze klanten</h2>
		<div class="flex items-center justify-center gap-3">
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

		<p class="py-5">
			Uiteraard vertellen wij je graag dat wij het goed doen. Dat het slim is om te gaan bellen via
			Voyp.<br /> En dat je er goed aan doet om zo snel mogelijk over te stappen. Iedereen wil immers
			bellen zonder gedoe.
		</p>
		<p class="pb-3">
			Nog niet helemaal overtuigd? ​Onze klanten zijn dat gelukkig wel! Lees hier waarom.
		</p>

		<div class="border border-primary" />

		<div class="pt-5">
			<Carousel />
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
				<img src="/homepage/overstappenstap1.png" alt="overstappenstap1" class="max-w-[12rem]" />
			</div>

			<div class="flex flex-col items-center">
				<img
					src="/homepage/overstappenstap2.png"
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
					src="/homepage/overstappenstap2.png"
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
				<img src="/homepage/overstappenstap3.png" alt="overstappenstap3" class="max-w-[12rem]" />
			</div>
		</div>
		<Button
			class="bg-primary mt-5 md:mt-10 text-white hover:bg-white hover:text-primary border border-primary"
		>
			Overstappen naar voyp
		</Button>
	</section>
</div>

<div class="bg-secondary">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-7">Servicegericht én betaalbaar</h2>
		<p>
			Soms wil je snel kunnen vergelijken met enkele andere aanbieders. Dat hebben wij al voor je
			gedaan.
		</p>
		<p>Zo kun je ook het kostenaspect eenvoudig meenemen in je beslissing.</p>

		<div
			class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-5 lg:pt-16 text-start text-sm z-10
			leading-6"
		>
			<section>
				<img src="/logos/kpn.webp" alt="kpn" class="w-80 lg:w-full mx-auto" />

				<div class="border-t border-b border-primary py-3.5">
					<h4 class="font-semibold">Accounts</h4>
					<Hoverable label="€ 6,50 per maand" class="text-red-400">
						<span slot="content">Eenmalige kosten € 29,95, staffelkorting onbekend.</span>
					</Hoverable>

					<h4 class="font-semibold pt-3">Telefoonnummers</h4>
					<span>inbegrepen bij account</span>
				</div>

				<h4 class="font-semibold pt-5">Openingstijden/meldingen</h4>
				<span class="text-green-600">inbegrepen</span>

				<h4 class="font-semibold pt-3">Keuzemenu & wachtrij</h4>
				<span>€ 12,- per maand</span>

				<h4 class="font-semibold pt-3">Gespreksopname</h4>
				<Hoverable label="tegen meerprijs">
					<span slot="content">Op basis van calculatie </span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Conferencerooms</h4>
				<span>onbekend</span>

				<h4 class="font-semibold pt-3">Contractduur</h4>
				<Hoverable label="2 jarig contract" class="text-red-400">
					<span slot="content">Daarna maandelijks opzegbaar </span>
				</Hoverable>

				<div class="border-t border-primary my-3.5" />

				<h4 class="font-semibold pt-1.5">Gesprekstarief vast</h4>
				<span class="text-red-400">€ 0,06 per minuut</span>

				<h4 class="font-semibold pt-3">Gesprekstarief mobiel</h4>
				<span class="text-green-600">€ 0,06 per minuut</span>

				<h4 class="font-semibold pt-3">Starttarief</h4>
				<span class="text-red-400">€ 0,08 per gesprek</span>
			</section>

			<section>
				<img src="/logos/voipzeker.webp" alt="voipzeker" class="w-80 lg:w-full mx-auto" />

				<div class="border-t border-b border-primary py-3.5">
					<h4 class="font-semibold">Accounts</h4>
					<Hoverable label="€ 5,95 per maand">
						<span slot="content">Eenmalige kosten € 29,95, staffelkorting onbekend.</span>
					</Hoverable>

					<h4 class="font-semibold pt-3">Telefoonnummers</h4>
					<Hoverable label="€ 3,- per maand" class="text-red-400">
						<span slot="content">
							<h5 class="font-semibold pb-4">Korting bij afname meer nummers</h5>
							<p>€ 3,- (los nummer, € 15 eenmalig)</p>
							<p>€ 9,95 (10 nummers, € 50 eenmalig)</p>
							<p>€ 19,95 (100 nummers, € 125 eenmalig)</p>
						</span>
					</Hoverable>
				</div>

				<h4 class="font-semibold pt-5">Openingstijden/meldingen</h4>
				<Hoverable label="€ 12,- per maand" class="text-red-400">
					<span slot="content">Onderdeel van pakket small, geen eenmalige kosten </span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Keuzemenu & wachtrij</h4>
				<Hoverable label="€ 15,- per maand">
					<span slot="content">
						Onderdeel van pakket medium, afname pakket small verplicht. Geen eenmalige kosten.
					</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Gespreksopname</h4>
				<Hoverable label="inbegrepen" class="text-green-600">
					<span slot="content">Wordt per mail verzonden. </span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Conferencerooms</h4>
				<span class="text-green-600">inbegrepen</span>

				<h4 class="font-semibold pt-3">Contractduur</h4>
				<Hoverable label="2 jarig contract" class="text-red-400">
					<span slot="content">Daarna maandelijks opzegbaar </span>
				</Hoverable>

				<div class="border-t border-primary my-3.5" />

				<h4 class="font-semibold pt-1.5">Gesprekstarief vast</h4>
				<span class="text-green-600">€ 0,018 per minuut</span>

				<h4 class="font-semibold pt-3">Gesprekstarief mobiel</h4>
				<span>€ 0,069 per minuut</span>

				<h4 class="font-semibold pt-3">Starttarief</h4>
				<span>€ 0,04 per gesprek</span>
			</section>

			<section>
				<img src="/logos/voyp.webp" alt="voyp" class="w-80 lg:w-full mx-auto" />

				<div class="border-t border-b border-primary py-3.5">
					<h4 class="font-semibold">Accounts</h4>
					<Hoverable label="€ 4,- per maand" class="text-green-600">
						<span slot="content">
							<h5 class="font-semibold pb-4">Korting bij afname meer nummers</h5>
							<p>€ 4,- (tot 10 accounts, € 8 eenmalig)</p>
							<p>€ 3,- (10-20 accounts, € 6 eenmalig)</p>
							<p>€ 2,50 (20-50 accounts, € 5 eenmalig)</p>
							<p>€ 2,- (50+ accounts, € 4 eenmalig)</p>
						</span>
					</Hoverable>

					<h4 class="font-semibold pt-3">Telefoonnummers</h4>
					<Hoverable label="€ 2,- per maand" class="text-green-600">
						<span slot="content">
							<h5 class="font-semibold pb-4">Korting bij afname meer nummers</h5>
							<p>€ 2,- (los nummer, € 10 eenmalig)</p>
							<p>€ 10,- (10 nummers, € 30 eenmalig)</p>
							<p>€ 35,- (100 nummers, € 50 eenmalig)</p>
						</span>
					</Hoverable>
				</div>

				<h4 class="font-semibold pt-5">Openingstijden/meldingen</h4>
				<span class="text-green-600">inbegrepen</span>

				<h4 class="font-semibold pt-3">Keuzemenu & wachtrij</h4>
				<Hoverable label="inbegrepen" class="text-green-600">
					<span slot="content">
						<p class="pb-4">€ 100,- eenmalige kosten</p>
						<p>
							<span class="font-semibold">Let op:</span>
							Bestaat uit twee losse opties die ook afzonderlijk zijn te activeren. Voor het keuzemenu
							betaal je € 50,-, voor de wachtrij € 50,-
						</p>
					</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Gespreksopname</h4>
				<Hoverable label="inbegrepen" class="text-green-600">
					<span slot="content">
						30 dagen of automatische upload naar eigen server. Terug te luisteren via MijnVoyp of
						per mail.
					</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Conferencerooms</h4>
				<span class="text-green-600">inbegrepen</span>

				<h4 class="font-semibold pt-3">Contractduur</h4>
				<span class="text-green-600">dagelijks opzegbaar</span>

				<div class="border-t border-primary my-3.5" />

				<h4 class="font-semibold pt-1.5">Gesprekstarief vast</h4>
				<span class="text-green-600">€ 0,022 per minuut</span>

				<h4 class="font-semibold pt-3">Gesprekstarief mobiel</h4>
				<span>€ 0,075 per minuut</span>

				<h4 class="font-semibold pt-3">Starttarief</h4>
				<span>€ 0,05 per gesprek</span>
			</section>

			<section>
				<img src="/logos/verbonden.webp" alt="verbonden" class="w-80 lg:w-full mx-auto" />

				<div class="border-t border-b border-primary py-3.5">
					<h4 class="font-semibold">Accounts</h4>
					<Hoverable label="€ 5,- per maand">
						<span slot="content">
							<h5 class="font-semibold pb-4">Korting bij afname meer nummers</h5>
							<p>€ 5,- (tot 5 accounts, € 15 eenmalig)</p>
							<p>€ 3,50 (5-20 accounts, € 10 eenmalig)</p>
							<p>€ 2,50 (20-50 accounts, € 7,50 eenmalig)</p>
							<p>€ 2,- (50+ accounts, € 5 eenmalig)</p>
						</span>
					</Hoverable>

					<h4 class="font-semibold pt-3">Telefoonnummers</h4>
					<Hoverable label="€ 2,- per maand">
						<span slot="content">
							<h5 class="font-semibold pb-4">Korting bij afname meer nummers</h5>
							<p>€ 2,- (los nummer, € 10 eenmalig)</p>
							<p>€ 12,- (10 nummers, € 25 eenmalig)</p>
							<p>€ 35,- (100 nummers, € 50 eenmalig)</p>
						</span>
					</Hoverable>
				</div>

				<h4 class="font-semibold pt-5">Openingstijden/meldingen</h4>
				<Hoverable label="€ 12,- per maand" class="text-red-400">
					<span slot="content">
						<p class="pb-4">€ 40,- eenmalige kosten</p>
						<p>
							<span class="font-semibold">Let op:</span>
							Bestaat uit twee losse modules die ook afzonderlijk zijn te bestellen voor de helft van
							de hier vermelde prijs.
						</p>
					</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Keuzemenu & wachtrij</h4>
				<Hoverable label="€ 30,- per maand" class="text-red-400">
					<span slot="content">
						<p class="pb-4">€ 120,- eenmalige kosten</p>
						<p>
							<span class="font-semibold">Let op:</span>
							Bestaat uit twee losse modules die ook afzonderlijk zijn te bestellen voor de helft van
							de hier vermelde prijs.
						</p>
					</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Gespreksopname</h4>
				<span class="text-red-400">€ 5,- per 1000 minuten</span>

				<h4 class="font-semibold pt-3">Conferencerooms</h4>
				<Hoverable label="€ 5,- per maand" class="text-red-400">
					<span slot="content">€ 20,- eenmalige kosten</span>
				</Hoverable>

				<h4 class="font-semibold pt-3">Contractduur</h4>
				<span class="text-green-600">dagelijks opzegbaar</span>

				<div class="border-t border-primary my-3.5" />

				<h4 class="font-semibold pt-1.5">Gesprekstarief vast</h4>
				<span>€ 0,021 per minuut</span>

				<h4 class="font-semibold pt-3">Gesprekstarief mobiel</h4>
				<span>€ 0,082 per minuut</span>

				<h4 class="font-semibold pt-3">Starttarief</h4>
				<span class="text-green-600">€ 0,029 per gesprek</span>
			</section>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<img src="/logos/advocatenkantoorjansen.png" alt="advocatenkantoorjansen" />
			<img src="/logos/toprow.png" alt="toprow" />
			<img src="/logos/sunwood.png" alt="sunwood" />
			<img src="/logos/eldecollege.png" alt="eldecollege" />
			<img src="/logos/timeprofit.png" alt="timeprofit" />
			<img src="/logos/mediamansion.png" alt="mediamansion" />
			<img src="/logos/lawspot.png" alt="lawspot" />
			<img src="/logos/cuentas.png" alt="cuentas" />
			<img src="/logos/bladewp.png" alt="bladewp" />
			<img
				src="/logos/tallgrass.png"
				alt="tallgrass"
				class=" mx-auto col-auto sm:col-span-full md:col-auto"
			/>
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
