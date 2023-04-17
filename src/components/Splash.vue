<script>
import { RouterLink } from 'vue-router';
import HeroLayout from './HeroLayout.vue';
export default {
  components: {
    HeroLayout
  }
};
</script>

<template>
  <HeroLayout>
    <template v-slot:left-content>
      <div>
        <h2 class="sm:text-6xl text-3xl mb-4 mt-8 md:mt-0">Custom Metal Creations</h2>
        <h3 class="sm:text-3xl text-xl mb-4">
          Scrap metal sculptures by artist and welder Terry Lawrenz
        </h3>
      </div>
      <div class="flex flex-row">
        <RouterLink
          class="bg-black hover:bg-mid-red text-white font-bold rounded-md px-2 py-2 text-xl"
          to="/about"
          >Learn More About CMC</RouterLink
        >
      </div>
    </template>
    <template v-slot:right-content>
      <div class="flex w-[100%] lg:justify-end justify-center">
        <img
          class="max-w-[60vmin]"
          src="src/assets/mock-logo-small.webp"
          alt="logo for custom metal creations featuring vector art welder"
        />
      </div>
    </template>
  </HeroLayout>
</template>
