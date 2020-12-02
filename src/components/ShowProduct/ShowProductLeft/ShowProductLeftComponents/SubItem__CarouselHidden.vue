<template>
  <div class="d-flex carousel_hidden">
    <div class="size-100 ">
      <div class="big-image-top">
        <div
          class="bg-image"
          :style="'backgroundImage: url(' + this.current_img + ')'"
        >
          <!-- overlay -->
          <div
            v-if="overlay.overlay == 1"
            :style="
              'backgroundImage: url(' + image_and_slide.image_overlay + ')'
            "
            class="bg-image overlay"
          ></div>
          <!-- <div class="button button-prev" @click="handlePrev()" ref="prev">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div class="button button-next" @click="handleNext()" ref="next">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div> -->
        </div>
      </div>
    </div>

    <div class="flex-column nav-right">
      <div class="describe">
        {{ image_and_slide.describe }}
      </div>
      <div class="flex-wrap imgs">
        <!-- items -->
        <div
          class="slider__item pointer"
          v-for="(item, index) in image_and_slide.images"
          :key="item.id"
        >
          <div
            :style="'backgroundImage: url(' + item + ')'"
            class="bg-image img"
            @click="ChangeImg(item, index)"
          >
            <div class="bg-image hover"></div>
          </div>
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
    number_item: {
      type: Number,
      required: true,
    },
  },
  data: function() {
    return {
      current_img: this.image_and_slide.images[this.number_item],
      overlay: { overlay: this.number_item != 0 ? 0 : 1 },
    };
  },
  methods: {
    ChangeImg: function(item, index) {
      this.current_img = item;
      if (index == 0) this.$set(this.overlay, "overlay", 1);
      else this.$set(this.overlay, "overlay", 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";
.describe {
  overflow: hidden;
  font-size: 1.0625rem;
  color: #000;
  line-height: 1.125rem;
  height: 2.25rem;
  padding-right: 0.75rem;
  text-overflow: ellipsis;
}
body {
  height: 100vh;
  overflow-y: hidden;
}
.carousel_hidden {
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 52.25rem;
  height: 33.75rem;
  background: #fff;
  z-index: 10000;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 10%;
  left: 25%;
}
.slide {
  width: 52.25rem;
  height: 33.75rem;
}

.flex-item {
  flex-grow: 1;
}
.nav-right {
  min-width: 19.25rem;
  max-width: 19.25rem;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 2.5rem 0 1.875rem 0.75rem;
  font-size: 0.875rem;
}
.big-image-top {
  height: 100%;
  width: 100%;
}
.button {
  align-items: center;
  z-index: 200;
  width: 2.5rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  &-prev {
    left: 0.75rem;
    padding-right: 4px;
  }
}

.imgs {
  margin-top: 1.25rem;
  flex-grow: 1;
  justify-content: flex-start;
  align-content: flex-start;
}
.hover {
  background: transparent;
  width: 100%;
  height: 100%;
  &:hover {
    background: hsla(0, 0%, 100%, 0.26);
  }
}
</style>
