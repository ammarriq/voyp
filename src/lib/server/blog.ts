import { BLOG_BASE_PATH } from '../../../constants'

export const get_blogs = async () => {
	const blogs = await get_markdown_files()

	return blogs.map(({ head, content }) => ({ ...extract_head(head), content }))
}

const get_markdown_files = async () => {
	const { readdir, readFile } = await import('node:fs/promises')
	const file_names = await readdir(BLOG_BASE_PATH)

	const read_files = file_names.map((f) => readFile(`${BLOG_BASE_PATH}/${f}`, 'utf-8'))
	const files = await Promise.all(read_files)

	return files
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
