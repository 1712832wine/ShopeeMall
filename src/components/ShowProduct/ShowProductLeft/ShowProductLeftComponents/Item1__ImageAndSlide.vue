<template>
  <div class="image-and-slider">
    <div class="big-image-top pointer">
      <div
        class="bg-image"
        :style="'backgroundImage: url(' + this.current_img + ')'"
        @click="CallHidden(0)"
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
      @callhidden="CallHidden($event)"
    />
  </div>
</template>

<script>
import ImageSlider from "./SubItem__Slider.vue";

export default {
  data: function() {
    return {
      overlay: { overlay: 1 },
      current_img_index: 0,
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
      console.log("callhidden__image", e);
      this.$emit("number_item", e);
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
