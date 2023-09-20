import { get_blogs } from '$lib/server/blog'

export const prerender = true

export const load = async () => {
	return { blogs: await get_blogs(0, 6) }
}
