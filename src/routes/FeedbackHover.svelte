<script lang="ts">
	import { createLinkPreview, melt } from '@melt-ui/svelte'
	import { fly } from 'svelte/transition'

	const {
		elements: { trigger, content },
		states: { open }
	} = createLinkPreview({ forceVisible: true, openDelay: 200 })
</script>

<a
	class="trigger"
	href="https://www.feedbackcompany.com/nl-nl/reviews/voyp"
	target="_blank"
	rel="noopener noreferrer"
	use:melt={$trigger}
>
	<svg
		width="24px"
		height="24px"
		viewBox="0 0 304 288"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs>
			<linearGradient
				x1="-12.3982067%"
				y1="-10.4568059%"
				x2="85.5188112%"
				y2="99.2080422%"
				id="linearGradient-1"
			>
				<stop stop-color="#6590FF" offset="0%" />
				<stop stop-color="#4DC9E2" offset="50.707348%" />
				<stop stop-color="#35FFC6" offset="100%" />
			</linearGradient>
		</defs>
		<g id="Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g
				id="Atom/Logos/Logo/Mark/Colored"
				transform="translate(3.293184, 2.000000)"
				fill="url(#linearGradient-1)"
				fill-rule="nonzero"
			>
				<path
					d="M113.488,120.172 C118.4,120.172 122.38,124.152 122.38,129.06 C122.38,133.972 118.4,137.952 113.488,137.952 L98.672,137.952 C93.768,137.952 89.784,141.94 89.784,146.84 L89.784,257.28 L115.56,240.188 C117.016,239.22 118.724,238.704 120.472,238.704 L181.648,238.704 C186.548,238.704 190.536,234.716 190.536,229.816 L190.536,186.868 C190.536,181.96 194.516,177.976 199.424,177.976 C204.336,177.976 208.316,181.96 208.316,186.868 L208.316,229.816 C208.316,244.52 196.352,256.484 181.648,256.484 L123.152,256.484 L85.808,281.256 C84.324,282.236 82.608,282.736 80.892,282.736 C79.448,282.736 78.004,282.384 76.688,281.68 C73.804,280.128 72,277.12 72,273.844 L72,146.84 C72,132.136 83.968,120.172 98.672,120.172 L113.488,120.172 Z M112.988,44.172 C117.636,44.172 121.876,47.516 122.336,52.14 C122.872,57.464 118.704,61.952 113.496,61.952 L26.668,61.952 C21.76,61.952 17.784,65.932 17.784,70.84 L17.784,181.28 L34.948,169.896 C39.48,166.888 45.624,168.62 47.924,173.548 C49.78,177.536 48.44,182.28 44.776,184.712 L13.808,205.252 C12.324,206.236 10.608,206.732 8.892,206.732 C7.448,206.732 6.008,206.384 4.688,205.676 C1.804,204.128 5.13367127e-13,201.116 5.13367127e-13,197.844 L5.13367127e-13,70.84 C5.13367127e-13,56.112 11.944,44.172 26.668,44.172 L112.988,44.172 Z M272.924,0.172 C287.632,0.172 299.596,12.136 299.596,26.84 L299.596,172.508 C299.596,175.784 297.796,178.792 294.912,180.34 C293.588,181.048 292.148,181.4 290.704,181.4 C288.988,181.4 287.276,180.9 285.792,179.916 L243.344,151.764 L174.668,151.764 C159.968,151.764 148,139.8 148,125.092 L148,26.84 C148,12.136 159.968,0.172 174.668,0.172 L272.924,0.172 Z M272.924,17.952 L174.668,17.952 C169.772,17.952 165.784,21.94 165.784,26.84 L165.784,125.092 C165.784,129.996 169.772,133.984 174.668,133.984 L246.024,133.984 C247.772,133.984 249.48,134.5 250.936,135.468 L281.816,155.944 L281.816,26.84 C281.816,21.94 277.828,17.952 272.924,17.952 Z"
					id="Combined-Shape"
				/>
			</g>
		</g>
	</svg>
</a>

{#if $open}
	<div
		use:melt={$content}
		transition:fly={{ y: -20, duration: 150 }}
		class="relative z-50 rounded-3xl bg-white shadow-2xl overflow-hidden"
	>
		<svg
			width="280px"
			height="67px"
			viewBox="0 0 280 67"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<radialGradient
					cx="2.22815689%"
					cy="50%"
					fx="2.22815689%"
					fy="50%"
					r="257.140274%"
					gradientTransform="translate(0.022282,0.500000),scale(0.236282,1.000000),rotate(11.212386),translate(-0.022282,-0.500000)"
					id="radialGradient-1"
				>
					<stop stop-color="#438BF8" offset="0%" /> <stop stop-color="#438BF8" offset="100%" />
				</radialGradient>
			</defs>
			<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g
					id="Bar-Widget/Feedback-Company-Information"
					fill="url(#radialGradient-1)"
					fill-rule="nonzero"
				>
					<g id="Container">
						<path
							d="M0,0 L280,0 L280,52.527023 C233.333333,61.6150318 186.666667,66.1590361 140,66.1590361 C93.3333333,66.1590361 46.6666667,61.6150318 2.48689958e-13,52.527023 L0,0 Z"
							id="pricing-page-lite-top-curve"
						/>
					</g>
				</g>
			</g>
		</svg>

		<div class="rounded-full shadow p-4 absolute top-8 left-1/2 -translate-x-1/2 bg-white">
			<svg
				width="34px"
				height="34px"
				viewBox="0 0 304 288"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<linearGradient
						x1="-12.3982067%"
						y1="-10.4568059%"
						x2="85.5188112%"
						y2="99.2080422%"
						id="linearGradient-1"
					>
						<stop stop-color="#6590FF" offset="0%" />
						<stop stop-color="#4DC9E2" offset="50.707348%" />
						<stop stop-color="#35FFC6" offset="100%" />
					</linearGradient>
				</defs>
				<g id="Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g
						id="Atom/Logos/Logo/Mark/Colored"
						transform="translate(3.293184, 2.000000)"
						fill="url(#linearGradient-1)"
						fill-rule="nonzero"
					>
						<path
							d="M113.488,120.172 C118.4,120.172 122.38,124.152 122.38,129.06 C122.38,133.972 118.4,137.952 113.488,137.952 L98.672,137.952 C93.768,137.952 89.784,141.94 89.784,146.84 L89.784,257.28 L115.56,240.188 C117.016,239.22 118.724,238.704 120.472,238.704 L181.648,238.704 C186.548,238.704 190.536,234.716 190.536,229.816 L190.536,186.868 C190.536,181.96 194.516,177.976 199.424,177.976 C204.336,177.976 208.316,181.96 208.316,186.868 L208.316,229.816 C208.316,244.52 196.352,256.484 181.648,256.484 L123.152,256.484 L85.808,281.256 C84.324,282.236 82.608,282.736 80.892,282.736 C79.448,282.736 78.004,282.384 76.688,281.68 C73.804,280.128 72,277.12 72,273.844 L72,146.84 C72,132.136 83.968,120.172 98.672,120.172 L113.488,120.172 Z M112.988,44.172 C117.636,44.172 121.876,47.516 122.336,52.14 C122.872,57.464 118.704,61.952 113.496,61.952 L26.668,61.952 C21.76,61.952 17.784,65.932 17.784,70.84 L17.784,181.28 L34.948,169.896 C39.48,166.888 45.624,168.62 47.924,173.548 C49.78,177.536 48.44,182.28 44.776,184.712 L13.808,205.252 C12.324,206.236 10.608,206.732 8.892,206.732 C7.448,206.732 6.008,206.384 4.688,205.676 C1.804,204.128 5.13367127e-13,201.116 5.13367127e-13,197.844 L5.13367127e-13,70.84 C5.13367127e-13,56.112 11.944,44.172 26.668,44.172 L112.988,44.172 Z M272.924,0.172 C287.632,0.172 299.596,12.136 299.596,26.84 L299.596,172.508 C299.596,175.784 297.796,178.792 294.912,180.34 C293.588,181.048 292.148,181.4 290.704,181.4 C288.988,181.4 287.276,180.9 285.792,179.916 L243.344,151.764 L174.668,151.764 C159.968,151.764 148,139.8 148,125.092 L148,26.84 C148,12.136 159.968,0.172 174.668,0.172 L272.924,0.172 Z M272.924,17.952 L174.668,17.952 C169.772,17.952 165.784,21.94 165.784,26.84 L165.784,125.092 C165.784,129.996 169.772,133.984 174.668,133.984 L246.024,133.984 C247.772,133.984 249.48,134.5 250.936,135.468 L281.816,155.944 L281.816,26.84 C281.816,21.94 277.828,17.952 272.924,17.952 Z"
							id="Combined-Shape"
						/>
					</g>
				</g>
			</svg>
		</div>

		<div class="mt-9 px-4 text-black pb-4">
			<p class="text-xs text-center">Reviews powered by</p>
			<h2 class="text-lg font-semibold text-center my-1.5">Feedback Company</h2>
			<div class="flex">
				<p class="text-[0.8rem] text-center leading-[20px] tracking-[.25px] w-0 grow">
					Als onafhankelijke review partij bevestigen wij dat Voyp door zijn klanten is beoordeeld
					met een:
				</p>
			</div>

			<div class="mt-4 space-y-2">
				<div class="flex items-center justify-center">
					<i class="icon-[mdi--star] text-yellow-400 w-10 h-10" />
					<i class="icon-[mdi--star] text-yellow-400 w-10 h-10" />
					<i class="icon-[mdi--star] text-yellow-400 w-10 h-10" />
					<i class="icon-[mdi--star] text-yellow-400 w-10 h-10" />
					<i class="icon-[mdi--star-half] text-yellow-400 w-10 h-10" />
					<span class="text-lg font-semibold">9.4</span>
				</div>
				<a
					href="https://www.feedbackcompany.com/nl-nl/reviews/voyp"
					target="_blank"
					class="block text-gray-400 text-center"
				>
					65 reviews
				</a>
				<a
					href="https://www.feedbackcompany.com/nl-nl/reviews/voyp"
					target="_blank"
					class="block py-1 rounded text-white text-center bg-blue-500/90 w-full"
				>
					Bekijk reviews
				</a>
			</div>
		</div>
	</div>
{/if}
