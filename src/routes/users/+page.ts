import { API_BASE_URL } from '$lib';
import type { User } from '$lib/types';

export const load = async () => {
	const res = await fetch(API_BASE_URL + '/users');
	const users = (await res.json()) as User[];
	return {
		users
	};
};
