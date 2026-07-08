<script lang="ts">
	import type { Note } from '$lib/notes';

	let { data } = $props<{
		data: {
			year: string;
			notes: Array<Omit<Note, 'component'>>;
		};
	}>();
</script>

<svelte:head>
	<title>{data.year} Notes</title>
	<meta name="description" content={`Meeting notes for the ${data.year} school year.`} />
</svelte:head>

<div class="notes-page">
	<header>
		<a class="back-link" href="/notes">&lt;- All years</a>
		<h1>{data.year} Notes</h1>
		<p>Meetings this year: {data.notes.length}</p>
	</header>

	<div class="notes-list">
		{#each data.notes as note (note.slug)}
			<a class="note-card" href={`/notes/${data.year}/${note.slug}`}>
				<div>
					<h2>{note.title}</h2>
					{#if note.summary}
						<p>{note.summary}</p>
					{/if}
				</div>
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
		margin-bottom: 2rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1rem;
		color: #701730;
		font-weight: 700;
		text-decoration: none;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.25rem, 5vw, 3.75rem);
	}

	header p {
		margin-top: 0.75rem;
		color: #555;
	}

	.notes-list {
		display: grid;
		gap: 1rem;
	}

	.note-card {
		display: grid;
		gap: 1rem;
		padding: 1.5rem;
		border-radius: 1rem;
		background: #e5e5e5;
		color: #111;
		text-decoration: none;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
	}

	h2 {
		margin: 0;
		font-size: 1.35rem;
	}

	.note-card p {
		margin: 0.5rem 0 0;
		color: #444;
	}

	@media (min-width: 768px) {
		.note-card {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: end;
		}
	}
</style>
