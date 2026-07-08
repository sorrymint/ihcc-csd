<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>IHCC CSD Club</title>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Indian Hills Community College's Computer Software Development Club Website"
	/>
</svelte:head>
<Header />
{@render children()}
<Footer />
