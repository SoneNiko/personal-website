import { getContent } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const home = await getContent('home');

	if (home) {
		return {
			home
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
