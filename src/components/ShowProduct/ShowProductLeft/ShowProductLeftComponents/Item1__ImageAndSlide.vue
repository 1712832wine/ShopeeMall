<template>
  <div class="image-and-slider">
    <!-- big image on the top -->
    <slot name="big-image">
      <div class="big-image-top">
        <div
          class="bg-image"
          :style="'backgroundImage: url(' + this.current_img + ')'"
        ></div>
      </div>
    </slot>
    <!-- slot for title in subitem__carousel hidden -->
    <!-- it didn't show in detail pages -->

    <slot name="mytitle"></slot>

    <!-- slider -->
    <slot name="slider">
      <img-slider
        :image_and_slide="image_and_slide"
        @imgwaschanged="current_img = $event"
        @hiddenchanged="hidden_carousel = $event"
      />
    </slot>
  </div>
</template>

<script>
import ImageSlider from "./SubItem__Slider.vue";

export default {
  data: function() {
    return {
      current_img: this.image_and_slide.image,
      hidden_carousel: 0
    };
  },

  components: {
    "img-slider": ImageSlider
  },
  props: {
    image_and_slide: {
      type: Object,
      required: true
    }
  },
  watch: {
    hidden_carousel: function() {
      this.$emit("hidden_carousel", this.hidden_carousel);
      return this.hidden_carousel + 1;
    }
  },
  methods: {
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
    }
  }
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
