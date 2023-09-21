<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Customers from '$components/Customers.svelte'
	import Vijfzekerhedenblockveeltext from '$components/Vijf zekerheden block veel text.svelte';
</script>

<section class="relative overflow-x-hidden container mx-auto text-center bg-opacity-50">
	<div class="absolute inset-0 bg-[url(/hero/alarm.webp)] bg-top bg-cover m-4" />
	<div
		class="relative text-white z-10
		sm:pt-52 sm:pb-44 md:px-20 lg:px-28 pt-20 pb-32
		after:absolute after:inset-0 after:top-0 after:-z-10 after:py-44
		after:bg-gradient-to-tr after:from-primary/40 from-90% after:to-white/20"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">
			Alarm, omroep & deurbel
		</h1>
		<p class="text-lg font-medium">
			SUiteraard is het mogelijk om je alarm, omroepsysteem of deurbel te laten functioneren bij
			Voyp.
		</p>
		<p class="text-lg font-medium">Neem contact met ons op voor de mogelijkheden.</p>

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

<Vijfzekerhedenblockveeltext />

<Customers />
