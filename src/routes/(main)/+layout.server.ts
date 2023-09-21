import { get_blogs } from '$lib/server/blog'
import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const blog_data = await get_blogs(0, 5)
		const blogs = blog_data.blogs.map((blog) => ({ title: blog.title, slug: blog.slug }))

		return { blogs }
	} catch (err) {
		throw error(500, err as Error)
	}
}
