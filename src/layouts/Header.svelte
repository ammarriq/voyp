<script lang="ts">
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import { clickOutside } from '$lib/client/action'

	import Brand from '$components/Brand.svelte'

	import ExpandLink from '$layouts/ExpandLink.svelte'
	import ExpandNav from '$layouts/ExpandNav.svelte'
	import ClickableExpandLink from '$layouts/ClickableExpandLink.svelte'
	import ClickableExpandNav from '$layouts/ClickableExpandNav.svelte'

	$: pathname = $page.url.pathname

	let scrolled: number

	const item1: Array<{
		label: string
		children: Array<{ label: string; href: string }>
	}> = [
		{
			label: 'Algemenie informatie',
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
			children: [
				{ label: 'Functionaliteiten', href: '/inrichten-telefonie#functionaliteiten' },
				{ label: 'Belplan instellen', href: '/inrichten-telefonie#belplan-instellen' },
				{ label: 'Antwoordservice', href: '/inrichten-telefonie#antwoordservice' },
				{ label: 'Stemactrice', href: '/inrichten-telefonie#stemactrice' },
				{ label: 'Support & toestelconfiguratie', href: '/inrichten-telefonie#support' }
			]
		}
	]

	const item2: Array<{
		label: string
		href: string
	}> = [
		{ label: 'Veelgestelde vragen', href: '/veelgestelde-vragen' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Voyp updates', href: '/update' },
		{ label: 'Voorwaarden', href: '/algemene-voorwaarden' },
		{ label: 'Privacy & AVG', href: '/privacy' }
	]

	let open = false
</script>

<svelte:window bind:scrollY={scrolled} />

<header class="fixed z-30 inset-x-0 bg-white" class:scroll-header={!!scrolled}>
	<section class="container h-20 lg:h-[6.5rem] flex lg:justify-between items-center">
		<!-- Tablet and mobile -->
		<button type="button" class="block lg:hidden" on:click|stopPropagation={() => (open = !open)}>
			<span class="icon-[mdi--menu] w-8 h-8 align-middle" />
		</button>

		<!-- Tablet and mobile -->

		{#if open}
			<div
				class="fixed top-[4.6rem] inset-x-0 border-b bg-secondary
				container block lg:hidden"
				transition:slide={{ axis: 'y' }}
				use:clickOutside={() => (open = false)}
			>
				<nav class="h-96 w-64 flex-col text-xs font-medium overflow-y-auto">
					<a
						href="/"
						class="block p-3 hover:bg-primary/90 hover:text-white transition-colors duration-700"
						on:click={() => (open = !open)}
					>
						Home
					</a>

					<ClickableExpandLink label="Tarieven" href="/tarieven" on:click={() => (open = !open)} />

					<ClickableExpandLink
						label="Toestellen"
						href="/toestellen"
						on:click={() => (open = !open)}
					/>

					<ClickableExpandLink label="Meer Informatie" expandable>
						{#each item1 as { label, children }, i (i)}
							<ClickableExpandNav {label} expandable>
								{#each children as { label, href }}
									<a
										{href}
										on:click={() => (open = !open)}
										class="block px-7 py-3 bg-primary/90 hover:bg-primary text-white"
									>
										{label}
									</a>
								{/each}
							</ClickableExpandNav>
						{/each}
					</ClickableExpandLink>

					<ClickableExpandLink label="Over Voyp" expandable>
						<div class="capitalize">
							{#each item2 as { label, href }, i (i)}
								<a
									{href}
									on:click={() => (open = !open)}
									class="block px-5 py-3 bg-primary hover:bg-primary/90 text-white"
								>
									{label}
								</a>
							{/each}
						</div>
					</ClickableExpandLink>

					<ClickableExpandLink label="Bestellen" href="/bestellen" />
					<a
						href="https://mijn.voyp.nl/login"
						class="block p-3 hover:bg-primary/90 hover:text-white transition-colors duration-700"
					>
						<i class="icon-[mdi--lock] w-3.5 h-3.5" />
					</a>

					<a
						href="tel:+31886789400"
						class="p-3 flex gap-1 items-center hover:bg-primary/90 hover:text-white
					  transition-colors duration-700"
					>
						<span class="icon-[mdi--phone] w-3.5 h-3.5" />

						<span>088 6789 400</span>
					</a>
				</nav>
			</div>
		{/if}

		<a href="/" class="block mx-auto lg:mx-0">
			<Brand class="w-40 lg:w-48 h-12 lg:h-16" />
		</a>

		<!-- Desktop -->
		<div class="hidden lg:block">
			<nav class="uppercase flex gap-1 items-center text-xs font-medium">
				<a href="/" class="px-2 py-3 hover:bg-secondary" class:bg-secondary={pathname === '/'}>
					Home
				</a>

				<ExpandLink label="Tarieven" href="/tarieven" />

				<ExpandLink label="Toestellen" href="/toestellen" />

				<div
					class:bg-secondary={item1.some((o) => o.children.some((o) => pathname.includes(o.href)))}
				>
					<ExpandLink label="Meer Informatie" expandable>
						<div class="shadow-lg">
							{#each item1 as { label, children }, i (i)}
								<ExpandNav {label} expandable>
									{#each children as { label, href }}
										<a {href} class="hover:bg-secondary p-3 scroll-smooth">
											{label}
										</a>
									{/each}
								</ExpandNav>
							{/each}
						</div>
					</ExpandLink>
				</div>

				<div class:bg-secondary={item2.some((o) => pathname.includes(o.href))}>
					<ExpandLink label="Over Voyp" expandable>
						<div class="capitalize shadow-lg">
							{#each item2 as { label, href }, i (i)}
								<a
									{href}
									class="block hover:bg-secondary p-3"
									class:bg-secondary={pathname.includes(`/${href}`)}
								>
									{label}
								</a>
							{/each}
						</div>
					</ExpandLink>
				</div>

				<ExpandLink label="Bestellen" href="/bestellen" />
				<a
					href="https://mijn.voyp.nl/login"
					class="px-2 py-3 hover:bg-secondary shrink-0 flex items-center"
				>
					<i class="icon-[mdi--lock] w-3 h-3" />
				</a>

				<a href="tel:+31886789400" class="flex gap-0.5 items-center hover:bg-secondary px-2 py-3">
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
