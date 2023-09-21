<script lang="ts">
	const scripts = [
		'https://bestellen.voyp.nl/assets/jquery-3.3.1.min.js',
		'https://bestellen.voyp.nl/assets/main-0ddcaf73c9c2e5b56c1842fac8f3b85a.js',
		'https://bestellen.voyp.nl/assets/render-template-fd3e8e164cc2925333578d706af7bd25.js',
		'https://bestellen.voyp.nl/assets/steps-nav-073b837e39919c4aea7173ffda575432.js',
		'https://bestellen.voyp.nl/assets/cost-overview-c2fcf52b75cc93fb967b0fa8a6748bf1.js',
		'https://bestellen.voyp.nl/assets/arrow-buttons-9e8a36fc1fd590a020261d4f0d6d1d4a.js'
	]

	const getPage = async () => {
		const res = await fetch('https://bestellen.voyp.nl/toestellen')
		const page = await res.text()

		scripts.map((s) => {
			const script = document.createElement('script')
			script.src = s

			setTimeout(() => document.body.append(script), 300)
		})

		return page
	}
</script>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-14 md:pt-20 pb-8 md:pb-24 leading-8">
		<h2 class="text-3xl sm:text-4xl font-medium pb-9">Hardware</h2>
		<p>
			Je kunt bij Voyp op een aantal manieren bellen. Naast het gebruik van de (mobiele) app of je
			vaste toestellen kun je ook nieuwe toestellen bij ons aanschaffen. Alle toestellen worden
			geconfigureerd verzonden. Let op: heb je geen PoE switch? Vergeet dan niet een adapter of
			PoE-switch bij te bestellen.
		</p>
		<p>
			Prijzen zijn exclusief BTW. Bij bestellingen onder de € 250,- brengen wij € 10,- aan
			verzendkosten in rekening.
		</p>
		<h3 class="font-semibold pt-7 pb-5">Bij Voyp adviseren wij Yealink</h3>
		<p class="pb-7">
			Deze telefoons kunnen wij vanaf afstand configureren en monitoren. Ook kun je zelf eenvoudig
			via onze portal aanpassingen doorvoeren, zoals sneltoetsen en adresboeken. Daarnaast kunnen
			wij eenvoudig de firmware updaten en de toestellen vanaf afstand herstarten indien er
			problemen zijn. Uiteraard staat het je vrij om ergens anders andere toestellen aan te
			schaffen. Hou er wel rekening mee dat wij dan € 25,- per toestel vragen om deze toestellen te
			configureren. Uiteraard kunnen wij op basis van je wensen ook adviseren over andere toestellen
			en leveren.
		</p>
	</section>
</div>

<div class="container">
	{#await getPage()}
		<div class="text-center">
			<i class="icon-[mdi--loading] animate-spin w-16 h-16 my-12" />
		</div>
	{:then page}
		{@html page}
	{/await}
</div>
