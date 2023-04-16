<script>
// import logo
import { RouterLink } from 'vue-router'
import HeroLayout from './HeroLayout.vue';
export default {
  components: {
    HeroLayout,
  }
}
</script>

<template>
  <HeroLayout>
    <template v-slot:left-content>
      <div>
        <h1 class="text-6xl">Custom Metal Creations</h1>
        <p class="text-3xl">Scrap metal sculptures by artist and welder Terry Lawrenz</p>
      </div>
      <div class="flex flex-row">
        <RouterLink class="bg-black hover:bg-grey text-white font-bold rounded-md px-2 py-2 text-xl" to="/about">Learn More About CMC</RouterLink>
      </div>
    </template>
    <template v-slot:right-content>
      <img class="object-scale-down" src="src/assets/mock-logo.png" loading="lazy" alt="logo for custom metal creations featuring vector art welder">
    </template>
  </HeroLayout>

</template>