<script lang="ts">
	let clazz = '';

	export { clazz as class };
</script>

<button
	class="uppercase text-primary text-sm px-6 py-3.5 transitiona-all duration-1000 font-medium rounded-full {clazz}"
	on:click
>
	<span> <slot /></span>
</button>
