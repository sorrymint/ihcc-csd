export type SitePage = {
	href: string;
	label: string;
	segment: string;
};

const routePages = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });

function formatLabel(segment: string) {
	if (segment === '') return 'Home';

	return segment
		.split('-')
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

function toHref(filePath: string) {
	const routePath = filePath.replace('/src/routes', '').replace('/+page.svelte', '');
	return routePath === '' ? '/' : routePath;
}

function isTopLevelStaticRoute(href: string) {
	if (href.includes('[') || href.includes(']')) return false;
	if (href === '/') return true;

	const segments = href.split('/').filter(Boolean);
	return segments.length === 1;
}

export const sitePages: SitePage[] = Object.keys(routePages)
	.map((filePath) => toHref(filePath))
	.filter(isTopLevelStaticRoute)
	.sort((left, right) => {
		if (left === '/') return -1;
		if (right === '/') return 1;
		return left.localeCompare(right);
	})
	.map((href) => {
		const segment = href === '/' ? '' : href.slice(1);
		return {
			href,
			segment,
			label: formatLabel(segment)
		};
	});

export const primaryPages = sitePages;
export const footerPages = sitePages;
