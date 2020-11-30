<template>
  <div>
    <image-and-slide :image_and_slide="image_and_slide" class="carousel_hidden">
      <template slot="big-image" class="flex-item"> </template>

      <!-- <div class="flex-column flex-item"> -->
      <div class="flex-collumn right">
        <slot name="mytitle" class="title"><p>ahihi</p></slot>
        <template slot="slider" class="slider"> </template>
      </div>

      <!-- </div> -->
    </image-and-slide>
  </div>
</template>

<script>
import ImageAndSlide from "./Item1__ImageAndSlide.vue";
export default {
  components: {
    "image-and-slide": ImageAndSlide
  },
  props: {
    image_and_slide: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";
.carousel_hidden {
  display: flex !important;
  width: 52.25rem;
  height: 33.75rem;
  background: #fff;
  z-index: 10000;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 10%;
  left: 25%;
  padding: 15px 0 15px 15px;
}
.slide {
  width: 52.25rem;
  height: 33.75rem;
}

.flex-item {
  flex-grow: 1;
}
</style>
