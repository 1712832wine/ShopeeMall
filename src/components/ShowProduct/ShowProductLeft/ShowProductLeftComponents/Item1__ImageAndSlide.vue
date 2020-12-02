<template>
  <div class="image-and-slider">
    <div class="big-image-top pointer">
      <div
        class="bg-image"
        :style="'backgroundImage: url(' + this.current_img + ')'"
      >
        <!-- overlay -->
        <div
          v-if="overlay.overlay == 1"
          :style="'backgroundImage: url(' + image_and_slide.image_overlay + ')'"
          class="bg-image overlay"
        ></div>
      </div>
    </div>

    <!-- slider -->
    <img-slider
      :image_and_slide="image_and_slide"
      @overlay="changeOverlay($event)"
      @imgwaschanged="ChangeImg($event)"
      @number_item="CallHidden($event)"
    />
  </div>
</template>

<script>
import ImageSlider from "./SubItem__Slider.vue";

export default {
  data: function() {
    return {
      overlay: { overlay: 1 },
      current_img: this.image_and_slide.images[0],
    };
  },

  components: {
    "img-slider": ImageSlider,
  },
  props: {
    image_and_slide: {
      type: Object,
      required: true,
    },
  },

  methods: {
    CallHidden: function(e) {
      this.$emit("number_item", e);
      return this.number_item + 1;
    },
    ChangeImg: function(item) {
      this.current_img = item;
    },

    changeImg: function(e) {
      this.current_img = e;
    },
    changeOverlay: function(e) {
      this.$set(this.overlay, "overlay", e);
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
