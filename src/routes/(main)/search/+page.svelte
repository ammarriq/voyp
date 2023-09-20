<script lang="ts">
	import { page } from '$app/stores'

	export let data

	const extractContent = (content: string) =>
		content
			.split('\r\n')
			.filter(Boolean)
			.filter((s) => !s.includes('#'))

	$: query = $page.url.searchParams.get('q')
</script>

<div class="bg-primary">
	<header
		class="text-white font-semibold tracking-wider
    container flex items-center justify-between py-8"
	>
		<h3 class="font-semibold text-xl text-center">Results for "{query}"</h3>
	</header>
</div>

<section class="container mt-6">
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
			value={query}
			class="w-full pl-1 pr-2 py-2.5 bg-transparent
      focus:outline-none placeholder-primary"
		/>
		<span class="icon-[mdi--search] w-6 h-6" />
	</form>
</section>

<section class="container mb-4 space-y-6">
	{#each data.blogs as blog, i (i)}
		<a
			href="/update/{blog.slug}"
			class="flex md:items-center flex-col md:flex-row gap-6 md:gap-12
      p-6 border rounded-lg hover:shadow-md transition-all"
		>
			<div>
				<h3 class="text-xl font-semibold">{blog.title}</h3>
				<p class="line-clamp-3 text-sm mt-4 leading-normal">{extractContent(blog.content)}</p>
			</div>

			<button
				class="text-sm font-normal text-white px-4 py-1.5
        md:text-lg md:px-12 md:py-3 md:font-medium
        bg-primary whitespace-nowrap rounded-full"
			>
				Read more...
			</button>
		</a>
	{:else}
		<p class="italic text-center font-semibold">Nothing found</p>
	{/each}
</section>
