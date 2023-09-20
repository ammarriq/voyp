import { get_blogs } from '$lib/server/blog.js'

export const load = async ({ url }) => {
	const blogs = await get_blogs()
	const q = url.searchParams.get('q') as string
	const filtered_blogs = blogs.filter((o) => o.title.toLowerCase().includes(q.toLowerCase()))

	console.log(q, blogs)

	return { blogs: filtered_blogs }
}
