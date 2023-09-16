<script lang="ts">
	import tableData from '$lib/data/tarieven.json'

	import Button from '$components/Button.svelte'
	import Display from '$components/Animate.svelte'
	import Table from '$components/Table.svelte'
	import { goto } from '$app/navigation'

	let words: string[] = ['VoIP-accounts', 'SIP-trunks']
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-20 sm:pt-28 md:pt-32 pb-32
	sm:pb-36 md:pb-44 mt-6"
>
	<div class="text-white md:px-20 lg:px-28">
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal pb-8 lg:pb-12">
			Accounts & SIP-trunks
		</h1>
		<p>
			Om te kunnen bellen heb je naast een telefoonnummer ook een VoIP-account nodig om mee te
			kunnen bellen. Ook kun je zelf je eigen centrale gebruiken.
		</p>
	</div>
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem] w-[200%] rounded-b-[100%] bg-gradient-to-b from-primary via-blue-800 to-blue-600"
	/>
</section>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">
			Hoe je ook wilt bellen, bij Voyp zit je goed.
		</h2>

		<div
			class="md:grid grid-cols-2 gap-6 lg:gap-10 text-sm leading-7 lg:text-base lg:leading-8 space-y-10
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
					<h3 class="font-semibold text-lg pb-4">Hoe werkt het</h3>
					<p class="pb-5">
						Een VoIP-account is, samen met een telefoonnummer, het hart van onze centrale. Je hebt
						een VoIP-account nodig voor elk toestel of mobiele app die je wilt gebruiken. Hoe meer
						accounts je hebt, hoe meer korting je krijgt. Het kan daardoor zijn dat het slimmer (en
						goedkoper) is om meer accounts af te nemen dan je nodig hebt. Wij informeren je hier
						pro-actief over.
					</p>
					<p>
						Door met het VoIP-account aan te melden op onze telefooncentrale weet jouw telefoon
						precies wat te doen. Op onze centrale stellen we alles in. Dus of je nu op kantoor bent,
						thuis of aan de andere kant van de wereld, je kunt bellen zoals het hoort, met hetzelfde
						telefoonnummer.
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
					<h3 class="font-semibold text-lg pb-4">Wat stellen wij voor je in</h3>
					<p class="pb-5">
						Op onze Voyp centrale stellen wij je belplan in. Hiermee regelen we je telefonie. Eerst
						bepalen we welk toestel moet overgaan wanneer jouw telefoonnummer door een klant wordt
						gebeld. Zo stel je bijvoorbeeld in dat het hoofdnummer bij de receptie en het
						salesnummer direct bij de salesafdeling overgaat, maar ook dat bepaalde collega’s worden
						gebeld als iemand niet opneemt.
					</p>
					<p>
						Ook stellen we in welk nummer en naam je klanten in beeld zien als je uitbelt. Via onze
						portal kun je dit overigens eenvoudig zelf aanpassen, maar wij doen dit uiteraard ook
						graag voor je. Samen zorgen we ervoor dat je telefonie precies doet wat jij wilt.
						<a href="/meer-informatie/inrichten-telefonie/#belplan-instellen" class="underline">
							Kijk voor meer informatie over je belplan hier.
						</a>
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
					<h3 class="font-semibold text-lg pb-4">Toestellen instellen</h3>
					<p class="pb-5">
						Een VoIP-account kun je op vrijwel alle gangbare VoIP-toestellen instellen. Dit kun je
						uitstekend zelf, je ontvangt hiervoor van ons een gebruikersnaam, wachtwoord en
						serveradres: alles dat je nodig hebt om je toestel in te stellen. Kom je er toch niet
						uit? Dat kan natuurlijk, we helpen je graag om je toestel te configureren.
					</p>
					<p>
						Als je toestellen bij ons koopt sturen wij deze uiteraard geconfigureerd naar je toe.
						Aansluiten en bellen zonder gedoe, zoals het hoort. Heb je nog vragen? Wij staan op
						werkdagen tussen negen en vijf voor je klaar.
					</p>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500
					to-primary rounded-lg blur opacity-10 group-hover:opacity-25
					transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10
					md:py-6 lg:py-12 bg-white h-full rounded-3xl"
				>
					<h3 class="font-semibold text-lg pb-4">SIP-trunks gebruiken</h3>
					<p class="pb-5">
						Misschien wil je wel gewoon gebruik kunnen maken van de betrouwbare kwaliteit van Voyp
						en onze lage gesprekstarieven, maar wil je je eigen telefooncentrale inrichten. Dit kan
						natuurlijk ook. Hou er wel rekening mee dat je hiervoor veel technische kennis nodig
						hebt en support van Voyp niet, zoals bij ons Voyp-abonnement, is inbegrepen.
					</p>
					<p>
						Om je eigen centrale te laten werken heb je alleen een SIP-trunk en een telefoonnummer
						nodig. De trunks van Voyp werken op alle gangbare centrales. Het aantal gelijktijdige
						gesprekken bepaal je met het aantal lijnen en breid je eenvoudig uit.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-24 md:grid grid-cols-2 gap-5
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="inline-block text-4xl lg:text-6xl sm:px-0 pb-8 text-[#54595F] tracking-tight">
				Tarieven <br class="block" />
				<Display class="text-3xl lg:text-5xl" {words} />
			</h2>

			<p class="pb-5">
				Natuurlijk wil je weten wat het allemaal kost. Op de tarievenpagina vindt je alle tarieven
				in een handig overzicht, hiernaast treft je de tarieven aan voor de losse VoIP-accounts en
				SIP-trunks.
			</p>
			<p>
				Hou er rekening mee dat je, tenzij je gebruik maakt van SIP-trunks, altijd het
				Voyp-abonnement moet afsluiten. Dit kost € 12,- per maand en is inclusief een los
				telefoonnummer, één VoIP-account en alle mogelijkheden.
			</p>

			<Button
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.67rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
				</div>
			</Button>
		</div>

		<div class="pt-6 md:pt-0">
			<Table tableData={tableData[3]} class="w-full" />
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<a href="https://hetdagelijksbestaan.nl/">
				<img src="/logos/hetdagelijksbestaan.png" alt="hetdagelijksbestaan" />
			</a>

			<a href="https://www.lawspot.nl/">
				<img src="/logos/lawspot.png" alt="lawspot" />
			</a>

			<a href="https://www.renefriso.nl/">
				<img src="/logos/renefriso.png" alt="renefriso" />
			</a>

			<a href="https://www.sunwood.nl/">
				<img src="/logos/sunwood.png" alt="sunwood" />
			</a>

			<a href="https://tallgrass.nl/">
				<img src="/logos/tallgrass.png" alt="tallgrass" />
			</a>

			<a href="https://www.accentgrave.nl/">
				<img src="/logos/accentgrave.png" alt="accentgrave" />
			</a>

			<a href="https://www.schimmel-tdi.nl/">
				<img src="/logos/schimmeltechniek.png" alt="schimmeltechniek" />
			</a>

			<a href="https://www.heemlanden.nl/">
				<img src="/logos/collegedeheemlanden.png" alt="collegedeheemlanden" />
			</a>

			<a href="https://hethoutens.nl/">
				<img src="/logos/hethoutens.png" alt="hethoutens" />
			</a>

			<a href="https://www.arbec.nl/" class=" mx-auto col-auto sm:col-span-full md:col-auto">
				<img src="/logos/arbec.png" alt="arbec" />
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
