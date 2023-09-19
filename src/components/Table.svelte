<script lang="ts">
	import Toggle from './Toggle.svelte'

	let clazz = ''

	export { clazz as class }
	export let columnsWidth: string[] = []
	export let data: Array<Record<string, unknown>>

	const keys = Object.keys(data[0])
</script>

<div class="hidden md:flex border mt-6 border-[#ccc] overflow-x-auto {clazz}">
	<table
		class="w-0 grow text-sm text-start divide-y
		divide-[#e0e0e0] whitespace-nowrap"
	>
		<thead>
			<tr>
				{#each keys as item, i (i)}
					<th
						class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize"
						style:width={columnsWidth[i]}
					>
						{item}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i (i)}
				<tr class="even:bg-gray-200 hover:bg-[#ebebeb]">
					{#each keys as key (key)}
						<td class="border-[#e0e0e0] px-2.5 py-2">{row[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="md:hidden {clazz}">
	<table
		class="w-full text-sm text-start divide-y
		divide-[#e0e0e0] whitespace-nowrap"
	>
		<thead>
			<tr>
				<th class="border-b-2 border-[#ccc] px-2.5 py-3 text-start capitalize">
					{#if !!keys[0]}{keys[0]}{:else}&nbsp;{/if}
				</th>
			</tr>
		</thead>
		<tbody>
			{#each data as row, i (i)}
				<Toggle>
					<tr
						class="hover:bg-[#ebebeb] border-y"
						class:bg-gray-200={i % 2 === 0}
						slot="header"
						on:click={toggle}
						let:toggle
						let:open
					>
						<td class="relative pl-6 pr-2.5 py-3">
							<i
								class="inline-block text-primary w-4 h-4
								absolute top-1/2 -translate-y-1/2 left-1.5"
								class:icon-[mdi--plus]={!open}
								class:icon-[mdi--minus]={open}
							/>
							{row[keys[0]]}
						</td>
					</tr>

					<tr class="flex flex-col px-2.5 py-3">
						{#each keys.slice(1) as key (key)}
							<td class="py-1 flex items-center gap-2">
								{#if !!key}
									<i class="icon-[mdi--check] text-primary shrink-0 w-4 h-4" />
									<span class="text-primary font-semibold">
										{key}:
									</span>
								{/if}
								{row[key]}
							</td>
						{/each}
					</tr>
				</Toggle>
			{/each}
		</tbody>
	</table>
</div>
