<script>
	import Header from '$lib/Components/Header.svelte';
	import './styles.css';
	export const prerender = true
	export const trailingSlash = 'always'

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

