<template>
  <div id="showproduct__left">
    <image-and-slide
      :image_and_slide="left.image_and_slide"
      @hidden_carousel="hidden_carousel = $event"
    />
    <share-bottom :share="left.share" />
    <!-- carousel hidden -->
    <carousel-hidden
      v-if="hidden_carousel"
      :image_and_slide="left.image_and_slide"
    />
  </div>
</template>

<script>
import ImageAndSlide from "./ShowProductLeftComponents/Item1__ImageAndSlide.vue";
import Share from "./ShowProductLeftComponents/Item3__Share.vue";
import CarouselHidden from "./ShowProductLeftComponents/SubItem__CarouselHidden.vue";
export default {
  props: {
    left: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return { hidden_carousel: 0 };
  },
  components: {
    "image-and-slide": ImageAndSlide,
    "share-bottom": Share,
    "carousel-hidden": CarouselHidden,
  },
};
</script>

<style lang="scss" scoped>
#showproduct__left {
  // width: 450px;
  padding: 15px;
}
</style>
