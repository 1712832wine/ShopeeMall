<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="0"
    controls
    indicators

    color="#000"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide class="slide" v-for="item in carou" :key="item.id">
      <right-slide :list_content="item.data" />
    </b-carousel-slide>
    <!-- <b-carousel-slide class="slide">
      <right-slide :list_content="list_content" />
    </b-carousel-slide>
    <b-carousel-slide class="slide">
      <right-slide :list_content="list_content" />
    </b-carousel-slide> -->
  </b-carousel>
</template>

<script>
//  controls
// indicators
import Slide from "./RightSlide.vue";
export default {
  props: {
    carou: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    "right-slide": Slide,
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.slide {
  height: 474px;
}
#carousel-1 {
  width: 100%;
}
</style>