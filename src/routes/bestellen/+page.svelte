<script lang="ts">
	const scripts = [
		'https://bestellen.voyp.nl/assets/jquery-3.3.1.min.js',
		'https://bestellen.voyp.nl/assets/main-0ddcaf73c9c2e5b56c1842fac8f3b85a.js',
		'https://bestellen.voyp.nl/assets/render-template-fd3e8e164cc2925333578d706af7bd25.js',
		'https://bestellen.voyp.nl/assets/steps-nav-073b837e39919c4aea7173ffda575432.js',
		'https://bestellen.voyp.nl/assets/arrow-buttons-9e8a36fc1fd590a020261d4f0d6d1d4a.js'
	]

	const getPage = async () => {
		const res = await fetch('https://bestellen.voyp.nl/')
		const page = await res.text()

		scripts.map((s) => {
			const script = document.createElement('script')
			script.src = s

			setTimeout(() => document.body.append(script), 300)
		})

		return page
	}
</script>

<div class="hidden xl:block">
	{#await getPage()}
		<div class="text-center">
			<i class="icon-[mdi--loading] animate-spin w-16 h-16 my-12" />
		</div>
	{:then page}
		{@html page}
	{/await}
</div>

<div class="container xl:hidden flex items-center flex-col md:flex-row px-6 pb-16">
	<img class="md:w-1/2" src="/hero/bestelling.webp" alt="bestselling" />
	<div class="md:w-1/2 space-y-8 leading-loose">
		<p>
			Leuk dat je een bestelling wilt plaatsen of wilt berekenen hoeveel het je gaat besparen om bij
			Voyp je telefonie af te nemen. Helaas werkt onze bestelmodule niet goed op tablets en mobiele
			telefoons.
		</p>
		<p>
			Daarom willen we je graag vragen om deze pagina op je desktop of laptop te bezoeken.
			Natuurlijk kun je ons ook altijd even bellen, ons mailen of met ons chatten. We staan je op
			werkdagen tussen negen en vijf graag te woord.
		</p>
	</div>
</div>
