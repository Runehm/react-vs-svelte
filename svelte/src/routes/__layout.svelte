<script>
	import Header from '$lib/header/Header.svelte';
	import '../styles/base.scss';
</script>

<Header />

<main>
	<slot />
</main>



<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		gap: 3rem;
		box-sizing: border-box;
	}
</style>
