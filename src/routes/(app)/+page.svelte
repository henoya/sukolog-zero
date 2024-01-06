<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="bg-black">
	<h1 class="text-3xl font-bold underline">Hello world!</h1>
	<p class="text-xl text-white">「tailwindは有効です」</p>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
