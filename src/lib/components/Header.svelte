<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	let isOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/notes', label: 'Notes' },
		{ href: '/events', label: 'Events' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/alumni', label: 'Alumni' },
		{ href: '/podcast', label: 'Podcast' },
		{ href: '/aws', label: 'AWS' }
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
					src={favicon}
					alt="Computer Software Development Club Logo"
					class="h-10 w-auto md:h-12"
				/>
			</a>

			<!-- Desktop Links -->
			<div class="hidden md:flex flex-1 items-center justify-center gap-x-6">
				{#each links as link}
					<a
						href={link.href}
						class="border-b-2 pb-1 text-base font-semibold transition-colors {isActive(link.href)
							? 'border-[#f77c00] text-[#f77c00]'
							: 'border-transparent text-zinc-800 hover:text-zinc-950'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Desktop Login Button -->
			<div class="hidden md:block shrink-0">
				<a
					href="/"
					class="rounded-full bg-[#FFA400] px-5 py-2 text-sm font-bold uppercase tracking-wider text-neutral-900 shadow-md transition-colors hover:bg-[#F77C00]"
				>
					Login
				</a>
			</div>

			<!-- Mobile Hamburger -->
			<div class="flex items-center gap-3 md:hidden">
				<a
					href="/"
					class="rounded-full bg-[#FFA400] px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-md transition-colors hover:bg-[#F77C00]"
				>
					Login
				</a>

				<button
					onclick={() => (isOpen = !isOpen)}
					aria-label="Toggle mobile menu"
					aria-expanded={isOpen}
					class="rounded-lg p-2 text-zinc-800 hover:bg-neutral-300 transition-colors focus:outline-none"
				>
					{#if isOpen}
						<!-- Close Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<!-- Hamburger Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu Dropdown -->
		{#if isOpen}
			<div class="mt-4 flex flex-col gap-y-2 border-t border-neutral-300 pt-4 md:hidden">
				{#each links as link}
					<a
						href={link.href}
						onclick={() => (isOpen = false)}
						class="rounded-lg px-3 py-2 text-base font-semibold transition-colors {isActive(
							link.href
						)
							? 'bg-[#f77c00]/10 text-[#f77c00]'
							: 'text-zinc-800 hover:bg-neutral-300'}"
					>
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>
