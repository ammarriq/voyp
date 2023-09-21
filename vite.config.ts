import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { normalizePath } from 'vite'
import path from 'path'

// C:/project/foo

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve(__dirname, './blog')),
					dest: './'
				}
			]
		})
	]
})
