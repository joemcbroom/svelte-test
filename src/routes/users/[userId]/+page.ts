import { API_BASE_URL } from '$lib';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { userId: string } }) {
	const res = await fetch(`${API_BASE_URL}/users/${params.userId}`);
	const user = await res.json();
	return {
		user
	};
}
