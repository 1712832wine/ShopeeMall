<template>
  <div id="showproduct__left">
    <image-and-slide :image_and_slide="left.image_and_slide" />
    <share-bottom />
  </div>
</template>

<script>
import ImageAndSlide from "./ShowProductLeftComponents/Item1__ImageAndSlide.vue";
import Share from "./ShowProductLeftComponents/Item3__Share.vue";
export default {
  props: {
    left: {
      type: Object,
      required: true,
    },
  },
  components: {
    "image-and-slide": ImageAndSlide,
    "share-bottom": Share,
  },
};
</script>

<style lang="scss" scoped>
#showproduct__left {
  // width: 450px;
  padding: 15px;
}
</style>
