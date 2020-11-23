<template>
  <div id="topsearch-content__slide">
    <topsearch-content-item
      v-for="item in slide.items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import ContentItem from "./TopSearchContentItem.vue";
export default {
  components: {
    "topsearch-content-item": ContentItem
  },
  props: {
    slide: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#topsearch-content__slide {
  display: flex;
  flex-direction: row;
}
</style>
