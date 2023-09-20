<script>
	import Brand from '$components/Brand.svelte'
	import Accordion2 from '$components/Accordion.svelte'
	import elements from '$lib/data/veelgestelde-vragen.json'
</script>

<section
	class="relative overflow-x-hidden container mx-auto text-center pt-16 md:pt-24 pb-14 md:pb-24 mt-6"
>
	<Brand class="w-80 md:w-[33rem] lg:w-[42rem] mx-auto" />
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem]
    w-[200%] rounded-b-[100%] bg-gradient-to-r from-[#A6B1CB] from-10% via-[#B5BFD5] via-30%
    to-[#fff] to-90%"
	/>
</section>

<div class="bg-white">
	<section
		class="container mx-auto text-center px-6 pt-16 md:pt-24 pb-14 md:pb-24 grid lg:grid-cols-2
		gap-y-12 sm:gap-y-16 items-center justify-center lg:justify-between"
	>
		<div>
			<h3 class="text-lg font-semibold pb-8">Klant worden</h3>
			<Accordion2 elements={elements[0]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">App op mobiel</h3>
			<Accordion2 elements={elements[1]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Bestaande klanten</h3>
			<Accordion2 elements={elements[2]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Functies</h3>
			<Accordion2 elements={elements[3]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Administratie</h3>
			<Accordion2 elements={elements[4]} class="bg-primary text-secondary hover:bg-primary/90" />
		</div>
		<div>
			<h3 class="text-lg font-semibold pb-8">Opzeggen</h3>
			<Accordion2 elements={elements[5]} class="bg-secondary text-primary hover:bg-secondary/75" />
		</div>
	</section>
</div>
