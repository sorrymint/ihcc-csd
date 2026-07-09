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

	//Move this date formatter to a shared file so we don't have to duplicate
	//I feel like we can handle the dates better in general.
	const noteDateFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: '2-digit',
		timeZone: 'UTC'
	});

	function formatNoteDate(date: string): string {
		return noteDateFormatter.format(new Date(date));
	}

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
		<h1>{formatNoteDate(data.date)}, Meeting Notes</h1>
		<div class="note-meta">
			<p>{data.summary}</p>
		</div>
	</header>

	<div class="markdown-surface markdown-prose">
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
</style>
