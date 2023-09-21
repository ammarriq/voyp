<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Customers from '$components/Customers.svelte'
	import Vijfzekerhedenblockveeltext from '$components/Vijf zekerheden block veel text.svelte';
</script>

<section class="relative overflow-x-hidden container mx-auto text-center bg-opacity-50">
	<div
		class="absolute inset-0 bg-[url(/hero/internet2.webp)]
		bg-center bg-cover bg-no-repeat m-4"
	/>
	<div
		class="relative text-white z-10
		sm:pt-52 sm:pb-44 md:px-20 lg:px-28 pt-20 pb-32
		after:absolute after:inset-0 after:top-0 after:-z-10 after:py-44
		after:bg-gradient-to-tr after:from-primary/40 from-90% after:to-white/20"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">Voyp Internet</h1>
		<p class="text-lg font-medium">
			VoIP is van een ding afhankelijk: je internetverbinding. Graag helpen wij jij hierbij.
		</p>
		<p class="text-lg font-medium">
			Wij leveren stabiele ADSL- en glasvezelverbinding vanaf € 60,- per maand.
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
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Internet met de kwaliteit van Voyp</h2>

		<div
			class="md:grid grid-cols-5 gap-6 lg:gap-10 text-sm md:text-[0.734rem] leading-7 lg:text-base
      lg:leading-8 space-y-10 md:space-y-0"
		>
			<div class="relative group col-span-3">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			    rounded-3xl"
				>
					<p>
						Bij Voyp zijn we gespecialiseerd in VoIP. Alleen: voor internetbellen zijn we natuurlijk
						wel van één ding enorm afhankelijk. Jouw internetverbinding. Is deze niet snel genoeg,
						wil je een aparte lijn voor je telefonie of wil je door kunnen werken als je bestaande
						internet-verbinding tijdelijk uitvalt, dan helpen wij je daar graag bij.
					</p>
					<p class="py-5">
						<span class="font-semibold">Vanaf € 60,- per maand</span> ontvang je een stabiele glasvezel-
						of ADSL verbinding met vaste IP adressen. Deze maximale snelheid is afhankelijk van je locatie.
						Uiteraard communiceren we vooraf welke snelheid we verwachten te halen. Wij installeren op
						locatie, inclusief modem, router, switches en/of WiFi, afhankelijk van jouw wensen.
					</p>
					<p>
						Neem daarom vooral contact met ons op voor meer informatie. Wij leggen je graag de
						voordelen van Voyp Internet uit.
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
			    rounded-3xl text-start"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">De voordelen</h3>
					<p>✓ Betaalbaar, stabiel internet van Voyp</p>
					<p>✓ Vast IP-adres</p>
					<p>✓ 1 contactpersoon voor telecom én internet</p>
					<p>✓ Automatische backup lijn mogelijk</p>
					<p>✓ Optimalisatie voor je telefonie</p>
					<p>✓ Installatie op locatie</p>
					<p>✓ Configuratie en optimalisatie op afstand</p>
					<p>
						✓ Of je nu alleen een extra verbinding wilt of je hele netwerk onder de loep wilt nemen,
						bij Voyp krijg je eerlijk en professioneel advies, een scherpe prijs en een stabiele
						oplossing waar je jaren mee vooruit kan!
					</p>
				</div>
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
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F]">Waarom Voyp</h2>
			<p>
				Voice over IP, of internetbellen, is sterk afhankelijk van je internetverbinding. Daarom
				hebben onze supportmedewerkers dagelijks te maken met netwerken en internetverbindingen van
				onze klanten. Wij zijn gespecialiseerd in de optimalisatie van netwerken en verbindingen
				voor VoIP-telefonie, inclusief routers, switches en multicell DECT en WiFi-punten.
			</p>
			<p class="py-5">
				Vanuit die specialisatie is het een logische stap om, naast het stuk ‘achter’ de router ook
				het stukje voor de router te doen, namelijk de internetverbinding zelf. Zo zijn wij zelf
				100% in control van de verbinding: van onze centrale rechtstreeks tot aan jouw toestel.
			</p>
			<p>
				Zo ben je niet langer afhankelijk van een derde partij wanneer er problemen op het netwerk
				worden geconstateerd. Met onze producten kunnen wij snel en eenvoudig vanaf afstand
				problemen oplossen en vaak al preventief voorkomen. De betrouwbare kwaliteit en support van
				Voyp, ook voor je netwerk!
			</p>
		</div>

		<div class="flex flex-col items-center mt-9 md:mt-0">
			<img src="/hero/vlogo2.png" alt="vlogo2" class="max-w-[17rem] mx-auto" />

			<Button
				on:click={() => goto('/bestellen')}
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
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Internet met de kwaliteit van Voyp</h2>

		<div
			class="md:grid grid-cols-5 gap-6 lg:gap-10 text-sm md:text-[0.734rem] leading-7 lg:text-base
      lg:leading-8 space-y-10 md:space-y-0"
		>
			<div class="relative group col-span-2">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			    rounded-3xl text-start"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Wat leveren wij</h3>
					<p>✓ VDSL verbindingen tot 100mbit</p>
					<p>✓ Glasvezelverbinding tot 1gbps</p>
					<p>✓ Routers & switches</p>
					<p>✓ Inpandige bekabeling</p>
					<p>✓ Draadloos internet</p>
					<p>✓ Gastnetwerken inclusief authenticatie</p>
					<p>✓ Multicell DECT-oplossingen</p>
					<p>✓ Volledige configuratie en optimalisatie op afstand</p>
					<p>✓ Support op afstand inbegrepen</p>
					<p>✓ Support op locatie € 80,- per uur</p>
				</div>
			</div>

			<div class="relative group col-span-3">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 bg-white h-full
			    rounded-3xl"
				>
					<p>
						VoIP valt of staat met de kwaliteit van je internet-verbinding. Is deze niet stabiel
						genoeg, dan krijg je problemen met bellen. En dat wil je natuurlijk niet. Je telefonie
						hoort het namelijk goed én stabiel te doen.
					</p>
					<p class="py-5">
						Soms is de oplossing simpel. Samen met jou denken we eerst mee om binnen je huidige
						verbinding de telefonie stabiel te krijgen. Maar soms kan ons advies ook zijn om een
						extra internet-verbinding af te sluiten, of om je huidige verbinding te vervangen. Met
						Voyp Internet kies je voor een stabiele glasvezel of ADSL verbinding.
					</p>
					<p>
						Uiteindelijk hebben wij maar één doel en dat is ervoor zorgen dat jouw telefonie
						optimaal functioneert. Wij stellen alles in het werk ervoor te zorgen dat je zorgeloos
						kunt bellen. Dus ondervind je problemen met je telefonie of met je internet en wil je
						graag in gesprek om dit goed, betaalbaar en professioneel op te pakken?
						<span class="font-semibold"> Voyp’s the word </span>.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<Vijfzekerhedenblockveeltext />

<Customers />