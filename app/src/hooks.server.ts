import type { Handle } from '@sveltejs/kit';

const securityHeaders = {
	'Cross-Origin-Embedder-Policy': 'unsafe-none',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-site',
	'Referrer-Policy': 'no-referrer',
	'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'X-XSS-Protection': '0'
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	Object.entries(securityHeaders).forEach(([header, value]) => response.headers.set(header, value));

	return response;
};
