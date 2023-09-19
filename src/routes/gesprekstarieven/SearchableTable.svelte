<script lang="ts">
	import Toggle from '$components/Toggle.svelte'
	import rates from '$lib/data/rates.json'

	let land: string
	let prefix: string

	$: data = rates.filter((r) => {
		const isLand = land ? r.land.toLowerCase().includes(land.toLowerCase()) : true
		const isPrefix = prefix ? r.prefix.toLowerCase().includes(prefix.toLowerCase()) : true

		return isLand && isPrefix
	})
</script>

<div class="max-w-2xl mx-auto text-left space-y-12">
	<div class="flex flex-col sm:flex-row gap-6">
		<fieldset class="flex flex-col gap-1">
			<label for="land" class="leading-none font-extrabold text-primary text-sm">Land:</label>
			<input
				id="land"
				type="text"
				class="text-sm py-2.5 border-b focus:outline-none focus:border-slate-500"
				placeholder="Land"
				bind:value={land}
			/>
		</fieldset>
		<fieldset class="flex flex-col gap-1">
			<label for="prefix" class="leading-none font-extrabold text-primary text-sm">Prefix:</label>
			<input
				id="prefix"
				type="text"
				class="text-sm py-2.5 border-b focus:outline-none focus:border-slate-500"
				placeholder="Prefix"
				bind:value={prefix}
			/>
		</fieldset>
	</div>

	<table
		class="hidden md:table w-full text-sm text-start divide-y
		divide-[#e0e0e0] whitespace-nowrap border"
	>
		<thead>
			<tr>
				<th class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize"> Land </th>
				<th class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize"> Prefix </th>
				<th class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize"> Minuut </th>
			</tr>
		</thead>
		<tbody>
			{#each data as row, i (i)}
				<tr class="even:bg-gray-200 hover:bg-[#ebebeb]">
					<td class="border-[#e0e0e0] px-2.5 py-2">{row.land}</td>
					<td class="border-[#e0e0e0] px-2.5 py-2">{row.prefix}</td>
					<td class="border-[#e0e0e0] px-2.5 py-2">{row.minuut}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<table
		class="md:hidden w-full text-sm text-start divide-y
		divide-[#e0e0e0] whitespace-nowrap border"
	>
		<thead>
			<tr>
				<th class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize"> Land </th>
				<th class="border-b-2 border-gray-200 px-2.5 py-3 text-start capitalize w-24"> Prefix </th>
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
							{row.land}
						</td>
						<td class="relative px-2.5 py-3">
							{row.prefix}
						</td>
					</tr>

					<tr class="px-2.5 py-3">
						<td class="relative px-2.5 py-3">
							<span class="text-primary font-semibold"> Per minuu: </span>
							{row.minuut}
						</td>
						<td />
					</tr>
				</Toggle>
			{/each}
		</tbody>
	</table>
</div>
