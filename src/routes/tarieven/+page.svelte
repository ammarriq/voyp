<script>
	import Button from '$components/Button.svelte';
	import Accordion from '$components/Accordion.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 md:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-8 justify-between
		items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base lg:leading-8 text-center
		md:text-start"
	>
		<div class="">
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overzicht tarieven</h2>

			<p>
				Voor een vaste lage prijs van € 12,- per maand ben je professioneel bereikbaar, of je nu op
				kantoor zit of de hele dag onderweg bent.
			</p>
			<p class="py-5">
				Stop met het betalen voor extra modules zoals openingstijden, keuzemenu’s, meldingen of
				wachtmuziek. Bij ons zit dit inbegrepen in het Voyp abonnement. Dagelijks opzegbaar en
				altijd gratis telefonische support. Bellen zoals het hoort. Welkom bij Voyp.
			</p>
			<p>
				Op deze pagina geven we je inzicht in alle tarieven die we voor onze diensten in rekening
				brengen. Bekijk ook onze <span class="font-semibold underline hover:no-underline"
					>gesprekstarieven.</span
				>
			</p>
			<Button
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.65rem] md:text-[0.75rem] lg:text-sm">
					<span class="shrink-0">Offerte aanvragen of direct bestellen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-6 h-6" />
				</div>
			</Button>
		</div>

		<img src=" /hero/tarieven.webp" alt="tarieven" class="mx-auto max-w-xs lg:max-w-[28rem]" />
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
	<section class="container max-w-4xl mx-auto px-6 pt-24 pb-20 sm:pb-24 space-y-16">
		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Gesprekskosten</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					Binnen Nederland betaal je 2,2 cent per minuut naar vaste nummers en 7,5 cent per minuut
					naar mobiele nummers. Gesprekken worden afgerekend per seconde. Op alle gesprekken geldt
					een starttarief van 5 cent.
					<span class="underline hover:no-underline">
						Kijk hier voor alle <span class="font-semibold">gesprekstarieven.</span>
					</span>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex border mt-6 border-[#ccc] overflow-x-auto">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitespace-nowrap">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Vast</th>
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Mobiel</th>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] bg-[#f5f5f5] hover:bg-[#ebebeb]">
						<td class=" px-2.5 py-2">Nederland</td>
						<td class=" px-2.5 py-2">€ 0,022</td>
						<td class=" px-2.5 py-2">€ 0,075</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">België</td>
						<td class="px-2.5 py-2">€ 0,026</td>
						<td class="px-2.5 py-2">€ 0,032</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Verenigd Koninkrijk</td>
						<td class="px-2.5 py-2">€ 0,058</td>
						<td class="px-2.5 py-2">€ 0,058</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Duitsland</td>
						<td class="px-2.5 py-2">€ 0,031</td>
						<td class="px-2.5 py-2">€ 0,084</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Frankrijk</td>
						<td class="px-2.5 py-2">€ 0,026</td>
						<td class="px-2.5 py-2">€ 0,060</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Verenigde Staten</td>
						<td class="px-2.5 py-2">€ 0,032</td>
						<td class="px-2.5 py-2">€ 0,032</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Abonnementen</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bij Voyp sluit je het Voyp-abonnement af, eventueel aangevuld met Voyp Mobiel
						(SIM-kaarten), glasvezel, ADSL, een antwoordservice of een Counterpath Bria Desktop/Mac
						Licentie.
					</p>
					<p class="pt-5">
						Het Voyp-abonnement sluit je niet af wanneer je een SIP-trunk wilt. Je gaat dan immers
						zelf je eigen telefooncentrale inrichten. Bij een SIP-trunk is het wel altijd
						noodzakelijk om minimaal twee kanalen en 1 los telefoonnummer te bestellen.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Maandelijks</th>
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Voyp-abonnement (incl. account en nummer)</td>
						<td class="px-2.5 py-2">€ 12,-</td>
						<td class="px-2.5 py-2">€ € 30,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Antwoordservice (€ 2,28 per afgehandeld gesprek)</td>
						<td class="px-2.5 py-2">€ 15,-</td>
						<td class="px-2.5 py-2">€ 90,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Licentie Counterpath Bria Desktop/Mac </td>
						<td class="px-2.5 py-2">€ 5,-</td>
						<td class="px-2.5 py-2">n.v.t.</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Voyp ADSL</td>
						<td class="px-2.5 py-2">€ 60,-</td>
						<td class="px-2.5 py-2">€ 100,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Voyp Glasvezel</td>
						<td class="px-2.5 py-2">v.a. € 95,-</td>
						<td class="px-2.5 py-2">v.a. € 250,-</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Voyp Mobiel</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bij Voyp Mobiel sluit je een dagelijks opzegbare SIM-kaart af. Hierbij wordt standaard
						geen data geleverd. Data kost dan € 12,- per GB.
					</p>
					<p class="pt-5">
						Je kunt ook een databundel afsluiten. Dit is goedkoper. Buiten je bundel betaal je dan
						nog steeds € 12,- per extra GB.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Maandelijks</th>
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> SIM-kaart, zonder data </td>
						<td class="px-2.5 py-2">€ 15,-</td>
						<td class="px-2.5 py-2">€ 50,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Databundel, 2 GB </td>
						<td class="px-2.5 py-2">€ 10,-</td>
						<td class="px-2.5 py-2">n.v.t.</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Databundel, 6 GB </td>
						<td class="px-2.5 py-2">€ 15,-</td>
						<td class="px-2.5 py-2">n.v.t.</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Databundel, 10 GB </td>
						<td class="px-2.5 py-2">€ 22,50</td>
						<td class="px-2.5 py-2">n.v.t.</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">VoIP-accounts</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Bellen doe je met een VoIP-account. Per toestel of app heb je een extra account nodig.
						In het Voyp-abonnement zit het eerste account inbegrepen.
					</p>
					<p class="pt-5">
						Je krijgt korting als je meer accounts afneemt. Zo kan je bedrijf groeien zonder dat je
						factuur enorm meegroeit.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Maandelijks</th>
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Tot 10 accounts</td>
						<td class="px-2.5 py-2">€ 4,-</td>
						<td class="px-2.5 py-2">€ 8,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Tussen 10 en 20 accounts </td>
						<td class="px-2.5 py-2">€ 3,-</td>
						<td class="px-2.5 py-2">€ 6,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Tussen 20 en 50 accounts </td>
						<td class="px-2.5 py-2">€ 2,50</td>
						<td class="px-2.5 py-2">€ 5,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Vanaf 50 accounts </td>
						<td class="px-2.5 py-2">€ 2,-</td>
						<td class="px-2.5 py-2">€ 4,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> SIP-trunk, per kanaal </td>
						<td class="px-2.5 py-2">€ 2,50</td>
						<td class="px-2.5 py-2">€ 15,-</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Telefoonnummers</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Om gebeld te worden heb je natuurlijk een telefoonnummer nodig. In het Voyp-abonnement
						zit het eerste telefoonnummer inbegrepen.
					</p>
					<p class="pt-5">
						Je krijgt korting als je meer telefoonnummers afneemt. Zo kan je bedrijf groeien zonder
						dat je factuur enorm meegroeit.
					</p>
					<p class="pt-5">
						Je bestaande nummer kun je ook eenvoudig naar Voyp verhuizen. De kosten hiervoor staan
						ook in onderstaande tabel. De eenmalige kosten voor de telefoonnummers komen voor een
						portering te vervallen, je betaalt dus alleen de verhuiskosten!
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Maandelijks</th>
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Extra los nummer </td>
						<td class="px-2.5 py-2">€ 2,-</td>
						<td class="px-2.5 py-2">€ 10,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Blok 10 nummers </td>
						<td class="px-2.5 py-2">€ 10,-</td>
						<td class="px-2.5 py-2">€ 30,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Blok 100 nummers </td>
						<td class="px-2.5 py-2">€ 35,-</td>
						<td class="px-2.5 py-2">€ 50,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Internationaal nummer, vanaf </td>
						<td class="px-2.5 py-2">€ 10,-</td>
						<td class="px-2.5 py-2">€ 50,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Servicenummers</td>
						<td class="px-2.5 py-2">€ 30,-</td>
						<td class="px-2.5 py-2">n.v.t.</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Verhuiskosten los nummer </td>
						<td class="px-2.5 py-2">n.v.t.</td>
						<td class="px-2.5 py-2">€ 10,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Verhuiskosten blok 10/100 nummers </td>
						<td class="px-2.5 py-2">n.v.t.</td>
						<td class="px-2.5 py-2">€ 50,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Verhuiskosten blok 10/100 nummers KPN </td>
						<td class="px-2.5 py-2">n.v.t.</td>
						<td class="px-2.5 py-2">€ 200,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Verhuiskosten internationale nummers </td>
						<td class="px-2.5 py-2">n.v.t.</td>
						<td class="px-2.5 py-2">op aanvraag</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Configuratie & overig</span>

				<div slot="content" class="pt-5 pb-3 px-2">
					<p>
						Voor het instellen van je keuzemenu en/of wachtrij brengen we eenmalig
						configuratiekosten in rekening. Wij brengen geen maandelijkse kosten in rekening voor
						deze functies. Kleine aanpassingen daarna worden niet opnieuw in rekening gebracht.
					</p>
					<p class="pt-5">
						Voor het inschakelen van de stemactrice en/of het configureren van toestellen die je
						niet bij ons hebt aangeschaft brengen we eenmalig kosten in rekening.
					</p>
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Keuzemenu</td>
						<td class="px-2.5 py-2">€ 75,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2">Wachtrij</td>
						<td class="px-2.5 py-2">€ 75,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Toestelconfiguratie, per toestel </td>
						<td class="px-2.5 py-2">€ 25,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Stemactrice inschakelen, inclusief 100 woorden </td>
						<td class="px-2.5 py-2">€ 120,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Stemactrice, per 100 extra woorden </td>
						<td class="px-2.5 py-2">€ 40,-</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Toeslag handmatige betaling/stornering </td>
						<td class="px-2.5 py-2">€ 2.50</td>
					</tr>
				</table>
			</div>
		</section>

		<section>
			<Accordion>
				<span slot="close" class="icon-[mdi--menu-right] w-7 h-7" />
				<span slot="open" class="icon-[mdi--menu-up] w-7 h-7" />

				<span slot="title" class="font-semibold text-xl">Ondersteuning</span>

				<div slot="content" class="py-5 px-2">
					Support is kosteloos zolang het gaat om je belplan en eventuele hardware die bij ons is
					aangeschaft. Uiteraard kunnen wij je ook ondersteunen bij andere problemen, zoals
					netwerk-, internet- en/of infrastructurele problemen. Deze ondersteuning wordt al dan niet
					op locatie geleverd en apart gefactureerd.
				</div>
			</Accordion>

			<div class="w-full border-b border-primary pt-2.5" />

			<div class="flex overflow-x-auto border mt-6 border-[#ccc]">
				<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitesp">
					<tr class="divide-x divide-[#ccc]">
						<th class="border-b-2 border-[#ccc] px-2.5 py-3" />
						<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start">Eenmalig</th>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Conform algemene voorwaarden </td>
						<td class="px-2.5 py-2">gratis</td>
					</tr>
					<tr class="divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Overige ondersteuning, per uur </td>
						<td class="px-2.5 py-2">€ 80,-</td>
					</tr>
					<tr class="bg-[#f5f5f5] divide-x divide-[#e0e0e0] hover:bg-[#ebebeb]">
						<td class="px-2.5 py-2"> Voorrijkosten, per kilometer </td>
						<td class="px-2.5 py-2">€ 0,50</td>
					</tr>
				</table>
			</div>
		</section>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 pb-20 sm:pb-24 text-sm leading-8 md:grid grid-cols-3 gap-10 items-start"
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
