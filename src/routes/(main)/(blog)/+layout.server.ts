import { get_blogs } from '$lib/server/blog'

export const load = async ({ url }) => {
	const page = +(url.searchParams.get('page') ?? 1)
	const { blogs, count } = await get_blogs(page - 1, 6)

	return { blogs, count }
}
