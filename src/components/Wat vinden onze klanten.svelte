<script>
  import Carousel from '$components/Carousel.svelte'
</script>


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