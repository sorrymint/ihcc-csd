import { error } from '@sveltejs/kit';
import { getNote, getNoteYears, getNotesByYear } from '$lib/notes';

export const prerender = true;

export function entries() {
	return getNoteYears().flatMap((year) =>
		getNotesByYear(year).map((note) => ({ year, slug: note.slug }))
	);
}

export function load({ params }) {
	const note = getNote(params.year, params.slug);

	if (!note) {
		throw error(404, `Meeting note not found: ${params.year}/${params.slug}`);
	}

	return {
		year: note.year,
		slug: note.slug,
		title: note.title,
		date: note.date,
		summary: note.summary
	};
}
