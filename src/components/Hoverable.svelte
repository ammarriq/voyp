<script lang="ts">
	let clazz = '';

	export { clazz as class };
	export let label = '';
</script>

<div class="relative text-sm leading-6 group">
	<span class="cursor-pointer inline {clazz}">{label}</span>
	<span
		class="absolute hidden z-20 group-hover:block bg-secondary border rounded-md w-full drop-shadow-lg
		px-3 py-2 text-[0.818rem]"
	>
		<slot name="content" />
	</span>
</div>
