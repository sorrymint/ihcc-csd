<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { primaryPages } from '$lib/site-navigation';

	let menuOpen = $state(false);
	let isVisible = $state(true);

	const isActive = (href: string) =>
		href === '/'
			? page.url.pathname === '/'
			: page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);

	onMount(() => {
		let lastScrollY = window.scrollY;

		const controlHeader = () => {
			const currentScrollY = window.scrollY;
			isVisible = currentScrollY <= lastScrollY || currentScrollY <= 20;
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', controlHeader, { passive: true });

		return () => window.removeEventListener('scroll', controlHeader);
	});
</script>

<nav class:nav-hidden={!isVisible} class="site-header">
	<div class="header-shell">
		<div class="brand-row">
			<div class="brand-group">
				<button
					type="button"
					class="menu-toggle"
					onclick={() => (menuOpen = !menuOpen)}
					aria-expanded={menuOpen}
					aria-controls="mobile-navigation"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				>
					<span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
				</button>

				<a class="brand-link" href="/" aria-label="Go to home page">
					<img
						src="/Images/CSDClubLogo-removebg-preview.svg"
						alt="Computer Software Development Club Logo"
						width="40"
						height="40"
					/>
				</a>
			</div>

			<div class="desktop-links">
				{#each primaryPages as link (link.href)}
					<a href={link.href} class:active-link={isActive(link.href)}>{link.label}</a>
				{/each}
			</div>
		</div>
	</div>

	<div id="mobile-navigation" class:mobile-open={menuOpen} class="mobile-panel">
		<div class="mobile-links">
			{#each primaryPages as link (link.href)}
				<a
					href={link.href}
					class:active-mobile-link={isActive(link.href)}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.site-header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
		width: 100%;
		transition: transform 0.3s ease;
	}

	.nav-hidden {
		transform: translateY(-100%);
	}

	.header-shell {
		margin: 0.75rem;
		border-radius: 1rem;
		background: #e5e5e5;
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
	}

	.brand-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 4.5rem;
		padding: 0 1rem;
	}

	.brand-group {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.brand-link {
		display: inline-flex;
		align-items: center;
	}

	.brand-link img {
		display: block;
	}

	.menu-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 0;
		border-radius: 0.75rem;
		background: transparent;
		color: #0d0d0d;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.menu-toggle:hover {
		background: rgba(0, 0, 0, 0.06);
	}

	.desktop-links {
		display: none;
		align-items: center;
		gap: 1.5rem;
	}

	.desktop-links a,
	.mobile-links a {
		color: #262626;
		text-decoration: none;
		font-weight: 600;
		transition:
			color 0.2s ease,
			background-color 0.2s ease;
	}

	.active-link {
		color: #f77c00;
		border-bottom: 2px solid #f77c00;
		padding-bottom: 0.25rem;
	}

	.mobile-panel {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease,
			opacity 0.3s ease;
	}

	.mobile-open {
		max-height: 24rem;
		opacity: 1;
	}

	.mobile-links {
		margin: 0 0.75rem;
		margin-top: -0.25rem;
		padding: 2rem 0.75rem 0.75rem;
		border-radius: 0 0 1rem 1rem;
		background: #e5e5e5;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.mobile-links a {
		padding: 0.85rem 0.75rem;
		border-radius: 0.75rem;
	}

	.mobile-links a:hover {
		background: rgba(0, 0, 0, 0.06);
	}

	.active-mobile-link {
		background: #dfdcdc;
		color: #f77c00;
	}

	@media (min-width: 768px) {
		.brand-row {
			padding: 0 1.5rem;
		}

		.menu-toggle,
		.mobile-panel {
			display: none;
		}

		.desktop-links {
			display: flex;
		}
	}
</style>
