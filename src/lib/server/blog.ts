import path from 'path'

const get_path = () => path.join(process.cwd(), 'blog')

export const get_blogs = async (page: number, per_page: number) => {
	const blog_files = await get_blog_files()
	const blogs = await get_markdown_files(blog_files, page, per_page)

	return {
		blogs: blogs.map(({ head, content }) => ({ ...extract_head(head), content })),
		count: blog_files.length
	}
}

const get_blog_files = async () => {
	const { readdir } = await import('node:fs/promises')
	const blog_files = await readdir(get_path())

	return blog_files
}

const get_markdown_files = async (blog_files: string[], page: number, per_page: number) => {
	const { readFile } = await import('node:fs/promises')
	const from = page * per_page

	const read_blogs = blog_files
		.reverse()
		.slice(from, from + per_page)
		.map((f) => readFile(`${get_path()}/${f}`, 'utf-8'))

	const blogs = await Promise.all(read_blogs)

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
