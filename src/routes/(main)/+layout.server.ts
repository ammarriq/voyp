import { get_markdown_files, extract_head } from '$lib/server/blog.js'
import { error } from '@sveltejs/kit'

export const load = async ({ url }) => {
	const blog_files = Object.keys(import.meta.glob('../../../static/blog/*.*'))
		.map((name) => name.split('/').at(-1))
		.reverse()
		.splice(0, 5)
		.map((blog) => `${url.origin}/blog/${blog}`)

	const blog_data = await get_markdown_files(blog_files)

	try {
		const blogs = blog_data.map((b) => ({ ...extract_head(b.head) }))

		return { blogs }
	} catch (err) {
		throw error(500, err as Error)
	}
}
