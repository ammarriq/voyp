<script>
	import Button from '$components/Button.svelte';
	import Carousel from '$components/Carousel.svelte';
</script>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-14 lg:pt-20 pb-8 md:pb-24 md:flex gap-3 lg:gap-12
    justify-between items-center text-base md:text-sm leading-8 md:leading-7 lg:text-base
    lg:leading-8 text-center md:text-start"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-9">Overstappen zonder gedoe</h2>

			<p class="pb-5">
				Bij Voyp houden we van simpel én toegankelijk. Verborgen kosten of wurgcontracten houden we
				niet van. Flexibele en dagelijks aanpasbare telefonie zonder meteen een factuur te ontvangen
				als je ondersteuning nodig hebt en wél meteen geholpen worden zonder uren in de rij te
				hoeven staan.
			</p>
			<p>
				In 3 stappen bel je al via Voyp. We leggen je graag uit hoe wij zorgen voor een naadloze
				overstap. Bellen zoals het hoort. Welkom bij Voyp.
			</p>

			<Button
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.65rem] md:text-[0.73rem] lg:text-sm">
					<span class="shrink-0">Direct berekenen of overstappen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-6 h-6" />
				</div>
			</Button>
		</div>

		<img
			src="/hero/vijf-zekerheden.png"
			alt="Vijf-zekerheden"
			class="mx-auto max-w-xs lg:max-w-[28rem] py-14"
		/>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 md:pt-24 pb-20 sm:pb-24 md:flex lg:gap-10 items-center text-center
		md:text-start md:text-sm md:leading-7 lg:text-base lg:leading-8"
	>
		<img
			src="/overstappen/overstappenstap1.webp"
			alt="overstappenstap1"
			class="w-60 h-60 md:h-[16rem] mx-auto"
		/>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Advies</h2>
			<p class="pb-5">
				Tijdens ons eerste contact nemen wij alle tijd voor je. Niet alleen om een passende offerte
				op te stellen maar juist ook omdat we graag met je meedenken over de perfecte invulling van
				je telefonie wensen. Zo komt het regelmatig voor dat we onze klanten kennis laten maken met
				functies waar ze nog nooit van hebben gehoord. Met een frisse en kritische blik kijken we
				daarom ook graag naar jouw huidige situatie om je telefonie te optimaliseren.
			</p>
			<p>
				Een aantal vragen komt hier altijd naar voren. Bijvoorbeeld om hoeveel telefoonnummers het
				gaat en of dat bestaande nummers zijn of dat je op zoek bent naar nieuwe nummers. Ook vragen
				we hoe je wil je gaan bellen. Wil je <a href="/" class="underline">nieuwe toestellen</a>
				aanschaffen, heb je al VoIP-toestellen of wil je gebruik maken van
				<a href="/" class="underline">Voyp Mobiel</a>? Ook kijken we of je gebruik wilt maken van
				bijvoorbeeld een keuzemenu of wachtrij. In een paar minuten kunnen wij zo het juiste advies
				geven en de ideale offerte aan je uitbrengen.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section
		class="container mx-auto px-6 pt-24 pb-16 md:pb-24 md:flex gap-8 lg:gap-12 items-center text-center
		md:text-start md:text-sm md:leading-7 lg:text-base lg:leading-8"
	>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Aanvraag</h2>
			<p class="pb-5">
				Na het tekenen van de offerte gaan we meteen voor je aan de slag. Welkom bij Voyp! De
				portering van eventueel bestaande nummers vragen we voor je aan na ontvangst van een factuur
				van de huidige aanbieder.
			</p>
			<p>
				Na de goedkeuring van de aanvraag nemen we contact met je op om de datum van overstap te
				bevestigen en bespreken we de inhoudelijke wensen met betrekking tot de configuratie. Denk
				hierbij aan vragen als welke meldingen wil je laten afspelen, welke toestellen moeten
				overgaan als je wordt gebeld. Ook kun je vast nadenken of je een voicemail actief wilt
				hebben en welke openingstijden je wilt gaan gebruiken.
			</p>
		</div>
		<img
			src="/overstappen/overstappenstap2.webp"
			alt="overstappenstap2"
			class="w-60 h-60 md:h-[16rem] mx-auto"
		/>
	</section>
</div>

<div class="bg-secondary">
	<section
		class="container mx-auto px-6 pt-16 md:pt-24 pb-20 sm:pb-24 md:flex lg:gap-10 items-center text-center
		md:text-start md:text-sm md:leading-7 lg:text-base lg:leading-8"
	>
		<img
			src="/overstappen/overstappenstap3.webp"
			alt="overstappenstap3"
			class="w-60 h-60 md:h-[16rem] mx-auto"
		/>
		<div>
			<h2 class="text-3xl sm:text-4xl font-medium pb-8">Oplevering</h2>
			<p class="pb-5">
				De overstap nadert. Alles staat inmiddels voor je klaar in onze systemen zodat je naadloos
				over gaat. Eventueel configureren we je huidige toestellen nog voor je. Toestellen die je
				bij ons hebt besteld zijn ruim op tijd op locatie en zijn al te gebruiken voor uitgaand
				verkeer. Na de overstap zul je merken dat de nieuwe toestellen over gaan en kan de oude
				hardware opgeborgen worden.
			</p>
			<p>
				Na de goedkeuring van de portering kunnen eventuele diensten die niet overgaan van de oude
				aanbieder opgezegd worden. Toch nog iets aanpassen? We helpen je graag de puntjes op de i te
				zetten. Bellen zonder gedoe, zoals het hoort.
			</p>
		</div>
	</section>
</div>

<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-10">Wat vinden onze klanten</h2>
		<div class="flex items-center justify-center gap-3">
			<span>9.4</span>
			<span class="flex">
				{#each Array(4) as _, i (i)}
					<span class="icon-[mdi--star] text-yellow-400 w-7 h-7 space-x-0" />
				{/each}
				<span class="icon-[mdi--star-half] text-yellow-400 w-7 h-7" />
			</span>

			<span>65 reviews</span>
			<span class="icon-[mdi--comment-multiple-outline] text-cyan-500 w-6 h-6" />
		</div>

		<p class="py-5">
			Uiteraard vertellen wij je graag dat wij het goed doen. Dat het slim is om te gaan bellen via
			Voyp.<br /> En dat je er goed aan doet om zo snel mogelijk over te stappen. Iedereen wil immers
			bellen zonder gedoe.
		</p>
		<p class="pb-3">
			Maar misschien ben je nog niet helemaal overtuigd. Onze klanten zijn dat gelukkig wel. Lees
			hier waarom!
		</p>

		<div class="border border-primary" />

		<div class="pt-5">
			<Carousel />
		</div>
	</section>
</div>

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
