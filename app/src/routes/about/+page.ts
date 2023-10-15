import { getContent } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const about = await getContent('about');

	if (about) {
		return {
			about
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
