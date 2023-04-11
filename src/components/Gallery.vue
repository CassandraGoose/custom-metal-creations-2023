<script>
import GalleryItem from './GalleryItem.vue';

export default {
  data() {
    return {
      images: []
    }
  },
  async mounted() {
    const sheetId = import.meta.env.VITE_SHEET_ID
    let worksheetJson = await fetch(
      `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`
    )
      .then((res) => res.text())
      .then((text) => {
        return JSON.parse(text.substr(47).slice(0, -2))
      })
    this.images = this.formatData(worksheetJson.table.rows)
  },
  methods: {
    formatData(images) {
      const formattedData = images.map((artInfo) => ({
        title: artInfo.c[0].v,
        url: artInfo.c[1].v,
        materials: artInfo.c[2].v
      })).reverse()
      formattedData.pop();
      return formattedData
    }
  },
  components: {
    GalleryItem,
  }
}
</script>

<template>
  <section class="columns-3 gap-10">
    <li class="list-none" v-for="image in images">
      <GalleryItem :url="image.url" :title="image.title" :materials="image.materials" />
    </li>
  </section>
</template>
