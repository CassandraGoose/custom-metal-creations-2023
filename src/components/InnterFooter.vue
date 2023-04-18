<script>
import facebookIcon from './icons/facebook.png';
import emailIcon from './icons/email.png';

export default {
  data() {
    return {
      facebookIcon,
      emailIcon,
      email: import.meta.env.VITE_EMAIL
    };
  }
};
</script>
<template>
  <footer
    class="bg-red h-96 flex sm:flex-row flex-col place-content-between sm:p-20 p-8 rounded-b-md"
  >
    <div class="flex justify-start max-h-12">
      <a href="https://www.facebook.com/CMCMETALART/" target="_blank"
        ><img :src="facebookIcon" height="64" width="64" alt="email Custom Metal Creations"
      /></a>
      <a :href="`mailto:${email}`"
        ><img
          class="ml-4"
          :src="emailIcon"
          height="64"
          width="64"
          alt="visit Custom Metal Creations on Facebook"
      /></a>
    </div>
    <div>
      <img
        class="max-h-28"
        height="50"
        width="100"
        src="../assets/small-cmc.png"
        alt="letters CMC in stylized font"
      />
    </div>
    <div class="flex flex-col text-white">
      <h4 class="font-bold">Navigate</h4>
      <p>-</p>
      <RouterLink class="hover:text-grey" to="/">Home</RouterLink>
      <RouterLink class="hover:text-grey" to="/about">About CMC</RouterLink>
    </div>
  </footer>
</template>
