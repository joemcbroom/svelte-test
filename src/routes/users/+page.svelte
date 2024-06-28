<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import UserCard from '$lib/components/user-card.svelte';
	import { flip } from 'svelte/animate';

	export let data;
	$: ({ users } = data);

	const shuffleUsers = () => {
		users = shuffle(users);
	};

	const shuffle = (array: any[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
</script>

<div class="flex justify-center py-4">
	<h2 class="text-2xl font-bold ml-auto">Users</h2>
	<Button class="ml-auto" on:click={shuffleUsers}>Shuffle</Button>
</div>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each users as user (user.id)}
		<div animate:flip={{ duration: 500 }}>
			<UserCard {user} />
		</div>
	{/each}
</div>
