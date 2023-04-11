<script>
  export default {
    props: {
      title: 'string',
      url: 'string',
      materials: 'string',
    }
  }
</script>
<template>
  <img class="w-full aspect-auto rounded mb-10" :src="`${url}.jpg`"/>
</template>