<script setup>
import { RouterLink, RouterView } from 'vue-router';
import InnerFooter from './components/InnterFooter.vue';
</script>

<template>
  <div class="text-xl bg-background-pattern bg-fixed flex place-content-center">
    <div class="bg-white rounded-md m-8">
      <header>
        <nav class="flex mx-20 my-16 place-content-between">
          <h1><img class="max-h-12" src="./assets/small-cmc.png" alt="letters CMC in stylized font"></h1>
          <div class="flex min-w-fit">
            <RouterLink class="flex items-center" to="/">Home</RouterLink>
            <RouterLink class="ml-8 flex items-center" to="/about">About</RouterLink>
          </div>
        </nav>
      </header>
      <RouterView class="mx-20"/>
      <InnerFooter />
    </div>
  </div>
</template>

<style scoped>
</style>


<!-- TODO LIST
- make various images load for various sizes
- make mobile friendly
- add favicons
- link hover styles
- button hober styles
- stretch: click image to see larger and see details
- make background image correct colors 
- format and prettify everything 
- pop repetetive styles into rule sets or whatever tailwind calls them-->
