<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { getNote } from '$lib/notes';

	let { data } = $props<{
		data: {
			year: string;
			slug: string;
			title: string;
			date: string;
			summary: string;
		};
	}>();

	const note = $derived.by(() => {
		const match = getNote(data.year, data.slug);
		if (!match) {
			throw error(404, `Meeting note not found: ${data.year}/${data.slug}`);
		}

		return match;
	});

	const NoteContent = $derived(note.component);
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta
		name="description"
		content={data.summary ?? `Meeting note ${data.slug} for ${data.year}.`}
	/>
</svelte:head>

<article class="note-page">
	<header>
		<a class="back-link" href={`/notes/${data.year}`}>&lt;- Back to all {data.year} Notes</a>
		<h1>{data.title}</h1>
		<div class="note-meta">
			<p>{data.summary}</p>
		</div>
	</header>

	<div class="note-body prose">
		<NoteContent />
	</div>
</article>

<style>
	.note-page {
		max-width: 56rem;
		margin: 0 auto;
		padding: 8rem 1.25rem 5rem;
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
		margin: 0.35rem 0 0;
		font-size: clamp(2.5rem, 5vw, 4rem);
	}

	.note-meta {
		margin-top: 1rem;
		color: #444;
	}

	.note-meta p {
		margin: 0.5rem 0 0;
	}

	.note-body {
		padding: 2rem;
		border-radius: 1.25rem;
		background: #f8f8f8;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
	}

	.prose :global(h1) {
		margin-top: 0;
		font-size: clamp(2rem, 4vw, 3rem);
	}

	.prose :global(h2) {
		margin-top: 2rem;
		font-size: 1.7rem;
	}

	.prose :global(h3) {
		margin-top: 1.5rem;
		font-size: 1.25rem;
		color: #701730;
	}

	.prose :global(p),
	.prose :global(li) {
		line-height: 1.7;
		color: #222;
	}

	.prose :global(a) {
		color: #c76b00;
	}

	.prose :global(ul),
	.prose :global(ol) {
		padding-left: 1.25rem;
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
	}
</style>
