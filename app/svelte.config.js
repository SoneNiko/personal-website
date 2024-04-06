import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self', 'https://va.vercel-scripts.com', 'https://wyxxfyyr.api.sanity.io/', 'https://www.clarity.ms/'],
				'img-src': [
					'self',
					'data:',
					'https://wyxxfyyr.api.sanity.io/',
					'https://cdn.sanity.io/',
					'https://github-readme-stats.vercel.app'
				],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'style-src': ['self', 'https://fonts.googleapis.com', 'unsafe-inline'],
				'worker-src': ['self', 'blob:'],
				'connect-src': ['self', 'https://wyxxfyyr.api.sanity.io/'],
				'frame-src': ['self', 'https://www.youtube.com'],
				'frame-ancestors': ['self'],
				'base-uri': ['self'],
				'form-action': ['self'],
				'object-src': ['none'],
				'block-all-mixed-content': true,
				'upgrade-insecure-requests': true
			},

			mode: 'auto'
		}
	}
};

export default config;
