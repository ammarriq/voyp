<script lang="ts">
	let clazz = '';

	export { clazz as class };
	export let label = '';
</script>

<div class="inline relative text-sm leading-6 group">
	<span class="cursor-pointer {clazz}">{label}</span>
	<span
		class="w-[17rem] absolute hidden z-20 group-hover:block bg-secondary border rounded-md drop-shadow-lg
		px-3 py-2 text-[0.818rem]"
	>
		<slot name="content" />
	</span>
</div>
