<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 sm:pt-16 lg:pt-14 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Wat is VoIP en wat zijn de voordelen?</h2>

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
				Waar ter wereld je je toestel dus ook aansluit, je kunt zakelijk bellen en gebeld worden
				zoals je bent gewend.
			</p>
			<p>
				VoIP is dus zónder moeilijke installaties, hoge kosten, ingewikkelde telefooncentrales en
				dure ISDN-kanalen bellen zoals het hoort. Wil je ook overal goed en betrouwbaar bereikbaar
				zijn? <a href="./overstappen" class="font-semibold">Stap dan nu over!.</a>
			</p>
		</div>

		<img src="/hero/voip1.png" alt="VoIP" class="mx-auto max-w-xs lg:max-w-sm py-14" />
	</section>
</div>

<div class="bg-secondary">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium">De voordelen van VoIP</h2>

		<div
			class="md:grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2.5 justify-center space-y-12 md:space-y-0
			text-sm leading-7 pt-14"
		>
			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Flexibel</p>
				<p>Optimale bereik, waar ter wereld je ook bent</p>
			</span>

			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Goedkoper</p>
				<p>Factuur (fors) lager dan bij ISDN</p>
			</span>

			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Toekomstgericht</p>
				<p>ISDN stopt: Voice over IP is de toekomst</p>
			</span>

			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Uitgebreid</p>
				<p>Beschik over alle functionaliteiten</p>
			</span>

			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Eenvoudig</p>
				<p>Installatie, uitbreiding & onderhoud simpel</p>
			</span>

			<span class="flex flex-col items-center">
				<span class="icon-[mdi--check] text-primary w-14 h-14" />
				<p class="font-semibold pt-5 pb-2">Meer inzicht</p>
				<p>Altijd inzage in je belgedrag</p>
			</span>
		</div>
	</section>
</div>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center md:grid grid-cols-2 lg:grid-cols-3
		gap-6 lg:gap-8 text-sm leading-7 lg:text-base lg:leading-8 space-y-10 md:space-y-0"
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
				<h3 class="font-semibold text-lg pb-3">Flexibel</h3>
				<p>
					Je toestel meldt zich aan via het internet. Je locatie is dus niet relevant: daar waar je
					internet hebt kun je je toestel inpluggen en bellen zoals je bent gewend. Ervaar ook
					optimale vrijheid in je telefonische bereikbaarheid.
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
				<h3 class="font-semibold text-lg pb-3">Goedkoper</h3>
				<p>
					Onderling bellen is gratis, ook als men op andere locaties in binnen- en buitenland werkt.
					Ook liggen de gesprekstarieven lager dan bij de traditionele telecom providers. Met
					overstappen bespaar je zakelijk flink op je telefoonkosten.
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
				<h3 class="font-semibold text-lg pb-3">Toekomstgericht</h3>
				<p>
					VoIP is de toekomst. ISDN stopt, dus het is nu tijd om over te stappen. Dat het daarnaast
					ook nog eens fors geld kan besparen, zelfs met de initiële investering voor de hardware,
					is natuurlijk mooi meegenomen.
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
				<h3 class="font-semibold text-lg pb-3">Uitgebreid</h3>
				<p>
					Omdat je bij VoIP een telefoon-centrale in de cloud krijgt, kun je gebruik maken van alle
					mogelijk-heden. Maak dus gebruik van voicemails, keuzemenu’s of bijvoorbeeld wachtrijen
					zodat je telefonie optimaal functioneert.
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
				<h3 class="font-semibold text-lg pb-3">Eenvoudig</h3>
				<p>
					VoIP-toestellen zijn, als ze bij ons zijn gekocht, plug-and-play. Ook zijn ze als switch
					te gebruiken. Met een kabel sluit je dus zowel je nieuwe telefoon aan, als je desktop. Je
					hoeft dus niet extra kabels te trekken.
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
				<h3 class="font-semibold text-lg pb-3">Meer inzicht</h3>
				<p>
					Via MijnVoyp krijg je direct inzage in je belgeschiedenis. Deze kun je exporteren, zodat
					je bijvoorbeeld eenvoudig kunt bekijken welke medewerkers de meeste gesprekken aannemen en
					wanneer het het drukst is.
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
				on:click={() => goto('/bestellen')}
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
				<span class="font-semibold">Don’t take our word for it, take theirs</span> en ga ook bellen zoals
				het hoort. Welkom bij Voyp.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16 lg:pb-20">Telefonie vroeger en nu</h2>

		<div
			class="md:grid grid-cols-2 gap-6 lg:gap-8 text-sm leading-7 lg:text-base lg:leading-8 space-y-10
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
					<h3 class="font-semibold text-lg pb-4">Telefonie vroeger</h3>
					<p>
						Vroeger had je een analoge lijn of een ISDN centrale. Simpel gezegd gaat er dan een
						koper draadje van de wijkcentrale je telefoontoestel in (of je eigen ISDN centrale).
						Daardoor gaat je toestel over als je wordt gebeld. Verhuizen of even op een andere plek
						met je toestel bereikbaar zijn? Dat kon niet zomaar, omdat je gebonden was aan de
						fysieke locatie van je toestel, namelijk de aansluiting van het koperen draadje.
					</p>
					<p class="py-5">
						Het instellen van je telefooncentrale was daarnaast een hele klus. Zo had je per lijn
						een telefoonnummer nodig. Wilde je dus zakelijk gelijktijdig tien gesprekken kunnen
						voeren? Dan was je verplicht om tien nummers af te nemen. Bij VoIP hoeft dit niet: je
						hebt alleen de nummers nodig die je wilt gebruiken.
					</p>
					<p>
						Daarnaast moest je bepalen hoeveel je gebeld werd. Verkeerd ingeschat? Dan kregen
						klanten opeens een in bezet toon te horen of konden collega’s niet naar buiten bellen
						wanneer ze wilden.
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
					<h3 class="font-semibold text-lg pb-4">Telefonie anno nu</h3>
					<p>
						Met VoIP is je toestel aangesloten op het internet en meldt het toestel zich aan bij de
						telefooncentrale in de cloud. Vergelijk het een beetje met je e-mail: als je de juiste
						gebruikersnaam en wachtwoord hebt kun je overal ter wereld bij je e-mail. Zo gaat het
						ook met VoIP-bellen: met je gebruikersnaam en wachtwoord bel je en wordt je gebeld op de
						manier die je gewend bent, waar je ook bent. Bellen zoals het hoort!
					</p>
					<p class="py-5">
						Het instellen van je belplan en accounts gaat heel eenvoudig online via MijnVoyp. Geen
						moeilijk te programmeren centrale meer, maar een gebruiks-vriendelijke webinterface waar
						je makkelijk en snel bijvoorbeeld je openingstijden aanpast en verandert welke
						toestellen overgaan wanneer je wordt gebeld.
					</p>
					<p>
						Doordat de operationele- en gesprekskosten veel lager liggen dan je huidige ISDN
						abonnement begin je daarnaast ook nog eens met (flink) besparen.
						<a href="./overstappen" class="font-semibold">Overstappen</a> was nog nooit zo slim!
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
