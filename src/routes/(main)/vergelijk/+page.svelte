<script>
	import { goto } from '$app/navigation'
	import Customers from '$components/Customers.svelte'
	import WatVindenOnzeKlanten from '$components/Wat vinden onze klanten.svelte'
	import OverstappenZonderGedoe from '$components/Overstappen zonder gedoe.svelte'

	import Button from '$components/Button.svelte'
	import Carousel from '../../../components/Carousel.svelte'
	import Hoverable from '$components/Hoverable.svelte'
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
				een 9,4. <a href="./overstappen" class="font-semibold">Huiverig om over te stappen?</a> Nergens
				voor nodig. In 3 eenvoudige stappen stap je over naar Voyp en ga je bellen zoals het hoort.
			</p>

			<Button
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.73rem] lg:text-sm">
					<span class="shrink-0">Direct berekenen of overstappen</span>
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
					Geen hoge maandelijkse kosten en bijbetalen voor extra functies. In ons standaard Voyp
					abonnement krijg je alle mogelijkheden die je nodig hebt. Ook support is inbegrepen.
				</p>
				<p>
					Voor extra telefoonnummers, extra VoIP-accounts, internet en Voyp Mobiel hanteren we
					eerlijke en scherpe <a href="/tarieven" class="underline">tarieven</a>. Ook krijg je
					korting als je meer afneemt.
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
					Als je niet tevreden bent, wie zijn wij dan om je aan een wurgcontract vast te houden.
					Daarom zijn bij ons, met uitzondering van ADSL, de diensten dagelijks opzegbaar.
				</p>
				<p>
					Voor ADSL hanteren we bij het afsluiten van het contract een opzegtermijn van 1 jaar. Na
					dit jaar kun je je ADSL abonnement maandelijks opzeggen.
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

		<div class="relative group col-span-2 lg:col-start-2 lg:col-end-4">
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

		<div class="relative group col-start-2 col-end-4 lg:col-span-2">
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
					Je belplan kun je zelf eenvoudig (laten) aanpassen en uitbreiden. Zo zorgen wij er samen
					voor dat je optimaal bereikbaar bent én blijft. Bellen zonder gedoe.
				</p>
			</div>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<WatVindenOnzeKlanten />
</div>


<OverstappenZonderGedoe />

<div class="bg-secondary">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-7">Servicegericht én betaalbaar</h2>
		<p>
			Soms wil je snel kunnen vergelijken met enkele andere aanbieders. Dat hebben wij al voor je
			gedaan.
		</p>
		<p>Zo kun je ook het kostenaspect eenvoudig meenemen in je beslissing.</p>

		<div
			class="grid sm:grid-cols-2 lg:grid-cols-4 pt-5 lg:pt-16 text-start text-sm z-10
			leading-6"
		>
			<section class="px-5 pb-6">
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

			<section class="px-5 pb-6">
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

			<section class="shadow-full border border-primary px-5 pb-6">
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

			<section class="px-5 pb-6">
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

<Customers />

<style>
	.shadow-full {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	}
</style>
