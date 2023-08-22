<script lang="ts">
	let currentCard = 0;
	let cardsPerPage = [3, 2, 1];

	function nextCard() {
		currentCard = (currentCard + 1) % (cards.length - cardsPerPage[0] + 1);
	}

	function prevCard() {
		currentCard =
			(currentCard - 1 + cards.length - cardsPerPage[0] + 1) % (cards.length - cardsPerPage[0] + 1);
	}

	let cards: Array<{ name: string; desc: string; content: string }> = [
		{
			name: 'Rick Jelier',
			desc: 'Holland Shielding Systems B.V.',
			content:
				'Voyp is een bedrijf met hele fijne dienstverlening, ze denken goed mee waar ze kunnen en zijn vriendelijk. Ook de prijs waarvoor je alles kunt krijgen is voordelig tot zeer laag. Met maximaal 1 storing over de afgelopen 2 jaar mag ik zeggen dat wij zeer tevreden zijn. Hoe wij Voyp omschrijven in 1 woord is ontzorgend!'
		},
		{
			name: 'Michel Sabella',
			desc: 'Brauer Groep Belfeld',
			content:
				'Zeer behulpzaam bij het opzetten van je VOIP plan bij overzetten van analoge telefonie naar VOIP. Goede en kundige technische knowhow en hulp om speciale wensen in gebruik te kunnen nemen! Zeer snel in afhandeling vragen. Tot nu zeeeeer tevreden met Voyp! Zeker een aanrader mocht je naar een VOIP aanbieder zoeken.'
		},
		{
			name: 'J.G. van der Wal',
			desc: 'TSS Group',
			content:
				'Met een complexe structuur met bedrijven in Engeland en New York tot een overzichtelijke totaal oplossing gekomen. Vanuit de diverse lokaties kunnen we op een eenvoudige manier beheren waar welk gesprek binnenkomt. Een snelle response van de helpdesk maakt het verder prettig om als er een probleem is het snel op te lossen.'
		},
		{
			name: 'P. van der Mijn',
			desc: 'Alhra',
			content:
				'De services is jullie grootste kracht daar zijn wij dan ook meer dan tevreden over. De sporadische storingen, welke overigens minimaal zijn, lossen jullie adequaat op met een terug melding naar ons. Dat stellen wij zeer op prijs.'
		},
		{
			name: 'Ton van Rijswijk',
			desc: 'Adviesbureau COMTON',
			content:
				'Inmiddels nu bijna 2 jaar cliënt bij Voyp. Onze ervaring is dat snel en adequaat gereageerd wordt, niets teveel is en dat medewerkers gedreven zijn om je vragen/klacht/opmerking op korte termijn beantwoorden en oplossen. Afspraken worden netjes en correct nagekomen en de persoonlijke contacten zijn heel prettig.'
		},
		{
			name: 'Wesley Hoeve',
			desc: 'TWM Makelaardij',
			content:
				'Fantastische service, even bellen en ze staan voor je klaar. De werknemers van Voyp nemen de tijd voor je en leggen je alles duidelijk uit, ook over hoe ze werken. Wij hebben onze vaste contactpersoon en hij is altijd erg behulpzaam. Veranderingen worden per direct doorgevoerd en een stapje extra vanuit hun kant is standaard. Topbedrijf.'
		},
		{
			name: 'Martijn',
			desc: 'FlyCatcher',
			content:
				'Wij zijn overgestapt met ISDN naar Voyp. Bijzonder goede support. Altijd medewerkers aan de lijn met verstand van zaken.De telefoons konden we gewoon inprikken en het werkte. Daarna hebben ze alle instellingen tot in de kleinste details op maat voor ons geconfigureerd.Niets anders dan lof voor deze partij!'
		},
		{
			name: 'Jeroen van der Hek',
			desc: 'Brooklands Horeca BV',
			content:
				'Uitstekende service en professionele aanpak kenmerkt het team van VOYP. Gecombineerd met een hoge betrouwbaarheid en scherpe tarieven maakt het de perfecte partner voor onze (telefonische-) bereikbaarheid!'
		},
		{
			name: 'Bram Koster',
			desc: 'BladeWP',
			content:
				'Top provider! Overgestapt van Voys naar Voyp vanwege hun pakketten. Nu heb ik standaard professionele ingesproken meldingen samen met een keuzemenu. Dit geeft mij meer vrijheid voor veel minder geld. Een besparing, inclusief eenmalige kosten, van ruim 300 euro dit jaar. Ook de gesprekskosten per minuut liggen lager.'
		}
	];
</script>

<div class="relative hidden lg:block">
	<div class="grid gap-6 grid-cols-3 mt-8">
		{#each cards.slice(currentCard, currentCard + cardsPerPage[0]) as card, i (i)}
			<div class="flex flex-col justify-between">
				<div
					class="flex grow items-center bg-[#284182] text-sm leading-8 font-normal text-white
           p-4 py-6 rounded-3xl mb-8"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex gap-6 justify-center mt-10">
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={prevCard}
		>
			<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
		</button>
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={nextCard}
		>
			<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
		</button>
	</div>
</div>

<div class="relative hidden md:block lg:hidden">
	<div class="grid gap-10 grid-cols-2">
		{#each cards.slice(currentCard, currentCard + cardsPerPage[1]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex grow items-center bg-[#284182] text-sm leading-8 font-normal text-white
           p-4 py-6 rounded-3xl mb-8"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex gap-6 justify-center mt-10">
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={prevCard}
		>
			<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
		</button>
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={nextCard}
		>
			<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
		</button>
	</div>
</div>

<div class="relative block md:hidden">
	<div class="grid gap-6 grid-cols-1 sm:px-10">
		{#each cards.slice(currentCard, currentCard + cardsPerPage[2]) as card, i (i)}
			<div class="flex flex-col justify-between mt-8">
				<div
					class="flex grow items-center bg-[#284182] text-white text-sm leading-8 font-normal
           px-4 py-6 rounded-3xl mb-8 sm:px-10"
				>
					<p class="">{card.content}</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-2">{card.name}</h3>
					<h4 class="text-sm">{card.desc}</h4>
				</div>
			</div>
		{/each}
	</div>
	<div class="flex gap-6 justify-center mt-10">
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={prevCard}
		>
			<span class="icon-[mdi--chevron-left] w-7 h-7 text-primary" />
		</button>
		<button
			class=" px-2 py-1 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
			on:click={nextCard}
		>
			<span class="icon-[mdi--chevron-right] w-7 h-7 text-primary" />
		</button>
	</div>
</div>
