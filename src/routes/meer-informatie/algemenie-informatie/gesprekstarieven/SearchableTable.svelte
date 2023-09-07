<script lang="ts">
	import rates from '$lib/data/rates.json'
	import Table from '$components/Table.svelte'

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
	<Table {data} />
</div>
