<script lang="ts">
	import DropdownItem from './DropdownItem.svelte';
	export let label = '';
	export let children: Array<string> = [];
</script>

<div class="group relative cursor-pointer">
	<div class="flex items-center justify-between hover:bg-secondary px-4 py-3.5">
		<span>{label}</span>
		{#if children.length > 0}
			<span class="icon-[mdi--chevron-right]" />
		{/if}
	</div>
	{#if children.length > 0}
		<div>
			<a
				href="/"
				class="absolute left-[11.95rem] z-20 -top-[0.06rem] w-56 hidden bg-white border
        shadow-lg group-hover:block"
			>
				{#each children as child, i (i)}
					<DropdownItem label={child} />
				{/each}
			</a>
		</div>
	{/if}
</div>
