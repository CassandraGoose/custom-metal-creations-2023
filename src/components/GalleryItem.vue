<script>
export default {
  props: {
    title: 'string',
    url: 'string',
    materials: 'string'
  },
  data() {
    return {
      loading: true,
      observer: null,
      src: ''
    };
  },
  methods: {
    setLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 100);
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          this.src = `${this.url}.jpg`;
          this.observer.unobserve(image);
        }
      });
    });
    this.observer.observe(this.$refs.image);
  }
};
</script>
<template>
  <div v-if="loading" class="flex-1 h-96 animate-pulse bg-grey" ref="image"></div>
  <img
    v-show="!loading"
    class="w-full aspect-auto rounded-md mb-10"
    :src="src"
    v-on:load="setLoading"
    :alt="`sculpture created with ${materials}`"
  />
</template>
