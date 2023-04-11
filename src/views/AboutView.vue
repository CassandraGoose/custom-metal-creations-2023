<script>
import HeroLayout from '../components/HeroLayout.vue'

export default {
  components: {
    HeroLayout
  }
}
</script>

<template>
  <HeroLayout>
    <template v-slot:left-content>
      <p>
        Custom Metal Creations produces creative and unique scultpures, homegoods, gifts, and yard
        art primarily utilizing metal as a medium.
      </p>
      <p>
        The artist behind Custom Metal Creations is Terry Lawrenz. Terry has been welding for over
        30 years. He has experience in commercial welding but enjoys being creative with his craft.
        Terry lives in Colorado.
      </p>
      <div class="flex flex-row">
        <a
          class="bg-black hover:bg-grey text-white font-bold rounded px-2 py-2"
          :href="`mailto:${import.meta.env.VITE_EMAIL}`"
          >Contact</a
        >
      </div>
    </template>
    <template v-slot:right-content>
      <img
        class="max-h-max rounded"
        src="src/assets/terry-l.jpg"
        alt="artist terry lawrenz, posing with large metal sculpture"
      />
    </template>
  </HeroLayout>
</template>
