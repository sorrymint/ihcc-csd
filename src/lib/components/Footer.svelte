<script lang="ts">
	//TODO update these links, and move them to a icon library
	const socialLinks = [
		{ href: 'https://www.facebook.com/', label: 'Facebook', src: '/Images/FaceBookNew.png' },
		{ href: 'https://www.instagram.com/', label: 'Instagram', src: '/Images/InstagramNew.png' },
		{ href: 'https://x.com/', label: 'Twitter', src: '/Images/TwitterNew.png' },
		{
			href: 'https://github.com/sorrymint/ihcc-csd',
			label: 'GitHub',
			src: '/Images/gitHubLogo.png'
		},
		{ href: 'https://www.linkedin.com/', label: 'LinkedIn', src: '/Images/LinkedInNew.png' }
	];
</script>

<footer class="site-footer">
	<div class="footer-shell">
		<h2 class="font-matrixtype">Interested In Joining?</h2>

		<p class="footer-copy desktop-copy">
			Everyone is welcome to join, <a href="/events">Click Here</a>to view upcoming events
		</p>

		<div class="cta-row">
			<a class="cta-link" href="/contact">Join Now</a>
		</div>

		<div class="footer-grid">
			<a class="shrink-0" href="/" aria-label="Go to home page">
				<img
					src="/Images/Code.svg"
					alt="Computer Software Development Club Logo"
					class="h-20 w-auto md:h-12"
				/>
			</a>

			<div class="social-links">
				{#each socialLinks as link (link.href)}
					<a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
						<img src={link.src} alt={link.label} width="28" height="28" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>

<!-- TODO change to tailwind -->
<style>
	.site-footer {
		margin-top: 4rem;
	}

	.footer-shell {
		background: #e5e5e5;
		padding: 2rem 1rem;
	}

	h2 {
		margin: 0;
		text-align: center;
		font-size: clamp(2rem, 4vw, 2.5rem);
		font-weight: 700;
		color: #701730;
	}

	.footer-copy {
		margin: 1.25rem auto 0;
		max-width: 34rem;
		text-align: center;
		font-size: 0.95rem;
		color: #262626;
	}

	.footer-copy a {
		margin: 0 0.35rem;
		color: #f77c00;
	}

	.cta-row {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}

	.cta-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 1.5rem;
		border-radius: 999px;
		background: #ffa400;
		color: #262626;
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.footer-grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.footer-logo img {
		display: block;
	}

	.quick-links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.quick-links a {
		color: #000;
		text-decoration: none;
		font-weight: 700;
		text-transform: uppercase;
	}

	.social-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.social-links img {
		display: block;
	}

	.desktop-copy {
		display: none;
	}

	@media (min-width: 768px) {
		.footer-shell {
			padding: 2rem 1.5rem;
		}

		.footer-grid {
			flex-direction: row;
			justify-content: space-evenly;
		}

		.quick-links {
			flex-direction: row;
			gap: 2rem;
		}

		.desktop-copy {
			display: block;
		}

		.mobile-copy {
			display: none;
		}
	}
</style>
