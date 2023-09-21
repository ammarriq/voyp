export const get_blogs = async (files: string[], page: number, per_page: number) => {
	const blogs = await get_markdown_files(files, page, per_page)

	return {
		blogs: blogs.map(({ head, content }) => ({ ...extract_head(head), content })),
		count: files.length
	}
}

export const get_markdown_files = async (files: string[], page = 0, per_page = 5) => {
	// const from = page * per_page

	// const read_blogs = files
	// 	.reverse()
	// 	.slice(from, from + per_page)
	// 	.map((f) => fetch(`/blog/${f}`).then((res) => res.text()))

	const blogs = await Promise.all(files.map((url) => fetch(url).then((r) => r.text())))

	return blogs
		.map((file) => file.split('---').filter(Boolean))
		.map(([head, content]) => ({ head, content }))
}

export const extract_head = (head: string) => {
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
