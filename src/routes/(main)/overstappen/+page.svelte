<script>
	import { goto } from '$app/navigation'
	import Button from '$components/Button.svelte'
	import WatVindenOnzeKlanten from '$components/Wat vinden onze klanten.svelte'

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
				on:click={() => goto('/bestellen')}
				class="mt-8 md:mt-10 border border-primary
      text-white bg-primary hover:text-primary hover:bg-white"
			>
				<div class="flex items-center gap-1 text-[0.625rem] md:text-[0.73rem] lg:text-sm">
					<span class="shrink-0">Direct berekenen of overstappen</span>
					<span class="icon-[mdi--arrow-right-thin] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
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
	<WatVindenOnzeKlanten />
</div>

