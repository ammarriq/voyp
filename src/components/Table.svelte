<script lang="ts">
	let clazz = ''

	export { clazz as class }
	export let columnsWidth: string[] = []
	export let data: Array<Record<string, unknown>>

	const keys = Object.keys(data[0])
</script>

<div class="flex border mt-6 border-[#ccc] overflow-x-auto {clazz}">
	<table
		class="w-0 grow text-sm text-start divide-y
		divide-[#e0e0e0] whitespace-nowrap"
	>
		<thead>
			<tr>
				{#each keys as item, i (i)}
					<th
						class="border-b-2 border-[#ccc] px-2.5 py-3 text-start capitalize"
						style:width={columnsWidth[i]}
					>
						{item}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i (i)}
				<tr class="even:bg-[#f5f5f5] hover:bg-[#ebebeb]">
					{#each keys as key (key)}
						<td class="border-[#e0e0e0] px-2.5 py-2">{row[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
