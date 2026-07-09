<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/notes', label: 'Notes' },
		{ href: '/events', label: 'Events' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/alumni', label: 'Alumni' },
		{ href: '/podcast', label: 'Podcast'},
		{ href: '/aws', label: 'AWS' },
	] as const;

	const isActive = (href: string) =>
		href === '/'
			? page.url.pathname === '/'
			: page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<nav class="fixed top-0 left-0 z-50 w-full px-4 pt-4" aria-label="Main navigation">
	<div class="mx-auto max-w-7xl rounded-2xl bg-neutral-200 px-6 py-4 shadow-lg">
		<div class="flex items-center justify-between gap-6">
			<a class="shrink-0" href="/" aria-label="Go to home page">
				<img
					src="/Images/Code.svg"
					alt="Computer Software Development Club Logo"
					class="h-20 w-auto md:h-12"
				/>
			</a>

			<!-- TODO work on mobile menu -->
			<div class="hidden md:flex flex-1 items-center justify-center gap-x-6">
				{#each links as link}
					<a
						href={link.href}
						class="border-b-2 pb-1 text-base font-semibold transition-colors"
						class:border-[#f77c00]={isActive(link.href)}
						class:text-[#f77c00]={isActive(link.href)}
						class:border-transparent={!isActive(link.href)}
						class:text-zinc-800={!isActive(link.href)}
						class:hover:text-zinc-950={!isActive(link.href)}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<div class="shrink-0">
				<a
					href="/"
					class="rounded-full bg-[#FFA400] px-5 py-2 text-sm font-bold uppercase tracking-wider text-neutral-900 shadow-md transition-colors hover:bg-[#F77C00]"
				>
					Login
				</a>
			</div>
		</div>
	</div>
</nav>
