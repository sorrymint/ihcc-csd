<script lang="ts">
	import { getNoteYears, getNotesByYear } from '$lib/notes';

	const years = getNoteYears().map((year) => ({
		year,
		count: getNotesByYear(year).length
	}));
</script>

<svelte:head>
	<title>Meeting Notes</title>
	<meta name="description" content="Browse CSD club meeting notes by school year." />
</svelte:head>

<div class="notes-page">
	<header>
		<p class="eyebrow">Club Meeting Notes</p>
		<h1>Meeting Notes</h1>
		<p class="intro">
			Browse notes by school year. Notes currently span the 2024-2025 and 2025-2026 club years.
		</p>
	</header>

	<div class="year-grid">
		{#each years as item (item.year)}
			<a class="year-card" href={`/notes/${item.year}`}>
				<span class="year-label">{item.year}</span>
				<span class="year-count">{item.count} meeting{item.count === 1 ? '' : 's'}</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.notes-page {
		max-width: 72rem;
		margin: 0 auto;
		padding: 8rem 1.25rem 4rem;
	}

	header {
		max-width: 40rem;
		margin-bottom: 2rem;
	}

	.eyebrow {
		margin: 0 0 0.5rem;
		color: #701730;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.5rem, 5vw, 4rem);
	}

	.intro {
		margin-top: 0.75rem;
		color: #444;
		font-size: 1.05rem;
	}

	.year-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1rem;
	}

	.year-card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.5rem;
		border-radius: 1rem;
		background: #e5e5e5;
		color: #111;
		text-decoration: none;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
	}

	.year-label {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.year-count {
		color: #555;
	}
</style>
