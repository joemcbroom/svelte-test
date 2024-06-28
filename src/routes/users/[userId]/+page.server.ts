import { API_BASE_URL } from '$lib';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ params }) => {
		const { userId } = params;
		await fetch(API_BASE_URL + `/users/${userId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return {
			status: 200
		};
	}
};
