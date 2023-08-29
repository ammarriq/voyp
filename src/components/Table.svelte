<script lang="ts">
	let clazz = '';

	export { clazz as class };
	export let tableData;

	let dataTable: {
		headers: Array<string>;
		data: Array<{ item1: string; item2: string; item3: string }>;
	} = tableData;
</script>

<div class="flex border mt-6 border-[#ccc] overflow-x-auto {clazz}">
	<table class="w-0 grow text-sm text-start divide-y divide-[#e0e0e0] whitespace-nowrap">
		<tr>
			{#each dataTable.headers as item, i (i)}
				<th
					class="border-b-2 border-[#ccc] px-2.5 py-3 text-start"
					class:even:border-r={dataTable.headers[1].length === 0}
					class:even:border-x={dataTable.headers[1].length !== 0}
				>
					{item}
				</th>
			{/each}
		</tr>
		{#each dataTable.data as item, i (i)}
			<tr class="even:bg-[#f5f5f5] hover:bg-[#ebebeb]">
				<td class="border-[#e0e0e0] px-2.5 py-2">{item.item1}</td>

				<td
					class="border-[#e0e0e0] px-2.5 py-2"
					class:border-r={item.item2.length === 0}
					class:border-x={item.item2.length !== 0}
				>
					{item.item2}
				</td>

				<td class="border-[#e0e0e0] px-2.5 py-2">{item.item3}</td>
			</tr>
		{/each}
	</table>
</div>
