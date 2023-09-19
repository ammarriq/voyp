<script lang="ts">
	let open = false

	const toggle = () => (open = !open)
</script>

<slot name="header" {open} {toggle} />

{#if open} <slot /> {/if}
