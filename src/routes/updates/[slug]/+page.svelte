<script lang="ts">
	import { marked } from 'marked'
	import './styles.css'

	export let data
</script>

<div class="content col-span-2 max-w-2xl lg:max-w-none mx-auto lg:mx-0 whitespace-pre-line">
	<h3 class="title">{data.blog.title}</h3>
	<img class="featured_image" src={data.blog.featured_img} alt={data.blog.slug} />
	{@html marked(data.blog.content)}
</div>
