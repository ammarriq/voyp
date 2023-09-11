<script lang="ts">
	import Search from '$layouts/Search.svelte'
	import Pagination from './Pagination.svelte'

	export let data

	const extractContent = (content: string) =>
		content
			.split('\r\n')
			.filter(Boolean)
			.filter((s) => !s.includes('#'))
</script>

<section
	class="container px-6 pt-16 sm:pt-20 pb-20 sm:pb-24
	text-sm leading-8 lg:grid gap-10 grid-cols-3"
>
	<div class="col-span-2 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
		<nav class="flex flex-col items-center gap-4">
			{#each data.blogs as blog}
				<a
					href="/updates/{blog.slug}"
					class="border-b first:pt-0 pt-4 sm:pt-10
					pb-10 sm:pb-16 text-sm leading-[1.7rem] sm:leading-7"
				>
					<img src={blog.featured_img} alt={blog.slug} class="w-48 sm:w-52" />
					<h3 class="font-medium text-lg pt-4 pb-3">{blog.title}</h3>
					<p class="line-clamp-2">
						{extractContent(blog.content)}
					</p>
				</a>
			{/each}
			<Pagination />
		</nav>
	</div>
	<div class="lg:border-l lg:pl-10 max-w-2xl mx-auto lg:mx-0 pt-16 lg:pt-0">
		<h3 class="font-semibold pb-4 text-base">Zoeken</h3>
		<Search />

		<div class="w-full border-b py-5" />

		<h3 class="font-semibold pt-7 pb-4 text-base">Over Voyp</h3>
		<p>
			Voyp is gespecialiseerd in VoIP-telefonie oplossingen. Wij adviseren onze klanten over
			hardware en configureren voor klanten hun telefoniewensen.
		</p>
		<p class="py-4">
			Meer weten over Voyp en onze diensten? Neem dan contact met ons op via contact@voyp.nl.
		</p>
		<p>Ook zijn we uiteraard telefonisch te bereiken op telefoonnummer 088 – 6789 – 400.</p>

		<div class="w-full border-b py-5" />

		<h3 class="font-semibold pt-7 pb-4 text-base">Recent Posts</h3>

		<a href="/" class="block">Voyp gaat samen met BlackGATE</a>
		<a href="/" class="block">De eerste indruk</a>
		<a href="/" class="block">Telefonische drukte opvangen</a>
		<a href="/" class="block">Lokaal telefoonnummer vergroot je markt</a>
		<a href="/" class="block">Hoe richt ik mijn telefonie in</a>
		<a href="/" class="block">5G komt eraan</a>
		<a href="/" class="block">Coronaproof – Nu tijdelijk geen</a>
		<a href="/" class="block">configuratiekosten</a>
		<a href="/" class="block">Coronaproof – In quarantaine? Wat nu</a>
		<a href="/" class="block">Startende ondernemer? Denk aan je</a>
		<a href="/" class="block">telefoonnummer!</a>
		<a href="/" class="block">Voyp weetjes – deel 2</a>
		<a href="/" class="block">Fijne feestdagen!</a>
		<a href="/" class="block">Wij zijn verhuisd</a>
		<a href="/" class="block">Voyp weetjes</a>
		<a href="/" class="block">Er is leven na ISDN – hoe verder</a>
		<a href="/" class="block">Een internetstoring, en nu?</a>
	</div>
</section>
