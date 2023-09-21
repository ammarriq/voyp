<script>
  import { goto } from '$app/navigation'
  import Button from '$components/Button.svelte'
</script>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Overstappen zonder gedoe</h2>
		<div class="grid md:grid-cols-3 gap-5">
			<div class="flex flex-col items-center">
				<h3 class="text-[1.35rem] font-semibold pb-3">Advies</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					In ons eerste contact nemen wij de tijd voor onze klant. We bespreken uitgebreid de wensen
					en mogelijkheden. We denken graag met je mee over een goede invulling van jullie telefonie
					wensen.
				</p>
				<img
					src="/overstappen/overstappenstap1.webp"
					alt="overstappenstap1"
					class="max-w-[12rem]"
				/>
			</div>

			<div class="flex flex-col items-center">
				<img
					src="/overstappen/overstappenstap2.webp"
					alt="overstappenstap2"
					class="hidden md:block max-w-[12rem]"
				/>
				<h3 class="text-[1.35rem] font-semibold pb-3">Aanvraag</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					Welkom bij Voyp. Het nummerbehoud gaan we voor je aanvragen en aansluitend nemen we nog
					even contact met je op om de inhoudelijke wensen te bespreken en te implementeren op ons
					platform.
				</p>
				<img
					src="/overstappen/overstappenstap2.webp"
					alt="overstappenstap2"
					class="block md:hidden max-w-[12rem]"
				/>
			</div>

			<div class="flex flex-col items-center">
				<h3 class="text-[1.35rem] font-semibold pb-3">Oplevering</h3>
				<p class="md:leading-7 md:text-sm lg:text-base lg:leading-8">
					Met onze naadloze overstapservice merk je eigenlijk weinig van de portering. Op het
					afgesproken porteermoment gaan je nieuwe toestelen over en start ook jij met bellen zonder
					gedoe.
				</p>
				<img
					src="/overstappen/overstappenstap3.webp"
					alt="overstappenstap3"
					class="max-w-[12rem]"
				/>
			</div>
		</div>
		<Button
			on:click={() => goto('/bestellen')}
			class="bg-primary mt-5 md:mt-10 text-white hover:bg-white hover:text-primary border 
			border-primary"
		>
			OFFERTE AANVRAGEN OF DIRECT BESTELLEN
		</Button>
	</section>
</div>