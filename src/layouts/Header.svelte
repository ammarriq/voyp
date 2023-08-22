<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Brand from '$components/Brand.svelte';
	import Dropdown from '$layouts/Dropdown.svelte';

	$: pathname = $page.url.pathname;

	let scrolled = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		scrolled = window.scrollY > 0;
	}

	let item1 = [
		{
			label: 'Algemenie informatie',
			children: [
				'Gesprekstarieven',
				'Onze vijf zekerheden',
				'Voordelen van VOIP',
				'Overstappen',
				'Vergelijken',
				'Zakelijke telefonie'
			]
		},
		{
			label: 'Diensten',
			children: [
				'Telefoonnummers',
				'Accounts & SIP-trunks',
				'Voyp Mobiel',
				'App desktop/mobiel',
				'Voyp Internet',
				'Alarm, omroep & deurbel'
			]
		},
		{
			label: 'Inrichten telefonie',
			children: [
				'Functionaliteiten',
				'Belplan instellen',
				'Antwoordservice',
				'Stemactrice',
				'Support & toestelconfiguratie'
			]
		}
	];

	let item2 = [
		{ label: 'Veelgestelde vragen', children: [] },
		{ label: 'Contact', children: [] },
		{ label: 'Voyp updates', children: [] },
		{ label: 'Storingen', children: [] },
		{ label: 'Voorwaarden', children: [] },
		{ label: 'Privacy & GDPR', children: [] }
	];
</script>

<header class="fixed z-20 inset-x-0 bg-white" class:scroll-header={scrolled}>
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

				<Dropdown label="Meer informatie" items={item1} />

				<Dropdown label="Over voyp" items={item2} />

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
