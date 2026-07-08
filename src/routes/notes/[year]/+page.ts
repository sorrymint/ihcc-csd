import { error } from '@sveltejs/kit';
import { getNotesByYear, getNoteYears } from '$lib/notes';

export const prerender = true;

export function entries() {
	return getNoteYears().map((year) => ({ year }));
}

export function load({ params }) {
	const notes = getNotesByYear(params.year).map(({ component, ...note }) => note);

	if (notes.length === 0) {
		throw error(404, `No meeting notes found for ${params.year}`);
	}

	return {
		year: params.year,
		notes
	};
}
