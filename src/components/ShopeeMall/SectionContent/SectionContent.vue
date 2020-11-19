<template>
  <div class="section_content">
    <carousel />
    <content-right :list_content="bottom.list_content"/>
  </div>
</template>

<script>
import Carousel from "./SectionContentCarousel.vue";
import ContentRight from "./SectionContentRight.vue";
export default {
  props: {
    bottom: {
      type: Object,
      required: true,
    },
  },
  components: {
    "carousel": Carousel,
    "content-right": ContentRight,
  },
};
</script>

<style lang="scss" scoped>
.section_content{
  display: flex;

  flex-direction: row;
}
</style>