<script>
	import Button from '$components/Button.svelte';
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-20 sm:pt-28 md:pt-32 pb-32
	sm:pb-36 md:pb-44 mt-6"
>
	<div class="text-white px-1.5 md:px-14 lg:px-24">
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12 !lg:px-0">
			Alarm, omroep & deurbel
		</h1>
		<p class="lg:px-4">
			Uiteraard is het mogelijk om je alarm, omroepsysteem of deurbel te laten functioneren bij
			Voyp.Neem contact met ons op voor de mogelijkheden.
		</p>
	</div>
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem]
    w-[200%] rounded-b-[100%] bg-gradient-to-b from-primary via-blue-800 to-blue-600"
	/>
</section>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-24 md:pt-28 pb-20 sm:pb-24 text-center md:grid grid-cols-2 gap-6 lg:gap-10
    text-sm md:text-[0.734rem] leading-7 lg:text-base lg:leading-8 space-y-10 md:space-y-0"
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
				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Alarmsystemen</h3>
				<p>
					Een veelgestelde vraag bij de overstap van ISDN naar VoIP gaat over het alarmsysteem. Het
					ombouwen van een ISDN (of analoog) alarmsysteem naar een digitale oplossing kan vaak in de
					papieren lopen. Meestal kiezen installateurs namelijk voor de installatie van een
					GSM-module. Hierdoor wordt de lijn in het geheel vervangen. Ook kun je er in sommige
					gevallen voor kiezen om een separate analoge lijn bij KPN te behouden, waarvoor je
					maandelijks veel geld betaald.
				</p>
				<p class="py-5">
					Gelukkig is er ook een andere oplossing: een ISDN converter. We sluiten het alarmsysteem
					aan op de ISDN-converter, die vervolgens via het SIP-protocol met onze centrale
					communiceert. Met lage vaste én maandelijkse kosten je oude vertrouwde alarm behouden.
					Neem voor meer informatie contact met ons op. We leggen je graag de voor- en nadelen uit
					en helpen je graag verder.
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
				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Omroepsystemen</h3>
				<p>
					Ook voor een omroepsysteem is het SIP-protocol uitstekend te gebruiken. Heb je reeds een
					omroepsysteem hangen waarop je reeds via je huidige toestellen kunt inbellen en omroepen?
					Dan plaatsen we een simpele converter waardoor je ook met je VoIP-toestellen je huidige
					omroepsysteem kunt blijven gebruiken. Nog geen omroepsysteem of wil je je omroepsysteem
					graag ombouwen zodat je ook eenvoudig via je toestellen kunt omroepen? Neem contact met
					ons op voor de mogelijkheden!
				</p>

				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center pt-8">Deurbel</h3>
				<p>
					Op je vaste toestel praten met je bezoek en eenvoudig de deur op afstand opendoen – ook
					dat kan eenvoudig bij Voyp. En heb je een video-conferencing toestel, zoals de Yealink T49
					of de Yealink T56/T58, dan kun je zelfs zien wie er voor de deur staat. Neem voor alle
					mogelijkheden contact met ons op!
				</p>
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
				zoals het hoort. Welkom bij Voyp.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<a href="https://it-wizzard.nl/">
				<img src="/logos/ITWizzard.png" alt="ITWizzard" />
			</a>

			<a href="https://www.arbec.nl/">
				<img src="/logos/arbec.png" alt="arbec" />
			</a>

			<a href="https://tallgrass.nl/">
				<img src="/logos/tallgrass.png" alt="tallgrass" />
			</a>

			<a href="https://www.viwecom.nl/">
				<img src="/logos/viwecom.png" alt="viwecom" />
			</a>

			<a href="https://www.bladewp.com/">
				<img src="/logos/bladewp.png" alt="bladewp" />
			</a>

			<a href="https://moventes.nl/">
				<img src="/logos/moventes.png" alt="moventes" />
			</a>

			<a href="https://www.sofacompany.com/">
				<img src="/logos/sofacompany.png" alt="sofacompany" />
			</a>

			<a href="https://www.vankleeftechniek.nl/">
				<img src="/logos/vankleeftechniek.png" alt="vankleeftechniek" />
			</a>

			<a href="https://www.raket.online/">
				<img src="/logos/raket.png" alt="raket" />
			</a>

			<a href="https://www.renefriso.nl/" class="mx-auto col-auto sm:col-span-full md:col-auto">
				<img src="/logos/renefriso.png" alt="renefriso" />
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
