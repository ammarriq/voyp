import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { preprocessMeltUI } from '@melt-ui/pp'
import sequence from 'svelte-sequential-preprocessor'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$layouts: 'src/layouts',
			$lib: 'src/lib'
		}
	},
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()])
}
export default config
