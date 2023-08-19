import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
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
  preprocess: vitePreprocess()
};
export default config;
