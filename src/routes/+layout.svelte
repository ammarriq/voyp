<script>
	import Header from '$layouts/Header.svelte'
	import Footer from '$layouts/Footer.svelte'
	import '../app.css'
</script>

<Header />

<main class="pt-20 lg:pt-[6.5rem]">
	<slot />
</main>

<Footer />
