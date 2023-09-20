import { error } from '@sveltejs/kit'

export const load = async ({ parent, params }) => {
	const { blogs } = await parent()

	const blog = blogs.find((o) => o.slug === params.slug)
	if (!blog) throw error(404, 'not found')

	return { blog }
}
