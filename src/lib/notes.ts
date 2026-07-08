import type { Component } from 'svelte';

export type NoteMetadata = {
	title: string;
	slug: string;
	date: string;
	summary: string;
};

export type Note = NoteMetadata & {
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

export const notes = Object.entries(markdownModules)
	.map(([filePath, module]) => {
		const [year] = filePath.replace('/content/', '').split('/');

		return {
			year,
			...module.metadata,
			component: module.default
		};
	})
	.sort((left, right) => {
		if (left.year !== right.year) {
			return right.year.localeCompare(left.year, undefined, { numeric: true });
		}

		return left.date.localeCompare(right.date);
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
