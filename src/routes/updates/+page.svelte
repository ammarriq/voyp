<script lang="ts">
	import Pagination from './Pagination.svelte'

	export let data

	const extractContent = (content: string) =>
		content
			.split('\r\n')
			.filter(Boolean)
			.filter((s) => !s.includes('#'))
</script>

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
