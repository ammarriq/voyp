<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte'
	import { fade } from 'svelte/transition'

	export let href: string

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: { placement: 'top' },
		openDelay: 500,
		closeOnPointerDown: false,
		forceVisible: true
	})
</script>

<a {href} class="trigger" use:melt={$trigger}>
	<slot name="trigger" />
</a>

{#if $open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class="z-10 rounded bg-black text-white shadow px-4"
	>
		<div use:melt={$arrow} />
		<slot />
	</div>
{/if}
