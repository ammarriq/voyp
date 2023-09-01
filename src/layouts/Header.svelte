<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Brand from '$components/Brand.svelte';

	import ExpandLink from '$layouts/ExpandLink.svelte';
	import ExpandNavbar from '$layouts/ExpandNavbar.svelte';

	$: pathname = $page.url.pathname;

	let scrolled = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		scrolled = window.scrollY > 0;
	}

	let item1: Array<{
		label: string;
		href: string;
		children: Array<{ label: string; href: string }>;
	}> = [
		{
			label: 'Algemenie informatie',
			href: 'algemenie-informatie',
			children: [
				{ label: 'Gesprekstarieven', href: '/gesprekstarieven' },
				{ label: 'Onze vijf zekerheden', href: '/vijf-zekerheden' },
				{ label: 'Voordelen van VOIP', href: '/voip' },
				{ label: 'Overstappen', href: '/overstappen' },
				{ label: 'Vergelijken', href: '/vergelijk' },
				{ label: 'Zakelijke telefonie', href: '/zakelijke-telefonie' }
			]
		},
		{
			label: 'Diensten',
			href: 'diensten',
			children: [
				{ label: 'Telefoonnummers', href: '/telefoonnummers' },
				{ label: 'Accounts & SIP-trunks', href: '/accounts' },
				{ label: 'Voyp Mobiel', href: '/voyp-mobiel' },
				{ label: 'App desktop/mobiel', href: '/app' },
				{ label: 'Voyp Internet', href: '/voyp-internet' },
				{ label: 'Alarm, omroep & deurbel', href: '/alarm-omroep-deurbel' }
			]
		},
		{
			label: 'Inrichten telefonie',
			href: 'inrichten-telefonie',
			children: [
				{ label: 'Functionaliteiten', href: '#functionaliteiten' },
				{ label: 'Belplan instellen', href: '#belplan-instellen' },
				{ label: 'Antwoordservice', href: '#antwoordservice' },
				{ label: 'Stemactrice', href: '#stemactrice' },
				{ label: 'Support & toestelconfiguratie', href: '#support' }
			]
		}
	];

	let item2: Array<{
		label: string;
		href: string;
	}> = [
		{ label: 'Veelgestelde vragen', href: 'veelgestelde-vragen' },
		{ label: 'Contact', href: 'contact' },
		{ label: 'Voyp updates', href: 'updates' },
		{ label: 'Voorwaarden', href: 'voorwaarden' },
		{ label: 'Privacy & GDPR', href: 'privacy' }
	];
</script>

<header class="fixed z-30 inset-x-0 bg-white" class:scroll-header={scrolled}>
	<section class="container h-20 lg:h-[6.5rem] flex lg:justify-between items-center">
		<div class="block lg:hidden">
			<span class="icon-[mdi--menu] w-8 h-8" />
		</div>

		<Brand class="w-40 lg:w-48 h-12 lg:h-16 mx-auto lg:mx-0" />

		<div class="hidden lg:block">
			<nav class="uppercase flex gap-1 items-center text-xs font-medium">
				<a href="/" class="px-2 py-3 hover:bg-secondary" class:bg-secondary={pathname === '/'}>
					Home
				</a>

				<a
					href="/tarieven"
					class="px-2 py-3 hover:bg-secondary"
					class:bg-secondary={pathname.includes('/tarieven')}
				>
					Tarieven
				</a>

				<a
					href="/teostellen"
					class="px-2 py-3 hover:bg-secondary"
					class:bg-secondary={pathname.includes('/teostellen')}
					>Teostellen
				</a>

				<div class:bg-secondary={pathname.includes('meer-informatie')}>
					<ExpandLink label="Meer Informatie" expandable>
						<div class="border">
							{#each item1 as { label, href, children }, i (i)}
								{@const url = label.replaceAll(' ', '-').toLowerCase()}
								<div class:bg-secondary={pathname.includes(`${href}`)}>
									<ExpandNavbar {label} expandable>
										{#each children as { label, href }}
											<a
												href={`/meer-informatie/${url}${href}`}
												class="hover:bg-secondary p-3 scroll-smooth"
												class:bg-secondary={pathname.includes(`${href}`)}
											>
												{label}
											</a>
										{/each}
									</ExpandNavbar>
								</div>
							{/each}
						</div>
					</ExpandLink>
				</div>

				<div class:bg-secondary={pathname.includes('over-voyp')}>
					<ExpandLink label="Over Voyp" expandable>
						<div class="border capitalize">
							{#each item2 as { label, href }, i (i)}
								<a
									href={`/over-voyp/${href}`}
									class="block hover:bg-secondary p-3"
									class:bg-secondary={pathname.includes(`/over-voyp/${href}`)}
								>
									{label}
								</a>
							{/each}
						</div>
					</ExpandLink>
				</div>
				<!-- <Dropdown label="Meer informatie" items={item1} />

				<Dropdown label="Over voyp" items={item2} /> -->

				<!-- <a
					href="/meer-informatie"
					class="flex gap-0.5 items-center hover:bg-secondary px-2 py-2.5"
					class:bg-secondary={pathname.includes('/meer-informatie')}
				>
					<span>Meer informatie</span>
					<span class="icon-[mdi--chevron-down] w-3.5 h-3.5" />
				</a> -->

				<!-- <a
					href="/over-voyp"
					class="flex gap-0.5 items-center hover:bg-secondary px-2 py-2.5"
					class:bg-secondary={pathname.includes('/over-voyp')}
				>
					<span>Over voyp</span>
					<span class="icon-[mdi--chevron-down] w-3.5 h-3.5" />
				</a> -->

				<a
					href="/bestellen"
					class="px-2 py-3 hover:bg-secondary"
					class:bg-secondary={pathname.includes('/bestellen')}
				>
					Bestellen
				</a>

				<a href="/" class="hover:bg-secondary px-2 py-3">
					<span class="icon-[mdi--lock] w-3.5 h-3.5" />
				</a>

				<a href="/" class="flex gap-0.5 items-center hover:bg-secondary px-2 py-3">
					<span class="icon-[mdi--phone] w-3.5 h-3.5" />

					<span>088 6789 400</span>
				</a>
			</nav>
		</div>
	</section>
</header>

<style lang="postcss">
	.scroll-header {
		@apply drop-shadow-lg transition-all duration-700;
	}
</style>
