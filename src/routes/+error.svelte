<script>
	import { page } from '$app/stores'
</script>

<main class="container flex gap-12 items-center justify-between flex-col md:flex-row mb-12">
	<section class="space-y-8">
		<h3 class="text-primary text-4xl font-medium mt-12 md:mt-0">404 error</h3>
		{$page.error?.message}

		<p>
			Vraag ons alles over telefonie, keuzemenu’s, wachtrijen en toestellen. Weten we namelijk alles
			van. Maar kennelijk zijn we minder goed in het jou laten vinden wat je zoekt. De pagina die je
			namelijk zoekt bestaat niet (meer). Sorry!
		</p>

		<p>
			Chat met ons of bel ons op werkdagen tussen negen en vijf op 088-6789400. Wij beantwoorden dan
			graag alle vragen voor je.
		</p>

		<a
			href="/bestellen"
			class="text-white text-xs md:text-sm font-medium uppercase tracking-wide
			px-4 md:px-8 py-3 md:py-4 flex items-center rounded-full bg-primary w-max"
		>
			<span>Offerte aanvragen of direct bestellen</span>
			<i class="icon-[mdi--arrow-right] w-4 h-4 ml-2 shrink-0" />
		</a>
	</section>
	<section>
		<img src="/error.webp" alt="error" />
	</section>
</main>
