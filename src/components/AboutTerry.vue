<script>
import HeroLayout from '../components/HeroLayout.vue';

export default {
  components: {
    HeroLayout
  }
};
</script>

<template>
  <div class="flex items-center justify-center sm:mb-16 mb-8">
    <h2 class="sm:text-4xl text-2xl">About Custom Metal Creations</h2>
  </div>
  <HeroLayout>
    <template v-slot:left-content>
      <div>
        <p class="sm:p-16 p-8 sm:text-3xl text-xl">
          Custom Metal Creations produces creative and unique scultpures, homegoods, gifts, and yard
          art primarily utilizing metal as a medium.
        </p>
      </div>
    </template>
    <template v-slot:right-content>
      <img
        class="max-w-[50%] rounded-md"
        width="608"
        height="914"
        src="../assets/aboutsection.webp"
        alt="artist Terry Lawrenz welding"
      />
    </template>
  </HeroLayout>
  <HeroLayout>
    <template v-slot:left-content>
      <div class="flex justify-center">
        <img
          class="max-w-[50%] rounded-md"
          src="../assets/terry-l.webp"
          width="543"
          height="627"
          alt="artist terry lawrenz, posing with large metal sculpture"
        />
      </div>
    </template>
    <template v-slot:right-content>
      <p class="sm:p-16 p-8 sm:text-3xl text-xl">
        The artist behind Custom Metal Creations is Terry Lawrenz. Terry has been welding for over
        30 years. He has experience in commercial welding but enjoys being creative with his craft.
        Terry lives in Colorado.
      </p>
    </template>
  </HeroLayout>
</template>
