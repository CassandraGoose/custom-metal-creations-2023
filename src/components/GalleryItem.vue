<script>
  export default {
    props: {
      title: 'string',
      url: 'string',
      materials: 'string',
    },
    data() {
      return {
        loading: true,
        observer: null,
        src: ''
        // intersecting: false,
      }
    },
    methods: {
      setLoading() {
        setTimeout(() => {
          this.loading = false
        }, 100)
      }
    },
    mounted() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            // image.src = image.dataset.src;
            this.src = `${this.url}.jpg`;
            //remove any lazy classes that we add
            this.observer.unobserve(image);
          }
        })
      });

      this.observer.observe(this.$refs.image);
    },
  }
</script>
<template>
  <div v-if="loading" class="flex-1 h-96 animate-pulse bg-grey" ref="image"></div>
  <!-- :data-src="`${url}.jpg`" -->
  <img v-show="!loading" class="w-full aspect-auto rounded-md mb-10" :src="src" v-on:load="setLoading"/>
  <!-- <img class="w-full aspect-auto rounded mb-10 min-h-[400px]" :src="`${url}.jpg`" v-on:load="doThing" loading="lazy"/> -->
</template>

<!-- // TODO ? fade opacity from red to image -->

<!-- TODO images need to be size appropariatley to load such as logo, backgorund image -->
<!-- TODO lazy loading on logo -->