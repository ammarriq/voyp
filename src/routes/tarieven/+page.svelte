<script>
	import Button from '$components/Button.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-20 pb-20 sm:pb-24 grid grid-cols-2 gap-8 justify-between items-center"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overzicht tarieven</h2>

			<p>
				Voor een vaste lage prijs van € 12,- per maand ben je professioneel bereikbaar, of je nu op
				kantoor zit of de hele dag onderweg bent.
			</p>
			<p class="py-5">
				Stop met het betalen voor extra modules zoals openingstijden, keuzemenu’s, meldingen of
				wachtmuziek. Bij ons zit dit inbegrepen in het Voyp abonnement. Dagelijks opzegbaar en
				altijd gratis telefonische support. Bellen zoals het hoort. Welkom bij Voyp.
			</p>
			<p>
				Op deze pagina geven we je inzicht in alle tarieven die we voor onze diensten in rekening
				brengen. Bekijk ook onze <span class="font-semibold underline hover:no-underline"
					>gesprekstarieven.</span
				>
			</p>
		</div>

		<img src="./tarieven/tarieven.png" alt="tarieven" />

		<Button
			class="mt-5 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
		>
			<div class="flex items-center gap-2">
				<span>Offerte aanvragen of direct bestellen</span>
				<span class="icon-[mdi--arrow-right-thin] shrink-0 w-6 h-6" />
			</div>
		</Button>
	</section>
</div>
