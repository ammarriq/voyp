<script>
	import Link from '$components/Link.svelte'
</script>
<div class="bg-white">
	<section class="container mx-auto px-6 pt-24 pb-20 sm:pb-24 text-center">
		<h2 class="text-3xl sm:text-4xl font-medium pb-16">Een greep uit onze tevreden klanten</h2>

		<div class="grid gap-4 sm:gap-y-4 sm:gap-x-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<Link href="https://www.vankleeftechniek.nl/">
				<img slot="trigger" src="logos/vankleeftechniek.webp" alt="vankleeftechniek" />
				<p>Van Kleef Techniek</p>
			</Link>
			<Link href="https://www.econe.nl/">
				<img slot="trigger" src="logos/econe.webp" alt="econe" />
				<p>Econe</p>
			</Link>
			<Link href="https://www.renefriso.nl/">
				<img slot="trigger" src="logos/renefriso.webp" alt="renefriso" />
				<p>René Friso</p>
			</Link>
			<Link href="https://www.raket.online/">
				<img slot="trigger" src="logos/raket.webp" alt="raket" />
				<p>Raket</p>
			</Link>
			<Link href="https://www.toprow.com/">
				<img slot="trigger" src="logos/toprow.webp" alt="toprow" />
				<p>Toprow</p>
			</Link>
			<Link href="https://www.viwecom.nl/">
				<img slot="trigger" src="logos/viwecom.webp" alt="viwecom" />
				<p>Viwecom</p>
			</Link>
			<Link href="https://www.schimmel-tdi.nl/">
				<img slot="trigger" src="logos/schimmeltechniek.webp" alt="schimmeltechniek" />
				<p>Schimmel Techniek</p>
			</Link>
			<Link href="https://www.arbec.nl/">
				<img slot="trigger" src="logos/arbec.webp" alt="arbec" />
				<p>Arbec</p>
			</Link>
			<Link href="https://www.heemlanden.nl/">
				<img slot="trigger" src="logos/collegedeheemlanden.webp" alt="collegedeheemlanden" />
				<p>College de Heemlanden</p>
			</Link>
			<Link href="https://www.eldecollege.nl/">
				<img slot="trigger" src="logos/eldecollege.webp" alt="eldecollege" />
				<p>Elde</p>
			</Link>
		</div>
	</section>
</div>
