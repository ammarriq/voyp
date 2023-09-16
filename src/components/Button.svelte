<script context="module">
	export const btnClasses =
		'uppercase text-primary text-sm px-6 py-3.5 transitiona-all duration-1000 font-normal rounded-full tracking-wider '
</script>

<script lang="ts">
	let clazz = ''

	export { clazz as class }
</script>

<button class="{btnClasses} {clazz}" on:click>
	<slot />
</button>
