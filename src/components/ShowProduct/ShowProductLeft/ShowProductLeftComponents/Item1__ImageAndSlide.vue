<template>
  <div class="image-and-slider">
    <!-- big image on the top -->
    <div class="big-image-top">
      <div
        class="bg-image"
        :style="'backgroundImage: url(' + this.current_img + ')'"
      ></div>
    </div>
    <!-- slider -->
    <img-slider
      :image_and_slide="image_and_slide"
      @imgwaschanged="current_img = $event"
    />
    <!-- carousel hidden -->
    <carousel-hidden
      v-if="hidden_carousel"
      :image_and_slide="image_and_slide"
    />
  </div>
</template>

<script>
import ImageSlider from "./SubItem__Slider.vue";
import CarouselHidden from "./SubItem__CarouselHidden.vue";
export default {
  data: function() {
    return {
      current_img: this.image_and_slide.image,
    };
  },
  components: {
    "carousel-hidden": CarouselHidden,
    "img-slider": ImageSlider,
  },
  props: {
    image_and_slide: {
      type: Object,
      required: true,
    },
  },

  methods: {
    callHidden: function() {
      this.hidden_carousel = 1;
    },
    changeImage: function(item) {
      this.current_img = item;
    },
    handlePrev: function() {
      if (this.currentslide > 0) {
        this.currentslide -= 1;
        this.translate -= this.size;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
      }
    },
    handleNext: function() {
      if (this.currentslide < this.number_slide - 1) {
        this.currentslide += 1;
        this.translate += this.size;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";

.big-image-top {
  height: $size-component;
  width: $size-component;
}
//container of slider
</style>
