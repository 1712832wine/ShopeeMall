<template>
  <div id="topsearch__content">
    <topsearch-content-item
      v-for="item in bottom"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import TopSearchContentItem from "./TopSearchContentItem.vue";
export default {
  components: {
    "topsearch-content-item": TopSearchContentItem,
  },
  props: { bottom: { type: Array, required: true } },
};
</script>

<style lang="scss" scoped>
#topsearch__content {
  display: flex;
  flex-grow: 1 1 1;
  margin: auto;
  overflow: hidden;
}
</style>
