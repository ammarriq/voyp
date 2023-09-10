<script>
	import Brand from '$components/Brand.svelte';
</script>

<section class="relative overflow-x-hidden container mx-auto pt-16 md:pt-24 pb-24 mt-6">
	<Brand class="w-80 md:w-[33rem] lg:w-[42rem] mx-auto opacity-75" />
	<div
		class="-z-10 px-12 absolute bottom-0 mt-[100px] ml-[-55%] sm:ml-[-54%] md:ml-[-51.8%] h-[50rem]
    w-[200%] rounded-b-[100%] bg-gradient-to-r from-[#A6B1CB] from-10% via-[#B5BFD5] via-30%
    to-[#fff] to-90%"
	/>
</section>

<section
	class="container mx-auto px-6 pt-16 md:pt-24 pb-14 md:pb-24 flex flex-col-reverse lg:flex-row
	gap-10 items-center lg:items-start"
>
	<div class="space-y-6">
		<h3 class="text-lg font-medium pb-2">CONTACT DETAILS</h3>
		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--map-marker] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">BlackGATE B.V.</p>
				<p>Regulusweg 11</p>
				<p>2516 AC Den Haag</p>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--phone-outline] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">Telefoon:</p>
				<p>088 6789 400</p>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--clock-outline] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">Openingstijden:</p>
				<p>Maandag – Vrijdag: 09:00 – 17:00</p>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--email-outline] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">E-mail:</p>
				<a href="mailto:contact@voyp.nl" class="underline hover:no-underline">contact@voyp.nl</a>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--currency-eur] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">Bank:</p>
				<p>NL92INGB0005118121</p>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--file] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">KvK:</p>
				<p>60401133</p>
			</span>
		</div>

		<div class="flex gap-4 items-center">
			<span class="w-20 h-20 flex items-center justify-center bg-primary rounded-full shrink-0">
				<span class="icon-[mdi--circle-outline] w-10 h-10 text-white" />
			</span>
			<span class="text-sm leading-7">
				<p class="font-medium text-base">BTW:</p>
				<p>NL853894346B01</p>
			</span>
		</div>
	</div>
	<div class="">
		<p class="pb-10">
			Voyp is een label van BlackGATE B.V. en is gespecialiseerd in VoIP-telefonie oplossingen. Wij
			adviseren onze klanten over hardware en configureren voor klanten hun telefoniewensen. Meer
			weten over Voyp en onze diensten? Neem dan contact met ons. Wij zorgen op werkdagen van negen
			tot vijf graag dat ook jij gaat bellen zonder gedoe.
		</p>

		<h2 class="text-3xl font-medium pb-7">Neem contact met ons op</h2>

		<div class="md:grid grid-cols-2 gap-9 text-sm leading-7">
			<div>
				<h4 class="text-base font-medium pb-3">Ondersteuning</h4>
				<p>Klant van Voyp en je hebt vragen of hulp nodig?</p>

				<div class="flex gap-2 items-center pt-8">
					<span class="icon-[mdi--phone] w-4 h-4" />
					<span> 088 6789 401 </span>
				</div>

				<div class="flex gap-2 items-center pb-9 pt-1">
					<span class="icon-[mdi--email] w-4 h-4" />
					<span>support@voyp.nl</span>
				</div>

				<div class="border-t border-primary" />

				<h4 class="text-base font-medium pb-3 pt-9">Advies</h4>
				<p>Nog geen klant en wil je advies over Voyp?</p>

				<div class="flex gap-2 items-center pt-8">
					<span class="icon-[mdi--phone] w-4 h-4" />
					<span> 088 6789 402 </span>
				</div>

				<div class="flex gap-2 items-center pb-9 pt-1">
					<span class="icon-[mdi--email] w-4 h-4" />
					<span>support@voyp.nl</span>
				</div>
			</div>

			<div>
				<h4 class="text-base font-medium pb-3">Klantenservice</h4>

				<p class="pb-5">
					Vragen beantwoorden wij graag. Dit kan telefonisch, per mail, chat of social media. Of
					laat via de chat even je telefoonnummer achter – wij bellen je dan zo snel mogelijk terug.
					Wij zijn op werkdagen bereikbaar van negen tot vijf.
				</p>
				<p>
					Chat offline? Gebruik de knop dan om eenvoudig je vraag te stellen. Wij nemen dan de
					volgende werkdag contact op.
				</p>

				<img
					src="/certainties/persoonlijke-service.png"
					alt="persoonlijke-service"
					class="w-72 mx-auto pt-7 pb-2"
				/>
			</div>
		</div>
	</div>
</section>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 pb-20 sm:pb-24 text-sm leading-8 md:grid grid-cols-3 gap-10
     items-start"
	>
		<div class="col-span-2">
			<p class="pb-5">
				Bij Voyp houden we van simpel én toegankelijk. We houden niet van verborgen kosten. Niet
				zoals bij andere aanbieders maandelijks betalen voor functionaliteiten zoals openingstijden
				en een keuzemenu, niet meteen een factuur wanneer je ondersteuning nodig hebt en wél meteen
				geholpen worden zonder uren in de wachtrij te staan.
			</p>
			<p>
				Vanaf € 12,- per maand ben je flexibel en betrouwbaar telefonisch bereikbaar en ben je
				verzekerd van een professionele uitstraling en uitstekende persoonlijke service. Onze
				diensten zijn uiteraard dagelijks opzegbaar. <span class="font-semibold">Meer weten?</span> Chat,
				mail of bel met ons! Wij staan je op werkdagen tussen negen en vijf graag te woord.
			</p>
		</div>

		<div class="col-start-3 col-span-1 pt-8 md:pt-0">
			<h3 class="font-semibold pb-5 text-base">Laatste Voyp updates</h3>
			<div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Voyp gaat samen met BlackGATE</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/">De eerste indruk</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Telefonische drukte opvangen</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Lokaal telefoonnummer vergroot je markt</a>
				</div>
				<div class="flex items-center gap-2">
					<span class="icon-[mdi--check] shrink-0 w-4 h-4" />
					<a href="/" class="line-clamp-1">Hoe richt ik mijn telefonie in</a>
				</div>
			</div>
		</div>
	</section>
</div>
