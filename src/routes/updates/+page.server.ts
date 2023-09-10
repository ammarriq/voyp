import { BLOG_BASE_PATH } from '../../../constants'

export const prerender = true

export const load = async () => {
	const { readdir, stat, readFile } = await import('node:fs/promises')
	const files = await readdir(BLOG_BASE_PATH)

	console.log(await readFile(`${BLOG_BASE_PATH}/${files[0]}`, 'utf-8'))
	return { posts: [] }
}
