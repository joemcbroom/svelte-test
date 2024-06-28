<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { User } from '$lib/types';
	import { enhance } from '$app/forms';
	import Button from './ui/button/button.svelte';
	import { fade } from 'svelte/transition';

	export let user: User;
	let isVisible = true;
</script>

{#if isVisible}
	<div transition:fade>
		<Card.Root class="hover:shadow-lg">
			<Card.Header>
				<div class="flex items-center">
					<div class="flex flex-col w-full">
						<span contenteditable>{user.name}</span>
						<span class="text-muted-foreground text-sm">{user.username}</span>
					</div>
					<div class="grid place-items-center w-1/2">
						<!-- <Avatar.Root class="size-12">
					<Avatar.Fallback />
					<Avatar.Image loading="lazy" src={user.avatar} />
				</Avatar.Root> -->
					</div>
				</div>
			</Card.Header>
			<Card.Content>
				<div class="flex flex-col items-start w-1/2">
					<span class="text-muted-foreground text-sm">{user.companyName}</span>
					<span class="text-muted-foreground text-sm">{user.city}</span>
				</div>
			</Card.Content>
			<Card.Footer class="flex items-center justify-end gap-2">
				<form
					method="POST"
					action={`/users/${user.id}`}
					use:enhance={() => {
						isVisible = false;
					}}
				>
					<Button type="submit" size="sm" variant="destructive">Delete</Button>
				</form>
				<a href={`/users/${user.id}`}>
					<Button size="sm">Details</Button>
				</a>
			</Card.Footer>
		</Card.Root>
	</div>
{/if}
