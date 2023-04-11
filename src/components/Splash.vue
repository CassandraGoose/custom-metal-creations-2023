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
      <h1>Custom Metal Creations</h1>
      <p>scrap metal sculptures by artist and welder Terry Lawrenz</p>
      <div class="flex flex-row ">
        <RouterLink class="bg-black hover:bg-grey text-white font-bold rounded px-2 py-2" to="/about">About</RouterLink>
        <button class="bg-black hover:bg-grey text-white font-bold rounded px-2 py-2">Facebook</button>
      </div>
    </template>
    <template v-slot:right-content>
      <img class="max-h-96" src="src/assets/test-logo.png" alt="logo for custom metal creations featuring vector art welder">
    </template>
  </HeroLayout>

</template>