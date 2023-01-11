<header class="bg-gray-600 h-16">
	<div class="flex p-2 h-full">
		<div class="w-16 h-full relative block">
			<a href="/"><button class="button-round">Home</button></a>
		</div>
		<div class="h-full mx-auto rounded-xl bg-[#3B3B3B] w-[400px]">
			<form class="h-full flex justify-center" on:submit|preventDefault={handleSubmit}>
				<select class="cursor-pointer rounded-tl-xl rounded-bl-xl pl-3 h-full w-[25%] text-center focus:bg-gray-800" bind:value={selected} on:change={() => search = ''}>
					{#each options as option}
						<option value={option} class="rounded-xl border-none">
							{option.text}
						</option>
					{/each}
				</select>
				<input class="pr-3 pl-3 h-full w-[50%]" type="text" placeholder="Search something here" bind:value={search}>
				<button class="cursor-pointer rounded-r-xl pr-2 pl-1.5 text-center hover:bg-gray-800 w-[25%]">Search</button>
			</form>
		</div>

		<div class="w-16 h-full">
			<a href="/login"><button class="button-round">Login</button></a>
		</div>
	</div>
</header>

<script>
	import {pb} from '$lib/pocketbase';
	import {goto} from "$app/navigation";

	let options = [
		{ id: 1, text: 'User'},
		{ id: 2, text: 'Venue'},
		{ id: 3, text: 'Event'}
	];

	let selected;
	let search;

	function handleSubmit() {
		console.log(`You chose to search ${search} under ${selected.text}`);
		goto(`/${selected.text.toLowerCase()}/${search.toLowerCase()}`);

	}
</script>