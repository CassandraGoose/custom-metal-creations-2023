<script>
import InnerFooter from './components/InnterFooter.vue';
import smallLogo from './assets/small-cmc.png';

export default {
  data() {
    return {
      smallLogo
    };
  },
  components: {
    InnerFooter
  }
};
</script>

<template>
  <div
    class="md:text-xl sm:bg-background-pattern sm:bg-fixed flex place-content-center sm:bg-repeat"
  >
    <div class="bg-white rounded-md sm:my-[5%] sm:w-[90%] drop-shadow-lg">
      <header>
        <nav class="flex sm:mx-20 sm:my-16 mx-8 my-6 place-content-between">
          <h1>
            <img
              class="sm:max-h-12 max-h-8"
              :src="smallLogo"
              height="50"
              width="100"
              alt="letters CMC in stylized font"
            />
          </h1>
          <div class="flex">
            <RouterLink class="flex items-center hover:text-mid-red" to="/">Home</RouterLink>
            <RouterLink class="ml-8 flex items-center hover:text-mid-red" to="/about"
              >About</RouterLink
            >
          </div>
        </nav>
      </header>
      <RouterView class="sm:mx-20 mx-10" />
      <InnerFooter />
    </div>
  </div>
</template>
