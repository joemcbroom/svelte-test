<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import UserCard from '$lib/components/user-card.svelte';

	export let data;
	$: ({ user } = data);

	const onDelete = () => goto('/users');
</script>

<UserCard {user} {onDelete} hideDetailsButton />
<a href="/users"><Button class="mt-6" variant="outline">Back</Button></a>
