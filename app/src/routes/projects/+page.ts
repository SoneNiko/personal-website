import { getProjects } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const projects = await getProjects();

	projects.sort((a, b) => {
		if (a._createdAt < b._createdAt) {
			return 1;
		} else if (a._createdAt > b._createdAt) {
			return -1;
		} else {
			return 0;
		}
	});

	if (projects) {
		return {
			projects
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
