<script lang="ts">
	import { goto } from '$app/navigation'
	import Button, { btnClasses } from '$components/Button.svelte'

	const pdfFilename = 'HandleidingMijnVoyp.pdf'
</script>

<div class="bg-white" id="functionaliteiten">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Inrichten telefonie</h2>

			<p class="pb-5">
				Als klant bij Voyp kun je makkelijk via onze portal je eigen belplan instellen. Zo kun je
				dus eenvoudig de functionaliteiten die zijn inbegrepen in je Voyp-abonnement op je
				telefoonnummer instellen. Activeer je meldingen, stel je openingstijden in of pas je
				belgroep aan, alles binnen een muisklik.
			</p>
			<p>
				Op deze pagina leggen we je uit welke functionaliteiten je allemaal kunt instellen, hoe een
				antwoordservice werkt en welke support je van ons kunt verwachten. Bellen zoals het hoort,
				zonder gedoe.
			</p>

			<Button
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm">
					<span class="shrink-0">Kosten berekenen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
				</div>
			</Button>
		</div>

		<img src="/hero/uitleg.png" alt="uitleg" class="mx-auto max-w-xs lg:max-w-[28rem] py-14" />
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
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-8">De functionaliteiten</h2>
		<p>
			In ons standaard Voyp abonnement krijg je alle mogelijkheden die je nodig hebt. Zo hoef je bij
			ons niet maandelijks extra te betalen als je je telefonie wilt uitbreiden. Hieronder leggen we
			uit aan welke functionaliteiten je kunt denken. Mis je iets? Neem contact met ons op. Wij
			denken graag met je mee!
		</p>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-[2.8rem] pt-20">
			<div>
				<span class="icon-[mdi--clock-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Openingstijden</h3>
				<p>
					Stel eenvoudig je openings- tijden in. Zo kun je klanten die buiten openingstijden bellen
					wijzen op je website.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--volume-low] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Meldingen</h3>
				<p>
					Speel een professioneel ingesproken melding af aan je klanten. “Welkom bij mijn bedrijf.
					Een klein ogenblik.”
				</p>
			</div>

			<div>
				<span class="icon-[mdi--arrow-expand-all] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Keuzemenu</h3>
				<p>
					Verbind zonder tussenkomst van de receptie je klanten direct door naar de juiste afdeling
					en medewerkers.
				</p>
			</div>
			<div>
				<span class="icon-[mdi--gesture-tap] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Wachtrij</h3>
				<p>
					Je klanten worden in een wachtrij geplaatst en op volgorde naar de afdeling of medewerker
					doorverbonden.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--account-tie-voice-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Voicemails</h3>
				<p>
					Als je geen antwoordservice neemt, kunnen klanten een bericht achterlaten die we per mail
					toesturen.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--email-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Fax</h3>
				<p>
					Faxen stuur je eenvoudig via onze portal. Ontvangen faxen kun je downloaden of mailen we
					als PDF naar je toe.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--account-group-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Conference</h3>
				<p>
					Eenvoudig en makkelijk vergaderen met andere collega’s of klanten. Je kunt dit ook
					opnemen.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--circle-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Gespreksopname</h3>
				<p>
					Gesprekken kunnen worden opgenomen. Deze kun je eenvoudig 30 dagen lang terugluisteren via
					de portal.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--play-circle-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Wachtmuziek</h3>
				<p>
					Kies zelf welk wachtmuziekje je klant te horen krijgt. Stuur ons het nummer toe en wij
					activeren dit voor je.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--account-search-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Meeluisteren</h3>
				<p>
					Luister vanaf een ander toestel mee. Handig om bijvoorbeeld feedback aan je medewerkers te
					geven.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--desktop-tower-monitor] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">BLF</h3>
				<p>
					Monitor op je toestel of collega’s in gesprek zijn of neem eenvoudig een gesprek van je
					collega op.
				</p>
			</div>

			<div>
				<span class="icon-[mdi--help-rhombus-outline] text-[2.5rem] hover:text-gray-500" />
				<h3 class="font-semibold text-lg pb-3">Jouw functie?</h3>
				<p>
					Mis je een functie in deze lijst? Neem dan vooral contact met ons op voor de
					mogelijkheden!
				</p>
			</div>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		id="belplan-instellen"
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Belplan instellen</h2>

			<p class="pb-5">
				Voor onze klanten hebben we een handleiding geschreven waarin we uitleggen hoe je de meest
				voorkomende dingen aanpast en instelt in onze <a
					href="https://mijn.voyp.nl/login"
					class="text-primary font-semibold"
				>
					portal
				</a>. Meldingen activeren, openingstijden wijzigen of een tijdelijke doorschakeling kun je
				zo eenvoudig zelf regelen.
			</p>
			<p>
				Kom je er niet uit? Geen probleem. Wij helpen je graag. Mail ons en wij regelen het voor je.
				Bellen zoals het hoort, zonder gedoe. Welkom bij Voyp!
			</p>

			<Button
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm">
					<a href={`/${pdfFilename}`} class="shrink-0" download={pdfFilename}
						>Download handleiding</a
					>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
				</div>
			</Button>
		</div>

		<img
			src="/hero/functionaliteiten.png"
			alt="functionaliteiten"
			class="mx-auto max-w-xs lg:max-w-[28rem] pt-14"
		/>
	</section>
</div>

<div class="bg-white">
	<section
		id="antwoordservice"
		class="container mx-auto pt-24 pb-20 sm:pb-24 md:flex gap-10 items-center text-center
		md:text-start md:text-sm md:leading-7 lg:text-base lg:leading-8"
	>
		<img
			src="/certainties/persoonlijke-service.png"
			alt="persoonlijke-service"
			class="max-w-[14rem] lg:max-w-[17rem] mx-auto mb-8 md:mb-0"
		/>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Antwoordservice</h2>
			<p>
				Soms ben je niet in staat de telefoon te beantwoorden. Je kunt dan gebruik maken van de
				gratis voicemail mogelijkheid die wij je bieden. Klanten vinden het alleen niet altijd
				prettig om een voicemail achter te laten: als ze bellen willen ze iemand spreken en gehoord
				worden.
			</p>
			<p class="py-5">
				Voor € 15,- per maand en € 2,28 per gesprek schakel je direct een vaste telefoniste in van
				BizziPhone die je klanten voor jou te woord staat als jij niet kunt opnemen. De telefoniste
				voert het gesprek met de klant en geeft aan dat er iemand die inhoudelijk meer weet zo snel
				mogelijk terug gaat bellen. Per mail ontvang je dan een verslag van dit gesprek: wie er
				gebeld heeft, waarom en waarop de beller kan worden teruggebeld.
			</p>
			<p>
				De uitstraling van een extra medewerker, zonder de bijbehorende kosten. Zo zorg je voor
				optimale bereikbaarheid, ook als het beantwoorden van de telefoon even minder goed uitkomt.
				Het activeren van de antwoordservice kost eenmalig € 90,-.
			</p>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		id="stemactrice"
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 md:flex gap-8 lg:gap-10 text-center
		 md:text-start items-center justify-between"
	>
		<div class="text-sm lg:text-base leading-7 lg:leading-8">
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Stemactrice</h2>

			<p class="pb-5">
				Het inspreken van de meldingen kun je zelf heel eenvoudig via onze portal. Naast de
				mogelijkheid om dit zelf te doen, bieden wij je ook de mogelijkheid om voor een scherp
				tarief gebruik te maken van onze stemactrice Tamara. Een prettige en professionele stem die
				zowel in het Engels als in het Nederlands je klanten perfect welkom heet, een keuzemenu
				inspreekt of de voicemail melding maakt.
			</p>
			<p>
				Voor een bedrag van € 120,- spreekt zij maximaal 100 woorden in. In dit bedrag is het door
				ons activeren van deze ingesproken meldingen in je belplan inbegrepen. Meer woorden? Geen
				probleem, voor € 40,- krijg je 100 extra woorden. Op zoek naar een andere stem? Wij werken
				ook samen met mannelijke stemacteurs. Neem contact met ons op voor de mogelijkheden en
				tarieven.
			</p>
		</div>

		<div class="flex flex-col items-center">
			<img
				src="/certainties/stemactrice.png"
				alt="stemactrice"
				class="max-w-[14rem] lg:max-w-[17rem] mx-auto mt-10 md:mt-0"
			/>

			<a
				href="/bestellen"
				class="{btnClasses} mt-8 md:mt-10 border border-primary
      	text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div
					class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm tracking-wider"
				>
					<span class="shrink-0">Bereken je kosten</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
				</div>
			</a>
		</div>
	</section>
</div>

<div class="bg-white">
	<section
		id="support"
		class="container mx-auto pt-24 pb-20 sm:pb-24 md:flex gap-10 items-center text-center
		md:text-start md:text-sm md:leading-7 lg:text-base lg:leading-8"
	>
		<img
			src="/certainties/betrouwbaar-2.png"
			alt="betrouwbaar-2"
			class="max-w-[14rem] lg:max-w-[17rem] mx-auto mb-8 md:mb-0"
		/>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Support & toestelconfiguratie</h2>
			<p>
				Problemen met je telefonie of belplan? Wij helpen je graag. Ons team staat op werkdagen
				tussen negen en vijf per chat, per mail en telefonisch voor je klaar. Ons storingsnummer is
				daarnaast 24 uur per dag bereikbaar. Onze support op afstand is altijd kosteloos.
			</p>
			<p class="py-5">
				Soms blijkt een probleem niet te liggen aan een toestel dat bij ons is aangeschaft of aan de
				instellingen van je belplan. Natuurlijk proberen we dan de oorzaak te achterhalen en voor je
				op te lossen. Moeten we hiervoor via remote desktop of op locatie assisteren? Dan betaal je
				hiervoor € 80,- per uur.
			</p>
			<p>
				Om te kunnen bellen heb je natuurlijk wel een toestel nodig. Op onze website vind je
				toestellen die wij adviseren én geconfigureerd naar je toe kunnen verzenden. Inpluggen en
				bellen maar. Heb je al een VoIP-toestel? Dan kun je deze gewoon blijven gebruiken. Voor €
				25,- per toestel zorgen wij dat deze is geconfigureerd. Dit mag je natuurlijk ook zelf doen.
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
