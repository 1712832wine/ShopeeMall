<template>
  <div id="topsearch__content">
    <content-container
      :content="content"
      :size="400"
      :distance="3"
      :item_per_slide="3"
      :seemore="0"
      class="shopeemall__carousel-right"
    >
      <item-of-slider
        v-for="item in content.items"
        :key="item.id"
        :item="item"
        class="slide"
        slot="items"
      />
      <div slot="seemore"></div>
    </content-container>
  </div>
</template>

<script>
import Container from "../TopSales/TopSalesContent.vue";
import ItemOfSlider from "./ItemSub__TopSearchContentItem.vue";
export default {
  components: {
    "item-of-slider": ItemOfSlider,
    "content-container": Container
  },
  props: { content: { type: Object, required: true } }
};
</script>

<style lang="scss" scoped>
.slide {
  height: 324px;
}
</style>
