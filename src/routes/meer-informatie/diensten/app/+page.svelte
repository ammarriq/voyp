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
			App desktop / mobiel
		</h1>
		<p>
			Soms wil je geen vast toestel, maar gewoon bellen vanaf je laptop of desktop. Dat kan
			natuurlijk! Ook kun je met een app op je mobiel gebruik maken van Voyp zonder onze SIM-kaart.
		</p>
	</div>
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem] w-[200%] rounded-b-[100%] bg-gradient-to-b from-primary via-blue-800 to-blue-600"
	/>
</section>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Geen vast toestel, wel bellen met Voyp</h2>

		<div
			class="md:grid grid-cols-5 gap-6 lg:gap-10 text-sm md:text-[0.734rem] leading-7 lg:text-base
      lg:leading-8 space-y-10 md:space-y-0"
		>
			<div
				class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl shadow-md col-span-3"
			>
				<h3 class="font-semibold text-lg pb-4">Hoe werkt het</h3>
				<p class="pb-5">
					You can of course be reached by your business customers by forwarding your fixed number to
					your mobile. You can also choose to go for full fixed-mobile integration with
					<a href="./voyp-mobiel" class="font-semibold"> Voyp Mobiel </a> . A third option is to use
					the Voyp platform via an app on your mobile phone. This app is also available for your laptop
					or desktop. No landline phone, still make business calls!
				</p>
				<p>
					Met je VoIP-account zorgt de app er voor dat het toestel of de computer werkt zoals een
					écht vast toestel. Dus bellen zoals je gewend bent, met volledige integratie in je Voyp
					belplan. Je collega’s kunnen zien of je in gesprek bent of zelfs je gesprek voor je
					aannemen als je in bespreking bent. Je belt makkelijk met het nummer van je bedrijf,
					schakelt eenvoudig intern naar collega’s door en gebruikt verder de telefoon precies zoals
					je gewend bent.
				</p>
			</div>

			<div
				class="border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 rounded-3xl shadow-md text-start
        col-span-2 lg:space-y-0.1"
			>
				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">De voordelen</h3>
				<p>✓ Geen investering in hardware</p>
				<p>✓ Gebruik maken van Voyp waar je bent</p>
				<p>✓ Alle functies beschikbaar</p>
				<p>✓ <span class="font-semibold">Gratis</span> voor mobiele telefoons</p>
				<p>✓ Slechts € 5,- per maand voor desktops</p>
				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center pt-8">De nadelen</h3>
				<p>✗ Onbereikbaar als je computer of mobiele telefoon uit staat</p>
				<p>✗ Accu sneller leeg</p>
				<p>✗ Afhankelijk van je internetverbinding.</p>
				<p>✗ Werkt niet op WiFi op mobiel (wel over 4G/5G)</p>
				<p>✗ Licentiekosten desktop</p>
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
			<p>
				<span class="font-semibold">Een vast toestel</span> heeft als voordeel dat je een apart
				toestel op je bureau hebt staan. Hier kun je ook makkelijk een professionele headset op
				aansluiten. <span class="font-semibold">Bellen via je desktop</span> is goedkoper omdat je geen
				hardware hoeft aan te schaffen. Wel betaal je voor de software maandelijks € 5,- per maand. Installeer
				je de app op je laptop, dan heb je je telefoon altijd bij je, waar je ook bent.
			</p>
			<p class="py-5">
				Wil je onderweg mobiel bereikbaar zijn? Dan zorgen we ervoor dat je mobiele telefoon in je
				belplan wordt opgenomen. Wordt je weinig gebeld en vind je het niet belangrijk om met je
				vaste nummer uit te kunnen bellen? Kies dan voor een doorschakeling naar je mobiel. Dit kost
				7,5 cent per minuut. Word je vaker gebeld dan verwacht, denk dan na over Voyp Mobiel of kies
				voor de mobiele app.
			</p>
			<p>
				Met de mobiele app maak je eenvoudig en voordelig je mobiele telefoon onderdeel van je
				bedrijfs-telefonie. Ontvang zakelijke gesprekken, bel met collega’s, verbind klanten door
				naar een andere afdeling of zie wie er in gesprek is, met de mobiele app is het allemaal
				mogelijk. Het enige wat je nodig hebt is een extra account, de app krijg je van ons gratis.
				Uiteraard kun je ook kiezen <a href="./voyp-mobiel" class="font-semibold">Voyp Mobiel</a>,
				zodat je ook je mobiele gesprekken via Voyp laat lopen.
			</p>
		</div>

		<div class="flex flex-col items-center mt-9 md:mt-0">
			<img src="/hero/briamobiel.png" alt="briamobiel" class="max-w-[17rem] lg:max-w-xs mx-auto" />

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

		<div
			class="lg:grid grid-cols-3 text-sm leading-7 lg:leading-8 space-y-10 md:space-y-0 border
			rounded-[3rem] shadow-xl"
		>
			<div class="px-6 py-10 md:py-6 lg:py-12 text-start space-y-2">
				<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Doorschakelen naar mobiel</h3>
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
						Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling naar
						je mobiel geen invloed op je accugebruik.
					</span>
				</Clickable>
				<Clickable>
					<span slot="label">✓ Niet afhankelijk van internet </span>
					<span slot="content">
						We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking van
						je mobiele provider.
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
			</div>

			<div class="border px-6 py-10 md:py-6 lg:py-12 shadow-md text-start space-y-2">
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
					<span slot="label">✗ Extra account nodig</span>
					<span slot="content">
						Per extra toestel heb je een VoIP-account nodig. Bij Voyp Mobiel is dit inbegrepen
					</span>
				</Clickable>
				<Clickable>
					<span slot="label">✓ Geen app nodig</span>
					<span slot="content"> Je hoeft geen extra app te installeren. </span>
				</Clickable>
				<Clickable>
					<span slot="label">✓ Geen invloed op accu</span>
					<span slot="content">
						Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling naar
						je mobiel geen invloed op je accugebruik.
					</span>
				</Clickable>
				<Clickable>
					<span slot="label">✓ Niet afhankelijk van internet</span>
					<span slot="content">
						We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking van
						je mobiele provider.
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
			</div>

			<div class="px-6 py-10 md:py-6 lg:py-12 text-start space-y-2">
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
						De app draait op de achtergrond. Afhankelijk van je toestel kan dit een (sterke) invloed
						op je accuduur hebben.
					</span>
				</Clickable>
				<Clickable>
					<span slot="label">✗ Werkt op mobiel soms slecht over WiFi</span>
					<span slot="content">
						De app functioneert soms slecht over WiFi. Hier kunnen wij geen support op leveren. Ons
						advies is om dan WiFi te deactiveren of gebruik te maken van doorschakeling en/of
						SIM-kaart en/of een vast toestel.
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
			<a href="https://www.bladewp.com/">
				<img src="/logos/bladewp.png" alt="bladewp" />
			</a>

			<a href="https://moventes.nl/">
				<img src="/logos/moventes.png" alt="moventes" />
			</a>

			<a href="https://www.voordekunst.nl/">
				<img src="/logos/voordekunst.png" alt="voordekunst" />
			</a>

			<a href="https://mr-dentalsupplies.nl/">
				<img src="/logos/mrdental.png" alt="mrdental" />
			</a>

			<a href="https://www.cavari.nl/">
				<img src="/logos/cavari.png" alt="cavari" />
			</a>

			<a href="https://www.renefriso.online/">
				<img src="/logos/renefriso.png" alt="renefriso" />
			</a>

			<a href="https://www.sunwood.nl/">
				<img src="/logos/sunwood.png" alt="sunwood" />
			</a>

			<a href="https://marmerbehandelen.nl/">
				<img src="/logos/marmerbehandelen.png" alt="marmerbehandelen" />
			</a>

			<a href="https://www.heemlanden.nl/">
				<img src="/logos/collegedeheemlanden.png" alt="collegedeheemlanden" />
			</a>

			<a
				href="https://www.boomkwekerijheijmans.nl/"
				class="mx-auto col-auto sm:col-span-full md:col-auto"
			>
				<img src="/logos/boomkwekerij.png" alt="boomkwekerij" />
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
