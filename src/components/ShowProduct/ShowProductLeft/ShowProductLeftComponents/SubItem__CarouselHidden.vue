<template>
  <div class="carousel_hidden">
    <b-carousel
      class="flex-item flex-item-1"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        v-for="image in image_and_slide.images"
        :key="image"
        :img-src="image"
      >
        <div class="slide">
          <div
            class="bg-image"
            :style="'backgroundImage: url(' + image + ')'"
          ></div>
        </div>
      </b-carousel-slide>
    </b-carousel>
    <div class="flex-item flex-item-2">
      <div class="title">
        {{ image_and_slide.describe }}
      </div>
      <div class="images">
        <div v-for="item in image_and_slide.images" :key="item.id">
          <div
            :style="'backgroundImage: url(' + item + ')'"
            class="bg-image img"
            @mouseover="changeImage(item)"
            @click="callHidden()"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_and_slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";
.slide {
  width: 52.25rem;
  height: 33.75rem;
}
.carousel_hidden {
  display: flex;
  width: 52.25rem;
  height: 33.75rem;
  background: #fff;
  z-index: 10000;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 10%;
  left: 25%;
}
.flex-item {
  flex-grow: 1;
  &-1 {
  }
}
</style>
