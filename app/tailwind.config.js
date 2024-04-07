/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				fade: 'fadeOut 2s ease-in-out'
			},

			fontFamily: {
				"mono": ["Inconsolata", "mono"]
			},

			keyframes: (theme) => ({
				fadeOut: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			})
		}
	},
	plugins: []
};
