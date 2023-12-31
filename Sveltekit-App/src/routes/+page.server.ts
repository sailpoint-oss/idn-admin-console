import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { generateAuthLink } from '$lib/utils/oauth';

export const actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();

		const baseUrl = data.get('baseUrl');
		const tenant = data.get('tenant');
		const domain = data.get('domain');
		const tenantUrl = data.get('tenantUrl');

		const sessionString = cookies.get('idnSession');

		if (sessionString) {
			console.log('sessionString', sessionString);

			const session = JSON.parse(sessionString);
			if (session.org == tenant) {
				console.debug('Credential Cache Hit');
				throw redirect(302, '/home');
			} else {
				console.debug('Credential Cache Miss');
			}
		}

		cookies.set('session', JSON.stringify({ baseUrl, tenantUrl }));
		throw redirect(302, generateAuthLink(tenantUrl));
	},
} satisfies Actions;
