const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      	fontFamily: {
				montserrat : ['Montserrat', 'sans-serif'],
      },
      	colors: {
          primary: '#0f2d73',
          secondary: "#EFF5FD"
			},
    }
  },
 corePlugins: {
		container: false
	},
	plugins: [
	 addDynamicIconSelectors(),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					marginInline: 'auto',
					maxWidth: '100%',
					padding: '1rem',
					'@screen lg': {
						maxWidth: '1210px'
					}
				}
			});
		}
	]
};