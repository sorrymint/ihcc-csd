import type { Component } from 'svelte';

type NoteDateValue = string | Date;

export type NoteMetadata = {
	slug: string;
	date: NoteDateValue;
	summary: string;
};

export type Note = Omit<NoteMetadata, 'date'> & {
	date: string;
	year: string;
	component: Component;
};

type NoteModule = {
	default: Component;
	metadata: NoteMetadata;
};

const markdownModules = import.meta.glob('/content/*/*.md', { eager: true }) as Record<
	string,
	NoteModule
>;

function normalizeNoteDate(date: NoteDateValue): string {
	if (date instanceof Date) {
		return date.toISOString().slice(0, 10);
	}

	return date;
}

function getNoteTimestamp(date: NoteDateValue): number {
	const normalizedDate = normalizeNoteDate(date);
	return Date.parse(`${normalizedDate}T00:00:00.000Z`);
}

export const notes = Object.entries(markdownModules)
	.map(([filePath, module]) => {
		const [year] = filePath.replace('/content/', '').split('/');
		const normalizedDate = normalizeNoteDate(module.metadata.date);

		return {
			year,
			...module.metadata,
			date: normalizedDate,
			component: module.default
		};
	})
	.sort((left, right) => {
		if (left.year !== right.year) {
			return right.year.localeCompare(left.year, undefined, { numeric: true });
		}

		return getNoteTimestamp(left.date) - getNoteTimestamp(right.date);
	});

export function getNoteYears() {
	return [...new Set(notes.map((note) => note.year))];
}

export function getNotesByYear(year: string): Note[] {
	return notes.filter((note) => note.year === year);
}

export function getNote(year: string, slug: string): Note | undefined {
	return getNotesByYear(year).find((note) => note.slug === slug);
}
