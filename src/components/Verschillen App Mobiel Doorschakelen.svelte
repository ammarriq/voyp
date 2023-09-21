<script>
  import Clickable from '$components/Clickable.svelte'
</script>

<div class="bg-white">
	<section class="container mx-auto px-6 py-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Wat zijn de verschillen</h2>

		<div class="lg:grid grid-cols-3 text-sm leading-7 lg:leading-8">
			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">
						Doorschakelen naar mobiel
					</h3>
					<Clickable>
						<span slot="label">✗ Gebeld worden kost 7,5 ct p.m.</span>
						<span slot="content">
							Je betaat 7,5 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen extra account nodig </span>
						<span slot="content">
							Een doorschakeling naar een of meerdere mobiele nummers is inbegrepen in het
							Voyp-abonnement
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen app nodig </span>
						<span slot="content"> JJe hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen invloed op accu </span>
						<span slot="content">
							Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling
							naar je mobiel geen invloed op je accugebruik.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Niet afhankelijk van internet </span>
						<span slot="content">
							We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking
							van je mobiele provider.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Niet bellen met vast nummer </span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen interne gesprekken </span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen gespreksopname </span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen doorverbinding mogelijk </span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Geen BLF status mogelijk </span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">Voyp Mobiel</h3>
					<Clickable>
						<span slot="label">✓ Gebeld worden is gratis</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Extra account nodig</span>
						<span slot="content">
							Per extra toestel heb je een VoIP-account nodig. Bij Voyp Mobiel is dit inbegrepen
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen app nodig</span>
						<span slot="content"> Je hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Geen invloed op accu</span>
						<span slot="content">
							Omdat er geen extra app hoeft te draaien heeft het instellen van een doorschakeling
							naar je mobiel geen invloed op je accugebruik.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Niet afhankelijk van internet</span>
						<span slot="content">
							We schakelen via het GSM netwerk door. Je bent dus alleen afhankelijk van je dekking
							van je mobiele provider.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Bellen met vast nummer</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Intern bellen mogelijk</span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Gespreksopname mogelijk</span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Doorverbinden mogelijk</span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ BLF status mogelijk</span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
				</div>
			</div>

			<div class="relative group">
				<div
					class="absolute -inset-[0.01rem] bg-gradient-to-r from-cyan-500 to-primary rounded-lg blur
				  opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"
				/>
				<div
					class="relative border px-5 md:px-4 lg:px-6 py-10 md:py-6 lg:py-12 text-start
				 bg-white h-full rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl space-y-2"
				>
					<h3 class="font-semibold text-lg pb-4 lg:pb-3.5 text-center">App op mobiel</h3>
					<Clickable>
						<span slot="label">✓ Gebeld worden is gratis</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Extra account nodig</span>
						<span slot="content">
							Een doorschakeling naar een of meerdere mobiele nummers is inbegrepen in het
							Voyp-abonnement
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ App nodig</span>
						<span slot="content"> Je hoeft geen extra app te installeren. </span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Negatieve invloed op accu</span>
						<span slot="content">
							De app draait op de achtergrond. Afhankelijk van je toestel kan dit een (sterke)
							invloed op je accuduur hebben.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✗ Werkt op mobiel soms slecht over WiFi</span>
						<span slot="content">
							De app functioneert soms slecht over WiFi. Hier kunnen wij geen support op leveren.
							Ons advies is om dan WiFi te deactiveren of gebruik te maken van doorschakeling en/of
							SIM-kaart en/of een vast toestel.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Bellen met vast nummer</span>
						<span slot="content">
							Je betaalt 6,7 cent per minuut en een starttik van 4 cent voor het ontvangen van een
							gesprek. Dit betaal je ook als we doorschakelen naar je mobiel en je mobiel gaat over
							naar de voicemail.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Intern bellen mogelijks</span>
						<span slot="content">
							Je mobiele telefoon is geen onderdeel van het bedrijfsnetwerk. Je kunt dus niet intern
							bellen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Gespreksopname mogelijk</span>
						<span slot="content">
							Omdat het gesprek de server verlaat kunnen we het gesprek niet meer voor je opnemen.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ Doorverbinding mogelijk</span>
						<span slot="content">
							Bij het doorschakelen verlaat het gesprek het Voyp platform. Je kunt dus niet meer
							doorschakelen naar collega's.
						</span>
					</Clickable>
					<Clickable>
						<span slot="label">✓ BLF status mogelijk</span>
						<span slot="content">
							Collega's kunnen met BLF eenvoudig zien of je in gesprek bent of niet.
						</span>
					</Clickable>
				</div>
			</div>
		</div>
	</section>
</div>