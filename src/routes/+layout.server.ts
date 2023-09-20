import { get_blogs } from '$lib/server/blog'

export const load = async () => {
	const blog_data = await get_blogs(0, 5)
	const blogs = blog_data.map((blog) => ({ title: blog.title, slug: blog.slug }))

	return { blogs }
}
