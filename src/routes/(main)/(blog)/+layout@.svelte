<script lang="ts">
	import { page } from '$app/stores'

	export let data
	$: slug = $page.params.slug as string
	$: title = data.blogs.find((o) => o.slug === slug)?.title
</script>

<div class="bg-primary">
	<header
		class="text-white text-xs font-semibold tracking-wider
		container flex items-center justify-between py-10"
	>
		<h3 class="font-semibold text-base">Voyp Updates</h3>
		<span>
			<a href="/" class="hover:underline">Home</a>
			{#if title}
				/
				<a href="/updates" class="hover:underline">Voyp Updates</a>
				<span>/ {title}</span>
			{:else}
				<span>/ Voyp Updates</span>
			{/if}
		</span>
	</header>
</div>

<section
	class="container px-6 pt-16 sm:pt-20 pb-20 sm:pb-24
	text-sm leading-8 lg:grid gap-10 grid-cols-3"
>
	<slot />
	<div class="lg:border-l lg:pl-10 max-w-2xl mx-auto lg:mx-0 pt-16 lg:pt-0">
		<h3 class="font-semibold pb-4 text-base">Zoeken</h3>
		<form
			class="w-full flex items-center text-sm
			bg-secondary px-2.5 border border-primary"
			method="get"
			action="/search"
		>
			<input
				name="q"
				type="text"
				placeholder="Wat zoek je?"
				class="w-full pl-1 pr-2 py-2.5 focus:outline-none bg-transparent placeholder-primary"
			/>
			<span class="icon-[mdi--search] w-6 h-6" />
		</form>

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

		{#each data.blogs.slice(0, 10) as blog, i (i)}
			<a href="/updates/{blog.slug}" class="block hover:underline">{blog.title}</a>
		{/each}
	</div>
</section>
