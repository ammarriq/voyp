<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import Clickable from '$components/Clickable.svelte'
	import Customers from '$components/Customers.svelte'
	import Vijfzekerhedenblockveeltext from '$components/Vijf zekerheden block veel text.svelte';
	import VerschillenAppMobielDoorschakelen from '$components/Verschillen App Mobiel Doorschakelen.svelte';
</script>

<section class="relative overflow-x-hidden container mx-auto text-center bg-opacity-50">
	<div
		class="absolute inset-0 bg-[url(/hero/briamac.webp)]
		top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
		w-5/6 h-5/6 bg-center bg-contain bg-no-repeat m-4"
	/>
	<div
		class="relative text-white z-10
		sm:pt-52 sm:pb-44 md:px-20 lg:px-28 pt-20 pb-32
		after:absolute after:inset-0 after:top-0 after:-z-10 after:py-44
		after:bg-gradient-to-tr after:from-primary/40 from-90% after:to-white/20"
	>
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">App desktop / mobiel</h1>
		<p class="text-lg font-medium">
			Soms wil je geen vast toestel, maar gewoon bellen vanaf je laptop of desktop. Dat kan
			natuurlijk!
		</p>
		<p class="text-lg font-medium">
			Ook kun je met een app op je mobiel gebruik maken van Voyp zonder onze SIM-kaart.
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
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Geen vast toestel, wel bellen met Voyp</h2>

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
					<h3 class="font-semibold text-lg pb-4">Hoe werkt het</h3>
					<p class="pb-5">
						You can of course be reached by your business customers by forwarding your fixed number
						to your mobile. You can also choose to go for full fixed-mobile integration with
						<a href="./voyp-mobiel" class="font-semibold"> Voyp Mobiel </a> . A third option is to use
						the Voyp platform via an app on your mobile phone. This app is also available for your laptop
						or desktop. No landline phone, still make business calls!
					</p>
					<p>
						Met je VoIP-account zorgt de app er voor dat het toestel of de computer werkt zoals een
						écht vast toestel. Dus bellen zoals je gewend bent, met volledige integratie in je Voyp
						belplan. Je collega’s kunnen zien of je in gesprek bent of zelfs je gesprek voor je
						aannemen als je in bespreking bent. Je belt makkelijk met het nummer van je bedrijf,
						schakelt eenvoudig intern naar collega’s door en gebruikt verder de telefoon precies
						zoals je gewend bent.
					</p>
				</div>
			</div>

			<div class="relative group col-span-2">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-3xl"
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
				on:click={() => goto('/bestellen')}
				class="bg-primary mt-10 text-white hover:bg-white hover:text-primary border
				border-primary"
			>
				Direct bestellen
			</Button>
		</div>
	</section>
</div>

<VerschillenAppMobielDoorschakelen />

<Vijfzekerhedenblockveeltext />

<Customers />
