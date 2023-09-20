import { BLOG_PATH } from '../../../constants'

export const get_blogs = async (from: number, per_page: number) => {
	const blogs = await get_markdown_files(from, per_page)

	return blogs.map(({ head, content }) => ({ ...extract_head(head), content }))
}

const get_markdown_files = async (from: number, per_page: number) => {
	const { readdir, readFile } = await import('node:fs/promises')
	const blog_namees = await readdir(BLOG_PATH)

	const get_blog_files = blog_namees
		.reverse()
		.slice(from, from + per_page)
		.map((f) => readFile(`${BLOG_PATH}/${f}`, 'utf-8'))

	const blogs = await Promise.all(get_blog_files)

	return blogs
		.map((file) => file.split('---').filter(Boolean))
		.map(([head, content]) => ({ head, content }))
}

const extract_head = (head: string) => {
	const filtered_head = head.split('\r\n').filter(Boolean)

	const title = extract_attr(filtered_head, 'title')
	const slug = extract_attr(filtered_head, 'slug')
	const featured_img = extract_attr(filtered_head, 'featured_img')

	return { title, slug, featured_img }
}

const extract_attr = (head: string[], attr: string) => {
	const value = head.find((str) => str.includes(attr)) as string

	return value.replace(`${attr}:`, '').trim()
}
