<script>
import GalleryItem from './GalleryItem.vue'

export default {
  data() {
    return {
      imageSet1: [],
      imageSet2: [],
      imageSet3: []
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
    const organizedImages = this.getThirds(this.formatData(worksheetJson.table.rows));
    this.imageSet1 = organizedImages.first;
    this.imageSet2 = organizedImages.second;
    this.imageSet3 = organizedImages.third;
    console.log(this.imageSet1);
  },
  methods: {
    formatData(images) {
      const formattedData = images
        .map((artInfo) => ({
          title: artInfo.c[0].v,
          url: artInfo.c[1].v,
          materials: artInfo.c[2].v
        }))
        .reverse()
      formattedData.pop()
      return formattedData
    },
    getThirds(images) {
      const thirds = Math.floor(images.length / 3)
      return {
        first: images.slice(0, thirds),
        second: images.slice(thirds, thirds + thirds),
        third: images.slice(thirds + thirds)
      }
    }
  },
  components: {
    GalleryItem
  }
}
</script>

<template>
  <!-- <section class="columns-3 gap-10 my-20"> -->
  <section class="grid grid-cols-3 gap-8 mt-16">
    <ul>
      <li class="list-none flex" v-for="image in imageSet1">
        <GalleryItem :url="image.url" :title="image.title" :materials="image.materials" />
      </li>
    </ul>
    <ul>
      <li class="list-none" v-for="image in imageSet2">
        <GalleryItem :url="image.url" :title="image.title" :materials="image.materials" />
      </li>
    </ul>
    <ul>
      <li class="list-none" v-for="image in imageSet3">
        <GalleryItem :url="image.url" :title="image.title" :materials="image.materials" />
      </li>
    </ul>
  </section>
</template>
