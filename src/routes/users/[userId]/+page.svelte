<script>
	import UserCard from '$lib/components/user-card.svelte';

	export let data;
	$: ({ user } = data);
</script>

<UserCard {user} />
