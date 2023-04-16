<script>
import { RouterLink } from 'vue-router';

import facebookIcon from './icons/facebook.png';
import emailIcon from './icons/email.png';

export default {
  data() {
    return {
      facebookIcon,
      emailIcon,
      email: import.meta.env.VITE_EMAIL,
    }
  }
}
</script>
<template>
  <footer class="bg-red h-96 flex place-content-between p-20 rounded-b-md">
    <div class="flex justify-start max-h-12">
      <a href="https://www.facebook.com/CMCMETALART/" target="_blank"><img :src="facebookIcon" class="max-h-12" alt="email Custom Metal Creations"/></a>
      <a href="`mailto:${email}`"><img class="ml-4 max-h-12" :src="emailIcon" alt="visit Custom Metal Creations on Facebook"/></a>
    </div>
    <div>
      <img class="max-h-28" src="../assets/small-cmc.png" alt="letters CMC in stylized font">
    </div>
    <div class="flex flex-col text-white">
      <h3 class="font-bold">Navigate</h3>
      <p>-</p>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About CMC</RouterLink>
    </div>
  </footer>
</template>